import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import ProductData from '../../Helpers/Data/ProductData';
import ProductCard from '../ProductCard/ProductCard';
import './Products.scss';


class Product extends React.Component {
  state = {
    Products: [],
  }

  componentDidMount() {
    ProductData.getProducts()
      .then(res => this.setState({ Products: res }));
  }


  render() {
    const { Products } = this.state;
    const printProducts = Products.map(product => <ProductCard key={product.id}
        product={product}
      />);
    return (
     <div className="Product">
        <div className="home-Center">
        <ButtonGroup className="filterButton">
        <Button id="0" onClick={this.filterProducts}>All</Button>
        <Button id="1" onClick={this.filterProducts}>Industrial</Button>
        <Button id="2" onClick={this.filterProducts}>FarmHouse</Button>
        <Button id="3" onClick={this.filterProducts}>Bohemian </Button>
      </ButtonGroup>
        </div>
        <div className="Product-main">
          {printProducts}
        </div>
      </div>
    );
  }
}
export default Product;
