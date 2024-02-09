import { useRouter } from "next/router";
import Navbar from "../navbar"

type AppShellProps = {
    children: React.ReactNode
}

const disableNavbar = ["/auth/login", "/auth/register" ,"/404"]
const AppShell = (props: AppShellProps) => {
    // const { children } = props;
    const { pathname } = useRouter();
    
    return(
        <main>
        {!disableNavbar.includes(pathname) && <Navbar/>}
        {props.children}
        </main>
    );
};

export default AppShell