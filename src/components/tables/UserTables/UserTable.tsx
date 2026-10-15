import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface User {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  email: string;
  role: "Admin" | "Pending" | "Cancel";
  dateCreated: string;
}

const tableData: User[] = [
  {
    id: 1,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Lindsey Curtis",
      role: "Web Designer",
    },
    projectName: "Agency Website",
    email: "email@gmail.com",
    role: "Admin",
    dateCreated: "21-12-2024",
  },
  {
    id: 2,
    user: {
      image: "/images/user/user-18.jpg",
      name: "Kaiya George",
      role: "Project Manager",
    },
    projectName: "Technology",
    email: "email@gmail.com",
    role: "Pending",
    dateCreated: "21-12-2024",
  },
  {
    id: 3,
    user: {
      image: "/images/user/user-17.jpg",
      name: "Zain Geidt",
      role: "Content Writing",
    },
    projectName: "Blog Writing",
    email: "email@gmail.com",
    role: "Admin",
    dateCreated: "21-12-2024",
  },
  {
    id: 4,
    user: {
      image: "/images/user/user-20.jpg",
      name: "Abram Schleifer",
      role: "Digital Marketer",
    },
    projectName: "Social Media",
    email: "email@gmail.com",
    role: "Cancel",
    dateCreated: "21-12-2024",
  },
  {
    id: 5,
    user: {
      image: "/images/user/user-21.jpg",
      name: "Carla George",
      role: "Front-end Developer",
    },
    projectName: "Website",
    email: "email@gmail.com",
    role: "Admin",
    dateCreated: "21-12-2024",
  },
];

const roleColor = (role: User["role"]) =>
  role === "Admin" ? "success" : role === "Pending" ? "warning" : "error";

export default function UserManagementTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            {[
              "User",
              "Project Name",
              "Email",
              "Role",
              "Date Created",
              "Action",
            ].map((header) => (
              <TableCell
                key={header}
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                {header}
              </TableCell>
            ))}
          </TableHeader>

          {/* Table Body */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((item) => (
              <TableRow key={item.id}>
                {/* User */}
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 overflow-hidden rounded-full">
                      <img
                        width={40}
                        height={40}
                        src={item.user.image}
                        alt={item.user.name}
                      />
                    </div>
                    <div>
                      <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                        {item.user.name}
                      </span>
                      <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                        {item.user.role}
                      </span>
                    </div>
                  </div>
                </TableCell>

                {/* Project Name */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.projectName}
                </TableCell>

                {/* Email */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.email}
                </TableCell>

                {/* Role */}
                <TableCell className="px-4 py-3 text-start">
                  <Badge size="sm" color={roleColor(item.role)}>
                    {item.role}
                  </Badge>
                </TableCell>

                {/* Date Created */}
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.dateCreated}
                </TableCell>

                {/* Action */}
                <TableCell className="px-4 py-3 text-start">
                  <div className="flex items-center gap-2">
                    <button
                      aria-label="Edit"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-green-500 text-white hover:bg-green-600"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 20h9M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z" />
                      </svg>
                    </button>
                    <button
                      aria-label="Delete"
                      className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-red-500 text-white hover:bg-red-600"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 6h18M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2m3 0v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6h14z" />
                      </svg>
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
