import UserRow from "./UserRow";

const UsersTable = ({ users }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left p-4 font-medium text-gray-700">Name</th>
              <th className="text-left p-4 font-medium text-gray-700">Company</th>
              <th className="text-left p-4 font-medium text-gray-700">Username</th>
              <th className="text-left p-4 font-medium text-gray-700">Phone</th>
              <th className="text-left p-4 font-medium text-gray-700">Website</th>
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
