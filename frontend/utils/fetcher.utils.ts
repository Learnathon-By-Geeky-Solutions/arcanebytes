import wretch, { Wretch } from "wretch";
import { AuthActions } from "./auth.utils";
import { WretchError } from "wretch/resolver";

const { storeToken, retriveToken } = AuthActions();

const api = () => {
  return wretch("http://localhost:8000")
    .auth(`Token ${retriveToken()}`)
    .catcher(401, async (error: WretchError, request: Wretch) =>
      window.location.replace("/login")
    );
};

export const fetcher = (url: string): Promise<any> => {
  return api().get(url).json();
};
