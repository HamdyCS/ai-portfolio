import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "../../lib/Icon";

const AUTO_REDIRECT_SECONDS = 10;

interface AutoRecoveryProps {
  onComplete: () => void;
}

export function AutoRecovery({ onComplete }: AutoRecoveryProps) {
  const { t } = useTranslation();
  const [secondsLeft, setSecondsLeft] = useState(AUTO_REDIRECT_SECONDS);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    if (cancelled || secondsLeft <= 0) return;
    const timer = window.setTimeout(() => {
      setSecondsLeft((seconds) => seconds - 1);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [cancelled, secondsLeft]);

  useEffect(() => {
    if (!cancelled && secondsLeft === 0) {
      onComplete();
    }
  }, [cancelled, secondsLeft, onComplete]);

  return (
    <div className="mt-10 flex flex-col items-center gap-3">
      {cancelled ? (
        <p className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-text-secondary">
          <Icon name="FiX" className="text-sm" />
          {t("notFound.redirectCancelled")}
        </p>
      ) : (
        <>
          <p
            aria-live="polite"
            className="font-mono text-xs text-slate-500 dark:text-text-secondary"
          >
            {t("notFound.autoRedirect", { seconds: secondsLeft })}
          </p>
          <div className="h-1 w-full max-w-xs overflow-hidden rounded-full bg-slate-200 dark:bg-surface-high">
            <div className="nf-progress-fill h-full rounded-full bg-primary" />
          </div>
          <button
            type="button"
            onClick={() => setCancelled(true)}
            className="rounded-md text-xs font-semibold text-slate-500 underline-offset-4 transition-colors hover:text-teal-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary dark:text-text-secondary dark:hover:text-primary"
            aria-label={t("notFound.cancelRedirect")}
          >
            {t("notFound.cancelRedirect")}
          </button>
        </>
      )}
    </div>
  );
}
