import React, {Component, Fragment} from 'react';
import {Button} from "semantic-ui-react";
import Field from "./fields/Field";
import Select from "./fields/Select";

const requiredValidator = value => !value ? 'Required!' : '';

class ProductForm extends Component {
	state = {
		title: '',
		type: '',
		price: '',
		quantity: '',
	}

	onChangeField = (name , value) => {
		this.setState({ [name]: value })
	}
	saveForm = () => {
		this.props.onAddProduct(this.state);
		this.resetFields();
		console.log('clear')
	}
	resetFields = () => {
		const state = this.state;
		delete state.id;
		this.setState({
			...state,
			title: '',
			type: '',
			price: '',
			quantity: '',
		})
	}
	componentWillReceiveProps(prevProps: Readonly, prevState: Readonly) {
		this.setState({
			...prevProps.product
		})
	}

	render() {
		const {categoriesList} = this.props
		const {title, type, price, quantity, } = this.state;
		return (
			<Fragment>
				<Field label='Name' validate={requiredValidator(title)} type="text" name='title' value={title} onChange={(e, {name, value}) => this.onChangeField(name, value)}/>
				<Select label='Category' validate={requiredValidator(type)} categoriesList={categoriesList} name='type' value={type} onChange={(e, {name, value}) => this.onChangeField(name, value)}/>
				<Field label='Price' validate={requiredValidator(price)} type="number" name='price' value={price} onChange={(e, {name, value}) => this.onChangeField(name, value)}/>
				<Field label='Quantity' validate={requiredValidator(quantity)} type="number" name='quantity' value={quantity} onChange={(e, {name, value}) => this.onChangeField(name, value)}/>
				<Button onClick={this.saveForm}>Save</Button>
			</Fragment>
		);
	}
}

export default ProductForm;