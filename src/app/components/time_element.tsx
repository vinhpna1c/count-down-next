type TimeElementProps = {
    field: string,
    value: string|number,
}

export default function TimeElement(props: TimeElementProps) {
    const {field,value}= props;
    return (
        <div className="w-32 h-32 flex flex-col justify-center items-center rounded-xl bg-gray-600 mx-2">
            <span className="text-white text-3xl font-bold mb-2">{value}</span>
            <span className="text-white text-[10px] font-light">{field}</span>
        </div>
    )
}