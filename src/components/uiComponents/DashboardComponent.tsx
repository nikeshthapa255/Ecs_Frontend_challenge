import React from "react";
import { Grid } from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import { BookType } from "../HomeComponent";
import BookCardComponent from "./BookCard";
import SearchBar from "./SearchBar";

export interface DashboardComponentProps {
    books: BookType[]
}


const DashboardComponent: React.FC<DashboardComponentProps> = React.memo(({ books }) => {
    
    return (
        <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="baseline"
            spacing={2}
        >

            {books.map((value) => (
                <Grid item md={4} lg={3} sm={6} key={value.bookID}>
                    <BookCardComponent book={value} />
                </Grid>
            ))}


        </Grid>
    );
})

export default DashboardComponent;


type FilterType = {
    pageCount: number,
     handleChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => void, 
     rowsPerPage: number, 
     page: number, 
     handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}
export const FilterComponent = ({  pageCount, handleChangePage, rowsPerPage, page, handleChangeRowsPerPage }: FilterType) => {
    return (
        <Grid 
        container 
        item sm={12}
        //  style={{backgroundColor: "#808e95"}}
         >
            <SearchBar />
            <TablePagination
                component="div"
                count={pageCount}
                page={page}
                onChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Grid>

    )
}