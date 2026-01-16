import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";
import { ApiAdmin, CapSchema } from "../../types";


@CRUD("campaing")
export default class Campaign {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async createFromGoogle(data: ApiAdmin['campaignCreateFromGoogle']) {
    data.name = data.name.replace(/\t/g, ' ');
    return (await this.axiosInstance.post("/admin/campaign/create/fromGoogle", data)).data as ApiAdmin['longTaskWithIdResponse'];
  }

  async createFromCampaign(data: ApiAdmin['campaignCreateFromCampaign']) {
    data.name = data.name.replace(/\t/g, ' ');
    return (await this.axiosInstance.post("/admin/campaign/create/fromCampaign", data)).data as ApiAdmin['longTaskWithIdResponse'];
  }

  async createFromList(data: ApiAdmin['campaignCreateFromList']) {
    data.name = data.name.replace(/\t/g, '');
    data.listId = data.listId.replace(/\t/g, '');
    data.listId = data.listId.replace(/,/g, '');
    data.listId = data.listId.trim();
    return (await this.axiosInstance.post("/admin/campaign/create/fromList", data)).data as ApiAdmin['longTaskWithIdResponse'];
  }

  async getFullList(body: ApiAdmin['campaignGetFullListBody']) {
    return (await this.axiosInstance.post(
      "/admin/campaign/getFullList",
      body
    )).data as ApiAdmin['campaignGetFullListResponse'];
  }

  async getFullItemsList({campaignId, page=0, pageSize=10}: {campaignId: number, page?: number, pageSize?: number}) {
    return (await this.axiosInstance.get(
      `/admin/campaign/${campaignId}/items/getFullList`,
      { params: {page, pageSize} }
    )).data as ApiAdmin['campaignGetFullItemsListResponse'];
  }


  async remove({campaignId}: {campaignId: number}){
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/remove`)).data as ApiAdmin['longTaskResponse'];
  }

  async exportCSVToGoolge({
    campaignId,
    type,
    docId
  }: {
    campaignId: number,
    type: 'detailed' | 'partner',
    docId: string
  }){
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/csv/${type}/exportToGoogle`, {docId})).data as ApiAdmin['longTaskResponse'];
  }

  async downloadCSV({
    campaignId,
    type
  }: {
    campaignId: number,
    type: 'detailed' | 'partner'
  }){
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/csv/${type}/download`)).data as ApiAdmin['csvContentResponse'];
  }

  async exportRanks({ campaignId, docId } : { campaignId: number, docId: string }) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/csv/exportDynamicsToGoogle`, { docId })).data as ApiAdmin['longTaskResponse'];
  }

  async exportChainRanks({ campaignId, docId } : { campaignId: number, docId: string }) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/csv/exportCSVCampaignsChainItemsDynamicsToGoogle`, { docId })).data as ApiAdmin['longTaskResponse'];
  }

  async sendTaskToPartner({ campaignId } : { campaignId: number }) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/partner/sendTask`)).data as ApiAdmin['doneResponce'];
  }

  async cancelPartnerTasks({ campaignId, orderIds } : { campaignId: number, orderIds: string[] }) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/partner/cancelTasks`, { orderIds })).data as ApiAdmin['longTaskResponse'];
  }

  async updateStatus({
    campaignId,
    status
  }: {
    campaignId: number,
    status: 'preparing' | 'active' | 'finished',
  }){
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/status`, {status})).data as ApiAdmin['doneResponce'];
  }

  async build({ campaignId, capSchema } : { campaignId: number, capSchema: CapSchema }) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/build`, { capSchema })).data as ApiAdmin['longTaskResponse'];
  }

  async clearInstalls({ campaignId } : { campaignId: number }) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/clearInstalls`)).data as ApiAdmin['doneResponce'];
  }

  async getOrganicUsage({ campaignId, queryParams } : { campaignId: number, queryParams?: {dateFrom?: string, dateTo?: string, geoType?: 'campaignGeos' | 'allGeos', displayReadyToStart?: 'thisCampaign' | 'allReadyToStartCampaigns'} }) {
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/organicUsage`, {params: queryParams})).data as ApiAdmin['campaignOrganicUsageResponse'];
  }

  async getBatches({ campaignId } : { campaignId: number }) {
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/api/batch/list`)).data as ApiAdmin['getCampaignAPIBatchListResponse'];
  }

  async getBatchList({ batchId } : { batchId: number }) {
    return (await this.axiosInstance.get(`/admin/campaign/0/api/batch/${batchId}`)).data as ApiAdmin['getCampaignAPIBatchStatusesResponse'];
  }

  async sendBatch({ batchId, specifyStatusIds } : { batchId: number, specifyStatusIds?: number[] }) {
    return (await this.axiosInstance.post(`/admin/campaign/0/api/batch/send`, {
      batchId,
      specifyStatusIds
    }, {
      timeout: 9999 * 1000
    })).data as ApiAdmin['batchSendResponse'];
  }

  async getWrongGeos({ campaignId } : { campaignId: number }) {
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/items/wrongGeos`)).data as ApiAdmin['getCampaignItemsWrongGeosResponse'];
  }

  async updateInstalls({list, campaignId}: {list: ApiAdmin['campaignUpdateInstallsBody'], campaignId: number}){
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/updateInstalls`, list)).data as ApiAdmin['doneResponce'];
  }

  async getBuffer({campaignId}: {campaignId: number}){
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/buffer`)).data as ApiAdmin['campaignGetBufferResponse'];
  }

  async removeFromBuffer({ids}: {ids: number[]}) {
    return (await this.axiosInstance.post(`/admin/campaign/bufferItems/remove`, {ids})).data as ApiAdmin['doneResponce'];
  }

  async bufferGetItemsInfoFromGoogle({campaignId, body}: {campaignId: number, body: ApiAdmin['getItemsInfoFromGoogle']}){
    const res = (await this.axiosInstance.post(`/admin/campaign/${campaignId}/buffer/getItemsInfoFromGoogle`, body)).data as ApiAdmin['longTaskResponse'];
    return res;
  }

  async bufferGetItemsInfoFromListId({campaignId, body}: {campaignId: number, body: ApiAdmin['getItemsInfoFromListId']}){
    const res = (await this.axiosInstance.post(`/admin/campaign/${campaignId}/buffer/getItemsInfoFromListId`, body)).data as ApiAdmin['longTaskResponse'];
    return res;
  }

  async getBufferGroup({groupId}: {groupId: number}){
    return (await this.axiosInstance.get(`/admin/campaign/bufferItems/group/${groupId}`)).data as ApiAdmin['getBufferGroupItemsResponse'];
  }
  
  async applyBufferGroup({campaignId, groupId, recreateExistingCampaignItems}: {campaignId: number, groupId: number, recreateExistingCampaignItems: boolean}){
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/applyBufferGroup`, {groupId, recreateExistingCampaignItems})).data as ApiAdmin['getBufferGroupItemsResponse'];
  }

  async itemsCollisions({campaignId}: {campaignId: number}) {
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/items/collisions`)).data as ApiAdmin['campaignItemsCollisionsResponse'];
  }

  async getChain({campaignId}: {campaignId: number}) {
    return (await this.axiosInstance.get(`/admin/campaign/${campaignId}/chain`)).data as ApiAdmin['campaignChainResponse'];
  }

  async removeItems({ids}: {ids: number[]}) {
    return (await this.axiosInstance.post(`/admin/campaign/removeItems`, {ids: ids})).data as ApiAdmin['removeCampaignItemsResponse'];
  }

  async regenerateCampaign({campaignId}: {campaignId: number}) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/regenerateCampaign`)).data as ApiAdmin['longTaskResponse'];
  }

  async listOwners() {
    return (await this.axiosInstance.get(`/admin/campaign/owners/list`)).data as ApiAdmin['listCampaignOwnersResponse'];
  }

  async updateOwner({campaignId, ownerId, updateChain}: {campaignId: number, ownerId: number, updateChain: boolean}) {
    return (await this.axiosInstance.post(`/admin/campaign/${campaignId}/owner`, {ownerId, updateChain})).data as ApiAdmin['updateCampaignOwnerBody'];
  }

  async moveItemsToAnotherCampaign(body: ApiAdmin['moveItemsToAnotherCampaignBody']) {
    if(!body.fullKeywords) body.fullKeywords = [];
    if(!body.campaignItemIds) body.campaignItemIds = [];
    return (await this.axiosInstance.post(`/admin/campaign/moveItemsToAnotherCampaign`, body)).data as ApiAdmin['doneResponce'];
  }

  async getPregeneratedReports({id}: {id: number}) {
    return (await this.axiosInstance.get(`/admin/campaign/${id}/reports/pregeneratedSheets`)).data as ApiAdmin['pregeneratedSheetsResponse'];
  }
}
