import styled from "styled-components";

export const PartialLabelContainer = styled.div`
  width: 136.063px;
`;
export const LabelInner = styled.div`
  height: 64.252px;
  padding: 3.779px;
  /* border: 1px solid #000; */
  position: relative;
`;
export const Din = styled.div`
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  & span:not(:last-child) {
    margin-right: 2px;
  }
`;
export const Span = styled.span`
  display: inline-block;
  font-size: 10px;
`;
export const Flag = styled(Span)`
  transform: rotate(90deg);
  font-size: 9px;
`;
export const CheckCharacter = styled(Span)`
  font-size: 10px;
  text-align: center;
  border: 1px solid #000;
  width: 10px;
  height: 10px;
  line-height: 9px;
`;
export const DateLabel = styled.div`
  text-transform: uppercase;
  text-align: center;
  font-size: 9px;
`;
export const CenterText = styled.div`
  font-size: 11px;
  line-height: 1em;
  & span {
    font-size: 9px;
  }
`;
export const Vertical = styled.div`
  transform: rotate(90deg);
  position: absolute;
  top: 39px;
  right: -16px;
  font-size: 7px;
`;
export const FloatContent = styled.div`
  display: flex;
  vertical-align: top;
  margin-bottom: 3px;
  ${Din} span {
    font-size: 8px;
  }
`;
export const CodeContainer = styled.div`
  display: flex;
  align-items: start;
  & div {
    line-height: 10px;
  }
`;
export const GridContainer = styled.div`
  display: ${props => (props.grid ? "grid" : "block")};
  grid-template-columns: 55% 45%;
  ${CenterText} {
    font-size: 8px;
  }
`;
export const ProducCodeContent = styled.div`
  padding-left: 11px;
`;
export const ProducCodetext = styled.div`
  font-size: 8px;
`;
export const BloodGroup = styled.div`
  width: 75px;
  padding-top: 3px;
  & div {
    font-size: 12px;
  }
  & .group {
    font-size: 20px;
  }
`;
export const Info = styled.div`
  font-size: 6px;
`;
export const QRCodeBlock = styled.div`
  margin-right: 3px;
`;
export const Logo = styled.div`
  width: 15.118px;
  height: 15.118px;
  & img {
    max-width: 100%;
    height: auto;
  }
  margin: 0 auto;
`;
export const Biohazard = styled.div`
  padding-top: 3px;
  text-align: center;
  font-size: 7px;
`;
