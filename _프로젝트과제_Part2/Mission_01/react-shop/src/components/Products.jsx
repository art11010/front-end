import React from 'react';

function Products(props) {
	const info =  props.product;
	// console.log(props.product)

	return (
		<section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
			{ info.map((doc) =>
				<React.Fragment key={ doc.id } >
					{ doc.id % 4 == 1 && 
						<h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">{doc.category}</h2>
					}
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list" data-scroll="true">
						<a className="card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal">
							<figure className="flex h-80 bg-white overflow-hidden">
								<img src={ doc.image } alt="상품 이미지" className="transition-transform duration-300" />
							</figure>
							<div className="card-body bg-gray-100 dark:bg-gray-700">
								<p className="card-title text-base">{ doc.title }</p>
								<p className="text-base">${ doc.price }</p>
							</div>
						</a>
					</div>
				</React.Fragment>
			) }
		</section>
	);
}

export default Products;