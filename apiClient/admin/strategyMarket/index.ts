import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "~/apiClient/types";

@CRUD("strategyMarket")
export default class StrategyMarket {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async createNewStrategy(data: ApiAdmin['createStrategyBody']) {
    return await this.axiosInstance.post("/admin/strategyMarket/createStrategy", data) as ApiAdmin['doneResponseWithId'];
  }

  async getFavs(){
    return (await this.axiosInstance.get("/admin/favStrategy/list")).data as ApiAdmin['favStrategyListResponse'];
  }

  async favStrategy(strategyId: number){
    return (await this.axiosInstance.post(`/admin/favStrategy/${strategyId}`)).data as ApiAdmin['doneResponce'];
  }

  async unfavStrategy(strategyId: number){
    return (await this.axiosInstance.delete(`/admin/favStrategy/${strategyId}`)).data as ApiAdmin['doneResponce'];
  }
}
