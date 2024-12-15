import { Button, Grid, Input, Paper, TextField } from '@mui/material';
import * as React from 'react';
import { Chart } from "react-google-charts";
import { CovAxios } from '../utils/AxiosClient';
import { useEffect,useState } from 'react';

export default function HomePage() {
    const [chartData, setchartData] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    useEffect(() => {
        CovAxios.get("/infection/7days?date=2022-02-13").
            then((response) => {
                console.log(response.data)
                console.log(reshapeChartData(response.data))
                setchartData(reshapeChartData(response.data))
            });
      }, []);
    

    const handlePredictButton = ()=>{
        CovAxios.get("/infection/7days/predict?date="+selectedDate).
            then((response) => {
                console.log(response.data)
                console.log(reshapeChartData(response.data))
                setchartData(reshapeChartData(response.data))
            });
    }
    const handleDateChange = (event) => { 
        console.log(event.target.value)
        setSelectedDate(event.target.value); 
        setSelectedDate(selectedDate); 
        CovAxios.get("/infection/7days?date="+selectedDate).
            then((response) => {
                console.log(response.data)
                console.log(reshapeChartData(response.data))
                setchartData(reshapeChartData(response.data))
            });
    
    };

    const handleCheckDateButton = ()=>{
        console.log(selectedDate)
        
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <TextField defaultValue="2022-02-13" type="date" id="date" name="date" value={selectedDate} onChange={handleDateChange} variant="outlined" label="Simular fecha" InputLabelProps={{ shrink: true, }} />
            <Grid item xs={12} p={5} >
                <Chart
                    chartType="ColumnChart"
                    data={chartData}
                    options={
                        {title: 'Infección de COVID 19 en el Perú',
                            vAxis: { minValue: 0 }
                        }
                    }
                    width={"800px"}
                    height={"600px"}
                />
            </Grid>
            <Button onClick={handlePredictButton} variant="contained">Predecir el día siguiente</Button>
        </Grid>
    )
}

function reshapeChartData(data){
    let dataList=[];
    dataList.push(["Infection","Índice de infección por día"]);
    data.forEach(infectionDay => {
        dataList.push([infectionDay.date,infectionDay.infection_smoothed])
    });
    return dataList;
} 