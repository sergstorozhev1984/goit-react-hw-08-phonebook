import axios from 'axios';

const contactsService = axios.create({
  baseURL: 'https://63ca6b80f36cbbdfc757d4d6.mockapi.io/contacts/',
});

export const getContactsAll = async () => {
  const { data } = await contactsService.get();
  return data;
};