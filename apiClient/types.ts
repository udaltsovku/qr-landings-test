


// This file was automatically generated. Do not modify it manually.
// Use types like ApiInternal["typeName"]

export interface ApiInternal {
  exampleBody: {
    message: string;
  };
  exampleResponse: {
    message: string;
  };
  scraperWebWebhookBody: {
    uuid: string;
    canceled?: boolean;
  };
  scraperWebWebhookResponse: {
    done: boolean;
  };
  statusBody: {
    updating: boolean;
  };
  doneResponse: {
    done: boolean;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like ApiAdmin["typeName"]

export type CapSchema = {
  [k: string]: unknown;
}[];
export type Filters = {
  [k: string]: unknown;
}[];
export type FilterConfig = {
  type: "multipleNumbers" | "multipleStrings" | "multipleNumberRanges";
  column: string;
  values: {
    [k: string]: unknown;
  };
}[];
export type Data = {
  header?: boolean;
  cells: {
    style?: unknown;
    text?: unknown;
  }[];
}[];

export interface ApiAdmin {
  paginationBody: PaginationBody;
  paginationParams: {
    page?: number;
    pageSize?: number;
  };
  doneResponce: {
    done: boolean;
  };
  doneWithErrorResponse: {
    done: boolean;
    error?: string;
  };
  csvContentResponse: {
    content: string;
  };
  googleLogin: {
    token: string;
  };
  loginDone: {
    done: boolean;
  };
  whoami: {
    id: number;
    email: string;
    permissions: string[];
    loginDate: string;
  };
  logout: {
    done: boolean;
  };
  importKwBody: {
    list: {
      keyword: string;
      geo: string;
      device: string;
      ASA?: number;
      DI: number;
    }[];
  };
  importKwResponse: {
    list: {
      keyword: string;
      geo: string;
      device: string;
      ASA?: number;
      DI: number;
      id: number;
    }[];
  };
  syncAllInstallsBody: SyncAllInstallsBody;
  syncAllInstallsResponse: SyncAllInstallsResponse;
  syncProceedsBody: SyncAllInstallsBody;
  syncProceedsResponse: SyncAllInstallsResponse;
  syncAdInstallsResponse: {
    done: boolean;
    longTaskId: number;
  };
  syncMixpanelInstallsResponse: {
    done: boolean;
    longTaskId: number;
  };
  getLastSyncsResponse: {
    allDownloads: number;
    adDownloads: number;
  };
  syncTrendsBody: {
    curlString: string;
    date?: string;
    marketAppIds: string[];
    geoCodes: string[];
  };
  syncTrendsResponse: {
    done: boolean;
    longTaskId: number;
  };
  longTaskResponse: {
    longTaskId: number;
  };
  longTaskWithIdResponse: {
    id: number;
    longTaskId: number;
  };
  campaignCreate: {
    list: {
      appId: number;
      kwId: number;
      iterations?: number;
      tags?: string[];
      partnerId: number;
    }[];
    startDate: string;
    name: string;
    strategyId: number;
    schema?: unknown;
    installsDelimiter?: number;
    capSchema?: CapSchema;
    partnerTaskShare?: "none" | "atStart" | "everyDay";
    type: "none" | "hold" | "retention" | "push";
    ownerId?: number | null;
    listOrder?: "original" | "iphoneipadmixed";
  };
  campaignCreateFromGoogle: {
    docId: string;
    sheetId: string;
    startDate: string;
    name: string;
    strategyId: number;
    schema?: unknown;
    installsDelimiter?: number;
    capSchema?: CapSchema;
    partnerTaskShare?: "none" | "atStart" | "everyDay";
    type: "none" | "hold" | "retention" | "push";
    strategyVars?: {
      [k: string]: unknown;
    };
    ownerId?: number | null;
    partnerId: number;
    listOrder?: "original" | "iphoneipadmixed";
  };
  campaignCreateFromCampaign: {
    startDate: string;
    name: string;
    campaignId: number;
    schema?: unknown;
    capSchema?: CapSchema;
    strategyId?: number;
    type: "none" | "hold" | "retention" | "push";
    strategyVars?: {
      [k: string]: unknown;
    };
    ownerId?: number | null;
    listOrder?: "original" | "iphoneipadmixed";
  };
  campaignCreateFromList: {
    startDate: string;
    name: string;
    listId: string;
    schema?: unknown;
    capSchema?: CapSchema;
    strategyId: number;
    type: "none" | "hold" | "retention" | "push";
    partnerTaskShare?: "none" | "atStart" | "everyDay";
    installsDelimiter?: number;
    strategyVars?: {
      [k: string]: unknown;
    };
    ownerId?: number | null;
    partnerId: number;
    listOrder?: "original" | "iphoneipadmixed";
  };
  campaignCreateResponse: {
    done: boolean;
    id: number;
  };
  campaignGetFullListBody: {
    page?: number;
    pageSize?: number;
    filters?: {
      app?: number[];
      geo?: string[];
      status?: ("preparing" | "active" | "finished" | "created" | "generating" | "readyToStart")[];
      partner?: number[];
      name?: string;
      ownerIds?: number[];
      strategyIds?: number[];
    };
  };
  campaignGetFullListResponse: {
    items: {
      id: number;
      name: string;
      ownerId: number | null;
      ownerEmail: string | null;
      strategyMarketId: number | null;
      strategyName: string | null;
      strategyType: {
        [k: string]: unknown;
      };
      status: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
      isFinalized: boolean;
      cost: number | null;
      dateStart: string | null;
      dateEnd: string | null;
      geos: string[];
      apps: number[];
      partners: number[];
      marketplaces: ("APPSTORE" | "GOOGLEPLAY")[];
    }[];
    pagination: {
      totalItems: number;
      totalPages: number;
      currentPage: number;
      pageSize: number;
    };
  };
  campaignId: {
    id: number;
  };
  campaignGetFullItemsListResponse: {
    items: {
      i: number;
      id: number;
      app_id: number;
      app_name: string;
      app_marketAppId: string;
      kw_id: number;
      kw_geo: string;
      kw_device: string;
      kw_keyword: string;
      kw_di: number;
      kw_asa?: number | null;
      kw_hash: string | null;
      partner_id: number | null;
      partner_name: string | null;
      cost: number | null;
      installs: number[];
      appliedStrategyName: string | null;
      stage: "promotion" | "consolidation";
      iterations: number;
      tags: string[];
      parent_tags: {
        [k: string]: unknown;
      };
      stopped: boolean;
      ranks: {
        [k: string]: unknown;
      };
      traffic: string | null;
      prev_installs_sum: number;
    }[];
    pagination: {
      totalItems: number;
      totalPages: number;
      currentPage: number;
      pageSize: number;
    };
  };
  campaignGetBufferResponse: {
    items: {
      id: number;
      app: {
        id: number;
        marketAppId: string;
      };
      kw: {
        id: number;
        geo: string;
        device: string;
        keyword: string;
        di: number;
        asa?: number;
        kwHash: string | null;
      };
      partner: {
        id: number;
        name: string;
      };
      tags: string[];
    }[];
  };
  campaignUpdateStatus: {
    status: "preparing" | "active" | "finished";
  };
  campaignExportCSVParams: {
    id: number;
    type: "detailed" | "partner";
  };
  campaignExportCSVBody: {
    docId: string;
  };
  campaignExportCSVDynamicsParams: {
    id: number;
  };
  campaignIdParams: {
    id: number;
  };
  campaignOrganicUsageResponse: {
    maxUsages: {
      id: number;
      accountId: number;
      appId?: {
        [k: string]: unknown;
      };
      geo: string;
      maxPercent?: {
        [k: string]: unknown;
      };
      comment?: string | null;
      createdAt: string;
      updatedAt: string;
    }[];
    dateStart: string | null;
    daysDuration?: number;
    campaignDateStart: string | null;
    strategyDaysDuration?: number;
    campaignStatus?: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
    result: {
      [k: string]: unknown;
    }[];
  };
  campaignOrganicUsageQueryParams: {
    dateFrom?: string;
    dateTo?: string;
    geoType?: "campaignGeos" | "allGeos";
    displayReadyToStart?: "thisCampaign" | "allReadyToStartCampaigns";
  };
  campaignBuildBody: {
    capSchema: CapSchema;
  };
  getCampaignAPIBatchListResponse: {
    list: {
      id: number;
      status: "CREATED" | "INPROGRESS" | "COMPLETED" | "ERRORED";
      createdAt: string;
      count: {
        all: number;
        active: number;
        pending: number;
        completed: number;
        rejected: number;
        errored: number;
      };
    }[];
  };
  getCampaignAPIBatchStatusesResponse: {
    list: {
      id: number;
      status: "PENDING" | "ACTIVE" | "COMPLETED" | "REJECTED" | "ERRORED" | "CANCELED" | "NONE";
      createdAt: string;
      updatedAt: string;
      partnerId: number;
      installsSent: number;
      partnerOrderId: string;
      appId: number;
      appName: string;
      kw: string;
      geo: string;
      device: string;
      campaignItemId: number;
    }[];
  };
  getCampaignAPIBatchStatusesHistoryResponse: {
    list: {
      id: number;
      partnerAPIOrderStatusId: number;
      realStatus: string;
      createdAt: string;
      message?: string | null;
    }[];
  };
  campaignIdParamsWithBatchId: {
    id: number;
    bid: number;
  };
  campaignIdParamsWithBatchIdWithStatusId: {
    id: number;
    bid: number;
    sid: number;
  };
  getCampaignItemsWrongGeosResponse: {
    list: {
      wrongGeo: string;
      rightGeo: string;
    }[];
  };
  campaignUpdateInstallsBody: {
    list: {
      campaignItemId: number;
      date: string;
      installs: number;
    }[];
  };
  getItemsInfoFromGoogle: {
    groupId?: number;
    docId: string;
    sheetId: string;
  };
  getItemsInfoFromListId: {
    groupId?: number;
    listId: string;
  };
  appsGetListResponse: {
    id: number;
    icon: string;
    marketplace: string;
    marketAppId: string;
    name: string;
    campaigns: {
      all: number;
      active: number;
    };
  }[];
  appsGetAppListResponse: {
    geo: string;
    campaigns: {
      all: number;
      active: number;
    };
    appId: number;
  }[];
  appId: {
    id: number;
  };
  createAppBody: {
    name: string;
    marketplace: "APPSTORE" | "GOOGLEPLAY";
    marketAppId: string;
  };
  createAppResponse: {
    id: number;
  };
  appsGetListByMarketplaceAccountId: {
    marketplaceAccountId: number;
  };
  appsGetListByMarketplaceAccountIdResponse: {
    marketplace: "APPSTORE" | "GOOGLEPLAY";
    mpEvent?: {
      [k: string]: unknown;
    };
    id: number;
    name: string;
    marketAppId: string;
    createdAt: string;
    updatedAt: string;
    icon?: string | null;
    marketplaceAccountId?: {
      [k: string]: unknown;
    };
    mpProjectId?: {
      [k: string]: unknown;
    };
    mpWorkspaceId?: {
      [k: string]: unknown;
    };
    mpBookmarkId?: {
      [k: string]: unknown;
    };
    mpCountryPropertyName?: string | null;
    mpDevicePropertyName?: string | null;
  }[];
  filterType: "include" | "exclude";
  filterStoreNames: {
    name: "storeNames";
    type: "include" | "exclude";
    items: ("APPSTORE" | "GOOGLEPLAY")[];
  };
  filterAppIds: {
    name: "appIds";
    type: "include" | "exclude";
    items: number[];
  };
  filterGeoCodes: {
    name: "geoCodes";
    type: "include" | "exclude";
    items: string[];
  };
  filterDevice: {
    name: "device";
    type: "include" | "exclude";
    items: ("iphone" | "ipad")[];
  };
  filterKeyword: {
    name: "keyword";
    type: "include" | "exclude";
    items: string[];
  };
  filterStatus: {
    name: "status";
    type: "include" | "exclude";
    items: ("preparing" | "active" | "finished" | "created" | "generating" | "readyToStart")[];
  };
  filterCampaignIds: {
    name: "campaignIds";
    type: "include" | "exclude";
    items: number[];
  };
  campaignItemsFilter: {
    [k: string]: unknown;
  };
  generateReportUnitEconomicsByKwBody: {
    filters: Filters;
    datesRange: DatesRange;
    googleDocId: string;
    aggregationTableId: number;
  };
  generateReportUnitEconomicsByKwResponse: GenerateReportUnitEconomicsByKwResponse;
  generateReportUnitEconomicsSumBody: {
    filters: Filters;
    datesRange: DatesRange;
    googleDocId: string;
    aggregationTableId: number;
    datesRangeBefore: DatesRange;
  };
  generateReportUnitEconomicsSumResponse: GenerateReportUnitEconomicsByKwResponse;
  ackGetListByFiltersBody: {
    pagination: PaginationBody;
    filters: {
      [k: string]: unknown;
    }[];
  };
  ackGetListByFiltersPGCHBody: {
    filters: {
      [k: string]: unknown;
    }[];
    ranksPeriod: string[];
  };
  ackResponse: {
    pagination: {
      total: number;
      current: number;
      next?: number;
    };
    list: {
      app: {
        icon: string;
        name: string;
        id: number;
      };
      keyword: {
        geo: string;
        device: string;
        kw: string;
        marketplace: "APPSTORE" | "GOOGLEPLAY";
        di: number;
        asa?: number;
      };
      partner: {
        id?: number;
        name?: string;
      };
      campaign: {
        id: number;
        name: string;
        status: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
      };
      rank: {
        best: number;
        current: number;
        history: number[];
      };
      linkedApps: {
        id: number;
      }[];
      searchTop5: {
        icon: string;
      }[];
    }[];
  };
  ackPGCHResponse: {
    timing: {
      pgPrefilter: number;
      chQuery: number;
      pgAddition: number;
    };
    result: {
      kwHash: string;
      appId: string;
      keyword: string;
      geo: string;
      device: string;
      bestRank: number | null;
      lastRank: number | null;
      dailyRanks: {
        [k: string]: number;
      };
      top5: {
        id: string;
        icon: string;
        title: string;
        url: string;
      }[];
      DI: number | null;
      ASA: number | null;
      campaignStatus: string | null;
      campaignId: number | null;
      campaignName: string | null;
      campaignItemId: number | null;
      campaignItemTags: string | null;
      campaignItemStopped: boolean | null;
    }[];
  };
  ackCreateBody: {
    appIds: number[];
    geo: string[];
    list: string[];
    devices: ("iphone" | "ipad")[];
    marketplaces: ("APPSTORE" | "GOOGLEPLAY")[];
  };
  ackCreateResponse: {
    done: boolean;
  };
  keywordUpdateLinkedApps: {
    appsIds: number[];
  };
  keywordId: {
    id: number;
  };
  getAppMixpanelT2Response: {
    date: string;
    mp: number;
    t2: number;
  }[];
  defaultAggregateTable: {
    rowType: string;
    allInstall_date?: string;
    allInstall_weekday?: number;
    allInstall_installs?: number;
    positionAt?: string;
    position?: number;
    id?: number;
    campaignId?: number;
    app_id?: number;
    app_marketAppId: number;
    createdAt?: string;
    keyword_id: number;
    keyword_geo: string;
    keyword_marketplace: string;
    keyword_device: string;
    keyword_di: number;
    keyword_asa: number;
    appliedStrategyName?: string;
    partnerId?: number;
    cost?: number;
    tags: string[];
    keyword_createdAt?: string;
    campaign_id?: number;
    campaign_status?: string;
    campaign_dateStart?: string;
    campaign_dateEnd?: string;
    campaign_cost?: number;
    campaign_parentCampaignId?: number;
    campaign_strategyId?: number;
    strategy_daysDuration?: number;
    adInstall_date?: string;
    adInstall_installs?: number;
    adInstall_type?: string;
  }[];
  aggregateTableCreateResponse: {
    done: boolean;
    id: number;
  };
  aggregationTableAggregateBody: {
    tableId: number;
    schemaConfig: SchemaConfig;
    filterConfig: FilterConfig;
  };
  aggregatedTableResponse: {
    data: Data;
  };
  clickhouseCreateAggregationResultGroupBody: {
    name: string;
    aggregationTableId: number;
  };
  createAggregationResultGroupResponse: {
    id: number;
  };
  aggregationResultGroupId: {
    id: number;
  };
  aggregationResultGroupResponse: {
    id: number;
    aggregationTableId: number;
    name: string;
    aggregationResults: {
      id: number;
      name: string;
      loading: boolean;
      data: Data;
    }[];
  };
  aggregationResultGroupAggregateBody: {
    list: {
      name: string;
      schemaConfig: SchemaConfig;
      filterConfig: FilterConfig;
    }[];
  };
  createdAggregationResultsResponse: {
    aggregationResults: {
      id: number;
      name: string;
      loading: boolean;
      data: Data;
    }[];
  };
  aggregationTableId: {
    id: number;
  };
  aggregationTableGroupsResponse: {
    list: {
      id: number;
      aggregationTableId: number;
      name: string;
      createdAt: string;
    }[];
  };
  alertsGetList: {
    userId: number;
  };
  alertsGetListResponse: {
    id: number;
    type: "incorrect_installs";
    hash: number;
    data?: unknown;
    read: boolean;
    createdAt: string;
    updatedAt: string;
  }[];
  getIncorrectInstallsConfigResponse: {
    percents: number;
  };
  editIncorrectInstallsConfigBody: {
    percents: number;
  };
  geoGetListResponse: {
    id: number;
    geo: string;
    name: string;
  }[];
  getCampaignItemsFilterListsResponse: {
    store: ("APPSTORE" | "GOOGLEPLAY")[];
    app: {
      id: number;
      name: string;
    }[];
    geo: {
      geo: string;
      name: string;
    }[];
    device: ("iphone" | "ipad")[];
    status: ("preparing" | "active" | "finished" | "created" | "generating" | "readyToStart")[];
    campaign: {
      id: number;
      name: string;
    }[];
  };
  collectAppsPositionsForAllCampaignsByDateBody: {
    date: string;
  };
  getMarketplaceAccountsResponse: {
    marketplace: "APPSTORE" | "GOOGLEPLAY";
    lastSyncStatus: "success" | "error" | "none" | "inprogress";
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    email: string;
    password: string;
    lastSyncDate?: {
      [k: string]: unknown;
    };
    syncProgress: string;
    lastProceedsSync?: string;
  }[];
  getTasksStatusResponse: {
    lastTasks: {
      status: "active" | "finished" | "errored";
      id: number;
      name: string;
      message?: string | null;
      createdAt: string;
      updatedAt: string;
      endedAt?: {
        [k: string]: unknown;
      };
      payload?: {
        [k: string]: unknown;
      };
      descData?: {
        [k: string]: unknown;
      };
    }[];
    cron: {
      id: number;
      key: string;
      lastRun: string;
      working: boolean;
      createdAt: string;
      updatedAt: string;
    }[];
    count: {
      activeTasks: number;
      activeCron: number;
    };
    updating: boolean;
  };
  stopSendingToPartnerCampaignItem: {
    id: number;
  };
  unstopSendingToPartnerCampaignItem: {
    id: number;
  };
  stopCampaignItem: {
    ids: number[];
  };
  stopCampaignItemResponse: {
    id: number;
    stopped: boolean;
    tags: string[];
    installs: {
      id: number;
      installs: number;
      date: string;
    }[];
  }[];
  syncAllInstallsViaACTBody: {
    marketplaceAccountId: number;
    dateFrom?: string;
    dateTo?: string;
    types?: string[];
    customAuth?: {
      customAuth: "cookie";
      cookie: string;
    };
  };
  appstoreConnectExporterTypesResponse: {
    types: string[];
  };
  syncAllInstallsViaACTResponse: {
    done: boolean;
    longTaskId: number;
  };
  batchSendBody: {
    batchId: number;
    specifyStatusIds?: number[];
  };
  batchSendResponse: {
    done: boolean;
  };
  campaignItemsCollisionsResponse: {
    collisions: {
      appId: number;
      kwId: number;
      appName: string;
      appMarketAppId: string | null;
      kwKeyword: string;
      kwGeo: string;
      kwDevice: "iphone" | "ipad";
      kwMarketplace: "APPSTORE" | "GOOGLEPLAY";
      kwHash: string;
      campaigns: {
        id: number;
        name: string;
        dateStart: string;
        dateEnd: string;
        status: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
        collisionWithCampaignItemId: number;
        strategyMarketId: number | null;
        costCollision: boolean;
      }[];
    }[];
  };
  totalDownloadsUnavailableBody?: unknown;
  totalDownloadsUnavailableResponse: {
    type2: {
      result: {
        appId: number;
        geo?: string;
        data: {
          date: string;
          t2: number;
        }[];
      }[];
      summary: {
        date: string;
        t2: number;
      }[];
    };
    organics: {
      result: {
        appId: number;
        geo?: string;
        data: {
          date: string;
          installs: number;
        }[];
      }[];
      summary: {
        date: string;
        installs: number;
      }[];
    };
    unavailable: {
      [k: string]: unknown;
    };
  };
  totalDownloadsUnavailableGeosResponse: {
    geo: string;
    name: string;
    count: number;
  }[];
  totalDownloadsUnavailablePlatformsResponse: {
    platformVersion: string;
    count: number;
  }[];
  totalDownloadsUnavailableAppsResponse: {
    appId: number;
    name: string;
    marketAppId: string;
    count: number;
    marketplaceAccount?: {
      id: number;
      name: string;
    };
  }[];
  statsX2GetBody: {
    period: string[];
    apps: number[];
    geos: string[];
    periodGrouping: "day" | "week" | "month";
    charts: (
      | "type2"
      | "impressions-bySearch"
      | "installs-bySearch"
      | "proceeds-bySearch"
      | "organic-installs-bySearch"
      | "organic-impressions-bySearch"
      | "cr-org-bySearch"
      | "cr-bySearch"
      | "arpu-bySearch"
      | "impressions-allSources"
      | "installs-allSources"
      | "proceeds-allSources"
      | "organic-installs-allSources"
      | "organic-impressions-allSources"
      | "cr-org-allSources"
      | "cr-allSources"
      | "arpu-allSources"
    )[];
  };
  statsX2GetResponse: {
    series: {
      name: string;
      data: {
        x: string;
        y: number;
      }[];
      metric: string;
      app: string;
      appId: string;
      geo: string;
    }[];
  };
  statsX2GeosResponse: {
    geo: string;
    name: string;
    count: number;
  }[];
  statsX2AppsResponse: {
    appId: number;
    name: string;
    marketAppId: string;
    count: number;
    marketplaceAccount?: {
      id: number;
      name: string;
    };
  }[];
  campaignBufferItemsDeleteBody: {
    ids: number[];
  };
  campaignChainResponse: {
    chain: number[];
  };
  getBufferGroupItemsParams: {
    groupId: number;
  };
  getBufferGroupItemsResponse: {
    list: {
      id: number;
      kwId: number;
      appId: number;
      kwHash: string | null;
      tags: string[];
      collisions?: unknown;
      appName: string;
      appMarketId: string;
      kw: string;
      geo: string;
      device: string;
    }[];
  };
  campaignApplyBufferBody: {
    groupId: number;
    recreateExistingCampaignItems: boolean;
  };
  idsBody: {
    ids: number[];
  };
  removeCampaignItemsResponse: {
    itemsWithCost: {
      id: number;
      appId: number;
      kwId: number;
      cost: number;
    }[];
  };
  applyNewIterationsOrderBody: {
    order: ("none" | "hold" | "retention" | "push")[];
  };
  getNewIterationsOrderResponse: ("none" | "hold" | "retention" | "push")[];
  createStrategyBody: {
    body?: unknown;
    name: string;
    type: "none" | "hold" | "retention" | "push";
  };
  doneResponseWithId: {
    done: boolean;
    id: number;
  };
  partnerCancelTasksBody: {
    orderIds: string[];
  };
  updateCampaignOwnerBody: {
    ownerId: number;
    updateChain: boolean;
  };
  listCampaignOwnersResponse: {
    owners: {
      id: number;
      email: string;
    }[];
  };
  favStrategyListResponse: number[];
  favStrategyParams: {
    strategyId: number;
  };
  moveItemsToAnotherCampaignBody: {
    campaignItemIds?: number[];
    fullKeywords?: {
      keyword: string;
      geo: string;
      device: "iphone" | "ipad";
      kwHash: string;
      appMarketId: string;
    }[];
    targetCampaignId: number;
    moveWithTagsExceptStop: boolean;
    removeFromCurrentCampaign: boolean;
    recreateExistingCampaignItems: boolean;
    tags: string[];
  };
  datesPeriodParams: {
    dateFrom?: string;
    dateTo?: string;
  };
  pregeneratedSheetsResponse: {
    sheets: {
      url: string;
      lastUpdatedStamp: number;
      type: "detailed" | "partner";
    }[];
  };
}
export interface PaginationBody {
  page: number;
  limit: number;
}
export interface SyncAllInstallsBody {
  nodeFetchString: string;
  datesRange: DatesRange;
  marketplaceAccountId: number;
}
export interface DatesRange {
  /**
   * YYYY-MM-DD
   */
  from: string;
  /**
   * YYYY-MM-DD
   */
  to: string;
}
export interface SyncAllInstallsResponse {
  done: boolean;
  longTaskId: number;
}
export interface GenerateReportUnitEconomicsByKwResponse {
  done: boolean;
  longTaskId: number;
}
export interface SchemaConfig {
  columns: {
    column: string;
    title: string;
    options?: {
      week?: number;
      top?: number[];
    };
  }[];
  plugins: {
    plugin: string;
    options?: unknown;
  }[];
}


// This file was automatically generated. Do not modify it manually.
// Use types like AdInstallCrudSchema["typeName"]

export interface AdInstallCrudSchema {
  adInstall: AdInstall;
  item: AdInstall;
  itemList: {
    list: AdInstall[];
  };
  itemSearchList: {
    list: AdInstall[];
  };
  paginatedItemList: {
    list: AdInstall[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    adInstallId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    type?: {
      [k: string]: unknown;
    };
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
    campaignId?: {
      [k: string]: unknown;
    };
    campaignItemId?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AdInstall {
  device?: "iphone" | "ipad";
  type?: {
    [k: string]: unknown;
  };
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  installs?: number;
  campaignId?: {
    [k: string]: unknown;
  };
  campaignItemId?: {
    [k: string]: unknown;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like AdPartnerCrudSchema["typeName"]

export interface AdPartnerCrudSchema {
  adPartner: AdPartner;
  item: AdPartner;
  itemList: {
    list: AdPartner[];
  };
  itemSearchList: {
    list: AdPartner[];
  };
  paginatedItemList: {
    list: AdPartner[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    adPartnerId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AdPartner {
  id?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AdPartnerPriceCrudSchema["typeName"]

export interface AdPartnerPriceCrudSchema {
  adPartnerPrice: AdPartnerPrice;
  item: AdPartnerPrice;
  itemList: {
    list: AdPartnerPrice[];
  };
  itemSearchList: {
    list: AdPartnerPrice[];
  };
  paginatedItemList: {
    list: AdPartnerPrice[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    adPartnerPriceId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    marketPlace?: "APPSTORE" | "GOOGLEPLAY";
    device?: "iphone" | "ipad";
    adPartnerId?: number;
    geo?: string | null;
    price?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AdPartnerPrice {
  marketPlace?: "APPSTORE" | "GOOGLEPLAY";
  device?: "iphone" | "ipad";
  id?: number;
  adPartnerId?: number;
  geo?: string | null;
  price?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AggregationResultCrudSchema["typeName"]

export interface AggregationResultCrudSchema {
  aggregationResult: AggregationResult;
  item: AggregationResult;
  itemList: {
    list: AggregationResult[];
  };
  itemSearchList: {
    list: AggregationResult[];
  };
  paginatedItemList: {
    list: AggregationResult[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    aggregationResultId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    aggregationGroupId?: number;
    data?: {
      [k: string]: unknown;
    };
    loading?: boolean;
    name?: string;
    schema?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AggregationResult {
  id?: number;
  aggregationGroupId?: number;
  data?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  loading?: boolean;
  name?: string;
  schema?: {
    [k: string]: unknown;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like AggregationResultGroupCrudSchema["typeName"]

export interface AggregationResultGroupCrudSchema {
  aggregationResultGroup: AggregationResultGroup;
  item: AggregationResultGroup;
  itemList: {
    list: AggregationResultGroup[];
  };
  itemSearchList: {
    list: AggregationResultGroup[];
  };
  paginatedItemList: {
    list: AggregationResultGroup[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    aggregationResultGroupId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    aggregationTableId?: number;
    name?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AggregationResultGroup {
  id?: number;
  aggregationTableId?: number;
  name?: string;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AggregationTableCrudSchema["typeName"]

export interface AggregationTableCrudSchema {
  aggregationTable: AggregationTable;
  item: AggregationTable;
  itemList: {
    list: AggregationTable[];
  };
  itemSearchList: {
    list: AggregationTable[];
  };
  paginatedItemList: {
    list: AggregationTable[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    aggregationTableId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    key?: string;
    name?: string;
    filterConfig?: {
      [k: string]: unknown;
    };
    schemaConfig?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AggregationTable {
  id?: number;
  key?: string;
  name?: string;
  filterConfig?: {
    [k: string]: unknown;
  };
  schemaConfig?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AggregationTemplateCrudSchema["typeName"]

export interface AggregationTemplateCrudSchema {
  aggregationTemplate: AggregationTemplate;
  item: AggregationTemplate;
  itemList: {
    list: AggregationTemplate[];
  };
  itemSearchList: {
    list: AggregationTemplate[];
  };
  paginatedItemList: {
    list: AggregationTemplate[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    aggregationTemplateId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
    schema?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AggregationTemplate {
  id?: number;
  name?: string;
  schema?: {
    [k: string]: unknown;
  };
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AlertCrudSchema["typeName"]

export interface AlertCrudSchema {
  alert: Alert;
  item: Alert;
  itemList: {
    list: Alert[];
  };
  itemSearchList: {
    list: Alert[];
  };
  paginatedItemList: {
    list: Alert[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    alertId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    type?: "incorrect_installs";
    hash?: number;
    data?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Alert {
  type?: "incorrect_installs";
  id?: number;
  hash?: number;
  data?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AlertConfigCrudSchema["typeName"]

export interface AlertConfigCrudSchema {
  alertConfig: AlertConfig;
  item: AlertConfig;
  itemList: {
    list: AlertConfig[];
  };
  itemSearchList: {
    list: AlertConfig[];
  };
  paginatedItemList: {
    list: AlertConfig[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    alertConfigId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    type?: "incorrect_installs";
    data?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AlertConfig {
  type?: "incorrect_installs";
  id?: number;
  data?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AlertReadCrudSchema["typeName"]

export interface AlertReadCrudSchema {
  alertRead: AlertRead;
  item: AlertRead;
  itemList: {
    list: AlertRead[];
  };
  itemSearchList: {
    list: AlertRead[];
  };
  paginatedItemList: {
    list: AlertRead[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    alertReadId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    alertId?: number;
    userId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AlertRead {
  id?: number;
  alertId?: number;
  userId?: number;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AllInstallCrudSchema["typeName"]

export interface AllInstallCrudSchema {
  allInstall: AllInstall;
  item: AllInstall;
  itemList: {
    list: AllInstall[];
  };
  itemSearchList: {
    list: AllInstall[];
  };
  paginatedItemList: {
    list: AllInstall[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    allInstallId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AllInstall {
  device?: "iphone" | "ipad";
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  installs?: number;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AllInstallSearchTrafficCrudSchema["typeName"]

export interface AllInstallSearchTrafficCrudSchema {
  allInstallSearchTraffic: AllInstallSearchTraffic;
  item: AllInstallSearchTraffic;
  itemList: {
    list: AllInstallSearchTraffic[];
  };
  itemSearchList: {
    list: AllInstallSearchTraffic[];
  };
  paginatedItemList: {
    list: AllInstallSearchTraffic[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    allInstallSearchTrafficId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AllInstallSearchTraffic {
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  installs?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AppCrudSchema["typeName"]

export interface AppCrudSchema {
  app: App;
  item: App;
  itemList: {
    list: App[];
  };
  itemSearchList: {
    list: App[];
  };
  paginatedItemList: {
    list: App[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    appId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    marketplace?: "APPSTORE" | "GOOGLEPLAY";
    mpEvent?: {
      [k: string]: unknown;
    };
    name?: string;
    marketAppId?: string;
    icon?: string | null;
    marketplaceAccountId?: {
      [k: string]: unknown;
    };
    mpProjectId?: {
      [k: string]: unknown;
    };
    mpWorkspaceId?: {
      [k: string]: unknown;
    };
    mpBookmarkId?: {
      [k: string]: unknown;
    };
    mpCountryPropertyName?: string | null;
    mpDevicePropertyName?: string | null;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface App {
  marketplace?: "APPSTORE" | "GOOGLEPLAY";
  mpEvent?: {
    [k: string]: unknown;
  };
  id?: number;
  name?: string;
  marketAppId?: string;
  createdAt?: string;
  updatedAt?: string;
  icon?: string | null;
  marketplaceAccountId?: {
    [k: string]: unknown;
  };
  mpProjectId?: {
    [k: string]: unknown;
  };
  mpWorkspaceId?: {
    [k: string]: unknown;
  };
  mpBookmarkId?: {
    [k: string]: unknown;
  };
  mpCountryPropertyName?: string | null;
  mpDevicePropertyName?: string | null;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AppKeywordCrudSchema["typeName"]

export interface AppKeywordCrudSchema {
  appKeyword: AppKeyword;
  item: AppKeyword;
  itemList: {
    list: AppKeyword[];
  };
  itemSearchList: {
    list: AppKeyword[];
  };
  paginatedItemList: {
    list: AppKeyword[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    appKeywordId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    appId?: number;
    keywordId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AppKeyword {
  id?: number;
  appId?: number;
  keywordId?: number;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AppKeywordStatusCrudSchema["typeName"]

export interface AppKeywordStatusCrudSchema {
  appKeywordStatus: AppKeywordStatus;
  item: AppKeywordStatus;
  itemList: {
    list: AppKeywordStatus[];
  };
  itemSearchList: {
    list: AppKeywordStatus[];
  };
  paginatedItemList: {
    list: AppKeywordStatus[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    appKeywordStatusId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    status?: "NotSet" | "Active" | "Paused" | "Leaved";
    appId?: number;
    keywordId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AppKeywordStatus {
  status?: "NotSet" | "Active" | "Paused" | "Leaved";
  id?: number;
  appId?: number;
  keywordId?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AppPositionCrudSchema["typeName"]

export interface AppPositionCrudSchema {
  appPosition: AppPosition;
  item: AppPosition;
  itemList: {
    list: AppPosition[];
  };
  itemSearchList: {
    list: AppPosition[];
  };
  paginatedItemList: {
    list: AppPosition[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    appPositionId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    appId?: number;
    kwId?: number;
    position?: {
      [k: string]: unknown;
    };
    positionAt?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AppPosition {
  id?: number;
  appId?: number;
  kwId?: number;
  position?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
  positionAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like AutoExportPartnerTableCrudSchema["typeName"]

export interface AutoExportPartnerTableCrudSchema {
  autoExportPartnerTable: AutoExportPartnerTable;
  item: AutoExportPartnerTable;
  itemList: {
    list: AutoExportPartnerTable[];
  };
  itemSearchList: {
    list: AutoExportPartnerTable[];
  };
  paginatedItemList: {
    list: AutoExportPartnerTable[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    autoExportPartnerTableId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
    exportUrl?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface AutoExportPartnerTable {
  id?: number;
  name?: string;
  exportUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaignCSVCrudSchema["typeName"]

export interface CampaignCSVCrudSchema {
  campaignCSV: CampaignCSV;
  item: CampaignCSV;
  itemList: {
    list: CampaignCSV[];
  };
  itemSearchList: {
    list: CampaignCSV[];
  };
  paginatedItemList: {
    list: CampaignCSV[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaignCSVId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    type?: "detailed" | "partner";
    campaignId?: number;
    csv?: string;
    precreatedSheetUrl?: string | null;
    lastUpdatedStamp?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CampaignCSV {
  type?: "detailed" | "partner";
  id?: number;
  campaignId?: number;
  csv?: string;
  createdAt?: string;
  updatedAt?: string;
  precreatedSheetUrl?: string | null;
  lastUpdatedStamp?: {
    [k: string]: unknown;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaignGenerationDataCrudSchema["typeName"]

export interface CampaignGenerationDataCrudSchema {
  campaignGenerationData: CampaignGenerationData;
  item: CampaignGenerationData;
  itemList: {
    list: CampaignGenerationData[];
  };
  itemSearchList: {
    list: CampaignGenerationData[];
  };
  paginatedItemList: {
    list: CampaignGenerationData[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaignGenerationDataId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    campaignId?: number;
    levels?: {
      [k: string]: unknown;
    };
    caps?: {
      [k: string]: unknown;
    };
    currentDayOfWeek?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CampaignGenerationData {
  id?: number;
  campaignId?: number;
  levels?: {
    [k: string]: unknown;
  };
  caps?: {
    [k: string]: unknown;
  };
  currentDayOfWeek?: number;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaignItemCrudSchema["typeName"]

export type Tags = string[];
export type InitialTags = string[];

export interface CampaignItemCrudSchema {
  campaignItem: CampaignItem;
  item: CampaignItem;
  itemList: {
    list: CampaignItem[];
  };
  itemSearchList: {
    list: CampaignItem[];
  };
  paginatedItemList: {
    list: CampaignItem[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaignItemId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    stage?: "promotion" | "consolidation";
    campaignId?: number;
    appId?: number;
    suggestedInstalls?: {
      [k: string]: unknown;
    };
    date?: string;
    kwId?: number;
    appliedStrategyName?: string | null;
    partnerId?: {
      [k: string]: unknown;
    };
    cost?: number | null;
    tags?: Tags;
    initialTags?: InitialTags;
    iterations?: number;
    stopped?: boolean;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CampaignItem {
  stage?: "promotion" | "consolidation";
  id?: number;
  campaignId?: number;
  appId?: number;
  suggestedInstalls?: {
    [k: string]: unknown;
  };
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  kwId?: number;
  appliedStrategyName?: string | null;
  partnerId?: {
    [k: string]: unknown;
  };
  cost?: number | null;
  tags?: Tags;
  initialTags?: InitialTags;
  iterations?: number;
  stopped?: boolean;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaignItemBufferCrudSchema["typeName"]


export interface CampaignItemBufferCrudSchema {
  campaignItemBuffer: CampaignItemBuffer;
  item: CampaignItemBuffer;
  itemList: {
    list: CampaignItemBuffer[];
  };
  itemSearchList: {
    list: CampaignItemBuffer[];
  };
  paginatedItemList: {
    list: CampaignItemBuffer[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaignItemBufferId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    stage?: "promotion" | "consolidation";
    groupId?: number | null;
    campaignId?: {
      [k: string]: unknown;
    };
    kwId?: number;
    appId?: number;
    partnerId?: number;
    tags?: Tags;
    collisions?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CampaignItemBuffer {
  stage?: "promotion" | "consolidation";
  id?: number;
  groupId?: number | null;
  campaignId?: {
    [k: string]: unknown;
  };
  kwId?: number;
  appId?: number;
  partnerId?: number;
  tags?: Tags;
  collisions?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaignScraperTaskCrudSchema["typeName"]

export interface CampaignScraperTaskCrudSchema {
  campaignScraperTask: CampaignScraperTask;
  item: CampaignScraperTask;
  itemList: {
    list: CampaignScraperTask[];
  };
  itemSearchList: {
    list: CampaignScraperTask[];
  };
  paginatedItemList: {
    list: CampaignScraperTask[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaignScraperTaskId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    campaignId?: number;
    scraperFileName?: string;
    doneAt?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CampaignScraperTask {
  id?: number;
  campaignId?: number;
  scraperFileName?: string;
  doneAt?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaignStatusHistoryCrudSchema["typeName"]

export interface CampaignStatusHistoryCrudSchema {
  campaignStatusHistory: CampaignStatusHistory;
  item: CampaignStatusHistory;
  itemList: {
    list: CampaignStatusHistory[];
  };
  itemSearchList: {
    list: CampaignStatusHistory[];
  };
  paginatedItemList: {
    list: CampaignStatusHistory[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaignStatusHistoryId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    status?: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
    changedBy?: "user" | "system";
    campaignId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CampaignStatusHistory {
  status?: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
  changedBy?: "user" | "system";
  id?: number;
  campaignId?: number;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CampaingCrudSchema["typeName"]

export interface CampaingCrudSchema {
  campaing: Campaing;
  item: Campaing;
  itemList: {
    list: Campaing[];
  };
  itemSearchList: {
    list: Campaing[];
  };
  paginatedItemList: {
    list: Campaing[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    campaingId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    status?: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
    type?: "default" | "fantom";
    partnerTaskShare?: "none" | "atStart" | "everyDay";
    name?: string;
    isFinalized?: boolean;
    strategyId?: number;
    dateStart?: string | null;
    dateEnd?: string | null;
    cost?: number | null;
    parentCampaignId?: {
      [k: string]: unknown;
    };
    strategySchema?: {
      [k: string]: unknown;
    };
    installsDelimiter?: number;
    capSchema?: {
      [k: string]: unknown;
    };
    lastUpdatedStamp?: {
      [k: string]: unknown;
    };
    strategyMarketId?: {
      [k: string]: unknown;
    };
    strategyVars?: {
      [k: string]: unknown;
    };
    ownerId?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Campaing {
  status?: "preparing" | "active" | "finished" | "created" | "generating" | "readyToStart";
  type?: "default" | "fantom";
  partnerTaskShare?: "none" | "atStart" | "everyDay";
  id?: number;
  name?: string;
  isFinalized?: boolean;
  strategyId?: number;
  createdAt?: string;
  updatedAt?: string;
  dateStart?: string | null;
  dateEnd?: string | null;
  cost?: number | null;
  parentCampaignId?: {
    [k: string]: unknown;
  };
  strategySchema?: {
    [k: string]: unknown;
  };
  installsDelimiter?: number;
  capSchema?: {
    [k: string]: unknown;
  };
  lastUpdatedStamp?: {
    [k: string]: unknown;
  };
  strategyMarketId?: {
    [k: string]: unknown;
  };
  strategyVars?: {
    [k: string]: unknown;
  };
  ownerId?: {
    [k: string]: unknown;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like CapSetupMarketplaceCrudSchema["typeName"]

export interface CapSetupMarketplaceCrudSchema {
  capSetupMarketplace: CapSetupMarketplace;
  item: CapSetupMarketplace;
  itemList: {
    list: CapSetupMarketplace[];
  };
  itemSearchList: {
    list: CapSetupMarketplace[];
  };
  paginatedItemList: {
    list: CapSetupMarketplace[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    capSetupMarketplaceId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
    description?: string;
    jsonString?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface CapSetupMarketplace {
  id?: number;
  name?: string;
  description?: string;
  jsonString?: string;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like CronCrudSchema["typeName"]

export interface CronCrudSchema {
  cron: Cron;
  item: Cron;
  itemList: {
    list: Cron[];
  };
  itemSearchList: {
    list: Cron[];
  };
  paginatedItemList: {
    list: Cron[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    cronId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    key?: string;
    lastRun?: string;
    working?: boolean;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Cron {
  id?: number;
  key?: string;
  lastRun?: string;
  working?: boolean;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like DeferredCampaignItemsToMoveToCampaignCrudSchema["typeName"]


export interface DeferredCampaignItemsToMoveToCampaignCrudSchema {
  deferredCampaignItemsToMoveToCampaign: DeferredCampaignItemsToMoveToCampaign;
  item: DeferredCampaignItemsToMoveToCampaign;
  itemList: {
    list: DeferredCampaignItemsToMoveToCampaign[];
  };
  itemSearchList: {
    list: DeferredCampaignItemsToMoveToCampaign[];
  };
  paginatedItemList: {
    list: DeferredCampaignItemsToMoveToCampaign[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    deferredCampaignItemsToMoveToCampaignId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    checkType?: "everyDay" | "atDeadline";
    campaignItemId?: number;
    sourceCampaignId?: number;
    targetCampaignId?: number;
    moveDate?: string;
    moveWithTagsExceptStop?: boolean;
    removeFromCurrentCampaign?: boolean;
    tags?: Tags;
    recreateExistingCampaignItems?: boolean;
    symbol?: string;
    useTargetRank?: boolean;
    rank?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface DeferredCampaignItemsToMoveToCampaign {
  checkType?: "everyDay" | "atDeadline";
  id?: number;
  campaignItemId?: number;
  sourceCampaignId?: number;
  targetCampaignId?: number;
  moveDate?: string;
  moveWithTagsExceptStop?: boolean;
  removeFromCurrentCampaign?: boolean;
  tags?: Tags;
  recreateExistingCampaignItems?: boolean;
  symbol?: string;
  useTargetRank?: boolean;
  rank?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like FavoriteUserStrategyCrudSchema["typeName"]

export interface FavoriteUserStrategyCrudSchema {
  favoriteUserStrategy: FavoriteUserStrategy;
  item: FavoriteUserStrategy;
  itemList: {
    list: FavoriteUserStrategy[];
  };
  itemSearchList: {
    list: FavoriteUserStrategy[];
  };
  paginatedItemList: {
    list: FavoriteUserStrategy[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    favoriteUserStrategyId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    userId?: number;
    strategyId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface FavoriteUserStrategy {
  id?: number;
  userId?: number;
  strategyId?: number;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like GeoCrudSchema["typeName"]

export interface GeoCrudSchema {
  geo: Geo;
  item: Geo;
  itemList: {
    list: Geo[];
  };
  itemSearchList: {
    list: Geo[];
  };
  paginatedItemList: {
    list: Geo[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    geoId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    geo?: string;
    name?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Geo {
  id?: number;
  geo?: string;
  name?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like GoogleSyncPartnerMappingCrudSchema["typeName"]

export interface GoogleSyncPartnerMappingCrudSchema {
  googleSyncPartnerMapping: GoogleSyncPartnerMapping;
  item: GoogleSyncPartnerMapping;
  itemList: {
    list: GoogleSyncPartnerMapping[];
  };
  itemSearchList: {
    list: GoogleSyncPartnerMapping[];
  };
  paginatedItemList: {
    list: GoogleSyncPartnerMapping[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    googleSyncPartnerMappingId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    partnerName?: string;
    adPartnerId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface GoogleSyncPartnerMapping {
  id?: number;
  partnerName?: string;
  adPartnerId?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like GoogleSyncTableCrudSchema["typeName"]

export interface GoogleSyncTableCrudSchema {
  googleSyncTable: GoogleSyncTable;
  item: GoogleSyncTable;
  itemList: {
    list: GoogleSyncTable[];
  };
  itemSearchList: {
    list: GoogleSyncTable[];
  };
  paginatedItemList: {
    list: GoogleSyncTable[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    googleSyncTableId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
    docId?: string;
    sheetId?: string;
    enabled?: boolean;
    lastSyncAt?: {
      [k: string]: unknown;
    };
    syncMessage?: string | null;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface GoogleSyncTable {
  id?: number;
  name?: string;
  docId?: string;
  sheetId?: string;
  enabled?: boolean;
  lastSyncAt?: {
    [k: string]: unknown;
  };
  syncMessage?: string | null;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like ImpressionsTotalCrudSchema["typeName"]

export interface ImpressionsTotalCrudSchema {
  impressionsTotal: ImpressionsTotal;
  item: ImpressionsTotal;
  itemList: {
    list: ImpressionsTotal[];
  };
  itemSearchList: {
    list: ImpressionsTotal[];
  };
  paginatedItemList: {
    list: ImpressionsTotal[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    impressionsTotalId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: {
      [k: string]: unknown;
    };
    appId?: number;
    geo?: string | null;
    platformVersion?: string | null;
    date?: string;
    weekday?: number;
    value?: number;
    type?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface ImpressionsTotal {
  device?: {
    [k: string]: unknown;
  };
  id?: number;
  appId?: number;
  geo?: string | null;
  platformVersion?: string | null;
  date?: string;
  weekday?: number;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like KeywordCrudSchema["typeName"]

export interface KeywordCrudSchema {
  keyword: Keyword;
  item: Keyword;
  itemList: {
    list: Keyword[];
  };
  itemSearchList: {
    list: Keyword[];
  };
  paginatedItemList: {
    list: Keyword[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    keywordId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    marketplace?: "APPSTORE" | "GOOGLEPLAY";
    device?: "iphone" | "ipad";
    geo?: string;
    kw?: string;
    DI?: number;
    ASA?: {
      [k: string]: unknown;
    };
    kwHash?: string | null;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Keyword {
  marketplace?: "APPSTORE" | "GOOGLEPLAY";
  device?: "iphone" | "ipad";
  id?: number;
  geo?: string;
  kw?: string;
  DI?: number;
  ASA?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
  kwHash?: string | null;
}


// This file was automatically generated. Do not modify it manually.
// Use types like KeywordASAHistoryCrudSchema["typeName"]

export interface KeywordASAHistoryCrudSchema {
  keywordASAHistory: KeywordASAHistory;
  item: KeywordASAHistory;
  itemList: {
    list: KeywordASAHistory[];
  };
  itemSearchList: {
    list: KeywordASAHistory[];
  };
  paginatedItemList: {
    list: KeywordASAHistory[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    keywordASAHistoryId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    keywordId?: number;
    ASA?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface KeywordASAHistory {
  id?: number;
  keywordId?: number;
  ASA?: number;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like KeywordDIHistoryCrudSchema["typeName"]

export interface KeywordDIHistoryCrudSchema {
  keywordDIHistory: KeywordDIHistory;
  item: KeywordDIHistory;
  itemList: {
    list: KeywordDIHistory[];
  };
  itemSearchList: {
    list: KeywordDIHistory[];
  };
  paginatedItemList: {
    list: KeywordDIHistory[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    keywordDIHistoryId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    keywordId?: number;
    DI?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface KeywordDIHistory {
  id?: number;
  keywordId?: number;
  DI?: number;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like KeywordGarbageCrudSchema["typeName"]

export interface KeywordGarbageCrudSchema {
  keywordGarbage: KeywordGarbage;
  item: KeywordGarbage;
  itemList: {
    list: KeywordGarbage[];
  };
  itemSearchList: {
    list: KeywordGarbage[];
  };
  paginatedItemList: {
    list: KeywordGarbage[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    keywordGarbageId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    keywordId?: number;
    appId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface KeywordGarbage {
  id?: number;
  keywordId?: number;
  createdAt?: string;
  appId?: number;
}


// This file was automatically generated. Do not modify it manually.
// Use types like KeywordLinkedAppsCrudSchema["typeName"]

export interface KeywordLinkedAppsCrudSchema {
  keywordLinkedApps: KeywordLinkedApps;
  item: KeywordLinkedApps;
  itemList: {
    list: KeywordLinkedApps[];
  };
  itemSearchList: {
    list: KeywordLinkedApps[];
  };
  paginatedItemList: {
    list: KeywordLinkedApps[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    keywordLinkedAppsId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    keywordId?: number;
    appId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface KeywordLinkedApps {
  id?: number;
  keywordId?: number;
  appId?: number;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like KeywordTopsCrudSchema["typeName"]

export interface KeywordTopsCrudSchema {
  keywordTops: KeywordTops;
  item: KeywordTops;
  itemList: {
    list: KeywordTops[];
  };
  itemSearchList: {
    list: KeywordTops[];
  };
  paginatedItemList: {
    list: KeywordTops[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    keywordTopsId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    keywordId?: number;
    rank?: number;
    entityTitle?: string | null;
    entityId?: string | null;
    entityIcon?: string | null;
    entityUrl?: string | null;
    entityType?: string;
    positionAt?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface KeywordTops {
  id?: number;
  keywordId?: number;
  rank?: number;
  entityTitle?: string | null;
  entityId?: string | null;
  entityIcon?: string | null;
  entityUrl?: string | null;
  entityType?: string;
  positionAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like LongTaskCrudSchema["typeName"]

export interface LongTaskCrudSchema {
  longTask: LongTask;
  item: LongTask;
  itemList: {
    list: LongTask[];
  };
  itemSearchList: {
    list: LongTask[];
  };
  paginatedItemList: {
    list: LongTask[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    longTaskId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    status?: "active" | "finished" | "errored";
    name?: string;
    message?: string | null;
    endedAt?: {
      [k: string]: unknown;
    };
    payload?: {
      [k: string]: unknown;
    };
    descData?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface LongTask {
  status?: "active" | "finished" | "errored";
  id?: number;
  name?: string;
  message?: string | null;
  createdAt?: string;
  updatedAt?: string;
  endedAt?: {
    [k: string]: unknown;
  };
  payload?: {
    [k: string]: unknown;
  };
  descData?: {
    [k: string]: unknown;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like MarketplaceAccountCrudSchema["typeName"]

export interface MarketplaceAccountCrudSchema {
  marketplaceAccount: MarketplaceAccount;
  item: MarketplaceAccount;
  itemList: {
    list: MarketplaceAccount[];
  };
  itemSearchList: {
    list: MarketplaceAccount[];
  };
  paginatedItemList: {
    list: MarketplaceAccount[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    marketplaceAccountId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    marketplace?: "APPSTORE" | "GOOGLEPLAY";
    lastSyncStatus?: "success" | "error" | "none" | "inprogress";
    name?: string;
    email?: string;
    password?: string;
    lastSyncDate?: {
      [k: string]: unknown;
    };
    syncProgress?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface MarketplaceAccount {
  marketplace?: "APPSTORE" | "GOOGLEPLAY";
  lastSyncStatus?: "success" | "error" | "none" | "inprogress";
  id?: number;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  email?: string;
  password?: string;
  lastSyncDate?: {
    [k: string]: unknown;
  };
  syncProgress?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like MaxOrganicUsageCrudSchema["typeName"]

export interface MaxOrganicUsageCrudSchema {
  maxOrganicUsage: MaxOrganicUsage;
  item: MaxOrganicUsage;
  itemList: {
    list: MaxOrganicUsage[];
  };
  itemSearchList: {
    list: MaxOrganicUsage[];
  };
  paginatedItemList: {
    list: MaxOrganicUsage[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    maxOrganicUsageId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    accountId?: number;
    appId?: {
      [k: string]: unknown;
    };
    geo?: string;
    maxPercent?: {
      [k: string]: unknown;
    };
    comment?: string | null;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface MaxOrganicUsage {
  id?: number;
  accountId?: number;
  appId?: {
    [k: string]: unknown;
  };
  geo?: string;
  maxPercent?: {
    [k: string]: unknown;
  };
  comment?: string | null;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like MonitorBookmarkCrudSchema["typeName"]

export interface MonitorBookmarkCrudSchema {
  monitorBookmark: MonitorBookmark;
  item: MonitorBookmark;
  itemList: {
    list: MonitorBookmark[];
  };
  itemSearchList: {
    list: MonitorBookmark[];
  };
  paginatedItemList: {
    list: MonitorBookmark[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    monitorBookmarkId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    monitor?: string;
    name?: string;
    url?: string;
    userId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface MonitorBookmark {
  id?: number;
  monitor?: string;
  name?: string;
  url?: string;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like MpInstallCrudSchema["typeName"]

export interface MpInstallCrudSchema {
  mpInstall: MpInstall;
  item: MpInstall;
  itemList: {
    list: MpInstall[];
  };
  itemSearchList: {
    list: MpInstall[];
  };
  paginatedItemList: {
    list: MpInstall[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    mpInstallId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface MpInstall {
  device?: "iphone" | "ipad";
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  installs?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like PartnerAPIOrderBatchCrudSchema["typeName"]

export interface PartnerAPIOrderBatchCrudSchema {
  partnerAPIOrderBatch: PartnerAPIOrderBatch;
  item: PartnerAPIOrderBatch;
  itemList: {
    list: PartnerAPIOrderBatch[];
  };
  itemSearchList: {
    list: PartnerAPIOrderBatch[];
  };
  paginatedItemList: {
    list: PartnerAPIOrderBatch[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    partnerAPIOrderBatchId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    status?: "CREATED" | "INPROGRESS" | "COMPLETED" | "ERRORED";
    campaignId?: number;
    date?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface PartnerAPIOrderBatch {
  status?: "CREATED" | "INPROGRESS" | "COMPLETED" | "ERRORED";
  id?: number;
  campaignId?: number;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like PartnerAPIOrderStatusCrudSchema["typeName"]

export type AdInstallIds = number[];

export interface PartnerAPIOrderStatusCrudSchema {
  partnerAPIOrderStatus: PartnerAPIOrderStatus;
  item: PartnerAPIOrderStatus;
  itemList: {
    list: PartnerAPIOrderStatus[];
  };
  itemSearchList: {
    list: PartnerAPIOrderStatus[];
  };
  paginatedItemList: {
    list: PartnerAPIOrderStatus[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    partnerAPIOrderStatusId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    status?: "PENDING" | "ACTIVE" | "COMPLETED" | "REJECTED" | "ERRORED" | "CANCELED" | "NONE";
    partnerId?: number;
    campaignId?: number;
    campaignItemId?: number;
    orderBatchId?: number;
    installsSent?: number;
    partnerOrderId?: string;
    adInstallIds?: AdInstallIds;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface PartnerAPIOrderStatus {
  status?: "PENDING" | "ACTIVE" | "COMPLETED" | "REJECTED" | "ERRORED" | "CANCELED" | "NONE";
  id?: number;
  partnerId?: number;
  campaignId?: number;
  campaignItemId?: number;
  orderBatchId?: number;
  installsSent?: number;
  partnerOrderId?: string;
  createdAt?: string;
  updatedAt?: string;
  adInstallIds?: AdInstallIds;
}


// This file was automatically generated. Do not modify it manually.
// Use types like PartnerAPIOrderStatusHistoryCrudSchema["typeName"]

export interface PartnerAPIOrderStatusHistoryCrudSchema {
  partnerAPIOrderStatusHistory: PartnerAPIOrderStatusHistory;
  item: PartnerAPIOrderStatusHistory;
  itemList: {
    list: PartnerAPIOrderStatusHistory[];
  };
  itemSearchList: {
    list: PartnerAPIOrderStatusHistory[];
  };
  paginatedItemList: {
    list: PartnerAPIOrderStatusHistory[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    partnerAPIOrderStatusHistoryId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    partnerAPIOrderStatusId?: number;
    realStatus?: string;
    message?: string | null;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface PartnerAPIOrderStatusHistory {
  id?: number;
  partnerAPIOrderStatusId?: number;
  realStatus?: string;
  createdAt?: string;
  message?: string | null;
}


// This file was automatically generated. Do not modify it manually.
// Use types like PlannedInstallCrudSchema["typeName"]

export interface PlannedInstallCrudSchema {
  plannedInstall: PlannedInstall;
  item: PlannedInstall;
  itemList: {
    list: PlannedInstall[];
  };
  itemSearchList: {
    list: PlannedInstall[];
  };
  paginatedItemList: {
    list: PlannedInstall[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    plannedInstallId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
    campaignId?: {
      [k: string]: unknown;
    };
    campaignItemId?: {
      [k: string]: unknown;
    };
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface PlannedInstall {
  device?: "iphone" | "ipad";
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
  installs?: number;
  campaignId?: {
    [k: string]: unknown;
  };
  campaignItemId?: {
    [k: string]: unknown;
  };
}


// This file was automatically generated. Do not modify it manually.
// Use types like ProceedsCrudSchema["typeName"]

export interface ProceedsCrudSchema {
  proceeds: Proceeds;
  item: Proceeds;
  itemList: {
    list: Proceeds[];
  };
  itemSearchList: {
    list: Proceeds[];
  };
  paginatedItemList: {
    list: Proceeds[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    proceedsId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: {
      [k: string]: unknown;
    };
    appId?: number;
    geo?: string | null;
    platformVersion?: string | null;
    date?: string;
    weekday?: number;
    value?: number;
    type?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Proceeds {
  device?: {
    [k: string]: unknown;
  };
  id?: number;
  appId?: number;
  geo?: string | null;
  platformVersion?: string | null;
  date?: string;
  weekday?: number;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like ProceedsAllSourcesCrudSchema["typeName"]

export interface ProceedsAllSourcesCrudSchema {
  proceedsAllSources: ProceedsAllSources;
  item: ProceedsAllSources;
  itemList: {
    list: ProceedsAllSources[];
  };
  itemSearchList: {
    list: ProceedsAllSources[];
  };
  paginatedItemList: {
    list: ProceedsAllSources[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    proceedsAllSourcesId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    proceeds?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface ProceedsAllSources {
  device?: "iphone" | "ipad";
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  proceeds?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like ProceedsSearchTrafficCrudSchema["typeName"]

export interface ProceedsSearchTrafficCrudSchema {
  proceedsSearchTraffic: ProceedsSearchTraffic;
  item: ProceedsSearchTraffic;
  itemList: {
    list: ProceedsSearchTraffic[];
  };
  itemSearchList: {
    list: ProceedsSearchTraffic[];
  };
  paginatedItemList: {
    list: ProceedsSearchTraffic[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    proceedsSearchTrafficId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    proceeds?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface ProceedsSearchTraffic {
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  proceeds?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like ScraperWebCanceledTasksCrudSchema["typeName"]

export interface ScraperWebCanceledTasksCrudSchema {
  scraperWebCanceledTasks: ScraperWebCanceledTasks;
  item: ScraperWebCanceledTasks;
  itemList: {
    list: ScraperWebCanceledTasks[];
  };
  itemSearchList: {
    list: ScraperWebCanceledTasks[];
  };
  paginatedItemList: {
    list: ScraperWebCanceledTasks[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    scraperWebCanceledTasksId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    uuid?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface ScraperWebCanceledTasks {
  id?: number;
  uuid?: string;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like ScraperWebDoneTasksCrudSchema["typeName"]

export interface ScraperWebDoneTasksCrudSchema {
  scraperWebDoneTasks: ScraperWebDoneTasks;
  item: ScraperWebDoneTasks;
  itemList: {
    list: ScraperWebDoneTasks[];
  };
  itemSearchList: {
    list: ScraperWebDoneTasks[];
  };
  paginatedItemList: {
    list: ScraperWebDoneTasks[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    scraperWebDoneTasksId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    uuid?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface ScraperWebDoneTasks {
  id?: number;
  uuid?: string;
  createdAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like StrategyCrudSchema["typeName"]

export interface StrategyCrudSchema {
  strategy: Strategy;
  item: Strategy;
  itemList: {
    list: Strategy[];
  };
  itemSearchList: {
    list: Strategy[];
  };
  paginatedItemList: {
    list: Strategy[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    strategyId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
    rule?: {
      [k: string]: unknown;
    };
    description?: string;
    enabled?: boolean;
    daysDuration?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Strategy {
  id?: number;
  name?: string;
  rule?: {
    [k: string]: unknown;
  };
  description?: string;
  enabled?: boolean;
  createdAt?: string;
  updatedAt?: string;
  daysDuration?: number;
}


// This file was automatically generated. Do not modify it manually.
// Use types like StrategyMarketCrudSchema["typeName"]

export interface StrategyMarketCrudSchema {
  strategyMarket: StrategyMarket;
  item: StrategyMarket;
  itemList: {
    list: StrategyMarket[];
  };
  itemSearchList: {
    list: StrategyMarket[];
  };
  paginatedItemList: {
    list: StrategyMarket[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    strategyMarketId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    type?: "none" | "hold" | "retention" | "push";
    name?: string;
    body?: {
      [k: string]: unknown;
    };
    hash?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface StrategyMarket {
  type?: "none" | "hold" | "retention" | "push";
  id?: number;
  name?: string;
  body?: {
    [k: string]: unknown;
  };
  createdAt?: string;
  updatedAt?: string;
  hash?: number;
}


// This file was automatically generated. Do not modify it manually.
// Use types like ToolStatusCrudSchema["typeName"]

export interface ToolStatusCrudSchema {
  toolStatus: ToolStatus;
  item: ToolStatus;
  itemList: {
    list: ToolStatus[];
  };
  itemSearchList: {
    list: ToolStatus[];
  };
  paginatedItemList: {
    list: ToolStatus[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    toolStatusId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    updating?: boolean;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface ToolStatus {
  id?: number;
  updating?: boolean;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like TotalDownloadsInstitutionalCrudSchema["typeName"]

export interface TotalDownloadsInstitutionalCrudSchema {
  totalDownloadsInstitutional: TotalDownloadsInstitutional;
  item: TotalDownloadsInstitutional;
  itemList: {
    list: TotalDownloadsInstitutional[];
  };
  itemSearchList: {
    list: TotalDownloadsInstitutional[];
  };
  paginatedItemList: {
    list: TotalDownloadsInstitutional[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    totalDownloadsInstitutionalId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: {
      [k: string]: unknown;
    };
    appId?: number;
    geo?: string | null;
    date?: string;
    weekday?: number;
    value?: number;
    type?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface TotalDownloadsInstitutional {
  device?: {
    [k: string]: unknown;
  };
  id?: number;
  appId?: number;
  geo?: string | null;
  date?: string;
  weekday?: number;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like TotalDownloadsSearchCrudSchema["typeName"]

export interface TotalDownloadsSearchCrudSchema {
  totalDownloadsSearch: TotalDownloadsSearch;
  item: TotalDownloadsSearch;
  itemList: {
    list: TotalDownloadsSearch[];
  };
  itemSearchList: {
    list: TotalDownloadsSearch[];
  };
  paginatedItemList: {
    list: TotalDownloadsSearch[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    totalDownloadsSearchId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: {
      [k: string]: unknown;
    };
    appId?: number;
    geo?: string | null;
    platformVersion?: string | null;
    date?: string;
    weekday?: number;
    value?: number;
    type?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface TotalDownloadsSearch {
  device?: {
    [k: string]: unknown;
  };
  id?: number;
  appId?: number;
  geo?: string | null;
  platformVersion?: string | null;
  date?: string;
  weekday?: number;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like TotalDownloadsUnavailableCrudSchema["typeName"]

export interface TotalDownloadsUnavailableCrudSchema {
  totalDownloadsUnavailable: TotalDownloadsUnavailable;
  item: TotalDownloadsUnavailable;
  itemList: {
    list: TotalDownloadsUnavailable[];
  };
  itemSearchList: {
    list: TotalDownloadsUnavailable[];
  };
  paginatedItemList: {
    list: TotalDownloadsUnavailable[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    totalDownloadsUnavailableId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: {
      [k: string]: unknown;
    };
    appId?: number;
    geo?: string | null;
    platformVersion?: string | null;
    date?: string;
    weekday?: number;
    value?: number;
    type?: string;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface TotalDownloadsUnavailable {
  device?: {
    [k: string]: unknown;
  };
  id?: number;
  appId?: number;
  geo?: string | null;
  platformVersion?: string | null;
  date?: string;
  weekday?: number;
  value?: number;
  createdAt?: string;
  updatedAt?: string;
  type?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like Trends24HInstallCrudSchema["typeName"]

export interface Trends24HInstallCrudSchema {
  trends24HInstall: Trends24HInstall;
  item: Trends24HInstall;
  itemList: {
    list: Trends24HInstall[];
  };
  itemSearchList: {
    list: Trends24HInstall[];
  };
  paginatedItemList: {
    list: Trends24HInstall[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    trends24HInstallId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface Trends24HInstall {
  device?: "iphone" | "ipad";
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  installs?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like TrendsMonthInstallCrudSchema["typeName"]

export interface TrendsMonthInstallCrudSchema {
  trendsMonthInstall: TrendsMonthInstall;
  item: TrendsMonthInstall;
  itemList: {
    list: TrendsMonthInstall[];
  };
  itemSearchList: {
    list: TrendsMonthInstall[];
  };
  paginatedItemList: {
    list: TrendsMonthInstall[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    trendsMonthInstallId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    device?: "iphone" | "ipad";
    appId?: number;
    geo?: string;
    weekday?: number;
    date?: string;
    installs?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface TrendsMonthInstall {
  device?: "iphone" | "ipad";
  id?: number;
  appId?: number;
  geo?: string;
  weekday?: number;
  date?: string;
  installs?: number;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like UserCrudSchema["typeName"]

export type Permissions = string[];

export interface UserCrudSchema {
  user: User;
  item: User;
  itemList: {
    list: User[];
  };
  itemSearchList: {
    list: User[];
  };
  paginatedItemList: {
    list: User[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    userId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    provider?: "google";
    email?: string;
    password?: string;
    permissions?: Permissions;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface User {
  provider?: "google";
  id?: number;
  email?: string;
  password?: string;
  permissions?: Permissions;
  createdAt?: string;
  updatedAt?: string;
}


// This file was automatically generated. Do not modify it manually.
// Use types like UserFavFiltersCrudSchema["typeName"]

export interface UserFavFiltersCrudSchema {
  userFavFilters: UserFavFilters;
  item: UserFavFilters;
  itemList: {
    list: UserFavFilters[];
  };
  itemSearchList: {
    list: UserFavFilters[];
  };
  paginatedItemList: {
    list: UserFavFilters[];
    total: number;
  };
  paginatedQuery: {
    page?: number;
    perPage?: number;
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  itemIdParam: {
    userFavFiltersId: number;
  };
  itemWithoutIdAndOptionalKeys: {
    name?: string;
    url?: string;
    userId?: number;
  };
  doneWithId: {
    done: boolean;
    id: number;
  };
  done: {
    done: boolean;
  };
  count: {
    count: number;
  };
  itemSearchBody: {
    search: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
  };
  dataSelectionQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
    /**
     * Ака сюда отправлять JSON.stringify([{id: "desc"}]) -> &order=[{"id":"desc"}]
     */
    order?: string;
    /**
     * Ака сюда отправлять JSON.stringify({"id": true, "platform": true}) -> &attributes={"id":true,"platform":true}
     */
    attributes?: string;
  };
  dataSelectionWhereQuery: {
    /**
     * Ака сюда отправлять JSON.stringify({id: 777}) -> &where={"id":777}
     */
    where?: string;
  };
}
export interface UserFavFilters {
  id?: number;
  name?: string;
  url?: string;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
}