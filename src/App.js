
import './App.css';
import ExpenseInputForm from './components/ExpenseInputForm';
import BudgetWire from './components/BudgetTrack';
import FinanceGoal from './components/FinanceGoal';
import SavingGoal from './components/SavingGoal';
import Navbar from './components/NavBar';
import ExpenseForm from './components/ExpenseForm'
import { ChakraProvider } from '@chakra-ui/react'
import Pay from './components/Pay';
import Message from './components/Message';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Test from './components/Test';
import Home from './components/Home';
import LoginPage from './components/LoginPage';
import Bar from './components/Bar';
import { useState } from 'react';

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="SignIn" element={<LoginPage />} />
            <Route path="/Budget" element={<BudgetWire />} />
            <Route path="Pay" element={<Pay/>} />
            <Route path="Goal" element={<FinanceGoal />} />
            <Route path="Expense" element={<ExpenseForm />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}
export default App;




