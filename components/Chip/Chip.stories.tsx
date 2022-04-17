import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Chip, ChipAppearance, ChipColor, ChipSize} from "./Chip";

const sizes: ChipSize[] = ["sm", "md", "lg"] 
const colors: ChipColor[] = ["default", "primary"] 
const appearances: ChipAppearance[] = ["filled", "outlined", "subtle"] 

export default {
  title: "atoms/Chip",
  component: Chip,
  argTypes: {
    size: {
      options: sizes,
      control: {type: "radio"},
    },
    color: {
      options: colors,
      control: {type: "radio"},
    },
    appearance: {
      options: appearances,
      control: {type: "radio"},
    },
    clickable: {
      control: {type: "boolean"},
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

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

export const AllChips = () => {
  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row"
    }}>
      {colors.map(color=>(
        <Box key={color}>{appearances.map(appearance=>(
          <Box key={appearance}>{sizes.map(size=>(
            <Box key={`${color}-${appearance}-${size}`} sx={{padding: 1}} >
              <Chip color={color} appearance={appearance} size={size}>
                {`${color}-${appearance}-${size}`}
              </Chip>
            </Box>
          ))}</Box>
        ))}</Box>
      ))}
    </Box>
  )
}