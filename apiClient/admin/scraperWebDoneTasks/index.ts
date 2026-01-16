import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("scraperWebDoneTasks")
export default class ScraperWebDoneTasks {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
