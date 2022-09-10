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

    return (
        <div className="App">
            <PostForm create={createPost}/>
            <PostList posts={posts} title={"List of Posts"}/>
        </div>
    );
}

export default App;
