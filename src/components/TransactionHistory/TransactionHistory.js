import PropTypes from 'prop-types';
import css from './Transactions.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.tr} key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
export default TransactionHistory;
