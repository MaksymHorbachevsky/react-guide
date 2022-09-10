import React, {useState} from "react"
import "./styles/App.css"
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts] = useState([
        {id: 1, title: "Javascript", body: "Javascript - a good code language."},
        {id: 2, title: "Javascript 2", body: "Javascript - a good code language."},
        {id: 3, title: "Javascript 3", body: "Javascript - a good code language."},
    ]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const addNewPost = (e) => {
        e.preventDefault();
    }

    return (
        <div className="App">
            <form>
                {/*Controlled Component*/}
                <MyInput
                    type="text"
                    placeholder={"Post Name"}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <MyInput
                    type="text"
                    placeholder={"Post Description"}
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <MyButton  onClick={addNewPost}>Add Post</MyButton>
            </form>
            <PostList posts={posts} title={"List of Posts"}/>
            <PostList posts={posts} title={"List of Posts 2"}/>
        </div>
    );
}

export default App;
