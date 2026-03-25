import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 w-full border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
          <span className="shrink-0 text-lg font-bold text-foreground">AZ</span>
          <div className="scrollbar-hide flex gap-3 overflow-x-auto text-sm font-medium text-muted">
            <a href="#about" className="transition-colors hover:text-foreground">
              About
            </a>
            <a href="#experience" className="transition-colors hover:text-foreground">
              Experience
            </a>
            <a href="#skills" className="transition-colors hover:text-foreground">
              Skills
            </a>
            <a href="#education" className="transition-colors hover:text-foreground">
              Education
            </a>
            <a href="#contact" className="transition-colors hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header id="about" className="mx-auto max-w-4xl px-6 pt-10 pb-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-6">
            <Image
              src="/headshot.JPG"
              alt="Alex Zoumaya"
              width={224}
              height={224}
              quality={90}
              className="h-28 w-28 shrink-0 rounded-full border-2 border-border object-cover object-[30%_20%]"
            />
            <div>
              <h1 className="text-5xl font-bold tracking-tight text-foreground">
                Alex Zoumaya
              </h1>
              <p className="mt-2 text-xl text-accent font-medium">
                Software Engineer II
              </p>
              <p className="mt-1 text-muted">Chicago, IL</p>
            </div>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Software engineer with 5+ years of experience building and operating
            high-scale, real-time applications serving 10M+ monthly average
            users. Experienced in performance optimization, reliability under
            extreme traffic conditions, and designing systems that support live,
            event-driven environments. Strong interest in AI-assisted development
            and building intelligent, user-facing systems powered by modern
            tooling.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:azoumaya@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/alex-zoumaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Experience */}
      <section id="experience" className="mx-auto max-w-4xl px-6 py-4">
        <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
        <div className="mt-4 space-y-10">
          {/* FOX Sports */}
          <div className="rounded-xl border border-border bg-surface p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  FOX Sports
                </h3>
                <p className="text-accent font-medium">Software Engineer II</p>
                <p className="text-sm text-muted">Remote</p>
              </div>
              <span className="self-start rounded-full bg-accent-light px-3 py-1 text-xs sm:text-sm font-medium text-accent whitespace-nowrap">
                Jan 2021 &ndash; Mar 2026
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Led development of high-performance, real-time web applications
                in Vue.js supporting live sports and gaming experiences for 10M+
                monthly users
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Partnered cross-functionally with product, design, and analytics
                teams to deliver both new features and consistent, high-quality
                user experiences across platforms
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Drove SEO and content performance improvements resulting in
                millions of incremental organic users, with peak traffic reaching
                5.3M users on a single feature
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Integrated third-party platforms (DraftKings, FairPlay, Cipher)
                into core product ecosystem, enabling new interactive and
                revenue-generating experiences
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Owned production reliability during high-stakes live events,
                maintaining zero downtime under extreme traffic spikes
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Improved team velocity and code quality through code reviews,
                shared standards, and mentorship
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Contributed to CI/CD pipelines and deployment workflows using
                GitHub, supporting multiple environments and rapid release cycles
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Supported monetization initiatives contributing to $100K+ in
                monthly ad revenue
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-accent">
                Projects
              </h4>
              <div className="mt-3 space-y-4">
                <div className="rounded-lg border border-border p-4">
                  <a
                    href="https://www.foxsports.com/nfl/2026-super-bowl-lx-seattle-seahawks-vs-new-england-patriots-feb-08-2026-game-boxscore-11036"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-accent"
                  >
                    Event Page Redesign
                    <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <p className="mt-2 text-sm text-muted">
                    Served as tech lead on a full redesign of the most visited
                    page on FOX Sports. Rebuilt headers, components, and backend
                    infrastructure from the ground up. This was one of my
                    cornerstone projects during my time at FOX.
                  </p>
                </div>
                <div className="rounded-lg border border-border p-4">
                  <a
                    href="https://www.foxsports.com/fox-super-6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-foreground transition-colors hover:text-accent"
                  >
                    FOX Super 6
                    <svg className="h-3.5 w-3.5 text-muted" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                  <p className="mt-2 text-sm text-muted">
                    Free-to-play prediction game where users pick outcomes for a
                    chance to win prizes. Architected the main question flow that
                    users scroll through to make their picks. Built and
                    maintained the interactive frontend powering live gameplay
                    experiences for millions of users.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* University of Dayton */}
          <div className="rounded-xl border border-border bg-surface p-8">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-xl font-semibold text-foreground">
                  University of Dayton
                </h3>
                <p className="text-accent font-medium">
                  Teaching Assistant &ndash; Computer Science
                </p>
                <p className="text-sm text-muted">Dayton, OH</p>
              </div>
              <span className="self-start rounded-full bg-accent-light px-3 py-1 text-xs sm:text-sm font-medium text-accent whitespace-nowrap">
                Jan 2019 &ndash; May 2020
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Supported instruction for computer science coursework, assisting
                students with programming concepts and debugging
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Led lab sessions and provided guidance on assignments, improving
                student comprehension and performance
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Evaluated and graded coursework with a focus on clarity,
                accuracy, and constructive feedback
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mx-auto max-w-4xl px-6 py-4">
        <h2 className="text-2xl font-bold text-foreground">Awards</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.77.896m5.25-6.624V2.721" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Emmy Award Nominee &ndash; Outstanding Interactive Experience, Event Coverage
              </h3>
              <p className="mt-1 text-muted">
                2022 FIFA World Cup &ndash; FOX | FS1 | FOX Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-4xl px-6 py-4">
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Frontend
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Vue.js", "React", "TypeScript", "HTML5", "CSS3"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Backend
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Go", "Python", "Java"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Tools & Platforms
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Git",
                "GitHub",
                "CI/CD",
                "Amplitude",
                "DataDog",
                "Chartbeat",
                "Adobe Analytics",
                "Bash",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              AI & Developer Tools
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Claude", "Cursor"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Methodologies
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Agile (SAFe)"].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-4xl px-6 py-4">
        <h2 className="text-2xl font-bold text-foreground">Education</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                University of Dayton
              </h3>
              <p className="text-accent font-medium">Bachelor of Science in Computer Science</p>
              <p className="text-sm text-muted">Dayton, OH</p>
            </div>
            <span className="self-start rounded-full bg-accent-light px-3 py-1 text-xs sm:text-sm font-medium text-accent whitespace-nowrap">
              May 2020
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-4">
        <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        <div className="mt-4 rounded-xl border border-border bg-surface p-8">
          <p className="text-muted">
            Interested in working together? Feel free to reach out.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <a
              href="mailto:azoumaya@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              azoumaya@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/alex-zoumaya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent/90"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-4 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Alex Zoumaya. All rights reserved.</p>
      </footer>
    </div>
  );
}
