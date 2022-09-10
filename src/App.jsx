import React, {useState} from "react"
import "./styles/App.css"
import PostList from "./components/PostList";

function App() {
    const [posts] = useState([
        {id: 1, title: "Javascript", body: "Javascript - a good code language."},
        {id: 2, title: "Javascript 2", body: "Javascript - a good code language."},
        {id: 3, title: "Javascript 3", body: "Javascript - a good code language."},
    ]);

    return (
        <div className="App">
            <PostList posts={posts} />
        </div>
    );
}

export default App;
