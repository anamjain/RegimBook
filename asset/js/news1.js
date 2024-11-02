const url = 'https://newsapi.org/v2/top-headlines?' +
            'category=business&' +
            'apiKey=285102aa06e948dd98743b4e63f95bde';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.articles);
        
        // Loop through articles from index 7 to 16 as in the original code
        for (let i = 10; i < 20; i++) {
            let article = data.articles[i];
            
            // Parse and format the publishedAt date
            let date = new Date(article.publishedAt);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let formattedDate = date.toLocaleDateString(undefined, options);
            
            $('#news2').append(`
                <div class="col-md-7">
                    <img class="img-fluid rounded mb-3 mb-md-0 py-3" src="${article.urlToImage}" alt="">
                </div>
                <div class="col-md-5">
                    <h3>${article.title}</h3>
                    <p><small>${formattedDate}</small></p>
                    <p>${article.description}</p>
                    <a class="btn btn-primary" style="background-color: orangered;" href="${article.url}" target="_blank">
                        Read Full News <span class="glyphicon glyphicon-chevron-right"></span>
                    </a>
                </div>
            `);
        }
    })
    .catch(error => console.error('Error fetching news:', error));