import React from 'react'

function Child(props) {
    return (
        <p>
            {props.mag}<br></br>
            {props.num}이 전달
        </p>
    )
}

export default Child
