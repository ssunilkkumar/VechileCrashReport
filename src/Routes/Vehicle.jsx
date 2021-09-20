import React, {useState, useEffect} from 'react'
import {useParams, useHistory} from "react-router-dom";
import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
        <div>
            <div></div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
            </TableRow>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
              <TableCell>Vehicle 1</TableCell>
              <TableCell>Vehicle 2</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}
