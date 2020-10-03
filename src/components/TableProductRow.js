import React, {Component, Fragment} from 'react';
import {Table, Button} from 'semantic-ui-react'

class TableProductRow extends Component {
	renderCell(cell, type){
		const {categoriesList} = this.props;
		switch (type) {
			case 'type':
				return categoriesList.map(elem => {
					return elem.id === cell ? elem.name : ''
				})
			default:
				return cell
		}
	}

	render() {
		const {row, removeProduct, editProduct} = this.props;

		return (
			<Fragment>
				{
					Object.keys(row).map((key, index)=>{
						if(key !== 'id')
							return (
								<Table.Cell key={index}>
									{this.renderCell(row[key], key)}
								</Table.Cell>
							)
					})
				}
				<Table.Cell>
					<Button onClick={() => editProduct(row.id)}>Edit</Button>
					<Button onClick={() => removeProduct(row.id)}>Remove</Button>
				</Table.Cell>
			</Fragment>
		);
	}
}

export default TableProductRow;