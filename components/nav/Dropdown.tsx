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
        {["Home", "About", "Partners", "FAQ", "Contact"].map(
          (item: string, index: number) => (
            <li className="mt-3" onClick={() => setOpen(false)} key={item}>
              <Link href={index > 0 ? "/#" + item.toLowerCase() : "/#"}>
                <span className="text-slate-50 text-lg font-medium">
                  {item}
                </span>
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Dropdown;
