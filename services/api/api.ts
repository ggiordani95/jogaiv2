import axios, {
  type Axios,
  type AxiosRequestConfig,
  type AxiosResponse,
} from "axios";

export class Api {
  private readonly URL: string;
  private client: Axios;
  private token: string | null = null;
  private logOut?: () => Promise<void>;

  constructor(url: string) {
    if (!process.env.EXPO_PUBLIC_API_URL) {
      throw new Error("API URL is not defined");
    }
    this.URL = url;
    this.client = axios.create({
      baseURL: this.URL,
      timeout: 6000,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    this.configureResponseInterceptor();
  }

  private configureResponseInterceptor = () => {
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response?.data?.error_code === 1101)
          return Promise.reject(error);

        if (error.response?.status === 401) {
          if (!this.logOut) {
            throw new Error(error.response.data.message);
          }
          this.logOut();
        }
        return Promise.reject(error);
      }
    );
  };

  setToken(token: string | null) {
    this.token = token;
  }

  setLogOut = (logOut: () => Promise<void>) => {
    this.logOut = logOut;
  };

  authenticatedRequest = <Response, RequestBodyData = any>(
    config: AxiosRequestConfig<RequestBodyData>
  ) => {
    if (!this.token) {
      throw new Error("Token is not defined");
    }

    return this.request<Response, RequestBodyData>({
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${this.token}`,
      },
    });
  };

  request = <Response, RequestData = any>(
    config: AxiosRequestConfig<RequestData>
  ) => {
    return this.client.request<Response, AxiosResponse<Response>, RequestData>({
      ...config,
    });
  };
}

export const api = new Api(process.env.EXPO_PUBLIC_API_URL || "");
