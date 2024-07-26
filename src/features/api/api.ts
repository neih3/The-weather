import axios, { AxiosResponse, AxiosError, AxiosInstance } from "axios";
import env from "react-dotenv";

const {
  REACT_APP_API_KEY: apiKey,
  REACT_APP_URL_WEATHER: urlWeather,
  REACT_APP_URL_FORECAST: urlForecast,
  REACT_APP_URL_GEODB: urlGeoDB,
  REACT_APP_RAPID_HOST: rapidHost,
  REACT_APP_RAPID_KEY: rapidKey,
} = env;

// Tạo instance Axios cho API thời tiết
const weatherAxios: AxiosInstance = axios.create({
  baseURL: urlWeather,
});

// Tạo instance Axios cho GeoDB API
const geoDBAxios: AxiosInstance = axios.create({
  baseURL: urlGeoDB,
  headers: {
    "x-rapidapi-host": rapidHost,
    "x-rapidapi-key": rapidKey,
  },
});

// Hàm xử lý lỗi chung
const handleError = (error: AxiosError): never => {
  console.error("API Error:", error.response?.data || error.message);
  throw error;
};

const getCity = async (country: string): Promise<any> => {
  // Tạo một instance Axios mới cho mỗi request
  const cityAxios = axios.create({
    baseURL: urlWeather,
  });
  try {
    const res: AxiosResponse = await cityAxios.get("", {
      params: { q: country, appid: apiKey },
    });
    return res.data;
  } catch (error) {
    // Lỗi đã được xử lý bởi interceptor, nhưng bạn có thể thêm xử lý bổ sung ở đây nếu cần
    return handleError(error as AxiosError);
  }
};

const getNameCity = async (value: string): Promise<any> => {
  try {
    const res: AxiosResponse = await geoDBAxios.get("", {
      params: { minPopulation: 1000000, namePrefix: value },
    });
    return res.data;
  } catch (error) {
    // console.log(error);
  }
};

const get5Day = async (lat: number, lon: number): Promise<any> => {
  try {
    const res: AxiosResponse = await weatherAxios.get(urlForecast, {
      params: { lat, lon, appid: apiKey },
    });
    return res.data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};

export { getCity, get5Day, getNameCity };
