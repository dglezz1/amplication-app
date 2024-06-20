import { ScrapingBot as TScrapingBot } from "../api/scrapingBot/ScrapingBot";

export const SCRAPINGBOT_TITLE_FIELD = "targetUrl";

export const ScrapingBotTitle = (record: TScrapingBot): string => {
  return record.targetUrl?.toString() || String(record.id);
};
