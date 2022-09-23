import { Fragment } from "react";

export default function Temperature(props) {
    const {temp, temp_max, temp_min, description} = props

    return (
        <Fragment>
            <h1 className="text-8xl font-semibold md:text-center">{Math.round(temp)}°C</h1>
            <div className="mb-5 md:text-center">
                <p>High: {Math.round(temp_max)} | Low: {Math.round(temp_min)}</p>
                <p>
                    {
                        `${description[0].toUpperCase()}${description.substring(1)}`
                    }
                </p>
            </div>
        </Fragment>
    )
}