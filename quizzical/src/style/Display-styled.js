import styled from "styled-components";

export const Wrapper = styled.div`
border-bottom:2px solid #DBDEF0;
margin-top:0px;
margin-bottom:10px;
padding-bottom:10px;
.display-ques{
    font-family: 'Karla';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #293264;
   
}
.display-opt{
    box-sizing: border-box;
    height: 20px;
    color:#4D5B9E;
    margin:5px 6px;
    padding: 2px 20px;
    background:${props=>props.bg}
    box-sizing: content-box;
    cursor: pointer;
    border: 0.771045px solid #4D5B9E;
    border-radius: 7.71045px;
}
`;
