const closeBut = document.getElementById('closeMenu');
const showBut = document.getElementById('showMenu');

function showToggleMenu (){
 document.getElementById('menu_list').style.display = 'block';
}

function hideToggleMenu (){
 document.getElementById('menu_list').style.display = 'none';
}

closeBut.onclick = hideToggleMenu;
showBut.onclick = showToggleMenu;