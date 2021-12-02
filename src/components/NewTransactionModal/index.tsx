import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import expenseImg from '../../assets/expenses.svg'

import {Container, TransactionTypeContainer, RadioBox} from './styles'
import { api } from '../../services/api'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    const [item, setItem] = useState('')
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState('')
    const [type, setType] = useState('deposit')

    function handleCreateNewTransaction(event:FormEvent) {
        event.preventDefault()

        const data = {
            item,
            price,
            category,
            type
        }

        api.post('/transactions', data)
    }

    

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

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>New Transaction</h2>

            <input 
                placeholder='Item'
                value={item}
                onChange={(e)=> setItem(e.target.value)}
            />

            <input 
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e)=> setPrice(Number(e.target.value))}
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
                value={category}
                onChange={(e)=> setCategory(e.target.value)}
            />

            <button type="submit">
                Send
            </button>
        </Container>

      </Modal>
    )
}