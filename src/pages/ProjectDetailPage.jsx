import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import GlassCard from '../components/common/GlassCard';
import Badge from '../components/common/Badge';
import Button from '../components/common/Button';
import ArchitectureDiagram from '../components/projects/ArchitectureDiagram';
import ScreenshotsGallery from '../components/projects/ScreenshotsGallery';
import { projectsData } from '../data/projectsData';

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <GlassCard className="p-8">
          <FaExclamationTriangle className="w-10 h-10 text-amber-400 mx-auto mb-3" />
          <h2 className="text-xl font-bold text-white">Project Not Found</h2>
          <p className="text-sm text-gray-400 mb-6">The requested case study could not be located.</p>
          <Button to="/projects" variant="primary" size="sm" icon={FaArrowLeft}>
            Back to All Projects
          </Button>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Back Button */}
      <Link 
        to="/projects" 
        className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-cyan-400 transition"
      >
        <FaArrowLeft className="w-3 h-3" /> Back to All Projects
      </Link>

      {/* Project Header Card */}
      <GlassCard className="p-6 sm:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Badge variant="cyan" size="md">{project.category}</Badge>
            <Badge variant="glow" size="md">{project.status}</Badge>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gray-800 hover:bg-gray-750 text-white border border-gray-700 transition"
            >
              <FaGithub className="w-3.5 h-3.5" /> GitHub
            </a>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-md shadow-cyan-950/40 transition"
            >
              <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
            </a>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {project.title}
        </h1>

        <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-3xl">
          {project.shortDesc}
        </p>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800/80">
          <span className="text-xs font-mono text-gray-500 mr-2 py-1">Technologies:</span>
          {project.technologies.map(tech => (
            <Badge key={tech} size="sm" variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </GlassCard>

      {/* Overview & Problem Solved Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="p-6 space-y-2">
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-cyan-400 font-mono text-xs">
            System Overview
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.fullDesc}
          </p>
        </GlassCard>

        <GlassCard className="p-6 space-y-2">
          <h3 className="text-base font-bold text-white tracking-wide uppercase text-blue-400 font-mono text-xs">
            Problem Solved
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {project.problemSolved}
          </p>
        </GlassCard>
      </div>

      {/* Key Features List */}
      <GlassCard className="p-6 space-y-3">
        <h3 className="text-lg font-bold text-white tracking-tight">
          Key Capabilities & Features
        </h3>
        <div className="space-y-2.5">
          {project.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-300">
              <FaCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
              <span className="leading-relaxed">{feat}</span>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* Architecture Diagram */}
      <ArchitectureDiagram project={project} />

      {/* Screenshots Gallery */}
      <ScreenshotsGallery project={project} />
    </div>
  );
}
