import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("aggregationTemplate")
export default class AggregationTemplate {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
