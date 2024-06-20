import { ScrapingBotWhereInput } from "./ScrapingBotWhereInput";
import { ScrapingBotOrderByInput } from "./ScrapingBotOrderByInput";

export type ScrapingBotFindManyArgs = {
  where?: ScrapingBotWhereInput;
  orderBy?: Array<ScrapingBotOrderByInput>;
  skip?: number;
  take?: number;
};
