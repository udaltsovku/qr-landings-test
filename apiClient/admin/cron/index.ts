import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin } from "../../types";

@CRUD("cron")
export default class Cron {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /** Ручной запуск CRON задачи collectAppsPositionsForAllCampaigns - сбор позиций в поиске для всех кампаний */
  async collectAppsPositionsForAllCampaigns(){
    return await this.axiosInstance.post("/admin/cron/run/campaign/collectAppsPositionsForAllCampaigns") as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи collectAppsPositionsForAllCampaigns - сбор позиций в поиске для всех кампаний за конкретную дату */
  async collectAppsPositionsForAllCampaignsByDate(date: string){
    return await this.axiosInstance.post("/admin/cron/run/campaign/collectAppsPositionsForAllCampaignsByDate", {date}) as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи createNewIterations */
  async createNewIterations(){
    return await this.axiosInstance.post("/admin/cron/run/campaign/createNewIterations") as ApiAdmin['longTaskResponse'];
  }

  /** Обновление порядка генерации новых итераций */
  async applyNewIterationsOrder({order}: ApiAdmin['applyNewIterationsOrderBody']) {
    return await this.axiosInstance.post("/admin/cron/run/campaign/createNewIterations/order", {order}) as ApiAdmin['doneResponce'];
  }

  /** Получение порядка генерации новых итераций */
  async getNewIterationsOrder() {
    return (await this.axiosInstance.get("/admin/cron/run/campaign/createNewIterations/order")).data as ApiAdmin['getNewIterationsOrderResponse'];
  }

  /** Ручной запуск CRON задачи checkEverydayTasksStatuses */
  async checkEverydayTasksStatuses(){
    return await this.axiosInstance.post("/admin/cron/run/appflow/checkEverydayTasksStatuses") as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи sendEverydayTasks */
  async sendEverydayTasks(){
    return await this.axiosInstance.post("/admin/cron/run/appflow/sendEverydayTasks") as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи syncMarketplaceAccountsAllDownloadsViaACE */
  async syncMarketplaceAccountsAllDownloadsViaACE(){
    return await this.axiosInstance.post("/admin/cron/run/sync/syncMarketplaceAccountsAllDownloadsViaACE") as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи changeStatusesForActiveCampaigns */
  async changeStatusesForActiveCampaigns(){
    return await this.axiosInstance.post("/admin/cron/run/campaign/changeStatusesForActiveCampaigns") as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи collectKeywordTrafficForAllKeywords */
  async collectKeywordTrafficForAllKeywords(){
    return await this.axiosInstance.post("/admin/cron/run/campaign/collectKeywordTrafficForAllKeywords") as ApiAdmin['longTaskResponse'];
  }

  /** Ручной запуск CRON задачи moveDeferredCampaignItems */
  async moveDeferredCampaignItems(){
    return await this.axiosInstance.post("/admin/cron/run/campaign/moveDeferredCampaignItems") as ApiAdmin['longTaskResponse'];
  }
}
