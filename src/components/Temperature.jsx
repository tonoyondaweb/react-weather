import { Fragment } from "react";

export default function Temperature(props) {
    const {temp, temp_max, temp_min, description} = props

    return (
        <Fragment>
            <h1 className="text-8xl font-semibold">{Math.round(temp)}°C</h1>
            <div className="flex flex-col mb-2">
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