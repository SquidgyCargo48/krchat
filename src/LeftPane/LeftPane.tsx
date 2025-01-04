import { useState } from "react";
import { TextInputAndButton } from "../TextInputAndButton/TextInputAndButton";
import "./LeftPane.less"
import { chatService, ConversationDto } from "../Dto/ChatService";
import { ConversationCard } from "../ConversationCard/ConversationCard";

export function LeftPane( {selected, onSelect} : Readonly<{
    selected?: ConversationDto,
    onSelect: (conversation: ConversationDto) => void
}>) {
    const [invite, setInvite] = useState("");
    
    return <div className="LeftPane">
        {chatService.inbox && <p>My tag: {chatService.inbox.user.tag} </p>}
        <TextInputAndButton value={invite} onChange={setInvite} buttonContent="Invite" placeholder="Tag" iconName="add" onClick={ () => {
            if(invite) {
                setInvite("");
                chatService.send( {type: "contactRequest", email: invite, firstMessage: "Hello" } );
            }
        }}/>
        <div className="conversations">
            {chatService.inbox?.conversations.map(x => <ConversationCard key={x.channelId} conversation={x} selected={x === selected} onSelect={() => onSelect(x)} />)}
        </div>
    </div>
}