// https://v3.nuxtjs.org/api/configuration/nuxt.config
console.log("nuxt.config.ts APP_TITLE", process.env.APP_TITLE);
console.log("nuxt.config.ts API_HOST", process.env.API_HOST);
import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    'nuxt-monaco-editor'
  ],
  monacoEditor: {
    locale: 'ru',
    componentName: {
      codeEditor: 'MonacoEditor',
      diffEditor: 'MonacoDiffEditor'
    }
  },
  ssr: false,
  runtimeConfig: {
    public: {
      apiHost: process.env.API_HOST || "http://localhost:3000",
      appTitle: process.env.APP_TITLE || "Amaya Admin",
    },
    contentfulToken: process.env.CONTENTFUL_TOKEN,
    contentfulSpace: process.env.CONTENTFUL_SPACE,
    contentfulEnv: process.env.CONTENTFUL_ENV,
    contentfulCmaToken: process.env.CONTENTFUL_CMA_TOKEN,
  },
  css: [
    'vue-final-modal/style.css',
    '@/node_modules/amaya-components/dist/style.css',
    '@/node_modules/element-plus/dist/index.css',
    "@/assets/styles/pages.scss",
    "@/assets/styles/el-table-over.scss"
  ],
  imports: {
    dirs: [
      'composables/**'
    ]
  },
  vite:{
    plugins:[
      eslintPlugin({
        failOnError: false,
        failOnWarning: false,
      })
    ]
  },
} as any)