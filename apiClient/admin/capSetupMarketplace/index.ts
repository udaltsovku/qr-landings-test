import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "~/apiClient/types";

@CRUD("capSetupMarketplace")
export default class CapSetupMarketplace {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
