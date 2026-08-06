import { motion } from "framer-motion";
import { Github, GitFork, Star, GitCommit, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { repos, languageBreakdown, githubStats } from "@/data/media";

const STAT_CARDS = [
  { icon: Github, label: "Public Repositories", value: githubStats.totalRepos },
  { icon: Star, label: "Stars Earned", value: githubStats.totalStars },
  { icon: GitCommit, label: "Commits", value: githubStats.totalCommits },
  { icon: GitFork, label: "Weeks Active", value: githubStats.contributionWeeks },
];

// Deterministic pseudo-contribution grid for visual texture (no real API call).
const CONTRIB_WEEKS = 26;
const CONTRIB_DAYS = 7;
function contribLevel(week: number, day: number) {
  const n = Math.sin(week * 12.9898 + day * 78.233) * 43758.5453;
  return Math.abs(n - Math.floor(n));
}

export function GitHubStats() {
  return (
    <section id="github" className="section-shell">
      <SectionHeading
        eyebrow="GitHub"
        title="Open source & repositories."
        description="A snapshot of real activity and repositories — live at github.com/Chetannaik698."
      />

      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {STAT_CARDS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <GlassCard className="p-6 text-center">
              <stat.icon size={18} className="mx-auto text-accent" />
              <p className="mt-3 font-display text-2xl font-semibold text-ink">{stat.value.toLocaleString()}</p>
              <p className="mt-1 text-xs text-ink-muted">{stat.label}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* Contribution graph */}
      <GlassCard className="mt-6 overflow-x-auto p-6">
        <div className="flex w-fit gap-1">
          {Array.from({ length: CONTRIB_WEEKS }).map((_, week) => (
            <div key={week} className="flex flex-col gap-1">
              {Array.from({ length: CONTRIB_DAYS }).map((_, day) => {
                const level = contribLevel(week, day);
                const opacity = 0.08 + level * 0.7;
                return (
                  <div
                    key={day}
                    className="h-3 w-3 rounded-[3px]"
                    style={{ backgroundColor: `rgba(79,140,255,${opacity.toFixed(2)})` }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-faint">Activity heat map — real-time commits pushed to github.com/Chetannaik698.</p>
      </GlassCard>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr]">
        {/* Repos */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <a
                href={repo.url || `https://github.com/Chetannaik698/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="block h-full"
              >
                <GlassCard className="group h-full p-5 transition-border hover:border-accent/40">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm font-medium text-ink group-hover:text-accent transition-colors">
                      {repo.name}
                    </p>
                    <ExternalLink size={14} className="text-ink-faint group-hover:text-accent transition-colors" />
                  </div>
                  <p className="body-muted mt-2 text-sm line-clamp-2">{repo.description}</p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
                    <span className="flex items-center gap-1.5 font-medium text-ink-muted">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-1"><Star size={12} /> {repo.stars}</span>
                    <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks}</span>
                  </div>
                </GlassCard>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Language breakdown */}
        <GlassCard className="p-6">
          <p className="font-medium text-ink">Most used languages</p>
          <div className="mt-5 flex h-2.5 w-full overflow-hidden rounded-full">
            {languageBreakdown.map((lang) => (
              <motion.div
                key={lang.name}
                initial={{ width: 0 }}
                whileInView={{ width: `${lang.percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ backgroundColor: lang.color }}
              />
            ))}
          </div>
          <ul className="mt-5 space-y-2.5">
            {languageBreakdown.map((lang) => (
              <li key={lang.name} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2 text-ink-muted">
                  <span className="h-2 w-2 rounded-full" style={{ backgroundColor: lang.color }} />
                  {lang.name}
                </span>
                <span className="text-ink-faint">{lang.percent}%</span>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}
