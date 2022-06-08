import styled from "styled-components";
import ThemeContext from "./ThemeContext";
import useToggle from "./useToggle";
import Navbar from "./Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Random from "./Random";

const StyledApp = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	background: ${({ light }) => (light ? "white" : "#242629")};
	color: ${({ light }) => (light ? "rgba(0, 0, 0, 0.781)" : "white")};
`;

function App() {
  const [light, toggleLight] = useToggle(true);
  return (
    <ThemeContext.Provider value={[light, toggleLight]}>
      <StyledApp light={light}>
        <Navbar/>
        <Routes>
					<Route exact path='/random' element={<Random />} />
					<Route path='/' element={<Home />} />
				</Routes>
      </StyledApp>
    </ThemeContext.Provider>
  );
}

export default App;
