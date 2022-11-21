import * as React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios';
import swal from 'sweetalert'

import { Movielist } from "./components/Movielist";
import { SearchAppBar } from "./components/SearchAppBar"
import { BasicSelect } from "./components/BasicSelect";

import './styles/App.scss'

function App() {

  const [movies, setMovies] = useState([])
  const [input, setInput] = useState("")
  const [select, setSelect] = useState("")

  useEffect(() => {
    getMovies()
  },[])

  useEffect(() => {
    if(input !== ""){
        let results = movies.filter((movie) => {
        return movie.title.toLowerCase().includes(input)
      });
      setMovies(results)
    }else{
      getMovies()
    }
  }, [input])

  useEffect(() => {
    if(select !== ""){
      let results = movies.filter((movie) => {
        return Math.floor(movie.vote_average)==select
      });
      if(results.length == 0 ){
        showAlert()
      }
      console.log(results)
      setMovies(results)
    }else if(select == ""){
      getMovies()
    }
  }, [select])
  
  function showAlert(){
      swal({
      title: "Error",
      text: "No hay películas en esa categoría",
      icon: "error",
      button: "Aceptar"
    })
  }
  function getMovies(){
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=c93f3323912a37d0bf800fb8f862ac62")
    .then(response => {
    setMovies(response.data.results);
    })
  }
  
  const searchMovie = (event) => {
    let searchingTitle= event.currentTarget.value;
      setInput(searchingTitle)
  } 

  const searchByRating = (rating) => {
      setSelect(rating)
  } 

  return (
    <div className="App">
      <SearchAppBar
        searching={searchMovie}>
      </SearchAppBar>
      <BasicSelect
        byRating={searchByRating}>
      </BasicSelect>
      <Movielist
        movies={movies}>
      </Movielist>
    </div>
  )
}

export default App
