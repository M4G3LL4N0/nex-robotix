import Link from "next/link";
import { cn } from "@/lib/utils";

interface NexLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function NexLogo({ className, showWordmark = true }: NexLogoProps) {
  return (
    <Link href="/" className={cn("group flex items-center gap-2.5", className)}>
      <div className="relative flex h-9 w-9 items-center justify-center rounded-md border border-nex-border bg-nex-gunmetal">
        <span className="font-mono text-sm font-bold tracking-tighter text-nex-blue">N</span>
        <div className="absolute -bottom-px left-1/2 h-px w-4 -translate-x-1/2 bg-nex-blue/60" />
      </div>
      {showWordmark && (
        <div className="flex flex-col leading-none">
          <span className="text-sm font-semibold tracking-wide text-nex-white">NEX</span>
          <span className="text-[10px] tracking-widest text-nex-muted uppercase">Robotix</span>
        </div>
      )}
    </Link>
  );
}
