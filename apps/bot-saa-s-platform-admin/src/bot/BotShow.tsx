import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BOT_TITLE_FIELD } from "./BotTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const BotShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="platform" source="platform" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Message" target="botId" label="Messages">
          <Datagrid rowClick="show">
            <ReferenceField label="Bot" source="bot.id" reference="Bot">
              <TextField source={BOT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="content" source="content" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="sentAt" source="sentAt" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ScrapingBot"
          target="botId"
          label="ScrapingBots"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="Bot" source="bot.id" reference="Bot">
              <TextField source={BOT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="schedule" source="schedule" />
            <TextField label="targetURL" source="targetUrl" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
