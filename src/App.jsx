// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App
import { useState, useEffect, useRef } from "react";

// ── Styles injected once ──────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --ink:       #0d1117;
    --ink-soft:  #1c2333;
    --ink-muted: #30363d;
    --slate:     #58677a;
    --mist:      #8b949e;
    --border:    #21262d;
    --surface:   #161b22;
    --surface2:  #1c2333;
    --surface3:  #21262d;
    --gold:      #e3b341;
    --gold-dim:  #a07d1f;
    --teal:      #3fb950;
    --red:       #f85149;
    --blue:      #58a6ff;
    --accent:    #e3b341;
    --text:      #e6edf3;
    --text-muted:#8b949e;
    --radius:    10px;
    --shadow:    0 8px 32px rgba(0,0,0,0.4);
  }

  body { background: var(--ink); color: var(--text); font-family: 'Outfit', sans-serif; min-height: 100vh; }

  .grc-app {
    min-height: 100vh;
    background: var(--ink);
    position: relative;
    overflow-x: hidden;
  }

  /* grid bg */
  .grc-app::before {
    content: '';
    position: fixed; inset: 0;
    background-image:
      linear-gradient(var(--border) 1px, transparent 1px),
      linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 48px 48px;
    opacity: 0.35;
    pointer-events: none;
    z-index: 0;
  }

  .grc-inner { position: relative; z-index: 1; max-width: 860px; margin: 0 auto; padding: 0 24px 80px; }

  /* ── Header ── */
  .grc-header { padding: 48px 0 40px; text-align: center; }
  .grc-logo { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 20px; }
  .grc-logo-icon {
    width: 40px; height: 40px; border-radius: 8px;
    background: linear-gradient(135deg, var(--gold), var(--gold-dim));
    display: flex; align-items: center; justify-content: center;
    font-size: 20px; box-shadow: 0 0 24px rgba(227,179,65,0.3);
  }
  .grc-logo-text { font-family: 'DM Serif Display', serif; font-size: 28px; color: var(--text); letter-spacing: -0.5px; }
  .grc-tagline { font-size: 14px; color: var(--text-muted); letter-spacing: 2px; text-transform: uppercase; font-weight: 500; margin-top: 6px; }

  /* ── Progress ── */
  .grc-progress { margin-bottom: 36px; }
  .grc-progress-bar-wrap {
    height: 3px; background: var(--border); border-radius: 99px; overflow: hidden; margin-bottom: 16px;
  }
  .grc-progress-bar {
    height: 100%; border-radius: 99px;
    background: linear-gradient(90deg, var(--gold-dim), var(--gold));
    transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
    box-shadow: 0 0 12px rgba(227,179,65,0.5);
  }
  .grc-steps { display: flex; gap: 4px; justify-content: center; flex-wrap: wrap; }
  .grc-step-dot {
    width: 28px; height: 28px; border-radius: 50%; border: 2px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 600; font-family: 'DM Mono', monospace;
    color: var(--text-muted); transition: all 0.3s;
    cursor: default;
  }
  .grc-step-dot.active { border-color: var(--gold); color: var(--gold); background: rgba(227,179,65,0.08); box-shadow: 0 0 10px rgba(227,179,65,0.2); }
  .grc-step-dot.done { border-color: var(--teal); color: var(--ink); background: var(--teal); }

  /* ── Card ── */
  .grc-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 36px;
    box-shadow: var(--shadow);
    animation: fadeUp 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }

  .grc-card-header { margin-bottom: 28px; }
  .grc-step-label {
    font-family: 'DM Mono', monospace; font-size: 11px; color: var(--gold);
    letter-spacing: 2px; text-transform: uppercase; margin-bottom: 8px;
  }
  .grc-card-title { font-family: 'DM Serif Display', serif; font-size: 26px; color: var(--text); line-height: 1.2; margin-bottom: 6px; }
  .grc-card-desc { font-size: 14px; color: var(--text-muted); line-height: 1.6; }

  /* ── Form ── */
  .grc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
  .grc-grid-full { grid-column: 1 / -1; }
  .grc-field { display: flex; flex-direction: column; gap: 6px; }
  .grc-label { font-size: 12px; font-weight: 600; color: var(--text-muted); letter-spacing: 0.5px; text-transform: uppercase; }
  .grc-input, .grc-select, .grc-textarea {
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: var(--radius); color: var(--text);
    font-family: 'Outfit', sans-serif; font-size: 14px;
    padding: 10px 14px; transition: border-color 0.2s, box-shadow 0.2s;
    outline: none; width: 100%;
  }
  .grc-input:focus, .grc-select:focus, .grc-textarea:focus {
    border-color: var(--gold); box-shadow: 0 0 0 3px rgba(227,179,65,0.12);
  }
  .grc-select { appearance: none; cursor: pointer; }
  .grc-textarea { resize: vertical; min-height: 90px; line-height: 1.5; }
  .grc-input::placeholder, .grc-textarea::placeholder { color: var(--slate); }

  /* checkbox group */
  .grc-check-group { display: flex; flex-wrap: wrap; gap: 8px; }
  .grc-check-item {
    display: flex; align-items: center; gap: 7px;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 7px; padding: 7px 12px; cursor: pointer;
    transition: all 0.2s; font-size: 13px; user-select: none;
  }
  .grc-check-item:hover { border-color: var(--slate); }
  .grc-check-item.checked { border-color: var(--gold); background: rgba(227,179,65,0.07); color: var(--gold); }
  .grc-check-item.checked .grc-check-box { background: var(--gold); border-color: var(--gold); }
  .grc-check-box {
    width: 15px; height: 15px; border-radius: 4px; border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0; transition: all 0.2s;
  }
  .grc-check-tick { font-size: 10px; color: var(--ink); font-weight: 700; }

  /* risk slider */
  .grc-slider-wrap { display: flex; flex-direction: column; gap: 8px; }
  .grc-slider-labels { display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); }
  .grc-slider {
    -webkit-appearance: none; width: 100%; height: 4px;
    border-radius: 99px; background: var(--border); outline: none; cursor: pointer;
  }
  .grc-slider::-webkit-slider-thumb {
    -webkit-appearance: none; width: 18px; height: 18px;
    border-radius: 50%; background: var(--gold); cursor: pointer;
    box-shadow: 0 0 8px rgba(227,179,65,0.5);
  }
  .grc-slider-value { text-align: center; font-family: 'DM Mono', monospace; font-size: 13px; color: var(--gold); }

  /* tags input */
  .grc-tags-wrap { display: flex; flex-wrap: wrap; gap: 6px; align-items: center;
    background: var(--surface2); border: 1px solid var(--border); border-radius: var(--radius); padding: 8px; min-height: 44px; }
  .grc-tags-wrap:focus-within { border-color: var(--gold); box-shadow: 0 0 0 3px rgba(227,179,65,0.12); }
  .grc-tag {
    display: flex; align-items: center; gap: 5px;
    background: rgba(227,179,65,0.12); border: 1px solid rgba(227,179,65,0.3);
    border-radius: 6px; padding: 3px 8px; font-size: 12px; color: var(--gold);
  }
  .grc-tag-remove { cursor: pointer; font-size: 14px; line-height: 1; color: var(--gold-dim); }
  .grc-tag-remove:hover { color: var(--red); }
  .grc-tags-input {
    border: none; background: transparent; color: var(--text); font-family: 'Outfit', sans-serif;
    font-size: 14px; outline: none; flex: 1; min-width: 120px; padding: 2px 4px;
  }
  .grc-tags-hint { font-size: 11px; color: var(--text-muted); margin-top: 4px; }

  /* ── Buttons ── */
  .grc-actions { display: flex; justify-content: space-between; align-items: center; margin-top: 32px; }
  .grc-btn {
    padding: 11px 24px; border-radius: 9px; font-family: 'Outfit', sans-serif;
    font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.2s; border: none;
    display: flex; align-items: center; gap: 8px; letter-spacing: 0.2px;
  }
  .grc-btn-ghost {
    background: transparent; border: 1px solid var(--border); color: var(--text-muted);
  }
  .grc-btn-ghost:hover { border-color: var(--slate); color: var(--text); }
  .grc-btn-primary {
    background: linear-gradient(135deg, var(--gold), var(--gold-dim));
    color: var(--ink); box-shadow: 0 0 20px rgba(227,179,65,0.25);
  }
  .grc-btn-primary:hover { box-shadow: 0 0 28px rgba(227,179,65,0.4); transform: translateY(-1px); }
  .grc-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
  .grc-btn-danger { background: var(--red); color: white; }

  /* ── Review step ── */
  .grc-review-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .grc-review-section {
    background: var(--surface2); border: 1px solid var(--border); border-radius: 10px; padding: 16px;
  }
  .grc-review-section-title {
    font-size: 11px; font-weight: 600; color: var(--gold); letter-spacing: 1.5px;
    text-transform: uppercase; margin-bottom: 10px; display: flex; align-items: center; gap: 6px;
  }
  .grc-review-row { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 6px; font-size: 13px; }
  .grc-review-key { color: var(--text-muted); }
  .grc-review-val { color: var(--text); text-align: right; font-weight: 500; max-width: 60%; }
  .grc-review-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 4px; }
  .grc-review-tag {
    background: rgba(227,179,65,0.08); border: 1px solid rgba(227,179,65,0.2);
    border-radius: 5px; padding: 2px 7px; font-size: 11px; color: var(--gold);
  }

  .grc-docs-list { display: grid; grid-template-columns: 1fr; gap: 8px; margin-top: 12px; }
  .grc-doc-row {
    display: flex; align-items: center; gap: 10px;
    background: var(--surface2); border: 1px solid var(--border);
    border-radius: 9px; padding: 12px 16px; font-size: 13px;
  }
  .grc-doc-icon { font-size: 18px; }
  .grc-doc-name { font-weight: 600; color: var(--text); }
  .grc-doc-desc { font-size: 12px; color: var(--text-muted); margin-top: 1px; }

  /* ── Generate step ── */
  .grc-generate-wrap { text-align: center; padding: 20px 0; }
  .grc-spinner-ring {
    width: 64px; height: 64px; border: 3px solid var(--border);
    border-top-color: var(--gold); border-radius: 50%;
    animation: spin 0.8s linear infinite; margin: 0 auto 20px;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  .grc-gen-status { font-size: 14px; color: var(--text-muted); margin-bottom: 20px; min-height: 22px; }
  .grc-gen-log {
    background: var(--ink); border: 1px solid var(--border); border-radius: 10px;
    padding: 16px; text-align: left; font-family: 'DM Mono', monospace; font-size: 12px;
    line-height: 1.7; max-height: 200px; overflow-y: auto; color: var(--teal);
  }
  .grc-gen-log-line { opacity: 0; animation: logIn 0.3s ease forwards; }
  @keyframes logIn { to { opacity: 1; } }
  .grc-gen-log-dim { color: var(--slate); }

  /* ── Done step ── */
  .grc-done-wrap { text-align: center; padding: 16px 0 0; }
  .grc-done-icon {
    width: 64px; height: 64px; border-radius: 50%;
    background: rgba(63,185,80,0.12); border: 2px solid var(--teal);
    display: flex; align-items: center; justify-content: center;
    font-size: 28px; margin: 0 auto 20px;
    animation: pop 0.4s cubic-bezier(0.34,1.56,0.64,1);
  }
  @keyframes pop { from { transform: scale(0); } to { transform: scale(1); } }
  .grc-done-title { font-family: 'DM Serif Display', serif; font-size: 26px; color: var(--text); margin-bottom: 6px; }
  .grc-done-sub { font-size: 14px; color: var(--text-muted); margin-bottom: 28px; }

  .grc-download-grid { display: grid; gap: 10px; margin-bottom: 24px; }
  .grc-download-card {
    background: var(--surface2); border: 1px solid var(--border); border-radius: 10px;
    padding: 14px 16px; display: flex; align-items: center; gap: 14px;
    cursor: pointer; transition: all 0.2s; text-align: left;
  }
  .grc-download-card:hover { border-color: var(--gold); background: rgba(227,179,65,0.04); transform: translateX(3px); }
  .grc-download-icon { font-size: 24px; flex-shrink: 0; }
  .grc-download-info { flex: 1; }
  .grc-download-name { font-weight: 600; color: var(--text); font-size: 14px; }
  .grc-download-meta { font-size: 12px; color: var(--text-muted); margin-top: 2px; }
  .grc-download-btn {
    background: rgba(227,179,65,0.1); border: 1px solid rgba(227,179,65,0.25);
    border-radius: 7px; padding: 6px 12px; font-size: 12px; font-weight: 600;
    color: var(--gold); flex-shrink: 0;
  }

  .grc-restart-btn {
    background: transparent; border: 1px solid var(--border); color: var(--text-muted);
    border-radius: 9px; padding: 10px 20px; font-family: 'Outfit', sans-serif;
    font-size: 14px; cursor: pointer; transition: all 0.2s;
  }
  .grc-restart-btn:hover { border-color: var(--slate); color: var(--text); }

  @media (max-width: 640px) {
    .grc-grid { grid-template-columns: 1fr; }
    .grc-review-grid { grid-template-columns: 1fr; }
    .grc-card { padding: 24px 20px; }
    .grc-review-val { max-width: none; text-align: left; }
  }
`;

// ── Helpers ──────────────────────────────────────────────────────────────────
function CheckGroup({ options, value, onChange }) {
  const toggle = (opt) => {
    if (value.includes(opt)) onChange(value.filter(v => v !== opt));
    else onChange([...value, opt]);
  };
  return (
    <div className="grc-check-group">
      {options.map(opt => (
        <div key={opt} className={`grc-check-item ${value.includes(opt) ? "checked" : ""}`} onClick={() => toggle(opt)}>
          <div className="grc-check-box">
            {value.includes(opt) && <span className="grc-check-tick">✓</span>}
          </div>
          {opt}
        </div>
      ))}
    </div>
  );
}

function TagsInput({ value, onChange, placeholder }) {
  const [input, setInput] = useState("");
  const add = () => {
    const v = input.trim();
    if (v && !value.includes(v)) { onChange([...value, v]); setInput(""); }
  };
  const onKey = (e) => {
    if (e.key === "Enter" || e.key === ",") { e.preventDefault(); add(); }
    if (e.key === "Backspace" && !input && value.length) onChange(value.slice(0, -1));
  };
  return (
    <>
      <div className="grc-tags-wrap">
        {value.map(t => (
          <span key={t} className="grc-tag">{t}
            <span className="grc-tag-remove" onClick={() => onChange(value.filter(v => v !== t))}>×</span>
          </span>
        ))}
        <input className="grc-tags-input" value={input} onChange={e => setInput(e.target.value)}
          onKeyDown={onKey} onBlur={add} placeholder={value.length ? "" : placeholder} />
      </div>
      <p className="grc-tags-hint">Press Enter or comma to add</p>
    </>
  );
}

function Field({ label, children, full }) {
  return <div className={`grc-field ${full ? "grc-grid-full" : ""}`}><label className="grc-label">{label}</label>{children}</div>;
}

// ── Document generators ───────────────────────────────────────────────────────
function genSOC2(d) {
  const now = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return `# ${d.companyName} — SOC 2 Type II Readiness Program

**Prepared by:** ${d.analystName || "GRC Analyst"}
**Assessment Date:** ${now}
**Version:** 1.0
**Classification:** Confidential — Internal Use Only

---

## Executive Summary

This SOC 2 Type II Readiness Program evaluates ${d.companyName}'s preparedness for a formal SOC 2 Type II audit. ${d.companyName} is a ${d.employeeCount}-person ${d.industry} company headquartered in ${d.hqLocation}, currently operating with a ${d.riskAppetite === "1" ? "low" : d.riskAppetite <= "3" ? "moderate" : "high"} risk appetite.

**Audit Scope:** ${d.soc2TSCs?.join(", ") || "Security (Common Criteria)"}
**Target Audit Period:** ${d.auditPeriod || "12 months following program implementation"}
**Primary Regulatory Driver:** ${d.regulatoryDrivers?.join(", ") || "Customer contractual requirements"}

---

## Organization Profile

| Field | Details |
|---|---|
| **Company** | ${d.companyName} |
| **Industry** | ${d.industry} |
| **Employees** | ${d.employeeCount} |
| **HQ Location** | ${d.hqLocation} |
| **Core Product** | ${d.coreProduct} |
| **Data Handled** | ${d.dataTypes?.join(", ") || "Business data"} |
| **Cloud Infrastructure** | ${d.cloudProviders?.join(", ") || "Cloud-based"} |
| **Key Systems** | ${d.keySystems?.join(", ") || "Core platform systems"} |

---

## TSC Scope & Applicability

${(d.soc2TSCs || ["Security"]).map(tsc => {
  const map = {
    "Security (CC)": "**Security (Common Criteria):** Covers logical and physical access, change management, risk management, and monitoring. Required for all SOC 2 reports.",
    "Availability (A)": "**Availability:** Covers system uptime, performance monitoring, business continuity, and disaster recovery. Applicable given customer SLA commitments.",
    "Confidentiality (C)": "**Confidentiality:** Covers identification, protection, retention, and disposal of confidential information.",
    "Processing Integrity (PI)": "**Processing Integrity:** Covers completeness, accuracy, timeliness, and authorization of system processing.",
    "Privacy (P)": `**Privacy:** Covers personal information collection, use, retention, and disposal. Applicable given ${d.dataTypes?.join(", ") || "data"} handling.`
  };
  return map[tsc] || `**${tsc}:** Selected for inclusion in audit scope.`;
}).join("\n\n")}

---

## Current Control Environment Assessment

### Strengths
${(d.currentControls || []).map(c => `- ${c}`).join("\n") || "- Control inventory to be completed during readiness assessment"}

### Identified Gaps
${(d.knownGaps || []).map(g => `- ${g}`).join("\n") || "- Formal gap analysis to be conducted as part of this program"}

---

## System Inventory & Ownership

| System | Type | Data Classification | Owner |
|---|---|---|---|
${(d.keySystems || ["Core Platform"]).map((s, i) => `| ${s} | ${d.cloudProviders?.[0] || "Cloud"}-hosted | ${i === 0 ? "Restricted" : "Confidential"} | Engineering |`).join("\n")}

---

## Control Mapping & Gap Analysis

### Common Criteria — Logical Access (CC6)
| Control | Requirement | Current State | Gap |
|---|---|---|---|
| CC6.1 | Logical access security measures | ${d.currentControls?.some(c => c.toLowerCase().includes("access") || c.toLowerCase().includes("mfa")) ? "Partially Implemented" : "Not Assessed"} | Formalize access control policy and quarterly reviews |
| CC6.2 | Authentication before access | ${d.currentControls?.some(c => c.toLowerCase().includes("mfa") || c.toLowerCase().includes("sso")) ? "MFA/SSO in place" : "To be assessed"} | Document MFA enforcement evidence |
| CC6.3 | Role-based access | ${d.currentControls?.some(c => c.toLowerCase().includes("rbac") || c.toLowerCase().includes("role")) ? "RBAC implemented" : "To be assessed"} | Formalize RBAC matrix and access review schedule |

### Common Criteria — Change Management (CC8)
| Control | Requirement | Current State | Gap |
|---|---|---|---|
| CC8.1 | Change management process | ${d.currentControls?.some(c => c.toLowerCase().includes("change") || c.toLowerCase().includes("pr")) ? "Partially Implemented" : "To be assessed"} | Document change management policy; enforce PR reviews |

---

## Risk Register (Top Risks)

| Risk ID | Risk | Likelihood | Impact | Treatment |
|---|---|---|---|---|
| R-001 | Unauthorized access to ${d.dataTypes?.[0] || "customer data"} | Medium | High | Mitigate — enforce MFA and access reviews |
| R-002 | Third-party vendor security failure | Medium | High | Mitigate — vendor risk management program |
| R-003 | Ransomware or destructive attack | Low | Critical | Mitigate — backups, EDR, incident response |
| R-004 | Employee data exfiltration | Low | High | Mitigate — DLP, offboarding procedures |
| R-005 | Compliance audit failure | Medium | High | Mitigate — evidence repository, quarterly reviews |

---

## Remediation Roadmap

### Phase 1 — Foundation (0–60 Days)
- [ ] Appoint SOC 2 Program Owner
- [ ] Complete system and asset inventory
- [ ] Draft and approve information security policy suite
- [ ] Establish evidence repository (folder structure + collection owners)
- [ ] Define audit scope and boundary formally

### Phase 2 — Control Implementation (60–180 Days)
- [ ] Implement or formalize all in-scope controls
- [ ] Begin quarterly access review cycle
- [ ] Complete vendor risk assessments for all critical vendors
- [ ] Conduct security awareness training
- [ ] Perform internal readiness assessment

### Phase 3 — Audit Readiness (180–270 Days)
- [ ] Engage SOC 2 auditor for Type I assessment
- [ ] Begin 12-month Type II audit observation period
- [ ] Maintain continuous evidence collection
- [ ] Remediate any Type I findings before Type II period closes

---

*${d.companyName} — SOC 2 Readiness Program | ${now}*
`;
}

function genNIST(d) {
  const now = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const riskLabel = +d.riskAppetite <= 2 ? "Low" : +d.riskAppetite <= 3 ? "Moderate" : "High";
  return `# ${d.companyName} — NIST CSF 2.0 Current State Assessment & Gap Analysis

**Prepared by:** ${d.analystName || "GRC Analyst"}
**Assessment Date:** ${now}
**Framework:** NIST Cybersecurity Framework 2.0
**Classification:** Confidential — Internal Use Only

---

## Executive Summary

This assessment evaluates ${d.companyName}'s cybersecurity posture against the NIST Cybersecurity Framework 2.0 (CSF 2.0). The company operates in the ${d.industry} sector with ${d.employeeCount} employees and handles ${d.dataTypes?.join(", ") || "business and customer data"}.

**Overall Maturity Score:** 2.1 / 5.0 (Partial → Informed transition)
**Risk Appetite:** ${riskLabel}
**Target Maturity:** 3.5 / 5.0 (Repeatable)

---

## Organization Profile

${d.companyName} is headquartered in ${d.hqLocation} and operates ${d.coreProduct}. Key infrastructure includes ${d.cloudProviders?.join(", ") || "cloud-based systems"} and critical systems include ${d.keySystems?.join(", ") || "core platform components"}.

---

## CSF 2.0 Assessment — All Six Functions

### GV — Govern (Current: 1.8 / 5.0)

| Subcategory | Requirement | Current State | Maturity |
|---|---|---|---|
| GV.OC-01 | Organizational mission and risk appetite communicated | Risk appetite: **${riskLabel}** — formally documented: ${d.riskAppetite ? "Partially" : "No"} | 2 |
| GV.OC-02 | Internal and external stakeholder expectations addressed | Stakeholder risk expectations partially identified | 2 |
| GV.RM-01 | Risk management policy established | ${d.currentControls?.some(c => c.toLowerCase().includes("policy") || c.toLowerCase().includes("risk")) ? "Partial policy exists" : "Not formally established"} | 1 |
| GV.SC-01 | Cybersecurity supply chain risk management formalized | ${d.currentControls?.some(c => c.toLowerCase().includes("vendor") || c.toLowerCase().includes("third")) ? "Partial — vendor reviews informal" : "Not established"} | 1 |

**Gap:** Establish formal ISMS governance including documented risk appetite statement, information security committee, and supply chain risk management program.

---

### ID — Identify (Current: 2.2 / 5.0)

| Subcategory | Requirement | Current State | Maturity |
|---|---|---|---|
| ID.AM-01 | Hardware asset inventory maintained | ${d.currentControls?.some(c => c.toLowerCase().includes("asset") || c.toLowerCase().includes("inventory")) ? "Partial — cloud assets tracked" : "Informal"} | 2 |
| ID.AM-02 | Software asset inventory maintained | Partial — ${d.keySystems?.length || 0} key systems identified | 2 |
| ID.RA-01 | Vulnerabilities identified and documented | ${d.currentControls?.some(c => c.toLowerCase().includes("vuln") || c.toLowerCase().includes("scan")) ? "Scanning tools deployed" : "Informal process"} | 2 |
| ID.RA-05 | Threats and vulnerabilities identified | Threat intelligence not formally integrated | 1 |

**Gap:** Complete asset inventory covering all ${d.cloudProviders?.join(", ") || "cloud"} resources; implement formal vulnerability management with defined SLAs.

---

### PR — Protect (Current: 2.4 / 5.0)

| Subcategory | Requirement | Current State | Maturity |
|---|---|---|---|
| PR.AA-01 | User identities and credentials managed | ${d.currentControls?.some(c => c.toLowerCase().includes("sso") || c.toLowerCase().includes("azure") || c.toLowerCase().includes("identity")) ? "SSO/IAM in place — formal review process needed" : "Access management informal"} | 3 |
| PR.AA-03 | MFA implemented | ${d.currentControls?.some(c => c.toLowerCase().includes("mfa") || c.toLowerCase().includes("multi-factor")) ? "MFA enforced" : "MFA not confirmed"} | ${d.currentControls?.some(c => c.toLowerCase().includes("mfa")) ? "4" : "2"} |
| PR.DS-01 | Data at rest protected | ${d.currentControls?.some(c => c.toLowerCase().includes("encrypt") || c.toLowerCase().includes("kms")) ? "Encryption in place" : "To be assessed"} | 3 |
| PR.PS-01 | Configuration management practiced | ${d.currentControls?.some(c => c.toLowerCase().includes("config") || c.toLowerCase().includes("terraform") || c.toLowerCase().includes("iac")) ? "IaC / config management used" : "Informal hardening"} | 2 |

**Gap:** Formalize access review process; document encryption standards; implement configuration baseline per CIS Benchmarks.

---

### DE — Detect (Current: 1.8 / 5.0)

| Subcategory | Requirement | Current State | Maturity |
|---|---|---|---|
| DE.CM-01 | Networks and assets monitored | ${d.currentControls?.some(c => c.toLowerCase().includes("monitor") || c.toLowerCase().includes("cloudwatch") || c.toLowerCase().includes("siem")) ? "Cloud monitoring active" : "Minimal monitoring"} | 2 |
| DE.CM-06 | External service provider activity monitored | Vendor monitoring not formalized | 1 |
| DE.AE-02 | Potentially adverse events analyzed | ${d.currentControls?.some(c => c.toLowerCase().includes("alert") || c.toLowerCase().includes("pagerduty")) ? "Alerting configured" : "Manual review only"} | 2 |

**Gap:** Deploy SIEM or expand logging coverage; define security monitoring use cases; implement anomalous behavior detection.

---

### RS — Respond (Current: 1.9 / 5.0)

| Subcategory | Requirement | Current State | Maturity |
|---|---|---|---|
| RS.MA-01 | Incidents investigated | ${d.currentControls?.some(c => c.toLowerCase().includes("incident") || c.toLowerCase().includes("ir")) ? "IR process exists — not tested" : "Ad hoc response only"} | 2 |
| RS.CO-02 | Internal and external stakeholders notified | Notification procedures not formally documented | 1 |
| RS.AN-03 | Analysis performed to establish root cause | Root cause analysis informal | 2 |

**Gap:** Formalize and test incident response plan; define stakeholder notification procedures; conduct annual tabletop exercise.

---

### RC — Recover (Current: 1.6 / 5.0)

| Subcategory | Requirement | Current State | Maturity |
|---|---|---|---|
| RC.RP-01 | Recovery plan executed and maintained | ${d.currentControls?.some(c => c.toLowerCase().includes("backup") || c.toLowerCase().includes("dr") || c.toLowerCase().includes("recovery")) ? "Backups in place — recovery plan not tested" : "Backup process informal"} | 2 |
| RC.RP-02 | Recovery plan updated after incidents | Post-incident reviews not formalized | 1 |

**Gap:** Define formal RTO/RPO targets; conduct quarterly backup restoration tests; document and test business continuity plan.

---

## Maturity Summary

| Function | Current | Target | Gap |
|---|:---:|:---:|:---:|
| GV — Govern | 1.8 | 3.5 | 1.7 |
| ID — Identify | 2.2 | 3.5 | 1.3 |
| PR — Protect | 2.4 | 4.0 | 1.6 |
| DE — Detect | 1.8 | 3.5 | 1.7 |
| RS — Respond | 1.9 | 3.5 | 1.6 |
| RC — Recover | 1.6 | 3.5 | 1.9 |
| **Overall** | **2.1** | **3.5** | **1.4** |

---

## Three-Phase Remediation Roadmap

### Phase 1 — Governance & Foundation (0–90 Days)
- Establish information security governance structure with defined ownership
- Document risk appetite and information security policy
- Complete asset inventory for all ${d.cloudProviders?.join(", ") || "cloud"} resources
- Stand up formal vendor risk management program

### Phase 2 — Control Strengthening (90–180 Days)
- Formalize and test incident response plan
- Define vulnerability management SLAs and tracking
- Implement configuration management baselines
- Expand detection capabilities (SIEM, log aggregation)

### Phase 3 — Continuous Improvement (180+ Days)
- Achieve target maturity of 3.5 across all six functions
- Integrate CSF into annual risk management cycle
- Conduct annual third-party CSF assessment
- Develop metrics and KPIs for ongoing maturity tracking

---

*${d.companyName} — NIST CSF 2.0 Assessment | ${now}*
`;
}

function genISO(d) {
  const now = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  return `# ${d.companyName} — ISO/IEC 27001:2022 Gap Analysis

**Prepared by:** ${d.analystName || "GRC Analyst"}
**Assessment Date:** ${now}
**Standard:** ISO/IEC 27001:2022
**Classification:** Confidential — Internal Use Only

---

## Executive Summary

This gap analysis evaluates ${d.companyName}'s readiness for ISO/IEC 27001:2022 certification. ${d.companyName} is a ${d.industry} company with ${d.employeeCount} employees operating ${d.coreProduct}.

**Overall Conformity:** Partial — Not Certification Ready
**Priority:** Governance documentation gaps exceed technical control gaps.

---

## Organization Profile

| Field | Details |
|---|---|
| **Organization** | ${d.companyName} |
| **Industry** | ${d.industry} |
| **Location** | ${d.hqLocation} |
| **Employees** | ${d.employeeCount} |
| **Data Types** | ${d.dataTypes?.join(", ") || "Business and customer data"} |
| **Infrastructure** | ${d.cloudProviders?.join(", ") || "Cloud-based"} |
| **Certification Driver** | ${d.regulatoryDrivers?.join(", ") || "Customer and partner requirements"} |

---

## Mandatory Clause Assessments (Clauses 4–10)

| Clause | Requirement | Status | Gap |
|---|---|:---:|---|
| 4.1 | Understand the organization and context | 🟡 Partial | Document internal/external context analysis |
| 4.2 | Understand needs of interested parties | 🟡 Partial | Create formal interested party register |
| 4.3 | Determine ISMS scope | 🔴 Non-Conformant | Draft and approve ISMS Scope Statement |
| 4.4 | ISMS established and maintained | 🔴 Non-Conformant | Establish ISMS management system framework |
| 5.1 | Leadership commitment | 🔴 Non-Conformant | Obtain signed management commitment statement |
| 5.2 | Information security policy | 🟡 Partial | ${d.currentControls?.some(c => c.toLowerCase().includes("policy")) ? "Policies exist — need ISO 27001 alignment" : "Draft comprehensive InfoSec policy suite"} |
| 5.3 | Roles and responsibilities | 🔴 Non-Conformant | Define ISMS roles; publish RACI matrix |
| 6.1.2 | Information security risk assessment | 🟡 Partial | Formalize ISO 27001 risk assessment methodology |
| 6.1.3 | Risk treatment plan + SoA | 🔴 Non-Conformant | Produce Statement of Applicability for all 93 controls |
| 6.2 | Information security objectives | 🔴 Non-Conformant | Define measurable InfoSec objectives |
| 7.1 | Resources | 🟡 Partial | Formally allocate ISMS budget and resources |
| 7.2 | Competence | 🔴 Non-Conformant | Define competency requirements; track training |
| 7.3 | Awareness | 🟡 Partial | ${d.currentControls?.some(c => c.toLowerCase().includes("training") || c.toLowerCase().includes("awareness")) ? "Training exists — needs ISMS alignment" : "Implement security awareness program"} |
| 7.5 | Documented information | 🟡 Partial | Establish document control procedure |
| 8.1 | Operational planning and control | 🟡 Partial | Document operational security controls |
| 8.2 | Risk assessment (operational) | 🟡 Partial | Define trigger-based risk reassessment process |
| 8.3 | Risk treatment (operational) | 🔴 Non-Conformant | Implement risk treatment plan linked to risk register |
| 9.1 | Monitoring and measurement | 🟡 Partial | Define ISMS-specific metrics and KPIs |
| 9.2 | Internal audit | 🔴 Non-Conformant | Establish ISMS internal audit program |
| 9.3 | Management review | 🔴 Non-Conformant | Schedule semi-annual ISMS management reviews |
| 10.1 | Continual improvement | 🔴 Non-Conformant | Establish improvement log and cycle |
| 10.2 | Nonconformity and corrective action | 🔴 Non-Conformant | Define nonconformity and corrective action procedure |

---

## Annex A Control Assessment — Highlights

### Theme 5 — Organizational Controls
| Control | Status | Action |
|---|:---:|---|
| 5.1 Policies for information security | 🟡 Partial | Expand and align to ISO 27001 |
| 5.9 Inventory of information and assets | ${d.currentControls?.some(c => c.toLowerCase().includes("asset") || c.toLowerCase().includes("inventory")) ? "🟡 Partial | Complete asset register with ownership" : "🔴 Non-Conformant | Build comprehensive asset register"} |
| 5.10 Acceptable use | ${d.currentControls?.some(c => c.toLowerCase().includes("aup") || c.toLowerCase().includes("acceptable use")) ? "✅ Conformant | Maintain and review annually" : "🔴 Non-Conformant | Draft and communicate AUP"} |
| 5.19 Supplier relationships | ${d.currentControls?.some(c => c.toLowerCase().includes("vendor") || c.toLowerCase().includes("third")) ? "🟡 Partial | Formalize TPRM program" : "🔴 Non-Conformant | Establish TPRM program"} |
| 5.24 Incident management | ${d.currentControls?.some(c => c.toLowerCase().includes("incident") || c.toLowerCase().includes("ir")) ? "🟡 Partial | Test and ISMS-integrate IR plan" : "🔴 Non-Conformant | Develop incident response plan"} |

### Theme 8 — Technological Controls
| Control | Status | Action |
|---|:---:|---|
| 8.2 Privileged access rights | ${d.currentControls?.some(c => c.toLowerCase().includes("privilege") || c.toLowerCase().includes("iam") || c.toLowerCase().includes("admin")) ? "🟡 Partial | Document privileged access review process" : "🔴 Non-Conformant | Implement least privilege and privileged access management"} |
| 8.3 Information access restriction | ${d.currentControls?.some(c => c.toLowerCase().includes("rbac") || c.toLowerCase().includes("access control")) ? "🟡 Partial | Formalize access review schedule" : "🔴 Non-Conformant | Implement RBAC"} |
| 8.5 Secure authentication | ${d.currentControls?.some(c => c.toLowerCase().includes("mfa") || c.toLowerCase().includes("sso")) ? "✅ Conformant | No action required" : "🔴 Non-Conformant | Implement MFA and SSO"} |
| 8.8 Vulnerability management | ${d.currentControls?.some(c => c.toLowerCase().includes("vuln") || c.toLowerCase().includes("scan") || c.toLowerCase().includes("patch")) ? "🟡 Partial | Define remediation SLAs" : "🔴 Non-Conformant | Implement vulnerability management program"} |
| 8.15 Logging | ${d.currentControls?.some(c => c.toLowerCase().includes("log") || c.toLowerCase().includes("cloudtrail") || c.toLowerCase().includes("siem")) ? "🟡 Partial | Extend retention to 12 months" : "🔴 Non-Conformant | Implement centralized logging"} |
| 8.24 Use of cryptography | ${d.currentControls?.some(c => c.toLowerCase().includes("encrypt") || c.toLowerCase().includes("tls") || c.toLowerCase().includes("kms")) ? "🟡 Partial | Document cryptography policy" : "🔴 Non-Conformant | Implement encryption standards and key management"} |

---

## Conformity Summary

| Area | Conformant | Partial | Non-Conformant |
|---|:---:|:---:|:---:|
| Mandatory Clauses (4–10) | 0 | 8 | 14 |
| Annex A (sampled) | ${d.currentControls?.length > 4 ? "4" : "1"} | ${d.currentControls?.length > 2 ? "8" : "5"} | 12 |

---

## Certification Roadmap

### Phase 1 — ISMS Foundation (0–60 Days)
- [ ] Appoint ISMS Manager
- [ ] Draft ISMS Scope Statement
- [ ] Obtain management commitment statement
- [ ] Produce Statement of Applicability (SoA) for all 93 controls
- [ ] Conduct formal ISO 27001 risk assessment
- [ ] Develop risk treatment plan

### Phase 2 — Control Gaps (60–180 Days)
- [ ] Draft and approve comprehensive policy suite
- [ ] Complete asset register with owners
- [ ] Formalize vendor risk management program
- [ ] Implement offboarding automation for access revocation
- [ ] Deploy SIEM and centralized monitoring

### Phase 3 — Audit Readiness (180–270 Days)
- [ ] Conduct first ISMS internal audit
- [ ] Hold first formal management review
- [ ] Finalize all ISMS documentation
- [ ] Engage certification body for Stage 1 audit

**Target Certification:** ${new Date(Date.now() + 270 * 86400000).toLocaleDateString("en-US", { year: "numeric", month: "long" })}

---

*${d.companyName} — ISO 27001:2022 Gap Analysis | ${now}*
`;
}

function genRiskRegister(d) {
  const now = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const industry = d.industry?.toLowerCase() || "";
  const isFintech = industry.includes("fintech") || industry.includes("financial") || industry.includes("payment");
  const isHealth = industry.includes("health") || industry.includes("medical") || industry.includes("hipaa");
  const isSaaS = industry.includes("saas") || industry.includes("software") || industry.includes("cloud");

  const extraRisks = isFintech ? `| R-011 | Compliance | Payment processing regulation violation | 2 | 5 | **10** | 🟠 High | Mitigate | Open |
| R-012 | Third-Party Risk | Payment processor outage | 2 | 5 | **10** | 🟠 High | Mitigate | Open |` :
    isHealth ? `| R-011 | Compliance | HIPAA breach notification failure | 2 | 5 | **10** | 🟠 High | Mitigate | Open |
| R-012 | Data Security | PHI exposure via misconfigured storage | 2 | 5 | **10** | 🟠 High | Mitigate | Open |` :
    isSaaS ? `| R-011 | Availability | Multi-tenant data isolation failure | 2 | 5 | **10** | 🟠 High | Mitigate | Open |
| R-012 | Third-Party Risk | Critical SaaS dependency outage | 2 | 4 | **8** | 🟡 Medium | Mitigate | Open |` : "";

  return `# ${d.companyName} — Information Security Risk Register

**Prepared by:** ${d.analystName || "GRC Analyst"}
**Version:** 1.0
**Assessment Date:** ${now}
**Next Review:** ${new Date(Date.now() + 180 * 86400000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
**Risk Appetite:** ${["Low", "Low-Moderate", "Moderate", "Moderate-High", "High"][+d.riskAppetite - 1] || "Moderate"}

---

## Organization Profile

**Company:** ${d.companyName} | **Industry:** ${d.industry} | **Employees:** ${d.employeeCount}
**Infrastructure:** ${d.cloudProviders?.join(", ") || "Cloud-based"} | **Key Systems:** ${d.keySystems?.join(", ") || "Core platform"}

---

## Risk Scoring Methodology

**Likelihood × Impact** scoring (1–5 each, max score 25):

| Score | Rating | Action Required |
|:---:|---|---|
| 16–25 | 🔴 Critical | Immediate — escalate to board; treat within 30 days |
| 10–15 | 🟠 High | Priority — escalate to leadership; treat within 60 days |
| 6–9 | 🟡 Medium | Required — assign owner and target; treat within 90 days |
| 1–5 | 🟢 Low | Monitor — treat opportunistically |

---

## Full Risk Register

| Risk ID | Category | Risk Title | L | I | Score | Rating | Treatment | Status |
|---|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| R-001 | Data Security | Unauthorized access to ${d.dataTypes?.[0] || "sensitive data"} via API vulnerability | 3 | 5 | **15** | 🟠 High | Mitigate | In Progress |
| R-002 | Access Control | Privilege escalation via compromised admin credentials | 3 | 5 | **15** | 🟠 High | Mitigate | In Progress |
| R-003 | Ransomware | Ransomware encrypts critical systems and backups | 2 | 5 | **10** | 🟠 High | Mitigate | Open |
| R-004 | Compliance | Regulatory audit failure | 2 | 5 | **10** | 🟠 High | Mitigate | In Progress |
| R-005 | Insider Threat | Departing employee exfiltrates sensitive data | 2 | 4 | **8** | 🟡 Medium | Mitigate | Open |
| R-006 | Third-Party Risk | Critical vendor SOC 2 report unavailable or failing | 2 | 3 | **6** | 🟡 Medium | Mitigate | Open |
| R-007 | Data Security | ${d.dataTypes?.[0] || "Customer data"} exposed via misconfigured cloud storage | 2 | 4 | **8** | 🟡 Medium | Mitigate | In Progress |
| R-008 | Infrastructure | Cloud account compromise via root/admin credential exposure | 2 | 5 | **10** | 🟠 High | Mitigate | In Progress |
| R-009 | Human Factor | Business email compromise targeting finance team | 3 | 4 | **12** | 🟠 High | Mitigate | Open |
| R-010 | Business Continuity | Extended cloud provider outage exceeding RTO | 1 | 5 | **5** | 🟢 Low | Accept | Accepted |
${extraRisks}

---

## High Priority Risk Detail

### R-001 — Unauthorized Access to ${d.dataTypes?.[0] || "Sensitive Data"}
- **Likelihood:** 3 (Possible) | **Impact:** 5 (Critical) | **Score:** 15
- **Current Controls:** ${d.currentControls?.filter(c => c.toLowerCase().includes("access") || c.toLowerCase().includes("mfa")).join("; ") || "Access controls to be formalized"}
- **Remediation:** Implement RASP; enforce input validation; conduct semi-annual penetration testing
- **Owner:** VP Engineering / CISO | **Target:** Q2 ${new Date().getFullYear() + (new Date().getMonth() > 8 ? 1 : 0)}

### R-002 — Privilege Escalation via Admin Credentials
- **Likelihood:** 3 | **Impact:** 5 | **Score:** 15
- **Current Controls:** ${d.currentControls?.filter(c => c.toLowerCase().includes("mfa") || c.toLowerCase().includes("iam")).join("; ") || "MFA and IAM controls to be validated"}
- **Remediation:** Enforce hardware MFA for admins; eliminate long-lived access keys; implement JIT provisioning
- **Owner:** VP Engineering | **Target:** Q1 ${new Date().getFullYear() + (new Date().getMonth() > 10 ? 1 : 0)}

### R-009 — Business Email Compromise
- **Likelihood:** 3 | **Impact:** 4 | **Score:** 12
- **Current Controls:** Email filtering; annual security training
- **Remediation:** Implement dual-authorization for wire transfers; enforce DMARC/DKIM/SPF; BEC simulation exercises
- **Owner:** CFO / IT Manager | **Target:** Q2 ${new Date().getFullYear() + (new Date().getMonth() > 8 ? 1 : 0)}

---

## Risk Treatment Plan Summary

| Risk | Treatment | Justification | KPI |
|---|:---:|---|---|
| R-001 Unauthorized access | Mitigate | Data breach could trigger regulatory fines and customer loss | Zero critical findings in semi-annual pen test |
| R-002 Privilege escalation | Mitigate | Admin compromise = unrestricted access to all systems | Zero long-lived admin credentials; 100% hardware MFA |
| R-003 Ransomware | Mitigate | Ransomware would cause multi-day outage at current stage | Successful restore from immutable backup within RTO |
| R-004 Compliance failure | Mitigate | Audit failure triggers regulatory sanctions | Pass all applicable compliance audits |
| R-010 Cloud outage | Accept | Multi-region cost disproportionate at current ARR; review annually | Annual risk review; feasibility study before next funding round |

---

*${d.companyName} — Information Security Risk Register v1.0 | ${now}*
*Next full review: ${new Date(Date.now() + 180 * 86400000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}*
`;
}

function genPolicies(d) {
  const now = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const reviewDate = new Date(Date.now() + 365 * 86400000).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  return `# ${d.companyName} — Information Security Policy Library

**Prepared by:** ${d.analystName || "GRC Analyst"}
**Effective Date:** ${now}
**Next Review:** ${reviewDate}
**Version:** 1.0
**Classification:** Internal — All Employees

---

## Policy Index

| Policy # | Title | Owner | Effective | Review |
|---|---|---|---|---|
| POL-001 | Information Security Policy | CISO / ${d.keyRoles?.find(r => r.toLowerCase().includes("vp eng") || r.toLowerCase().includes("cto")) || "VP Engineering"} | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-002 | Acceptable Use Policy | IT Manager | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-003 | Access Control Policy | IT Manager | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-004 | Data Classification & Handling Policy | CISO / Legal | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-005 | Incident Response Policy | VP Engineering | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-006 | Vulnerability Management Policy | VP Engineering | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-007 | Third-Party Risk Management Policy | GRC Analyst / Legal | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |
| POL-008 | Human Resources Security Policy | HR / IT Manager | ${now.split(",")[1]?.trim() || now} | ${reviewDate.split(",")[1]?.trim() || reviewDate} |

---

## POL-001 — Information Security Policy

**Owner:** CISO / VP Engineering | **Classification:** Internal — All Employees

### Purpose
This policy establishes the overarching information security framework for ${d.companyName}. It defines management's commitment to protecting the confidentiality, integrity, and availability of all information assets.

### Scope
All ${d.companyName} employees, contractors, and third parties who access, process, or handle company information assets or systems.

### Core Principles
- **Confidentiality:** Information accessible only to authorized individuals with a legitimate business need
- **Integrity:** Information protected from unauthorized modification
- **Availability:** Systems available to authorized users when needed
- **Least Privilege:** Access limited to minimum necessary for job function
- **Defense in Depth:** Multiple layers of security controls implemented

### Compliance Obligations
${d.companyName} will comply with all applicable regulations including ${d.regulatoryDrivers?.join(", ") || "applicable industry regulations"}. Non-compliance may result in disciplinary action including termination.

---

## POL-002 — Acceptable Use Policy

**Owner:** IT Manager | **Classification:** Internal — All Employees

### Acceptable Uses
- Use of company systems for legitimate business purposes related to your role
- Use of company-approved tools: ${d.keySystems?.slice(0, 3).join(", ") || "company-approved platforms"}
- Reasonable, incidental personal use that does not interfere with job performance

### Prohibited Uses
- Accessing, transmitting, or storing illegal content
- Attempting to bypass or disable security controls
- Sharing credentials or access tokens with any other person
- Installing unauthorized software without IT approval
- Transmitting sensitive data via unencrypted or personal channels
- Storing company data on personal cloud storage without explicit approval

### BYOD Requirements
- Personal devices accessing company resources must have full-disk encryption and screen lock
- MDM enrollment required for personal devices accessing company email or systems
- Company reserves right to remotely wipe company data from personal devices

---

## POL-003 — Access Control Policy

**Owner:** IT Manager | **Classification:** Internal — All Employees

### Access Provisioning
- All accounts provisioned through IT Manager via formal onboarding process only
- Role-Based Access Control (RBAC) enforced across all in-scope systems: ${d.keySystems?.join(", ") || "core platforms"}
- Access to sensitive data requires documented manager approval and business justification
- Shared accounts and shared credentials are prohibited

### Authentication Requirements
- **MFA is mandatory for all users on all systems — no exceptions**
- Minimum 16-character passwords or approved passphrase
- Hardware security keys required for all administrative accounts
- Sessions automatically lock after 15 minutes of inactivity

### Access Reviews
- Quarterly access reviews conducted by system owners and IT Manager
- Access revoked **within 4 hours** of employee termination
- All access reviews documented with sign-off retained for audit purposes

---

## POL-004 — Data Classification & Handling Policy

**Owner:** CISO / Legal | **Classification:** Internal — All Employees

### Classification Levels

| Level | Examples | Key Requirement |
|---|---|---|
| 🔴 **RESTRICTED** | ${d.dataTypes?.slice(0,2).join(", ") || "Personal data, credentials"}, encryption keys | AES-256 at rest; TLS 1.2+ in transit; breach reported within 1 hour |
| 🟠 **CONFIDENTIAL** | Source code, financial data, security reports | Encrypt in transit; NDA required for external sharing |
| 🟡 **INTERNAL** | Internal policies, meeting notes | Internal use only; standard security controls |
| 🟢 **PUBLIC** | Marketing materials, public documentation | No special handling required |

### Handling Requirements — RESTRICTED Data
- Encrypt at rest using AES-256 and in transit using TLS 1.2 or higher
- Access requires documented justification and manager approval
- Must not be transmitted via personal email or unencrypted channels
- Suspected unauthorized access reported to security team within 1 hour

---

## POL-005 — Incident Response Policy

**Owner:** VP Engineering | **Classification:** Internal — All Employees

### Incident Classification
| Severity | Description | Response Time |
|---|---|---|
| **SEV-1** | Data breach; active ransomware; complete outage | Immediate — escalate to CISO, leadership, CEO |
| **SEV-2** | Suspected breach; unauthorized access; >20% user impact | Within 1 hour — VP Engineering |
| **SEV-3** | Isolated compromise; <20% user impact | Within 4 hours — IT Manager |
| **SEV-4** | Policy violation; suspicious activity | Within 1 business day |

### Reporting Channel
All suspected incidents must be reported immediately to: **security@${d.companyName.toLowerCase().replace(/\s+/g, "")}.com** or the designated incident reporting channel.

### Response Phases
1. **Detection & Reporting** — Report immediately via designated channel
2. **Triage** — Classify severity; notify appropriate team within SLA
3. **Containment** — Isolate affected systems; revoke compromised credentials
4. **Eradication** — Remove threat; patch; eliminate access vectors
5. **Recovery** — Restore systems with verification
6. **Post-Incident Review** — Within 5 business days; lessons learned documented

---

## POL-006 — Vulnerability Management Policy

**Owner:** VP Engineering | **Classification:** Internal — Engineering & IT

### Remediation SLAs
| Severity | CVSS Range | Deadline |
|---|:---:|---|
| 🔴 Critical | 9.0–10.0 | Within **24 hours** |
| 🟠 High | 7.0–8.9 | Within **7 days** |
| 🟡 Medium | 4.0–6.9 | Within **30 days** |
| 🟢 Low | 0.1–3.9 | Within **90 days** |

### Scanning Requirements
- Automated vulnerability scans on all production infrastructure at least weekly
- SAST integrated into CI/CD pipeline on every pull request
- Annual penetration test by qualified external firm
- Container images scanned before deployment and weekly thereafter

---

## POL-007 — Third-Party Risk Management Policy

**Owner:** GRC Analyst / Legal | **Classification:** Internal — Procurement & Legal

### Vendor Classification
| Tier | Description | Requirement |
|---|---|---|
| **Tier 1** | Access to sensitive data or critical infrastructure | SOC 2 Type II or equivalent; annual security review |
| **Tier 2** | Access to confidential data or significant services | Security questionnaire; annual review |
| **Tier 3** | No sensitive data access; non-critical | Basic security review; standard contract terms |

### Key Requirements
- All Tier 1 vendors must provide current SOC 2 Type II report before contract execution
- All vendors with data access must sign a Data Processing Agreement (DPA)
- Vendor contracts must include 24-hour incident notification requirement
- No new vendor with sensitive data access engaged without Legal and GRC approval

---

## POL-008 — Human Resources Security Policy

**Owner:** HR / IT Manager | **Classification:** Internal — HR & Management

### Pre-Employment
- Background checks for all employees and contractors before system access granted
- Enhanced checks for roles with access to sensitive data systems
- All agreements must include confidentiality and acceptable use obligations

### During Employment
- Security awareness training within 30 days of hire and annually thereafter
- Role-specific training for engineering, finance, and compliance roles
- Access rights reviewed and updated within 5 business days of any role change

### Termination
- HR must notify IT Manager **immediately** upon any departure notice
- All system access revoked **within 4 hours** of involuntary termination
- All devices and company assets returned on or before last day
- Departing employees reminded of ongoing confidentiality obligations

---

## Policy Acknowledgment

*I have read, understood, and agree to comply with all policies in the ${d.companyName} Information Security Policy Library.*

**Employee Name:** ___________________________
**Role:** ___________________________
**Signature:** ___________________________
**Date:** ___________________________

---

*${d.companyName} — Information Security Policy Library v1.0 | ${now}*
`;
}

// ── Step definitions ──────────────────────────────────────────────────────────
const STEPS = [
  { id: "company",     label: "Company Basics",       icon: "🏢" },
  { id: "infra",       label: "Infrastructure",        icon: "☁️" },
  { id: "compliance",  label: "Compliance Context",    icon: "📋" },
  { id: "risk",        label: "Risk Profile",          icon: "⚠️" },
  { id: "personnel",   label: "Personnel & Roles",     icon: "👥" },
  { id: "controls",    label: "Current Controls",      icon: "🛡️" },
  { id: "review",      label: "Review & Generate",     icon: "✨" },
];

const DOCS = [
  { id: "soc2",    icon: "🔐", name: "SOC 2 Type II Readiness Program",     desc: "Trust Services Criteria assessment, control mapping & remediation roadmap" },
  { id: "nist",    icon: "📊", name: "NIST CSF 2.0 Current State Assessment", desc: "Six-function maturity scoring, gap analysis & improvement roadmap" },
  { id: "iso",     icon: "🌐", name: "ISO 27001:2022 Gap Analysis",           desc: "Mandatory clause assessments, Annex A review & certification roadmap" },
  { id: "risk",    icon: "📋", name: "Information Security Risk Register",    desc: "Risk scoring matrix, treatment plan & remediation timeline" },
  { id: "policy",  icon: "📄", name: "Information Security Policy Library",   desc: "8 fully written policies covering all core security domains" },
];

// ── Main App ─────────────────────────────────────────────────────────────────
export default function GRCForge() {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState("form"); // form | generating | done
  const [logs, setLogs] = useState([]);
  const [generated, setGenerated] = useState({});
  const logRef = useRef(null);

  const [data, setData] = useState({
    analystName: "", companyName: "", industry: "", employeeCount: "", hqLocation: "", coreProduct: "",
    cloudProviders: [], keySystems: [], integrations: [],
    soc2TSCs: [], regulatoryDrivers: [], complianceGoals: [], auditPeriod: "",
    riskAppetite: "3", dataTypes: [], knownRisks: [],
    keyRoles: [], teamStructure: "",
    currentControls: [], knownGaps: [],
  });

  const set = (key, val) => setData(prev => ({ ...prev, [key]: val }));

  useEffect(() => { if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight; }, [logs]);

  const addLog = (msg, dim = false) => setLogs(prev => [...prev, { msg, dim, id: Date.now() + Math.random() }]);

  const generate = async () => {
    setPhase("generating");
    const delay = (ms) => new Promise(r => setTimeout(r, ms));

    const docs = [
      { key: "soc2",   label: "SOC 2 Readiness Program",       fn: genSOC2   },
      { key: "nist",   label: "NIST CSF 2.0 Assessment",        fn: genNIST   },
      { key: "iso",    label: "ISO 27001 Gap Analysis",          fn: genISO    },
      { key: "risk",   label: "Risk Register",                   fn: genRiskRegister },
      { key: "policy", label: "Policy Library",                  fn: genPolicies },
    ];

    addLog(`Initializing GRC Forge for ${data.companyName}...`);
    await delay(600);
    addLog(`Industry: ${data.industry} | Employees: ${data.employeeCount}`, true);
    addLog(`Infrastructure: ${data.cloudProviders?.join(", ") || "Not specified"}`, true);
    await delay(500);

    const result = {};
    for (const doc of docs) {
      addLog(`⟳  Generating ${doc.label}...`);
      await delay(700 + Math.random() * 500);
      result[doc.key] = doc.fn(data);
      addLog(`✓  ${doc.label} complete`, true);
      await delay(200);
    }

    await delay(400);
    addLog(`✓  All 5 documents generated successfully.`);
    await delay(300);
    setGenerated(result);
    setPhase("done");
  };

  const download = (key) => {
    const labels = { soc2: "SOC2_Readiness_Program", nist: "NIST_CSF_Assessment", iso: "ISO27001_Gap_Analysis", risk: "Risk_Register", policy: "Policy_Library" };
    const blob = new Blob([generated[key]], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url;
    a.download = `${data.companyName.replace(/\s+/g, "_")}_${labels[key]}.md`;
    a.click(); URL.revokeObjectURL(url);
  };

  const downloadAll = () => Object.keys(generated).forEach((k, i) => setTimeout(() => download(k), i * 200));

  const progress = phase === "done" ? 100 : (step / (STEPS.length - 1)) * 100;

  // ── Render form steps ──────────────────────────────────────────────────────
  function renderStep() {
    if (phase === "generating") return (
      <div className="grc-generate-wrap">
        <div className="grc-spinner-ring" />
        <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, marginBottom: 8 }}>Generating your documents</p>
        <p className="grc-gen-status">Analyzing {data.companyName}'s profile and building tailored GRC deliverables...</p>
        <div className="grc-gen-log" ref={logRef}>
          {logs.map(l => <div key={l.id} className={`grc-gen-log-line ${l.dim ? "grc-gen-log-dim" : ""}`}>{l.msg}</div>)}
        </div>
      </div>
    );

    if (phase === "done") return (
      <div className="grc-done-wrap">
        <div className="grc-done-icon">✓</div>
        <div className="grc-done-title">Documents Ready</div>
        <div className="grc-done-sub">5 professional GRC deliverables generated for {data.companyName}</div>
        <div className="grc-download-grid">
          {DOCS.map(doc => (
            <div key={doc.id} className="grc-download-card" onClick={() => download(doc.id)}>
              <span className="grc-download-icon">{doc.icon}</span>
              <div className="grc-download-info">
                <div className="grc-download-name">{doc.name}</div>
                <div className="grc-download-meta">{doc.desc}</div>
              </div>
              <div className="grc-download-btn">↓ .md</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="grc-btn grc-btn-primary" onClick={downloadAll}>↓ Download All 5 Files</button>
          <button className="grc-restart-btn" onClick={() => { setStep(0); setPhase("form"); setLogs([]); setGenerated({}); }}>Start Over</button>
        </div>
      </div>
    );

    const s = STEPS[step];
    switch (s.id) {
      case "company": return (
        <div className="grc-grid">
          <Field label="Your Name (Analyst)"><input className="grc-input" placeholder="e.g. Aadil Moosa" value={data.analystName} onChange={e => set("analystName", e.target.value)} /></Field>
          <Field label="Company Name"><input className="grc-input" placeholder="e.g. Acme Corp" value={data.companyName} onChange={e => set("companyName", e.target.value)} /></Field>
          <Field label="Industry" full>
            <select className="grc-select" value={data.industry} onChange={e => set("industry", e.target.value)}>
              <option value="">Select industry...</option>
              {["Fintech / Payments","Healthcare Technology","B2B SaaS","EdTech","Cybersecurity","E-Commerce","Legal Tech","Manufacturing / Supply Chain","Financial Services / Banking","Government / Public Sector","Insurance","Other"].map(i => <option key={i}>{i}</option>)}
            </select>
          </Field>
          <Field label="Employee Count">
            <select className="grc-select" value={data.employeeCount} onChange={e => set("employeeCount", e.target.value)}>
              <option value="">Select size...</option>
              {["1–10","11–25","26–50","51–100","101–250","251–500","501–1,000","1,000+"].map(s => <option key={s}>{s}</option>)}
            </select>
          </Field>
          <Field label="HQ Location"><input className="grc-input" placeholder="e.g. Austin, TX" value={data.hqLocation} onChange={e => set("hqLocation", e.target.value)} /></Field>
          <Field label="Core Product / Service" full><textarea className="grc-textarea" placeholder="Describe what the company builds or does..." value={data.coreProduct} onChange={e => set("coreProduct", e.target.value)} /></Field>
        </div>
      );
      case "infra": return (
        <div className="grc-grid">
          <Field label="Cloud Providers" full>
            <CheckGroup options={["AWS","Azure","Google Cloud","Multi-cloud","On-premises","Hybrid"]} value={data.cloudProviders} onChange={v => set("cloudProviders", v)} />
          </Field>
          <Field label="Key Systems / Platforms" full>
            <TagsInput value={data.keySystems} onChange={v => set("keySystems", v)} placeholder="e.g. Salesforce, GitHub, Snowflake..." />
          </Field>
          <Field label="Identity & Auth" full>
            <CheckGroup options={["Azure AD / Entra","Okta","Google Workspace","AWS IAM","No centralized SSO","Other"]} value={data.integrations} onChange={v => set("integrations", v)} />
          </Field>
        </div>
      );
      case "compliance": return (
        <div className="grc-grid">
          <Field label="SOC 2 Trust Services Criteria" full>
            <CheckGroup options={["Security (CC)","Availability (A)","Confidentiality (C)","Processing Integrity (PI)","Privacy (P)"]} value={data.soc2TSCs} onChange={v => set("soc2TSCs", v)} />
          </Field>
          <Field label="Regulatory Drivers" full>
            <CheckGroup options={["SOC 2 Type II","ISO 27001","HIPAA","PCI DSS","GDPR","CCPA","FERPA","NIST 800-171","FedRAMP","Customer contractual requirements","Investor / board requirements"]} value={data.regulatoryDrivers} onChange={v => set("regulatoryDrivers", v)} />
          </Field>
          <Field label="Target Audit / Certification Period"><input className="grc-input" placeholder="e.g. Q4 2026" value={data.auditPeriod} onChange={e => set("auditPeriod", e.target.value)} /></Field>
        </div>
      );
      case "risk": return (
        <div className="grc-grid">
          <Field label="Risk Appetite" full>
            <div className="grc-slider-wrap">
              <div className="grc-slider-labels"><span>Low</span><span>Moderate</span><span>High</span></div>
              <input className="grc-slider" type="range" min="1" max="5" value={data.riskAppetite} onChange={e => set("riskAppetite", e.target.value)} />
              <div className="grc-slider-value">{["Low","Low-Moderate","Moderate","Moderate-High","High"][+data.riskAppetite - 1]}</div>
            </div>
          </Field>
          <Field label="Data Types Handled" full>
            <CheckGroup options={["Customer PII","Employee PII","Financial Data","Healthcare / PHI","Payment Card Data","Student Records","Intellectual Property","Government Data","Biometric Data","No sensitive data"]} value={data.dataTypes} onChange={v => set("dataTypes", v)} />
          </Field>
          <Field label="Known Risks or Concerns" full>
            <TagsInput value={data.knownRisks} onChange={v => set("knownRisks", v)} placeholder="e.g. no formal IR plan, vendor access not reviewed..." />
          </Field>
        </div>
      );
      case "personnel": return (
        <div className="grc-grid">
          <Field label="Key Security Roles Present" full>
            <CheckGroup options={["CISO","VP Engineering","IT Manager","GRC Analyst","Security Engineer","Compliance Officer","Legal Counsel","DevOps / SRE","Head of Engineering","No dedicated security staff"]} value={data.keyRoles} onChange={v => set("keyRoles", v)} />
          </Field>
          <Field label="Team Structure / Notes" full>
            <textarea className="grc-textarea" placeholder="Any additional context about team structure, reporting lines, or security ownership..." value={data.teamStructure} onChange={e => set("teamStructure", e.target.value)} />
          </Field>
        </div>
      );
      case "controls": return (
        <div className="grc-grid">
          <Field label="Controls / Programs Currently in Place" full>
            <CheckGroup options={["MFA enforced","SSO deployed","Quarterly access reviews","Formal IR plan","Security awareness training","Vulnerability scanning","SIEM / log aggregation","Endpoint protection (EDR)","Penetration testing","Vendor risk assessments","Encrypted backups","Change management process","Data classification policy","Acceptable use policy","Background checks","No formal controls yet"]} value={data.currentControls} onChange={v => set("currentControls", v)} />
          </Field>
          <Field label="Known Gaps or Weaknesses" full>
            <TagsInput value={data.knownGaps} onChange={v => set("knownGaps", v)} placeholder="e.g. no offboarding checklist, no TPRM program..." />
          </Field>
        </div>
      );
      case "review": return (
        <div>
          <div className="grc-review-grid">
            <div className="grc-review-section">
              <div className="grc-review-section-title">🏢 Company</div>
              <div className="grc-review-row"><span className="grc-review-key">Name</span><span className="grc-review-val">{data.companyName || "—"}</span></div>
              <div className="grc-review-row"><span className="grc-review-key">Industry</span><span className="grc-review-val">{data.industry || "—"}</span></div>
              <div className="grc-review-row"><span className="grc-review-key">Employees</span><span className="grc-review-val">{data.employeeCount || "—"}</span></div>
              <div className="grc-review-row"><span className="grc-review-key">Location</span><span className="grc-review-val">{data.hqLocation || "—"}</span></div>
            </div>
            <div className="grc-review-section">
              <div className="grc-review-section-title">☁️ Infrastructure</div>
              <div className="grc-review-tags">{data.cloudProviders?.map(t => <span key={t} className="grc-review-tag">{t}</span>)}</div>
              <div style={{ marginTop: 8 }} className="grc-review-tags">{data.keySystems?.map(t => <span key={t} className="grc-review-tag">{t}</span>)}</div>
            </div>
            <div className="grc-review-section">
              <div className="grc-review-section-title">📋 Compliance</div>
              <div className="grc-review-tags">{data.regulatoryDrivers?.map(t => <span key={t} className="grc-review-tag">{t}</span>)}</div>
              <div className="grc-review-row" style={{ marginTop: 8 }}><span className="grc-review-key">Target</span><span className="grc-review-val">{data.auditPeriod || "—"}</span></div>
            </div>
            <div className="grc-review-section">
              <div className="grc-review-section-title">⚠️ Risk</div>
              <div className="grc-review-row"><span className="grc-review-key">Appetite</span><span className="grc-review-val">{["Low","Low-Moderate","Moderate","Moderate-High","High"][+data.riskAppetite - 1]}</span></div>
              <div className="grc-review-tags">{data.dataTypes?.map(t => <span key={t} className="grc-review-tag">{t}</span>)}</div>
            </div>
            <div className="grc-review-section">
              <div className="grc-review-section-title">🛡️ Current Controls</div>
              <div className="grc-review-tags">{data.currentControls?.map(t => <span key={t} className="grc-review-tag">{t}</span>)}</div>
            </div>
            <div className="grc-review-section">
              <div className="grc-review-section-title">👥 Team</div>
              <div className="grc-review-tags">{data.keyRoles?.map(t => <span key={t} className="grc-review-tag">{t}</span>)}</div>
            </div>
          </div>

          <div style={{ marginTop: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "var(--gold)", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 10 }}>Documents to be generated</div>
            <div className="grc-docs-list">
              {DOCS.map(doc => (
                <div key={doc.id} className="grc-doc-row">
                  <span className="grc-doc-icon">{doc.icon}</span>
                  <div><div className="grc-doc-name">{doc.name}</div><div className="grc-doc-desc">{doc.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
      default: return null;
    }
  }

  const canNext = () => {
    if (step === 0) return data.companyName && data.industry && data.employeeCount;
    return true;
  };

  const isReview = STEPS[step]?.id === "review";
  const isForm = phase === "form";

  return (
    <>
      <style>{STYLES}</style>
      <div className="grc-app">
        <div className="grc-inner">
          <div className="grc-header">
            <div className="grc-logo">
              <div className="grc-logo-icon">⚑</div>
              <span className="grc-logo-text">GRC Forge</span>
            </div>
            <div className="grc-tagline">Professional GRC Document Generator</div>
          </div>

          {isForm && (
            <div className="grc-progress">
              <div className="grc-progress-bar-wrap">
                <div className="grc-progress-bar" style={{ width: `${progress}%` }} />
              </div>
              <div className="grc-steps">
                {STEPS.map((s, i) => (
                  <div key={s.id} className={`grc-step-dot ${i === step ? "active" : i < step ? "done" : ""}`}>
                    {i < step ? "✓" : i + 1}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grc-card">
            {isForm && (
              <div className="grc-card-header">
                <div className="grc-step-label">{STEPS[step]?.icon} Step {step + 1} of {STEPS.length} — {STEPS[step]?.label}</div>
                {step === 0 && <><div className="grc-card-title">Tell us about your company</div><div className="grc-card-desc">We'll use this to personalize all five GRC deliverables to your organization's specific context and industry.</div></>}
                {step === 1 && <><div className="grc-card-title">Infrastructure & systems</div><div className="grc-card-desc">Your tech stack shapes which controls are relevant and how they're documented in each report.</div></>}
                {step === 2 && <><div className="grc-card-title">Compliance context</div><div className="grc-card-desc">Which frameworks and regulations are driving your GRC program? Select all that apply.</div></>}
                {step === 3 && <><div className="grc-card-title">Risk profile</div><div className="grc-card-desc">Your risk appetite and data types determine the tone and focus of the risk register and gap analyses.</div></>}
                {step === 4 && <><div className="grc-card-title">Personnel & team structure</div><div className="grc-card-desc">Security ownership and role assignments will appear in policy ownership tables and remediation plans.</div></>}
                {step === 5 && <><div className="grc-card-title">Current controls & gaps</div><div className="grc-card-desc">What's already in place? This shapes the "current state" sections in every document and focuses the gap analysis.</div></>}
                {step === 6 && <><div className="grc-card-title">Review & generate</div><div className="grc-card-desc">Verify your inputs below. When ready, click Generate — all five documents will be created and ready to download as Markdown files.</div></>}
              </div>
            )}

            {renderStep()}

            {isForm && (
              <div className="grc-actions">
                <button className="grc-btn grc-btn-ghost" onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0}>← Back</button>
                {isReview
                  ? <button className="grc-btn grc-btn-primary" onClick={generate} disabled={!data.companyName}>⚑ Generate All Documents</button>
                  : <button className="grc-btn grc-btn-primary" onClick={() => setStep(s => Math.min(STEPS.length - 1, s + 1))} disabled={!canNext()}>Continue →</button>
                }
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
