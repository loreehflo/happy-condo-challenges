import React from 'react';
import user from './display-data-user';
import './display-data.styles.css';

function DisplayData() {
    return (
        <div className="user-deets">
            <img src={user.avatar}></img>
            <table>
                <th> <td> <div className="header"> {user.name} </div> </td> </th>
                <tr> <td> <div className="title"> Location </div> </td> </tr>
                <tr> <td> <div className="info"> {user.location} </div> </td> </tr>
                <tr> <td> <div className="title"> Eats </div> </td> </tr>
                <tr> <td> <div className="info"> {user.eats} </div> </td> </tr>
                <tr> <td> <div className="title"> Age </div> </td> </tr>
                <tr> <td> <div className="info"> {user.age} </div> </td> </tr>
                <tr> <td> <div className="title"> Likes </div> </td> </tr>
                <tr> <td> <div className="info"> {user.likes} </div> </td> </tr>
                <tr> <td> <div className="title"> Twitter </div> </td> </tr>
                <tr> <td> <a href="https://twitter.com/chrisoncode"> {user.twitterUsername} </a> </td> </tr>
            </table>
        </div>
    );
}

export default DisplayData;
