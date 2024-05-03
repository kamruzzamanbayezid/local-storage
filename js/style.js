const person = localStorage.setItem('name', 'Sakib');

const setItem = () => {
      console.log(localStorage.getItem('name'));
      console.log(localStorage.setItem('name','Rakib'));
};
setItem();