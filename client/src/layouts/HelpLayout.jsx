import { Outlet } from "react-router-dom";


export default function HelpLayout() {
    return (
        <>
            <h2 className="title">Website Help</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, consequuntur.</p>

            <Outlet />

        </>
    )
}
