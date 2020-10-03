import React, {Component} from 'react';
import {Table} from 'semantic-ui-react'
import TableProductRow from "./TableProductRow";

class TableProducts extends Component {
	render() {
		const {products, categoriesList, onEditProduct, onRemoveProduct} = this.props;
		return (
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>Name</Table.HeaderCell>
						<Table.HeaderCell>Category</Table.HeaderCell>
						<Table.HeaderCell>Price</Table.HeaderCell>
						<Table.HeaderCell>Count</Table.HeaderCell>
						<Table.HeaderCell>Actions</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{products.map(row => (
						<Table.Row
							key={row.id}
						>
							<TableProductRow
								editProduct={onEditProduct}
								removeProduct={onRemoveProduct}
								categoriesList={categoriesList}
								row={row}
							/>
						</Table.Row>
					))}
				</Table.Body>
			</Table>
		);
	}
}

export default TableProducts;