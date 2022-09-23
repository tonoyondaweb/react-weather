import { useEffect, useState } from "react"
import Card from "./components/Card"

export default function App() {
  const env = import.meta.env

  const [long, setLong] = useState([])
  const [lat, setLat] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      navigator.geolocation.getCurrentPosition((position) => {
        setLong(position.coords.longitude)
        setLat(position.coords.latitude)
      })

      await fetch(`${env.VITE_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
        })
    }

    fetchData()
  }, [lat, long])


  return (
    <div className="h-screen md:flex md:items-center md:justify-center">
      {data.main ? <Card data={data} /> : <h1>No data</h1>}
    </div>
  )
}