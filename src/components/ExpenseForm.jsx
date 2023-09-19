import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense, getExpense } from '../features/ExpenseSlice';
import { ResponsivePie } from '@nivo/pie'
import { nanoid } from '@reduxjs/toolkit';
import SearchExpense from './SearchExpense';
import { DeleteIcon, EditIcon, } from '@chakra-ui/icons'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import EditExpense from './EditExpense';
import axios from 'axios';// communicate with the server
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { motion } from "framer-motion"
import Bar from './Bar';




function ExpenseForm() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  console.log(expenses)


  const chartData = expenses.reduce((acc, expense) => {
    const existingCategory = acc.find((item) => item.id === expense.category);
  
    if (existingCategory) {
      existingCategory.value += expense.amount;
    } else {
      acc.push({
        id: expense.category,
        label: expense.category,
        value: expense.amount, // Use the amount property to determine the size of the slice
        color: expense.color // You can include the color property here too
      });
    }
  
    return acc;
  }, []);
  
  

  // const removeExpense = (id) => {
  //   dispatch(deleteExpense(id));
  // };




  const fetchData = async () => {
    try {
      // Make a GET request to your Node.js server to fetch data from MongoDB
      const response = await axios.get('http://localhost:8000/getexpense');
      // dispatch(setData(response.data)); // Dispatch the setData action to set the fetched data in Redux state
      dispatch(getExpense(response.data))

    } catch (error) {
      // Handle any error that occurred during the request
      console.error('Error fetching data from server', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const removeExpense = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/deleteexpense/${id}`);
      dispatch(deleteExpense(id));
    } catch (error) {
      // Handle any error that occurred during the request
    }
  };


  return (
    <>
      <Bar/>
      <motion.div  className='container-fluid' initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}>
    <div className='row'>
      <div className='pie-chart' style={{ width: '100%', height: '550px' }}>
        {/* Pie chart */}
        <ResponsivePie
          data={chartData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 5]] }}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor='black'
          arcLinkLabelsThickness={10}
          arcLinkLabelsColor={{ from: 'colors' }}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor={{ from: 'black', modifiers: [['darker', 36]] }}
          legends={[
            {
              anchor: 'bottom',
              direction: 'row',
              translateY: 56,
              itemWidth: 100,
              itemHeight: 18,
              itemTextColor: 'black',
              symbolSize: 18,
              symbolShape: 'circle',
            },
          ]}
          enableSlicesLabels // Display labels on the pie slices
          sliceLabel={(slice) => `${slice.id}: ${slice.value}`} // Customize slice labels
        />
      </div>
      <div className='col-md-5 expense-history'>
        {/* Expense history table */}
          <TableContainer>
          <Table variant='simple'>
            <TableCaption>Expense History</TableCaption>
            <Thead>
              <Tr>
                <Th>Category</Th>
                <Th>Amount</Th>
                <Th>Date</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {expenses.map((item) => (
                <Tr key={item.id}>
                  <Td>{item.category}</Td>
                  <Td>Amount: &#8373;{item.amount}</Td>
                  <Td>{item.date}</Td>
                  <Td>
                    <DeleteIcon
                      boxSize={6}
                      type='submit'
                      onClick={() => removeExpense(item.id)}
                      color='purple.500'
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cba9"  fill-opacity="1" d="M0,96L13.3,90.7C26.7,85,53,75,80,85.3C106.7,96,133,128,160,133.3C186.7,139,213,117,240,106.7C266.7,96,293,96,320,112C346.7,128,373,160,400,186.7C426.7,213,453,235,480,224C506.7,213,533,171,560,133.3C586.7,96,613,64,640,80C666.7,96,693,160,720,202.7C746.7,245,773,267,800,250.7C826.7,235,853,181,880,170.7C906.7,160,933,192,960,218.7C986.7,245,1013,267,1040,250.7C1066.7,235,1093,181,1120,138.7C1146.7,96,1173,64,1200,80C1226.7,96,1253,160,1280,192C1306.7,224,1333,224,1360,208C1386.7,192,1413,160,1427,144L1440,128L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z" style={{ marginTop: '-250px' }}></path></svg>
  </motion.div>
    </>
  
   
  )
}

export default ExpenseForm

// <SimpleGrid columns={2} spacing={10}>
//   <Box bg='tomato' height='80px'>
//   <Card align='center' className='expense-card'>
// <CardHeader>Expense History</CardHeader>
// <CardBody>
// {expenses.map((item) => (
//   <div key={item.id}>
//     <p>category:{item.category}</p>
//     <p>amount: &#8373;{item.amount}</p>
//     <p>Date:{item.date}</p>
//         <div className='buttons'>
//           <div className='edit-button'>
//           <DeleteIcon boxSize={6} type='submit' onClick={() => removeExpense(item.id)} color="red.500" />
//           </div>
//         </div>
//       </div>
//   ))}
// </CardBody>
//               </Card >
//   </Box>
//   <Box bg='tomato' height='80px'>
//   <div className='col-md-8 pie-chart'>
//             <ResponsivePie
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
//             </div>
//   </Box>
// </SimpleGrid>



