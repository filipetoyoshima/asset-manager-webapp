import api from '.';

interface loginData {
    email: string;
    password: string;
}

export const login = ({ email, password }: loginData) =>
  api
    .post('/login', {
      email,
      password,
    })
    .then((res) => res.data);