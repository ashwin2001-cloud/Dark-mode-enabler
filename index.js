var a= document.getElementsByTagName("input")[0];
console.log(a);
document.body.style.background= "white";

a.addEventListener('click', function(){
    if(document.body.style.background== "white"){
        console.log(1);
        document.body.style.background= "black";
        document.getElementsByTagName("h1")[0].style.color= "white";
    }
    else{
        console.log(2);
        document.body.style.background= "white";
        document.getElementsByTagName("h1")[0].style.color= "black";
    }

});
