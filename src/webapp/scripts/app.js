/**
 * Created by obi on 2017-04-28.
 */

import "../styles/scss/main.scss";

import { showOrHideContentButton, paraDynamicContent } from "./dom-loader";
import { RandomGenerator } from "./random-generator";

const outputContentParagraph = document.querySelector("#paraDynamicContent2");
const outputRandomInteger = () => {
        outputContentParagraph.textContent = RandomGenerator.randomInteger();
    };
const outputRandomRange = () => {
        outputContentParagraph.textContent = RandomGenerator.randomIntegerInRange(1, 500);
    };

const randomIntBtn = document.querySelector("#btnRandomInt");
const randomIntRangeBtn = document.querySelector("#btnRandomIntWithinRange");

let isContentHidden = true;

showOrHideContentButton.addEventListener("click", toggleContentState);

randomIntBtn.addEventListener("click", outputRandomInteger);
randomIntRangeBtn.addEventListener("click", outputRandomRange);


function toggleContentState() {
    showOrHideContent();
    changeShowOrHideButtonText();
    isContentHidden = !isContentHidden;
}

function changeShowOrHideButtonText() {
    if (isContentHidden) {
        showOrHideContentButton.textContent = "Hide the content";
    } else {
        showOrHideContentButton.textContent = "Show the content";
    }
}

function showOrHideContent() {
    if(isContentHidden) {
        paraDynamicContent.style.display = "block";
    } else {
        paraDynamicContent.style.display = "none";
    }
}