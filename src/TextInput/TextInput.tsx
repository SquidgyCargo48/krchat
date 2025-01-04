import "./TextInput.less"

export type TextInputProps = {
    value: string;
    onChange: (value: string) => void;
    type?: "text" | "password" | "email";
    placeholder?: string;
    onEnter?: () => void;
    autofocus?: boolean;
}

export function TextInput({ value, onChange, type, placeholder, onEnter, autofocus }: TextInputProps) {
    return (
        <div className="TextInput">
            <input type={type} value={value} onInput={e => onChange(e.currentTarget.value)} autoFocus={autofocus}
                onKeyDown={onEnter ? e => {
                    if (e.key === "Enter") onEnter();
                } : undefined } />
            <label className={value ? "subsided" : undefined} >{placeholder}</label>
        </div>
    );
}