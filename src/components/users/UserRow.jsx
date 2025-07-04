import { X } from "lucide-react";

const UserRow = ({ user }) => (
  <tr className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
          {user.id}
        </div>
        <span className="font-medium text-gray-900 dark:text-gray-100">{user.name}</span>
      </div>
    </td>
    <td className="p-4">
      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300`}>
        {user.company.name}
      </span>
    </td>
    <td className="p-4 text-gray-600 dark:text-gray-400">{user.username}</td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">{user.phone}</span>
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700 dark:text-gray-300">{user.website}</span>
      </div>
    </td>
  </tr>
);

export default UserRow;