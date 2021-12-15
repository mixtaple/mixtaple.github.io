document.querySelectorAll('.to-do .item input[type="checkbox"]').forEach((i)=>{
    i.addEventListener('click', ()=>{
        document.querySelector(".completed").insertAdjacentElement('beforeend', i.parentElement.parentElement);
    });
});
document.querySelectorAll('.completed .item input[type="checkbox"]').forEach((i)=>{
    i.addEventListener('click', ()=>{
        console.log('qq');
        document.querySelector(".to-do").insertAdjacentElement('beforeend', i.parentElement.parentElement);
    });
});

console.log("A"-"B"+"2")