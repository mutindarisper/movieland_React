
import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import './App.css'
import SearchIcon from './search.svg'


//array destructuring

var fruits = ['orange', 'apple', 'mango', 'grapes', 'pineapple', 'watermelon', 'kiwi', 'apple']

var [first, second, third, fourth, ...rest] = fruits
console.log(first)
console.log(second)
console.log(third)
console.log(fourth)
console.log(...rest)


//ECMA SCRIPT 5 ARRAY METHODS

//every 
//determine whether all the elements of an array satisfy the provided function conditions.
var marks = [50,40,45,37,20];  
var newMarks = 0
const check = (value) => {
  return value>30;
}

console.log(marks.every(check), 'every output')

//filter 
// returns the new array, which contains elements that pass the provided function conditions.
const greaterThirty = (value) => {
return value > 40
}

console.log(marks.filter(greaterThirty), 'filter output')


//includes()
//returns true if an array has a specified value
console.log(fruits.includes('pear'), 'includes output')

//forEach 
//invokes the function once for each array element
let text = "";
const fruits2 = ["apple", "orange", "cherry"];
fruits2.forEach( (item) => {
 text = item + ' '+ 'fruit'
 console.log(text, 'foreach output')
})

//isArray() checks if an object is an array

const person = {
  first: 'risper',
  last: 'mutuku'

}
console.log(Array.isArray(person), 'isArray output')
console.log(Array.isArray(marks), 'isArray output')

//indexOf() searches the position of an element in an array
console.log(fruits2.indexOf('cherry', 0), 'indexOf output')

//lastIndexOf()
console.log(fruits.lastIndexOf('apple'), 'lastIndexOf output') //7
console.log(fruits.lastIndexOf('apple', 4), 'lastIndexOf output')

//map() calls a function for every array element and returns a new array
marks.map( (mark) => {
  var new_array = mark + 100
  console.log(new_array, 'map output')
}
)

//sort
 var sorted_fruits = fruits.sort()
 console.log(sorted_fruits, 'sort output')
 //extract the minimum value from an array
 var numbers = [10,2,5,7,9]
 console.log(numbers.sort(), 'sorted numbers')
 console.log(Math.min(...numbers), 'minimum number')
 console.log(Math.max(...numbers), 'maximum number')

 //unshift()
 var added_fruit = fruits.push('pear', 'melon')
 console.log(added_fruit, 'unshift output')

 //slice extracts a range of array elements, not inclusive of the last value
 console.log(numbers.slice(0,-1), 'slice output')







//f4574f78
const API_URL = 'http://www.omdbapi.com?apikey=f4574f78'

const movie1 = { //static data
  "Title": "Me Before You",
  "Year": "2016",
  "imdbID": "tt2674426",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_SX300.jpg"
}



const App = () => {
  const [movies, setMovies] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  //function to fetch data

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();
    setMovies(data.Search)

  }

  useEffect(() => {
    searchMovies('The Mask')
    
  }, [])
  
  return (
  <div className='app'>
    <h1>MovieLand</h1>
    <div className='search'>
      <input 
      placeholder='Seach for movies'
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value) 

      }
      />
      <img 
      src={SearchIcon}  
      alt="search"
      onClick={() => searchMovies(searchTerm)}/>
    </div>

    {
      movies?.length > 0 ?
      (
        <div className='container'> 
          {/* <MovieCard movie1={movie1} /> */}
          {
            movies.map((movie) => (
              <MovieCard movie={movie} />
            ) )
          }

        </div>

      ) :
      (
         <div className='empty'>
          <h2>No movies found</h2>

         </div>
      )

    }


    

  </div>
  )
}

export default App