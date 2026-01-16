import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "~/apiClient/types";

@CRUD("filter")
export default class Keyword {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async getFilterLists() {
    return (await this.axiosInstance.get('/admin/filter/campaignItems/lists')).data;
  }
}
