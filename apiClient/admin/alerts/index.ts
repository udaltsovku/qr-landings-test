import { AxiosInstance } from "axios";
import { ApiAdmin } from "~/apiClient/types";

export default class Alerts {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async getList(params: ApiAdmin['alertsGetList']){
    return (await this.axiosInstance.get(`/admin/alerts/user/${params.userId}`)).data as ApiAdmin['alertsGetListResponse'];
  }

  async getConfigIncorrectInstalls() {
    return (await this.axiosInstance.get(`/admin/alerts/incorrectInstallsConfig`)).data as ApiAdmin['getIncorrectInstallsConfigResponse'];
  }

  async editConfigIncorrectInstalls(data: ApiAdmin['editIncorrectInstallsConfigBody']) {
    return (await this.axiosInstance.post(`/admin/alerts/incorrectInstallsConfig`, data)).data as ApiAdmin['doneResponce'];
  }
}
