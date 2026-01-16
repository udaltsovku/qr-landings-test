import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("adInstalls")
export default class AdInstall {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
