import Image from "next/image";
import UserIcon from "../shared/UserIcon";
import { useUserStore } from "@/stores/userStore";


interface AdminHeaderProps {
  toggleSideBar: () => void;
}

const AdminHeader = ({ toggleSideBar }: AdminHeaderProps) => {
  
    const { nombre } = useUserStore();
  
  return (
    <>
      <div className="admin-header">
        <div className="admin-left-menu">
          <Image
            onClick={()=>{
              toggleSideBar()
            }}
            src="/layout/hamburger-icon.png"
            alt="Menu Icon"
            width={24}
            height={24}
          />
          <Image
            src="/layout/full-screen-icon.png"
            alt="Full Screen Icon"
            width={24}
            height={24}
          />
        </div>

        <div className="admin-right-menu">
          <div className="admin-img">
            {/* <Image
              src="/layout/user-icon-profile.png"
              alt="User Profile Icon"
              width={19}
              height={19}
            /> */}
            <UserIcon></UserIcon>
          </div>
          <div className="navbar-credentials">
            <h4>{nombre}</h4>
            <p>Administrador</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
