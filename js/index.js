let dc = document.querySelector('.dynamic-content');
let error = document.querySelector('.error');
const resources = {
    btns: document.querySelectorAll('nav a'),
    dc: document.querySelector('.dynamic-content')
}

let url = './partials/home.html';

let promise = (url) =>{
    fetch(url)
    .then(response => {
        if(response.statusText === 'OK'){
            return response.text();
        }
        throw new Error(response.statusText);
    })
    .then (data => dc.innerHTML = data)
    .then (error => dc.innerHTML = error)

.catch(err => {
    error.innerText = err.message;
});
}
promise(url);

resources.dc.innerHTML = promise(url);

function targetContent(ev) {
    ev.preventDefault();
    let activeItem = ev.target;
    
    for (let btn of resources.btns){
        if (btn.id){
            btn.removeAttribute('id');
        }
    }
    activeItem.id='active';
    activeItem.url= ev.target.href;
    url = activeItem.url;
    promise(url); 
};
for (let btn of resources.btns){
btn.addEventListener('click', targetContent);
}

