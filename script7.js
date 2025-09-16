function createCard(thumbnail, title, cName, duration, monthsOld, views) {
    let viewSTR
    if (views < 1000) {
        viewSTR = views;
    }
    else if (views > 1000000) {
        viewSTR = views / 1000000 + "M";
    }
    else {
        viewSTR = views / 100000 + "K"
    }
    let html = `<div class = "container">
<div class="box">
            <div class="img">
                <img width="100px"
                    src="${thumbnail}"> 
                    <div class="capsule">${duration}</div>
                    <div class="title"> ${title}
                <div class="details">
                        <div class="channel-name">${cName}</div>
                    <div class="views">${views} views</div>
                        <div class="monthsold">${monthsOld} months old</div>
                    </div>
                </div>
</div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}
createCard("https://i.ytimg.com/vi/aa-lx5uIyLY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLApgUVtoA34OGp_3YMbSPdqcMEUhA", "Exercise 1.3 Complete | Class 11 New Mathematics | Sindh Board | Unit 1 - Complex Numbers #Class XI", "True Educational Hub", "2:57:21", "9", "56000")
createCard("https://i.ytimg.com/vi/aa-lx5uIyLY/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLApgUVtoA34OGp_3YMbSPdqcMEUhA", "Exercise 1.3 Complete | Class 11 New Mathematics | Sindh Board | Unit 1 - Complex Numbers #Class XI", "True Educational Hub", "2:57:21", "9", "5600000000")