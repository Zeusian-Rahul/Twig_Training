import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
export const GlobalStyle=createGlobalStyle`
body {
    margin: 10px 10px;
    font-family: 'Inter', sans-serif;
    background-color: rgb(255,255,255);
    color: black;
    padding: 20px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
`;
export const Wrapper = styled.div`
display: flex;
align-items: flex-end;

button {
  height: 25px;
  width: 25px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  background-color: #737373;
  color: #d9d9d9;
  &:hover {
    background-color: #404040;
    color: #d9d9d9;
  }
  &:focus-within{
    background-color:red;
  }
  &:focus {
    outline: none;
    background-color:green;
  }
  &:focus-visible{
    background-color:blue;
  }
 
}
&>button:active{
  background-color:yellow;
}
&>h2>a:visited {
  color:brown;
}

.counter--minus {
  margin-right: -10px;
  z-index: 1;
}
.counter--plus {
  margin-left: -10px;
  z-index: 1;
}
.counter--count {
  background-color: white;
  font-size: 0.75rem;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  border:2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #262626;
}
`;