const menus = ["File", "Edit", "View", "Go", "Run", "Terminal", "Help"];

export default function MenuBar() {
  return (
    <nav className="hidden h-7 shrink-0 items-center gap-1 overflow-x-auto border-b border-tn-border bg-tn-bg-dark px-2 text-[12px] text-tn-muted md:flex">
      {menus.map((menu) => (
        <button
          key={menu}
          className="shrink-0 rounded px-2 py-0.5 transition-colors hover:bg-tn-bg-hover hover:text-tn-fg"
        >
          {menu}
        </button>
      ))}
    </nav>
  );
}
