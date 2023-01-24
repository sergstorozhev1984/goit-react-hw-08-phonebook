import axios from "axios";

export const userPublicApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const userPrivateApi = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
    set: token => {
      userPrivateApi.defaults.headers.Authorization = `Bearer ${token}`;
    },
    unset: () => {
      userPrivateApi.defaults.headers.Authorization = '';
    },
  };

export const registerUser = async (formData) => {
    const {data} = await userPublicApi.post('users/signup', formData);
    return data;
}