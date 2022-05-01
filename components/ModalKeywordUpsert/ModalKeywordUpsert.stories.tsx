import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {ModalKeywordUpsertView} from "./ModalKeywordUpsert.view";

const KEYWORD =
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
  component: ModalKeywordUpsertView,
  argTypes: {
  },
  args: {
    keyword: KEYWORD,
    keywordValue: "keyword 1",
    searchValue: "keyword 1, keyword one",
    cancel: {},
    confirm: {},
  },
} as ComponentMeta<typeof ModalKeywordUpsertView>;

const Template: ComponentStory<typeof ModalKeywordUpsertView> = (args) => (
  <Box sx={{width: "100%", height: "100vh"}}>
    <ModalKeywordUpsertView {...args} />
  </Box>
)
export const Default = Template.bind({});
Default.args = {
  
};