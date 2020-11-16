



function openNav(){
    document.getElementById('nav').style.display = "flex";
    
    document.getElementById('nav-list').style.display = "flex";
    document.getElementById('nav-list').style.flexDirection = "column";
    document.getElementById('nav-list').style.justifyContent = "right";
    document.getElementById('nav').style.borderTop = "2px solid #fff";
    document.getElementById('close').style.display = "block";
    document.getElementById('menu-button').style.display = "none";
}
function closeMenu(){
    document.getElementById('nav').style.display = "none";
    document.getElementById('close').style.display = "none";
    document.getElementById('menu-button').style.display = "block";
}