import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import Typography from '@material-ui/core/Typography';
import styles from "./Pagination.module.css"


export default function BasicPagination({totalPages, handlePage}) {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
      handlePage(value)
    };
    //console.log(totalPages)


  return (
    <div className={styles.flex}>
        <Pagination 
          count={totalPages} 
          page={page} 
          color="secondary"
          onChange={handleChange} 
        />
        <Typography>Page: {page}</Typography>
    </div>
  );
}
