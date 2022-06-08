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
  .img{
      padding: 10px;
      flex:40%;
      img{
          width:620px;
          max-width:100%;
          margin:0 auto;
          border-radius: 20px;
          border:10px solid ${(props) => (props.light ? "white" : "#2b2e33")};
          box-shadow:0 6px 5px rgb(0,0,0,0.2);
      }
      .links{

          display:flex;
          justify-content: space-between;
          margin-top:-70px;
          padding:0 20px;
          a{
              text-decoration:none;
              background:rgb(256,256,256,0.3);
              color:darkgreen;
              padding:10px;
              box-shadow:0 0 10px 5px rgb(0,0,0,0.2);
              border-radius: 10px;
              transition: 0.1s ease all;
              &:hover{
                  background:white;
                  color:black;
              }
          }
      }
      button{
          margin-top:40px;
          padding:15px 20px;
          border:none;
          outline:none;
          border-radius: 30px;
          background:${(props) => (props.light ? "white" : "#2b2e33")};
          color:${(props) => (props.light ? "orange" : "skyblue")};
          font-size:18px;
          box-shadow:0 3px 4px 2px rgb(0,0,0,0.15);
          transition:0.2s ease all;
          &:hover{
              transform:scale(1.05);
          }
          &:active{
              transform:scale(0.9);
          }

      }
  }
  .info{
      flex:60%;
      padding:20px;
      span{
              color:${(props) => (props.light ? "orange" : "skyblue")};
      }
      h3{

          border-bottom: 2px solid ${(props) => (props.light ? "teal" : "skyblue")};;
      }
      p{
          padding:10px 0;
      }
      ol{
          padding:15px;
      }
  }
  @media screen and (max-width: 1024px){
    flex-direction:column;
    align-items: center;
    .img{
        flex-grow:0;
        img{
            width:100%;
        }
    }
  }
`;

function Random() {
  const [light] = useContext(ThemeContext);
  const [num,setNum] = useState(0);
  const [meal, setMeal] = useState({
    area: "",
    category: "",
    name: "",
    thumbnail: "",
    instructions: "",
    source: "",
    youtube: "",
    ingredients: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      let ing = [];
      let i = 1;

      const data = response.data.meals[0];
      while (data[`strIngredient${i}`]) {
        ing.push(data[`strIngredient${i}`]);
        i++;
      }
      setMeal({
        area: data.strArea,
        category: data.strCategory,
        name: data.strMeal,
        thumbnail: data.strMealThumb,
        instructions: data.strInstructions,
        source: data.strSource,
        youtube: data.strYoutube,
        ingredients: ing,
      });
    };
    fetchData();
  }, [num]);
  return (
    <StyledDiv light={light}>
      <div className="img">
          <img src={ meal.thumbnail} alt="thumbnail"/>
          <div className="links">
          <a href={meal.source} className="more">Source</a>
          <a href={meal.youtube} className="more">Watch on YouTube</a>
          </div>
          <button onClick={()=>setNum(num+1)}>Get Next Random Meal</button>
      </div>
      <div className="info">
          <h1 className="name">Name of the Meal is <span>{meal.name}</span></h1>
          <h2 className="category">It belongs to <span>{meal.category}</span> and comes under the <span>{meal.area}</span> area of the meals.</h2>
          <h3>The instructions to prepare this dish are as follows -  </h3>
          <p>{meal.instructions}</p>
          <h3>The ingredients use to make this dish are given below</h3>
           <ol>
               {meal.ingredients.map((item,idx)=>{
                   return <li key={idx}>{item}</li>
               })}
           </ol>
      </div>
    </StyledDiv>
  );
}

export default Random;
