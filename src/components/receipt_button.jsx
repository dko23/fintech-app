import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
} from '@chakra-ui/react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faInbox } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


library.add(fas, faInbox)

function ReceiptButton() {
  const purchase = useSelector((state) => state.purchase);
  const [size, setSize] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <div>
      {['md'].map((size) => (
        <Button onClick={() => handleClick(size)} key={size} m={4}>
          Receipts
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
                  <DrawerHeader>Utility Receipts</DrawerHeader>
                
          <DrawerBody>
                      <TableContainer>
           
              <Table variant='simple' className='mailbox-table'>
                <Thead>
                  <Tr >
                    <Th>Messages</Th><FontAwesomeIcon icon="fa-solid fa-inbox" size='2xl' className='main-row' />
                  </Tr>
                </Thead>
                <Tbody>
                  {purchase.map((purchaseItem) => (
                    <Tr key={purchaseItem.id}>
                      <Td>{purchaseItem.messages}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default ReceiptButton;
