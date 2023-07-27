 
    const buttonPrevRev = document.getElementById('reviewPrev');
    const buttonNextRev = document.getElementById('reviewNext');
    [buttonNextRev, buttonPrevRev].forEach(button =>{
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
        reviewSort();
    }
    reviewSort();
    function reviewSort(){
        const reviews = document.getElementsByClassName('review__elem');

        let hasLeft = 0;
        let hasRight = 0;

        for (let i in reviews){
            hasLeft += +reviews[i].className?.split(' ')?.includes('left')? 1:0;
            hasRight += +reviews[i].className?.split(' ')?.includes('right')? 1:0;
        }
        if (!hasLeft){
            buttonPrevRev.classList.remove('prev__filled')
        } else if(!buttonPrevRev.className.includes('prev__filled')) {
            buttonPrevRev.classList.add('prev__filled')
        }

        if(!hasRight){
            buttonNextRev.classList.remove('next__filled')
        }else if(!buttonNextRev.className.includes('next__filled')) {
            buttonNextRev.classList.add('next__filled')
        }   
    }
    const buttonPrev = document.getElementById('coachesPrev');
    const buttonNext = document.getElementById('coachesNext');
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
        let posititons =[];
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

            if(coaches[i].className?.includes('coach__left')){
                posititons.push('left')
            }
            if(coaches[i].className?.includes('coach__right')){
                posititons.push('right')
            }
        }

        let hasLeft = 0;
        let hasRight = 0;

        for (let i in coaches){
            hasLeft += +coaches[i].className?.split(' ')?.includes('coach_left')? 1:0;
            hasRight += +coaches[i].className?.split(' ')?.includes('coach_right')? 1:0;
        }

        if (!hasLeft){
            buttonPrev.classList.remove('prev__filled')
        } else if(!buttonPrev.className.includes('prev__filled')) {
            buttonPrev.classList.add('prev__filled')
        }

        if(!hasRight){
            buttonNext.classList.remove('next__filled')
        }else if(!buttonNext.className.includes('next__filled')) {
            buttonNext.classList.add('next__filled')
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
