import { AxiosInstance } from "axios";
import { CRUDOperations } from "../helpers/crudDecorator";

import User from "./users";
import LongTask from "./longTask";
import App from "./apps";
import Keyword from "./keywords";
import Campaign from "./campaigns";
import Strategy from "./strategies";
import AdInstall from "./adInstalls";
import AllInstall from "./allInstalls";
import AppPosition from "./appPositions";
import CampaignItem from "./campaignItems";
import CampaignScraperTask from "./campaignScraperTasks";
import ScraperWebDoneTasks from "./scraperWebDoneTasks";
import Sync from "./sync";
import Geo from "./geo";
import Ack from "./ack";
import CampaignCSV from "./campaignCSV";
import MarketplaceAccount from "./marketplaceAccounts";
import Cron from "./cron";
import Clickhouse from "./clickhouse";
import AggregationTable from "./aggregationTable";
import AggregationTemplate from "./aggregationTemplate";
import Alerts from "./alerts";
import Filters from "./filters";
import Reports from "./reports";
import PartnerAPIOrderBatch from "./PartnerAPIOrderBatch";
import PartnerAPIOrderStatus from "./PartnerAPIOrderStatus";
import StrategyMarket from "./strategyMarket";
import MonitorBookmark from "./monitorBookmark";
import UserFavFilters from "./userFavFilters";
import AdPartner from "./adPartner";
import AdPartnerPrice from "./adPartnerPrice";
import TotalDownloadsUnavailable from "./totalDownloadsUnavailable";
import Stats from "./stats";
import PartnerAPIOrderStatusHistory from "./PartnerAPIOrderStatusHistory";
import CapSetupMarketplace from "./capSetupMarketplace";
import GoogleSyncPartnerMapping from "./googleSyncPartnerMapping";
import GoogleSyncTable from "./googleSyncTable";

import {
  UserCrudSchema,
  LongTaskCrudSchema,
  AppCrudSchema,
  KeywordCrudSchema,
  CampaingCrudSchema,
  StrategyCrudSchema,
  AdInstallCrudSchema,
  AllInstallCrudSchema,
  AppPositionCrudSchema,
  CampaignItemCrudSchema,
  CampaignScraperTaskCrudSchema,
  ScraperWebDoneTasksCrudSchema,
  GeoCrudSchema,
  CampaignCSVCrudSchema,
  MarketplaceAccountCrudSchema,
  CronCrudSchema,
  AggregationTableCrudSchema,
  AggregationTemplateCrudSchema,
  ApiAdmin,
  PartnerAPIOrderBatchCrudSchema,
  StrategyMarketCrudSchema,
  MonitorBookmarkCrudSchema,
  UserFavFiltersCrudSchema,
  PartnerAPIOrderStatusCrudSchema,
  AdPartnerCrudSchema,
  AdPartnerPriceCrudSchema,
  TotalDownloadsUnavailableCrudSchema,
  PartnerAPIOrderStatusHistoryCrudSchema,
  CapSetupMarketplaceCrudSchema,
  GoogleSyncPartnerMappingCrudSchema,
  GoogleSyncTableCrudSchema,
} from "../types";

type UserType = User & CRUDOperations<UserCrudSchema>;
type LongTaskType = LongTask & CRUDOperations<LongTaskCrudSchema>;
type AppType = App & CRUDOperations<AppCrudSchema>;
type KeywordType = Keyword & CRUDOperations<KeywordCrudSchema>;
type CampaignType = Campaign & CRUDOperations<CampaingCrudSchema>;
type StrategyType = Strategy & CRUDOperations<StrategyCrudSchema>;
type AdInstallType = AdInstall & CRUDOperations<AdInstallCrudSchema>;
type AllInstallType = AllInstall & CRUDOperations<AllInstallCrudSchema>;
type AppPositionType = AppPosition & CRUDOperations<AppPositionCrudSchema>;
type CampaignItemType = CampaignItem & CRUDOperations<CampaignItemCrudSchema>;
type CampaignScraperTaskType = CampaignScraperTask & CRUDOperations<CampaignScraperTaskCrudSchema>;
type ScraperWebDoneTasksType = ScraperWebDoneTasks & CRUDOperations<ScraperWebDoneTasksCrudSchema>;
type SyncType = Sync;
type GeoType = Geo & CRUDOperations<GeoCrudSchema>;
type AckType = Ack;
type CampaignCSVType = CampaignCSV & CRUDOperations<CampaignCSVCrudSchema>;
type MarketplaceAccountType = MarketplaceAccount & CRUDOperations<MarketplaceAccountCrudSchema>;
type CronType = Cron & CRUDOperations<CronCrudSchema>;
type ClickhouseType = Clickhouse;
type AggregationTableType = AggregationTable & CRUDOperations<AggregationTableCrudSchema>;
type AggregationTemplateType = AggregationTemplate & CRUDOperations<AggregationTemplateCrudSchema>;
type AlertsType = Alerts;
type FilterType = Filters;
type ReportsType = Reports;
type PartnerAPIOrderBatchType = PartnerAPIOrderBatch & CRUDOperations<PartnerAPIOrderBatchCrudSchema>;
type StrategyMarketType = StrategyMarket & CRUDOperations<StrategyMarketCrudSchema>;
type MonitorBookmarkType = MonitorBookmark & CRUDOperations<MonitorBookmarkCrudSchema>;
type UserFavFiltersType = UserFavFilters & CRUDOperations<UserFavFiltersCrudSchema>;
type PartnerAPIOrderStatusType = PartnerAPIOrderStatus & CRUDOperations<PartnerAPIOrderStatusCrudSchema>;
type AdPartnerType = AdPartner & CRUDOperations<AdPartnerCrudSchema>;
type AdPartnerPriceType = AdPartnerPrice & CRUDOperations<AdPartnerPriceCrudSchema>;
type TotalDownloadsUnavailableType = TotalDownloadsUnavailable & CRUDOperations<TotalDownloadsUnavailableCrudSchema>;
type StatsType = Stats;
type PartnerAPIOrderStatusHistoryType = PartnerAPIOrderStatusHistory & CRUDOperations<PartnerAPIOrderStatusHistoryCrudSchema>;
type CapSetupMarketplaceType = CapSetupMarketplace & CRUDOperations<CapSetupMarketplaceCrudSchema>;
type GoogleSyncPartnerMappingType = GoogleSyncPartnerMapping & CRUDOperations<GoogleSyncPartnerMappingCrudSchema>;
type GoogleSyncTableType = GoogleSyncTable & CRUDOperations<GoogleSyncTableCrudSchema>;

export default class Admin {
  private axiosInstance: AxiosInstance;
  public user: UserType
  public longTask: LongTaskType
  public app: AppType
  public keyword: KeywordType
  public campaign: CampaignType
  public strategy: StrategyType
  public adInstall: AdInstallType
  public allInstall: AllInstallType
  public appPosition: AppPositionType
  public campaignItem: CampaignItemType
  public campaignScraperTask: CampaignScraperTaskType
  public scraperWebDoneTasks: ScraperWebDoneTasksType
  public sync: SyncType
  public geo: GeoType
  public ack: AckType
  public campaignCSV: CampaignCSVType
  public marketplaceAccount: MarketplaceAccountType
  public cron: CronType
  public clickhouse: ClickhouseType
  public aggregationTable: AggregationTableType
  public aggregationTemplate: AggregationTemplateType
  public alerts: Alerts
  public filters: Filters
  public reports: ReportsType
  public partnerAPIOrderBatch: PartnerAPIOrderBatchType;
  public strategyMarket: StrategyMarketType;
  public monitorBookmark: MonitorBookmarkType;
  public userFavFilters: UserFavFiltersType;
  public partnerAPIOrderStatus: PartnerAPIOrderStatusType;
  public adPartner: AdPartnerType;
  public totalDownloadsUnavailable: TotalDownloadsUnavailableType;
  public stats: StatsType;
  public partnerAPIOrderStatusHistory: PartnerAPIOrderStatusHistoryType;
  public capSetupMarketplace: CapSetupMarketplaceType;
  public adPartnerPrice: AdPartnerPriceType;
  public googleSyncPartnerMapping: GoogleSyncPartnerMappingType;
  public googleSyncTable: GoogleSyncTableType;

  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.user = new User(this.axiosInstance) as UserType;
    this.longTask = new LongTask(this.axiosInstance) as LongTaskType;
    this.app = new App(this.axiosInstance) as AppType;
    this.keyword = new Keyword(this.axiosInstance) as KeywordType;
    this.campaign = new Campaign(this.axiosInstance) as CampaignType;
    this.strategy = new Strategy(this.axiosInstance) as StrategyType;
    this.adInstall = new AdInstall(this.axiosInstance) as AdInstallType;
    this.allInstall = new AllInstall(this.axiosInstance) as AllInstallType;
    this.appPosition = new AppPosition(this.axiosInstance) as AppPositionType;
    this.campaignItem = new CampaignItem(this.axiosInstance) as CampaignItemType;
    this.campaignScraperTask = new CampaignScraperTask(this.axiosInstance) as CampaignScraperTaskType;
    this.scraperWebDoneTasks = new ScraperWebDoneTasks(this.axiosInstance) as ScraperWebDoneTasksType;
    this.sync = new Sync(this.axiosInstance) as SyncType;
    this.geo = new Geo(this.axiosInstance) as GeoType;
    this.ack = new Ack(this.axiosInstance) as AckType;
    this.campaignCSV = new CampaignCSV(this.axiosInstance) as CampaignCSVType;
    this.marketplaceAccount = new MarketplaceAccount(this.axiosInstance) as MarketplaceAccountType;
    this.cron = new Cron(this.axiosInstance) as CronType;
    this.clickhouse = new Clickhouse(this.axiosInstance) as ClickhouseType;
    this.aggregationTable = new AggregationTable(this.axiosInstance) as AggregationTableType;
    this.aggregationTemplate = new AggregationTemplate(this.axiosInstance) as AggregationTemplateType;
    this.alerts = new Alerts(this.axiosInstance) as AlertsType;
    this.filters = new Filters(this.axiosInstance) as FilterType;
    this.reports = new Reports(this.axiosInstance) as ReportsType;
    this.partnerAPIOrderBatch = new PartnerAPIOrderBatch(this.axiosInstance) as PartnerAPIOrderBatchType;
    this.strategyMarket = new StrategyMarket(this.axiosInstance) as StrategyMarketType;
    this.monitorBookmark = new MonitorBookmark(this.axiosInstance) as MonitorBookmarkType;
    this.userFavFilters = new UserFavFilters(this.axiosInstance) as UserFavFiltersType;
    this.partnerAPIOrderStatus = new PartnerAPIOrderStatus(this.axiosInstance) as PartnerAPIOrderStatusType;
    this.adPartner = new AdPartner(this.axiosInstance) as AdPartnerType;
    this.totalDownloadsUnavailable = new TotalDownloadsUnavailable(this.axiosInstance) as TotalDownloadsUnavailableType;
    this.stats = new Stats(this.axiosInstance) as StatsType;
    this.partnerAPIOrderStatusHistory = new PartnerAPIOrderStatusHistory(this.axiosInstance) as PartnerAPIOrderStatusHistoryType;
    this.capSetupMarketplace = new CapSetupMarketplace(this.axiosInstance) as CapSetupMarketplaceType;
    this.adPartnerPrice = new AdPartnerPrice(this.axiosInstance) as AdPartnerPriceType;
    this.googleSyncPartnerMapping = new GoogleSyncPartnerMapping(this.axiosInstance) as GoogleSyncPartnerMappingType;
    this.googleSyncTable = new GoogleSyncTable(this.axiosInstance) as GoogleSyncTableType;
  }

  async logout() {
    await this.axiosInstance.post("/admin/logout");
  }

  async getTaskStatus(){
    return (await this.axiosInstance.get(`/admin/tasksStatus`)).data as ApiAdmin['getTasksStatusResponse']
  }

  async whoami() {
    const data = (await this.axiosInstance.get("/admin/whoami")).data;
    console.log("whoami", data);
    return data;
  }
}
