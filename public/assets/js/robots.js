var parent=document.querySelector('.vartest2');
var child = document.querySelector('.blog-card');
var row = document.querySelector('#variantsrow');

parent.style.height = (1.2)*child.offsetHeight + 'px';

if (screen.width < 992) {
  console.log(screen.width); 
  row.style.height = (4)*child.offsetHeight + 'px';
}