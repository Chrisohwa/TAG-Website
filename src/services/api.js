import { accountsInstance } from "./axiosinstance";
import * as API from "./url";



const postRequest = async (url, body) => {
  const res = await accountsInstance.post(url, body);
  return res.data;
};

const getRequest = async (url, params = {}) => {
  const res = await accountsInstance.get(url, { params });
  return res.data;
};

export const sendBookingMessage = (body) =>
  postRequest(API.BOOKING_MESSAGE, body);
export const sendQuickMessage = (body) =>
  postRequest(API.QUICK_MESSAGE, body);