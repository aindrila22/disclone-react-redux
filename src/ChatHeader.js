import React from 'react';
import "./ChatHeader.css";
import EditLocationRoundedIcon from '@material-ui/icons/EditLocationRounded';
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';


function ChatHeader() {
    return (
        <div className="chatHeader">
      
            <div className="chatHeader_left">
            <h3><span className="chatHeader_hash">
            #
            </span>Test Channel name</h3>
            </div>
              <div className="chatHeader_right">
             <EditLocationRoundedIcon/>
             <PeopleAltRoundedIcon/>
             <NotificationsIcon/>

             <div className="chatHeader_search">
             <input placeholder="Search" />
             <SearchRoundedIcon/>
             </div>
<SendRoundedIcon/>
<HelpRoundedIcon/>

              </div>
        </div>
    )
}

export default ChatHeader
