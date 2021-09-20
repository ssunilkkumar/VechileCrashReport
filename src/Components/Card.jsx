import React from 'react'
import moment from "moment";
import styles from "./Card.module.css"
import {Link} from "react-router-dom"


export const Card = ({vehicle_type_code1, vehicle_type_code2, crash_date, crash_time, on_street_name, collision_id}) => {
    return (
        <Link to={`/vehicle/${collision_id}`} style={{ textDecoration: 'none' }} >
            <div className={styles.card}>
            <div className={styles.bgImage}>
                <div className={styles.content}>
                    <main>{vehicle_type_code1}</main>
                    {vehicle_type_code2 && (
                        <div>
                            <main>With</main>
                            <main>{vehicle_type_code2}</main>
                        </div>
                    )}
                    <main>{`Date: `}{moment(crash_date).format("MM-DD-YYYY")}</main>
                    <main>{`Time: ${crash_time}`}</main>
                    {on_street_name && <main>{`Address: `}{on_street_name}</main>}
                </div>
            </div>
            </div>
        </Link>
    )
}
