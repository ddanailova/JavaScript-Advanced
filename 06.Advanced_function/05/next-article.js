function getArticleGenerator(articles) {
    let siteArticles = articles;

    return function (){
        if(articles.length>0){
            $('#content').append(`<article><p>${siteArticles.shift()}</p></article>`);
        }
    }
}