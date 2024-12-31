import React from 'react'
import { Link } from 'react-router-dom'

const BtnTask = ({ taskName, path }) => {
    return (
        <>
            <Link className='m-2' to={path}>
                <button className='btn btn-info'>{taskName}</button>
            </Link>

        </>
    )
}

export default BtnTask
