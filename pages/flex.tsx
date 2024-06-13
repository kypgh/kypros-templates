import React, { ReactNode } from "react";
import { Flex as FlexSC } from "@/components/generic";

interface FlexProps {
  children: ReactNode;
}

const Flex: React.FC<FlexProps> = ({ children }) => {
  return <FlexSC>Flex</FlexSC>;
};

export default Flex;
