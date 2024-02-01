import React from "react";
import ListItem from "./Item";


export default function List() {
    return (
        <div className='w-full  overflow-auto text-center bg-gray-100'>
            <ul className='flex flex-wrap w-full p-4 gap-4'>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem active={true} />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>
                <li>
                    <ListItem />
                </li>                
            </ul>
        </div>
    )
}