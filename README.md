# GRC-Document-Automation-Platform-
This is a multi-step AI-powered intake form collecting all company information a GRC analyst would have, with a clean &amp; professional UI that walks through each section. End Result produces all 5 document packages: a SOC2 Readiness Program, a NIST CSF Assessment, an ISO27001 Gap Analysis, a Risk Register, and finally a Policy &amp; Procedures Library

What problem does it solve?
In a real GRC role, one of the first things you do when joining a company or taking on a new client is produce a set of security and compliance documents such as a SOC 2 readiness program, a risk register, a policy library, and so on. In practice, these documents take weeks to produce because you're starting from scratch every time, manually adapting template language to fit the specific company's industry, size, infrastructure, and regulatory environment.
GRC Forge solves that. You enter the company's details once through a guided form that takes about 5 minutes, and it generates all five documents simultaneously, each one customized to the specific company profile you entered. A GRC analyst who would normally spend two weeks building these deliverables from scratch can produce a complete, professional first draft in minutes.

What does it actually generate?
GRC Forge produces five documents, each one a Markdown file you can download:
1. SOC 2 Type II Readiness Program
This document tells a company whether they're ready for a SOC 2 audit. It maps the company's existing controls against the Trust Services Criteria (the criteria an auditor checks), identifies gaps, and produces a phased remediation roadmap. It's tailored to which TSC categories you selected (Security, Availability, Confidentiality, Processing Integrity, Privacy) and your specific infrastructure.
2. NIST Cybersecurity Framework 2.0 Assessment
This evaluates the company's cybersecurity maturity across the six CSF 2.0 functions — Govern, Identify, Protect, Detect, Respond, and Recover. Each function gets a maturity score from 1 to 5, with a current state and target state. The gap between those two scores drives the remediation roadmap. The assessment language adapts based on what controls you said are currently in place.
3. ISO 27001:2022 Gap Analysis
This evaluates the company against the full ISO 27001:2022 standard — including all mandatory clauses (4 through 10) and the Annex A control themes. Each clause gets a conformity rating: Conformant, Partial, or Non-Conformant. The document includes a certification roadmap with realistic timelines. The control status ratings are driven by what controls you said exist in the intake form.
4. Information Security Risk Register
This produces a structured risk register with at least 10 risks, each scored by likelihood and impact, rated Critical/High/Medium/Low, assigned a treatment option (Mitigate, Accept, Transfer, or Avoid), and linked to remediation actions. The risks are industry-aware — a fintech company gets payment processing risks, a healthcare tech company gets HIPAA breach risks, a SaaS company gets multi-tenant isolation risks.
5. Information Security Policy Library
This generates eight fully written information security policies, each with a policy header (owner, version, effective date, review date), purpose statement, scope, policy requirements, and related framework references. The policies are customized with the actual company name, their key systems, their regulatory drivers, and their specific data types throughout the document.

How the intake form works
The app walks you through six steps before generating anything:

Step 1 — Company Basics: You enter the company name, industry (from a dropdown of 12 industry types), employee count, headquarters location, and a description of the core product or service. These fields appear throughout every generated document.

Step 2 — Infrastructure: You select your cloud providers (AWS, Azure, GCP, multi-cloud, on-premises, or hybrid) using checkbox tiles, enter your key systems (Salesforce, GitHub, Snowflake, etc.) as tags you add one at a time, and select your identity and authentication platform (Azure AD, Okta, Google Workspace, etc.). These choices determine which specific systems get named in the access control sections, which cloud-specific controls get mentioned, and how the logging and monitoring sections are worded.

Step 3 — Compliance Context: You select which regulatory frameworks are driving your GRC program (SOC 2, ISO 27001, HIPAA, PCI DSS, GDPR, CCPA, FERPA, FedRAMP, etc.) and which SOC 2 Trust Services Criteria you want included in scope. You also enter your target audit or certification period. These choices shape the entire framing of the compliance gap documents.

Step 4 — Risk Profile: You set your organization's risk appetite using a slider from Low to High. You select the types of data the company handles (customer PII, financial data, PHI, payment card data, student records, etc.). You can also tag known risks or concerns you want included. The risk appetite setting affects how risk ratings are framed in the risk register, and the data types drive which specific data appears in the risk scenarios.

Step 5 — Current Controls: You select which security controls and programs are already in place — MFA, SSO, quarterly access reviews, an incident response plan, vulnerability scanning, SIEM, EDR, pen testing, vendor risk assessments, encrypted backups, and so on. This is the most important step for the gap analysis documents, because each document's "current state" assessments are driven by what you select here. If you check "MFA enforced," the ISO 27001 gap analysis marks Control 8.5 (Secure Authentication) as Conformant. If you don't check it, the same control is marked Non-Conformant with a gap action.
Step 6 — Review and Generate: This shows a summary of everything you entered, organized into a clean grid. You can see at a glance which controls are selected, which frameworks are in scope, and what the company profile looks like. When you click Generate, the app runs all five document generators in sequence, showing a live log of which document is being built. Each takes about a second. When all five are done, you get a download panel.
