import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Modal} from "./Modal";

export default {
  title: "atoms/Modal",
  component: Modal,
  argTypes: {
  },
  args: {
    title: "title",
    children: "content",
    confirm: {},
    cancel: {},
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Box sx={{width: "100%", height: "100vh"}}>
    <Modal {...args} />
  </Box>
);

export const Default = Template.bind({});
Default.args = {
  
};