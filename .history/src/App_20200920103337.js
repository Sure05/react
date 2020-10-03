import React, {Component, Fragment} from 'react';


class App extends Component {
	state = {
		products: [],
		isFetching: false
	};

	render() {
		return (
			<Fragment>
				<Loader size='small' active={isFetching} />
				<ProductList
					onAddProduct={this.addProduct}
					onEditProduct={this.editProduct}
					onRemoveProduct={this.removeProduct}
					products={this.state.products}
				/>
			</Fragment>
		);
	}
}

export default App;
