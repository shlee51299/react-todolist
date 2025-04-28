interface ToDoProps {
    isComplete: boolean;
    value: string;
    onClick: () => void;
}

const ToDo = ({
    isComplete,
    value,
    onClick
}: ToDoProps) => {
    return (
        <div
            className="to-do"
            data-is-complete={isComplete}
            onClick={onClick}
        >
            {/* isComplete이 ture일때만 이모티콘 출력 */}
            <p>{isComplete && <span>&#10004;</span>}</p>
            <p>{value}</p>
        </div>
    )
}

export default ToDo;