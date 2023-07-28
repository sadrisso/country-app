import React from 'react'

import style from './country.module.css'

const Country = (props) => {

  const {name, flags, population, area, capital} = props.country;

  const handleRemove = (name) => {
    props.onRemoveCountry(name);
  }

  return (
    <div className={style.country}>
      <h2>{name.common}</h2>
      <img src={flags.png}></img>
      <p>{population}</p>
      <p>{area}</p>
      <p>{capital}</p>
      <button onClick={() => handleRemove(name.common)} style={{padding: '5px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>Remove Country</button>
    </div>
  )
}

export default Country






























// import React from 'react'

// import style from './country.module.css'

//   const Country = (props) => { 

//   const {name, flags, capital, population, area} = props.country;

//   const handleRemoveCountry = (name) => {
//     props.onRemoveCountry(name)
//   }

//   return (
//     <article className={style.country}>
//         <div>
//             <img src={flags.png} alt={name.common}></img>
//             <h3>{name.common}</h3>
//             <h3>{population}</h3>
//             <h3>{capital}</h3>
//             <h3>{area}</h3>
//             <button onClick={() => {handleRemoveCountry(name.common)}}>Remove country</button>
//         </div>
//     </article>
//   )
// }

// export default Country
