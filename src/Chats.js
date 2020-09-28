import React from 'react';
import Chat from './Chat';
import './Chats.css';


function Chats() {
    return (
        <div className="chats">
            <Chat
                name="Mark"
                message="yo, sup"
                timestamp="40seconds ago"
                profilePic="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/dog_cool_summer_slideshow/1800x1200_dog_cool_summer_other.jpg?resize=750px:*"
            />
            <Chat
                name="Bob Doe"
                message="yo, niiiiiceeeee"
                timestamp="5mins  ago"
                profilePic="https://upload.wikimedia.org/wikipedia/commons/f/fb/Robert_Doe%2C_RAF_fighter_pilot_and_ace.jpg"
            />
            
        </div>
    )
}

export default Chats
