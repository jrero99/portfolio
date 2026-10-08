import { useId, useLayoutEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "./Icons";
import { useLanguage } from "../i18n/LanguageContext";

const COLLAPSED_HEIGHT = 160;
// Don't collapse content that would only hide a line or two
const MIN_HIDDEN = 48;
const HEADER_OFFSET = 80;

const Expandable = ({ className = "", children }) => {
  const { t } = useLanguage();
  const id = useId();
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [fullHeight, setFullHeight] = useState(0);

  // Observe the unclamped inner box so language changes and resizes keep the height right
  useLayoutEffect(() => {
    const inner = innerRef.current;
    const measure = () => setFullHeight(inner.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(inner);
    return () => observer.disconnect();
  }, []);

  const collapsible = fullHeight > COLLAPSED_HEIGHT + MIN_HIDDEN;
  const collapsed = collapsible && !expanded;

  const toggle = () => {
    setExpanded(!expanded);
    // When collapsing a long card, bring its top back into view instead of leaving the reader below it
    if (expanded) {
      const top = outerRef.current.closest("article").getBoundingClientRect().top;
      if (top < HEADER_OFFSET) window.scrollBy({ top: top - HEADER_OFFSET });
    }
  };

  return (
    <div className={className}>
      <div
        ref={outerRef}
        id={id}
        className={`overflow-hidden ease-out motion-safe:transition-[max-height] motion-safe:duration-300 ${
          collapsed ? "mask-[linear-gradient(to_bottom,black_50%,transparent)]" : ""
        }`}
        style={collapsible ? { maxHeight: expanded ? fullHeight : COLLAPSED_HEIGHT } : undefined}
      >
        <div ref={innerRef} className="flow-root">
          {children}
        </div>
      </div>
      {collapsible && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={toggle}
          className="mt-3 inline-flex min-h-11 cursor-pointer items-center gap-1.5 rounded-full text-sm font-semibold text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {expanded ? t.info.showLess : t.info.showMore}
          <ChevronDownIcon
            className={`size-4 motion-safe:transition-transform motion-safe:duration-300 ${expanded ? "rotate-180" : ""}`}
          />
        </button>
      )}
    </div>
  );
};

export default Expandable;
