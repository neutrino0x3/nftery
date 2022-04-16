import SideBar from "./SideBar";

const Container = ({children}) => {
return <main>
    <SideBar/>
    {children}
</main>
}

export default Container