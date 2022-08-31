import "./BlogPinnedItem.css";

function BlogPinnedItem(props) {
    

    return(
        <div className="BlogPinnedItem">
            <h3 className="BlogPinnedItemTitle">{props.item.title}</h3>
            <p className="BlogPinnedItemDescription">{props.item.description}</p>
            <p className="BlogPinnedItemDate">{props.item.published}</p>
        </div>
    );
}

export { BlogPinnedItem };