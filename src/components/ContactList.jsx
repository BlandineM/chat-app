import React from 'react';
import Contact from "./Contact"
const contacts = [
    {
        name: "Pierre",
        online: false,
        avatar: "https://randomuser.me/api/portraits/men/31.jpg",
    },
    {
        name: "Paul",
        online: true,
        avatar: "https://randomuser.me/api/portraits/men/84.jpg",
    },
    {
        name: "Jack",
        online: true,
        avatar : "https://randomuser.me/api/portraits/men/14.jpg",
    },
    {
        name: "Jane",
        online: false,
        avatar : "https://randomuser.me/api/portraits/women/57.jpg",
    },
    {
        name: "Jules",
        online: true,
        avatar : "https://randomuser.me/api/portraits/men/21.jpg",
    },
];

const ContactList = () => (
    <div>
        {contacts.map (props => (
         <Contact  name = {props.name} online = {props.online} avatar = {props.avatar}/>
        ))}
    </div>
);

export default ContactList;