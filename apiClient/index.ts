import axios, { AxiosInstance } from 'axios'
import Admin from './admin';

export default class apiClient {
  private axiosInstance: AxiosInstance;
  public admin: Admin;

  constructor({ host }: { host: string }) {
    this.axiosInstance = axios.create({
      baseURL: host,
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      withCredentials: true
    });

    this.axiosInstance.interceptors.response.use((config: any) => {
      return config;
    }, (error: any) => {
      console.error("API ERROR", error);
      return Promise.reject(error);
    });

    this.admin = new Admin(this.axiosInstance);
  }

  async login({ email, password }: { email: string, password: string }) {
    await this.axiosInstance.post('/admin/login', {
      email,
      password
    });
  }

  async ssoLogin({ token }: { token: string }){
    await this.axiosInstance.post('/admin/login-sso', {
      token
    })
  }
}