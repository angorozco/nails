const productClient = prompt(`introduzca uno de los siguientes colores: 
${products[0].title}
${products[1].title}
${products[2].title}`);

//console.log(products);

const buscarProducto = (prod) => {
    console.log(products.find((product) => product.title === prod));
};

buscarProducto(productClient);
