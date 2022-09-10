import React, {useState} from "react"
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "Javascript", body: "Javascript - a good code language."},
        {id: 2, title: "Javascript 2", body: "Javascript - a good code language."},
        {id: 3, title: "Javascript 3", body: "Javascript - a good code language."},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            {posts.length
                ?
                <PostList remove={removePost} posts={posts} title={"List of Posts"}/>
                :
                <h1 style={{textAlign: "center"}}>
                    Posts are not found!
                </h1>
            }

        </div>
    );
}

export default App;
