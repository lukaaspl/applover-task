import React, { useState } from "react";
import { StyledWrapper, ViewOption } from "./style";

const ViewSelector = () => {
  const [view, setView] = useState("2d");

  return (
    <StyledWrapper>
      <ViewOption active={view === "2d"} onClick={() => setView("2d")}>
        2D
      </ViewOption>
      <ViewOption active={view === "3d"} onClick={() => setView("3d")}>
        3D
      </ViewOption>
    </StyledWrapper>
  );
};

export default ViewSelector;
