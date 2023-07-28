import React, { useEffect, useState } from 'react'

const Search = (props) => {

  const [searchText, setSearchText] = useState('');

  const handleChange = (e) => {
    setSearchText(e.target.value);
  }

  useEffect(() => {
    props.onSearch(searchText)
  },[searchText])

  return (
    <div style={{textAlign: 'center' }}>
      <input style={{border: 'none', borderRadius: '5px', padding: '10px', width: '500px'}}type='text' placeholder='Search Country' value={searchText} onChange={handleChange}></input> 
    </div>
  )
}

export default Search



























// import React, { useEffect, useState } from 'react'

// const Search = (props) => {

//     const [searchText, setSearchText] = useState('')

//     const handleChange = (e) => {
//         setSearchText(e.target.value);
//     }

//     useEffect(() => {
//         props.onSearch(searchText);
//     },[searchText])

//   return (
//     <div style={{textAlign:'center'}}>
//       <input type='text' placeholder='Search Country' value={searchText} onChange={handleChange}></input>
//     </div>
//   )
// }

// export default Search
