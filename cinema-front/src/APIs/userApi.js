const baseURL = 'http://localhost:1234'
export const logIn = async (email, password) => {
  const body = JSON.stringify({ email, password });
  const response = await fetch(`${baseURL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body,
    });
  const data = await response.json();
  return data;
};

export const  signUp = async (
  username, lastname, email, password
) => {
  const body = JSON.stringify({
    username, lastname, email, password,
  });
  const response = await fetch(`${baseURL}/auth/registration`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body,
  });
  const data = await response.json();
  return data;
};

export const  auth = async () => {
  const response = await fetch(`${baseURL}/auth`,
    { method: 'GET', headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });
  return response.json();
};
