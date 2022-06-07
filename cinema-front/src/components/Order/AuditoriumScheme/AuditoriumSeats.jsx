import styles from './auditoriumScheme.module.css';
import { useEffect, useState } from 'react';
import { getSeatBySession } from '../../../APIs/seatAPI';
import Seat from './Seat';

const AuditoriumSeats = ({auditoriumId, activeSeats, setActiveSeats}) => {
  const [seats, setSeats] = useState([]);
  useEffect(async () => {
    setSeats(await getSeatBySession(auditoriumId))
  } ,[auditoriumId])
  return(
    <div className={styles.audLayout}>
      <div>
        Экран
      </div>
      <div className={styles.seats}>
        {seats.map((seat) => (
          <div>
            {seat.map((place) => (
              <div className={styles.row}>
                <Seat activeSeats={activeSeats} setActiveSeats={setActiveSeats} film={place} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default AuditoriumSeats;
