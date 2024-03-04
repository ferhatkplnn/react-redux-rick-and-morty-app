import axios from "axios";

const apiBaseEndpoint = process.env.REACT_APP_API_BASE_ENDPOINT;

export const getCharacters = async () => {
  const res = await axios(`${apiBaseEndpoint}/character`);
  return res.data;
};

export const getMoreCharacters = async (url) => {
  const res = await axios(url);
  return res.data;
};

export const getCharacterDetail = async (id) => {
  const res = await axios(`${apiBaseEndpoint}/character/${id}`);
  return res.data;
};
