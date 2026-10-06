"use strict";
// Progressive enhancement only: the page is fully usable without this script.
/** Marks the nav link of the section currently in view with aria-current. */
function highlightActiveSection() {
    const links = Array.from(document.querySelectorAll('.bar nav a[href^="#"]'));
    const sections = links
        .map((link) => document.querySelector(link.hash))
        .filter((section) => section !== null);
    if (!("IntersectionObserver" in window) || sections.length === 0)
        return;
    const setActive = (id) => {
        for (const link of links) {
            if (link.hash === `#${id}`) {
                link.setAttribute("aria-current", "true");
            }
            else {
                link.removeAttribute("aria-current");
            }
        }
    };
    // A section counts as "current" while it crosses the middle band of the viewport.
    const observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting)
                setActive(entry.target.id);
        }
    }, { rootMargin: "-40% 0px -50% 0px" });
    sections.forEach((section) => observer.observe(section));
}
highlightActiveSection();
