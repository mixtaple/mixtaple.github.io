 
    const buttonPrev = document.getElementById('reviewPrev');
    const buttonNext = document.getElementById('reviewNext');
    [buttonNext, buttonPrev].forEach(button =>{
        button.addEventListener('click', changeReviewSlide)
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
    function changeReviewSlide  (e) {
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


    const coachPrev = document.getElementById('coachesPrev');
    const coachNext = document.getElementById('coachesNext');
    [coachNext, coachPrev].forEach(button =>{
        button.addEventListener('click', changeCoachSlide)
    })
    coachesSort();
    function coachesSort(){
        const coaches = document.getElementsByClassName('coaches__card');

        let mainItem = null
        for(let index in coaches){
        let className = coaches[index].className;
            if(className?.includes('coaches__card_main')){
                mainItem = index;
            }
        }
        for (let i in coaches){

            if(i<mainItem){
                coaches[i].classList?.add('coach_left')
                if(mainItem-i === 1){
                    coaches[i].classList?.add('coaches__card_sidecard')

                }else{
                    coaches[i].classList?.remove('coaches__card_sidecard')
                }
            } else if(i>mainItem){
                coaches[i].classList?.add('coach_right')
                if(i-mainItem === 1){
                    coaches[i].classList?.add('coaches__card_sidecard')
                } else {
                    coaches[i].classList?.remove('coaches__card_sidecard')
                }
            }else {
                coaches[i].classList?.remove('coach_left')
                coaches[i].classList?.remove('coach_right')
                coaches[i].classList?.remove('coaches__card_sidecard')
            }
        }
    }
    function changeCoachSlide  (e) {
        e.preventDefault();
        const currentCoach = document.getElementsByClassName('coaches__card_main');

        let newActive = null;
        let notEnd = true;
        if(e.target.id ==='coachesPrev'){
             newActive = currentCoach[0].previousElementSibling;
             notEnd = currentCoach[0].previousElementSibling.className.includes('coaches__card');

        }else if(e.target.id === 'coachesNext'){
             newActive = currentCoach[0].nextElementSibling;
             notEnd = currentCoach[0]?.nextElementSibling?.className.includes('coaches__card');
        }

        if(newActive && notEnd){                
            currentCoach[0].classList.remove('coaches__card_main');       
            newActive.classList.add('coaches__card_main');         
        }
        coachesSort();
        
    }
