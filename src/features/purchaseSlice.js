import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
    { id:nanoid,
        // isSuccessful: false, // Initial state of the slice
        message:''
      }
        
]

    const purchaseSlice = createSlice({
        name: 'purchase',
        initialState,
        reducers: {
            setPaymentSuccess:  (state, action) => {
                state.push(action.payload);
              },
            resetPayment: (state) => {
              state.isSuccessful = false; // Another action to reset the state
            },
          },
      });
      

export const { setPaymentSuccess, resetPayment } = purchaseSlice.actions;
export default purchaseSlice.reducer;

