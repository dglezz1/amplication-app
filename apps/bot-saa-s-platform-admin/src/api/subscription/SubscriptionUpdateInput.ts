import { PaymentUpdateManyWithoutSubscriptionsInput } from "./PaymentUpdateManyWithoutSubscriptionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionUpdateInput = {
  endDate?: Date | null;
  payments?: PaymentUpdateManyWithoutSubscriptionsInput;
  startDate?: Date | null;
  status?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
