export default {
	fetchProducts: () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve([
					{
						id: '1',
						title: 'IPhone',
						type: 1,
						price: '700',
						quantity: '24',
					},
					{
						id: '2',
						title: 'Samsung',
						type: 1,
						price: '600',
						quantity: '10',
					},
					{
						id: '3',
						title: 'IPad',
						type: 2,
						price: '600',
						quantity: '37',
					}
				])
			}, 1000)
		})
	}
}