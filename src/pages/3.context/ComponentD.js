import React, { useContext } from 'react'
import { LastNameContext, UserContext } from '../../App'

const ComponentD = () => {

  const firstname = useContext(UserContext)
  const lastname = useContext(LastNameContext)

  return (
    <h1> Latest = {firstname} {lastname}</h1>
  )
}

export default ComponentD