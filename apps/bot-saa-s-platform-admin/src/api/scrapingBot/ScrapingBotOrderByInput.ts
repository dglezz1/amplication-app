import { SortOrder } from "../../util/SortOrder";

export type ScrapingBotOrderByInput = {
  botId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  schedule?: SortOrder;
  targetUrl?: SortOrder;
  updatedAt?: SortOrder;
};
