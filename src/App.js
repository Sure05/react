import React, { Component, Fragment } from 'react';
import { Loader, Grid } from 'semantic-ui-react';
import TableProducts from "./components/TableProducts";
import ProductForm from "./components/ProductForm";
import productsApi from './productsApi';

import 'semantic-ui-css/semantic.min.css';


class App extends Component {
	state = {
		categoriesList: [
			{
				id: 1,
				name: 'Phone'
			},
			{
				id: 2,
				name: 'Tabled'
			},
			{
				id: 3,
				name: 'Notebook'
			},
		],
		products: [],
		product: {},
		isFetching: false,
	};

	removeProduct = id => {
		const { products } = this.state;
		this.setState({
			products: products.filter(product => product.id !== id),
			product: {}
		})
	};
	editProduct = updatedProduct => {
		const {products} = this.state;
		products.forEach(itemList => {
			if(itemList.id ===  updatedProduct)
				this.setState({product: itemList})
		})
	};

	saveProduct = (product) => {
		const {products} = this.state;
		let newProductList = [...products];
		if(!product.hasOwnProperty('id')){
			let length = products.length;
			product.id = length > 0 ? products[length - 1].id + 1 : 1;
			newProductList.push(product)
		} else {
			newProductList.forEach((itemList, index) => {
				if(itemList.id ===  product.id)
					newProductList[index] = product
			})
		}
		this.setState({
			products: newProductList,
			product: {}
		})
	}

	componentDidMount() {
		this.setState({ isFetching: true });
		productsApi
			.fetchProducts()
			.then(products => {
				this.setState({ products, isFetching: false })
			})
	}

	render() {
		return (
			<Fragment>
				<Loader size="small" active={this.state.isFetching} />
				{
					!this.state.isFetching ?
						<Grid columns={2}>
							<Grid.Column width={8}>
								<TableProducts
									//
									onEditProduct={this.editProduct}
									onRemoveProduct={this.removeProduct}
									categoriesList={this.state.categoriesList}
									products={this.state.products}
								/>
							</Grid.Column>
							<Grid.Column width={5}>
								<ProductForm
									onAddProduct={this.saveProduct}
									product={this.state.product}
									categoriesList={this.state.categoriesList}
								/>
							</Grid.Column>
						</Grid>
					: ''
				}
			</Fragment>
		);
	}
}

export default App;
