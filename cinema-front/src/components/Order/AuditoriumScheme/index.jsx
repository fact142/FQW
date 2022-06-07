import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFilmByAuditorium } from '../../../APIs/sessionAPI';
import styles from './auditoriumScheme.module.css';
import FilmInfo from './FilmInfo';
import AuditoriumSeats from './AuditoriumSeats';

const AuditoriumScheme = ({auditoriumId, film, activeSeats, setActiveSeats}) => {
  const [auditorium, setAuditorium] = useState(auditoriumId);

  return(
    <div className={styles.layout}>
      <FilmInfo film={film}/>
      <AuditoriumSeats auditoriumId={auditoriumId} activeSeats={activeSeats} setActiveSeats={setActiveSeats}/>
    </div>)
}

export default AuditoriumScheme;
