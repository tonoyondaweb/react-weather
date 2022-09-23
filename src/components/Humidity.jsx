export default function Humidity(props) {
    return (
        <div className="border rounded text-center font-semibold py-10 ">
            <h2>Humidity</h2>
            <p className="text-3xl">{Math.round(props.humidity)}%</p>
        </div>
    )
}