import axios from 'axios';
axios.defaults.baseURL = 'https://640f79ffcde47f68db4ba226.mockapi.io';

export const getAllContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};
export const addContact = async (name, number) => {
  const response = await axios.post('/contacts', { name, number });
  return response.data;
};
export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};
