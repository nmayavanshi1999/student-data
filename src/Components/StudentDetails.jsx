import React from 'react'
import { useParams } from 'react-router'

function StudentDetails() {
    const {name} = useParams();
    
  return (
    <div>
       
StudentDetails
<h1>{name}</h1>

    </div>
  )
}

export default StudentDetails
