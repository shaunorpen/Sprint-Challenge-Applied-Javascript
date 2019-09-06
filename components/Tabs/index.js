// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        document.querySelector('.tabs .topics').appendChild(createTab('all'));
        response.data.topics.forEach(topic => {
            document.querySelector('.tabs .topics').appendChild(createTab(topic));
        })
    })
    .catch(error => {
        console.log('Error: ' + error);
    });

function createTab (tabName) {
    const divTab = document.createElement('div');
    divTab.classList.add('tab');
    divTab.textContent = tabName;
    divTab.addEventListener('click', toggleActive);
    divTab.addEventListener('click', (e) => {
        const classSelector = buildSelector(e);
        function buildSelector (e) {
            if (e.target.innerHTML === 'all') {
                return '';
            } else if (e.target.innerHTML === 'node.js') {
                return '.node';
            } else {
                return `.${e.target.innerHTML}`;
            }
        }
        toggleDisplayedCards(`.card${classSelector}`);
    });
    return divTab;
}

function toggleActive (e) {
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active-tab');
    })
    e.target.classList.toggle('active-tab');
}

function toggleDisplayedCards (selector) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('hidden');
    })
    document.querySelectorAll(selector).forEach(card => {
        card.classList.toggle('hidden');
    })
}