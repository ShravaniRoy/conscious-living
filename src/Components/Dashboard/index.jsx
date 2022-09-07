import React, { useState } from 'react';
import breakfastTitle from './string_nls';
//This component should show daily, weekly and monthly graphs and internal nav
//similar to iphone health

const todayDate = new Date().toDateString();
export default function Dashboard(){
    
    return (
        <div className='container-fluid'>
            <div className='row'>
                Left arrow {todayDate} Right arrow
            </div>
            <div className='row'>
                <p> Breakfast </p>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <img />
                    <label>Added Item</label>
                </li>
            </ul>
            <div className='row'>
                <p> Lunch </p>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <img />
                    <label>Added Item</label>
                </li>
            </ul>
            <div className='row'>
                <p> Snacks </p>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <img />
                    <label>Added Item</label>
                </li>
            </ul>
            <div className='row'>
                <p> Dinner </p>
                <button>+</button>
            </div>
            <ul>
                <li>
                    <img />
                    <label>Added Item</label>
                </li>
            </ul>
        </div>
    )
}