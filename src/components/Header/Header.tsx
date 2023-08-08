import { Link } from "react-router-dom";

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="flex justify-center items-center h-11 bg-green-400">
      <div className="container">
        <ul className="flex gap-x-5">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
