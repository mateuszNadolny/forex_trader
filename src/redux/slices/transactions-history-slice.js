import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const transactionHistorySlice = createSlice({
  name: 'transactionHistory',
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addTransaction } = transactionHistorySlice.actions;

export default transactionHistorySlice.reducer;

// future component code
// import { useSelector } from 'react-redux';

// function TransactionHistory() {
//     const transactions = useSelector((state) => state.transactionHistory);

//     return (
//       <div>
//         <h2>Transaction History</h2>
//         <ul>
//           {transactions.map((transaction) => (
//             <li key={transaction.id}>
//               {/* render transaction details */}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
