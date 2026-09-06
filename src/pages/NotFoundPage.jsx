import React from 'react';
import { FaHome } from 'react-icons/fa';
import Button from '../components/common/Button';
import GlassCard from '../components/common/GlassCard';

export default function NotFoundPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <GlassCard className="p-8 space-y-6">
        <span className="font-mono text-5xl font-extrabold text-gradient-cyan block">
          404
        </span>
        <h1 className="text-2xl font-bold text-white">
          Page Not Found
        </h1>
        <p className="text-sm text-gray-400 max-w-md mx-auto">
          The requested page could not be found. You may return to the homepage or explore one of the portfolio sections.
        </p>
        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={FaHome}>
            Return Home
          </Button>
        </div>
      </GlassCard>
    </div>
  );
}
