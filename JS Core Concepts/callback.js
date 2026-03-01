// document.getElementById('#btn').addEventListener('click', function (event) {

// })

// addEventListener('click', function (event) { });

function settleLife(name, isBCS, marriage, bride) {
    if (isBCS) {
        marriage(bride);
    }
}

function arrangement(bride) {
    console.log('Ready for marriage', bride);
}

settleLife('Tomal', true, arrangement, 'Ritu');
