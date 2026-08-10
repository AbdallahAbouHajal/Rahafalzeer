/* ═══════════════════════════════════════════════════════════════════
   rahaf.motion.js · Additive motion layer (loads AFTER scripts.js)

   Purely decorative enhancements. Never required for content:
     1. Count-up on numeric metrics (#m-total, #m-cites, #m-h and any
        .impact-num whose text is a plain integer) when they scroll
        into view. If another script rewrites the value mid-animation
        (serpapi.v1.js refreshing live metrics), the animation yields.
     2. Draw-on trigger for the concentration-response figure
        (.dose-figure gets .is-drawn; CSS does the drawing).
   Honors prefers-reduced-motion: values render instantly, figures
   render complete, nothing animates.
   ═══════════════════════════════════════════════════════════════════ */
(function () {
    'use strict';

    var reduced = false;
    try {
        reduced = window.matchMedia &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) { /* assume motion ok */ }

    var easeOut = function (t) { return 1 - Math.pow(1 - t, 3); };

    /* ── 1 · Count-up ─────────────────────────────────────────────── */
    function countUp(el, duration) {
        var raw = (el.textContent || '').trim();
        if (!/^\d{1,6}$/.test(raw)) return;          // integers only
        var target = parseInt(raw, 10);
        if (!isFinite(target) || target <= 0) return;

        var start = null;
        var lastWritten = raw;

        function frame(ts) {
            // Yield if some other script replaced the value meanwhile.
            if ((el.textContent || '').trim() !== lastWritten) return;
            if (start === null) start = ts;
            var p = Math.min(1, (ts - start) / duration);
            var val = String(Math.round(target * easeOut(p)));
            el.textContent = val;
            lastWritten = val;
            if (p < 1) {
                requestAnimationFrame(frame);
            } else {
                el.textContent = String(target);
            }
        }
        el.textContent = '0';
        lastWritten = '0';
        requestAnimationFrame(frame);
    }

    function wireCountUps() {
        var targets = [];
        ['m-total', 'm-cites', 'm-h'].forEach(function (id) {
            var el = document.getElementById(id);
            if (el) targets.push(el);
        });
        document.querySelectorAll('.impact-num').forEach(function (el) {
            targets.push(el);
        });
        if (!targets.length) return;
        if (reduced || !('IntersectionObserver' in window)) return; // leave values as-is

        var seen = new WeakSet();
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting || seen.has(entry.target)) return;
                seen.add(entry.target);
                io.unobserve(entry.target);
                countUp(entry.target, 750);
            });
        }, { threshold: 0.4 });
        targets.forEach(function (el) { io.observe(el); });
    }

    /* ── 2 · Figure draw-on ───────────────────────────────────────── */
    function wireFigures() {
        var figs = document.querySelectorAll('.dose-figure');
        if (!figs.length) return;
        if (reduced || !('IntersectionObserver' in window)) {
            figs.forEach(function (f) { f.classList.add('is-drawn'); });
            return;
        }
        var io = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-drawn');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.35 });
        figs.forEach(function (f) { io.observe(f); });
    }

    function init() {
        wireCountUps();
        wireFigures();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
