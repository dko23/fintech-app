// import React from 'react'
// import { ResponsivePie } from '@nivo/pie'
// import { useSelector } from 'react-redux';


// function ExpenseChart(){
//     const expenses = useSelector((state) => state.expenses);

//     const chartData = expenses.reduce((acc, expense) => {
//       const existingCategory = acc.find((item) => item.id === expense.category);
    
//       if (existingCategory) {
//         existingCategory.value += expense.amount;
//       } else {
//         acc.push({
//           id: expense.category,
//           label: expense.category,
//           value: expense.amount, // Use the amount property to determine the size of the slice
//           color: expense.color // You can include the color property here too
//         });
//       }
    
//       return acc;
//     }, []);
//   return (
//       <div>
//           <>
//           <ResponsivePie
//       data={chartData}
//       margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
//       innerRadius={0.5}
//       padAngle={0.7}
//       cornerRadius={3}
//       activeOuterRadiusOffset={8}
//       borderWidth={1}
//       borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
//       arcLinkLabelsSkipAngle={10}
//       arcLinkLabelsTextColor="#333333"
//       arcLinkLabelsThickness={2}
//       arcLinkLabelsColor={{ from: "color" }}
//       arcLabelsSkipAngle={10}
//       arcLabelsTextColor={{ from: "color", modifiers: [["darker", 2]] }}
//     />
//       </>
//     </div>
//   )
// }

// export default ExpenseChart
