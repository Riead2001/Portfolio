// script.js

document.addEventListener('DOMContentLoaded', function () {
    var footer = document.querySelector('footer');

    // Get the last modification date of the document
    var lastModifiedDate = new Date(document.lastModified);
    var formattedLastModifiedDate = lastModifiedDate.toLocaleString();

    // Get the current page URL
    var currentPageURL = window.location.href;

    // Get today's date
    var currentDate = new Date();
    var formattedCurrentDate = currentDate.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    });

    // Get the location (pathname) of the current page
    var currentLocation = window.location.pathname;

    // Create and append the information to the footer
    var pageInfoText = document.createElement('p');
    pageInfoText.innerHTML = 'Location: ' + currentLocation + '<br>Last Modified: ' + formattedLastModifiedDate + '<br>Today\'s Creation Date: ' + formattedCurrentDate + '<br>Page URL: ' + currentPageURL;
    footer.appendChild(pageInfoText);
});
