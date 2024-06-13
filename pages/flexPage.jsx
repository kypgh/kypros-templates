// pages/flex.js
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Flex } from "../components/generic";
import { H2 } from "../components/typography";

const flexCode = `
const Example = () => {
  return (
    <Flex $direction="column" $align="center" $justify="center" $gap={20} $width="100%">
      <div>Child 1</div>
      <div>Child 2</div>
      <div>Child 3</div>
    </Flex>
  );
};
`;

const FlexPage = () => {
  const handleCodeClick = (event) => {
    console.log(event);
    const { clientX, clientY } = event;
    console.log(
      `User clicked at position (${clientX}, ${clientY}) within the code block.`
    );
    // You can add more logic here to determine the exact location within the code, if needed.
  };
  return (
    <>
      <H2>Code</H2>
      <SyntaxHighlighter
        language="javascript"
        style={solarizedlight}
        onClick={handleCodeClick}
      >
        {flexCode}
      </SyntaxHighlighter>
      <H2>Example</H2>
      <Flex
        $direction="column"
        $align="center"
        $justify="center"
        $gap={20}
        $width="100%"
      >
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Flex>
    </>
  );
};

export default FlexPage;
