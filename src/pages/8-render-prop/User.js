import React from 'react'

const User = (props) => {
  console.log(`User props  =>`, props)
  return (
    <div className='m-5'>
      {props.render(false)}
    </div>
  )
}

export default User