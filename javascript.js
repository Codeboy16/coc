let humburger = document.getElementById('hamburger')
let cancel = document.getElementById('cancel');
let menu = document.getElementById('menu');

humburger.addEventListener('click',()=>{
     menu.className = "flex-col";
     humburger.className = "hidden";
     cancel.className = "inline-block text-2xl md:hidden"
})

cancel.addEventListener('click',()=>{
    menu.className = "hidden md:inline-flex ";
    humburger.className = "inline-block md:hidden";
    cancel.className = "hidden text-2xl"
})