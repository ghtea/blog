import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {TableKeyword} from "./TableKeyword";

const KEYWORDS = [
  {
    id: "dfsagghe",
    author: "j2uiF7KDhvWcJYYfvNoKf253c9k2",
    createdAt: 1650287413436,
    name: "new name",
    search: "new search",
    updatedAt: 1650287413436,
  },
  {
    id: "dfsaggfadsghhe",
    author: "j2uiF7KDhvWcJYYfvNoKf253c9k2",
    createdAt: 1650287413436,
    name: "new name 2",
    search: "new search 2",
    updatedAt: 1650287413436,
  },
]

export default {
  title: "atoms/TableKeyword",
  component: TableKeyword,
  argTypes: {
  },
  args: {
    keywords: KEYWORDS,
    onRowClick: undefined
  },
} as ComponentMeta<typeof TableKeyword>;

const Template: ComponentStory<typeof TableKeyword> = (args) => <TableKeyword {...args} />;

export const Default = Template.bind({});
Default.args = {
  
};