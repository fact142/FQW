import styles from './filmCard.module.css';
import { Button } from 'antd';
import ScheduleModal from '../ScheduleModal';
import { useState } from 'react';

const FilmCard = ({film}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return(
    <>
      <div className={styles.card}>
        <div className={styles.description}>
          <div className={styles.title}>
            {film.title}
          </div>
          <div className={styles.info}>
            {film.country}, {film.year}
          </div>
          <div className={styles.info}>
            {film.duration} мин
          </div>
        </div>
        <Button className={styles.button} onClick={showModal}>
          Расписание
        </Button>
      </div>
      <ScheduleModal
        onOk={handleOk}
        onCancel={handleCancel}
        filmId={film.id}
        visible={isModalVisible}
        filmTitle={film.title}
      />
    </>
  )
}

export default FilmCard;
