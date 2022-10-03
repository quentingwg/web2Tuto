const clearPage = () => {
    const main = document.querySelector('main');
    main.innerHTML= '';

};

const renderPageTitle = (title) => {
    if(!title) return;
    const main = document.querySelector('main');
    const pageTitle= document.createElement('h4');
    pageTitle.innerHTML= title;
    main.appendChild(pageTitle);

}
export {clearPage,renderPageTitle};