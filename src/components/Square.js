import React from 'react'

export const Square = (val, onClick) => {
    return (
        <div>
            <button className="squares" onClick={onClick}>{val}</button>
        </div>
    )
}
