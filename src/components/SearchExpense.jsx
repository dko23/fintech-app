// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';

// function SearchExpense() {
//     const [searchExpense, setExpense] = useState('');
//     const expenses = useSelector((state) => state.expenses);
    
    
//     const handleInputChange = (event) => {
//         const value = event.target.value;
//         setExpense(value);

//         const handleSearch = (searchExpense) => {
//             expenses.filter((expense) =>
//                 expense.category.toLowerCase().includes(searchExpense.toLowerCase())
//             );
//         };

//     };


//     return (
//         <div>
//             <input
//                 type="text"
//                 placeholder="Search Movie"
//                 value={searchExpense}
//                 onChange={handleInputChange}
//                 className='search-expense'
//             />

//         </div>
//     )
// }

// export default SearchExpense


