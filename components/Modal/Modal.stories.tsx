import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Modal} from "./Modal";
import {ModalPortal} from "components/ModalPortal";

export default {
  title: "atoms/Modal",
  component: Modal,
  argTypes: {
  },
  args: {
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