import React from 'react'
import { useLocation } from 'react-router-dom';

const List = () => {
  const location = useLocation();
  console.log(location)
  return (
    <div>
      <h1>List</h1>

    </div>
  )
}

export default List