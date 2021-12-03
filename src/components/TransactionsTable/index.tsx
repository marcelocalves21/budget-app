

import { useTransaction } from "../../hooks/useTransactions";
import { Container } from "./styles";


export function TransactionsTable() {
    const {transactions} = useTransaction()
    const userLocale = Intl.DateTimeFormat().resolvedOptions().locale

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => (
                        <tr key={transaction.id}>
                            <td>{transaction.item}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat(`${userLocale}`, {
                                    style: 'currency',
                                    currency: 'USD'
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat(`${userLocale}`).format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}