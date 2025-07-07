// Component for sections with lists of links (Quick Links & Support)
const LinkSection = ({ title, links }) => (
  <div>
    <h4 className="text-lg font-semibold mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default LinkSection;