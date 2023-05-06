import SideBar from "./Sidebar";
import TopBar from "./Topbar";

export default function Authenticated({ children }) {
    return (
        <div className="mx-auto max-w-screen hidden lg:block">
            {/* Sidebar <START> */}
            <SideBar />
            {/* Sidebar <END> */}

            {/* Content <START> */}
            <div className="ml-[300px] px-[50px]">
                <div className="py-10 flex flex-col gap-[50px]">
                    {/* TopBar <START> */}
                    <TopBar />
                    {/* TopBar <END> */}
                    <main>{children}</main>
                </div>
            </div>
            {/* Content <END> */}
            <div className="mx-auto px-4 w-full h-screen lg:hidden flex bg-black">
                <div className="text-white text-2xl text-center leading-snug font-medium my-auto">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>
        </div>
    );
}
