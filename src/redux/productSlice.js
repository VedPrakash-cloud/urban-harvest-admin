import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items:[
        { id: 1, name: "Organic Tomatoes 1kg", category: "Fresh Produce", price: 80, status: "Available" },
        { id: 2, name: "Fresh Almond Milk 1L", category: "Dairy Alternatives", price: 250, status: "Available" },
        { id: 3, name: "Whole Grain Bread", category: "Bakery", price: 65, status: "Out of Stock" },
        { id: 4, name: "Organic Honey 500g", category: "Pantry", price: 320, status: "Available" },
        { id: 5, name: "Fresh Salmon Fillet", category: "Meat & Seafood", price: 850, status: "Out of Stock" }
    ]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addProduct: (state, action) =>{
            state.items.unshift(action.payload);
        }
    }
});

export const {addProduct} =  productSlice.actions;
export default productSlice.reducer;