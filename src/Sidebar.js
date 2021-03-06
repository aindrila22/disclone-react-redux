import React from 'react'
import "./Sidebar.css";
import AddIcon from '@material-ui/icons/Add'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SidebarChannel from './SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
//import web from "./images/aindrila.jpg";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';

function Sidebar() {
    const user = useSelector(selectUser);
    return (
        <div className="sidebar">
        
            <div className="sidebar_top">
            <h3>Aindrila</h3>
            <ExpandMoreIcon/>
            </div>

         <div className="sidebar_channels">
         <div className="sidebar_channelsHeader">
         <div className="sidebar_header">
         <ExpandMoreIcon/>
         <h4>Text Channels</h4>
         </div>
         <AddIcon className="sidebar_addChannel"/>
         </div>
         <div className="sidebar_channelList">
         <SidebarChannel/>
         <SidebarChannel/>
         <SidebarChannel/>
         </div></div>
         
     <div className="sidebar_voice">
<SignalCellularAltIcon className="sidebar_voiceIcon"
fontSize="large"/>

   <div className="sidebar_voiceInfo">
<h3>Voice Connected</h3>
<p>Stream</p>
</div>

<div className="sidebar_voiceIcons">
<InfoOutlinedIcon/>
<CallIcon/>
</div>
</div>

<div className="sidebar_profile">
<Avatar onClick={() => auth.signOut() }src={user.photo} alt="pic"/>

<div className="sidebar_profileInfo">
<h3>{user.displayName}</h3>
<p>#{user.uid}</p>
</div>

<div className="sidebar_profileIcons">
<MicIcon/>
<HeadsetIcon/>
<SettingsIcon/>
</div>
</div>
        
</div>
    )
}

export default Sidebar
