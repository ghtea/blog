import {Box} from "@mui/system";
import React from "react";

import {useModalContext} from "utils/modal";

export const ModalPortal: React.FunctionComponent = (props) => {
  const {modalDatas} = useModalContext();

  return (
    <Box sx={{
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: 0,
      left: 0,
      display: modalDatas.length < 1 ? "none" : "flex"
    }}>
      {modalDatas.map((item, index) => (
        <Box key={`modal-${item.id}`} sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          {item.component 
            ? (
              <item.component
                id={item.id}
                {...item.props}
              />
            ) 
            : null
          }
        </Box>
      ))}
    </Box>
  )
};
