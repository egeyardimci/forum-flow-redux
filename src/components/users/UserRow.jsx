import { X } from "lucide-react";

const UserRow = ({ user }) => (
  <tr className="border-b border-gray-100 hover:bg-gray-50">
    <td className="p-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-sm font-medium">
          {user.id}
        </div>
        <span className="font-medium text-gray-900">{user.name}</span>
      </div>
    </td>
    <td className="p-4">
      <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800`}>
        {user.company.name}
      </span>
    </td>
    <td className="p-4 text-gray-600">{user.username}</td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">{user.phone}</span>
      </div>
    </td>
    <td className="p-4">
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-700">{user.website}</span>
      </div>
    </td>
  </tr>
);

export default UserRow;