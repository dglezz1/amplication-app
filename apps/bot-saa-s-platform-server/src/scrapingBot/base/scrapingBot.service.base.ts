/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ScrapingBot as PrismaScrapingBot,
  Bot as PrismaBot,
} from "@prisma/client";

export class ScrapingBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ScrapingBotCountArgs, "select">
  ): Promise<number> {
    return this.prisma.scrapingBot.count(args);
  }

  async scrapingBots(
    args: Prisma.ScrapingBotFindManyArgs
  ): Promise<PrismaScrapingBot[]> {
    return this.prisma.scrapingBot.findMany(args);
  }
  async scrapingBot(
    args: Prisma.ScrapingBotFindUniqueArgs
  ): Promise<PrismaScrapingBot | null> {
    return this.prisma.scrapingBot.findUnique(args);
  }
  async createScrapingBot(
    args: Prisma.ScrapingBotCreateArgs
  ): Promise<PrismaScrapingBot> {
    return this.prisma.scrapingBot.create(args);
  }
  async updateScrapingBot(
    args: Prisma.ScrapingBotUpdateArgs
  ): Promise<PrismaScrapingBot> {
    return this.prisma.scrapingBot.update(args);
  }
  async deleteScrapingBot(
    args: Prisma.ScrapingBotDeleteArgs
  ): Promise<PrismaScrapingBot> {
    return this.prisma.scrapingBot.delete(args);
  }

  async getBot(parentId: string): Promise<PrismaBot | null> {
    return this.prisma.scrapingBot
      .findUnique({
        where: { id: parentId },
      })
      .bot();
  }
}
