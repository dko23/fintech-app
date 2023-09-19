import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins, faPiggyBank, faReceipt, faWallet } from '@fortawesome/free-solid-svg-icons';
import chess from '../images/chess.jpg'
import LogOut from './LogOut';


function Bar() {
    const [size, setSize] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();

    const handleClick = (newSize) => {
        setSize(newSize);
        onOpen();
    };

    return (
        <div>
            {['md'].map((size) => (
                <Button onClick={() => handleClick(size)} key={size} m={4} size='lg'>
                    Looking for Something?
                </Button>
            ))}


            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader className='header'>
                        <div className='box'>
                     <img src={chess} className='logo_1' />
                    </div></DrawerHeader>
                    <Link to="/Budget">
                        <a className="nav-link" aria-current="page" activeClassName="active-link" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faCoins} className="icons" size='2xl' /> Budget & Expenses
                        </a>
                    </Link>
                    <Link to="/Pay">
                        <a className="nav-link" aria-current="page" activeClassName="active" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faWallet} className="icons" size='2xl' /> Pay
                        </a>
                    </Link>
                    <Link to="/Goal">
                        <a className="nav-link" aria-current="page" activeClassName="active" style={{ fontWeight: 'bold', fontSize: '18px' }} >
                            <FontAwesomeIcon icon={faPiggyBank} className="icons" size='2xl' /> Saving
                        </a>
                    </Link>
                    <Link to="/Expense">
                        <a className="nav-link" aria-current="page" activeClassName="active" style={{ fontWeight: 'bold', fontSize: '18px' }}>
                            <FontAwesomeIcon icon={faReceipt} className="icons" size='2xl' /> Expense History
                        </a>
                    </Link>
                <LogOut/>
                    <DrawerBody></DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    );
}

export default Bar;















