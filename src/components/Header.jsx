import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='1'>useState |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='2'>useEffect |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='3'>useContext-old  |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='4'>useContext-latest  |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='5'>useReducer |    </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='6'>useReducerObj |</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='7'>useCallback |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='8'>useMemo |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='9'>useRef |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='10'>useCustom |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='11'>render-props |   </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to='12'>portal |   </Link>
                        </li>
                    </ul>
                </div>
            </div >
        </nav >
    )
}

export default Header