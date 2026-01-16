import { AxiosInstance } from "axios";
import CRUD from "../../helpers/crudDecorator";

@CRUD("userFavFilters")
export default class UserFavFilters {
  private axiosInstance: AxiosInstance;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
  }
}
