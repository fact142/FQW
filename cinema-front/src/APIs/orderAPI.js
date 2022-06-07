const baseURL = 'http://localhost:1234';

export const createOrder = async (
  userId, auditoriumId, price
) => {
  const body = JSON.stringify({
    userId, auditoriumId, price
  });
  await fetch(`${baseURL}/order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
}

