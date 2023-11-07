import { Routes, Route } from "react-router-dom";
import TaskListPage from "../../pages/TaskListPage";
import ItemPage from "../../pages/ItemPage";

const TaskRoutes = () => {
    return <Routes>
            <Route path="/" element={<TaskListPage />} />
            <Route path="/note/:id" element={<ItemPage />} />  
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here! Write a new task</p>
                    </main>
                }
            />
        </Routes>
}

export default TaskRoutes;