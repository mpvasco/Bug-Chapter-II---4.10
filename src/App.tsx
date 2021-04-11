import { Dashboard } from "./components/Dashboard";
import Modal from 'react-modal'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";


Modal.setAppElement('#root')


export function App() {
  const [isNewTrasactionsModalOpen, setIsNewTrasactionModalOpen] = useState(false)

  function handleOpenNewTransactionModal() {
      setIsNewTrasactionModalOpen(true)
  }

  function handleCloseNewTransactionModal() {
      setIsNewTrasactionModalOpen(false)
  }
  return (
    <>
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        <Dashboard/>
        <GlobalStyle/>
        <NewTransactionModal 
          isOpen={isNewTrasactionsModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />

    </>
  );
}

