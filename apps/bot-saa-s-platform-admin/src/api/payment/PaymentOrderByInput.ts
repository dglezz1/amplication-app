import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  subscriptionId?: SortOrder;
  updatedAt?: SortOrder;
};
