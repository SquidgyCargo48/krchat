import { ConversationDto } from "../Dto/ChatService";
import "./ConversationCard.less"

export function ConversationCard({ conversation, selected, onSelect }: Readonly<{ conversation: ConversationDto, selected: boolean, onSelect: () => void }>) {
    const lastMessage = conversation.lastMessages.length > 0 ?
        conversation.lastMessages[conversation.lastMessages.length - 1] : null;

    const time = lastMessage ? new Date(lastMessage.timeStamp).toLocaleTimeString() : undefined;

    return <div className={"ConversationCard" + ( selected ? " selected" : "" )}
        onClick={() => onSelect()}>
        <div>
            <h3>{conversation.name}</h3>
            <time dateTime={time}>{time}</time>
        </div>
        <span>{lastMessage?.content}</span>
    </div>
}