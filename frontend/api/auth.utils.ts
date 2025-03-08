import axios from "axios";

const API_URL = "http://localhost:8000/api/v1/users";

export const register_user = async (formData: FormData) => {
  try {
    const data = Object.fromEntries(formData.entries());
    alert(data);
    const res = await axios.post(`${API_URL}/register/`, data, {
      withCredentials: true,
    });

    return res.data;
  } catch (e) {
    throw new Error("User registration failed!");
  }
};

export const login_user = async (email: string, password: string) => {};

export const logout_user = async () => {};

export const logout_user_all = async () => {};
