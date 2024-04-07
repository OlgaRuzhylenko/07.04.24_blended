// const tableHeaders = ['№', 'price', 'amount', 'date'];
import style from './CryptoHistory.module.css';
import { formate } from 'helpers/formatDate';

export const CryptoHistory = ({ transactions }) => {
  return (
    <table className={style.table}>
      <thead className={style.thead}>
        <tr>
          <th className={style.th}>№</th>
          <th className={style.th}>PRICE</th>
          <th className={style.th}>AMOUNT</th>
          <th className={style.th}>DATE</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(({ id, price, amount, date }, idx) => {
          return (
            <tr key={id} className={style.tr}>
              <td className={style.td}>{idx + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>{formate(date)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
