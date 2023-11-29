fetch("data/blog.json").then(resp => resp.json()).then(data => {
    console.log(data);
    data.forEach(product => {

        const mainBlog = document.createElement("main");
        mainBlog.className = "col-12 mb-3 mt-2 text-center row"

        const mainSection = document.createElement("section");
        mainSection.className = "row mb-2"

        const blogTitle = document.createElement("div");
        blogTitle.innerText = product["title"];
        blogTitle.className = "col-12 blogTitle"

        const blogDate = document.createElement("div");
        blogDate.innerText = product["date"];
        blogDate.className = "col-6 blogDate"

        const blogCategories = document.createElement("div");
        blogCategories.innerText = `Category: ${product["categories"].join(', ')}`;
        blogCategories.className = "col-6 blogCategories"


        const blogContent = document.createElement("div");
        blogContent.className = "blogContent"
        blogContent.innerText = product["content"];

        mainSection.appendChild(blogTitle);
        mainSection.appendChild(blogDate);
        mainSection.appendChild(blogCategories);
        mainBlog.appendChild(mainSection);
        mainBlog.appendChild(blogContent);

        document.querySelector("#posts").appendChild(mainBlog);
    })
})