import React from 'react'
import styles from "./List.module.css"
import moment from "moment"
import {Link} from "react-router-dom"

export const List = ({vehicle_type_code1, vehicle_type_code2, crash_date, crash_time, on_street_name, collision_id}) => {
    return (
        <Link to={`/vehicle/${collision_id}`} style={{ textDecoration: 'none' }} >
           <div className={styles.content}>
                        <div>
                            <main>Vehicle 1</main>
                            <div>{vehicle_type_code1}</div>

                        {vehicle_type_code2 && (
                                <div>
                                    <main>Vechile 2</main>                      
                                    <div>{vehicle_type_code2}</div>
                                </div>
                        )}
                        </div>
                        <div>
                            <div className={styles.dateTime}>
                                <main>Date: </main>
                                <div>{moment(crash_date).format("MM-DD-YYYY")}</div>
                            </div>
                            <div className={styles.dateTime}>
                                <main>Time: </main>
                                <div>{crash_time}</div>
                            </div>
                            
                        </div>
                    </div>
        </Link>
    )
}
