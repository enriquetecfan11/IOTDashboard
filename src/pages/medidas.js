import React, { useEffect, useState } from 'react';
import "../App.css";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import { Typography } from "@mui/material";

import Navbar from './navbar';

const Medidas = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:4000/api/sensores')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.error(error), setIsLoading(true))
            .finally(() => setIsLoading(false));
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);

    }, []);

    if (isLoading) {
        return (
            <div className="main-container">
                <Navbar />
                <div className="main-content">
                    <Typography variant="h4">
                        Fetch data....
                    </Typography>
                    <LinearProgress />
                </div>
            </div>
        );
    }
    return (
        <div className='body'>
            <Paper className='container'>
                <div className="main-container">
                    <Navbar />
                    <div className="main-content">
                      
                        <TableContainer>
                            <Table className='table'>
                                <TableHead>
                                    <TableRow style={{maxWidth: '30px' }}>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                ID
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Dispositivo
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Wifi RSSI
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Datos Raw
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Temperatura
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Humedad
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Velocidad del Viento
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Lora RSSI
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Lora SNR
                                            </Typography>
                                        </TableCell>
                                        <TableCell style={{ color: 'white', textAlign: 'center' }}>
                                            <Typography variant="h8">
                                                Lora Packet Size
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {data.map(item => (
                                        <TableRow key={item.id} style={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                            <TableCell style={{ color: 'white', }}>
                                                <Typography variant="h8">{item.id}</Typography>
                                            </TableCell>
                                            <TableCell style={{ color: 'white', }}>
                                                <Typography variant="h8">{item.dispositivo}</Typography>
                                            </TableCell>
                                            <TableCell style={{ color: 'white', }}>
                                                {item.wifiRssi > -70 ? (
                                                    <Typography variant="h8" component="h8" style={{ textAlign: 'center' }}>
                                                        ✅   {item.wifiRssi}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h8" component="h8" style={{ textAlign: 'center' }}>
                                                        ❌  {item.wifiRssi}
                                                    </Typography>
                                                )}
                                            </TableCell>
                                            <TableCell style={{ color: 'white', }}>
                                                <Typography variant="h8">{item.data}</Typography>
                                            </TableCell>

                                            <TableCell style={{ color: 'white', }}>
                                                {item.temperatura > 50 ? (
                                                    <Typography variant="h8" component="h8" style={{ color: 'red' }}>
                                                        {item.temperatura + ' °C'}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h8" component="h8" style={{ color: 'white' }}>
                                                        {item.temperatura + ' °C'}
                                                    </Typography>
                                                )}
                                            </TableCell>

                                            <TableCell style={{ color: 'white', }}>
                                                {item.humedad > 50 || item.humedad === 50 ? (
                                                    <Typography variant="h8" component="h8" style={{ color: 'red' }}>
                                                        {item.humedad + ' %'}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h8" component="h8" style={{ color: 'white' }}>
                                                        {item.humedad + ' %'}
                                                    </Typography>
                                                )}

                                            </TableCell>
                                            <TableCell style={{ color: 'white', }}>{item.windspeed + ' km/h'}</TableCell>
                                            <TableCell style={{ color: 'white', }}>
                                                {item.rssi > -60 || item.rssi === -60 ? (
                                                    <Typography variant="h8" component="h8" style={{ color: 'red' }}>
                                                        {item.rssi}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h8" component="h8" style={{ color: 'green' }}>
                                                        {item.rssi}
                                                    </Typography>
                                                )}
                                            </TableCell>
                                            <TableCell style={{ color: 'white', }}>
                                                {item.snr > -9.50 || item.srn < 9.50 ? (
                                                    <Typography variant="h8" component="h8" style={{ color: 'green' }}>
                                                        {item.snr}
                                                    </Typography>
                                                ) : (
                                                    <Typography variant="h8" component="h8" style={{ color: 'red' }}>
                                                        {item.snr}
                                                    </Typography>
                                                )}
                                            </TableCell>
                                            <TableCell style={{ color: 'white', }}>
                                                <Typography variant="h8" component="h8" style={{ color: 'white' }}>
                                                    {item.packetSize}
                                                </Typography>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </Paper>
        </div>
    );
}

export default Medidas;