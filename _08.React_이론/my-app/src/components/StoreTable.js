import React from 'react';
import ProductsTable from './ProductsTable';

function StoreTable(props) {
	const { products } = props;

	const result = products.reduce((acc, cur) => {
		if(acc.hasOwnProperty(cur.category)){
			// key(category)를 가지고 있는 케이스, 배열에 추가만 하면 됨
			return { ...acc, [cur.category] : [...acc[cur.category], cur]}
		}else{
			// 새로운 카테고리의 key를 생성하고 배열도 추가해줘야함
			return { ...acc, [cur.category] : [cur]}
		}
	}, {});

	const keys = Object.keys(result);

	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{ keys.map((key, idx) =>
					(<ProductsTable category={key} items={result[key]} key={idx} />
				)) }
			</tbody>
		</table>
	);
}

export default StoreTable;