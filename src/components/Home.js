import React, { useEffect, useState } from 'react'

import Countries from './Countries'
import Search from './Search';

const Home = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);

  const url = 'https://restcountries.com/v3.1/all';

  const fetchedData = async (url) => {
    setIsLoading(true);

    try{
      const response = await fetch(url);
      const data = await response.json();
  
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    }catch(error){
      setIsLoading(false);
      setError(error);
    }
  }

  useEffect(() => {
    fetchedData(url);
  },[])

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => country.name.common !== name)
    setFilteredCountries(filter);
  }

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountry = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    })
    setFilteredCountries(newCountry);
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Country App</h1>
      <Search onSearch={handleSearch}/>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>{error.message}</h2>}
      {countries && <Countries countries={filteredCountries} key={countries.id} onRemoveCountry={handleRemoveCountry}/>}
    </div>
  )
}

export default Home











// import React, { useState, useEffect } from 'react'

// import style from './home.module.css'
// import Countries from './Countries';
// import Search from './Search';

// const url = 'https://restcountries.com/v3.1/all';

// const Home = () => {

//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setfilteredCountries] = useState(countries);

//   const fetchData = async (url) => {
//     setIsLoading(true);

//     try{
//       const response = await fetch(url);
//       const data = await response.json();
//       setCountries(data);
//       setfilteredCountries(data);
//       setIsLoading(false);
//       setError(null);
//     }catch(error){
//       setIsLoading(false);
//       setError(error);
//     }
//   }

//   useEffect(() => {
//     fetchData(url);
//   },[]);

//   const handleRemoveCountry = (name) => {
//     const filter = filteredCountries.filter((country) => country.name.common !== name)
//     setfilteredCountries(filter);
//   }

//   const handleSearch = (searchValue) => {
//     let value = searchValue.toLowerCase();
//     const newCountries = countries.filter((country) => {
//       const countryName = country.name.common.toLowerCase();
//       return countryName.startsWith(value)
//     })
//     setfilteredCountries(newCountries);
//   }

//   return (
//     <div className={style.home}>
//       <h1>Country App</h1>
//       <Search onSearch={handleSearch}/>
//       {isLoading && <h2>Loading...</h2>}
//       {error && <h2>{error.message}</h2>}
//       {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
//     </div>
//   )
// }

// export default Home;























// import React, { useState,useEffect } from 'react'

// const loadingMessage = 'Data is loading';

// const Todo = () => {

//     const [todos, setTodos] = useState(null);
//     const [isLoding, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch('https://jsonplaceholder.typicode.com/todo')
//             .then((res) => {
//                 if(!res.ok){
//                     throw Error('data fatched is not successful')
//                 }
//                 return res.json()
//             })
//             .then((data) => {
//                 setTodos(data);
//                 setIsLoading(false);
//                 setError(null);
//             })
//             .catch((error) => {
//                 setError(error.message)
//                 setIsLoading(false);
//             })
//         }, 2000)
//     }, []) 

//     const todosElement = todos && todos.map((todo) => {
//         return <p key={todo.id}>{todo.title}</p>
//       })

//   return (
//     <div>
//       <h1>Todos</h1>
//       {error && <p>{error}</p>}  
//       {isLoding && loadingMessage}  
//       {todosElement}
//     </div>
//   )
// }

// export default Todo
