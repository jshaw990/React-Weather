import React from 'react';
import './Card.css';

const moment = require('moment');

class Card extends React.Component {
    render() {
        const degreeType = this.props.degreeType
        let newDate = new Date();
        const weekday = this.props.day.dt * 1000
        newDate.setTime(weekday)

        let fahrenheit = Math.round(this.props.day.main.temp)
        let celsius = Math.round((fahrenheit - 32) * 5/9)

        const imgURL = "owf owf-" + this.props.day.weather[0].id + "owf-5x red"

        return (
            <div className="col-auto">
                <div className="card bg-light">
                    <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
                    <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
                    <i className={imgURL}></i>
                    <h2>{Math.round(this.props.day.main.temp)} °F</h2>
                    <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit = "°F"}</h2>
                    <div className="card-body">
                        <p className="card-text">{this.props.day.weather[0].description}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;