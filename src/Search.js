import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import useInput from './useInput'

const dark = "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
const light = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display:flex;
	flex-direction:column;
	align-items:center;
	justify-content:center ;
    background:url(${(props) => (props.light ? light : dark)}) center no-repeat;
    background-size: cover;
	h1{
		padding:20px;
		background:rgb(256,256,256,0.3);
		margin-bottom:10px;
		box-shadow:0 3px 20px rgb(0,0,0,0.1);
		border-radius: 5px;

	}
	input{
		box-shadow:0 3px 4px rgb(0,0,0,0.15);

		color:${(props) => (props.light ? "orange" : "skyblue")};
		max-width:100%;
		padding:20px 35px;
		border:none;
		outline:none;
		border-radius: 80px;
		background:${(props) => (props.light ? "white" : "#2b2e33")};
		font-size:24px;
		margin:10px 0;
	}
	a{
		text-decoration: none;
		padding:10px 20px;
		background:${(props) => (props.light ? "white" : "#2b2e33")};
		box-shadow:0 3px 4px rgb(0,0,0,0.1);
border-radius: 5px;
transition: 0.2s ease all;
&:hover{
	transform:scale(1.1);
}
&:active{
	transform:scale(0.9);
}
	}
    
`;
export default function Search() {
	const [light] = useContext(ThemeContext);
    const [name,handleName] = useInput("");
	return <StyledDiv light={light}>
		<h1>Search any dish by its name Ex : Bharta,Vegan Chocolate Cake etc</h1>
        <input type="text" onChange={handleName} value={name} placeholder="Enter name here...."></input>
        <Link to={`/meal/${name}`}>Search</Link>
	</StyledDiv>;
}