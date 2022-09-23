import Temperature from "./Temperature"
import Humidity from "./Humidity"
import Sun from "./Sun"

export default function Card(props) {
    const { humidity, temp, temp_max, temp_min } = props.data.main
    const { sunrise, sunset, country } = props.data.sys
    const city = props.data.name
    const description = props.data.weather[0].description


    function time(unixTimeStamp) {
        const timeStamp = new Date(unixTimeStamp * 1000)

        return {
            hours: timeStamp.toLocaleTimeString('default', { hour: "numeric" }),
            minutes: timeStamp.toLocaleTimeString('default', { minute: "numeric" })
        }
    }

    function date() {
        const timeStamp = new Date()
        return {
            date: timeStamp.getDate(),
            month: timeStamp.toLocaleString('default', { month: 'long' }),
            day: timeStamp.toLocaleDateString('default', { weekday: 'long' })
        }
    }

    const riseTime = time(sunrise)
    const setTime = time(sunset)
    const currDate = date()

    return (
        <div className="w-full py-[36px] px-[23px] flex flex-col justify-between md:w-3/4 md:border md:shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] md:rounded xl:h-3/4">
            <h1 className="text-2xl font-semibold md:text-center">{city}, {country}</h1>
            <p className="md:text-center">{currDate.day}, {currDate.date} {currDate.month}</p>
            <hr className="my-2" />
            <Temperature
                temp={temp}
                temp_max={temp_max}
                temp_min={temp_min}
                description={description}
            />
            <div className="">
                <Humidity humidity={humidity} />
                <Sun rise={riseTime} set={setTime} />
            </div>
        </div>
    )
}