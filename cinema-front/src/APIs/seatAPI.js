const baseURL = 'http://localhost:1234';

export const getSeatBySession = async (auditoriumId) => {
  const response = await fetch(`${baseURL}/seat/auditorium/${auditoriumId}`,
    { method: 'GET' });
  return response.json();
}

export const editSeatOrderId = async (seatId, orderId) => {
  const body = JSON.stringify({
    orderId
  });
  await fetch(`${baseURL}/seat/${seatId}`,
    { method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body,
    });
}
