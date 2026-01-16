import { AxiosInstance } from "axios";
import { ApiAdmin } from "~/apiClient/types";

export default class Reports {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async generateUnitEconomicsByKW(body: ApiAdmin['generateReportUnitEconomicsByKwBody']){
    return (await this.axiosInstance.post(`/admin/reports/generateUnitEconomicsByKw`, body)).data as ApiAdmin['generateReportUnitEconomicsByKwResponse'];
  }

  async generateUnitEconomicsSum(body: ApiAdmin['generateReportUnitEconomicsSumBody']){
    return (await this.axiosInstance.post(`/admin/reports/generateUnitEconomicsSum`, body)).data as ApiAdmin['generateReportUnitEconomicsSumResponse'];
  }
}
