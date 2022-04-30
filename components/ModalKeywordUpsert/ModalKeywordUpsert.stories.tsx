import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {ModalKeywordUpsert} from "./ModalKeywordUpsert";

const KEYWORDS =
  {
    id: "dfsagghe",
    author: "j2uiF7KDhvWcJYYfvNoKf253c9k2",
    createdAt: 1650287413436,
    name: "new name",
    search: "new search",
    updatedAt: 1650287413436,
  }

export default {
  title: "atoms/ModalKeywordUpsert",
  component: ModalKeywordUpsert,
  argTypes: {
  },
  args: {
    keywords: KEYWORDS,
    onRowClick: undefined
  },
} as ComponentMeta<typeof ModalKeywordUpsert>;

const Template: ComponentStory<typeof ModalKeywordUpsert> = (args) => <ModalKeywordUpsert {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};