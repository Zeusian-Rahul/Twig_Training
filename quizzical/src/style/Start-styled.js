import styled from "styled-components";

export const Wrapper = styled.div`
  height: 550px;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #293264;
  background-color: white;
  position:relative;

  .start-heading {
    font-family: "Karla";
    font-style: normal;
    font-weight: 700;
    font-size: 31.25px;
    line-height: 37px;
    text-align: center;
  }
  .start-button {
    width: 193px;
    height: 52px;
    left: 179px;
    top: 314px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #f5f7fb;
    background: #4d5b9e;
    border-radius: 15px;
  }

  .start-description {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #293264;
  }

  .btm-svg {
    position: absolute;
    left: 0px;
    bottom: 0px;
  }

  .top-svg {
    position: absolute;
    right: 0px;
    top: 0px;
  }
`;
