import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScrapingBotService } from "./scrapingBot.service";
import { ScrapingBotControllerBase } from "./base/scrapingBot.controller.base";

@swagger.ApiTags("scrapingBots")
@common.Controller("scrapingBots")
export class ScrapingBotController extends ScrapingBotControllerBase {
  constructor(
    protected readonly service: ScrapingBotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
