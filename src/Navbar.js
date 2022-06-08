import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import ThemeContext from './ThemeContext';
import Toggler from './Toggler';
import useToggle from './useToggle';

const StyledNav = styled.nav`
  width: 100%;
  padding:15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => (props.light ? "white" : "#2b2e33")};
  box-shadow: 0 3px 5px rgb(0,0,0,0.1);
  
  ul{
    transition:0.4s ease all;
    margin-left:20px;
    display:flex;
    li{
      transition:0.3s ease all;
      list-style: none;
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 10px 20px;
      border-radius: 20px;
      a{
        text-align: center;
        text-decoration: none;
        color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
      }
      &:hover{
          background: rgb(150,150,150,0.1);

      }
    }
  }
  button{
    position:absolute;
    padding:10px 15px;
    background: ${(props) => (props.light ? "rgb(105, 105, 186,0.9)":"white")};
    border:none;
    outline:none;
    border-radius:5px;
    top:10px;
    right:10px;
    box-shadow: 0 3px 5px rgb(0,0,0,0.1);
    display:none;
    color: ${({ light }) => (!light ? "rgba(0, 0, 0, 0.781)" : "white")};
  }
  @media screen and (max-width: 768px){
    flex-direction:column;
    align-items: flex-start;
    ul{
      margin:0 auto;
      margin-top:15px;
      flex-direction: column;
      transform:${({ disp }) => (disp ? "scale(1)" : "scale(0)")};
      height:${({ disp }) => (disp ? "200px" : "0")};
      li{
        &:hover{
          transform: translateX(-30px);
        }
      }
    }
    button{
        display:flex;
    }
  }
`;
function Navbar() {
  const [light] = useContext(ThemeContext);
  const [display,toggleDisplay] = useToggle(false);
  return (
    <StyledNav light={light} disp={display}>
      <button onClick={toggleDisplay}>{display?"X" : "Menu"}</button>
      <Toggler />
      <ul>
				<li onClick={toggleDisplay}>
						<Link to='' >
							Home
						</Link>
				</li>
				<li onClick={toggleDisplay}>
						<Link to='/random'>
							Get Random Meal
						</Link>
				</li>
				<li onClick={toggleDisplay}>
						<Link to='/search'>
							Search about meals
						</Link>
				</li>
				<li onClick={toggleDisplay}>
						<Link to='/categories'>
							Explore Different Categories
						</Link>
				</li>
      </ul>
    </StyledNav>
  )
}

export default Navbar