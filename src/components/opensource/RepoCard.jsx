import { FaBook, FaStar, FaCodeBranch, FaExternalLinkAlt, FaClock } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';

export default function RepoCard({ repo }) {
  return (
    <GlassCard className="flex flex-col justify-between h-full p-5 space-y-4">
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <FaBook className="w-4 h-4 text-cyan-400 shrink-0" />
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-white hover:text-cyan-400 transition truncate"
            >
              {repo.name}
            </a>
          </div>
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white p-1"
            aria-label={`Visit ${repo.name}`}
          >
            <FaExternalLinkAlt className="w-3 h-3" />
          </a>
        </div>

        <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {repo.description}
        </p>

        {/* Topics */}
        <div className="flex flex-wrap gap-1 mb-4">
          {repo.topics.map((topic) => (
            <Badge key={topic} size="sm" variant="default" className="text-[10px]">
              {topic}
            </Badge>
          ))}
        </div>
      </div>

      <div className="pt-3 border-t border-gray-850 space-y-2">
        <div className="flex items-center justify-between text-xs font-mono text-gray-400">
          <span className="flex items-center gap-1.5 text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            {repo.language}
          </span>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 hover:text-white transition">
              <FaStar className="w-3 h-3 text-amber-400" />
              {repo.stars}
            </span>
            <span className="flex items-center gap-1 hover:text-white transition">
              <FaCodeBranch className="w-3 h-3 text-cyan-400" />
              {repo.forks}
            </span>
          </div>
        </div>

        {/* Last Updated */}
        <div className="flex items-center gap-1 text-[11px] text-gray-500 font-mono">
          <FaClock className="w-2.5 h-2.5 text-gray-600" />
          <span>{repo.lastUpdated}</span>
        </div>
      </div>
    </GlassCard>
  );
}
