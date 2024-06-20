import { Subscription } from "../subscription/Subscription";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  subscription?: Subscription | null;
  updatedAt: Date;
};
