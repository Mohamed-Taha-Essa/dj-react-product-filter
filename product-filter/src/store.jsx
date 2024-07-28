import { create } from 'zustand';

export const productStore = create((set) => ({
    products: [],
    categories: [],

    setProducts: (products) => set({ products }),
    setCategories: (categories) => set({ categories }),
}));
