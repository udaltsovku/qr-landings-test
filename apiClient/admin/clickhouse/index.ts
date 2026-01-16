import { AxiosInstance } from "axios";
import { ApiAdmin } from "~/apiClient/types";

export default class Clickhouse {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async buildAggregationTable() {
    return (await this.axiosInstance.post(`/admin/clickhouse/buildAggregationTable`)).data as ApiAdmin['aggregateTableCreateResponse']
  }

  /**
   * @deprecated use `aggregateAggregationResultGroup` instead
   */
  async aggregate(data: ApiAdmin['aggregationTableAggregateBody']) {
    return (await this.axiosInstance.post(`/admin/clickhouse/aggregate`, data)).data as ApiAdmin['aggregatedTableResponse']
  }

  async createAggregationResultGroup(data: ApiAdmin['clickhouseCreateAggregationResultGroupBody']) {
    return (await this.axiosInstance.post(`/admin/clickhouse/aggregationResultGroup`, data)).data as ApiAdmin['createAggregationResultGroupResponse']
  }

  async getAggregationResultGroup(id: number){
    return (await this.axiosInstance.get(`/admin/clickhouse/aggregationResultGroup/${id}`)).data as ApiAdmin['aggregationResultGroupResponse']
  }

  async aggregateAggregationResultGroup(id: number, data: ApiAdmin['aggregationResultGroupAggregateBody']) {
    return (await this.axiosInstance.post(`/admin/clickhouse/aggregationResultGroup/${id}/aggregate`, data)).data as ApiAdmin['createdAggregationResultsResponse']
  }

  async clearAggregationResultGroup(id: number) {
    return (await this.axiosInstance.post(`/admin/clickhouse/aggregationResultGroup/${id}/clear`)).data as ApiAdmin['doneResponce']
  }

  async getAggregationTableGroups(id: number){
    return (await this.axiosInstance.get(`/admin/clickhouse/aggregationTable/${id}/groups`)).data as ApiAdmin['aggregationTableGroupsResponse']
  }
}
