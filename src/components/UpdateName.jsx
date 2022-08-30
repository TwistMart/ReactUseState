import React, { useState } from 'react'

const UpdateName = () => {
    const [name,setName]=useState({firstname: 'Martin', lastname: 'Irungu' }) // objects in react are usually in {}
  return (
    <div>
    <form>
    <input type='text' value={name.firstname} onChange={e =>setName({ ...name, firstname: e.target.value})}/>
    <input type='text' value={name.lastname}  onChange={e => setName({ ...name, lastname: e.target.value})} />
    </form>    
    
    <h1> Your FirstName: {name.firstname}</h1>
    <h1> Your LastName: {name.lastname}</h1>
    <h2>{JSON.stringify(name)}</h2>
    </div>

  
  )
}

export default UpdateName
// ...name is called spread in React E6 meaning copy every property in the name object and overwrite the firstname or lastname field with a different value
