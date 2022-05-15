import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Icon, IconName} from "./Icon";

const names: IconName[] = ["plus", "close", "close-circle", "more"] 

export default {
  title: "atoms/Icon",
  component: Icon,
  argTypes: {
    name: {
      options: names,
      control: {type: "radio"},
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconX = Template.bind({});
IconX.args = {
  name: "close",
  children: "IconX",
};

export const AllIcons = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row"
    }}>
      {names.map(name=>(
        <Box key={name} sx={{padding: 1}} >
          <Icon name={name}>
            {name}
          </Icon>
        </Box>
      ))}
    </Box>
  )
}