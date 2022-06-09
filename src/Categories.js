import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeContext from "./ThemeContext";

const StyledDiv = styled.div`
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap:wrap;
  gap:25px;
  .card{
      position: relative;
      scroll-behavior: smooth;
      width:350px;
      height:500px;
      overflow-y: auto;
      overflow-x: hidden;
      border-radius: 20px;
      background: ${(props) => (props.light ? "white" : "#2b2e33")};
      padding: 25px 20px;
      box-shadow:0px 3px 5px rgb(0,0,0,0.2);
      h1{
          padding:5px 15px;
          color:${(props) => (props.light ? "orange" : "skyblue")};

      }
      p{
        margin:20px 0;
      }
      img{
          border-radius: 20px;
      }
      a{
         text-decoration: none;
         box-shadow:0px 3px 5px rgb(0,0,0,0.2);
         padding:10px 20px;
         border-radius: 25px;
          background:${(props) => (props.light ? "white" : "#4c4c4c")};
          color:${(props) => (props.light ? "orange" : "skyblue")};
          font-size:16px;

      }
  }
  @media only screen and (max-width:484px){
      .card{
          height:auto;
          
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
          arr.push({cat:item.strCategory,src:item.strCategoryThumb, des:item.strCategoryDescription})
      }
      arr.sort((a,b)=>{
          return a.des.length-b.des.length;
      })
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
              <p>{item.des}</p>
              <Link to={`/meals/${item.cat}`} >
				 Explore Meals
			 </Link>
          </div>
      })}
    </StyledDiv>
  );
}

export default Categories;
