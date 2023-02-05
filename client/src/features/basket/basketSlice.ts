import { Basket } from './../../app/models/basket';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import agent from '../../app/api/agent';

interface BasketState {
    basket: Basket | null;
    status: string;
}

const initialState: BasketState = {
    basket: null,
    status: 'idle'
}

// thunk is used to create async requests
export const addBasketItemAync = createAsyncThunk<Basket, {productId: number, quantity?: number}>(
    'basket/addBasketItemAsync',
   async ({productId, quantity = 1}) => {
        try {
            return await agent.Basket.addItem(productId, quantity);
        } catch (error) {
            console.log(error);
        }
   }
)

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        setBasket: (state, action) => {
            state.basket = action.payload
        },

        removeItem: (state, action) => {
            const {productId, quantity} = action.payload;
            
            const itemIndex = state.basket?.items.findIndex(i => i.productId === productId);

            if (itemIndex === -1 || itemIndex === undefined) return;
            
            state.basket!.items[itemIndex].quantity -= quantity;
           
            if (state.basket!.items[itemIndex].quantity === 0) 
                state.basket!.items.splice(itemIndex, 1);
                
        }
    },
    // extra for the global actionscreators addBasketItemAync with thunk
    extraReducers: (builder => {
        builder.addCase(addBasketItemAync.pending, (state, action) => {
            console.log(action);
            state.status = 'pendingAddItem' + action.meta.arg.productId;
        });
        builder.addCase(addBasketItemAync.fulfilled, (state, action) => {
            console.log(action);
            state.basket = action.payload;
            state.status = 'idle';
        });
        builder.addCase(addBasketItemAync.rejected, (state) => {
            state.status = 'idle';
        });
    })
})

export const {setBasket, removeItem} = basketSlice.actions;