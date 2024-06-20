import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  platform?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
