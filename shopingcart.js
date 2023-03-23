const btnAdd = () => {
    const productInput = document.getElementById('product-field');
    const quantityInput = document.getElementById('quantity-field');
    const product = productInput.value;
    const quantity = quantityInput.value;
    productInput.value = '';
    quantityInput.value = '';
    displayproduct(product, quantity);
    saveToLocalStore(product, quantity)
}
const displayproduct = (product, quantity) => {
    const makeUl = document.getElementById('ul-list');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity}`;
    makeUl.appendChild(li);
}

const getstoredShopingCart =()=>{
    let cart ={};
    const storedCart =localStorage.getItem('cart');    
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
}
const saveToLocalStore =(product,quantity)=>{
    const cart = getstoredShopingCart(); 
   cart[product]=quantity;
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify);
}
const displayProductsFromLocalStores =() =>{
    const saveCart = getstoredShopingCart(); 
    for(const product in saveCart){
        const quantity = saveCart[product]
        console.log(product,quantity);
        displayproduct(product, quantity);
    }
}
displayProductsFromLocalStores();