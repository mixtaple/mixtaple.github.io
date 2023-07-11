 
    const buttonPrev = document.getElementById('reviewPrev');
    const buttonNext = document.getElementById('reviewNext');
    [buttonNext, buttonPrev].forEach(button =>{
        button.addEventListener('click', changeSlide)
    })
    setSides();
    function setSides() {
        const allReviews = document.getElementsByClassName('review__elem');
        let mainItem = null
        for(let index in allReviews){
        let className = allReviews[index].className;
            if(className?.includes('review__elem_main')){
                mainItem = index;
            }
        }
        for (let i in allReviews){
            if(i<mainItem){
                allReviews[i].classList?.add('left')
            } else if(i>mainItem){
                allReviews[i].classList?.add('right')
            }else {
                allReviews[i].classList?.remove('left')
                allReviews[i].classList?.remove('right')
            }
        }
    }
    function changeSlide  (e) {
        e.preventDefault();
        const currentReview = document.getElementsByClassName('review__elem_main');
        
        let newActive = null;
        if(e.target.id ==='reviewPrev'){
             newActive = currentReview[0].previousElementSibling;
        }else if(e.target.id === 'reviewNext'){
             newActive = currentReview[0].nextElementSibling;
        }

        if(newActive){                
            currentReview[0].classList.remove('review__elem_main');       
            newActive.classList.add('review__elem_main');         
        }
        setSides();
    }


    // const coachPrev = document.getElementById('coachesPrev');
    // const coachNext = document.getElementById('coachesNext');
    // [coachNext, coachPrev].forEach(button =>{
    //     button.addEventListener('click', changeSlide)
    // })
    // function changeSlide  (e) {
    //     const coaches = document.getElementsByClassName('coaches__card');
    //     console.log(coaches)
    //     if(e.target.id ==='coachesPrev'){
    //         let i =0;
    //         for(let coach in coaches){
    //             coaches[+coach].classList.remove('coaches__card_main')
    //             coaches[+coach].classList.add('coaches__card_sidecard')
    //             coaches[+coach-1]?.classList.add('coaches__card_main')
    //             coaches[+coach-1]?.classList.remove('coaches__card_sidecard')
    //             coaches[+coach+1]?.classList.add('hidden')
    //             coaches[+coach+1]?.classList.remove('coaches__card_sidecard')
    //             coaches[+coach-2]?.classList.add('coaches__card_sidecard')
    //             coaches[+coach-2]?.classList.remove('hidden')
    //             i++;
    //         }
    //     }else if(e.target.id === 'coachesNext'){

    //     }
        
    // }
