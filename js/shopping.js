const productsCart = () => {
      const productField = document.getElementById('products');
      const quantityField = document.getElementById('quantity');

      const products = productField.value;
      const quantity = quantityField.value;

      // console.log(products,quantity);

      displayProducts(products, quantity);
      saveCartToLocalStorage(products, quantity);
};

const displayProducts = (products, quantity) => {
      const productsContainer = document.getElementById('products-container');

      const li = document.createElement('li');
      li.innerText = `${products}: ${quantity}`;

      productsContainer.appendChild(li);
};

const getStoredShoppingCart = () => {
      const storedCart = localStorage.getItem('cart');

      let cart = {};
      if (storedCart) {
            cart = JSON.parse(storedCart);
      }
      return cart;
}

const saveCartToLocalStorage = (product, quantity) => {
      const cart = getStoredShoppingCart(); //{mobile:12}
      cart[product] = quantity;
      const cartStringify = JSON.stringify(cart);

      localStorage.setItem('cart', cartStringify);
}

const displayProductsFromLocalStorage = () => {
      const products = getStoredShoppingCart();
      for (let product in products) {
            const quantity = products[product];
            displayProducts(product, quantity)
      }

}

displayProductsFromLocalStorage()

// const getStoredShoppingCart = () => {
//       const storedCart = localStorage.getItem('cart');
//       cart = {};
//       if (storedCart) {
//             cart = JSON.parse(storedCart);
//       }
//       return cart;
// };

// const saveCartToLocalStorage = (product, quantity) => {
//       const cart = getStoredShoppingCart();
//       cart[product] = quantity;
//       const cartStringify = JSON.stringify(cart);
//       localStorage.setItem('cart', cartStringify);
// };

// const showCartFromLocalStorage = () => {
//       const storedCart = getStoredShoppingCart();
//       // console.log(storedCart);
//       for (product in storedCart) {
//             const quantity = storedCart[product];
//             displayProducts(product,quantity);
//       };
// };

// showCartFromLocalStorage();



