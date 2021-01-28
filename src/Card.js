import moment from 'moment';
import kelvinToCelsius from 'kelvin-to-celsius';

const Card = ({ item }) => {
    let weather = item.weather[0].main;
    let icon = "fas fa-sun fa-7x";
    if (weather === "Clear") {
        icon = "fas fa-sun fa-7x"
    }
    else if (weather === "Clouds") {
        icon = "fas fa-cloud fa-7x"
    }
    else if (weather === "Rain") {
        icon = "fas fa-cloud-showers-heavy fa-7x"
    }

    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
                <h6 className="card-title">{moment.unix(item.dt).format("dddd")}</h6>
                <h5 className="card-title">{kelvinToCelsius(item.main.temp)}°C</h5>
                <h6 className="card-subtitle mb-2 text-muted">{moment.unix(item.dt).format("MMM,DD LT")}</h6>
                <i className={icon}></i>
                <p className="card-text">{item.weather[0].description}</p>
            </div>
        </div>
    );
}

export default Card;