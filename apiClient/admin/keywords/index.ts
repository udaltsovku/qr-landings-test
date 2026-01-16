import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "~/apiClient/types";

@CRUD("keyword")
export default class Keyword {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async updateLinkedApps(id: number, body: ApiAdmin['keywordUpdateLinkedApps']){
    return (await this.axiosInstance.post(`/admin/keyword/${id}/updateLinkedApps`, body)).data as ApiAdmin['doneResponce'];
  }
}
