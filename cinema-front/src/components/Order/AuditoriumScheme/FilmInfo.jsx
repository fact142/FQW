import styles from './auditoriumScheme.module.css'

const FilmInfo = ({film}) => {
  return(
    <div className={styles.classInfo}>
      {film.title}, {film.duration} мин.
    </div>
  )
}

export default FilmInfo;

