import styled from "styled-components";
import { pxToRem } from "./Util";
import { media } from "./Responsive";

export const ContentContainer = styled.div`
  position: relative;
  max-width: ${pxToRem(1320)};
  margin: 0 auto;
  padding: 0 ${pxToRem(12)};

  ${media.lessThan("sm")`
    width: 100%;
    padding: 0;
  `};
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, ${props => props.alpha || 0.6});
`;
