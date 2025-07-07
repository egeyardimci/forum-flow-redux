import { Loader2 } from "lucide-react";
import UserRow from "./UserRow";

const UsersTable = ({ users }) => {
  const isLoading = users.length === 0;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-4">
        <Loader2 className={`animate-spin`} size={72} />
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm transition-colors duration-300">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left p-4 font-medium text-gray-700 dark:text-gray-300">Name</th>
              <th className="text-left p-4 font-medium text-gray-700 dark:text-gray-300">Company</th>
              <th className="text-left p-4 font-medium text-gray-700 dark:text-gray-300">Username</th>
              <th className="text-left p-4 font-medium text-gray-700 dark:text-gray-300">Phone</th>
              <th className="text-left p-4 font-medium text-gray-700 dark:text-gray-300">Website</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <UserRow 
                key={user.id} 
                user={user} 
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersTable;
