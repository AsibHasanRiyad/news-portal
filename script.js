const categoryHandler = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
    const data = await res.json();
    const newsCategory = data.data.news_category;
    // console.log(newsCategory);
    const categoryContainer = document.getElementById('news-category')
    newsCategory.slice(0,5).forEach(news => {
        const categoryDiv = document.createElement('div');
        categoryDiv.innerHTML =`
        <a class="tab" onclick = "allNews('${news.category_id}')" >${news.category_name}</a> 
        `
        categoryContainer.appendChild(categoryDiv)
        
    });
}

const allNews = async (id ) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();
    const news = data.data;
    console.log(news);
    const newsContainer = document.getElementById('news-div');
    newsContainer.textContent = ''
    news.forEach(eachNews => {
        const news = document.createElement('div');
        news.innerHTML =
        `
        <div class="card shadow-xl ">
                    <figure class="h-full "><img src="${eachNews.image_url}" /></figure>
                    <div class="card-body">
                      <h2 class="card-title">
                       ${eachNews.title.slice(0,40)}
                        <div class="bg-pink-500 text-base px-4 py-2 rounded-full text-white">${eachNews.rating.badge} </div>
                      </h2>
                      <p>${eachNews.details.slice(0,80)} </p>
                     <!-- author details -->
                      <div class="flex justify-between items-end">
                        <div class="flex justify-center items-center mt-4 gap-3">
                            <div class="avatar">
                                <div class="w-16 rounded-full">
                                  <img src="${eachNews.author.img}" />
                                </div>
                              </div>
                            <div>
                                <h1>Name: ${eachNews.author.name}</h1>
                                <h1>${eachNews.author.published_date}</h1>
                            </div>
                        </div>
                        <div>
                            <button class=" bg-pink-500 rounded-full py-2 px-4 text-white">Details</button>
                        </div>
                      </div>
                    </div>
        `
        newsContainer.appendChild(news)
    });
}








categoryHandler()
