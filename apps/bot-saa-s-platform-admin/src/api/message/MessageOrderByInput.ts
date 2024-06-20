import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  botId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  sentAt?: SortOrder;
  updatedAt?: SortOrder;
};
