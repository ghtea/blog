import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React, {Fragment} from "react";

import {Button, ButtonSize, ButtonAppearance} from "./Button";

const sizes: ButtonSize[] = ["sm", "md", "lg"] 
const appearances: ButtonAppearance[] = ["default", "primary", "primary-subtle", "error", "error-subtle"] 

export default {
  title: "atoms/Button",
  component: Button,
  argTypes: {
    size: {
      options: sizes,
      control: {type: "radio"},
    },
    appearance: {
      options: appearances,
      control: {type: "radio"},
    },
    disabled: {
      control: {type: "boolean"},
    },
  },
  args: {
    appearance: "default",
    disabled: false,
    size: "md",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  appearance: "default",
  children: "Default",
};

export const AllButtons = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row"
    }}>{appearances.map(appearance=>(
        <Box key={appearance}>{sizes.map(size=>(
          <Fragment key={`${appearance}-${size}`}>
            <Box sx={{padding: 1}} >
              <Button appearance={appearance} size={size}>
                {`${appearance}-${size}`}
              </Button>
            </Box>
            <Box  sx={{padding: 1}} >
              <Button appearance={appearance} size={size} disabled={true}>
                {"disabled"}
              </Button>
            </Box>
          </Fragment>
        ))}</Box>
      ))}
    </Box>
  )
}