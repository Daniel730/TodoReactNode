import React from 'react'

export default props => {
    if(props.iconTest) {
        return props.children
    }
    
    return false
}