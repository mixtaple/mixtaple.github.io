document.querySelector('.login button').addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector('.login').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
})