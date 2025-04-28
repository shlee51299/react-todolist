interface PrimaryButtonProps {
    label: string;
    onClick: () => void;
}

const PrimaryButton = ({
    label,
    onClick
}: PrimaryButtonProps) => {
    return (
        <button
            className="primary-button"
            onClick={onClick}
            >
            {label}
            </button>
    )
}

export default PrimaryButton;
