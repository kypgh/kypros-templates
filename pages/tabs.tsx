import SyntaxHighlighter from "@/components/SyntaxHighlighter";
import { Tab, TabList, TabPanel, Tabs } from "@/components/Tabs";
import { Flex, PageContainer, SourceLink } from "@/components/generic";
import { H2 } from "@/components/typography";
import styled from "styled-components";

const example = `
const Example = () => {
  const tabsHeaders = ["Tab 1", "Tab 2", "Tab 3"];
  const tabsContents = ["Content 1", "Content 2", "Content 3"];
    return (
        <Tabs>
            <TabList>
            {tabsHeaders.map((header, index) => (
                <Tab key={index}>{header}</Tab>
            ))}
            </TabList>
            {tabsContents.map((content, index) => (
            <TabPanel key={index}>{content}</TabPanel>
            ))}
      </Tabs>
    );
};
`;

const styledExample = `
const StyledTab = styled(Tab)\`
  background-color: \${({ theme }) => theme.primary};
  color: \${({ theme }) => theme.textPrimary};
  border: 1px solid \${({ theme }) => theme.secondary};
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: \${({ theme }) => theme.secondary};
  }
\`;

const Example = () => {
  const tabsHeaders = ["Tab 1", "Tab 2", "Tab 3"];
  const tabsContents = ["Content 1", "Content 2", "Content 3"];
    return (
        <Tabs>
            {tabsHeaders.map((header, index) => (
                <StyledTab key={index}>
                    {header}
                </StyledTab>
             ))}
            {tabsContents.map((content, index) => (
                <TabPanel key={index}>{content}</TabPanel>
            ))}
      </Tabs>
    );
};  
`;

const StyledTab = styled(Tab)`
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};
  border: 1px solid ${({ theme }) => theme.secondary};
  border-radius: 7px;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const TabsPage = () => {
  const tabsHeaders = ["Tab 1", "Tab 2", "Tab 3"];
  const tabsContents = ["Content 1", "Content 2", "Content 3"];
  return (
    <PageContainer>
      <SourceLink href="/source-code?filePath=public/generated/Tabs.tsx" />
      <H2 $mb={10}>Code</H2>
      <SyntaxHighlighter>{example}</SyntaxHighlighter>
      <H2 $mb={10}>Example</H2>
      <Tabs>
        <TabList>
          {tabsHeaders.map((header, index) => (
            <Tab key={index}>{header}</Tab>
          ))}
        </TabList>
        {tabsContents.map((content, index) => (
          <TabPanel key={index}>{content}</TabPanel>
        ))}
      </Tabs>

      <H2 $mb={10} $mt={30}>
        With Styled Tab
      </H2>
      <SyntaxHighlighter>{styledExample}</SyntaxHighlighter>
      <H2 $mb={10}>Example</H2>
      <Tabs>
        <TabList>
          {tabsHeaders.map((header, index) => (
            <StyledTab key={index}>{header}</StyledTab>
          ))}
        </TabList>
        {tabsContents.map((content, index) => (
          <TabPanel key={index}>{content}</TabPanel>
        ))}
      </Tabs>
    </PageContainer>
  );
};
export default TabsPage;
