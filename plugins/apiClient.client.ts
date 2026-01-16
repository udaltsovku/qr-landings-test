import apiClient from "@/apiClient";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      apiClient: new apiClient({
        host: config.public.apiHost,
      })
    }
  }
});

declare module "#app" {
  interface NuxtApp {
    $apiClient: apiClient
  }
}