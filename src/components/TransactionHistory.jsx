const TransactionHistory = ({ items }) => {
    return (
        <>
            <table className="transaction-history">
                <thead className="transaction-head">
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody className="transaction-body">
                    {items.map(({ id, type, amount, currency }) => (

                        <tr key={id}>
                            <td>{type}</td>
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