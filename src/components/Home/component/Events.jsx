import React from 'react'
import STYLESHEET from '../../../STYLESHEET/Home.module.css'
import { Link } from 'react-router-dom'
export const Events = ({ datemonth, datenumber, titile, time }) => {
    return (
        <>
            <Link className={STYLESHEET.Evenetscard}>
            <div className={STYLESHEET.leftdiv}>
                <h5>{datenumber}</h5>
                <h4>{datemonth}</h4>
            </div>

            <div className={STYLESHEET.rightdiv}>
                <h3>{titile}</h3>
                <h4>{time}</h4>
        
            </div>
        </Link>
        </>

    )
}
