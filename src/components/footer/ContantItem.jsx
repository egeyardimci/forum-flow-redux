const ContactItem = ({ icon, children }) => {
  const Icon = icon;
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-gray-400" />
      <span className="text-gray-300 text-sm">{children}</span>
    </div>
  );
};

export default ContactItem;