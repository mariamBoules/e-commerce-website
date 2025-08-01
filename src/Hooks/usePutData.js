import baseURL from "../API/baseURL";

const usePutDataImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const res = await baseURL.put(url, params, config);
  return res;
};

const usePutData = async (url, params) => {
  const res = await baseURL.put(url, params);
  return res;
};

export { usePutData, usePutDataImage };
