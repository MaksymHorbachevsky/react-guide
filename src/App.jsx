import React, {useMemo, useState} from "react"
import "./styles/App.css"
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: "bb", body: "Javascript - a bad code language."},
        {id: 2, title: "aa", body: "Javascript - a nice code language."},
        {id: 3, title: "cc", body: "Javascript - a good code language."},
    ]);
    const [selectedSort, setSelectedSort] = useState("")
    const [searchQuery, setSearchQuery] = useState("")

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts;
    }, [selectedSort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort)
    }
    return (
        <div className="App">
            <PostForm create={createPost}/>
            <hr style={{margin: "15px 0"}}/>
            <div>
                <MyInput
                    placeholder={"Search..."}
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sort"
                    options={[
                        {value: "title", name: 'Sort by Name'},
                        {value: "body", name: 'Sort by Description'}
                    ]}
                />
            </div>
            {sortedAndSearchedPosts.length
                ?
                <PostList remove={removePost} posts={sortedAndSearchedPosts} title={"List of Posts"}/>
                :
                <h1 style={{textAlign: "center"}}>
                    Posts are not found!
                </h1>
            }

        </div>
    );
}

export default App;
