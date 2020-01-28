import styled from "styled-components";

export const InitialLabelContainer = styled.div`
  width: 359.0553px;
`;
export const LabelInner = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  height: 359.0553px;
  /* border: 1px solid #000; */
  position: relative;
`;
export const OddLabel = styled.div`
  padding-right: 13.228px;
  padding-top: 7.559px;
`;
export const EvenLabel = styled(OddLabel)`
  padding-left: 13.228px;
  padding-right: 0;
`;
export const ContentRight = styled.div`
  text-align: right;
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
    font-size: 14px;
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
  text-align: center;
  font-size: 11px;
  line-height: 1em;
  & span {
    font-size: 9px;
  }
`;
export const FloatContent = styled.div`
  display: flex;
  & .text {
    font-size: 8px;
    width: 39px;
  }
  & .text-left {
    padding-right: 1px;
    padding-top: 7px;
  }
  & .text-right {
    padding-left: 1px;
    padding-top: 3px;
  }
`;
export const ProducCodetext = styled.div`
  font-size: 8px;
`;
export const Volume = styled.div`
  font-size: 8px;
  margin-top: 2px;
`;
export const ProducCodeContent = styled.div`
  padding-left: 11px;
  ${Volume}, ${ProducCodetext} {
    line-height: 1em;
  }
`;
export const Title = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  ${Span} {
    font-weight: normal;
    font-size: 7px;
    text-transform: none;
  }
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
  font-size: 10px;
  margin-top: 5px;
  & div {
    line-height: 1em;
  }
  & .libele,
  .adress {
    font-size: 9px;
  }
  & .libele {
    margin-bottom: 5px;
  }
  & .adress {
    margin-top: 5px;
  }
`;
export const Recipient = styled.div`
  margin-bottom: 5px;
`;
export const QRCodeBlock = styled.div`
  position: absolute;
  bottom: 3px;
  left: 11.338px;
`;
export const SecCode = styled.div`
  position: absolute;
  /* left: 48px; */
  left: 58px;
  right: 0;
  bottom: 5px;
  text-transform: uppercase;
  font-size: 11px;
`;
export const Biohazard = styled.div`
  text-align: center;
  text-transform: uppercase;
  font-size: 10px;
  margin-bottom: 5px;
`;
export const Logo = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  & img {
    max-width: 100%;
    height: auto;
  }
`;
