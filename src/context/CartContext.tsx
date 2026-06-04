"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ProductConfig } from "@/types/product";
import { trackEvent } from "@/lib/tracking";

export type CartLine = {
  productId: string;
  sku: string;
  slug: string;
  name: string;
  quantity: number;
  price: number;
  offerId: string;
};

type CartContextValue = {
  lines: CartLine[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addOffer: (product: ProductConfig, offerId: string) => void;
  removeLine: (sku: string, offerId: string) => void;
  clearCart: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "jouri-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw) as CartLine[]);
    } catch {
      /* ignore */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const addOffer = useCallback((product: ProductConfig, offerId: string) => {
    const offer = product.offers.find((o) => o.id === offerId);
    if (!offer) return;
    setLines((prev) => {
      const filtered = prev.filter(
        (l) => !(l.slug === product.slug && l.offerId === offerId),
      );
      return [
        ...filtered,
        {
          productId: product.id,
          sku: product.sku,
          slug: product.slug,
          name: product.name,
          quantity: offer.quantity,
          price: offer.price,
          offerId: offer.id,
        },
      ];
    });
    trackEvent("AddToCart", {
      content_ids: product.id,
      content_name: product.name,
      value: offer.price,
      currency: "AED",
      quantity: offer.quantity,
    });
    setIsOpen(true);
  }, []);

  const removeLine = useCallback((sku: string, offerId: string) => {
    setLines((prev) => prev.filter((l) => !(l.sku === sku && l.offerId === offerId)));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const total = useMemo(
    () => lines.reduce((sum, l) => sum + l.price, 0),
    [lines],
  );

  const value = useMemo(
    () => ({
      lines,
      isOpen,
      openCart,
      closeCart,
      addOffer,
      removeLine,
      clearCart,
      total,
    }),
    [lines, isOpen, openCart, closeCart, addOffer, removeLine, clearCart, total],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
