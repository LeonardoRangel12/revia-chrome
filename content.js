// When the user clicks the button reviews in google maps

// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.message === "clicked_browser_action") {
//         const reviews = document.querySelectorAll('div.section-review-content');
//         const reviewsArray = Array.from(reviews);
//         const reviewsText = reviewsArray.map(review => review.innerText);
//         console.log(reviewsText);
//         sendResponse({ reviews: reviewsText });
//     }
// });