import React, { useState } from 'react';
import { FaPaperPlane, FaCheckCircle } from 'react-icons/fa';
import GlassCard from '../common/GlassCard';
import Button from '../common/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('submitting');
    // Simulate swift submission feedback
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <GlassCard className="p-6 sm:p-8">
      <h3 className="text-xl font-bold text-white mb-2">
        Send a Message
      </h3>
      <p className="text-xs sm:text-sm text-gray-400 mb-6">
        Have a project idea, research collaboration, or question? Fill out the form below.
      </p>

      {status === 'success' ? (
        <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-center space-y-3">
          <FaCheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
          <h4 className="text-base font-bold text-white">Message Sent Successfully!</h4>
          <p className="text-xs text-gray-300">
            Thank you for reaching out. I will get back to you promptly.
          </p>
          <Button
            onClick={() => setStatus('idle')}
            variant="secondary"
            size="sm"
            className="mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-mono font-medium text-gray-300 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-mono font-medium text-gray-300 mb-1.5">
              Your Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-mono font-medium text-gray-300 mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-2.5 rounded-lg bg-gray-950/80 border border-gray-800 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
            />
          </div>

          <Button
            onClick={handleSubmit}
            variant="primary"
            size="md"
            icon={FaPaperPlane}
            disabled={status === 'submitting'}
            className="w-full"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </GlassCard>
  );
}
