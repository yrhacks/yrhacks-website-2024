interface Props {
  open: boolean;
}

const Drawer = ({ open }: Props) => {
  return (
    <nav
      className={`w-screen flex flex-col absolute px-5 pt-20 pb-5 transition-all duration-700 bg-zinc-900/60 ease-out z-10 ${
        open ? "top-0 backdrop-blur-sm" : "-top-full"
      }`}
    >
      <ul>
        {["home", "about", "faq", "contact"].map(
          (item: string, index: number) => (
            <li className="mt-2">
              <a
                href={index > 0 ? "/#" + item : "/"}
                className="text-white text-xl font-medium capitalize"
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

export default Drawer;
