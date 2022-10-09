interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Dropdown = ({ open, setOpen }: Props) => {
  return (
    <nav
      className={
        "w-screen flex flex-col transition-all px-4 duration-700 ease-out z-10 overflow-hidden " +
        (open ? "max-h-96 py-4" : "max-h-0")
      }
    >
      <ul>
        {["Home", "About", "FAQ", "Partners", "Contact"].map(
          (item: string, index: number) => (
            <li className="mt-3" onClick={() => setOpen(false)} key={item}>
              <a
                href={index > 0 ? "/#" + item.toLowerCase() : "/#"}
                className="text-white text-lg font-medium"
                key={item}
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Dropdown;
