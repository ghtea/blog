import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {DropdownMenuKeywordMore} from "./DropdownMenuKeywordMore";

export default {
  title: "atoms/DropdownMenuKeywordMore",
  component: DropdownMenuKeywordMore,
  argTypes: {
  },
  args: {
  },
} as ComponentMeta<typeof DropdownMenuKeywordMore>;

const Template: ComponentStory<typeof DropdownMenuKeywordMore> = (args) => {
  return (
    <Box sx={{position: "relative"}}>
      <DropdownMenuKeywordMore {...args} isOpened={true} />
    </Box>
  )
};

export const Default = Template.bind({});
Default.args = {
  
};