import styles from './OrderInfo.module.css';
import { standartPrice } from '../../../constants/price';
import { createOrder } from '../../../APIs/orderAPI'
import useUser from '../../../hooks/useUser';
import { editSeatOrderId } from '../../../APIs/seatAPI';

const OrderInfo = ({activeSeats, film, time, auditoriumId}) => {
  const {id} = useUser()
  const convertDate = (iso) => {
    const date = new Date(iso);
    const day = date.getDate() > 10 ? date.getDate() : '0' + date.getDate();
    const month = date.getMonth() > 10 ? date.getMonth() : '0' + date.getMonth();
    const hour = date.getHours() > 10 ? date.getHours() : '0' + date.getHours();
    const minutes = date.getMinutes() > 10 ? date.getMinutes(): '0' + date.getMinutes();
    return `${day}.${month}.${date.getFullYear()} ${hour}:${minutes}`;
  }
  const onHandleClick = async () => {
    const order = await createOrder(id, auditoriumId, standartPrice * film.priceCoeficient * activeSeats.length)
  }
  return(
    <div className={styles.orderInfo}>
      <div className={styles.orderHeader}>
        Заказ
      </div>
      <div style={{margin: "10px"}}>Дата: {convertDate(time.time)}</div>
      <div style={{margin: "10px"}}>
        Выбранные билеты:
        {activeSeats.map((seat, i) => i === activeSeats.length - 1 ?
          ` ${seat.row} ряд ${seat.place} место` :
          ` ${seat.row} ряд ${seat.place} место,`)}
      </div>
      <div style={{margin: "10px"}}>
        Цена: {standartPrice * film.priceCoeficient * activeSeats.length} руб.
      </div>
      <button className={activeSeats.length > 0 ? styles.orderButton : styles.orderButtonDisabled} onClick={onHandleClick}>Купить</button>
    </div>
  )
}

export default OrderInfo;
