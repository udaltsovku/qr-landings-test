import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import {ApiAdmin} from "~/apiClient/types";

@CRUD("adPartner")
export default class AdPartner {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
