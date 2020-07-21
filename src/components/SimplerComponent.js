
import React from 'react'
import { ProgressPlugin } from 'webpack'

export default function SimplerComponent(props) {
    return (
        <div onClick={props.handleClick}>
            'I am just happy'
        </div>
    )
}
