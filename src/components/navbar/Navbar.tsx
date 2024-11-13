import {
  NotificationIcon,
  PrintIcon,
  ProfileIcon,
  SearchIcon,
} from "@/app/Assets/navIcons/NavIcons";
import Title from "./Title";

const Navbar = () => {
  return (
    <div className="bg-[var(--background)] flex justify-between p-5 rounded-lg">
      <Title />
      <div className="flex gap-3 cursor-pointer">
        <SearchIcon />
        <PrintIcon />
        <NotificationIcon />
        <ProfileIcon />
      </div>
    </div>
  );
};

export default Navbar;
