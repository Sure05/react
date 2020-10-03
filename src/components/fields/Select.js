import React, {Component, Fragment} from "react";
import {Form, Select} from "semantic-ui-react";

class SelectField extends Component{
	options = list => {
		const {categoriesList} = this.props;
		let options = [];
		categoriesList.forEach((item, index) => {
			options.push({
				key: index,
				value: item.id,
				text: item.name
			})
		})
		return options
	}
	render() {
		const {label, categoriesList, ...otherProps} = this.props;
		return (
			<Fragment>
				<label>{label}</label>
				<Form.Field>
					<Select {...otherProps} options={this.options()} />
				</Form.Field>
			</Fragment>
		);
	}
}
export default SelectField