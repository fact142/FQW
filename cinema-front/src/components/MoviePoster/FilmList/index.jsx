import { useEffect, useState } from 'react';
import { getFilms } from '../../../APIs/filmAPI';
import FilmCard from '../FilmCard';
import styles from './movieList.module.css'

const FilmList = () => {
  const [films, setFilms] = useState([]);

  useEffect(async () => {
    setFilms(await getFilms())
  }, [])

  return(
    <div className={styles.posterLayout}>
      {films.map(film => <FilmCard film={film} />)}
    </div>
  )
}

export default FilmList;
