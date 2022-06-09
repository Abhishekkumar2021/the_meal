import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ThemeContext from './ThemeContext';
import styled from 'styled-components'

const StyledDiv = styled.div`
  padding: 20px;
  width: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap:wrap;
  gap:25px;
  .card{
      position: relative;
      display:flex;
      flex-direction: column;
      align-items: center;
      overflow:hidden;
      width:400px;
      height:600px;
      max-width:100%;
      border-radius: 20px;
      background: ${(props) => (props.light ? "white" : "#2b2e33")};
      box-shadow:0px 3px 5px rgb(0,0,0,0.2);
      h1{
          padding:5px 15px;
          color:${(props) => (props.light ? "orange" : "skyblue")};

      }
      img{
          transition: 0.3s ease all;
          border-radius: 20px;;
          &:hover{
              transform:scale(1.6);
          }
      }
      .btn{
          position: absolute;
          bottom:-80px;
          transition:0.3s ease all;
          text-decoration:none;
          padding:15px 30px;
          border-radius:30px;
          color:${(props) => (props.light ? "orange" : "skyblue")};
          background: ${(props) => (props.light ? "white" : "#2b2e33")};

          box-shadow:0 3px 4px 2px rgb(0,0,0,0.15);

      }
      &:hover{
          .btn{
            bottom:20px;
          }
      }
      
  }
  
`;
function Items() {
const {id} = useParams();
const [light] = useContext(ThemeContext);

const [items,setItems] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
      );
      const data = response.data.meals;
      setItems(data);
    };
    fetchData();
  }, [id]);
  return (
    <StyledDiv light={light}>
    {items.map((item,idx)=>{
        return <div className="card" key={idx}>
            <h1>{item.strMeal}</h1>
            <img src={item.strMealThumb} alt="items"/>
            <Link to={`/meal/${item.strMeal}`} className="btn">
                Know More
            </Link>
        </div>
    })}
  </StyledDiv>
  )
}

export default Items
