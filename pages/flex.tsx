import React, { ChangeEvent, useState } from "react";
import SyntaxHighlighter from "../components/SyntaxHighlighter";
import {
  Flex as FlexSC,
  PageContainer,
  SourceLink,
} from "../components/generic";
import { Code, H2, Select } from "../components/typography";
import { FlexEnums } from "@/config/cssEnums";

const FlexPage = () => {
  const [direction, setDirection] = useState(FlexEnums.direction[0]);
  const [align, setAlign] = useState(FlexEnums.align[0]);
  const [justify, setJustify] = useState(FlexEnums.justify[0]);
  const [wrap, setWrap] = useState(FlexEnums.wrap[0]);
  const [gap, setGap] = useState(20);
  const [width, setWidth] = useState("100%");

  const flexCode = `
const Example = () => {
  return (
    <Flex $direction="${direction}" $align="${align}" $justify="${justify}" $wrap="${wrap}" $gap={${gap}} $width="100%">
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Flex>
  );
};
  
  `;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const [key, value] = e.target.value.split("|");
    switch (key) {
      case "direction":
        setDirection(value as typeof direction);
        break;
      case "align":
        setAlign(value as typeof align);
        break;
      case "justify":
        setJustify(value as typeof justify);
        break;
      case "wrap":
        setWrap(value as typeof wrap);
        break;
    }
  };

  return (
    <PageContainer>
      <SourceLink href="/source-code?filePath=components/generic.tsx" />
      <H2>Code</H2>
      <SyntaxHighlighter>{flexCode}</SyntaxHighlighter>
      <FlexSC $width="100%" $gap={50}>
        <FlexSC $direction="column">
          <H2 $mb={10}>Props</H2>
          {Object.entries(FlexEnums).map(([key, value]) => (
            <FlexSC $mb={20} $gap={10} key={key}>
              <Code>${key}</Code>
              <Select onChange={handleChange}>
                {value.map((val) => (
                  <option key={`${key}|${val}`} value={`${key}|${val}`}>
                    {val}
                  </option>
                ))}
              </Select>
            </FlexSC>
          ))}
          <FlexSC $mb={20} $gap={10}>
            <Code>$gap</Code>
            <Select
              onChange={(e) => {
                console.log(e.target.value);

                setGap(Number(e.target.value));
              }}
            >
              {[20, 40, 60, 80, 100].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </Select>
          </FlexSC>
          <FlexSC $mb={20} $gap={10}>
            <Code>$width</Code>
            <Select
              onChange={(e) => {
                setWidth(e.target.value);
              }}
            >
              {["100%", "50%", "25%", "75%"].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </Select>
          </FlexSC>
        </FlexSC>
        <FlexSC $direction="column" $width="100%">
          <H2 $mb={10}>Example</H2>
          <FlexSC
            style={{ border: "1px solid red" }}
            $direction={direction}
            $align={align}
            $justify={justify}
            $wrap={wrap}
            $gap={gap}
            $width={width}
          >
            <div>Child 1</div>
            <div>Child 2</div>
            <div>Child 3</div>
          </FlexSC>
        </FlexSC>
      </FlexSC>
    </PageContainer>
  );
};

export default FlexPage;
