import Link from "next/link";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Dropdown = ({ open, setOpen }: Props) => {
  return (
    <nav
      className={
        "w-screen flex flex-col transition-all px-4 duration-700 ease-in-out z-10 overflow-hidden " +
        (open ? "max-h-96 py-4" : "max-h-0")
      }
    >
      <ul>
        <li className="mt-3" onClick={() => setOpen(false)}>
          <Link href="/#">
            <span className="text-slate-50 text-lg font-medium">Home</span>
          </Link>
        </li>
        <li className="mt-3" onClick={() => setOpen(false)}>
          <Link href="/about">
            <span className="text-slate-50 text-lg font-medium">About</span>
          </Link>
        </li>
        <li className="mt-3" onClick={() => setOpen(false)}>
          <Link href="/faq">
            <span className="text-slate-50 text-lg font-medium">FAQ</span>
          </Link>
        </li>
        <li className="mt-3" onClick={() => setOpen(false)}>
          <Link href="/#contact">
            <span className="text-slate-50 text-lg font-medium">Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Dropdown;
