type Props = {
  activeFile: string;
};

export default function Breadcrumb({ activeFile }: Props) {
  return (
    <div className="flex h-7 shrink-0 items-center overflow-hidden border-b border-tn-border bg-tn-bg px-3 text-[11px] text-tn-muted sm:px-4 sm:text-[12px]">
      <span className="hidden shrink-0 sm:inline">portfolio</span>
      <span className="mx-1.5 hidden shrink-0 sm:inline">›</span>
      <span className="hidden shrink-0 md:inline">src</span>
      <span className="mx-1.5 hidden shrink-0 md:inline">›</span>
      <span className="truncate text-tn-fg">{activeFile}</span>
    </div>
  );
}
