import React, { Component } from 'react'
import CollectionPreview from '../../components/collection-preview/collection-preview.jsx';
import shopData from "./shop.data.js";

export default class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: shopData
    };
  }
  render() {
    const {collections} = this.state;
    return (
      <div className="shop-page">
        {
          collections.map(collection => (
            <CollectionPreview {...collection} key={collection.id} />
          ))
        }
      </div>
    ) 
  }
}
