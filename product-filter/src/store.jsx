import { create } from 'zustand';

export const productStore = create((set) => ({
    products: [],
    categories: [],
    filters:{
        categories:[],
        pricRange :[0,1000]
    },

    setProducts: (products) => set({ products }),
    setCategories: (categories) => set({ categories }),
}));
