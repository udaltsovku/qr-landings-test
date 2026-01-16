import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import {ApiAdmin} from "~/apiClient/types";

@CRUD("partnerAPIOrderBatch")
export default class PartnerAPIOrderBatch {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
