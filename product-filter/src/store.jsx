import { create } from 'zustand';

const productStore = create((set) => ({
    products: [],
    categories: [],

    setProducts: (products) => set({ products }),
    setCategories: (categories) => set({ categories }),
}));
