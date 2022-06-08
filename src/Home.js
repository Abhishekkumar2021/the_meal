import React, { useContext } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const dark = "https://images.unsplash.com/photo-1514361892635-6b07e31e75f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZCUyMGRhcmt8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
const light = "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
const StyledDiv = styled.div`
	padding: 20px;
	width: 100%;
	flex-grow: 1;
	display:flex;
	align-items:center;
	text-shadow:0 10px 20px rgb(0,0,0,0.08);
    background:url(${(props) => (props.light ? light : dark)}) center no-repeat;
    background-size: cover;
    .end{
        font-size:24px;
		position: fixed;
		bottom:0px;
		left:0px;
		width:100%;
		text-align: center;
		background: ${(props) => (props.light ? "white" : "#2b2e33")};
		padding:20px 40px;
		border-radius: 10px;
        box-shadow: 0 -3px 5px rgb(0,0,0,0.1);
		.emoji{
			animation: beat 0.4s linear infinite;
			display: inline-block;
		}
		
	}
	@keyframes beat{
			0%{
				transform: scale(1) translateY(0px);
			}
			50%{
				transform: scale(1.6) translateY(-5px);
			}
			100%{
				transform: scale(1) translateY(0px);
			}
		}
	
`;
export default function Home() {
	const [light] = useContext(ThemeContext);
	return <StyledDiv light={light}>
		<div className="end">Made with <div className="emoji">❤️</div> by Abhishek Kumar.</div>  
	</StyledDiv>;
}