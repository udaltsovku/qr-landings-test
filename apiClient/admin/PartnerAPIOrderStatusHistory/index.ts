import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import {ApiAdmin} from "~/apiClient/types";

@CRUD("partnerAPIOrderStatusHistory")
export default class PartnerAPIOrderStatusHistory {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
