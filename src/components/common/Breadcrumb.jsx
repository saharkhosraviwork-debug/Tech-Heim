
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items = [] }) {
  return (
    <nav className="flex items-center gap-2 text-[18px] text-blog">
      <Link to="/" className="hover:text-hover">
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={15} />

          <span className={item.to ? "hover:text-hover" : "text-hover underline"}>
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
