const HEADER_OFFSET_PX = 96;

export function scrollToSectionById(id, options = {}) {
  const { behavior = "auto", delayMs = 0 } = options;

  const run = () => {
    const el = document.getElementById(id);
    if (!el) return false;
    const top =
      el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET_PX;
    window.scrollTo({
      top: Math.max(0, top),
      left: 0,
      behavior: behavior === "smooth" ? "smooth" : "auto",
    });
    return true;
  };

  if (delayMs > 0) {
    window.setTimeout(run, delayMs);
    return;
  }
  run();
}
