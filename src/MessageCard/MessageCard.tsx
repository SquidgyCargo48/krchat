import { memo } from "react";
import { MessageDto } from "../Dto/ChatService";
import "./MessageCard.less"

export const MessageCard = memo( ( { message, own }: { message: MessageDto, own: boolean } ) => 
    { 
     return <div className={ "MessageCard" + ( own ? " own" : "" ) }> 
      <div className="bubble"> 
       <span className="text">{ message.content }</span> 
       <span className="time"> 
        { new Date( message.timeStamp ).toLocaleTimeString() } 
       </span> 
      </div> 
     </div> 
    } );