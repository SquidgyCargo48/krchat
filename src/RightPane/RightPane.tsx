import { useState } from "react";
import { TextInputAndButton } from "../TextInputAndButton/TextInputAndButton";
import "./RightPane.less"
import { chatService, ConversationDto } from "../Dto/ChatService";
import { MessageCard } from "../MessageCard/MessageCard";
import { IconButton } from "../IconButton/IconButton";

export function RightPane({ conversation, onBack }: Readonly<{ conversation?: ConversationDto, onBack?: () => void }>) {
    const [message, setMessage] = useState("");

    return <div className="RightPane">
        {!!conversation && <>
            <div className="conversation-header">
                <IconButton iconName="arrow_back" buttonContent="Back" onClick={onBack ?? (() => {})} />
                <p>{conversation.name}</p>
            </div>
            <div className="messages">
                {conversation.lastMessages.map(x =>
                    <MessageCard key={x.timeStamp} message={x} own={x.senderId === chatService.inbox?.user.id} />
                )}
            </div>
            <TextInputAndButton value={message} onChange={setMessage} buttonContent="Send" placeholder="Write a message..." iconName="send" onClick={ () => {
                chatService.send( {type: "message", channelId: conversation.channelId, referenceTo: 0, contentType: 0, content: message } );
                setMessage("");
            }}/>
        </>}
    </div>
}