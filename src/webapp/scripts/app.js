/**
 * Created by obi on 2017-04-28.
 */
import "jquery";
import "../styles/scss/main.scss";
import "../about.html";
import "../contact.html";

import { showOrHideContentButton, paraDynamicContent } from "./dom-loader";
import { RandomGenerator } from "./random-generator";

const outputContentParagraph = $("#paraDynamicContent2");

const outputRandomInteger = () => {
        outputContentParagraph.text(RandomGenerator.randomInteger());
    };
const outputRandomRange = () => {
        outputContentParagraph.text(RandomGenerator.randomIntegerInRange(1, 500));
    };

const randomIntBtn = jQuery("#btnRandomInt");
const randomIntRangeBtn = document.querySelector("#btnRandomIntWithinRange");

let isContentHidden = true;

showOrHideContentButton.addEventListener("click", toggleContentState);

randomIntBtn.click(outputRandomInteger);
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