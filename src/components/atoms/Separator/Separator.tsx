interface SeparatorProps {
    variant: "light" | "dark" | "orange";
}

function Separator(props: SeparatorProps) {
    return (
        <div className={`separator separator--${props.variant}`}></div>
    )
}

export default Separator;