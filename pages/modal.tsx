import Modal from "@/components/Modal";
import { Flex, PageContainer, SourceLink } from "@/components/generic";
import { H2, H3 } from "@/components/typography";
import styled from "styled-components";
import SyntaxHighlighter from "@/components/SyntaxHighlighter";

const ModalOuter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  max-width: 500px;
  width: 100%;
  max-height: 500px;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  border-radius: 7px;
`;

const ModalContent = ({ modalData }: { modalData?: any }) => {
  return (
    <ModalOuter>
      <H2>Hello</H2>
      <H3>This is the modal content</H3>
      {modalData && modalData?.map((item: any) => <H3 key={item}>{item}</H3>)}
    </ModalOuter>
  );
};

const modalCode = `
// This is the ModalContent that will be shown when the modal is opened
// If you pass any data to the openModal function, it will be passed to the ModalContent as modalData
const ModalContent = ({ modalData }: { modalData?: any }) => {
    return (
      <ModalOuter>
        <H2>Hello</H2>
        <H3>This is the modal content</H3>
        {modalData && modalData?.map((item: any) => <H3 key={item}>{item}</H3>)}
      </ModalOuter>
    );
};

// This is an example of how to use the Modal component without passing any data
const Example = () => {
    return (
      <Modal componentToShow={<ModalContent />}>
        {({ openModal }) => <button onClick={() => openModal()}>Click Me - No Data</button>}
      </Modal>
    );
};

// This is an example of how to use the Modal component with data
const ExampleWithData = () => {
    const data = ["Item 1", "Item 2", "Item 3"];
    return (
      <Modal componentToShow={<ModalContent />}>
        {({ openModal }) => <button onClick={() => openModal(data)}>Click Me - With Data</button>}
      </Modal>
    );
};
`;

const Btn = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.textPrimary};
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ModalPage = () => {
  const data = ["Item 1", "Item 2", "Item 3"];

  return (
    <PageContainer>
      <SourceLink href="/source-code?filePath=public/generated/Modal.tsx" />

      <H2 $mb={10}>Code </H2>
      <SyntaxHighlighter>{modalCode}</SyntaxHighlighter>
      <H2 $mb={10}>Example</H2>
      <Flex $gap={20}>
        <Modal componentToShow={<ModalContent />}>
          {({ openModal }) => (
            <Btn onClick={() => openModal()}>Click Me - No Data</Btn>
          )}
        </Modal>

        <Modal componentToShow={<ModalContent />}>
          {({ openModal }) => (
            <Btn onClick={() => openModal(data)}>Click Me - With Data</Btn>
          )}
        </Modal>
      </Flex>
    </PageContainer>
  );
};

export default ModalPage;
