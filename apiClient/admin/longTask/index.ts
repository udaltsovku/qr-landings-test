import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("longTask")
export default class LongTask {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
