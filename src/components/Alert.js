import React from 'react'

function Alert(props) {
    return (
        <div style={{ height: '50px' }}>
            {props.ans && <div className={`lert alert-success alert-dismissible fade show" role="alert`}>
                <strong>{props.ans.type}</strong>:{props.ans.msg}

            </div> }
        </div>
    )
}

export default Alert;
