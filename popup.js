chrome.tabs.query({ active: true, currentWindow: true }, async function (tabs) {
    var currentUrl = tabs[0].url;

    var container = document.getElementById('container');

    if (currentUrl.includes('netflix.com')) {
        const response = await fetch(chrome.runtime.getURL('site/Netflix/netflix.html'));
        const htmlContent = await response.text();
        container.innerHTML = htmlContent;
    } else if (currentUrl.includes('zoro.to') || currentUrl.includes('sanji.to')) {
        const response = await fetch(chrome.runtime.getURL('site/Zoro/zoro.html'));
        const htmlContent = await response.text();
        container.innerHTML = htmlContent;
    } else if (currentUrl.includes('letterboxd.com')) {
        const response = await fetch(chrome.runtime.getURL('site/Letterboxd/letterboxd.html'));
        const htmlContent = await response.text();
        container.innerHTML = htmlContent;
    } else if (currentUrl.includes('myanimelist.net')) {
        const response = await fetch(chrome.runtime.getURL('site/My Anime List/mal.html'));
        const htmlContent = await response.text();
        container.innerHTML = htmlContent;
    }
}); 
