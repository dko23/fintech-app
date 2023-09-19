import React from 'react';
import { PaystackButton } from 'react-paystack';
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { setPaymentSuccess } from '../features/purchaseSlice';
import { useNavigate } from 'react-router-dom';
import { Input } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import billspay from '../images/bills-pay.jpg'
import amelia from '../images/amilia.jpg'
import GWC from '../images/GWC.jpg'
import electric from '../images/electric.jpg'
import mobile from '../images/mobile-pay.jpg'
import axios from 'axios';// communicate with the server
import ReceiptButton from './receipt_button'; // Import the receipt_button component
import { motion } from "framer-motion"
import Bar from './Bar';
import Swal from 'sweetalert2'

const { v4: uuidv4 } = require('uuid');


function Pay() {
    const publicKey = 'pk_test_b5991c72cb60fad0690c92203c9d72faeb972c7b';
    const purchase = useSelector((state) => state.purchase);

    const [amount, setAmount] = useState(0);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [meter, setMeter] = useState('');
 
    const [amount2, setAmount2] = useState(0);
    const [mail, setMail] = useState('');
    const [name2, setName2] = useState('');
    const [meter2, setMeter2] = useState('');
    const [account2, setAccount2] = useState('');
    
    const onNameChanged = (e) => setName(e.target.value);
    const onAmountChanged = (e) => setAmount(e.target.value);
    const onEmailChanged = (e) => setEmail(e.target.value);
    const onMeterChanged = (e) => setMeter(e.target.value);

    
    const onNameChanged2 = (e) => setName2(e.target.value);
    const onAccountChanged2 = (e) => setAccount2(e.target.value);
    const onAmountChanged2 = (e) => setAmount2(e.target.value);
    const onMailChanged = (e) => setMail(e.target.value);
    const onMeterChanged2 = (e) => setMeter2(e.target.value);

    
    const dispatch = useDispatch();
    const navigate = useNavigate();



    function generateDummyToken() {
        const token = uuidv4(); // Generate a UUID version 4
        return `${token}`;
    }

    const currentTime = new Date();
    console.log(currentTime);
    

    const dummyToken = generateDummyToken();
    console.log(dummyToken);


    const componentProps = {
        currency: 'GHS',
        amount: amount * 100, // Converting to kobo or cents, depending on your currency
        email,
        meter,
        publicKey,
        text: 'Pay Now',
        dummyToken,

        onSuccess: () => {
            Swal.fire(
                {
                   title:'Check your receipts mate',
                   icon: 'info'}
              )
            dispatch(
                setPaymentSuccess({
                    messages: `Thank you ${name}! Your ECG payment of ${amount} cedis for meter id :${meter}. Your Recharge token:${dummyToken} on ${currentTime}`
                })
            ); // Dispatch the action to set payment success
            // navigate('/message');
            
        },
        onClose: () => alert("Wait! Don't leave :("),
    };

    const componentWaterProps = {
        currency: 'GHS',
        amount: amount2 * 100, // Converting to kobo or cents, depending on your currency
        meter:meter2,
        name:name2,
        email:mail,
        publicKey,
        text: 'Pay Now',
        dummyToken,
    
        onSuccess: () => {
            Swal.fire(
                {
                title:'Check your receipts mate',
               icon: 'info'}
              )
            dispatch(
                setPaymentSuccess({
                    messages: `Thank you Customer Number;${account2} for purchasing ${amount2} cedis of water. Your Refence Number is ${dummyToken} on ${currentTime}`,
                })
            ); // Dispatch the action to set payment success
        
        },
        onClose: () => alert("Wait! Don't leave :("),
    }

  return (
      <>
          <Bar/>
          <motion.div  className='container' initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}>
          <div className="row electricity">
              <div className="col-md-6 bills">
              <div className='brand'>
                          <h1 className="font-weight-bold">Pay your electricity bill here</h1>
                          <img src={electric} className='logo' />
                 </div>
            <div>
<div>
    <Input placeholder='name' value={name} type='text' onChange={onNameChanged}variant='filled'/>
</div>
<div>
    <Input placeholder='email' value={email} type='text' onChange={onEmailChanged} variant='filled' />
</div>
<div>
    <Input placeholder='meterID' value={meter} type='text' onChange={onMeterChanged} variant='filled'  />
    </div>
    <div>
    <Input placeholder='amount' value={amount} type='number' onChange={onAmountChanged} variant='filled'/>
</div>
<div>
<Button colorScheme='teal' size='md' type='submit'>
<PaystackButton className="paystack-button" {...componentProps} />
                              </Button>
                              <ReceiptButton />

                                 
</div>
                      </div>
                    
                  </div>
                  <div className="col-md-6 ">
                          
                          <p className='energy-management'>"One-Click Payment Magic!"
                          Say goodbye to the old ways of payment. With our revolutionary one-click payment feature, buying has never been this easy. Your time is valuable, so let us handle the checkout process for you..</p>
                          <img src={mobile} className="img-fluid pic" alt="Picture 1" />
                  </div>
                  </div>

  <div className="row water">
<div className="col-md-6 ">
                          <h3 className="font-weight-bold">Pay with Card or MoMo</h3>
                          <img src={amelia} className="img-fluid pic" alt="Picture 1" />                     
</div>

    <div className="col-md-6 bills">
        

        <div className='brand'>
            <h1 className="font-weight-bold">Pay your Water bill here</h1>
            <img src={GWC} className='logo' />
   </div>
<div>
<div>
<Input placeholder='name' value={name2} type='text' onChange={onNameChanged2} variant='filled' />
</div>
<div>
<Input placeholder='email' value={mail} type='text' onChange={onMailChanged} variant='filled'/>
</div>
<div>
 <Input placeholder='Customer Number' value={account2} type='text' onChange={onAccountChanged2} variant='filled' />               
</div>
<div>
<Input placeholder='meterID' value={meter2} type='text' onChange={onMeterChanged2} variant='filled'  />
</div>
<div>
<Input placeholder='amount' value={amount2} type='number' onChange={onAmountChanged2} variant='filled' />
</div>
<div>
<Button colorScheme='teal' size='md' type='submit'>
<PaystackButton className="paystack-button" {...componentWaterProps} />
</Button>
</div>
</div>
                      </div>
                      
            </div>
           
              </motion.div>    
      </>
  );
}

export default Pay;




// const createMessage = async () => {
//     try {
//       const response = await axios.post('http://localhost:8000/postmessage', {
//       purchase
//       });
  
//       const newSave = response.data; // Extract the newly created bill from the response
  
//       // Dispatch the action to update Redux store with the newly created bill
//       dispatch(
//         setPaymentSuccess({
//             messages: `Thank you ${name2} for purchasing ${amount2} cedis of water. Your${dummyToken}`,
//         })
//     ); // Dispatch the action to set payment success
//     } catch (error) {
//       // Handle any error that occurred during the request
//       console.error('Error creating save', error);
//     }
//   };

// dispatch(
//     setPaymentSuccess({
//         messages: `Thank you ${name} for purchasing ${amount} cedis of electricity. Your${dummyToken}`,
//     })
// ); // Dispatch the action to set payment success
// navigate('/Message');






