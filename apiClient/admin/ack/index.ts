import { AxiosInstance } from "axios";
import { ApiAdmin } from "~/apiClient/types";

export default class Ack {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }

  async create({
    list,
    geo,
    marketplaces,
    devices,
    apps
  }: {
    list: string[];
    geo: string[];
    marketplaces: string[];
    devices: string[];
    apps: number[];
  }){
    console.log("Creating keywords", {list, geo, marketplaces, devices, appIds: apps})
    return {done: true}
  }

  async getList(body: ApiAdmin['paginationBody']){
    return (await this.axiosInstance.post(`/admin/ack/getList`, body)).data as ApiAdmin['ackResponse'];
  }

  async getListByFilters(body: { pagination: ApiAdmin['paginationBody'], filters: any }){
    return (await this.axiosInstance.post(`/admin/ack/getListByFilters`, body)).data as ApiAdmin['ackResponse'];
  }

  async getListByFiltersPGCH(body: ApiAdmin['ackGetListByFiltersPGCHBody']){
    return (await this.axiosInstance.post(`/admin/ack/getListByFiltersPGCH`, body)).data as ApiAdmin['ackPGCHResponse'];
  }
}
