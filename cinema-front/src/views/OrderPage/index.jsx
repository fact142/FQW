import MainLayout from '../../components/MainLayout';
import AuditoriumScheme from '../../components/Order/AuditoriumScheme';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getFilmByAuditorium, getTimeByAuditorium } from '../../APIs/sessionAPI';
import styles from './orderPage.module.css'
import OrderInfo from '../../components/Order/OrderInfo';

const OrderPage = () => {
  const auditoriumId = useSelector((state) => state.session.auditorium)
  const [film, setFilm] = useState('');
  const [seats, setSeats] = useState([]);
  const [activeSeats, setActiveSeats] = useState([]);
  const [time, setTime] = useState('');

  useEffect(async () => {
    setFilm(await getFilmByAuditorium(auditoriumId))
    setTime(await getTimeByAuditorium(auditoriumId))
  }, [])

  return(
    <MainLayout>
      <div className={styles.layout}>
        <AuditoriumScheme auditoriumId={auditoriumId} film={film} activeSeats={activeSeats} setActiveSeats={setActiveSeats}/>
        <OrderInfo activeSeats={activeSeats} film={film} time={time} auditoriumId={auditoriumId}/>
      </div>
    </MainLayout>
  )
}

export default OrderPage;
