import React, {useState, useEffect} from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import styles from "./Pagination.module.css"
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AppsTwoToneIcon from '@mui/icons-material/AppsTwoTone';


export default function BasicPagination({totalPages, handlePage, handleView}) {
    const [page, setPage] = useState(1);
    const [view, setView] = useState("false")
    const handleChange = (event, value) => {
      setPage(value);
      handlePage(value)
    };
    //console.log(totalPages)
    useEffect(() => {
      handleView(view)
    }, [view])

  return (
    <div className={styles.flex}>
        <Pagination 
          count={totalPages} 
          page={page} 
          color="secondary"
          onChange={handleChange} 
        />
        {/* <Typography>Page: {page}</Typography> */}
        <div className={styles.list}>
            <FormatListBulletedIcon onClick={() => setView("true")}/>
            <AppsTwoToneIcon onClick={() => setView("false")} />
        </div>
    </div>
  );
}
