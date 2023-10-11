import { createSlice } from '@reduxjs/toolkit'

export const allProductsSlice = createSlice({
    name: "AllProducts",
    initialState: {
        numberCart: 0,
        Carts: [],
        allProducts: [],
        selectedCard: "",
        address: "",
        product:{}
    },
    reducers: {
       disSelecte: (state, action) => {
            state.selectedCard = action.payload;
        },
        moreInfo:(state,action)=>{
            state.product=action.payload

        },
        loadAllProducts: (state, action) => {
            state.allProducts = action.payload;
        },
        addToCart: (state, action) => {
            if (state.numberCart == 0) {
                let cart = {
                    id: action.payload.id,
                    quantity: 1,
                    title: action.payload.title,
                    images: action.payload.images,
                    price: action.payload.price
                }
                state.Carts.push(cart);
            }
            else {
                let check = false;
                state.Carts.map((item, key) => {
                    if (item.id == action.payload.id) {
                        state.Carts[key].quantity++;
                        check = true;
                    }
                });
                if (!check) {
                    let _cart = {
                        id: action.payload.id,
                        quantity: 1,
                        title: action.payload.title,
                        images: action.payload.images,
                        price: action.payload.price
                    }
                    state.Carts.push(_cart);
                }
            }
        },
        incCartCount: (state) => {
            
            state.numberCart += 1;
        },
        increaseQuantity: (state, action) => {
            state.numberCart++
            state.Carts[action.payload].quantity++;

        },
        decreaseQuantity:(state, action) =>{
            let quantity = state.Carts[action.payload].quantity;
            if(quantity>1){
                state.numberCart--;
                state.Carts[action.payload].quantity--;
            }

        },
        deleteCart: (state ,action)=>{
            let quantity_ = state.Carts[action.payload].quantity;
            state.numberCart = state.numberCart - quantity_
            state.Carts = state.Carts.filter(items => items.id != state.Carts[action.payload].id)

        },
        addAddress: (state, action) => {
            state.address = action.payload;
        }
    }
});

export const { isSelected, loadAllProducts, addToCart, incCartCount,increaseQuantity,decreaseQuantity,deleteCart, addAddress,moreInfo } = allProductsSlice.actions;

export default allProductsSlice.reducer;