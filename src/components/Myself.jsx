import React from 'react'

function Myself(props) {
    return (
        <div> 
            <h1>
            My name is {props.name}. I am {props.age} old. {props.gender} 
                 </h1>
        </div>
    )
}
export default Myself;
