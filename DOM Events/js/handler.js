document.getElementById('btn-update')
    .addEventListener('click', function () {
        console.log('btn clicked');
        const title = document.getElementById('title-text');
        console.log(title);
        title.innerText = 'Update page title text';
    })

document.getElementById('btn-login').addEventListener('click', function () {
    const userInfo = document.getElementById('user-info');
    userInfo.innerText = 'User logged in successfully';
})
