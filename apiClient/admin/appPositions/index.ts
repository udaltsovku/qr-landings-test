import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("appPositions")
export default class AppPosition {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
