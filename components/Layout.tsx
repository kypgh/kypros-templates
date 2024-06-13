import React, { ReactNode } from "react";
import { Flex, NavLink } from "./generic";
import styled from "styled-components";
import { H1 } from "./typography";
import { useTheme } from "@/utils/hooks/useTheme";

const NavOuter = styled.div`
  width: 280px;
  height: 100vh;
`;

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  max-width: 280px;
  width: 100%;
  height: 100vh;
  padding: 30px 15px;
  background-color: ${({ theme }) => theme.middleground};
  position: fixed;
  top: 0;
  left: 0;
`;

const ThemeButton = styled.div`
  width: 100%;
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.primary};
  text-align: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.textPrimary};
`;

const ChildrenContainer = styled.div`
  max-width: calc(100% - 280px);
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.background};

  // global color for text in each page
  color: ${({ theme }) => theme.textPrimary};
`;

const StyleLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.secondary};
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  transition: 0.3s all ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { toggleTheme } = useTheme();
  return (
    <Flex>
      <NavOuter>
        <Nav>
          <Flex $direction="column" $align="center" $gap={20}>
            <H1 $color={(theme) => theme.textPrimary}>Kypros Templates</H1>
            <Flex $direction="column" $width="100%" $gap={10}>
              <StyleLink href={"/"}>Home</StyleLink>
              <StyleLink href={"/flex"}>Flex</StyleLink>
            </Flex>
          </Flex>
          <ThemeButton onClick={toggleTheme}>Toggle Theme</ThemeButton>
        </Nav>
      </NavOuter>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Flex>
  );
};

export default Layout;
