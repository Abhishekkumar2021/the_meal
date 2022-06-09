import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const dark =
  "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
const light =
  "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80";
const StyledDiv = styled.div`
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: 0 10px 20px rgb(0, 0, 0, 0.08);
  background: url(${(props) => (props.light ? light : dark)}) center no-repeat;
  background-size: cover;
  h1 {
    padding: 20px;
    background: rgb(256, 256, 256, 0.3);
    margin-bottom: 10px;
    box-shadow: 0 3px 20px rgb(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  a {
    text-decoration: none;
    padding: 10px 20px;
    background: ${(props) => (props.light ? "white" : "#2b2e33")};
    box-shadow: 0 3px 4px rgb(0, 0, 0, 0.1);
    border-radius: 5px;
    transition: 0.2s ease all;
    margin-top:-25px;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
export default function Error() {
  const [light] = useContext(ThemeContext);
  return (
    <StyledDiv light={light}>
      <h1>Nothing Here</h1>
      <Link to="/"> Go Home</Link>
    </StyledDiv>
  );
}
