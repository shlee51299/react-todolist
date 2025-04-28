interface TextButtonProps {
    label: string;
    onClick: () => void;
}

const TextButton = ({
    label,
    onClick
}: TextButtonProps) => {
    return (
        <p
            className="text-button"
            onClick={onClick}
            >
                {label}
            </p>
    )
}

export default TextButton;
