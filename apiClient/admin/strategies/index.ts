import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("strategy")
export default class Strategy {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
