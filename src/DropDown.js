import { useState } from 'react'

const DropDown = ({ setCurrCountry }) => {
    const [country, setCountry] = useState("London");
    return (
        <div>
            <div className="dropdown" style={{ textAlign: 'center' }}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {country}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={() => { setCountry("Delhi"); setCurrCountry("Delhi"); }} href="#">DELHI</a>
                    <a className="dropdown-item" onClick={() => { setCountry("England"); setCurrCountry("England"); }} href="#">ENGLAND</a>
                    <a className="dropdown-item" onClick={() => { setCountry("London"); setCurrCountry("London"); }} href="#">LONDON</a>
                </div>
            </div>
        </div>
    );
}

export default DropDown;