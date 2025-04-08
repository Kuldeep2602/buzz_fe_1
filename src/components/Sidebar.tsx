import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { MindDrop } from "../icons/MindDrop";
import { SidebarItem } from "./SidebarItem";
import { SavedLinks } from "../icons/Saved-links";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center ">
            <div className="pr-2 text-purple-600">
                <Logo />
            </div>
            buzz
        </div>
        <div className="pt-8 pl-4 font-serif bg-white shadow-xl rounded-2xl w-60 space-y-2 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon />} />
            <SidebarItem text="Youtube" icon={<YoutubeIcon />} />
            <SidebarItem text="MindDrop" icon={<MindDrop />} />
            <SidebarItem text="Saved-links" icon={<SavedLinks />} />
        </div>
    </div>
}