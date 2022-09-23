export default function Card(props) {
    const { humidity, temp, temp_max, temp_min } = props.data.main
    const { sunrise, sunset, country } = props.data.sys
    const city = props.data.name
    const description = props.data.weather[0].description

    function convertDate(unixTimeStamp) {
        const date = new Date(unixTimeStamp * 1000)

        return {
            date: date.getDate(),
            month: date.toLocaleString('default', { month: 'long' }),
            day: date.toLocaleDateString('default', { weekday: 'long' }),
            hours: date.toLocaleTimeString('default', {hour: "numeric"}),
            minutes: date.toLocaleTimeString('default', {minute: "numeric"})
        }
    }

    const riseTime = convertDate(sunrise)
    const setTime = convertDate(sunset)
    return (
        <div className="w-full py-[36px] px-[23px]">
            <h1 className="text-2xl font-semibold">{city}, {country}</h1>
            <p>{riseTime.day}, {riseTime.date} {riseTime.month}</p>
            <h1 className="text-8xl font-semibold mt-[29px]">{Math.round(temp)}°C</h1>
            <div className="flex flex-col mb-2">
                <p>High: {Math.round(temp_max)} | Low: {Math.round(temp_min)}</p>
                <p>
                    {
                        `${description[0].toUpperCase()}${description.substring(1)}`
                    }
                </p>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="border rounded text-center font-semibold py-10 ">
                    <h2>Humidity</h2>
                    <p className="text-3xl">{Math.round(humidity)}%</p>
                </div>
                <div className="flex justify-center text-center font-semibold py-2 gap-x-4">
                    <div className="border rounded basis-1/2 py-5">
                        <h2>Sunrise</h2>
                        <p className="text-3xl">
                            {riseTime.hours%12}:{riseTime.minutes} <span className="text-sm">AM</span>
                        </p>
                    </div>
                    <div className="border rounded basis-1/2 py-5">
                        <h2>Sunset</h2>
                        <p className="text-3xl">
                            {setTime.hours%12}:{setTime.minutes} <span className="text-sm">PM</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}