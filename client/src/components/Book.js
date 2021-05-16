import React from "react";

export default function Book(props)
{
    return (
        <div>
            <div>
                <h1>{props.title}</h1>
                <p>Written by {props.author}</p>
            </div>
            <div>
                <button>
                    View
                </button>
                <button>
                    {props.savelist ? <p>Delete</p> : <p>Save</p>}
                </button>
            </div>
            <div>
                <img />
            </div>
            <div>
                <p>
                    {props.description}
                </p>
            </div>
        </div>
    );
}