import logo from "@/assets/korir-logo.jpg";
import mark from "@/assets/korir-mark.png";
import { cn } from "@/lib/utils";

export function Mark({ className }: { className?: string | undefined }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block size-9 shrink-0 overflow-hidden", className)}
    >
      <img
        src={mark}
        alt=""
        width={512}
        height={512}
        className="size-full object-contain"
      />
    </span>
  );
}

export function Wordmark({
  className,
  markClassName,
  stacked = false,
}: {
  className?: string | undefined;
  markClassName?: string | undefined;
  stacked?: boolean;
}) {
  return (
    <span
      className={cn(
        "flex min-w-0 items-center gap-3",
        stacked && "flex-col items-start gap-4",
        className,
      )}
    >
      <Mark className={markClassName} />
      <span className="flex min-w-0 flex-col leading-none">
        <span className="font-display text-[0.8125rem] font-semibold tracking-[0.2em] uppercase sm:text-sm">
          Korir&nbsp;&amp;
        </span>
        <span className="font-display mt-1 text-[0.6875rem] font-normal tracking-[0.34em] uppercase opacity-70 sm:text-xs">
          Associates
        </span>
      </span>
    </span>
  );
}

export function BrandLockup({ className }: { className?: string | undefined }) {
  return (
    <img
      src={logo}
      alt="Korir & Associates logo"
      width={1280}
      height={1200}
      loading="lazy"
      className={cn("h-auto w-full object-contain", className)}
    />
  );
}