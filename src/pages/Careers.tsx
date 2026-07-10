import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import { Briefcase, MapPin, Clock, ArrowRight, X, Upload, Check, AlertCircle } from 'lucide-react';

interface JobDetail {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  offers: string[];
}

const Careers: React.FC = () => {
  useSEO({
    title: 'Careers & Digital Marketing Jobs',
    description: 'Join the Momentrix Media team. We are looking for talented SEO specialists, paid performance ads managers, developers, and designers to scale brand equity.',
    keywords: 'Digital Marketing Careers, SEO Jobs Hyderabad, Join Momentrix Media, Remote Developer Jobs, Performance Marketing Roles',
    schemaMarkup: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Careers - Momentrix Media",
      "description": "Join our team of creative, analytical, and growth-oriented professionals.",
      "url": "https://momentrixmedia.com/careers",
      "publisher": {
        "@type": "Organization",
        "name": "Momentrix Media",
        "logo": {
          "@type": "ImageObject",
          "url": "https://momentrixmedia.com/assets/Main%20Favicon%20Dark-D6WWraH_.png"
        }
      }
    }
  });

  const jobs: JobDetail[] = [
    {
      title: "Video & Poster Editor (Post-Production & Content)",
      department: "Creative & Design",
      location: "Remote / Hyderabad",
      type: "Full-time",
      experience: "1+ Years",
      summary: "We are seeking a highly creative and technically skilled Video Editor with 1+ years of professional experience to join our media production team. In this role, you will take raw, unedited footage and transform it into high-impact, polished video content tailored for social media, brand campaigns, and digital platforms. The ideal candidate is a visual storyteller who understands pacing, emotional hooks, and platform-specific formats (vertical reels vs long-form widescreen). You should be thoroughly fluent in industry-standard editing suites, possess a strong eye for continuity and color, and be adept at leveraging modern AI tools to accelerate post-production workflows.",
      responsibilities: [
        "Assembly & Narrative Pacing: Review raw footage, audio logs, and scripts to assemble tight rough cuts, ensuring logical sequencing, narrative flow, and high viewer retention.",
        "Audio & Sound Design: Clean up dialogue, sync multi-cam tracks, mix sound effects (SFX), and layer background scores to create immersive audio experiences.",
        "Color Grading & Correction: Perform color correction to fix exposure/lighting inconsistencies and apply creative color grading to match the intended brand aesthetic or mood.",
        "Motion Graphics & Kinetic Text: Integrate engaging lower-thirds, transitions, call-outs, and highly accurate kinetic subtitles to optimize videos for sound-off mobile viewing.",
        "Multi-Platform Optimization: Export and format final masters for various digital channels, including vertical cuts (9:16 for TikTok/Instagram Reels/Shorts) and standard landscape formats (16:9 for YouTube/Web).",
        "Asset Management: Maintain a highly organized file structure, managing project files, proxy workflows, back-ups, and raw footage archives efficiently."
      ],
      skills: [
        "Experience: 1+ years of proven experience as a video editor, preferably within a digital agency, production house, or fast-paced brand environment. A link to a diverse showreel or portfolio is mandatory.",
        "Industry-Standard NLEs: Advanced proficiency in at least one major non-linear editor (NLE): Adobe Premiere Pro (including dynamic linking with After Effects) OR DaVinci Resolve (strong focus on the Color and Fairlight pages).",
        "Motion Graphics & VFX: Foundational skills in Adobe After Effects for creating custom text animations, basic transitions, and masking/tracking.",
        "Modern AI Editing Workflows: Familiarity with modern AI-accelerated tools to optimize turnaround times, such as: Adobe Sensei features (Auto-reframe, AI dialogue cleanup, text-to-caption).",
        "Creative Sensibility: A sharp eye for framing, visual rhythm, timing to music beats, and keeping up-to-date with trending social media editing styles."
      ],
      offers: [
        "Competitive salary matching industry benchmarks for mid-level creatives.",
        "A collaborative, forward-thinking environment where your creative choices directly shape brand identity."
      ]
    },
    {
      title: "Business Development Manager (Digital Marketing)",
      department: "Sales & Client Growth",
      location: "Remote / Hybrid",
      type: "Full-time",
      experience: "1-3 Years",
      summary: "We are looking for an ambitious and results-driven Business Development Manager (BDM) with 1+ years of experience to drive market growth and acquire new clients for our Momentrix media. In this role, you will bridge the gap between business opportunities and creative digital solutions. You will be responsible for identifying high-potential prospects, understanding their business goals, and pitching tailored digital marketing services (including SEO, Paid Media, Social Media Marketing, and Content Strategy) to secure new partnerships.",
      responsibilities: [
        "Lead Generation & Pipeline Building: Proactively identify and prospect potential B2B clients through cold outreach, LinkedIn networking, industry events, and digital channels.",
        "Consultative Pitching: Conduct discovery calls to assess client business needs, pain points, and current digital footprint, then propose matching agency services.",
        "Market Intelligence: Stay updated on digital marketing trends, platform updates, and competitor strategies to identify new niche markets and service opportunities.",
        "CRM Management: Maintain clean, accurate data on all prospects, interactions, and deal stages within our CRM platform."
      ],
      skills: [
        "Experience: 1 to 3 years of proven experience in a sales, business development, or account management role, strictly within a digital marketing agency setup.",
        "Domain Knowledge: A solid foundational understanding of core digital marketing concepts, including search engine optimization (SEO), pay-per-click (PPC) advertising, social media metrics, and lead generation funnels.",
        "Communication: Good verbal and written communication skills, with a proven ability to craft compelling cold emails and deliver confident presentations.",
        "Sales Acumen: Strong relationship-building skills, active listening, and a consultative approach rather than a aggressive, transactional sales style.",
        "Education: Bachelor’s degree in Marketing is an added advantage."
      ],
      offers: [
        "Competitive base salary with an attractive, uncapped commission/incentive structure based on closed revenue.",
        "A dynamic, collaborative environment with continuous learning opportunities in cutting-edge AI and digital marketing strategies."
      ]
    }
  ];

  const speculativeJob: JobDetail = {
    title: "General / Speculative Application",
    department: "General Interest",
    location: "Remote / Office",
    type: "Full-time / Part-time",
    experience: "Any Experience",
    summary: "Don't see a fit? We are always looking for great talent. Send us your resume and tell us what you're passionate about, and we'll keep you in mind for future roles.",
    responsibilities: [
      "Let us know your area of expertise (e.g. Design, Engineering, Copywriting, Ads Management, etc.)",
      "Briefly describe how you can help Momentrix Media scale digital workflows.",
      "Submit your portfolio links or case studies."
    ],
    skills: [
      "Passion for digital marketing, creative post-production, or AI automation.",
      "Strong communication and self-driven working ethics."
    ],
    offers: [
      "Opportunity to shape new digital initiatives.",
      "Competitive compensation packages based on skills and contributions."
    ]
  };

  // State for active job in the modal
  const [activeJob, setActiveJob] = useState<JobDetail | null>(null);

  // Application form states
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeBase64, setResumeBase64] = useState<string>('');
  const [fileError, setFileError] = useState('');
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2.5 * 1024 * 1024) {
        setFileError('File size must be less than 2.5MB');
        return;
      }
      setResumeFile(file);
      setFileError('');
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setResumeBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeJob) return;
    if (!resumeFile || !resumeBase64) {
      setFileError('Please upload your resume file.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/careers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          jobTitle: activeJob.title,
          resumeName: resumeFile.name,
          resumeData: resumeBase64
        })
      });

      const contentType = response.headers.get('content-type');
      let data;
      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || `Server returned error status ${response.status}`);
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application.');
      }

      setSubmitted(true);
      // Reset form
      setForm({ firstName: '', lastName: '', email: '', phone: '' });
      setResumeFile(null);
      setResumeBase64('');
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Header */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Join Our <span className="gradient-text">Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400"
          >
            We are always looking for passionate, creative, and data-driven individuals to help us build the future of digital marketing.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              "Competitive Salary & Equity", 
              "Unlimited PTO", 
              "Learning & Development Budget",
              "Latest Tech Gear"
            ].map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center justify-center min-h-[120px]"
              >
                <span className="font-bold text-slate-700 dark:text-slate-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="pb-24 pt-8">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h3 className="text-3xl font-bold mb-8">Open Positions</h3>
          
          <div className="flex flex-col gap-4">
            {jobs.map((job, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => {
                  setActiveJob(job);
                  setSubmitted(false);
                  setError('');
                }}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-primary-500 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Clock className="w-4 h-4" /> {job.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 group-hover:text-primary-600 transition-colors">{job.title}</h4>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                    <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.experience}</span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0">
                  <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-900/50 rounded-2xl text-center">
            <h4 className="text-xl font-bold mb-2">Don't see a fit?</h4>
            <p className="text-slate-600 dark:text-slate-400 mb-4 max-w-xl mx-auto">
              We're always looking for great talent. Send your resume and portfolio to our team and we'll keep you in mind for future roles.
            </p>
            <button 
              onClick={() => {
                setActiveJob(speculativeJob);
                setSubmitted(false);
                setError('');
              }}
              className="px-6 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Submit Speculative Application
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {activeJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-y-auto md:overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] md:h-[650px]"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveJob(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Job Details Panel */}
              <div className="w-full md:w-3/5 p-6 md:p-10 md:overflow-y-auto border-b md:border-b-0 md:border-r border-slate-150 dark:border-slate-800 custom-scrollbar h-auto md:h-full">
                <span className="text-xs font-bold uppercase tracking-wider text-primary-600 bg-primary-50 dark:bg-primary-900/30 px-3 py-1 rounded-full">
                  {activeJob.department}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-3 mb-4">
                  {activeJob.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 font-bold mb-6">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {activeJob.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {activeJob.type}</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {activeJob.experience}</span>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Job Summary</h4>
                    <p className="text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
                      {activeJob.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2.5">Key Responsibilities</h4>
                    <ul className="space-y-2 text-sm text-slate-650 dark:text-slate-400">
                      {activeJob.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex gap-2 leading-relaxed">
                          <span className="text-primary-500 font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2.5">Required Skills & Qualifications</h4>
                    <ul className="space-y-2 text-sm text-slate-650 dark:text-slate-400">
                      {activeJob.skills.map((skill, idx) => (
                        <li key={idx} className="flex gap-2 leading-relaxed">
                          <span className="text-primary-500 font-bold">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2.5">What We Offer</h4>
                    <ul className="space-y-2 text-sm text-slate-650 dark:text-slate-400">
                      {activeJob.offers.map((offer, idx) => (
                        <li key={idx} className="flex gap-2 leading-relaxed">
                          <span className="text-primary-500 font-bold">•</span>
                          <span>{offer}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Form Panel */}
              <div className="w-full md:w-2/5 p-6 md:p-10 bg-slate-50 dark:bg-slate-900/50 flex flex-col justify-center h-auto md:h-full md:overflow-y-auto custom-scrollbar">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6">
                  Apply for this Position
                </h4>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
                      <Check className="w-8 h-8" />
                    </div>
                    <h5 className="text-xl font-bold text-slate-900 dark:text-white">Application Sent!</h5>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs mx-auto">
                      Thank you for applying. We have received your application and resume. Our hiring team will get in touch soon.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setActiveJob(null);
                      }}
                      className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-full text-xs font-bold hover:bg-slate-700 transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">First Name</label>
                        <input
                          type="text"
                          required
                          value={form.firstName}
                          onChange={(e) => setForm(prev => ({ ...prev, firstName: e.target.value }))}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold outline-none focus:border-primary-500"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-slate-400 uppercase">Last Name</label>
                        <input
                          type="text"
                          required
                          value={form.lastName}
                          onChange={(e) => setForm(prev => ({ ...prev, lastName: e.target.value }))}
                          className="w-full px-3.5 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold outline-none focus:border-primary-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Email Address</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold outline-none focus:border-primary-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-xs font-semibold outline-none focus:border-primary-500"
                      />
                    </div>

                    {/* File Upload Option */}
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-slate-400 uppercase">Upload Resume (PDF, DOCX)</label>
                      <div className="relative border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-4 text-center hover:border-primary-500 transition-colors cursor-pointer bg-white dark:bg-slate-900">
                        <input
                          type="file"
                          required
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="space-y-1 text-slate-500">
                          <Upload className="w-5 h-5 mx-auto text-slate-400" />
                          {resumeFile ? (
                            <p className="text-[11px] font-bold text-slate-800 dark:text-slate-200 truncate max-w-[180px] mx-auto">
                              {resumeFile.name}
                            </p>
                          ) : (
                            <>
                              <p className="text-[11px] font-semibold">Click to upload resume</p>
                              <p className="text-[9px] text-slate-400">PDF, DOC, DOCX up to 2.5MB</p>
                            </>
                          )}
                        </div>
                      </div>
                      {fileError && (
                        <p className="text-[10px] text-red-500 flex items-center gap-1 font-medium mt-1">
                          <AlertCircle className="w-3 h-3" /> {fileError}
                        </p>
                      )}
                    </div>

                    {error && (
                      <p className="text-xs text-red-500 font-medium pl-1">{error}</p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Careers;
