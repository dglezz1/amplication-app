import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { BotTitle } from "../bot/BotTitle";

export const ScrapingBotEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="bot.id" reference="Bot" label="Bot">
          <SelectInput optionText={BotTitle} />
        </ReferenceInput>
        <DateTimeInput label="schedule" source="schedule" />
        <TextInput label="targetURL" source="targetUrl" />
      </SimpleForm>
    </Edit>
  );
};
