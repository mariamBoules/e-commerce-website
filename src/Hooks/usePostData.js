import baseURL from "../API/baseURL";

const usePostDataImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const res = await baseURL.post(url, params, config);
  return res;
};

const usePostData = async (url, params) => {
  const res = await baseURL.post(url, params);
  return res;
};

export {usePostData, usePostDataImage} ;
