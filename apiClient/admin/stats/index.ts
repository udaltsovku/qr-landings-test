import { AxiosInstance } from "axios";
import { ApiAdmin } from "~/apiClient/types";

export default class Stats {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  x2 = {
    getData: async (query: ApiAdmin['statsX2GetBody'])=>{
      const res = await this.axiosInstance.post<ApiAdmin['statsX2GetResponse']>(
        '/admin/stats/x2/get',
        query
      );
      return res.data;
    },
    getGeos: async ()=>{
      const res = await this.axiosInstance.get<ApiAdmin['statsX2GeosResponse']>(
        'admin/stats/x2/geos'
      );
      return res.data;
    },
    getApps: async ()=>{
      const res = await this.axiosInstance.get<ApiAdmin['statsX2AppsResponse']>(
        'admin/stats/x2/apps'
      );
      return res.data;
    }
  }

}
