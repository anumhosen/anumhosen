import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Badge from '../common/Badge';
import { projectsData } from '../../data/projectsData';

export default function FeaturedTeaser() {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  const getStatusVariant = (status) => {
    switch (status) {
      case 'In Progress': return 'cyan';
      case 'Completed': return 'glow';
      case 'Research': return 'blue';
      default: return 'default';
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
        <div>
          <Badge variant="cyan" size="sm" className="mb-2">Portfolio Showcase</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm text-gray-400 mt-1 max-w-xl">
            Selected native desktop tools, multi-database synchronizers, and local AI utilities.
          </p>
        </div>
        <Link 
          to="/projects" 
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition group"
        >
          View All 7 Projects 
          <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <GlassCard className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={getStatusVariant(project.status)} size="sm">
                    {project.status}
                  </Badge>
                  <span className="text-xs text-gray-500 font-mono">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2 leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 3).map(tech => (
                    <Badge key={tech} size="sm" variant="default">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge size="sm" variant="outline">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-850 text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition"
                >
                  <FaGithub className="w-3.5 h-3.5" /> Source
                </a>
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:underline"
                >
                  Case Study <FaArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
