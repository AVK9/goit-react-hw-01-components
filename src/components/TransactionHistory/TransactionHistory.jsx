import css from './TransactionHistory.module.css'

export const TransactionHistory = ({items}) => (
    <table className={css.transactionHistory}>
      <thead className={css.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
        </thead>
        <tbody>
        {
                items.map(({ id, type, amount, currency }, index) => (
                    <tr className={
                    (index + 1) %2 ===0 ? 
                     css.tablRow2:css.tablRow
                    } key={id} >
                    <td className={css.typeCol}>{type}</td>
                    <td className={css.amountCol}>{amount}</td>
                    <td className={css.currencyCol}>{currency}</td>
       </tr>
))
      }
      </tbody>
   </table>
)