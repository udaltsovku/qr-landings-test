import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import {ApiAdmin} from "~/apiClient/types";

@CRUD("campaignItems")
export default class CampaignItem {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  /**
   * Пауза отправки данных по запросу кампании партнеру
   */
  async stopSendingToPartnerCampaignItem(id: ApiAdmin["stopSendingToPartnerCampaignItem"]["id"]) {
    return (await this.axiosInstance.post(`/admin/campaignItem/${id}/stopSendingToPartner`)).data as ApiAdmin['doneWithErrorResponse'];
  }

  /**
   * Снятие паузы отправки данных по запросу кампании партнеру
   */
  async unstopSendingToPartnerCampaignItem(id: ApiAdmin["unstopSendingToPartnerCampaignItem"]["id"]) {
    return (await this.axiosInstance.post(`/admin/campaignItem/${id}/unstopSendingToPartner`)).data as ApiAdmin['doneWithErrorResponse'];
  }

  /**
   * Полная остановка запросов кампании:
   * - Добавление тегов: stop и stoppedMannualy
   * - Для всех доступных дней впереди устанавливаем установки - 0
   * - Останавливаем отправку партнёру
   */
  async stopCampaignItem(ids: ApiAdmin["stopCampaignItem"]["ids"]) {
    return (await this.axiosInstance.post(`/admin/campaignItem/stop`, { ids })).data as ApiAdmin['stopCampaignItemResponse'];
  }
}
