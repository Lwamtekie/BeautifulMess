import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import ProductData from '../../Helpers/Data/ProductData';
import ProductCard from '../ProductCard/ProductCard';
import './Products.scss';


class Product extends React.Component {
  state = {
    Products: [],
    filteredProducts: [],
  }

  filterProducts = (e) => {
    const Category = e.target.id;
    const intCategory = parseInt(Category, 10);
    const { Products } = this.state;
    console.error(intCategory);
    if (intCategory === 0) {
      this.getAllProducts();
    } else {
      const filteredData = Products.filter(a => a.categoryId === intCategory);
      console.error(filteredData);
      this.setState({
        filteredProducts: filteredData,
      });
    }
  }

  getAllProducts = () => {
    ProductData.getProducts()
      .then(res => this.setState({ Products: res, filteredProducts: res }));
  }

  componentDidMount() {
    this.getAllProducts();
    // ProductData.getProducts()
    //   .then(res => this.setState({ Products: res }));
  }

  render() {
    const { filteredProducts } = this.state;
    const printProducts = filteredProducts.map(product => <ProductCard key={product.id}
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
