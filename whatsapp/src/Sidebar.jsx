import React from 'react'
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import './Sidebar.css';
import SidebarChat from './SidebarChat';
import { useState } from 'react';
import { useEffect } from 'react';
import { collection } from 'firebase/firestore';
// import { onSnapshot } from 'firebase/firestore';
// import { QuerySnapshot } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';

import db from './firebase';
import { async } from '@firebase/util';


function Sidebar() {

    const [rooms, setRooms] = useState([]);

    const colRef =  collection(db,'rooms')

    const fetchData = async () => {
        await getDocs(colRef).then((snapshot) => { ( setRooms(snapshot.docs.map(doc => ({ id : doc.id, data : doc.data() })))) })
    }

    useEffect(() => {
         
        //  getDocs.then
        //     onSnapshot(colRef, snapshot => )
        fetchData();
    },[])
  return (
    <div className='sidebar'>
        <div className="sidebar__header">
            <Avatar />
            <div className="sidebar__headerRight">
                <IconButton>
                <DonutLargeIcon/>
                </IconButton>
                <IconButton>
                <ChatIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
        <div className="sidebar__search">
            <div className="sidebar__searchContainer">

            <SearchIcon/>
            <input type="text" placeholder='Search or start new chat'/>
            </div>
        </div>

        <div className="sidebar__chats">
            <SidebarChat addNewChat/>
            
            {rooms.map(room => (<SidebarChat key={room.id} id = {room.id} name ={room.data.name} />) )}
        </div>
    </div>
  )
}

export default Sidebar