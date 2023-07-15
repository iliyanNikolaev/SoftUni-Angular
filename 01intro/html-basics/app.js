const root = document.getElementById('root');

const routes = {
    '/': '<h1>HOME PAGE</h1> <p>Welcome to our site</p>',
    '/about': '<h1>ABOUT PAGE</h1> <p>This is example for SPA</p>',
    '/contact-us': '<h1>CONTACT US</h1> <p>Phone: +1-555-0227</p>',
}

render('/');

document.querySelector('nav').addEventListener('click', (e) => {
    if(e.target.tagName === 'A') {
        e.preventDefault();

        const path = e.target.getAttribute('href');

        render(path);
        history.pushState('', '', path);
    }
});

window.addEventListener('popstate', (e) => {
    e.preventDefault();

    render(window.location.pathname);
});

// window.addEventListener('hashchange', (e) => {
//    e.preventDefault();
   
//    render(window.location.pathname);
// });

function render(path) {
    root.innerHTML = routes[path];
}