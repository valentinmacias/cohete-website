export default function Button({
  size = "md",
  children,
  onClick,
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const sizeStyle = {
    sm: "text-sm py-3 px-4",
    md: "text-sm md:text-base py-3.5 px-6",
    lg: "text-lg py-5 px-6",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-block border font-medium border-primary/30 bg-[#0c1f1a] text-primary hover:border-primary hover:bg-[#00ffcc]/5 tracking-widest uppercase rounded-full whitespace-nowrap leading-normal transition-all duration-300 cursor-pointer hover:shadow-[0_0_20px_rgba(0,255,204,0.2)] ${sizeStyle[size] || sizeStyle.md} ${className}`}
    >
      {children}
    </button>
  );
}
