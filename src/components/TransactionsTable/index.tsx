import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {

    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }, [])

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className='deposit'>$20000.00</td>
                        <td>Sales</td>
                        <td>11/27/2021</td>
                    </tr>
                    <tr>
                        <td>Rent</td>
                        <td className='withdraw'> -$1750.00</td>
                        <td>House</td>
                        <td>11/15/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}