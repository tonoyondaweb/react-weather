export default function Sun(props) {
    const {rise, set} = props

    return (
        <div className="flex justify-center text-center font-semibold py-2 gap-x-2">
            <div className="border rounded basis-1/2 py-5">
                <h2>Sunrise</h2>
                <p className="text-3xl">
                    {rise.hours % 12}:{rise.minutes} <span className="text-sm">AM</span>
                </p>
            </div>
            <div className="border rounded basis-1/2 py-5">
                <h2>Sunset</h2>
                <p className="text-3xl">
                    {set.hours % 12}:{set.minutes} <span className="text-sm">PM</span>
                </p>
            </div>
        </div>
    )
}