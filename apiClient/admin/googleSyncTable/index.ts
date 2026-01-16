import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("googleSyncTable")
export default class GoogleSyncTable {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
