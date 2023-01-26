import axios from "axios";

export const userPublicApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const userPrivateApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const token = {
    set: token => {
      userPrivateApi.defaults.headers.common.Authorization =  `Bearer ${token}`;
    },
    unset: () => {
      userPrivateApi.defaults.headers.common.Authorization = '';
    },
  };

export const registerUser = async (formData) => {
    const {data} = await userPublicApi.post('/users/signup', formData);
    return data;
}
export const loginUser = async (formData) => {
    const {data} = await userPublicApi.post('/users/login', formData);
    return data;
}

export const getUserData = async () => {
  const {data} = await userPrivateApi.get('/users/current');
  return data;
}

export const userLogOut = async () => {
  const {data} = await userPrivateApi.post('/users/logout');
  return data;
}