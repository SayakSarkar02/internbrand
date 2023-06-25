import Image from "next/image";
import clip from "@assets/icons/clipboardtext.svg";
import edit from "@assets/icons/edit.svg";
import profile from "@assets/icons/profile.png";
import tsq from "@assets/icons/tasksquare.svg";
import noti from "@assets/icons/notification.svg";
import msg from "@assets/icons/messagequestion.svg";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md shadow-black/20 w-screen h-16 flex flex-row justify-between items-center px-10 pr-5">
      <h3 className="text-2xl font-bold">InternBrand</h3>
      <div className="font-semibold text-pw-gray-dark flex flex-row gap-8">
        <div className="flex flex-row gap-1 items-center cursor-pointer select-none text-purple-dark hover:text-purple-mid">
          <Image src={clip} />
          <h3>Browse Listings</h3>
        </div>
        <div className="flex flex-row gap-1 items-center cursor-pointer select-none hover:text-purple-mid saturate-0 hover:saturate-100">
          <Image src={tsq} />
          <h3>Application History</h3>
        </div>
        <div className="flex flex-row gap-1 items-center cursor-pointer select-none hover:text-purple-mid saturate-0 hover:saturate-100">
          <Image src={edit} />
          <h3>Blog</h3>
        </div>
        <div className="flex flex-row gap-1 items-center cursor-pointer select-none hover:text-purple-mid saturate-0 hover:saturate-100">
          <Image src={msg} />
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <Image src={noti} />
        <div>
          <Image src={profile} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
