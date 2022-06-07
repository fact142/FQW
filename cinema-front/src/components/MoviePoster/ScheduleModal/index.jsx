import { Modal } from 'antd';
import styles from './scheduleModal.css'
import { useEffect, useState } from 'react';
import { getByFilm } from '../../../APIs/sessionAPI';
import SessionsList from '../SessionsList';

const rusMonth = ['Янв', 'Фев', 'Марта', 'Апр', 'Мая', 'Июня', 'Июля', 'Авг', 'Сен', 'Окт', 'Нояб', 'Дек']

const getNextDays = () => {
  let array = [];
  const now = new Date();
  array.push("Сегодня")
  array.push('Завтра')
  for (let i = 2; i < 5; i++) {
    const  nextDay = new Date(now);
    nextDay.setDate(now.getDate() + i)
    const item = `${nextDay.getDate()} ${rusMonth[nextDay.getMonth()]}`
    array.push(item)
  }
  return array
}

const ScheduleModal = ({visible, onOk, onCancel, filmId, filmTitle}) => {
  const [sessions, setSessions] = useState([]);
  const [nextDays] = useState(getNextDays())

  useEffect(async () => {
    const ses = await getByFilm(filmId)
    await console.log(await getByFilm(filmId))
    setSessions(ses)
  }, []);

  return(
    sessions[0] !== undefined ? (
      <Modal
        onCancel={onCancel}
        onOk={onOk}
        centered
        visible={visible}
        title={filmTitle}
        footer={[]}
      >
          <div style={{display: "flex", flexWrap: "wrap", flexDirection: "column"}}>
            <div style={{display: "flex", flexWrap: "wrap"}}>
              <div style={{width: "50%", padding: "0px 20px", fontWeight: "bold"}}>Дата</div>
              <div style={{width: "50%", padding: "0px 20px", fontWeight: "bold" }}>Время</div>
            </div>
          {nextDays.map((item, index) =>(
            <div style={{display: "flex", flexWrap: "wrap"}} key={index}>
              <div style={{width: "50%", padding: "5px 20px"}}>{item}</div>
              <SessionsList sessions={sessions[index]}/>
            </div>
          ))}
        </div>
      </Modal>
      ):(
      <Modal
        onCancel={onCancel}
        onOk={onOk}
        visible={visible}
        title={filmTitle}
        footer={[]}
      >
        <div style={{display: "flex", flexWrap: "wrap"}}>
          На данный момент нет доступных сеансов
        </div>
      </Modal>
    )
  )
}

export default ScheduleModal;
