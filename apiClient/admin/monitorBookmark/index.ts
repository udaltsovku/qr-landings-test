import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("monitorBookmark")
export default class MonitorBookmark {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
