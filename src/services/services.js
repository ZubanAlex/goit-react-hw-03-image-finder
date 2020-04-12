import axios from "axios";

const API_KEY = "15793590-6533eb8de74aa3303fcd7b1b8";
const URL_REQUEST = "https://pixabay.com/api/?";
const DEFAULT_REQUEST_PARAM =
  "&image_type=photo&orientation=horizontal&per_page=12";

export const fetchImgData = (searchName = "", searchPage = "1") => {
  return axios.get(
    URL_REQUEST +
      `q=${searchName}&page=${searchPage}&key=` +
      API_KEY +
      DEFAULT_REQUEST_PARAM
  );
};
