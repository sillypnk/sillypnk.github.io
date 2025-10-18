/* ===== Config ===== */
const ease = 0.07; // springiness toward target
const friction = 0.6; // momentum decay per frame
const idleThreshold = 0.6; // px threshold to snap/remove

/* ===== Helpers ===== */
function isEditable(el) {
  if (!el) return false;
  const tag = el.tagName;
  return (
    el.isContentEditable ||
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT"
  );
}

function getScrollableElement(start) {
  let el = start;
  while (el && el !== document.body) {
    if (el instanceof HTMLElement) {
      const style = getComputedStyle(el);
      const oy = style.overflowY;
      if (
        (oy === "auto" || oy === "scroll" || oy === "overlay") &&
        el.scrollHeight > el.clientHeight
      ) {
        return el;
      }
    }
    el = el.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}

/* ===== State ===== */
const states = new Map(); // element → { target, current, velocity }

/* ===== Wheel Handler ===== */
window.addEventListener(
  "wheel",
  (e) => {
    if (e.ctrlKey) return; // allow zoom
    let node = e.target;
    while (node && node !== document.body) {
      if (isEditable(node)) return;
      node = node.parentElement;
    }

    const el = getScrollableElement(e.target);

    let delta = e.deltaY;
    if (e.deltaMode === 1) delta *= 16; // lines → px
    else if (e.deltaMode === 2) delta *= window.innerHeight;

    e.preventDefault();

    if (!states.has(el)) {
      states.set(el, {
        target: el.scrollTop,
        current: el.scrollTop,
        velocity: 0,
      });
    }
    const s = states.get(el);

    // Sync in case external scroll
    if (Math.abs(el.scrollTop - s.current) > 1) {
      s.current = el.scrollTop;
      s.target = el.scrollTop;
      s.velocity = 0;
    }

    // Add delta to velocity for momentum
    s.velocity += delta;
  },
  { passive: false }
);

/* ===== Animation Loop ===== */
function animate() {
  if (states.size > 0) {
    for (const [el, s] of states) {
      // Apply velocity
      s.target += s.velocity;
      s.velocity *= friction; // decay velocity

      // Ease current toward target
      const diff = s.target - s.current;
      s.current += diff * ease;

      // Clamp to scroll range
      if (s.target < 0) {
        s.target = 0;
        s.velocity = 0;
      } else if (s.target > el.scrollHeight - el.clientHeight) {
        s.target = el.scrollHeight - el.clientHeight;
        s.velocity = 0;
      }

      el.scrollTop = s.current;

      // Remove if idle
      if (
        Math.abs(diff) < idleThreshold &&
        Math.abs(s.velocity) < idleThreshold
      ) {
        el.scrollTop = s.target;
        states.delete(el);
      }
    }
  }
  requestAnimationFrame(animate);
}
animate();

function smoothScrollTo(el) {
  const scrollEl = document.scrollingElement || document.documentElement;
  const rect = el.getBoundingClientRect();
  const targetY = rect.top + scrollEl.scrollTop;

  if (!states.has(scrollEl)) {
    states.set(scrollEl, {
      target: scrollEl.scrollTop,
      current: scrollEl.scrollTop,
      velocity: 0
    });
  }

  const s = states.get(scrollEl);
  s.target = targetY;   // set new target
  s.velocity = 0;       // reset velocity for controlled scroll
}

// hijack anchor link clicks
document.addEventListener("click", (e) => {
  const link = e.target.closest("a[href^='#']");
  if (!link) return;

  const id = link.getAttribute("href").slice(1);
  const target = document.getElementById(id);
  if (target) {
    e.preventDefault();
    smoothScrollTo(target);
  }
});
