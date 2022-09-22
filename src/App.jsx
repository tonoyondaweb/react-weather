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

      await fetch(`${env.VITE_API_URL}/onecall?lat=${lat}&lon=${long}&appid=${env.VITE_API_KEY}`)
        .then(res => res.json())
        .then(data => {
          setData(data)
          console.log(data)
        })
    }

    fetchData()
  }, [])


  return (
    <div>
      <Card />
    </div>
  )
}