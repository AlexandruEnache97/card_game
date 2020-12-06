//cards - red = 0 -> 7 - blue = 8 -> 15 - yellow = 16 -> 23
const cards = document.getElementsByClassName('card');
const resetButton = document.getElementsByClassName('resetContainer')[0];

//groupCards = id + 1
const groupCards = document.getElementsByClassName('group');
const groupContainer = document.getElementsByClassName('pairsContainer')[0];

//sameCards = i % 3 == 1 -> red; i % 3 == 1 -> blue; i % 3 == 0 -> yellow
const sameCards = document.getElementsByClassName('same');
const sameContainer = document.getElementsByClassName('pairsContainer')[1];

const differentCards = document.getElementsByClassName('different');
const differentContainer = document.getElementsByClassName('pairsContainer')[2];

function createCard(number, classString) {

    const card = document.createElement("div");
    card.classList.add("miniCard");
    card.classList.add(classString);

    const text = document.createElement("p");
    text.textContent = number;
    card.appendChild(text);

    return card;
}


function createGroupPairs() {

    for(let i = 1; i < 9; i++) {

        //create the container
        const container = document.createElement("div");
        container.classList.add("pair");
        container.classList.add("group");
    
        //add the cards to the container
        const card1 = createCard(i, "cardRed");
        const card2 = createCard(i, "cardBlue");
        const card3 = createCard(i, "cardYellow");

        container.appendChild(card1);
        container.appendChild(card2);
        container.appendChild(card3);
    
        //add the image to the container
        const arrowImage = document.createElement("img");
        arrowImage.src = "arrow.png";
        arrowImage.alt = "";
        container.appendChild(arrowImage);
    
        //add the result to the container
        const result = document.createElement("div");
        result.classList.add("result");
    
        const text = document.createElement("p");
        text.textContent = i * 10;
        result.appendChild(text);
        container.appendChild(result);
    
        // add the container to the page
        groupContainer.appendChild(container);
    }

    for(let i = 1; i < 19; i++) {
        
        //create the container
        const container = document.createElement("div");
        container.classList.add("pair");
        container.classList.add("same");
    
        if(i % 3 == 0) {
            //add the cards to the container
            const card1 = createCard(i / 3, "cardYellow");
            const card2 = createCard(Number(i / 3 + 1), "cardYellow");
            const card3 = createCard(Number(i / 3 + 2), "cardYellow");

            container.appendChild(card1);
            container.appendChild(card2);
            container.appendChild(card3);
        } else if(i % 3 == 1) {
            
            //add the cards to the container
            const card1 = createCard(Math.floor(i / 3 + 1), "cardRed");
            const card2 = createCard(Math.floor(i / 3 + 2), "cardRed");
            const card3 = createCard(Math.floor(i / 3 + 3), "cardRed");

            container.appendChild(card1);
            container.appendChild(card2);
            container.appendChild(card3);
        } else {
            
            //add the cards to the container
            const card1 = createCard(Math.floor(i / 3 + 1), "cardBlue");
            const card2 = createCard(Math.floor(i / 3 + 2), "cardBlue");
            const card3 = createCard(Math.floor(i / 3 + 3), "cardBlue");

            container.appendChild(card1);
            container.appendChild(card2);
            container.appendChild(card3);
        }

        
        //add the image to the container
        const arrowImage = document.createElement("img");
        arrowImage.src = "arrow.png";
        arrowImage.alt = "";
        container.appendChild(arrowImage);
    
        //add the result to the container
        const result = document.createElement("div");
        result.classList.add("result");
    
        const text = document.createElement("p");
        if(i % 3 == 0) {
            text.textContent = Math.floor(i / 3) * 10 + 40;
        } else {
            text.textContent = Math.floor(i / 3 + 1) * 10 + 40;

        }
        result.appendChild(text);
        container.appendChild(result);
    
        // add the container to the page
        sameContainer.appendChild(container);
    }

    for(let i = 0; i < 36; i++) {

        //create the container
        const container = document.createElement("div");
        container.classList.add("pair");
        container.classList.add("different");


        //add the cards to the container
        if(i % 6 == 0) {
            card1 = createCard(Math.floor(i / 6 + 1), "cardBlue");
            card2 = createCard(Math.floor(i / 6 + 2), "cardRed");
            card3 = createCard(Math.floor(i / 6 + 3), "cardYellow");
        } else if(i % 6 == 1) {
            card1 = createCard(Math.floor(i / 6 + 1), "cardBlue");
            card2 = createCard(Math.floor(i / 6 + 2), "cardYellow");
            card3 = createCard(Math.floor(i / 6 + 3), "cardRed");
        } else if(i % 6 == 2) {
            card1 = createCard(Math.floor(i / 6 + 1), "cardRed");
            card2 = createCard(Math.floor(i / 6 + 2), "cardBlue");
            card3 = createCard(Math.floor(i / 6 + 3), "cardYellow");
        } else if(i % 6 == 3) {
            card1 = createCard(Math.floor(i / 6 + 1), "cardRed");
            card2 = createCard(Math.floor(i / 6 + 2), "cardYellow");
            card3 = createCard(Math.floor(i / 6 + 3), "cardBlue");
        } else if(i % 6 == 4) {
            card1 = createCard(Math.floor(i / 6 + 1), "cardYellow");
            card2 = createCard(Math.floor(i / 6 + 2), "cardRed");
            card3 = createCard(Math.floor(i / 6 + 3), "cardBlue");
        } else if(i % 6 == 5) {
            card1 = createCard(Math.floor(i / 6 + 1), "cardYellow");
            card2 = createCard(Math.floor(i / 6 + 2), "cardBlue");
            card3 = createCard(Math.floor(i / 6 + 3), "cardRed");
        }
            
        container.appendChild(card1);
        container.appendChild(card2);
        container.appendChild(card3);
        

        //add the image to the container
        const arrowImage = document.createElement("img");
        arrowImage.src = "arrow.png";
        arrowImage.alt = "";
        container.appendChild(arrowImage);

        //add the result to the container
        const result = document.createElement("div");
        result.classList.add("result");

        const text = document.createElement("p");
        text.textContent = Math.floor(i / 6 + 1) * 10;
        result.appendChild(text);
        container.appendChild(result);
    
        // add the container to the page
        differentContainer.appendChild(container);
    }

}

// eliminate pairs with the clicked card
function setClickableCards() {
    for (let i = 0; i < cards.length; i++) { 
        cards[i].addEventListener('click', () => {
            if(!cards[i].classList.contains('active')) {

                cards[i].classList.add('active');

                if(i <= 7) { // 0 -> 7 =  0 3 6 9 12 15
                    if(groupCards[i].classList.contains('active'))
                        groupCards[i].classList.remove('active');
                    groupCards[i].classList.add('unactive');
                    
                    if(i == 7) {
                        sameCards[(i - 2) * 3].classList.add('unactive');
                    } else if(i == 6) {
                        sameCards[(i - 1) * 3].classList.add('unactive');
                        sameCards[(i - 2) * 3].classList.add('unactive');
                    } else if(i < 6 && i > 1) {
                        
                        sameCards[i * 3].classList.add('unactive'); 
                        sameCards[(i - 1) * 3].classList.add('unactive'); 
                        sameCards[(i - 2) * 3].classList.add('unactive');
                    } else if(i == 1) {
                        
                        sameCards[i * 3].classList.add('unactive'); 
                        sameCards[(i - 1) * 3].classList.add('unactive');
                    } else {
                        sameCards[i * 3].classList.add('unactive'); 
                    }
                    

                } else if(i <= 15) {
                    if(groupCards[i - 8].classList.contains('active'))
                        groupCards[i - 8].classList.remove('active');
                    groupCards[i - 8].classList.add('unactive');

                    if(i == 15) { // 8 -> 15 = 1 4 7 10 13 16
                        sameCards[(i - 10) * 3 + 1].classList.add('unactive');
                    } else if(i == 14) {
                        sameCards[(i - 9) * 3 + 1].classList.add('unactive');
                        sameCards[(i - 10) * 3 + 1].classList.add('unactive');
                    } else if(i < 14 && i > 9) {
                        
                        sameCards[(i - 8) * 3 + 1].classList.add('unactive'); 
                        sameCards[(i - 9) * 3 + 1].classList.add('unactive'); 
                        sameCards[(i - 10) * 3 + 1].classList.add('unactive');
                    } else if(i == 9) {
                        sameCards[(i - 8) * 3 + 1].classList.add('unactive'); 
                        sameCards[(i - 9) * 3 + 1].classList.add('unactive');
                    } else {
                        sameCards[(i - 8) * 3 + 1].classList.add('unactive'); 
                    }

                } else if(i <= 23) {
                    if(groupCards[i - 16].classList.contains('active'))
                        groupCards[i - 16].classList.remove('active');
                    groupCards[i - 16].classList.add('unactive');

                    if(i == 23) { // 16 -> 23 = 1 4 7 10 13 16
                        sameCards[(i - 18) * 3 + 2].classList.add('unactive');
                    } else if(i == 22) {
                        sameCards[(i - 17) * 3 + 2].classList.add('unactive');
                        sameCards[(i - 18) * 3 + 2].classList.add('unactive');
                    } else if(i < 22 && i > 17) {
                        
                        sameCards[(i - 16) * 3 + 2].classList.add('unactive'); 
                        sameCards[(i - 17) * 3 + 2].classList.add('unactive'); 
                        sameCards[(i - 18) * 3 + 2].classList.add('unactive');
                    } else if(i == 17) {
                        sameCards[(i - 16) * 3 + 2].classList.add('unactive'); 
                        sameCards[(i - 17) * 3 + 2].classList.add('unactive');
                    } else {
                        sameCards[(i - 16) * 3 + 2].classList.add('unactive'); 
                    }
                }
            }
        });
    }
}


resetButton.addEventListener('click', () => {

    for (let i = 0; i < cards.length; i++) { 
        cards[i].classList.remove('active');
    }

    for (let i = 0; i < groupCards.length; i++) { 
        groupCards[i].classList.remove('active');
        groupCards[i].classList.remove('unactive');
    }

    for (let i = 0; i < sameCards.length; i++) { 
        sameCards[i].classList.remove('active');
        sameCards[i].classList.remove('unactive');
    }

    
    for(let i = 0; i < differentCards.length; i++) {
        differentCards[i].classList.remove('active');
        differentCards[i].classList.remove('unactive');
    }

});

function setClickableGroup() {
    for (let i = 0; i < groupCards.length; i++) { 
        groupCards[i].addEventListener('click', () => {
            cards[groupCards[i].childNodes[1].childNodes[0].innerHTML - 1].classList.add('active');
            cards[Number(groupCards[i].childNodes[1].childNodes[0].textContent) + 7].classList.add('active');
            cards[Number(groupCards[i].childNodes[1].childNodes[0].textContent) + 15].classList.add('active');
            groupCards[i].classList.add('active');

            if(i == 7) {

                sameCards[(i - 2) * 3].classList.add('unactive');
                sameCards[(i - 2) * 3 + 1].classList.add('unactive');
                sameCards[(i - 2) * 3 + 2].classList.add('unactive');
            } else if(i <= 6 && i >= 2) {
                
                sameCards[(i - 2) * 3].classList.add('unactive');
                sameCards[(i - 2) * 3 + 1].classList.add('unactive');
                sameCards[(i - 2) * 3 + 2].classList.add('unactive');

                
                sameCards[(i - 1) * 3].classList.add('unactive');
                sameCards[(i - 1) * 3 + 1].classList.add('unactive');
                sameCards[(i - 1) * 3 + 2].classList.add('unactive');

                if(i != 6) {
                    sameCards[i * 3].classList.add('unactive');
                    sameCards[i * 3 + 1].classList.add('unactive');
                    sameCards[i * 3 + 2].classList.add('unactive');
                }

            } else if(i == 1) {
                sameCards[(i - 1) * 3].classList.add('unactive');
                sameCards[(i - 1) * 3 + 1].classList.add('unactive');
                sameCards[(i - 1) * 3 + 2].classList.add('unactive');

                sameCards[i * 3].classList.add('unactive');
                sameCards[i * 3 + 1].classList.add('unactive');
                sameCards[i * 3 + 2].classList.add('unactive');
            } else {
                sameCards[i * 3].classList.add('unactive');
                sameCards[i * 3 + 1].classList.add('unactive');
                sameCards[i * 3 + 2].classList.add('unactive');
            }
        });
    }
}

function setClickableSame() {
    for (let i = 0; i < sameCards.length; i++) { 
        sameCards[i].addEventListener('click', () => {
            //red cards
            if(i % 3 == 0) { // 0 3 6 9 12 15
                cards[Math.floor(i / 3)].classList.add('active');
                cards[Math.floor(i / 3 + 1)].classList.add('active');
                cards[Math.floor(i / 3 + 2)].classList.add('active');

                if(i != 0 && i != 3){
                    sameCards[Math.floor(i - 6)].classList.add('unactive');
                    
                }
                if(i != 0) {
                    sameCards[Math.floor(i - 3)].classList.add('unactive');
                }
                if(i != 15) {
                    sameCards[Math.floor(i + 3)].classList.add('unactive');
                    
                    if(i != 12) {
                        sameCards[Math.floor(i + 6)].classList.add('unactive');
                    }
                }
                
                groupCards[Math.floor(i / 3)].classList.add('unactive');
                groupCards[Math.floor(i / 3 + 1)].classList.add('unactive');
                groupCards[Math.floor(i / 3 + 2)].classList.add('unactive');
            }
            else if(i % 3 == 1) { // 1 4 7 10 13 16
                cards[Math.floor(i / 3) + 8].classList.add('active');
                cards[Math.floor(i / 3 + 1) + 8].classList.add('active');
                cards[Math.floor(i / 3 + 2) + 8].classList.add('active');

                if(i != 1 && i != 4){
                    sameCards[Math.floor(i - 6)].classList.add('unactive');
                    
                }
                if(i != 1) {
                    sameCards[Math.floor(i - 3)].classList.add('unactive');
                }
                if(i != 16) {
                    sameCards[Math.floor(i + 3)].classList.add('unactive');
                    
                    if(i != 13) {
                        sameCards[Math.floor(i + 6)].classList.add('unactive');
                    }
                }

                groupCards[Math.floor(i / 3)].classList.add('unactive');
                groupCards[Math.floor(i / 3 + 1)].classList.add('unactive');
                groupCards[Math.floor(i / 3 + 2)].classList.add('unactive');
            }
            else { // 2 5 8 11 14 17
                cards[Math.floor(i / 3) + 16].classList.add('active');
                cards[Math.floor(i / 3 + 1) + 16].classList.add('active');
                cards[Math.floor(i / 3 + 2) + 16].classList.add('active');

                if(i != 2 && i != 5){
                    sameCards[Math.floor(i - 6)].classList.add('unactive');
                    
                }
                if(i != 2) {
                    sameCards[Math.floor(i - 3)].classList.add('unactive');
                }
                if(i != 17) {
                    sameCards[Math.floor(i + 3)].classList.add('unactive');
                    
                    if(i != 14) {
                        sameCards[Math.floor(i + 6)].classList.add('unactive');
                    }
                }
                
                groupCards[Math.floor(i / 3)].classList.add('unactive');
                groupCards[Math.floor(i / 3 + 1)].classList.add('unactive');
                groupCards[Math.floor(i / 3 + 2)].classList.add('unactive');
            }
            
            sameCards[i].classList.add('active');
        });
    }
}

function setClickableDifferent() {
    for(let i = 0; i < 36; i++) {
        differentCards[i].addEventListener('click', () => {
            differentCards[i].classList.add('active');

            for(let j = 0; j < 3; j++) {
                if(differentCards[i].childNodes[j].classList.contains('cardRed')){
                    // 0 -> 7
                    cards[differentCards[i].childNodes[j].childNodes[0].textContent - 1].classList.add('active');
                } else if(differentCards[i].childNodes[j].classList.contains('cardBlue')) {
                    // 8 -> 15
                    cards[Number(differentCards[i].childNodes[j].childNodes[0].textContent) + 7].classList.add('active');
                } else if(differentCards[i].childNodes[j].classList.contains('cardYellow')) {
                    // 16 -> 23
                    cards[Number(differentCards[i].childNodes[j].childNodes[0].textContent) + 15].classList.add('active');
                }
            }
            
        });
        
        //console.log(differentCards[i].childNodes[0].childNodes[0].textContent);
        //console.log(differentCards[i].childNodes[1].childNodes[0].textContent);
        //console.log(differentCards[i].childNodes[2].childNodes[0].textContent);
    }
}

createGroupPairs();
setClickableCards();
setClickableGroup();
setClickableSame();
setClickableDifferent();
