import { create } from 'zustand';

export const productStore = create((set) => ({
    products: [],
    categories: [],
    filters:{
        categories:[],
        priceRange :[0,3000]
    },

    setProducts: (products) => set({ products }),
    setCategories: (categories) => set({ categories }),
    setFilters :(filters) => set({filters})
}));
