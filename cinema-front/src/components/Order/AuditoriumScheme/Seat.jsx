import styles from './auditoriumScheme.module.css';
import { useState } from 'react';

const Seat = ({film, activeSeats, setActiveSeats}) => {
  const [isActive, setIsActive] = useState(false);

  const onHandleClick = () => {
    if(isActive){
      setActiveSeats(activeSeats.filter((seat) => (seat.id !== film.id)))
      setIsActive(!isActive)
    } else{
      setActiveSeats([...activeSeats, film])
      setIsActive(!isActive)
    }

  }
  return(
    film.order_id === 0 ? (
      <div>
        <button
          onClick={onHandleClick}
          className={isActive ? styles.seatActive : styles.seat}
        >
          {film.place}
        </button>
      </div>
      ): (
      <div>
        <button
          className={styles.disabledSeat}
        >
          {film.place}
        </button>
      </div>
    )

  )
}

export default Seat;
