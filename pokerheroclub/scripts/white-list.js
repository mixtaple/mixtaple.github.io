// document.querySelectorAll('.expand').forEach((i)=>{
//     i.addEventListener('click', ()=>{
//         i.classList.toggle('rotated');
//         i.parentElement.nextElementSibling.classList.toggle('hidden');
//     })
// });

document.querySelectorAll('.faq__title').forEach((i)=>{
    i.addEventListener('click', ()=>{
        i.classList.toggle('rotated');
        i.nextElementSibling.classList.toggle('hidden');
    })
});

<<<<<<< HEAD
=======
document.querySelector('.hamburger').addEventListener('click', (e)=>{
    document.querySelector('.header__menu').classList.toggle('opened');
});

document.querySelectorAll('.header__menu li').forEach((i)=>{
    i.addEventListener('click', ()=>{
        if (document.querySelector('.header__menu').classList.contains('opened') == true){
            document.querySelector('.header__menu').classList.toggle('opened');
        }
    });

});

>>>>>>> 17886b1104988e0214556b4f169899ef2fc723e8
// function validateWhiteListForm() {
//     let wallet = document.forms["whiteListForm"]["wallet_id"].value;
//     if (wallet === "") {
//         alert("Name must be filled out");
//         return false;
//     }
// }

// whiteListForm.onsubmit = async (e) => {
//     e.preventDefault();

//     const url = 'http://157.90.22.28:8800/nft/white-list/';

//     const myInit = {
//         method: 'POST',
//         body: new FormData(whiteListForm)
//     }

//     const myRequest = new Request(url, myInit);

//     try {
//         const response = await fetch(myRequest);
//         const json = await response.json();
//         console.log(JSON.stringify(json));

//     } catch (error) {
//         console.log('Request failed', error)
//     }
// };


