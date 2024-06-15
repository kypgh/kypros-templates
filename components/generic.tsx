import { ReactNode } from "react";
import Link, { LinkProps as NextLinkProps } from "next/link";
import styled from "styled-components";
import { usePathname } from "next/navigation";
import { DefaultTheme } from "styled-components/dist/types";
import { FlexEnums } from "@/config/cssEnums";

export const SourceLink = styled(Link)`
  color: ${({ theme }) => theme.textPrimary};
  font-weight: bold;
  padding: 2px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.primary};
  position: fixed;
  bottom: 20px;
  right: 20px;

  &::before {
    content: "View Source Code";
  }

  &::after {
    content: "👀";
    padding-left: 5px;
  }
`;

interface CustomLinkProps extends NextLinkProps {
  children: ReactNode;
  isActive?: boolean;
  style?: React.CSSProperties;
}

const StyledLink = styled(Link)<{ $isActive?: boolean }>`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
`;

export const NavLink = ({ children, ...props }: CustomLinkProps) => {
  const asPath = usePathname();
  const linkIsActive = asPath === props.href || asPath === props.as;

  return (
    <StyledLink {...props} $isActive={linkIsActive}>
      {children}
    </StyledLink>
  );
};

type ContainerTypes = {
  $mb?: number;
  $mt?: number;
  $ml?: number;
  $mr?: number;
  $mall?: number;
  $pb?: number;
  $pt?: number;
  $pl?: number;
  $pr?: number;
  $pall?: number;
  $background?: string | ((theme: DefaultTheme) => string);
  $border?: string | ((theme: DefaultTheme) => string);
  $bt?: string;
  $bb?: string;
  $bl?: string;
  $br?: string;
};

// prettier-ignore
export const Container = styled.div.attrs<ContainerTypes>(
  ({ $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $background, $border, $bt, $bb, $bl, $br,  }) => ({ $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $background, $border, $bt, $bb, $bl, $br, })
)`
  max-width: 1140px;
  margin: 0 auto;
  width: 100%;
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
  ${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
  ${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
  ${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
  ${({ $mall }) => $mall && `margin: ${$mall}px;`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb}px;`}
  ${({ $pt }) => $pt && `padding-top: ${$pt}px;`}
  ${({ $pl }) => $pl && `padding-left: ${$pl}px;`}
  ${({ $pr }) => $pr && `padding-right: ${$pr}px;`}
  ${({ $pall }) => $pall && `padding: ${$pall}px;`}
  ${({ $background, theme }) => $background && `background-color: ${typeof $background === 'function' ? $background(theme) : $background};`}
  ${({ $border, theme }) => $border && `border: ${typeof $border === 'function' ? $border(theme) : $border};`}
  ${({ $bt }) => $bt && `border-top: ${$bt};`}
  ${({ $bb }) => $bb && `border-bottom: ${$bb};`}
  ${({ $bl }) => $bl && `border-left: ${$bl};`}
  ${({ $br }) => $br && `border-right: ${$br};`}
`;

type FlexProps = {
  $align?: (typeof FlexEnums.align)[number];
  $justify?: (typeof FlexEnums.justify)[number];
  $direction?: (typeof FlexEnums.direction)[number];
  $wrap?: (typeof FlexEnums.wrap)[number];
  $gap?: number;
  $width?: string;
  $mb?: number;
  $mt?: number;
  $ml?: number;
  $mr?: number;
  $mall?: number;
  $pb?: number;
  $pt?: number;
  $pl?: number;
  $pr?: number;
  $pall?: number;
};

// prettier-ignore
export const Flex = styled.div.attrs<FlexProps>(
  ({
    $align, $justify, $direction, $width, $gap, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $wrap,
  }) => ({
    $align, $justify, $direction, $width, $gap, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $wrap,
  })
)`
  display: flex;
  align-items: ${({ $align }) => $align};
  justify-content: ${({ $justify }) => $justify};
  flex-direction: ${({ $direction }) => $direction};
  ${({ $width }) => $width && `width: ${$width};`}
  gap: ${({ $gap }) => $gap && `${$gap}px`};
  ${({ $wrap }) => $wrap && `flex-wrap: ${$wrap};`}
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
  ${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
  ${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
  ${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
  ${({ $mall }) => $mall && `margin: ${$mall}px;`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb}px;`}
  ${({ $pt }) => $pt && `padding-top: ${$pt}px;`}
  ${({ $pl }) => $pl && `padding-left: ${$pl}px;`}
  ${({ $pr }) => $pr && `padding-right: ${$pr}px;`}
  ${({ $pall }) => $pall && `padding: ${$pall}px;`}
`;

type BackgroundProps = {
  $img?: string;
  $width?: string;
  $color?: string | ((theme: DefaultTheme) => string);
  $border?: string | ((theme: DefaultTheme) => string);
  $radius?: number;
  $bt?: string;
  $bb?: string;
  $bl?: string;
  $br?: string;
  $mb?: number;
  $mt?: number;
  $ml?: number;
  $mr?: number;
  $mall?: number;
  $pb?: number;
  $pt?: number;
  $pl?: number;
  $pr?: number;
  $pall?: number;
};

// prettier-ignore
export const Background = styled.div.attrs<BackgroundProps>(
  ({
    $img, $color = "#ffffff", $border, $bt, $bb, $bl, $br, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $radius,
  }) => ({
    $img, $color, $border, $bt, $bb, $bl, $br, $mb, $mt, $ml, $mr, $mall, $pb, $pt, $pl, $pr, $pall, $radius,
  })
)`
  ${({ $img }) => $img && `background-image: url(${$img});`};
  background-color: ${({ $color, theme }) =>
    typeof $color === "function" ? $color(theme) : $color};
     ${({ $width }) => $width && `width: ${$width};`}
  ${({ $border }) => $border && `border: ${$border};`}
  ${({ $radius }) => $radius && `border-radius: ${$radius}px;`} 
  ${({ $bt }) => $bt && `border-top: ${$bt};`}
  ${({ $bb }) => $bb && `border-bottom: ${$bb};`}
  ${({ $bl }) => $bl && `border-left: ${$bl};`}
  ${({ $br }) => $br && `border-right: ${$br};`}
  ${({ $mb }) => $mb && `margin-bottom: ${$mb}px;`}
  ${({ $mt }) => $mt && `margin-top: ${$mt}px;`}
  ${({ $ml }) => $ml && `margin-left: ${$ml}px;`}
  ${({ $mr }) => $mr && `margin-right: ${$mr}px;`}
  ${({ $mall }) => $mall && `margin: ${$mall}px;`}
  ${({ $pb }) => $pb && `padding-bottom: ${$pb}px;`}
  ${({ $pt }) => $pt && `padding-top: ${$pt}px;`}
  ${({ $pl }) => $pl && `padding-left: ${$pl}px;`}
  ${({ $pr }) => $pr && `padding-right: ${$pr}px;`}
  ${({ $pall }) => $pall && `padding: ${$pall}px;`}
`;

export const PageContainer = styled.div`
  padding: 15px;
`;
