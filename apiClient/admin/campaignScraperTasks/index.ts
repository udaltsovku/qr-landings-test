import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("campaignScraperTasks")
export default class CampaignScraperTask {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
