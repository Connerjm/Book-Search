import React from "react";
import SearchBox from "../components/SearchBox";
import BookList from "../components/BookList";

export default function Search()
{
    return (
        <div>
            <SearchBox />
            <BookList listname="search" />
        </div>
    );
}