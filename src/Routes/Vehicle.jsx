import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import styles from "./Vehicle.module.css"

export const Vehicle = () => {
    const [detail, setDetails] = useState("");
    const {id} = useParams();

    function search(id) {
        axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?collision_id=${id}`)
        .then(res => {
            console.log(res.data[0])
            setDetails(res.data[0])
        })
    }

    useEffect(() => {
        search(id)
    }, [])

    return (
        <div className={styles.box}>
            <div className={styles.contentHead}>
                <div>
                    <main>Collision ID</main>
                    <div>{detail.collision_id}</div>
                </div>
                <div>
                    <main>Vehicle Name</main>
                    <div>{detail.vehicle_type_code1}</div>
                </div>
                <div>
                    <main>Date</main>
                    <div>{moment(detail.crash_date).format("MM-DD-YYYY")}</div>
                </div>
                <div>
                    <main>Time</main>
                    <div>{detail.crash_time}</div>
                </div>
                <div>
                    <main>Location</main>
                    <div>{detail.cross_street_name}</div>
                    <div>{detail.zip_code}</div>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Borough</TableCell>
                            <TableCell>{detail.borough && <>{detail.borough}</>}</TableCell>
                            <TableCell>Vehicle 2</TableCell>
                            <TableCell>{detail.vehicle_type_code2 && <>{detail.vehicle_type_code2}</>}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Vehicle 3</TableCell>
                            <TableCell>{detail.vehicle_type_code3 && <>{detail.vehicle_type_code3}</>}</TableCell>
                            <TableCell>Vehicle 4</TableCell>
                            <TableCell>{detail.vehicle_type_code4 && <>{detail.vehicle_type_code4}</>}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Latitude</TableCell>
                            <TableCell>{detail.latitude && <>{detail.latitude}</>}</TableCell>
                            <TableCell>Longitude</TableCell>
                            <TableCell>{detail.longitude && <>{detail.longitude}</>}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Persons Killed</TableCell>
                            <TableCell>{detail.number_of_persons_killed}</TableCell>
                            <TableCell>Persons Injuried</TableCell>
                            <TableCell>{detail.number_of_persons_injured}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Pedestrians killed</TableCell>
                            <TableCell>{detail.number_of_pedestrians_killed}</TableCell>
                            <TableCell>Pedestrians Injuried</TableCell>
                            <TableCell>{detail.number_of_pedestrians_injured}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Cyclist Killed</TableCell>
                            <TableCell>{detail.number_of_cyclist_killed}</TableCell>
                            <TableCell>Cyclist Injuried</TableCell>
                            <TableCell>{detail.number_of_cyclist_injured}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Motorist Killed</TableCell>
                            <TableCell>{detail.number_of_motorist_killed}</TableCell>
                            <TableCell>Motorist Injuried</TableCell>
                            <TableCell>{detail.number_of_motorist_injured}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Factor for vehicle 1</TableCell>
                            <TableCell>{detail.contributing_factor_vehicle_1}</TableCell>
                            <TableCell>Factor for vehicle 2</TableCell>
                            <TableCell>{detail.contributing_factor_vehicle_2}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                            <TableCell>Factor for vehicle 3</TableCell>
                            <TableCell>{detail.contributing_factor_vehicle_3}</TableCell>
                            <TableCell>Factor for vehicle 4</TableCell>
                            <TableCell>{detail.contributing_factor_vehicle_4}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}
