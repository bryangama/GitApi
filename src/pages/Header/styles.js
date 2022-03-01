import styled from 'styled-components';
import {Link} from "react-router-dom";



export const Head = styled.header`
  display: flex;
  border: 2px;
  justify-content: space-evenly;
  width: 100%;
  height: 78px;
  background-color: black;
  display: flex;
  color: aliceblue;
  border-radius: 2px;
  //align-items: center;
  // justify-content: center;

  h1 {
    font-size: 40px;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-family: courier, helvetica, arial;


  }

  img {
    border: 1px white;
    display: flex;
    justify-content: center;
    background-color: #6000a4;
    border-radius: 53px;
  }


`;
export  const NavLink = styled(Link)`
  border-radius: 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  text-decoration: none;
  transition-delay: 0.2ms;
  font-family: courier, helvetica, arial;

  &:hover {
    color: #000000;
    background: #8e70a8;



`;
