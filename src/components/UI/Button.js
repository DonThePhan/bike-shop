import classes from './Button.module.css'

import React from 'react'

export default function Button(props) {
    return (
        <button className={classes.button} onClick={props.onClick}>{ props.children}</button>
    )
}
