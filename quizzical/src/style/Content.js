import styled from "styled-components";

export const Wrap = styled.div`
  min-width: 550px;
  min-height: 550px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 50px 30px 50px;
  position: relative;
  z-index: 1;

  .btn {
    background: #4d5b9e;
    border-radius: 10px;
    width: 120px;
    height: 35px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 10.24px;
    line-height: 12px;
    text-align: center;
    color: #f5f7fb;
    margin: auto;
    cursor:pointer;
  }
  .btm-svg {
    position: absolute;
    left: 0px;
    bottom: 0px;
    z-index: -1;
  }

  .top-svg {
    position: absolute;
    right: 0px;
    top: 0px;
    z-index: -1;
  }

  .result {
    & > button {
      background: #4d5b9e;
      border-radius: 10px;
      width: 120px;
      height: 35px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 10.24px;
      line-height: 12px;
      text-align: center;
      color: #f5f7fb;
      cursor:pointer;
    }

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 12.8px;
    line-height: 15px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding-top: 2px;
    color: #293264;
  }
`;
