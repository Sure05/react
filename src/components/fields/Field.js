import React, {Component, Fragment} from "react";
import {Form} from "semantic-ui-react";

export default class Field extends Component {
	state = {
		error: ''
	};

	validate() {
		const error = this.props.validate(this.props.value)
		this.setState({ error })
	}

	render() {
		const {label, ...otherProps } = this.props;
		const { error } = this.state;
		return (
			<Fragment>
				<Form.Field>
					<label>{label}</label>
					<Form.Input
						{...otherProps}
						error={error}
					/>
				</Form.Field>
			</Fragment>
		)
	}
}