import { Routes, Route } from "react-router-dom"
import { HomePage, CreatePost, PageNotFound } from "../pages"
import { ProtectedRoutes } from "./ProtectedRoutes"

export const AllRoutes = () => {
  return (
    <main className="dark:bg-slate-800 pt-6">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<ProtectedRoutes><CreatePost /></ProtectedRoutes>} />
            <Route path="*" element={<PageNotFound />} />
        </Routes>
    </main>
  )
}
