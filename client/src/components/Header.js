import React from "react";

export default function Header()
{
    return (
        <header>
            <h3>Book Search</h3>
            <a href="/search">Search</a>
            <a href="/saved">Saved</a>
        </header>
    );
}