import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import ListItems from "./pages/items/ListItems";
import CreateItem from "./pages/items/CreateItem";
import ShowItem from "./pages/items/ShowItem";
import UpdateItem from "./pages/items/UpdateItem";
import ItemsLayout from "./pages/items/ItemsLayout";

const router = createBrowserRouter([
    
    {
        path: "/", // localhost:5173/
        element: <RootLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "items", // localhost:5173/items
                element: <ItemsLayout/>,
                children: [
                    { index: true, element: <ListItems/> },
                    { path: "new", element: <CreateItem/> }, // localhost:5173/items/new
                    { path: ":id", element: <ShowItem/> }, // localhost:5173/items/:id
                    { path: ":id/update", element: <UpdateItem/> } // localhost:5173/items/:id/update
                ]
            }
        ]
    }
])

export default router;