import "./BlogItem.css";

function BlogItem(props) {
    console.log(props);

    return (
        <div className="BlogItem">
            <h3 className="BlogItemTitle">{props.item.title}</h3>
            <p className="BlogItemDescription">{props.item.description}</p>
            <p className="BlogItemDate">{props.item.published}</p>
        </div>
    );
}

export { BlogItem }