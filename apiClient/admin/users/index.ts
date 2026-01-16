import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("user")
export default class User {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
