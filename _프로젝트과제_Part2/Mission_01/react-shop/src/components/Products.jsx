import React from 'react';
import styles from './Products.module.css';

function Products(props) {
  const item = props.product;
  const category = (e, c) => {
    let link = 'product/' + e.id;
    if(e.category == c ){
      return <a href={link} key={e.id} className={styles.scale + ' card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal'}>
                  <figure className="flex h-80 bg-white overflow-hidden">
                      <img src={e.image} alt="상품 이미지" className={styles.img +' transition-transform duration-300'} />
                  </figure>
                  <div className="card-body bg-gray-100 dark:bg-gray-700">
                    <p className="card-title text-base">{e.title}</p>
                    <p className="text-base">{e.price}</p>
                  </div>
              </a>;
    }
  }

  return (
    <>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">패션</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          {
            item.map((e) => category(e, "men's clothing"))
          }
          {
            item.map((e) => category(e, "women's clothing"))
          }
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">디지털</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          {
            item.map((e) => category(e, "electronics"))
          }
        </div>
      </section>
      <section className="pt-6 lg:pt-12 pb-4 lg:pb-8 px-4 xl:px-2 mt-10 xl:container mx-auto">
        <h2 className="mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold">쥬얼리</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list">
          {
            item.map((e) => category(e, "jewelery"))
          }
        </div>
      </section>
    </>
  );
}

export default Products;