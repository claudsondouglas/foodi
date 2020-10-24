const cartStore = {}

cartStore.all = () => {
  if(localStorage.getItem('cart') == null) return [];
  return JSON.parse(localStorage.getItem('cart'));
};
cartStore.create = (item) => {
  if(cartStore.all() === []) {
    localStorage.setItem('cart', JSON.stringify([item]))
  } else {
    var cS = cartStore.all();
    cS.push(item);
    localStorage.setItem('cart', JSON.stringify(cS));
  }
};
cartStore.remove = (index) => {
  console.log(index);
  var cs = cartStore.all();
  var ncs = cs.filter((item, indexItem) => {
    return indexItem != index
  })
  localStorage.setItem('cart', JSON.stringify(ncs));
}
cartStore.total = () => {
  const items = cartStore.all();
  let total = 0;
  items.forEach(item=>{ 
    total += item.price * item.quantity
  })
  return total;
}

export default cartStore;