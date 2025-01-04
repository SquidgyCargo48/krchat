import { IconButton } from "../IconButton/IconButton";
import { TextInput, TextInputProps } from "../TextInput/TextInput";
import "./TextInputAndButton.less"

export type TextInputAndButtonProps = TextInputProps & {
    buttonContent?: string;
    onClick?: () => void;
    iconName: string;
}

export function TextInputAndButton({buttonContent, onClick, iconName, ...textInputProps} : TextInputAndButtonProps) {
    return <div className="TextInputAndButton">
        <TextInput {...textInputProps} onEnter={onClick}/>
        <IconButton onClick={onClick ?? (() => {})} buttonContent={buttonContent ?? ''} iconName={iconName} />
    </div>
}