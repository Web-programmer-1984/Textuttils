import React from 'react'

function Alert(props) {
    return (

            props.ans && <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>{props.ans.type}</strong>:{props.ans.msg}
                
            </div> 
    )
}

export default Alert;
