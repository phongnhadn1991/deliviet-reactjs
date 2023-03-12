import { Route, Routes } from "react-router-dom"
import Dashboard from "../pages/dashboard"
import PostPage from "../pages/posts"
import CategoryPost from "../pages/posts/category"
const RouterPage = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Dashboard />} />
                <Route path='/posts' element={<PostPage />} />
                <Route path='/posts/category' element={<CategoryPost />} />
            </Route>
        </Routes>
    )
}

export default RouterPage