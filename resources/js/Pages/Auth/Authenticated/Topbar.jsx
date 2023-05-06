import { useState, useRef } from "react";

export default function TopBar() {
    const [dropDownOpen, setDropDownOpen] = useState(false);
    const dropDownRef = useRef(null);

    const openDropDown = () => {
        if (dropDownOpen) {
            dropDownRef.current.classList.add("hidden");
        } else {
            dropDownRef.current.classList.remove("hidden");
        }
        setDropDownOpen(!dropDownOpen);
    };

    return (
        <div className="flex justify-between items-center">
            <input
                type="text"
                className="top-search"
                placeholder="Search movie, cast, genre"
            />
            <div className="flex items-center gap-4 cursor-pointer">
                <span className="text-black text-sm font-medium">
                    Welcome, Granola Sky
                </span>
                {/* User Avatar */}
                <div className="collapsible-dropdown flex flex-col gap-2 relative">
                    <a
                        href="#!"
                        className="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                        data-target="#dropdown-button"
                    >
                        <img
                            src="/images/avatar.png"
                            className="rounded-full object-cover w-full"
                            alt=""
                            onClick={openDropDown}
                        />
                    </a>
                    <div
                        className={`bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] overflow-hidden hidden`}
                        ref={dropDownRef}
                    >
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Dashboard
                        </a>
                        <a
                            href="#!"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Settings
                        </a>
                        <a
                            href="sign_in.html"
                            className="transition-all hover:bg-sky-100 p-4"
                        >
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>
            <style jsx="true">{`
                .top-search {
                    background-image: url("/icons/ic_search.svg");
                }
            `}</style>
        </div>
    );
}
