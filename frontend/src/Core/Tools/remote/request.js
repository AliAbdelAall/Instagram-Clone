import axios from "axios";
import { setLocalUser, getLocalUser, removeLocalUser } from "../local/user";

axios.defaults.baseURL = "http://localhost:8000/api";

export const sendRequest = (method, route, body) => {
  const token = getLocalUser().token

  try {
    const response = axios.request({
      method: method,
      url: route,
      data: body,
      headers: {
        Authorization: `bearer ${token}`
      }
    })

    return response
  } catch (error) {
    if (response.data.status === 401) {
      removeLocalUser()
      window.location.replace("/auth/login");
    }
  }
}
