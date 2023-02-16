import styled from "styled-components";

export const Wrap = styled.main`
  background-color: #e6faff;
  height: 400px;
  max-width: 500px;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: space-around;
  align-items: center;
  & > div {
    display: grid;
    grid-template: auto auto / repeat(5, 1fr);
    gap: 20px;
  }

  & > button {
    position: relative;
    outline: none;
    text-decoration: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-transform: uppercase;
    height: 45px;
    width: 130px;
    opacity: 1;
    background-color: #5035ff;
    margin-top:20px;
    border: 1px solid rgba(0, 0, 0, 0.6);
  }

 
  & > button,
  & > button > span {
    font-family: "Karla", sans-serif;
    color: white;
    font-size: 12px;
    font-weight: 500;
    width:200px;
    font-size: 1.52rem;
    letter-spacing: 0.7px;
  }
  .title {
    font-size: 40px;
    margin: 0;
  }

  .instructions {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    margin-top: 0;
    text-align: center;
  }


  .bn54:hover {
    animation: bn54rotate 0.7s ease-in-out both;
  }

  .bn54:hover .bn54span {
    animation: bn54storm 0.7s ease-in-out both;
    animation-delay: 0.06s;
  }

  @keyframes bn54rotate {
    0% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
    25% {
      transform: rotate(3deg) translate3d(0, 0, 0);
    }
    50% {
      transform: rotate(-3deg) translate3d(0, 0, 0);
    }
    75% {
      transform: rotate(1deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotate(0deg) translate3d(0, 0, 0);
    }
  }

  @keyframes bn54storm {
    0% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
    25% {
      transform: translate3d(4px, 0, 0) translateZ(0);
    }
    50% {
      transform: translate3d(-3px, 0, 0) translateZ(0);
    }
    75% {
      transform: translate3d(2px, 0, 0) translateZ(0);
    }
    100% {
      transform: translate3d(0, 0, 0) translateZ(0);
    }
  }
`;

export const DieShape = styled.div`
  height: 50px;
  width: 50px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  background: ${(props) => props.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
 
  & > h2 {
    user-select: none;
    font-size: 2rem;
  }
`;
