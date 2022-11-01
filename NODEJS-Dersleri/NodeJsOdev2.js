// create post list
const posts = [
    {
        title: "Post 1",
        author: "  Author 1",
        content: "Content 1",
    },
    {
        title: "Post 2",
        author: "  Author 2",
        content: "Content 2",
    },
    {
        title: "Post 3",
        author: "  Author 3",
        content: "Content 3",
    },
    {
        title: "Post 4",
        author: "  Author 4",
        content: "Content 4",
    },
];

const addPost = value => {
    return (
        new Promise((resolve, reject) => {
            console.log("Post Ekleniyor...");
            if (value) {
                posts.push(value);
                resolve("Post Eklendi.");
            } else {
                reject("Post Eklenemedi.");
            }
        })
    )
}

const listPost = () => {
    posts.map((data) => {
        console.log(data);
    })
}

const listAndAdd = async value => {
    try {
        console.log(await addPost(value));
        listPost();
    } catch (error) {
        console.log(error);
    }
}

listPost();
listAndAdd({ title: "Post 5", author: "  Author 5", content: "Content 5" });