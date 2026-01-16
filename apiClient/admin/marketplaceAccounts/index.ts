import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin, CapSchema } from "../../types";


@CRUD("marketplaceAccount")
export default class MarketplaceAccount {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async getAll(){
    return (await this.axiosInstance.get(`/admin/marketplaceAccounts`)).data as ApiAdmin['getMarketplaceAccountsResponse'];
  }
}
