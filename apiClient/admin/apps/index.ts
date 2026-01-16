import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "../../types";

@CRUD("app")
export default class App {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /** Получение списка приложений с их кампаниями (активными и всеми) */
  async _getList(){
    return (await this.axiosInstance.get(`/admin/apps/getList`)).data as ApiAdmin['appsGetListResponse'];
  }

  /** Получение списка гео для приложения с их кампаниями (активными и всеми) */
  async getAppList({id}: {id: number}){
    return (await this.axiosInstance.get(`/admin/apps/${id}/getList`)).data as ApiAdmin['appsGetAppListResponse'];
  }

  /** Создание приложения (с автоматическим хендлингом иконки) */
  async _create(data: ApiAdmin['createAppBody']){
    return (await this.axiosInstance.post("/admin/apps/create", data)).data as ApiAdmin['createAppResponse'];
  }

  /** Обновление иконки на актуальную из маркетплейса */
  async refreshIcon({id}: {id: number}){
    return (await this.axiosInstance.post(`/admin/apps/${id}/refreshIcon`)).data as ApiAdmin['doneResponce'];
  }

  async getChartData({ id }: { id: number }) {
    return (await this.axiosInstance.get(`/admin/stats/app/${id}/mixpanelToT2`));
  }

  async getListByMarketplaceAccountId(data: ApiAdmin['appsGetListByMarketplaceAccountId']){
    return (await this.axiosInstance.post(`/admin/apps/getListByMarketplaceAccountId`, data)).data as ApiAdmin['appsGetListByMarketplaceAccountIdResponse'];
  }
}
