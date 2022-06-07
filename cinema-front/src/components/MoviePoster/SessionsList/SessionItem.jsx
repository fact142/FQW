import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuditorium } from '../../../store/reducers/sessionReducer';

const SessionItem = ({time, auditorium, auditoriumId}) => {
  const dispatch = useDispatch();
  const transformDate = (isoDate) => {
    const date = new Date(isoDate)
    const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
    return `${hours}:${minutes}`
 }
  return(
    <Link to="/order" >
    <button
      onClick={() => {dispatch(setAuditorium(auditoriumId))}}
      style={{
        backgroundColor: "#ffb8c6",
        border: "0",
        borderRadius: "10px",
        cursor: "pointer",
        margin: "5px",
        "&:hover": '#efefef'
    }}>
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>
        <div style={{color: "black"}}>{transformDate(time)}</div>
        <div style={{
          color: "rgba(0,0,0,0.5)",
          fontSize: "small",
        }}>Зал {auditorium}</div>
      </div>
    </button>
    </Link>
  )
}

export default SessionItem;
