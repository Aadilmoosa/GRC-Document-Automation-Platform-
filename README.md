# GRC Document Automation Platform

**Built by Aadil Moosa | GRC Analyst | ISC2 Certified in Cybersecurity (CC) | CISA Candidate**

A professional-grade GRC document generation platform that produces five fully
customized information security deliverables from a single company profile intake
form. Built to demonstrate practical GRC skills and technical breadth as part of
an active CISA certification preparation portfolio.

---

## What Problem Does It Solve?

In a real GRC role, one of the first things you do when joining a company or
taking on a new client is produce a set of security and compliance documents —
a SOC 2 readiness program, a risk register, a policy library, and so on. In
practice, these documents take weeks to produce because you're starting from
scratch every time, manually adapting template language to fit the specific
company's industry, size, infrastructure, and regulatory environment.

This platform solves that. You enter the company's details once through a guided
form that takes about 5 minutes, and it generates all five documents
simultaneously — each one customized to the specific company profile you entered.
A GRC analyst who would normally spend two weeks building these deliverables from
scratch can produce a complete, professional first draft in minutes.

---

## What Does It Generate?

Five downloadable Markdown files, each fully customized to the company profile
you enter:

| Document | Framework | Description |
|---|---|---|
| SOC 2 Type II Readiness Program | AICPA SOC 2 | TSC control mapping, gap analysis & phased remediation roadmap |
| NIST CSF 2.0 Assessment | NIST CSF 2.0 | Six-function maturity scoring with current vs. target state |
| ISO 27001:2022 Gap Analysis | ISO/IEC 27001:2022 | Mandatory clause & Annex A conformity assessment with certification roadmap |
| Information Security Risk Register | ISO 27001 / NIST 800-30 | Risk scoring matrix with treatment plan and remediation detail |
| Information Security Policy Library | Multi-framework | 8 fully written policies covering all core security domains |

Every document is tailored to the specific company. A fintech company gets
payment processing risks in its risk register. A healthcare company gets
HIPAA-specific gaps. A company with MFA already deployed gets different
conformity ratings than one without.

---

## How the Intake Form Works

The platform walks you through six steps before generating anything:

**Step 1 — Company Basics**
Enter the company name, industry, employee count, headquarters location, and a
description of the core product or service. These fields appear throughout every
generated document.

**Step 2 — Infrastructure**
Select your cloud providers (AWS, Azure, GCP, multi-cloud, on-premises, or
hybrid), enter your key systems (Salesforce, GitHub, Snowflake, etc.), and
select your identity and authentication platform (Azure AD, Okta, Google
Workspace, etc.). These choices determine which specific systems are named in
the access control sections and how logging and monitoring sections are worded.

**Step 3 — Compliance Context**
Select which regulatory frameworks are driving your GRC program (SOC 2, ISO
27001, HIPAA, PCI DSS, GDPR, CCPA, FERPA, FedRAMP, etc.) and which SOC 2
Trust Services Criteria you want in scope. These choices shape the entire
framing of the compliance gap documents.

**Step 4 — Risk Profile**
Set your organization's risk appetite using a slider from Low to High and select
the types of data the company handles (customer PII, financial data, PHI,
payment card data, student records, etc.). The risk appetite affects how risk
ratings are framed, and the data types drive which specific data appears in risk
scenarios.

**Step 5 — Current Controls**
Select which security controls and programs are already in place — MFA, SSO,
quarterly access reviews, an incident response plan, vulnerability scanning,
SIEM, EDR, pen testing, vendor risk assessments, encrypted backups, and more.
This is the most important step for the gap analysis documents. If you select
"MFA enforced," the ISO 27001 gap analysis marks Control 8.5 (Secure
Authentication) as Conformant. If you don't, it marks it Non-Conformant with
a remediation action.

**Step 6 — Review and Generate**
A summary of everything you entered appears in a clean grid. When you click
Generate, the platform runs all five document generators in sequence with a
live build log. When all five are complete, a download panel appears with one
button per document plus a Download All option.

---

## How to Run It Locally

### Prerequisites

You need **Node.js 18 or higher** installed on your machine.

- Download it at **https://nodejs.org** — click the LTS version
- After installing, verify it worked by opening your terminal and running:
```bash
node --version
npm --version
```

Both commands should print version numbers. If they do, you're ready.

### Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/Aadilmoosa/GRC-Document-Automation-Platform-.git
cd GRC-Document-Automation-Platform-
```

**2. Install dependencies**
```bash
npm install
```

**3. Start the development server**
```bash
npm run dev
```

**4. Open your browser and go to:**
```
http://localhost:5173
```

You should see the GRC Document Automation Platform load — the dark interface
with the gold logo. The app is now running locally on your machine.

### Stopping the App

Press `Ctrl + C` in your terminal to stop the development server.

---

## How to Use the Platform (Step-by-Step)

**1. Fill out the intake form**

Work through the six steps using the Continue button to advance. All fields
in Step 1 (company name, industry, employee count) are required before you
can proceed. Every other step is optional but the more detail you provide,
the more customized and accurate your documents will be.

**2. Review your inputs**

Step 6 shows a summary grid of everything you entered. Review it to make sure
the company profile is accurate before generating.

**3. Click Generate**

Hit the Generate All Documents button. A live log will appear showing each
document being built in sequence. The full generation takes about 5–8 seconds.

**4. Download your documents**

When generation completes, a download panel appears. You can download each
document individually by clicking its row, or click Download All 5 Files to
get everything at once. Each file downloads as a Markdown (.md) file named
after your company — for example:
```
Acme_Corp_SOC2_Readiness_Program.md
Acme_Corp_NIST_CSF_Assessment.md
Acme_Corp_ISO27001_Gap_Analysis.md
Acme_Corp_Risk_Register.md
Acme_Corp_Policy_Library.md
```

**5. Use your documents**

Markdown files open in any text editor, code editor (VS Code renders them
beautifully), or can be pasted directly into Notion, Confluence, Google Docs,
or any documentation platform. You can also convert them to Word or PDF using
free tools like Pandoc or online Markdown converters.

---

## Technical Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool and development server |
| Pure CSS | All custom styles — no component library |
| Google Fonts | DM Serif Display, DM Mono, Outfit |
| JavaScript template literals | Document generation engine |
| Blob API | Client-side file download (no server required) |

---

## Portfolio Context

This tool is part of a broader GRC portfolio built during active CISA exam
preparation. The full portfolio demonstrates practical application of every
major GRC framework:

| Project | Type | Fictional Company | Framework |
|---|---|---|---|
| SOC 2 Readiness Program | GRC Deliverable | Meridian Analytics | SOC 2 Type II |
| NIST CSF 2.0 Assessment | GRC Deliverable | Veridian Health | NIST CSF 2.0 |
| ISO 27001 Gap Analysis | GRC Deliverable | Crestline Payments | ISO/IEC 27001:2022 |
| Risk Register | GRC Deliverable | Axiom Pay | ISO 27001 / NIST 800-30 |
| Policy Library | GRC Deliverable | Luminary Learning | Multi-framework |
| ITGC Audit Program & Workpapers | CISA Deliverable | Callisto Cloud | ISACA / COSO / PCAOB AS 2201 |
| GRC Document Automation Platform | Tool | — | All five frameworks |

---

## About

**Aadil Moosa**
GRC Analyst · Dallas, TX
ISC2 Certified in Cybersecurity (CC) · CISA Candidate

[LinkedIn](www.linkedin.com/in/aadil-moosa-) ·
[GitHub](https://github.com/Aadilmoosa)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
