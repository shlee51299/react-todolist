interface OutlineInputProps {
    value: string;
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const OutlineInput = ({
    value,
    placeholder,
    onChange,
    onKeyDown
}: OutlineInputProps) => {
    return (
        <input
            type="text"
            className="outline-input"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}

export default OutlineInput;