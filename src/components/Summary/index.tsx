import { useTransaction } from '../../hooks/useTransactions';
import incomeImg from '../../assets/income.svg'
import expensesImg from '../../assets/expenses.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";



export function Summary() {
    const { transactions }= useTransaction()

    const userLocale = Intl.DateTimeFormat().resolvedOptions().locale

    // const totalDeposits = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'deposit') {
    //         return acc + transaction.amount;
    //     }
    //     return acc;
    // }, 0)

    // const totalWithdraw = transactions.reduce((acc, transaction) => {
    //     if(transaction.type === 'withdraw') {
    //         return acc + transaction.amount
    //     }
    //     return acc;
    // }, 0)

    // const total = 

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }
        return acc;
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    return(
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>
                    {new Intl.NumberFormat(`${userLocale}`, {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Expenses</p>
                    <img src={expensesImg} alt="Income" />
                </header>
                <strong>
                    - {new Intl.NumberFormat(`${userLocale}`, {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className='highlight-background'>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Income" />
                </header>
                <strong>
                {new Intl.NumberFormat(`${userLocale}`, {
                        style: 'currency',
                        currency: 'USD'
                    }).format(summary.total)}
                </strong>
            </div>
        </Container>
    )
}