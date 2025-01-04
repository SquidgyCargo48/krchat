import "./IconButton.less"

export type IconButtonProps = {
    iconName: string;
    buttonContent: string;
    onClick: () => void;
}

export function IconButton({ iconName, buttonContent, onClick }: IconButtonProps) {
    return <button className="IconButton" onClick={onClick}>
        <span className="material-symbols-outlined">{iconName}</span>
        {buttonContent}
    </button>
}