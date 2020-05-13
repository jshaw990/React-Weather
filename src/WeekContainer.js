import React from 'react';
import DegreeToggle from './DegreeToggle';
import Card from './Card';
import weatherKey from './secret';

class WeekContainer extends React.Component {
    state = {
        days: [],
        degreeType: "fahrenheit"
    }

    componentDidMount = () => {
        const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?zip=11102&units=imperial&APPID=${weatherKey.weatherKey}`
        
        fetch(weatherURL)
        .then(res => res.json())
        .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'))
            this.setState({
                days: dailyData
            }, () => console.log(this.state))
        })
    }

    formatDayCards = () => {
        return this.state.days.map((day, index) => <Card day={day} key={index} />)
    }

    updateForcastDegree = event => {
        this.setState({
            degreeType: event.target.value
        }, () => console.log(this.state))
    }

    render() {

        return (
            <div className="container">
                <h1 className="display-1 jumbotron">5-Day Forcast</h1>
                <h5 className="display-5 text-muted">New York, US</h5>
                <div className="degree-toggle">
                    <DegreeToggle />
                </div>
                <div className="row justify-content-center">
                    {this.formatDayCards()}
                </div>
            </div>
        )
    }
}

export default WeekContainer