import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderDetails: [],
    cartItem: [],
    totalCart: 0,
    cartQuantity: 0,
    price: 0,
    loading: false,
    onCartStatus: false,
    onInfoStatus: false,
    onShippingStatus: false,
    onPaymentsStatus: false,
    error: null
}


const productReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        onHandleAddCart(state, action) {
            const itemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cartItem[itemIndex].cartQuantity += 1;
                state.cartItem[itemIndex].totalPrice = state.cartItem[itemIndex].price * state.cartItem[itemIndex].cartQuantity;
            } else {

                const cartProducts = { ...action.payload, cartQuantity: 1, totalPrice: action.payload.price };
                state.cartItem.push(cartProducts);
            }
        },
        onHandleRemoveCart(state, action) {
            const cartItemIndex = state.cartItem.findIndex((item) => item.id === action.payload.id);
            if (state.cartItem[cartItemIndex].cartQuantity > 1) {
                state.cartItem[cartItemIndex].cartQuantity -= 1;
                state.cartItem[cartItemIndex].totalPrice = state.cartItem[cartItemIndex].price * state.cartItem[cartItemIndex].cartQuantity;
            } else if (state.cartItem[cartItemIndex].cartQuantity === 1) {
                const removeCartItem = state.cartItem.filter((data) =>
                    data.id !== action.payload.id
                )
                state.cartItem = removeCartItem;
            }
        },
        onRemoveCart(state, action) {
            state.cartItem = [];
            state.orderDetails = [];
            state.onCartStatus = false;
            state.onInfoStatus = false;
            state.onShippingStatus = false;
            state.onPaymentsStatus = false;
        },
        onCartStatu(state, action) {
            state.onCartStatus = true;
        },
        onInfoStatu(state, action) {
            state.onInfoStatus = true;
        },
        onShipingStatu(state, action) {
            state.onShippingStatus = true;
        },
        onAddOrderDetail(state, action) {
            state.onPaymentsStatus = true;
            state.orderDetails = action.payload;
        }

    }
})

export const { onHandleFilter, onHandleAddCart, onHandleRemoveCart, onCartStatu, onInfoStatu,
    onShipingStatu, onAddOrderDetail,onRemoveCart } = productReducer.actions;

export default productReducer.reducer;

export const handleAddCart = (item) => {
    return (dispatch) => {
        dispatch(onHandleAddCart(item));

        return Promise.resolve();
    };
};

export const handleInfoStatus = () => {
    return (dispatch) => {
        dispatch(onInfoStatu());

        return Promise.resolve();
    };
};

export const handleCartStatus = () => {
    return (dispatch) => {
        dispatch(onCartStatu());

        return Promise.resolve();
    };
};

export const handleShipingStatus = () => {
    return (dispatch) => {
        dispatch(onShipingStatu());

        return Promise.resolve();
    };
};

export const handleRemoveCart = () => {
    return (dispatch) => {
        dispatch(onRemoveCart());

        return Promise.resolve();
    };
};

export const handleOrderDetails = (item) => {
    return (dispatch) => {
        dispatch(onAddOrderDetail(item));

        return Promise.resolve();
    };
};