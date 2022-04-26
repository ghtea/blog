import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Button, ButtonSize} from "./Button";

const sizes: ButtonSize[] = ["sm", "md", "lg"] 

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    size: {
      options: sizes,
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

export const Default = Template.bind({});
Default.args = {
  color: "default",
  children: "Default",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
  children: "Error",
};
