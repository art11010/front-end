import React from 'react';
// import * as S from './ProductsTable.style'
import styled from 'styled-components';

function ProductsTable(props) {
	const { category, items, inStockOnly } = props;
	const filteredItems = inStockOnly ? items.filter(item => item.stocked) : items;
	return (
		<>
			<tr>
				{/* <td style={{ fontWeight : 'bold' }}>{category}</td> */}
				<Category>{category}</Category>
			</tr>
			{filteredItems.map((item, idx) => (
				<tr key={idx}>
					{/* <td style={item.stocked ? {} : {color: 'red'}}>{item.name}</td> */}
					<ProductName stocked={item.stocked}>{item.name}</ProductName>
					<td>{item.price}</td>
				</tr>
			))}
		</>
	);
}

const Category = styled.td`
	font-weight : bold;
`;

const ProductName = styled.td`
	color : ${props => props.stocked ? '' : 'red'};
`;

export default ProductsTable;