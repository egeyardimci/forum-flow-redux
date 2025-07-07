const SocialLink = ({ href, icon }) => {
  const Icon = icon;
  return (
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      <Icon className="w-5 h-5" />
    </a>
  );
};

export default SocialLink;