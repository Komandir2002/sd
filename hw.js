const big = document.querySelector("img")
const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const big2 = document.querySelector('.center__img')
delete_class= () =>{
    big.classList.remove("img_plus")
}
delete_class()

add_class = ()=>{
    big.classList.add("img_plus")
}
plus.addEventListener("click",add_class)
minus.addEventListener('click',delete_class)