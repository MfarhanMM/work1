function searchContent() {
    // Get the search query
    let searchTerm = document.getElementById('search-input').value.toLowerCase();
    let messageDiv = document.getElementById('message');
    let foundMatch = false; // Track if any match is found

    // Select the elements where you want to search
    let elements = document.querySelectorAll('h2, h3, h4, p, li, b');

    // Clear any previous highlights
    clearHighlights();

    // Loop through each element to find matches
    elements.forEach((element, index) => {
        let text = element.innerText.toLowerCase();
        if (text.includes(searchTerm) && searchTerm !== '') {
            // Highlight the matching text
            let regex = new RegExp(`(${searchTerm})`, 'gi');
            element.innerHTML = element.innerText.replace(regex, '<span class="highlight">$1</span>');

            // Scroll to the first match
            if (!foundMatch) {
                element.scrollIntoView({ behavior: "smooth", block: "center" });
            }

            foundMatch = true; // Set to true if match is found
        }
    });

    // Display result message
    if (foundMatch) {
        messageDiv.textContent = 'Match found!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'No matches found.';
        messageDiv.style.color = 'red';
    }
}

// Function to clear previous highlights
function clearHighlights() {
    let elements = document.querySelectorAll('h2, h3, h4, p, li, b');
    elements.forEach((element) => {
        element.innerHTML = element.innerText; // Reset the content to plain text
    });

    // Clear message
    document.getElementById('message').textContent = '';
}

// Add event listener to search button
document.getElementById('search-button').addEventListener('click', searchContent);

// Add event listener to clear button
document.getElementById('clear-button').addEventListener('click', clearHighlights);