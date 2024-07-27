import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

const InfoBox = ({info}) => {
    const INIT_URL = "https://media.istockphoto.com/id/140469297/photo/sandstorm-driving.webp?b=1&s=170667a&w=0&k=20&c=k8EdX7z8GttVxQKbwApD9E3UyCfvjCigV3k7MCV-SKI="
    
    let COLD_URL ="https://images.unsplash.com/photo-1551582045-6ec9c11d8697?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c25vd3xlbnwwfHwwfHx8MA%3D%3D"

    let HOT_URL ="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D"

    let RAIN_URL ="https://media.istockphoto.com/id/105934727/photo/rain.webp?b=1&s=170667a&w=0&k=20&c=IroMBxRXyfm4K6sLvLaBBV3Wj6Bzv1kKJtDisEo5Jhg="

    return (
        <div className='InfoBox'>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity >80
                            ? RAIN_URL
                            : info.temp > 15
                            ?HOT_URL
                            :COLD_URL
                        }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}{
                            info.humidity >80
                            ? <ThunderstormIcon/>
                            : info.temp > 15
                            ?< WbSunnyIcon/>
                            :< AcUnitIcon/>
                        }

                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature ={info.temp}&deg;C</p>
                            <p>Humidity ={info.humidity}</p>
                            <p>Min Temp ={info.tempMin}</p>
                            <p>Max Temp ={info.tempMax}</p>
                            <p>The weathercan be described as <i>{info.weather}</i> and feels like={info.feelsLike}&deg;C</p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    )
}

export default InfoBox