import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("googleSyncPartnerMapping")
export default class GoogleSyncPartnerMapping {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
