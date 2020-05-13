import React from 'react';

const DegreeToggle = ({degreeType, updateForcastDegree}) => {
    return (
        <React.Fragment>
        <div className="form-check form-check-inline">
            <input 
            className="form-check-input"
            type="radio"
            name="degree-type"
            id="celsius"
            value="celsius"
            onChange={updateForcastDegree}
            checked={degreeType === "celsuis"}
            />
            <label className="form-check-label" htmlFor="celsius">Celsuis</label>
        </div>
        <div className="form-check form-check-inline">
            <input
            className="form-check-input"
            type="radio"
            name="degree-type"
            id="fahrenheit"
            value="fahrenheit"
            onChange={updateForcastDegree}
            checked={degreeType === "fahrenheit"}
            />
            <label className="form-check-label" htmlFor="fahrenheit">Fahrenheit</label>
        </div>
        </React.Fragment>
    )
}


export default DegreeToggle;