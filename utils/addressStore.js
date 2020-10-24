const addressStore = {}

addressStore.get = () => {
  if(localStorage.getItem('address') == null) return null;
  return JSON.parse(localStorage.getItem('address'));
};
addressStore.update = (item) => {
  localStorage.setItem('address', JSON.stringify(item))
};

export default addressStore;