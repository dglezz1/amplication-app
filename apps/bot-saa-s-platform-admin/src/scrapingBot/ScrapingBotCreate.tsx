import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BotTitle } from "../bot/BotTitle";

export const ScrapingBotCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="bot.id" reference="Bot" label="Bot">
          <SelectInput optionText={BotTitle} />
        </ReferenceInput>
        <DateTimeInput label="schedule" source="schedule" />
        <TextInput label="targetURL" source="targetUrl" />
      </SimpleForm>
    </Create>
  );
};
