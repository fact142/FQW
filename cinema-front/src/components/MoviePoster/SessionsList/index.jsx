import SessionItem from './SessionItem';

const SessionsList = ({ sessions }) => {

  return(!sessions[0]? (
            <div style={{width: "50%", padding: "10px 20px"}}>
              На данный день сеансов нет
            </div>):(
            <div style={{width: "50%", padding: "10px 20px"}}>
              {sessions.map((session) => <SessionItem time={session.time} auditorium={session.number} auditoriumId={session.id} key={session.id}/>)}
            </div>)
  )
}

export default SessionsList;
