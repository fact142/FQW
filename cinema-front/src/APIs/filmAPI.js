const baseURL = 'http://localhost:1234';

export const  postFilm = async (
  title, duration, priceCoeficient, year, country
) => {
  const body = JSON.stringify({
    title, duration, priceCoeficient,  year, country
  });
  const response = await fetch(`${baseURL}/film/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  const data = await response.json();
  return data;
};

export const getFilms = async () => {
  const response = await fetch(`${baseURL}/film`,
    { method: 'GET' }
  );
  return response.json();
}
