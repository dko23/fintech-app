import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoins, faPiggyBank, faReceipt, faWallet, fas } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import chess from '../images/chess.jpg'



library.add(fas, faPiggyBank, faWallet, faReceipt, faCoins)

function Navbar() {
  return (
    <div className='header'> 
    <nav class="navbar navbar-expand-lg navbar-light shadow-sm p-3 mb-5 bg-white rounded  ">
     <div class="container train">
                   <div className='box'>
                   <a class="navbar-brand" style={{ fontWeight: 'bold'}}>StuSave</a><Link to="/"><img src={chess} className='logo' /></Link>
                  </div>
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarNav">
         <ul class="navbar-nav ms-auto">
              <li class="nav-item">
<Link to="SignIn"><a className="nav-link" aria-current="page" activeClassName="active-link" >
  <button class="button-53" role="button">Sign In</button></a></Link>
</li>
         </ul>
       </div>
         </div>
        
    </nav>
       </div>
  )
}

export default Navbar


{/* <li class="nav-item">
<Link to="/Budget"><a  className="nav-link" aria-current="page"  activeClassName="active-link" ><FontAwesomeIcon icon="fa-solid fa-coins" className='icons'/>Budget & Expenses</a></Link>  
   </li>
   <li class="nav-item">
<Link to="/Pay"><a className="nav-link" aria-current="page" activeClassName="active" ><FontAwesomeIcon icon="fa-solid fa-wallet" className='icons'/>Pay</a></Link>  
   </li>
<li class="nav-item">
<Link to='/Goal'><a className="nav-link" aria-current="page" activeClassName="active"><FontAwesomeIcon icon="fa-solid fa-piggy-bank" className='icons' />Saving</a></Link> 
               </li>
               <li class="nav-item">
<Link to="/Expense"><a className="nav-link" aria-current="page"><FontAwesomeIcon icon="fa-solid fa-receipt" className='icons' activeClassName="active"/>Expense History</a></Link>  
   </li> */}