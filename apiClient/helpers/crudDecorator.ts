import { AxiosInstance } from "axios";

export type CrudDataTypes ={
  item: any;
  itemList: any;
  itemSearchList: any;
  paginatedItemList: any;
  paginatedQuery: any;
  itemIdParam: any;
  itemWithoutIdAndOptionalKeys: any;
  doneWithId: any;
  done: any;
  count: any;
  itemSearchBody: any;
  dataSelectionQuery: any;
  dataSelectionWhereQuery: any;
};

function CRUD<T extends { new (...args: any[]): object }, X extends CrudDataTypes>(endpoint: string) {
  return (constructor: T) => {
    return class extends constructor implements CRUDOperations<X> {
      private axiosInstance: AxiosInstance;

      constructor(...args: any[]) {
        super(...args);
        this.axiosInstance = args[0];
      }

      async getList({ where, order, attributes}
        :{where?: object, order?: object, attributes?: object}) {
        const data: X['itemList'] 
          = (await this.axiosInstance.get(`/admin/${endpoint}`, {
            params: {
              where: where ? JSON.stringify(where) : undefined,
              order: order ? JSON.stringify(order) : undefined,
              attributes: attributes ? JSON.stringify(attributes) : undefined,
            }
          })).data
        return data;
      }

      async get({id}:{id:number}){
        const data: X['item'] 
          = (await this.axiosInstance.get(`/admin/${endpoint}/${id}`)).data
        return data
      }

      async search({ search, order }: { search: string, order?: object }) {
        const data: X['itemSearchList'] 
          = (await this.axiosInstance.post(`/admin/${endpoint}/search`, { 
            search,
            order: order ? order : undefined,
          })).data;
        return data;
      }

      async getPaginatedQuery(
        {page, perPage, where, order, attributes}
        :{page: number, perPage: number, where?: object, order?: object, attributes?: {[key:string]: boolean}}
      ) {
        const data: X['paginatedItemList'] 
          = (await this.axiosInstance.get(`/admin/${endpoint}/paginated`, {
            params: {
              page,
              perPage,
              where: where ? JSON.stringify(where) : undefined,
              order: order ? JSON.stringify(order) : undefined,
              attributes: attributes ? JSON.stringify(attributes) : undefined,
          }
        })).data;
        return data
      }

      async create(data: X['itemWithoutIdAndOptionalKeys']) {
        const response = await this.axiosInstance.post(`/admin/${endpoint}`, data);
        return response.data;
      }

      async update(id:number, data: X['itemWithoutIdAndOptionalKeys']) {
        const response = await this.axiosInstance.patch(`/admin/${endpoint}/${id}`, data);
        return response;
      }

      async delete({ id }: X['itemIdParam']) {
        const response = await this.axiosInstance.delete(`/admin/${endpoint}/${id}`);
        return response;
      }

      async count({ where }: X['dataSelectionWhereQuery']) {
        const data: X['count'] 
          = (await this.axiosInstance.get(`/admin/${endpoint}/count`, {
            params: {
              where: where ? JSON.stringify(where) : undefined,
            }
          })).data;
        return data;
      }
    };
  };
}

export interface CRUDOperations<X extends CrudDataTypes> {
  getOwners(arg0: { id: number; }): unknown;
  getActiveSubscriptions: any;
  getConnections(arg0: { id: number; }): unknown;
  
  getList({ where, order, attributes }
    :{where?: object, order?: object, attributes?: object})
    :Promise<X['itemList']>;

  get({id}:{id:number}): Promise<X['item']>;

  search({ search, order }: { search: string, order?:object }): Promise<X['itemSearchList']>;
  
  getPaginatedQuery(
    {page, perPage, where, order, attributes}
    :{page: number, perPage: number, where?: object, order?: object, attributes?: {[key:string]: boolean}})
    :Promise<X['paginatedItemList']>;

  create(data: X['itemWithoutIdAndOptionalKeys']): Promise<X['doneWithId']>;

  update(id: number, data: X['itemWithoutIdAndOptionalKeys']): Promise<X['done']>;

  delete({ id }: {id: number}): Promise<X['done']>;

  count({ where }: X['dataSelectionWhereQuery']): Promise<X['count']>;
}


export default CRUD;