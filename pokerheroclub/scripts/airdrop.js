function validateAirdropForm() {

    let inputs = ["gipsyteam_id", "discord_id", "telegram_id", "twitter_id"];

    inputs.forEach((i) => {
        if (document.forms["airdropForm"][i].value === ""){
            if (document.querySelector(`[name=${i}]`).nextElementSibling.firstElementChild.classList.contains('hidden') === true){
                document.querySelector(`[name=${i}]`).classList.add('empty');
                document.querySelector(`[name=${i}]`).nextElementSibling.firstElementChild.classList.remove('hidden');
            }
        }
    })
    if (document.forms["airdropForm"]["wallet_id"].value === "") {
        if (document.querySelector('.wallet').nextElementSibling.firstElementChild.classList.contains('hidden') === true){
            document.querySelector(`[name=wallet_id]`).classList.add('empty');
            document.querySelector('.wallet').nextElementSibling.firstElementChild.classList.remove('hidden');
        }
    }
    inputs.forEach((i) => {
        if (document.forms["airdropForm"][i].value != ""){
            if (document.querySelector(`[name=${i}]`).nextElementSibling.firstElementChild.classList.contains('hidden') === false){
                document.querySelector(`[name=${i}]`).classList.remove('empty');
                document.querySelector(`[name=${i}]`).nextElementSibling.firstElementChild.classList.add('hidden');
            }
        }
    })
    if (document.forms["airdropForm"]["wallet_id"].value != "") {
        if (document.querySelector('.wallet').nextElementSibling.firstElementChild.classList.contains('hidden') === false){
            document.querySelector(`[name=wallet_id]`).classList.remove('empty');
            document.querySelector('.wallet').nextElementSibling.firstElementChild.classList.add('hidden');
        }
    }
    return false;
}

airdropForm.onsubmit = async (e) => {
    e.preventDefault();

    // const url = 'http://157.90.22.28:8800/nft/airdrop/';
    const url = 'http://127.0.0.1';
    const myInit = {
        method: 'POST',
        body: new FormData(airdropForm)
    }

    const myRequest = new Request(url, myInit);

    try {
        const response = await fetch(myRequest);
        const json = await response.json();
        console.log(JSON.stringify(json));
    } catch (error) {
        console.log('Request failed', error)
    }
};
