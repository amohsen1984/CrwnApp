import React from 'react';

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/collection-previewe/collection-preview.component";

class ShopPage extends  React.Component {
    constructor(props) {
        super();
        this.props = props;
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...otherProps}) => (
                        <CollectionPreview key={id} {...otherProps}></CollectionPreview>
                    ))
                }
            </div>);
    }
}

export default ShopPage
