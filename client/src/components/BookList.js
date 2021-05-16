import React from "react";
import Book from "./Book";

export default function BookList(props)
{
    return (
        <div>
            <h1>{props.listName}</h1>
            <div>
                {props.books.map(book =>
                    {
                        <Book
                            title={book.title}
                            author={book.author}
                            savelist={listName === "saved" ? true : false}
                            description={props.description}
                        />
                    })}
            </div>
        </div>
    );
}