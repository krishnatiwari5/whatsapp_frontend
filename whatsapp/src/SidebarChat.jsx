import React, { useEffect } from 'react'
import './SidebarChat.css'
import Avatar  from '@mui/material/Avatar'
import { useState } from 'react'
import db from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState('');
    useEffect(() => {
          setSeed(Math.floor(Math.random() * 5000)); 
    }, [])

    const createChat = async () => {
        const rootName = prompt("Please enter name for chat");
        if(rootName) {
            // db.collection('rooms').add({name : rootName,})
            try {
              const docRef = await collection(db, 'rooms').add({name : rootName});
            } catch (error) {
              console.error("Error adding document: ", error);
            }
           
        }
    };

  return !addNewChat ?(
    <div className='sidebarChat'>
       <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
         <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>Last message...</p>
         </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat }>
        <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat