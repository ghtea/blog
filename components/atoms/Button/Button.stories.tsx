import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Button, ButtonSize} from "./Button";

const argSizeOptions: ButtonSize[] = ["sm", "md", "lg"] 

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    size: {
      options: argSizeOptions,
      control: {type: "radio"},
    },
    disabled: {
      control: {type: "boolean"},
    },
  },
  args: {
    disabled: false,
    size: "md",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  status: "primary",
  children: "Primary",
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  children: "Error",
};

export const Neutral = Template.bind({});
Neutral.args = {
  status: "neutral",
  children: "Neutral",
};
