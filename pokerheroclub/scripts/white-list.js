
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


