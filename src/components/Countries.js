import React from 'react'

import Country from './Country'
import {v4 as uuidv4} from 'uuid'
import style from './countries.module.css'

const Countries = (props) => {
  return (
    <div className={style.countries}>
      {props.countries.map((country) => {
        const newCountry = {country, id: uuidv4()}
        return <Country {...newCountry} onRemoveCountry={props.onRemoveCountry} />
      })}
    </div>
  )
}

export default Countries


































// import React from 'react'

// import style from './countries.module.css'
// import Country from './Country'

// import {v4 as uuidv4} from 'uuid'

// const Countries = (props) => {
//   return (
//     <section className={style.countries}>
//         {props.countries.map((country) => {
//             const countryNew = {country, id: uuidv4()}
//             return <Country {...countryNew} key={countryNew.id} onRemoveCountry={props.onRemoveCountry} />
//         })}
//     </section>
//   )
// }

// export default Countries
