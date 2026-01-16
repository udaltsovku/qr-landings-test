import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import {ApiAdmin} from "~/apiClient/types";

@CRUD("geo")
export default class Geo {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async _getList() {
    return (await this.axiosInstance.get(`/admin/geo/all`)).data as ApiAdmin['geoGetListResponse'];
  }
}
