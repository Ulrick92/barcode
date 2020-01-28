import styled from "styled-components";

export const FinalLabelContainrer = styled.div`
  width: 340.157px;
`;
export const Bottom = styled.div`
  margin-top: 5px;
`;
export const Libele = styled.div`
  right: 3.559px;
`;
export const Block = styled.div`
  padding: 7.559px 7.559px 0;
  position: relative;
  ${Bottom}, ${Libele} {
    font-size: 9px;
  }
  ${Libele} {
    position: absolute;
    bottom: 2px;
  }
`;
export const LabelInner = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 132.283px;
  /* border: 1px solid #000; */
  ${Block}:last-child {
    /* border-left: 1px solid #000; */
  }
`;
export const Din = styled.div`
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  top: -5px;
  & span:not(:last-child) {
    margin-right: 2px;
  }
  & span {
    font-size: 12px;
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
  line-height: 10px;
`;
export const DateLabel = styled.span`
  text-transform: uppercase;
  text-align: center;
  font-size: 8px;
`;
export const Logo = styled.div`
  width: 30%;
  & img {
    max-width: 100%;
    height: auto;
  }
  padding: 0 5px;
`;
export const Biohazard = styled.div`
  width: ${props => (props.widthBox ? "70%" : "auto")};
  text-align: center;
  font-size: 11px;
  margin: 0 0 5px;
`;
export const FloatContent = styled.div`
  display: ${props => (props.flex ? "flex" : "block")};
  ${Span} {
    font-size: 9px;
  }
`;
export const Title = styled.div`
  font-size: 8px;
  text-transform: uppercase;
  font-weight: bold;
  ${Span} {
    font-weight: normal;
    font-size: 7px;
    text-transform: none;
  }
`;
export const Info = styled.div`
  font-size: 10px;
`;
export const QRCodeBlock = styled.div`
  margin-right: 3.779px;
`;
export const BlockText = styled.div`
  line-height: 0.5em;
  ${Span} {
    font-size: 8px;
  }
  ${Span} {
    display: inline-block;
    margin-right: 3px;
  }
`;
export const CodeContainer = styled.div`
  display: flex;
  align-items: start;
  & div {
    padding-top: 2px;
    line-height: 1px;
  }
`;
export const LongText = styled.div`
  font-size: 6px;
`;
