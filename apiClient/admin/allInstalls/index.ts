import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("allInstalls")
export default class AllInstall {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
