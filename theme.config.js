// ═══════════════════════════════════════════════════════════════════
//  theme.config.js, Rahaf Adnan Al-Zeer
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
        tagline:   "Molecular pharmacology, drug repurposing &amp; nanomedicine. Investigating endothelin receptor antagonists as anticancer agents.",
        location:  "Ajman, UAE",
        status:    "completing MSc thesis on endothelin receptor antagonism in cancer · defence July 2026 · seeking PhD opportunities",
        photo:     "images/profile.png",
        affiliation: {
            name: "Gulf Medical University",
            url:  "https://www.gmu.ac.ae",
            role: "Graduate Teaching Assistant &amp; MSc Candidate"
        }
    },

    // ── Palette ───────────────────────────────────────────────────
    // Garnet rose. Dark mode: warm near-black with a luminous rose accent.
    // Light mode: warm ivory with a deep burgundy accent. Gold stays the
    // award color. Applied to CSS variables at runtime by the applier below.
    palette: {
        name: "rose",
        // Dark mode (default)
        dark: {
            bg:          "#1A1114",
            bgSoft:      "#211519",
            bgDeep:      "#130B0E",
            card:        "#231519",
            cardSoft:    "#1E1216",
            text:        "#F4E9E4",
            textSoft:    "#C8A9A5",
            muted:       "#99787E",
            border:      "#3B252B",
            borderS:     "#2C1B20",
            accent:      "#E7929F",
            accentD:     "#F2B2BB",
            accentBg:    "rgba(231,146,159,0.10)",
            accentGlow:  "rgba(231,146,159,0.22)",
            amber:       "#D9A85C",
            amberBg:     "rgba(217,168,92,0.10)",
            amberGlow:   "rgba(217,168,92,0.22)",
            wine:        "#7C2F44",
            halo:        "rgba(231,146,159,0.06)"
        },
        // Light mode
        light: {
            bg:          "#FBF4EE",
            bgSoft:      "#F5EAE3",
            bgDeep:      "#EFE1D9",
            card:        "#FEFBF7",
            cardSoft:    "#F7EDE7",
            text:        "#2E1A20",
            textSoft:    "#6B4A51",
            muted:       "#876670",
            border:      "#E6D3CC",
            borderS:     "#EFE0DA",
            accent:      "#8E2F47",
            accentD:     "#6B2036",
            accentBg:    "rgba(142,47,71,0.08)",
            accentGlow:  "rgba(142,47,71,0.16)",
            amber:       "#996414",
            amberBg:     "rgba(153,100,20,0.10)",
            amberGlow:   "rgba(153,100,20,0.18)",
            wine:        "#7C2440",
            halo:        "rgba(142,47,71,0.05)"
        }
    },

    // ── IDs (external profiles) ───────────────────────────────────
    ids: {
        scholar: "uy-28F0AAAAJ",
        orcid:   "0009-0004-1752-3171",
        linkedin: "rahaf-al-zeer-7093391ba",
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
        long:  "I'm finishing my Master's in Drug Discovery &amp; Development, and this journey has taught me as much about resilience as it has about science. The failed trials, the repeated experiments, the unexpected readings, and those small moments where everything finally starts to make sense. Alhamdulillah for every one of them. My research sits at the intersection of molecular pharmacology, drug repurposing, and nanomedicine. I'm also a proud AACR member and I lead the student mentorship programme at GMU's Student Happiness Centre. I'm actively seeking PhD opportunities at the interface of molecular pharmacology, targeted drug delivery, and cancer biology."
    },

    // ── Quick-stat chips shown in hero ────────────────────────────
    // First 5 shown. `variant: 'gold'` uses amber color instead of accent.
    // Chips with hard-coded metrics are kept as fallback only. The build_html.py
    // step in the SerpApi workflow replaces the first chip with live numbers
    // (e.g., "1 Publication · 15 Citations") right before each commit.
    chips: [
        { label: "4 Publications · 54 Citations" },
        { label: "h-index 2" },
        { label: "🥇 1st Place Oral · AAU 2026", variant: "gold" },
        { label: "AACR Member" },
        { label: "MSc Defence · July 2026" }
    ],

    // ── Per-page lede text ────────────────────────────────────────
    ledes: {
        about:        "Pharmacist, educator, and researcher specialising in cancer pharmacology, drug repurposing, and nanomedicine.",
        projects:     "Active and completed research across drug repurposing, nano-vesicle formulation, qualitative pharmacy research, and cancer pharmacology.",
        publications: "Peer-reviewed work spanning molecular pharmacology, nanomedicine, and clinical pharmacy. Updated automatically from Google Scholar.",
        blog:         "Reflections on research life, science, and pharmacy education.",
        talks:        "Oral presentations, posters, and the upcoming MSc thesis defence. Awards and conference appearances across pharmacy and biomedical sciences.",
        contact:      "The fastest way to reach me. Below the form there is a short note for PhD supervisors, research collaborators, and journalists.",
        research:     "The longer version of the research I do, the questions I want to answer, and where I would like to take this next. Written with PhD supervisors in mind.",
        arc:          "The longer story of how I got from pharmacy at DMU to molecular pharmacology and drug repurposing research at GMU, told as a sequence of moments rather than a CV."
    },

    // ── Scrollytelling research arc (rendered on arc.html) ───────
    // Five chapters, sticky-scroll. Frame IDs: origin | sieve | editorial |
    // network | horizon (the stock SVGs in arc.html).
    arc: {
        kicker: "Research arc",
        h1Front: "From the dispensary bench to",
        h1Accent: "molecular pharmacology",
        intro: "The research statement is the short version. This page is the long way around. Five chapters, in order, told as a sequence of moments rather than a CV. Scroll at your own pace.",
        chapters: [
            {
                key: "origin",
                frame: "origin",
                kicker: "Chapter 1 · 2020 to 2024",
                title: "Pharmacy at Dubai Medical, with a question I could not let go of.",
                body: [
                    "I did my BPharm at Dubai Medical University and graduated with a CGPA of 3.71 on 4.0. Most of the degree was downstream of where I find the interesting questions. Five years made me comfortable around drugs as objects, around the language of chemistry, pharmacology, and clinical reasoning. The question that kept following me was a step upstream.",
                    "Why do some receptor systems sit untouched in oncology when the same target families are clearly active in tumour biology? Why is it so hard to take a molecule that works for one disease and ask honestly whether it might work for another? That question is what eventually pulled me into drug repurposing and molecular pharmacology."
                ],
                milestone: {
                    label: "BPharm · CGPA 3.71",
                    sub: "Dubai Medical University, 2020 to 2024"
                }
            },
            {
                key: "msc",
                frame: "sieve",
                kicker: "Chapter 2 · 2024 to 2026",
                title: "Starting an MSc, and the Aprocitentan question.",
                body: [
                    "I started the MSc in Drug Discovery and Development at Gulf Medical University in 2024. The thesis brief was clear and stubborn at the same time. Endothelin receptor signalling is well established in cardiovascular pharmacology and increasingly implicated in tumour biology. Aprocitentan is a licensed dual endothelin receptor antagonist already approved for hypertension. The question was whether the same blockade could be repurposed against pancreatic and breast cancer cell models.",
                    "We built the project around in vitro pharmacology. MTT and SRB cytotoxicity assays, ELISA, Western blotting, qPCR, and cell culture across multiple cancer lines. None of that was new to anyone in the field. Doing it carefully and honestly in a repurposing context is what makes it useful."
                ],
                milestone: {
                    label: "MSc · CGPA 3.9",
                    sub: "Aprocitentan repurposing in pancreatic and breast cancer models"
                }
            },
            {
                key: "editorial",
                frame: "editorial",
                kicker: "Chapter 3 · 2024 to present",
                title: "Teaching pharmacology while doing it.",
                body: [
                    "Since August 2024 I have been a Graduate Teaching Assistant in the Department of Pharmaceutical Sciences at GMU. I deliver pharmacology lectures and practical sessions for undergraduate and diploma pharmacy programmes, with hands-on instruction in sterile compounding, cell culture, ELISA, Western blotting, qPCR, and MTT assays.",
                    "I also design assessments and provide individual student mentoring. In parallel I lead the university-wide student mentorship programme at GMU's Student Happiness Centre. Teaching the same techniques I use in my thesis is the most useful pressure test I have found for whether I actually understand them.",
                    "Earlier rotations at Al-Zaytoonah University of Jordan under Dr. Mohammad Alwahsh and a part-time research role at the University of Sharjah in nanomedicine and drug delivery gave me the molecular biology and formulation skills I lean on every week."
                ],
                milestone: {
                    label: "Graduate Teaching Assistant · GMU",
                    sub: "Pharmacology lectures and biomedical assay practicals"
                }
            },
            {
                key: "now",
                frame: "network",
                kicker: "Chapter 4 · 2025 to 2026",
                title: "Thesis defence approaching, conference circuit underway.",
                body: [
                    "Most of the last year has gone into the thesis itself. The cell models, the dose-response work, the receptor-pathway readouts, and the writing. The conference side has been good. First place in the oral presentation category (Public Health and Biomedical Sciences) at the 4th Al Ain University Postgraduate Symposium in early 2026, and second place poster at the 9th International Conference of Pharmacy and Medicine in Dubai in 2024.",
                    "I am an active member of the American Association for Cancer Research, and I am submitting the thesis work to oncology-focused journals as I write. The defence is scheduled for July 2026, inshallah.",
                    "Two threads I am pulling on now besides the thesis. Drug repurposing as a methodological approach, where I want to be careful about what kinds of claims a licensed-drug pivot can and cannot support. And nanomedicine, where the pro-bilosome work with quercetin gave me an entry point into oral bioavailability enhancement."
                ],
                milestone: {
                    label: "1st Place Oral · AAU 2026",
                    sub: "Public Health and Biomedical Sciences · MSc thesis work"
                }
            },
            {
                key: "next",
                frame: "horizon",
                kicker: "Chapter 5 · The PhD",
                title: "What I want a PhD to look like.",
                body: [
                    "I am applying for PhD positions starting late 2026 or early 2027, in groups working on molecular pharmacology, drug repurposing, targeted drug delivery, or translational cancer biology. Strong methods groups everywhere are on the list, including UK, EU, North America, and well-resourced Gulf programmes.",
                    "The shape I am looking for. A supervisor with a clear translational direction. A problem where receptor biology, pharmacology, and oncology overlap in a meaningful way. Wet-lab access I can use daily. And the freedom to learn the computational and cheminformatic side of drug discovery alongside the bench work.",
                    "If any of that fits your group, the fastest way to start a conversation is to email me. I reply within 48 hours."
                ],
                milestone: {
                    label: "Open for PhD · 2026 or 2027 start",
                    sub: "Molecular pharmacology · drug repurposing · cancer biology",
                    href: "mailto:rahaf@gmu.ac.ae?subject=PhD%20position%20enquiry"
                }
            }
        ]
    },


    // ── "By the numbers" impact tiles (home page) ────────────────
    // Each tile is one number + label + sub-line; first tile auto-updates
    // via build_html.py from the weekly SerpApi pull (see numLiveSource).
    impactStats: [
        { num: "4",     label: "Publications",     sub: "peer-reviewed and indexed",                  numLiveSource: "total_documents" },
        { num: "47",    label: "Citations",        sub: "across all work",                            numLiveSource: "total_citations" },
        { num: "h=2",   label: "h-index",          sub: "sustained impact" },
        { num: "🥇",    label: "1st Place Oral",   sub: "AAU Postgraduate Symposium · 2026",          variant: "gold" },
        { num: "Jul",   label: "MSc Defence",      sub: "scheduled July 2026, inshallah" }
    ],

    // ── About page ────────────────────────────────────────────────
    about: {
        paragraphs: [
            "I hold a <strong>Bachelor of Pharmacy from Dubai Medical University</strong> (CGPA 3.71/4.0) and I am currently completing my <strong>MSc in Drug Discovery &amp; Development at Gulf Medical University</strong> (CGPA 3.9/4.0), with my thesis defence expected in July 2026. My thesis investigates the repurposing of <em>Aprocitentan</em>, a licensed endothelin receptor antagonist, as a potential anticancer agent, evaluated across pancreatic and breast cancer cell models using in vitro pharmacological and molecular biology methods.",
            "As a <strong>Graduate Teaching Assistant</strong> at GMU's Department of Pharmaceutical Sciences, I deliver pharmacology lectures and practical sessions for undergraduate and diploma pharmacy programmes, with expert-level instruction in sterile compounding, cell culture, ELISA, Western blotting, qPCR, and MTT assays. I also design assessments and provide individual student mentoring.",
            "My wider research experience includes a part-time Research Assistant role at the <strong>University of Sharjah</strong> (nanomedicine and drug delivery) and a research training visit to <strong>Al-Zaytoonah University of Jordan</strong> supervised by Dr. Mohammad Alwahsh, where I developed core molecular biology skills that I apply daily in my thesis work. I am also a member of the <strong>American Association for Cancer Research (AACR)</strong> and I lead the university-wide student mentorship programme at GMU's Student Happiness Centre."
        ],

        timeline: [
            { date: "2020 to 2024",          title: "Bachelor of Pharmacy (B.Pharm)",              desc: "Dubai Medical University, Dubai, UAE · CGPA 3.71/4.0, Excellent." },
            { date: "Jul 2023",              title: "Research Training Visitor",                    desc: "Al-Zaytoonah University of Jordan · supervised by Dr. Mohammad Alwahsh · qPCR, RNA extraction, cell culture." },
            { date: "May 2024 to Jan 2025",  title: "Research Assistant (Part-Time)",               desc: "University of Sharjah, UAE · nanomedicine, drug delivery, pharmacological screening." },
            { date: "Aug 2024 to Present",   title: "Graduate Teaching Assistant",                  desc: "Department of Pharmaceutical Sciences, Gulf Medical University · pharmacology, sterile compounding, biomedical assays.", state: "current" },
            { date: "Aug 2024 to Present",   title: "Programme Leader, Mentorship Programme",       desc: "Student Happiness Centre, Gulf Medical University · university-wide student mentorship initiative.", state: "current" },
            { date: "2024 to Jul 2026",      title: "MSc in Drug Discovery &amp; Development",      desc: "Gulf Medical University, Ajman · CGPA 3.9/4.0 · Defence: July 2026, inshallah.", state: "current" },
            { date: "Feb 2026",             title: "🥇 1st Place, Oral Presentation",              desc: "4th Al Ain University Postgraduate Symposium, Abu Dhabi · Public Health &amp; Biomedical Sciences.", state: "current" },
            { date: "Next · PhD",           title: "Actively seeking a position",                  desc: "Molecular pharmacology, targeted drug delivery, translational cancer biology. Open to strong groups worldwide.", state: "future" }
        ],

        pillars: [
            { icon: "flask",    title: "Molecular Pharmacology",      desc: "Receptor biology, endothelin signalling, drug-target interaction studies, in vitro cancer modelling with MTT, SRB, and Western blotting." },
            { icon: "molecule", title: "Nanomedicine &amp; Drug Delivery", desc: "Nano-vesicle formulation, pro-bilosomes, zeta-sizer characterisation, LC-MS, freeze-drying, and bioavailability enhancement." },
            { icon: "network",  title: "Drug Repurposing",             desc: "Repositioning licensed agents, particularly endothelin receptor antagonists, as candidates in oncology." }
        ],

        awards: [
            { icon: "🥇", title: "1st Place, Oral Presentation (Public Health &amp; Biomedical Sciences)", venue: "4th Al Ain University Postgraduate Symposium, Abu Dhabi · Feb 2026" },
            { icon: "🥈", title: "2nd Place, Best Poster Presentation",                                    venue: "9th International Conference of Pharmacy and Medicine (ICPM 2024), Dubai · Feb 2024" },
            { icon: "🔬", title: "AACR Member",                                                            venue: "American Association for Cancer Research · active member, cancer research track" }
        ]
    },

    // ── Projects ──────────────────────────────────────────────────
    // statusKind: 'active' | 'review' | 'published' | 'draft'
    // A "Want to collaborate?" button is added to every card automatically.
    projects: [
        {
            n: "01",
            label: "Drug Repurposing · Cancer",
            title: "Repurposing Aprocitentan as a Potential Anticancer Agent",
            desc:  "MSc thesis investigating Aprocitentan, a licensed endothelin receptor antagonist, for anticancer activity in pancreatic and breast cancer models. Assays include MTT, SRB cytotoxicity, Western blotting, and qPCR targeting ET-A and ET-B receptor pathways.",
            tech:  ["Cell Culture", "MTT / SRB Assays", "Western Blotting", "qPCR", "Endothelin Receptors"],
            status: "Active · MSc thesis · Defence July 2026",
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
            statusKind: "published",
            doi:   "10.1186/s12889-025-21332-3",
            venue: "BMC Public Health"
        },
        {
            n: "05",
            label: "Review · Alzheimer's",
            title: "Antiamyloid Therapy for Alzheimer's Disease",
            desc:  "Comprehensive review on advances and challenges in antiamyloid therapy for Alzheimer's disease. Co-authored review covering clinical trial outcomes, mechanism, and regulatory shifts.",
            tech:  ["Literature Review", "Antiamyloid Therapy", "Neuropharmacology"],
            status: "Published · International Journal of Alzheimer's Disease · 2024",
            statusKind: "published",
            doi:   "10.1155/2024/2052142",
            venue: "International Journal of Alzheimer's Disease"
        },
        {
            n: "06",
            label: "Qualitative · Cardiology",
            title: "Physicians' Perception towards Sacubitril/Valsartan: A Qualitative Study",
            desc:  "First-authored qualitative study using thematic analysis of semi-structured physician interviews on prescribing attitudes towards sacubitril/valsartan in heart failure management.",
            tech:  ["Qualitative Research", "Thematic Analysis", "Cardiology", "Interview Design"],
            status: "Manuscript in Preparation",
            statusKind: "draft"
        }
    ],

    // ── Talks, posters, presentations ─────────────────────────────
    // Newest first. `kind`: 'hackathon' | 'poster' | 'talk' | 'workshop' | 'thesis'
    // `award` is a string when there is a prize; omit otherwise.
    talks: [
        {
            date: "Jul 2026",
            year: 2026,
            kind: "thesis",
            title: "MSc Thesis Defence (scheduled) · Repurposing Aprocitentan in Cancer",
            venue: "Gulf Medical University, College of Pharmacy · Ajman, UAE",
            desc:  "Public defence of the MSc thesis investigating Aprocitentan as a potential anticancer agent in pancreatic and breast cancer models. Co-supervised within the Department of Pharmaceutical Sciences. Date confirmed for July 2026, inshallah."
        },
        {
            date: "Feb 2026",
            year: 2026,
            kind: "talk",
            title: "Oral Presentation · Endothelin Receptor Antagonism as a Repurposing Strategy",
            venue: "4th Al Ain University Postgraduate Symposium · Abu Dhabi",
            award: "1st place 🥇",
            desc:  "Oral presentation in the Public Health and Biomedical Sciences track, summarising the rationale and early in vitro results from the Aprocitentan repurposing thesis. Awarded first place across the category."
        },
        {
            date: "Feb 2024",
            year: 2024,
            kind: "poster",
            title: "Poster · Oral Delivery of Quercetin via Pro-Bilosomes",
            venue: "9th International Conference of Pharmacy and Medicine (ICPM 2024) · Dubai",
            award: "2nd place 🥈",
            desc:  "Poster on the pro-bilosome formulation strategy for enhancing oral bioavailability of quercetin, covering formulation design, zeta-sizer characterisation, and in vitro release. Awarded second place in the best poster category."
        }
    ],

    // ── Research statement / vision (research.html) ──────────────
    // Each block becomes its own card-style section. Keep the
    // narrative load-bearing, supervisors actually read this.
    research: {
        kicker: "Research statement",
        h1Front:  "Where I want to take",
        h1Accent: "this next",
        intro: "I want to spend the next stretch of my career using molecular pharmacology and drug repurposing to widen the set of options available in oncology, and using the bench work I run every day to keep those claims honest. The sections below describe how that focus formed, what I work on now, and what a PhD with me would look like.",
        sections: [
            {
                kicker: "Origin",
                title: "From the pharmacy bench to the pharmacology lab",
                body: [
                    "I trained as a pharmacist, five years at Dubai Medical University covering medicinal chemistry, pharmacokinetics, formulation, and a very long pharmacology lab block. Most of that time I assumed I would end up dispensing or in industry. The shift happened during a research training visit to Al-Zaytoonah University of Jordan, where Dr. <strong>Mohammad Alwahsh</strong> introduced me to qPCR, RNA extraction, and the discipline of running cell-culture experiments where the controls actually matter.",
                    "By the time I came back to the UAE I had the answer to a question I had been carrying for two years. I wanted to do receptor pharmacology, in cell models, with hands clean of the assumption that approved drugs only do what their labels say."
                ]
            },
            {
                kicker: "MSc thesis",
                title: "The Aprocitentan question",
                body: [
                    "My MSc thesis at Gulf Medical University, in the Drug Discovery and Development programme, investigates the repurposing of <em>Aprocitentan</em> as a potential anticancer agent. Aprocitentan is a licensed dual endothelin receptor antagonist already in clinical use for resistant hypertension. The hypothesis is straightforward and the literature is honest about the gap. Endothelin receptors are well documented in pancreatic and breast cancer biology, but the translational case for blocking them with an already-approved drug has not been worked through carefully.",
                    "The thesis uses in vitro pharmacology to ask that question. MTT and SRB cytotoxicity across pancreatic and breast cancer cell lines, Western blotting for ET-A and ET-B receptor expression and downstream signalling, qPCR for transcriptional readouts, and ELISA where the protein-level question matters. The defence is in July 2026."
                ]
            },
            {
                kicker: "What I have learned",
                title: "Three lessons I will not give up",
                body: [
                    "<strong>1. Repurposing is a methodological discipline, not a shortcut.</strong> The temptation in a repurposing project is to dose your favourite cell line, watch something die, and call it a hit. That is not science. I spend most of my time on dose-response design, vehicle controls, and reading the receptor-pharmacology literature carefully enough to know what a negative result would even look like.",
                    "<strong>2. Teach what you do.</strong> Since August 2024 I have been a Graduate Teaching Assistant at GMU, running pharmacology lectures and practical sessions in sterile compounding, cell culture, ELISA, Western blotting, qPCR, and MTT. Teaching the same techniques I use in my thesis is the most useful pressure test I have found for whether I actually understand them.",
                    "<strong>3. Work where the molecular and clinical sit next to each other.</strong> My published output so far reads as a mix of bench, formulation, and public-health pharmacy work, and that is by design. I am not interested in research that only lives at one level of resolution."
                ]
            },
            {
                kicker: "Current focus",
                title: "Three threads I am pulling on now",
                body: [
                    "<strong>Endothelin receptor antagonism in oncology.</strong> The thesis itself, with the defence in July 2026. The receptor biology, the cell-line work, the writing, and the conference circuit around it.",
                    "<strong>Nanomedicine and oral bioavailability.</strong> The pro-bilosome quercetin project at the University of Sharjah is currently under review. It taught me formulation, zeta-sizer characterisation, and how to translate a bench-stable nanocarrier into an oral candidate.",
                    "<strong>Translational pharmacy research.</strong> First-authored qualitative work on physician prescribing of sacubitril/valsartan, and contributing work on pharmacist barriers to safe medication disposal (BMC Public Health, 2025). I want to keep this thread alive into the PhD, because the clinical end of the pipeline is where the molecular pharmacology eventually has to land."
                ]
            },
            {
                kicker: "PhD vision",
                title: "What a PhD with me would look like",
                body: [
                    "I am looking for a PhD starting late 2026 or early 2027 in a group working on <em>any</em> of: molecular pharmacology of receptor systems in cancer, drug repurposing of licensed agents, targeted drug delivery and nanomedicine, translational oncology, or pharmacology-driven ADMET.",
                    "The shape I want is: three to four first-author publications, at least one on the receptor-pharmacology side of cancer biology; deep technical chops in either in vitro pharmacology or formulation-driven drug delivery; and at least one wet-lab collaboration with a clinical group so the work stays grounded.",
                    "What I bring to a PhD group: a BPharm with a 3.71 CGPA, an MSc with a 3.9 CGPA and a thesis defence already scheduled, two years of teaching pharmacology and supervising laboratory practicals, first-place oral and second-place poster awards at regional conferences, AACR membership, and a working hand at MTT, SRB, ELISA, Western blotting, qPCR, cell culture, and sterile compounding."
                ]
            },
            {
                kicker: "If we should talk",
                title: "Reasons to email me",
                body: [
                    "If you supervise a group working on receptor pharmacology in oncology, on drug repurposing as a serious methodological programme, on nanomedicine for targeted delivery, or on translational cancer biology more broadly, I would like to hear from you. Even a 20-minute Zoom about whether we would be a fit is worth it.",
                    "I am also happy to be told my framing is off. PhD applicants who already know exactly what they will work on are usually wrong. I have a direction and a habit of working hard. The right group will sharpen the rest."
                ]
            }
        ],
        finalCTAText: "Email Rahaf →",
        finalCTAHref: "mailto:rahaf@gmu.ac.ae?subject=PhD%20position%20enquiry&body=Hi%20Rahaf%2C%0A%0AI%20saw%20your%20research%20statement%20and%20wanted%20to%20discuss%20a%20PhD%20opportunity%20in%20our%20group.%0A%0A"
    },

    // ── Contact page (contact.html) ───────────────────────────────
    // formAction = a Formspree endpoint. Will need to be created at
    // formspree.io (free tier ok) before the form actually delivers mail.
    // Until then the page still works for direct email + LinkedIn.
    contact: {
        kicker: "Get in touch",
        h1Front:  "Let's",
        h1Accent: "talk",
        intro: "I read every email. Below the form there are short notes for PhD supervisors, research collaborators, and journalists, plus the direct ways to reach me.",
        formAction: "https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID",
        formNote: "Contact form pending Formspree endpoint. Email directly via the link below until it is wired up.",
        directEmail: "rahaf@gmu.ac.ae",
        cvHref: "",
        blocks: [
            {
                icon: "🎓",
                title: "PhD supervisors",
                body:  "Looking to start late 2026 or early 2027. Interested in molecular pharmacology of receptor systems in cancer, drug repurposing, targeted drug delivery and nanomedicine, and translational oncology. I will respond within 48 hours and can send the long-form research statement, a transcript, and a CV on request."
            },
            {
                icon: "🤝",
                title: "Collaborators",
                body:  "Open to collaborations on in vitro pharmacology in cancer cell models, nano-vesicle formulation, qualitative pharmacy research, and translational oncology. If you have a project that needs the assay stack I run (MTT, SRB, Western blot, qPCR, ELISA, cell culture), please get in touch. See the <a href=\"projects.html\">Ongoing Research</a> page for what is currently active."
            },
            {
                icon: "✉️",
                title: "Journalists &amp; podcasts",
                body:  "Happy to talk about drug repurposing as a methodology, what it actually takes to do molecular pharmacology research in the UAE, and the pipeline from a BPharm to a research-track MSc in this region. Reach out via the form or directly by email."
            }
        ],
        responseTimeNote: "Usually within 48 hours, faster on weekdays in Gulf Standard Time."
    },

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
