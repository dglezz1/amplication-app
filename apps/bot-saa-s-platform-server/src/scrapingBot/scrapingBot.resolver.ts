import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ScrapingBotResolverBase } from "./base/scrapingBot.resolver.base";
import { ScrapingBot } from "./base/ScrapingBot";
import { ScrapingBotService } from "./scrapingBot.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ScrapingBot)
export class ScrapingBotResolver extends ScrapingBotResolverBase {
  constructor(
    protected readonly service: ScrapingBotService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
