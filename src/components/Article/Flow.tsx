type Tone = "neutral" | "success" | "fail" | "undo";

interface FlowStep {
  /** Who acts, e.g. a service name. */
  actor: string;
  action: string;
  /** Message sent to the next step, shown on the connector. */
  event?: string;
  tone?: Tone;
}

interface FlowProps {
  title?: string;
  steps: FlowStep[];
}

const toneStyle: Record<Tone, { dot: string; actor: string }> = {
  neutral: { dot: "bg-[#4CA9FF]", actor: "text-[#4CA9FF]" },
  success: { dot: "bg-[#3BF686]", actor: "text-[#3BF686]" },
  fail: { dot: "bg-[#FF6B6B]", actor: "text-[#FF6B6B]" },
  undo: { dot: "bg-[#FFB84C]", actor: "text-[#FFB84C]" },
};

/** A vertical step diagram for write-ups: who does what, and what they send next. */
const Flow = ({ title, steps }: FlowProps) => {
  return (
    <figure className="not-prose my-8 bg-[#323443] rounded-xl p-5 md:p-7">
      {title && (
        <figcaption className="text-sm font-semibold text-white mb-5">
          {title}
        </figcaption>
      )}
      <ol>
        {steps.map((step, i) => {
          const tone = toneStyle[step.tone ?? "neutral"];
          const last = i === steps.length - 1;
          return (
            <li key={i} className="relative pl-8 pb-5 last:pb-0">
              {!last && (
                <span
                  aria-hidden="true"
                  className="absolute left-[5px] top-4 bottom-0 w-px bg-[#4D4D4D]"
                />
              )}
              <span
                aria-hidden="true"
                className={`absolute left-0 top-1.5 w-[11px] h-[11px] rounded-full ${tone.dot}`}
              />
              <p className="text-[#D4D4D4] leading-relaxed">
                <span className={`font-semibold ${tone.actor}`}>
                  {step.actor}
                </span>{" "}
                {step.action}
              </p>
              {step.event && (
                <p className="mt-1.5 text-xs text-[#A0A0A0]">
                  <span aria-hidden="true">→</span>{" "}
                  <code className="px-1.5 py-0.5 rounded bg-[#272727] text-[#80FFA3]">
                    {step.event}
                  </code>
                </p>
              )}
            </li>
          );
        })}
      </ol>
    </figure>
  );
};

export default Flow;
