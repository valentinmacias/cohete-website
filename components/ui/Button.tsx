export default function Button({
  children,
  onClick,
  className,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`inline-block border border-primary/80 bg-[#0c1f1a] hover:bg-[#00ffcc]/20 text-[#00ffcc] text-base font-medium tracking-widest uppercase py-3.5 px-5 rounded-full whitespace-nowrap leading-normal ${className}`}
    >
      {children}
    </button>
  );
}
