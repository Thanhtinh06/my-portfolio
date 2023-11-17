import * as React from "react";
import { Box } from "@mui/material";
import ImageCoder from "./../../assets/6500_5_08.jpg";
import Avatar from "@mui/material/Avatar";

const Introduction: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        position: "relative",
      }}
    >
      <div className="description text-secondary-black text-center">
        <h1 className="text-[8.2rem] text-secondary-black font-bold">
          <span className="chevron-left text-[8.2rem]">&lt;</span>coder
          <span className="chevron-right text-[8.2rem]">&gt;</span>
        </h1>
        <p className="text-secondary-blackLight font-extralight">
          Front end developer who writes clean, elegant and efficient code.
        </p>
      </div>
      <Avatar
        alt="coder"
        src={(ImageCoder as any).src}
        sx={{
          width: "50%",
          borderRadius: "20px",
          height: "100%",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
      />
    </Box>
  );
};

export default Introduction;
