var x=150; var y=200;
function pos(dx, dy){
    if(!document.getElementById) return;
    dy*=10;
    dx*=10;
    x=x+dx;
    y=y+dy;
    obj=document.getElementById("box");
    obj.style.top=y+"px";
    obj.style.right=x+"px";
}
function show(){
    if(!document.getElementById) return;
    obj=document.getElementById("box");
    obj.style.display="block";
}
function hide(){
    if(!document.getElementById) return;
    obj=document.getElementById("box");
    obj.style.display="none";
}