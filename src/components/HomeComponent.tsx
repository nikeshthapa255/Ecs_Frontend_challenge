import { Grid } from "@material-ui/core";
import axios, { AxiosRequestConfig } from "axios";
import React from "react";
import DashboardComponent, { FilterComponent } from "./uiComponents/DashboardComponent";

export interface HomeComponentProps {

}

export type BookType = {
    "bookID": number,
    "title": string,
    "authors": string,
    "average_rating": number,
    "isbn": number,
    "language_code": string,
    "ratings_count": number,
    "price": number
}


const PAGE_BOOK_COUNT = 12
const HomeComponent: React.FC<HomeComponentProps> = () => {
    const [books, setBooks] = React.useState<BookType[]>([])
    React.useEffect(() => {
        fetchBooks(setBooks)
    }, [])
    

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const bookCount = books.length
    const perPageCount = PAGE_BOOK_COUNT
    const pageCount = Math.ceil(bookCount / perPageCount)

    console.log('books..', books)
    const showBook = books.slice(Math.max(0, (page)*rowsPerPage), (page+1)*rowsPerPage)
    return (
        <div>
            Books count - {books.length}
            <FilterComponent {...{ pageCount, handleChangePage, rowsPerPage, page, handleChangeRowsPerPage }} />
            <DashboardComponent books={showBook} />
        </div>
    );
}

export default HomeComponent;


type FetchBookType = (callback: React.Dispatch<React.SetStateAction<BookType[]>>) => void

const fetchBooks: FetchBookType = (callback) => {
    const bookUrl = process.env.REACT_APP_BOOK_URL
    const config: AxiosRequestConfig = {
        method: "get",
        url: bookUrl
    }
    axios(config)
        .then((res) => {
            const books: BookType[] = res.data
            console.log(books)
            callback(books)
            return books
        })

}