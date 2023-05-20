export const fetchApi = async (url, data) => {
  try {
    const res = await fetch(`https://backend.tkti.uz/${url}`, data);
    return res.ok ? res.json() : res;
  } catch ({ message }) {
    return message;
  }
};