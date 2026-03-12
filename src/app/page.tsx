export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 border-b border-border bg-surface/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <span className="text-lg font-bold text-foreground">AZ</span>
          <div className="flex gap-6 text-sm font-medium text-muted">
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
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-foreground">
              Alex Zoumaya
            </h1>
            <p className="mt-2 text-xl text-accent font-medium">
              Software Engineer II
            </p>
            <p className="mt-1 text-muted">Chicago, IL</p>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Front-end Software Engineer with 5 years experience building
            high-performance Vue.js applications at FOX Sports. Experienced in
            live event platforms, interactive gaming, cross-platform
            collaboration, third-party integration, and SEO-driven content
            delivery for millions of users.
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
      <section id="experience" className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold text-foreground">Work Experience</h2>
        <div className="mt-8 space-y-10">
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
              <span className="shrink-0 rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent">
                Jan 2021 &ndash; Mar 2026
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Lead development of interactive, high-traffic Vue.js interfaces
                supporting online games and live streaming events viewed by an
                average of 4.7M users per month.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Drove SEO improvements delivering millions of organic visits with
                peaks as high as 5.3M users for a single piece of content.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Integrated third-party partners (DraftKings, Cipher, and
                FairPlay) into the FOX Sports ecosystem.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Provided real-time engineering support during major events (World
                Cup, Super Bowl), ensuring zero downtime and optimal performance.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Collaborated across engineering, product, and design teams to
                maintain consistent UI/UX across platforms.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Worked with ad agencies achieving monthly ad revenue of{" "}
                $100K per month.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Deployed code using GitHub and managed multiple environments
                through CI/CD workflows.
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Conducted code reviews and enforced best practices to improve
                maintainability and team performance.
              </li>
            </ul>
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
              <span className="shrink-0 rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent">
                Jan 2019 &ndash; May 2020
              </span>
            </div>
            <ul className="mt-6 space-y-3 text-muted">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Administered lab sessions with students
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Routinely graded labs and assignments submitted by students
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Answered questions about general programming concepts and
                homework assignments
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold text-foreground">Awards</h2>
        <div className="mt-8 rounded-xl border border-border bg-surface p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M18.75 4.236c.982.143 1.954.317 2.916.52A6.003 6.003 0 0 1 16.27 9.728M18.75 4.236V4.5c0 2.108-.966 3.99-2.48 5.228m0 0a6.023 6.023 0 0 1-2.77.896m5.25-6.624V2.721" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">
                Emmy Nomination: Outstanding Interactive Experience, Event Coverage
              </h3>
              <p className="mt-1 text-muted">
                2022 FIFA World Cup &ndash; FOX | FS1 | FOX Digital
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold text-foreground">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              Frontend
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Vue.js", "React", "JavaScript", "HTML/CSS"].map((skill) => (
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
              {["GoLang", "Python", "Java"].map((skill) => (
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
              Tools
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Claude",
                "Cursor",
                "Git",
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
              Methodologies
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {["SAFe Agile", "CI/CD", "Code Reviews", "Sprint Planning"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold text-foreground">Education</h2>
        <div className="mt-8 rounded-xl border border-border bg-surface p-8">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                University of Dayton
              </h3>
              <p className="text-accent font-medium">Computer Science Major</p>
              <p className="text-sm text-muted">Dayton, Ohio</p>
            </div>
            <span className="shrink-0 rounded-full bg-accent-light px-3 py-1 text-sm font-medium text-accent">
              Class of 2020
            </span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-4xl px-6 py-8">
        <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
        <div className="mt-8 rounded-xl border border-border bg-surface p-8">
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
      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} Alex Zoumaya. All rights reserved.</p>
      </footer>
    </div>
  );
}
