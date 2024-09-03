function Seperator(props) {
    const separatorLine = [];
    for (let i = 0; i < props.count; i++) {
        separatorLine.push(<span key={i}>{props.symbol}</span>);
    }
    return <div>{separatorLine}</div>;
}

export default Seperator;