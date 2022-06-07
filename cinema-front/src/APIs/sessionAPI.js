const baseURL = 'http://localhost:1234';

export const  postSession = async (
  time, filmId, auditoriumType
) => {
  const body = JSON.stringify({
    time, filmId, auditoriumType
  });
  const response = await fetch(`${baseURL}/session/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  const data = await response.json();
  return data;
};

export const getByFilm = async (filmId) => {
  const response = await fetch(`${baseURL}/session/film/${filmId}`,
    { method: 'GET' }
  );
  return response.json();
}

export const getFilmByAuditorium = async (auditoriumId) => {
  const response = await fetch(`${baseURL}/session/auditorium/film/${auditoriumId}`,
    { method: 'GET' }
  );
  return response.json();
}

export const getTimeByAuditorium = async (auditoriumId) => {
  const response = await fetch(`${baseURL}/session/auditorium/time/${auditoriumId}`,
    { method : 'GET'}
  );
  return response.json();
}


