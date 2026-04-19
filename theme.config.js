// ═══════════════════════════════════════════════════════════════════
//  theme.config.js — Rahaf Adnan Al-Zeer
//  Single source of truth for this researcher's site.
//  To port to another researcher: clone the repo, swap THIS FILE,
//  change SCHOLAR_AUTHOR_ID in .github/workflows/serpapi-monthly.yml,
//  and replace images/profile.png.
// ═══════════════════════════════════════════════════════════════════

window.SITE_CONFIG = {

    // ── Identity ──────────────────────────────────────────────────
    identity: {
        fullName:  "Rahaf Adnan Al-Zeer",
        firstName: "Rahaf",
        lastName:  "Al-Zeer",
        initials:  "RA",
        role:      "Pharmacist · Graduate Teaching Assistant · MSc Candidate",
        tagline:   "Molecular pharmacology, drug repurposing &amp; nanomedicine — investigating endothelin receptor antagonists as anticancer agents.",
        location:  "Ajman, UAE",
        status:    "MSc Defence · July 2026",
        photo:     "images/profile.png",
        affiliation: {
            name: "Gulf Medical University",
            url:  "https://www.gmu.ac.ae",
            role: "Graduate Teaching Assistant &amp; MSc Candidate"
        }
    },

    // ── Palette ───────────────────────────────────────────────────
    // Light pink theme. Applied to CSS variables at runtime.
    palette: {
        name: "rose",
        // Dark mode (default)
        dark: {
            bg:          "#1B0A12",
            bgSoft:      "#200D15",
            bgDeep:      "#140509",
            card:        "#2A1020",
            cardSoft:    "#231018",
            text:        "#FFE4F0",
            textSoft:    "#CF94B0",
            muted:       "#8A5570",
            border:      "#4A1A2E",
            borderS:     "#38121F",
            accent:      "#F48FB1",
            accentD:     "#F8BBD9",
            accentBg:    "rgba(244,143,177,0.12)",
            accentGlow:  "rgba(244,143,177,0.22)",
            amber:       "#FFAB76",
            amberBg:     "rgba(255,171,118,0.12)",
            amberGlow:   "rgba(255,171,118,0.20)"
        },
        // Light mode
        light: {
            bg:          "#FFF5F7",
            bgSoft:      "#FFEEF3",
            bgDeep:      "#FFE4EE",
            card:        "#FFFFFF",
            cardSoft:    "#FFF8FB",
            text:        "#2D1520",
            textSoft:    "#5A2535",
            muted:       "#9E6070",
            border:      "#F7C5D5",
            borderS:     "#FDDDE8",
            accent:      "#C2185B",
            accentD:     "#880E4F",
            accentBg:    "#FCE4EC",
            accentGlow:  "rgba(194,24,91,0.14)",
            amber:       "#C77700",
            amberBg:     "#FFF3CD",
            amberGlow:   "rgba(199,119,0,0.14)"
        }
    },

    // ── IDs (external profiles) ───────────────────────────────────
    ids: {
        scholar: "uy-28F0AAAAJ",
        scopus:  "",
        orcid:   "0009-0004-1752-3171",
        email:   "rahaf@gmu.ac.ae"
    },

    // ── Social links (rendered in hero + footer) ──────────────────
    social: [
        { key: "scholar",  label: "Google Scholar", url: "https://scholar.google.com/citations?user=uy-28F0AAAAJ&hl=en" },
        { key: "orcid",    label: "ORCID",          url: "https://orcid.org/0009-0004-1752-3171" },
        { key: "linkedin", label: "LinkedIn",        url: "https://www.linkedin.com/in/rahaf-al-zeer-7093391ba" },
        { key: "email",    label: "Email",           url: "mailto:rahaf@gmu.ac.ae" }
    ],

    // ── Home page bio ─────────────────────────────────────────────
    bio: {
        short: "Pharmacist and MSc candidate at Gulf Medical University (CGPA 3.9/4.0), investigating the repurposing of Aprocitentan as an anticancer agent in pancreatic and breast cancer models.",
        long:  "I'm finishing my Master's in Drug Discovery &amp; Development, and honestly this journey has taught me as much about resilience as it has about science. The failed trials, the repeated experiments, the unexpected readings — and those small moments where everything finally starts to make sense. Alhamdulillah for every one of them. My research sits at the intersection of molecular pharmacology, drug repurposing, and nanomedicine. I'm also a proud AACR member and I lead the student mentorship programme at GMU's Student Happiness Centre. I'm actively seeking PhD opportunities at the interface of molecular pharmacology, targeted drug delivery, and cancer biology."
    },

    // ── Quick-stat chips shown in hero ────────────────────────────
    chips: [
        { label: "6 Publications" },
        { label: "2 First-Authored" },
        { label: "AACR Member", variant: "gold" },
        { label: "MSc Candidate · GMU" },
        { label: "Open to PhD Positions" }
    ],

    // ── Per-page lede text ────────────────────────────────────────
    ledes: {
        about:        "Pharmacist, educator, and researcher specialising in cancer pharmacology, drug repurposing, and nanomedicine.",
        projects:     "Active and completed research across drug repurposing, nano-vesicle formulation, qualitative pharmacy research, and cancer pharmacology.",
        publications: "Six peer-reviewed works spanning molecular pharmacology, nanomedicine, and clinical pharmacy — updated automatically from Google Scholar.",
        blog:         "Reflections on research life, science, and pharmacy education."
    },

    // ── About page ────────────────────────────────────────────────
    about: {
        paragraphs: [
            "I hold a <strong>Bachelor of Pharmacy from Dubai Medical University</strong> (CGPA 3.71/4.0) and I am currently completing my <strong>MSc in Drug Discovery &amp; Development at Gulf Medical University</strong> (CGPA 3.9/4.0), with my thesis defence expected in July 2026. My thesis investigates the repurposing of <em>Aprocitentan</em> — a licensed endothelin receptor antagonist — as a potential anticancer agent, evaluated across pancreatic and breast cancer cell models using in vitro pharmacological and molecular biology methods.",
            "As a <strong>Graduate Teaching Assistant</strong> at GMU's Department of Pharmaceutical Sciences, I deliver pharmacology lectures and practical sessions for undergraduate and diploma pharmacy programmes, with expert-level instruction in sterile compounding, cell culture, ELISA, Western blotting, qPCR, and MTT assays. I also design assessments and provide individual student mentoring.",
            "My wider research experience includes a part-time Research Assistant role at the <strong>University of Sharjah</strong> (nanomedicine and drug delivery) and a research training visit to <strong>Al-Zaytoonah University of Jordan</strong> supervised by Dr. Mohammad Alwahsh, where I developed core molecular biology skills that I apply daily in my thesis work. I am also a member of the <strong>American Association for Cancer Research (AACR)</strong> and I lead the university-wide student mentorship programme at GMU's Student Happiness Centre."
        ],

        timeline: [
            { date: "2020 – 2024",          title: "Bachelor of Pharmacy (B.Pharm)",              desc: "Dubai Medical University, Dubai, UAE · CGPA 3.71/4.0 — Excellent." },
            { date: "Jul 2023",             title: "Research Training Visitor",                    desc: "Al-Zaytoonah University of Jordan · Supervised by Dr. Mohammad Alwahsh · qPCR, RNA extraction, cell culture." },
            { date: "May 2024 – Jan 2025",  title: "Research Assistant (Part-Time)",               desc: "University of Sharjah, UAE · Nanomedicine, drug delivery, pharmacological screening." },
            { date: "Aug 2024 – Present",   title: "Graduate Teaching Assistant",                  desc: "Department of Pharmaceutical Sciences, Gulf Medical University · Pharmacology, sterile compounding, biomedical assays.", state: "current" },
            { date: "Aug 2024 – Present",   title: "Programme Leader, Mentorship Programme",       desc: "Student Happiness Centre, Gulf Medical University · University-wide student mentorship initiative.", state: "current" },
            { date: "2024 – Jul 2026",      title: "MSc — Drug Discovery &amp; Development",        desc: "Gulf Medical University, Ajman · CGPA 3.9/4.0 · Defence: July 2026, Inshallah.", state: "current" },
            { date: "Feb 2026",             title: "🥇 1st Place — Oral Presentation",             desc: "4th Al Ain University Postgraduate Symposium, Abu Dhabi · Public Health &amp; Biomedical Sciences.", state: "current" },
            { date: "Next · PhD",           title: "Actively seeking a position",                  desc: "Molecular pharmacology × targeted drug delivery × translational cancer biology — open to strong groups worldwide.", state: "future" }
        ],

        pillars: [
            { icon: "flask",    title: "Molecular Pharmacology",      desc: "Receptor biology, endothelin signalling, drug–target interaction studies, in vitro cancer modelling with MTT, SRB, and Western blotting." },
            { icon: "molecule", title: "Nanomedicine &amp; Drug Delivery", desc: "Nano-vesicle formulation, pro-bilosomes, zeta-sizer characterisation, LC-MS, freeze-drying, and bioavailability enhancement." },
            { icon: "network",  title: "Drug Repurposing",             desc: "Repositioning licensed agents — particularly endothelin receptor antagonists — as candidates in oncology." },
            { icon: "document", title: "Pharmacy Education",           desc: "Undergraduate and diploma teaching, assessment design, and student mentorship at Gulf Medical University." }
        ],

        awards: [
            { icon: "🥇", title: "1st Place — Oral Presentation (Public Health &amp; Biomedical Sciences)", venue: "4th Al Ain University Postgraduate Symposium, Abu Dhabi · Feb 2026" },
            { icon: "🥈", title: "2nd Place — Best Poster Presentation",                                    venue: "9th International Conference of Pharmacy and Medicine (ICPM 2024), Dubai · Feb 2024" },
            { icon: "🔬", title: "AACR Member",                                                              venue: "American Association for Cancer Research · Active member, cancer research track" }
        ]
    },

    // ── Projects ──────────────────────────────────────────────────
    projects: [
        {
            n: "01",
            label: "Drug Repurposing · Cancer",
            title: "Repurposing Aprocitentan as a Potential Anticancer Agent",
            desc:  "MSc thesis investigating Aprocitentan — a licensed endothelin receptor antagonist — for anticancer activity in pancreatic and breast cancer models. Assays include MTT, SRB cytotoxicity, Western blotting, and qPCR targeting ET-A and ET-B receptor pathways.",
            tech:  ["Cell Culture", "MTT / SRB Assays", "Western Blotting", "qPCR", "Endothelin Receptors"],
            status: "Active — MSc thesis · Defence July 2026",
            statusKind: "active",
            needs: "Open to collaboration with oncology or pharmacology groups."
        },
        {
            n: "02",
            label: "Nanomedicine · Bioavailability",
            title: "Oral Delivery of Quercetin via Pro-Bilosomes",
            desc:  "Nano-vesicle formulation designed to enhance the oral bioavailability of quercetin. Contributions include research design, formulation development, physicochemical characterisation (zeta-sizer), data analysis, and manuscript write-up.",
            tech:  ["Nano-vesicle Formulation", "Zeta-Sizer", "Quercetin", "Bioavailability"],
            status: "Submitted for Publication",
            statusKind: "review"
        },
        {
            n: "03",
            label: "Public Health · UAE",
            title: "Awareness and Views towards Aesthetic Treatment in the UAE",
            desc:  "First-authored cross-sectional study examining public awareness of and attitudes towards aesthetic treatments in the UAE. Design, data collection, SPSS analysis, and full manuscript write-up.",
            tech:  ["Questionnaire Design", "SPSS", "Descriptive Statistics", "UAE Public Health"],
            status: "Submitted for Publication",
            statusKind: "review"
        },
        {
            n: "04",
            label: "Public Health · Pharmacy",
            title: "Pharmacist Barriers to Promoting Medication Disposal in the UAE",
            desc:  "Multi-centre study on pharmacist views and barriers to promoting the safe disposal of unwanted medications. Published in BMC Public Health.",
            tech:  ["Survey Research", "SPSS", "Public Health Policy"],
            status: "Published · BMC Public Health · 2025",
            statusKind: "published"
        },
        {
            n: "05",
            label: "Qualitative · Cardiology",
            title: "Physicians' Perception towards Sacubitril/Valsartan: A Qualitative Study",
            desc:  "First-authored qualitative study using thematic analysis of semi-structured physician interviews on prescribing attitudes towards sacubitril/valsartan in heart failure management.",
            tech:  ["Qualitative Research", "Thematic Analysis", "Cardiology", "Interview Design"],
            status: "Manuscript in Preparation",
            statusKind: "draft"
        }
    ],

    // ── Blog posts ────────────────────────────────────────────────
    blog: [],

    // ── Footer ────────────────────────────────────────────────────
    footer: {
        copyrightYear: 2026,
        tagline: "Part of the Scholarly Bright Minds hub.",
        credits: "Built with the ScholarlyBrightMinds academic template."
    }
};

// ═══════════════════════════════════════════════════════════════════
//  APPLY PALETTE TO CSS VARIABLES (runs on every page, before render)
// ═══════════════════════════════════════════════════════════════════
(function applyPalette() {
    const P = window.SITE_CONFIG.palette;
    const root = document.documentElement;

    function setMode(mode) {
        const p = P[mode];
        Object.entries(p).forEach(([k, v]) => {
            const cssVar = '--' + k.replace(/([A-Z])/g, '-$1').toLowerCase();
            root.style.setProperty(cssVar, v);
        });
    }

    let theme = null;
    try { theme = localStorage.getItem('sbm-theme'); } catch (e) {}
    if (!theme) {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme = prefersDark ? 'dark' : 'dark';   // default dark
    }
    root.setAttribute('data-theme', theme);
    setMode(theme);

    window.__applyTheme = function(mode) {
        root.setAttribute('data-theme', mode);
        setMode(mode);
        try { localStorage.setItem('sbm-theme', mode); } catch (e) {}
        const hL = document.getElementById('hljs-light');
        const hD = document.getElementById('hljs-dark');
        if (hL && hD) {
            hL.disabled = (mode === 'dark');
            hD.disabled = (mode !== 'dark');
        }
    };
})();
