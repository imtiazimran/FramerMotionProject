import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="overflow-auto p-4 lg:p-5 bg-light-gray  col-span-2 h-screen sticky top-0 left-0">
      <nav className="flex flex-col gap-3">
        <NavLink
          className={({isActive}) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all duration-300 flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/dashboard"
        >
          <LayoutDashboard className="shrink-0" />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          className={({isActive}) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all duration-300 flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/services"
        >
          <LayoutDashboard className="shrink-0" />
          <span>Services</span>
        </NavLink>
        <NavLink
          className={({isActive}) =>
            cn(
              "p-3 bg-gray rounded-md hover:bg-dark-gray hover:text-white transition-all duration-300 flex items-center gap-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
          to="/admin/add-service"
        >
          <LayoutDashboard className="shrink-0" />
          <span>Add Services</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
