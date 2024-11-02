const url = '../../api/news_vercel.js';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.articles);
        
        // Loop through articles from index 7 to 16 as in the original code
        for (let i = 10; i < 13; i++) {
            let article = data.articles[i];
            
            // Parse and format the publishedAt date
            let date = new Date(article.publishedAt);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let formattedDate = date.toLocaleDateString(undefined, options);
            
            $('#my-news').append(`
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img class="card-img-top" src="${article.urlToImage}" alt="">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text"><small>${formattedDate}</small></p>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" target="_blank" class="btn btn-primary" style="background-color: orangered;">Read Full News</a>
                        </div>
                    </div>
                </div>
            `);
        }
    })
    .catch(error => console.error('Error fetching news:', error));