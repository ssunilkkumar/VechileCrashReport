import React, { useState, useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BasicPagination from '../Components/Pagination';
import styles from "./Home.module.css";
import axios from "axios";
import moment from "moment";
import { Grid } from '@material-ui/core';
import { Card } from '../Components/Card';

export const Home = () => {
    const [startDate, setStartDate] = useState(null);
    const [newformat, setNewFormat] = useState(null);
    const [data, setData]= useState([]);
    const [totalPages, setTotalPages] = useState(null);
    const [pages, setPages] = useState(1);

    function handleData(startDate, pages) {
        console.log(startDate, pages);
        if(startDate == null) {
            axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json`)
            .then(res => (
                setTotalPages(Math.ceil(res.data.length/20))
                
            ))
            axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?&$offset=${pages-1}&$limit=20`)
            .then(res => (
                setData(res.data)
            
            ))
        }
        else {
            axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=${newformat}`)
            .then(res => (
                setTotalPages(Math.ceil(res.data.length/20))     
            ))
            axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?crash_date=${newformat}&$offset=${pages-1}&$limit=20`)
            .then(res => (
                setData(res.data)
                  
            ))
        }
    }

    function handleDate(date) {
        console.log("hello", date)
        setStartDate(date)
        setNewFormat(moment(date).format("YYYY-MM-DD"))
    }

    function handlePage(page) {
        setPages(page)
    }


    useEffect(() => {
        handleData(startDate, pages)
    }, [startDate, pages])
    
    return (
        <div>
            <div>
                <div className={styles.datePicker}>
                    <div>Filter By Date </div>
                    <DatePicker 
                        selected={startDate}
                        onChange={handleDate} 
                        popperClassName="some-custom-class"
                        popperPlacement="top"
                        isClearable
                        placeholderText="showing all result"
                    />
                </div>
                <div>
                    <BasicPagination totalPages={totalPages} handlePage={handlePage}/>
                </div>
            </div>
            <div className="container">
                <Grid container spacing={2}>
                    {
                        data?.map(value => (
                            <Grid md={4} lg={3} xl={2} sm={6} xs={12} item key={value.collision_id}>
                                <Card {...value} />
                            </Grid>
                        ))
                    }
                </Grid>
            </div>
        </div>
    )
}
