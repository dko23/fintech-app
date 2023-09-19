import React from 'react'
import student from '../images/students.jpg'
import save from '../images/saving1.jpg'
import secure from '../images/secure.jpg'
import budget from '../images/budget.jpg'
import bluebill from '../images/bill-icon.jpg'
import caluclator from '../images/calculate.jpg'
import Review from '../components/Review'
import show from '../images/show.jpg'
import { motion } from "framer-motion"
import Navbar from './NavBar'
import Footer from '../components/Footer'



function Home() {
    return (

      <>
      <Navbar />  
            <motion.div  initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}
className='container'>
                <div className='row'>
                <div className="row students">
          <div className="col-md-6">
            <h1 style={{ fontWeight: 'bold'}}>Empowering Student Finances: Your Financial Future, Simplified</h1>
            <p>
            The fintech app designed exclusively for students. Seamlessly manage your finances, budget like a pro, and confidently plan for your future. From tracking expenses to setting savings goals, StudentFin simplifies your financial life, allowing you to focus on what truly matters – your education and growth.
            </p>
          </div>

          <div className="col-md-6">
            <img src={student} className="img-fluid" alt="student" />
          </div>
                    </div>
                    
                    <div className="row students">
          <div className="col-md-6">
            <img src={save} className="img-fluid" alt="Sales" />
          </div>

          <div className="col-md-6">
            <h1 style={{ fontWeight: 'bold'}}>Take Control of your Savings</h1>
            <p>
              "Unlock the potential of your future with StudentSaver, the ultimate savings companion for students. Our app is your trusted partner in building a secure financial foundation. Seamlessly set aside funds for your goals, whether it's for tuition, travel, or a rainy day. With personalized savings plans and intuitive features, StudentSaver makes saving effortless and rewarding
            </p>
          </div>
                    </div>
                    <div className="row students fluid sales-card" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="text-center">
          <h1 style={{ fontWeight: 'bold'}}>Features</h1>
        </div>
          <div className="col-md-3">
            <motion.div 
whileHover={{
  scale: 0.5,
  transition: { duration: 1 },
}}
whileTap={{ scale: 0.9 }} 
                  className="card" style={{ width: '18rem' , border: 'none'  }}>
                  <img className="card-img-top sales" src={bluebill} alt="Sales" />
              <div className="card-body">
                <strong>Make payments of utility bills</strong>
              </div>
            </motion.div>
          </div>

          <div className="col-md-3">
                <motion.div 
whileHover={{
  scale: 0.5,
  transition: { duration: 1 },
}}
whileTap={{ scale: 0.9 }}
                  className="card no-border" style={{ width: '18rem', border: 'none'  }}>
              <img className="card-img-top recruiting" src={secure} alt="Recruiting" />
              <div className="card-body">
                <strong>Secured Payments</strong>
              </div>
            </motion.div>
          </div>

          <div className="col-md-3">
                <motion.div
                  
whileHover={{
  scale: 0.5,
  transition: { duration: 1 },
}}
whileTap={{ scale: 0.9 }}    
                  className="card" style={{ width: '18rem' , border: 'none'  }}>
              <img className="card-img-top customer-success" src={caluclator} alt="Customer Success" />
              <div className="card-body customer-success">
                <strong>Track budget, savings and expenses</strong>
              </div>
            </motion.div>
          </div>
                    </div>
                    <div className="row students">
          <div className="col-md-6">
            <h1 style={{ fontWeight: 'bold'}}>Smart Budgeting for Students:</h1>
            <p>
            Introducing the ultimate budgeting companion tailored for students. Embrace financial freedom and embark on a journey of intelligent budgeting with our fintech app. 
            </p>
          </div>

          <div className="col-md-6">
            <img src={budget} className="img-fluid" alt="student" />
          </div>
                    </div>  

            <div className='row view' style={{ marginBottom:80 }}>
              <Review/>
              </div>
              <div className="row student-graph">
              <div className="col-md-6">
                
  <h1 style={{ fontWeight: 'bold'}}>Unlock Your Savings Potential: Track Your Success with Powerful Graphs</h1>
  <p>
  Dive into a world where managing your finances is not just easy, but visually captivating. Our intuitive charts, interactive dashboards, and immersive graphics transform financial data into a journey of discovery. 
  </p>
</div>

<div className="col-md-6">
  <img src={show} className="img-fluid graph" alt="student" />
</div>
            </div>
                </div>  { /*Main Row*/}
            </motion.div> {/* Container Row */}
           
            <hr></hr>
  <Footer className='container-fluid'  />
        </>

    )
}

export default Home

