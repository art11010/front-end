import React from 'react';

function ProductsTable(props) {
	const { category, items, inStockOnly } = props;
	const filteredItems = inStockOnly ? items.filter(item => item.stocked) : items;
	return (
		<>
			<tr>
				<td style={{ fontWeight : 'bold' }}>{category}</td>
			</tr>
			{filteredItems.map((item, idx) => (
				<tr key={idx}>
					{/* <td style={item.stocked ? {} : {color: 'red'}}>{item.name}</td> */}
					<td style={{color: item.stocked ? '' : 'red'}}>{item.name}</td>
					<td>{item.price}</td>
				</tr>
			))}
		</>
	);
}

export default ProductsTable;