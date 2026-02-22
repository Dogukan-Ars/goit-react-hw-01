import style from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
        <>
            <table className={style.transactionHistory}>
                <thead className={style.transactionHead}>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody className={style.transactionBody}>
                    {items.map(({ id, type, amount, currency }) => (

                        <tr key={id}>
                            <td className={style.transactionType}>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default TransactionHistory