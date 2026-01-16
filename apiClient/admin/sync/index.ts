import { AxiosInstance } from "axios";
import { ApiAdmin } from "~/apiClient/types";

export default class Sync {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async allInstalls(body: ApiAdmin['syncAllInstallsBody']){
    return (await this.axiosInstance.post(`/admin/sync/allInstalls`, body)).data as ApiAdmin['syncAllInstallsResponse'];
  }

  async allInstallsViaACT(body: ApiAdmin['syncAllInstallsViaACTBody']){
    return (await this.axiosInstance.post(`/admin/sync/allInstallsViaACT`, body)).data as ApiAdmin['syncAllInstallsViaACTResponse'];
  }

  async getAppstoreConnectExporterTypes(){
    return (await this.axiosInstance.get(`/admin/sync/appstoreConnectExporterTypes`)).data as ApiAdmin['appstoreConnectExporterTypesResponse'];
  }

  async adInstalls(){
    return (await this.axiosInstance.post(`/admin/sync/adInstalls`)).data as ApiAdmin['syncAdInstallsResponse'];
  }

  async mixpanel(){
    return (await this.axiosInstance.post(`/admin/sync/mixpanel`)).data as ApiAdmin['syncMixpanelInstallsResponse'];
  }

  async getLast(){
    return (await this.axiosInstance.get(`/admin/sync/last`)).data as ApiAdmin['getLastSyncsResponse']
  }

  async trends(body: ApiAdmin['syncTrendsBody']) {
    return (await this.axiosInstance.post(`/admin/sync/trends`, body)).data as ApiAdmin['syncTrendsResponse'];
  }

  async proceeds(body: ApiAdmin['syncProceedsBody']) {
    return (await this.axiosInstance.post(`/admin/sync/proceeds`, body)).data as ApiAdmin['syncProceedsResponse'];
  }
}
