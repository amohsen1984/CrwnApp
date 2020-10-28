import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import "./collection-preview.style.scss";

const collectionPreview = ({title, items}) => (
    <div className="collection-preview">
        <h1>{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items.filter((value, idx) => idx < 4).map(({id, ...otherfields}) => (
                    <CollectionItem key={id} {...otherfields} />
                ))
            }
        </div>
    </div>
);

export default collectionPreview;
