import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "~/apiClient/types";

@CRUD("totalDownloadsUnavailable")
export default class TotalDownloadsUnavailable {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async getData(query: ApiAdmin['totalDownloadsUnavailableBody']){
    const res = await this.axiosInstance.post<ApiAdmin['totalDownloadsUnavailableResponse']>(
      '/admin/totalDownloadsUnavailable/get',
      query
    );
    return res.data;
  }

  async getGeos(){
    const res = await this.axiosInstance.get<ApiAdmin['totalDownloadsUnavailableGeosResponse']>(
      '/admin/totalDownloadsUnavailable/geos'
    );
    return res.data;
  }

  async getApps(){
    const res = await this.axiosInstance.get<ApiAdmin['totalDownloadsUnavailableAppsResponse']>(
      '/admin/totalDownloadsUnavailable/apps'
    );
    return res.data;
  }

  async getPlatforms(){
    const res = await this.axiosInstance.get<ApiAdmin['totalDownloadsUnavailablePlatformsResponse']>(
      '/admin/totalDownloadsUnavailable/platforms'
    );
    return res.data;
  }
}
