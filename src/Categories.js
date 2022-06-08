import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const StyledDiv = styled.div`
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap:wrap;
  gap:20px;
  .card{
      border-radius: 20px;
      background: ${(props) => (props.light ? "white" : "#2b2e33")};
      padding: 10px;
      box-shadow:0px 3px 5px rgb(0,0,0,0.2);
      h1{
          padding:5px 15px;
          color:${(props) => (props.light ? "orange" : "skyblue")};

      }
      img{
          border-radius: 20px;;
      }
  }
  
`;

function Categories() {
  const [light] = useContext(ThemeContext);
  const [cat,setCat] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = response.data.categories;
      let arr = [];
      for(let item of data){
          arr.push({cat:item.strCategory,src:item.strCategoryThumb})
      }
      setCat(arr);
    };
    fetchData();
  }, []);
  return (
    <StyledDiv light={light}>
      {cat.map((item,idx)=>{
          return <div className="card" key={idx}>
              <h1>{item.cat}</h1>
              <img src={item.src} alt="items"/>
          </div>
      })}
    </StyledDiv>
  );
}

export default Categories;
