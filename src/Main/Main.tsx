import { useState } from "react";
import { ConversationDto } from "../Dto/ChatService";
import { LeftPane } from "../LeftPane/LeftPane";
import { RightPane } from "../RightPane/RightPane";

import "./Main.less"

export function Main() {

    const [selected, setSelected] = useState<ConversationDto>();

    return <div className={selected == undefined ? "Main left" : "Main right"}>
        <LeftPane selected={ selected } onSelect={ setSelected } />
        <RightPane conversation={ selected } onBack={() => setSelected(undefined)}/>
    </div>
}