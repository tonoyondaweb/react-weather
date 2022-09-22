export default function Card() {
    return (
        <div className="w-full py-[36px] px-[23px]">
            <h1 className="text-2xl font-semibold">City</h1>
            <p>DayWords, DD MMMM</p>
            <h1 className="text-8xl font-semibold mt-[29px] mb-[21px]">X°C</h1>
            <div className="flex flex-col mb-2">
                <p>H: hTemp  L: lTemp</p>
                <p>weatherDescription</p>
            </div>
            <div className="flex flex-col gap-y-2">
                <div className="border text-center font-semibold py-10 ">
                    <h2>Humidity</h2>
                    <p className="text-3xl">%</p>
                </div>
                <div className="border text-center font-semibold py-10">
                    <h2>Sun</h2>
                    <p className="text-3xl">x:xx <span className="text-sm">AM</span></p>
                </div>
            </div>
        </div>
    )
}