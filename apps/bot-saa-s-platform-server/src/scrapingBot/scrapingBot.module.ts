import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ScrapingBotModuleBase } from "./base/scrapingBot.module.base";
import { ScrapingBotService } from "./scrapingBot.service";
import { ScrapingBotController } from "./scrapingBot.controller";
import { ScrapingBotResolver } from "./scrapingBot.resolver";

@Module({
  imports: [ScrapingBotModuleBase, forwardRef(() => AuthModule)],
  controllers: [ScrapingBotController],
  providers: [ScrapingBotService, ScrapingBotResolver],
  exports: [ScrapingBotService],
})
export class ScrapingBotModule {}
