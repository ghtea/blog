import {Box} from "@mui/system";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import React, {useRef, useState} from "react";

import {DropdownMenu} from "./DropdownMenu";

export default {
  title: "atoms/DropdownMenu",
  component: DropdownMenu,
  argTypes: {
  },
  args: {
    items: [
      {children: "test1", onClick: ()=>{}},
      {children: "test2"},
    ]
  },
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => {
  const [isOpened, setIsOpened] = useState(true);

  const toggleRef = useRef<HTMLDivElement>(null)

  const handleClickToggle = ()=>{
    setIsOpened(prev => !prev)
  }

  return (
    <Box sx={{position: "relative"}}>
      <Box ref={toggleRef} onClick={handleClickToggle} component={"button"}>toggle</Box>
      <DropdownMenu {...args} toggleRef={toggleRef} isOpened={isOpened} setIsOpened={setIsOpened} />
    </Box>
  )
};

export const Default = Template.bind({});
Default.args = {
  
};