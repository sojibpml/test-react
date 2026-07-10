import { useState } from "react";
import {
  CodeXml,
  Palette,
  Folder,
  Calendar,
  Settings,
  Search,
  Inbox,
  Home,
  BarChart3,
  FileText,
  Zap,
  Focus,
  Users,
  House,
  StretchHorizontal,
  CircleDollarSign,
} from "lucide-react";
import type { SidebarItem } from "../types";
export default function Sidebar() {
  const [selected, setSelected] = useState<string>("home");
  const [active, setActive] = useState<string>();
  const menuItems = [
    {
      id: "logo",
      image:
        "https://media.gettyimages.com/id/1504173168/photo/futuristic-energy-sphere-on-black-background-representing-ai-and-future-technologies-3d.jpg?s=612x612&w=gi&k=20&c=LWmoIS3nu3daD1kv47tWClkAehYCDldBqce9NTOtkJM=",
      type: "image",
      position: "top",
    },
    {
      id: "home",
      icon: <Focus />,
      position: "top",
    },

    {
      id: "code",
      icon: <CodeXml size={18} strokeWidth={1.5} />,
      position: "top",
    },

    {
      id: "palette",
      icon: <Palette size={18} strokeWidth={1.5} />,
      position: "top",
    },

    {
      id: "folder",
      icon: <Folder size={18} strokeWidth={1.5} />,
      position: "top",
    },

    {
      id: "calendar",
      icon: <Calendar size={18} strokeWidth={1.5} />,
      position: "top",
    },

    {
      id: "settings",
      icon: <Settings size={18} strokeWidth={1.5} />,
      position: "bottom",
    },

    {
      id: "profile",
      image:
        "https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg",

      type: "image",

      position: "bottom",
    },
  ];

  const sidebarSections: { items: SidebarItem[]; title?: string }[] = [
    {
      items: [
        {
          label: "My inbox",
          icon: Inbox,
          count: 2,
          dot: true,
        },

        {
          label: "My tasks",
          icon: Users,
          count: 6,
          dot: false,
        },
      ],
    },

    {
      title: "Dashboard",

      items: [
        {
          label: "Overview",
          icon: House,
        },

        {
          label: "Products",
          icon: StretchHorizontal,
        },

        {
          label: "Orders",
          icon: Users,
        },

        {
          label: "Analytics",
          icon: BarChart3,
        },
      ],
    },

    {
      title: "Payments",

      items: [
        {
          label: "Overview Payment",
          icon: Home,
        },

        {
          label: "Payments",
          icon: CircleDollarSign,
        },

        {
          label: "Invoices",
          icon: FileText,
        },

        {
          label: "Integrations",
          icon: Zap,
        },
      ],
    },
  ];

  return (
    <>
      <div className="bg-[#FFFFFF] shadow-xl h-screen w-70 flex flex-col fixed top-0 left-0 ">
        <div className="flex flex-col items-center gap-4 p-1.5 flex-1 w-14 bg-[#FAFBFD] shadow-sm">
          {/* =============================== menu items Top==================================== */}
          <div>
            {menuItems
              .filter((item) => item.position === "top")
              .map((item) => (
                <div key={item.id} className="mt-2 flex justify-center">
                  {item.type === "image" ? (
                    <img
                      src={item.image}
                      alt=""
                      className="rounded w-8 h-8 object-cover"
                    />
                  ) : (
                    <div
                      onClick={() => setSelected(item.id)}
                      className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-md transition
              
            ${selected === item.id ? "bg-[#E8EDF2]" : "hover:bg-zinc-100"}
            `}
                    >
                      {item.icon}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* =============================== menu items bottom==================================== */}

        <div className="p-1.5 mt-auto bg-gray-50 w-14 flex flex-col items-center shadow-sm">
          <div className="flex flex-col items-center">
            {menuItems
              .filter((item) => item.position === "bottom")
              .map((item) => (
                <div key={item.id} className="mt-3">
                  {item.type === "image" ? (
                    <img
                      src={item.image}
                      alt=""
                      className="rounded-full w-8 h-8 object-cover"
                    />
                  ) : (
                    <div
                      onClick={() => setSelected(item.id)}
                      className={`cursor-pointer flex items-center justify-center w-10 h-10 rounded-md transition
              
              ${selected === item.id ? "bg-[#E8EDF2]" : "hover:bg-zinc-100"}
              `}
                    >
                      {item.icon}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
        <div className="absolute top-0 left-15 mt-7 p-1.5 pr-2">
          <h2 className="text-xl text-gray-800 font-medium">Dashboard</h2>
          <div className="flex items-center border border-zinc-200 px-2 py-2 rounded-md mb-4 mt-3 shadow-sm">
            <Search size={18} />
            <input
              className="bg-transparent outline-none ml-2 w-full text-xs    placeholder:text-zinc-400 "
              placeholder="Search"
            />
          </div>

          {/* =============================== sidebar design==================================== */}
          {sidebarSections.map((section) => (
            <div key={section.title} className="mt-3">
              {/* SECTION HEADER */}
              <div className="flex justify-between items-center">
                <p className="text-[10px]  mb-1">{section.title}</p>
              </div>

              {/* ITEMS */}
              <div className="">
                {section.items.map((item) => (
                  <div
                    key={item.label}
                    onClick={() => setActive(item.label)}
                    className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition mb-1
                    
                    ${
                      active === item.label
                        ? "bg-[#F3F4F4] text-black"
                        : "hover:bg-zinc-100 text-zinc-600"
                    }
                    `}
                  >
                    {/* LEFT */}
                    <div className="flex items-center gap-2 text-xs font-medium">
                      <item.icon size={18} />

                      {item.label}
                    </div>

                    {/* RIGHT */}
                    {item.count ? (
                      <div className="relative text-xs bg-[#F4F4F4] w-5 h-5 flex items-center justify-center rounded-full font-medium text-[#6A6F6F]">
                        {item.count}

                        {item.dot && (
                          <div className="absolute top-0 right-0 bg-emerald-500 w-1.5 h-1.5 rounded-full"></div>
                        )}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ml-60">
        <img src="../assets/image.jpeg" alt="" />
      </div>
    </>
  );
}
