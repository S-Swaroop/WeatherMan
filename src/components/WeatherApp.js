import React,{useState} from 'react'
import DisplayWeather from './DisplayWeather'

function WeatherApp() {
    
    const API_KEY = "956636fe9578b6bb2dd9218213325cc2"


    const [weather, setWeather] = useState({
        data: null
    });
    const [form , setForm] = useState({
    city: "",
    country:""
  });

    async function WeatherData(e){
        e.preventDefault();
        if(form.city===""){
            alert("Enter a city")
        }
        else{
            const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${form.city },${form.country}&units=metric&appid=${API_KEY}`)
            .then((res)=>(res.json())).then((data)=>data)
            setWeather({
                data : data
            })

                   
        }
    }

    const handleChange=(e)=>{
        let name = e.target.name
        let value = e.target.value
        if(name === "city"){
            setForm({...form , city: value})
        }
        if(name==="country"){
            setForm({...form , country: value})
        }
    };

    return (
        <div>
            <h1>Weather App</h1>
            <form >
                <input type="text" name="city" placeholder="city" onChange={(e)=>handleChange(e)}></input>
                <input type="text" name="country" placeholder="country" onChange={(e)=>handleChange(e)}></input>
                <button onClick={(e)=>WeatherData(e)}>submit</button>
            </form>
            {
                weather.data != undefined ?
                <div>
                    <DisplayWeather data={weather.data} />
                </div>
                :null
            }
        </div>
    )
}

export default WeatherApp
