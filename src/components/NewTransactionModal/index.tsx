import { on } from 'events'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expenses.svg'

import {Container, TransactionTypeContainer, RadioBox} from './styles'
import { useState } from 'react'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
        >
        <button 
            type='button' 
            onClick={onRequestClose}
            className='react-modal-close'
        >
            <img src={closeImg} alt="Close Modal" />
        </button>

        <Container>
            <h2>New Transaction</h2>

            <input 
                placeholder='Item' 
            />

            <input 
                type="number"
                placeholder="Price"
            />

            <TransactionTypeContainer>
                <RadioBox
                    type='button'
                    onClick={() => setType('deposit')}
                    isActive={type === 'deposit'}
                    activeColor='green'
                >
                    <img src={incomeImg} alt="Income Type Button" />
                    <span>Income</span>
                </RadioBox>

                <RadioBox
                    type='button'
                    onClick={() => setType('withdraw')}
                    isActive={type === 'withdraw'}
                    activeColor='red'
                >
                    <img src={expenseImg} alt="Expense Type Button" />
                    <span>Expense</span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
                placeholder='Category' 
            />

            <button type="submit">
                Send
            </button>
        </Container>

      </Modal>
    )
}