import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScrapingBotServiceBase } from "./base/scrapingBot.service.base";

@Injectable()
export class ScrapingBotService extends ScrapingBotServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
