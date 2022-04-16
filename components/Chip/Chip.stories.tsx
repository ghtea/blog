import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React from "react";

import {Chip, ChipAppearance, ChipColor, ChipSize} from "./Chip";

const argSizeOptions: ChipSize[] = ["sm", "md", "lg"] 
const argColorOptions: ChipColor[] = ["default", "primary"] 
const argAppearanceOptions: ChipAppearance[] = ["filled", "outlined", "subtle"] 

export default {
  title: "atoms/Chip",
  component: Chip,
  argTypes: {
    size: {
      options: argSizeOptions,
      control: {type: "radio"},
    },
    color: {
      options: argColorOptions,
      control: {type: "radio"},
    },
    appearance: {
      options: argAppearanceOptions,
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
  const chips: JSX.Element[] = []
  argSizeOptions.forEach(size=>{
    argColorOptions.forEach(color=>{
      argAppearanceOptions.forEach(appearance=>{
        chips.push(
          <Box sx={{padding: 1}}>
            <Chip size={size} color={color} appearance={appearance}>{`${color}-${appearance}`}</Chip>
          </Box>
        )
      })
    })
  })

  return (
    <Box sx={{
      display: "flex",
      flexDirection: "row"
    }}>
      {argColorOptions.map(color=>(
        <Box key={color}>{argAppearanceOptions.map(appearance=>(
          <Box key={appearance}>{argSizeOptions.map(size=>(
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