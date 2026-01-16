import { defineStore, acceptHMRUpdate } from 'pinia'
type storeType = {
  key: string,
}

type amIType = {
  id: number,
  email: string,
  permissions: string[],
  dataLoaded: boolean,
  loginDate: string,
  previousRoute: string
}

export const useIAm = defineStore('ami', {
  state: () => ({
    id: 0,
    email: "",
    permissions: [],
    loginDate: "",
    dataLoaded: false,
    previousRoute: ''
  } as amIType),

  actions: {
    set(data: amIType) {
      this.id = data.id;
      this.email = data.email;
      this.permissions = data.permissions;
      this.loginDate = data.loginDate;
      this.dataLoaded = true;
    },
    async load() {
      try {
        let res = await useNuxtApp().$apiClient.admin.whoami();

        this.set(res);
        return res;
      } catch (error) {
        console.error(error);
        this.dataLoaded = true;
        return false;
      }
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useIAm, import.meta.hot))
}
