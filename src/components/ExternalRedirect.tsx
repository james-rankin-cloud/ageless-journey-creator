import { useEffect } from "react";

type Props = { to: string };

export default function ExternalRedirect({ to }: Props) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">
          Redirecting…
        </p>
        <p className="text-base text-foreground">
          Taking you to our secure store.
        </p>
        <a
          href={to}
          className="mt-4 inline-block text-clinic-teal underline underline-offset-4 text-sm"
        >
          Click here if you are not redirected
        </a>
      </div>
    </div>
  );
}
