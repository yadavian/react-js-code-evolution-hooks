import React from 'react'
import ReactDOM from 'react-dom'

const PortalComp = () => {
    return ReactDOM.createPortal(
        <h1>PortalComp</h1>,
        document.getElementById('portal-root')
    )
}

export default PortalComp