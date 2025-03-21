import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronRight, 
  ChevronLeft,
  Search, 
  Home, 
  Settings, 
  Book, 
  Code, 
  HelpCircle, 
  Menu, 
  X,
  MessageSquare, 
  ScanText, 
  Database, 
  FileText, 
  Check, 
  Video, 
  ShieldCheck, 
  Split, 
  Network, 
  Bot, 
  Brain, 
  Search as SearchIcon,
  BarChart3
} from 'lucide-react';
import Navbar from '../components/Navbar';

const DocumentationPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [activeSolution, setActiveSolution] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    'getting-started': true,
    'solutions': true,
    'api-reference': false,
    'guides': false,
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Documentation content mapping
  const docsContent = {
    'introduction': {
      title: 'Introduction',
      content: (
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Welcome to GAAP Documentation</h2>
          <p className="text-gray-300 mb-4">
            The Generative AI Assurance Platform (GAAP) provides a comprehensive suite of tools for securing, 
            validating, and monitoring your AI systems. This documentation will help you understand 
            the platform and get the most out of all its features.
          </p>
          <p className="text-gray-300 mb-4">
            GAAP helps organizations implement AI with confidence through testing, validation, and continuous 
            monitoring. Whether you're working with large language models, voice assistants, or other 
            forms of generative AI, our platform ensures these systems operate reliably and ethically.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Getting Started</h3>
              <p className="text-gray-400">Learn how to set up and configure GAAP for your organization.</p>
              <button 
                className="mt-4 px-4 py-2 bg-green-900 hover:bg-green-800 text-white rounded-md transition-colors duration-200"
                onClick={() => setActiveSection('quickstart')}
              >
                Read Guide
              </button>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-2">Our Solutions</h3>
              <p className="text-gray-400">Explore the different solutions available in the GAAP platform.</p>
              <button 
                className="mt-4 px-4 py-2 bg-green-900 hover:bg-green-800 text-white rounded-md transition-colors duration-200"
                onClick={() => {
                  setExpandedSections({...expandedSections, 'solutions': true});
                  setActiveSection('prompt-validation');
                  setActiveSolution('prompt-validation');
                }}
              >
                View Solutions
              </button>
            </div>
          </div>
        </div>
      )
    },
    'quickstart': {
      title: 'Quickstart Guide',
      content: (
        <div>
          <h2 className="text-3xl font-bold text-white mb-6">Quickstart Guide</h2>
          <p className="text-gray-300 mb-6">
            Get up and running with GAAP in just a few minutes. Follow these steps to set up your first project.
          </p>
          
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Step 1: Create an account</h3>
              <p className="text-gray-400 mb-3">
                Sign up for a GAAP account by visiting our registration page. You'll need to provide:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>Company email address</li>
                <li>Name and contact information</li>
                <li>Basic company details</li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Step 2: Create your first project</h3>
              <p className="text-gray-400 mb-3">
                Once logged in, create a new project from your dashboard:
              </p>
              <ol className="list-decimal pl-6 text-gray-400 space-y-2">
                <li>Click "New Project" in the dashboard</li>
                <li>Enter a name and description for your project</li>
                <li>Select the AI systems you want to monitor</li>
                <li>Invite team members (optional)</li>
              </ol>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Step 3: Connect your AI systems</h3>
              <p className="text-gray-400 mb-3">
                Connect GAAP to your AI systems using one of our integration methods:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>API integration</li>
                <li>SDK implementation</li>
                <li>Direct model connection</li>
                <li>Manual upload</li>
              </ul>
              <p className="text-gray-400 mt-3">
                Check our <span className="text-green-500 cursor-pointer" onClick={() => setActiveSection('api-integration')}>API Integration Guide</span> for detailed instructions.
              </p>
            </div>
          </div>
        </div>
      )
    },
    'prompt-validation': {
      title: 'Prompt Validation',
      icon: MessageSquare,
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <MessageSquare className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl font-bold text-white">Prompt Validation</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            GAAP's Prompt Validation solution helps you design, test, and validate prompts for your LLMs to 
            ensure they produce safe, accurate, and compliant responses.
          </p>
          
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Prompt template library</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Jailbreak detection</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Hallucination assessment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Security vulnerability testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Prompt optimization</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Response accuracy metrics</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">How to Use Prompt Validation</h3>
              <ol className="list-decimal pl-6 text-gray-400 space-y-4">
                <li>
                  <strong className="text-white">Create a test collection</strong>
                  <p className="mt-1">Group related prompt tests together in collections for better organization.</p>
                </li>
                <li>
                  <strong className="text-white">Define your prompts</strong>
                  <p className="mt-1">Create prompt templates with variables that can be tested with different inputs.</p>
                </li>
                <li>
                  <strong className="text-white">Set evaluation criteria</strong>
                  <p className="mt-1">Define what makes a good response - factual accuracy, tone, content safety, etc.</p>
                </li>
                <li>
                  <strong className="text-white">Run validation tests</strong>
                  <p className="mt-1">Execute tests across different models or with different parameters.</p>
                </li>
                <li>
                  <strong className="text-white">Analyze results</strong>
                  <p className="mt-1">Review detailed performance metrics and improve prompts based on feedback.</p>
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Example Use Case</h3>
              <p className="text-gray-400 mb-3">
                A financial services company used Prompt Validation to test customer service chatbot prompts 
                for regulatory compliance. The validation found that:
              </p>
              <ul className="list-disc pl-6 text-gray-400 space-y-2">
                <li>12% of prompts resulted in potentially non-compliant responses</li>
                <li>Prompt redesign improved accuracy by 27%</li>
                <li>Hallucination detection prevented sharing of incorrect financial advice</li>
              </ul>
              <p className="text-gray-400 mt-3">
                After implementing changes based on GAAP's recommendations, the company saw a 96% reduction in 
                compliance-related incidents.
              </p>
            </div>
          </div>
        </div>
      )
    },
    'voice-content-assessment': {
      title: 'Voice Content Assessment',
      icon: ScanText,
      content: (
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <ScanText className="h-8 w-8 text-green-500" />
            <h2 className="text-3xl font-bold text-white">Voice Content Assessment</h2>
          </div>
          
          <p className="text-gray-300 mb-6">
            GAAP's Voice Content Assessment solution provides comprehensive tools for analyzing, validating, and improving 
            voice-based AI interactions for quality, safety, and compliance with regulatory standards.
          </p>
          
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Speech recognition accuracy testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Voice tone and sentiment analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Dialect and accent compatibility</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Voice response safety verification</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Regulatory compliance checking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <span className="text-gray-300">Conversation flow analysis</span>
                </li>
              </ul>
            </div>
            
            {/* Implementation details would continue here */}
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
              <h3 className="text-xl font-semibold text-white mb-4">Documentation</h3>
              <p className="text-gray-400">
                Full documentation on Voice Content Assessment is available to provide detailed implementation guidelines.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-900 hover:bg-green-800 text-white rounded-md transition-colors duration-200">
                View Full Documentation
              </button>
            </div>
          </div>
        </div>
      )
    },
    // Other solutions would follow a similar pattern
  };

  // Navigation items structure
  const navItems = [
    {
      section: 'getting-started',
      title: 'Getting Started',
      icon: <Home className="h-5 w-5" />,
      items: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'quickstart', title: 'Quickstart Guide' },
        { id: 'installation', title: 'Installation' },
        { id: 'configuration', title: 'Configuration' },
      ]
    },
    {
      section: 'solutions',
      title: 'Solutions',
      icon: <Settings className="h-5 w-5" />,
      items: [
        { id: 'prompt-validation', title: 'Prompt Validation', icon: <MessageSquare className="h-4 w-4" /> },
        { id: 'voice-content-assessment', title: 'Voice Content Assessment', icon: <ScanText className="h-4 w-4" /> },
        { id: 'data-corpus-validation', title: 'Data Corpus Validation', icon: <Database className="h-4 w-4" /> },
        { id: 'text-summarization', title: 'Text Summarization', icon: <FileText className="h-4 w-4" /> },
        { id: 'text-content-validation', title: 'Text Content Validation', icon: <Check className="h-4 w-4" /> },
        { id: 'video-content-assessment', title: 'Video Content Assessment', icon: <Video className="h-4 w-4" /> },
        { id: 'ground-truth-validation', title: 'Ground Truth Validation', icon: <ShieldCheck className="h-4 w-4" /> },
        { id: 'data-chunking-validation', title: 'Data Chunking Validation', icon: <Split className="h-4 w-4" /> },
        { id: 'data-embedding-validation', title: 'Data Embedding Validation', icon: <Network className="h-4 w-4" /> },
        { id: 'chatbot-validation', title: 'Chatbot Validation', icon: <Bot className="h-4 w-4" /> },
        { id: 'total-llm-evaluation', title: 'Total LLM Evaluation', icon: <Brain className="h-4 w-4" /> },
        { id: 'rag-evaluation', title: 'RAG Evaluation', icon: <SearchIcon className="h-4 w-4" /> },
        { id: 'llm-observability', title: 'LLM Observability', icon: <BarChart3 className="h-4 w-4" /> },
      ]
    },
    {
      section: 'api-reference',
      title: 'API Reference',
      icon: <Code className="h-5 w-5" />,
      items: [
        { id: 'api-introduction', title: 'Introduction' },
        { id: 'authentication', title: 'Authentication' },
        { id: 'endpoints', title: 'Endpoints' },
        { id: 'rate-limits', title: 'Rate Limits' },
        { id: 'webhook-integration', title: 'Webhook Integration' },
      ]
    },
    {
      section: 'guides',
      title: 'Guides',
      icon: <Book className="h-5 w-5" />,
      items: [
        { id: 'best-practices', title: 'Best Practices' },
        { id: 'security', title: 'Security Guidelines' },
        { id: 'enterprise-setup', title: 'Enterprise Setup' },
        { id: 'team-collaboration', title: 'Team Collaboration' },
        { id: 'compliance', title: 'Compliance Frameworks' },
      ]
    },
  ];

  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Top navbar */}
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        {/* Mobile sidebar */}
        <div 
          className={`md:hidden fixed inset-0 z-40 flex ${mobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="fixed inset-0 bg-black bg-opacity-75" onClick={toggleMobileMenu}></div>
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-black border-r border-gray-800">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
              <div className="px-4 mb-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    className="block w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                    placeholder="Search docs..."
                    type="search"
                  />
                </div>
              </div>
              <nav className="space-y-1 px-2">
                {navItems.map((section) => (
                  <div key={section.section} className="mb-6">
                    <button
                      className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-800"
                      onClick={() => toggleSection(section.section)}
                    >
                      <div className="flex items-center">
                        {section.icon}
                        <span className="ml-3">{section.title}</span>
                      </div>
                      {expandedSections[section.section] ? (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      ) : (
                        <ChevronRight className="h-4 w-4 text-gray-400" />
                      )}
                    </button>
                    
                    {expandedSections[section.section] && (
                      <div className="mt-1 pl-4 space-y-1">
                        {section.items.map((item) => (
                          <button
                            key={item.id}
                            className={`group flex items-center px-3 py-2 text-sm w-full rounded-md ${
                              activeSection === item.id 
                                ? 'bg-green-900 text-white' 
                                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                            }`}
                            onClick={() => {
                              setActiveSection(item.id);
                              section.section === 'solutions' && setActiveSolution(item.id);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {item.icon && <span className="mr-3">{item.icon}</span>}
                            <span>{item.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Desktop sidebar */}
        <div className={`hidden md:flex md:flex-shrink-0 ${sidebarOpen ? 'md:w-64' : 'md:w-20'} transition-all duration-300`}>
          <div className="flex flex-col w-full">
            <div className="flex flex-col h-0 flex-1">
              <div className="flex-1 flex flex-col overflow-y-auto bg-gray-900 border-r border-gray-800">
                <div className="flex-1 px-2 py-4 space-y-1">
                  {navItems.map((section) => (
                    <div key={section.section} className="mb-6">
                      <button
                        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-800"
                        onClick={() => toggleSection(section.section)}
                      >
                        <div className="flex items-center">
                          {section.icon}
                          <span className={`ml-3 ${!sidebarOpen && 'hidden'}`}>{section.title}</span>
                        </div>
                        {sidebarOpen && (
                          expandedSections[section.section] ? (
                            <ChevronDown className="h-4 w-4 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          )
                        )}
                      </button>
                      
                      {(expandedSections[section.section] || !sidebarOpen) && (
                        <div className={`mt-1 ${sidebarOpen ? 'pl-4' : 'pl-1'} space-y-1`}>
                          {section.items.map((item) => (
                            <button
                              key={item.id}
                              className={`group flex items-center px-3 py-2 text-sm w-full rounded-md ${
                                activeSection === item.id 
                                  ? 'bg-green-900 text-white' 
                                  : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                              }`}
                              onClick={() => {
                                setActiveSection(item.id);
                                section.section === 'solutions' && setActiveSolution(item.id);
                              }}
                              title={!sidebarOpen ? item.title : undefined}
                            >
                              {item.icon && <span className="mr-3">{item.icon}</span>}
                              <span className={!sidebarOpen ? 'hidden' : ''}>{item.title}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="p-3 border-t border-gray-800 flex justify-center">
                  <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="p-1 rounded-md text-gray-400 hover:text-white"
                  >
                    {sidebarOpen ? (
                      <ChevronLeft className="h-5 w-5" />
                    ) : (
                      <ChevronRight className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <main className="py-6 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {docsContent[activeSection]?.content ? (
              docsContent[activeSection].content
            ) : (
              <div className="text-center py-12">
                <h2 className="text-2xl font-semibold text-white mb-2">Documentation in Progress</h2>
                <p className="text-gray-400">
                  This section of the documentation is currently being developed. 
                  Please check back soon or contact support for assistance.
                </p>
              </div>
            )}
            
            {/* Related content navigation */}
            {activeSolution && (
              <div className="mt-16 pt-6 border-t border-gray-800">
                <h3 className="text-xl font-bold text-white mb-4">Related Documentation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div 
                    className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-green-700 transition-colors cursor-pointer"
                    onClick={() => setActiveSection('api-reference')}
                  >
                    <h4 className="font-medium text-white flex items-center">
                      <Code className="h-4 w-4 mr-2" />
                      API Reference
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Integration details for this solution
                    </p>
                  </div>
                  <div 
                    className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-green-700 transition-colors cursor-pointer"
                    onClick={() => setActiveSection('best-practices')}
                  >
                    <h4 className="font-medium text-white flex items-center">
                    <Book className="h-4 w-4 mr-2" />
                      Best Practices
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      Guidelines for optimal use of this solution
                    </p>
                  </div>
                </div>
              </div>
            )}
            
            {/* Documentation footer */}
            <div className="mt-16 pt-6 border-t border-gray-800">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="flex space-x-4 mb-4 sm:mb-0">
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Edit this page
                  </a>
                  <a href="#" className="text-sm text-gray-400 hover:text-white">
                    Report issue
                  </a>
                </div>
                <div className="text-sm text-gray-400">
                  Last updated: March 8, 2025
                </div>
              </div>
              
              {/* Navigation buttons */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  className="flex items-center justify-start px-4 py-2 border border-gray-800 rounded-md text-gray-300 hover:bg-gray-900 hover:border-green-800 transition-colors"
                  onClick={() => {
                    // Previous page logic would go here
                  }}
                >
                  <ChevronLeft className="h-5 w-5 mr-2" />
                  <div className="text-left">
                    <div className="text-xs text-gray-500">Previous</div>
                    <div className="font-medium">Getting Started</div>
                  </div>
                </button>
                <button 
                  className="flex items-center justify-end px-4 py-2 border border-gray-800 rounded-md text-gray-300 hover:bg-gray-900 hover:border-green-800 transition-colors"
                  onClick={() => {
                    // Next page logic would go here
                  }}
                >
                  <div className="text-right">
                    <div className="text-xs text-gray-500">Next</div>
                    <div className="font-medium">API Integration</div>
                  </div>
                  <ChevronRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </main>
          
          {/* On this page navigation (for desktop) */}
          <div className="hidden lg:block fixed right-0 top-32 w-64 px-8 overflow-y-auto">
            <h4 className="text-xs uppercase tracking-wide font-semibold text-gray-400 mb-4">On this page</h4>
            <nav className="space-y-1">
              <a 
                href="#key-features" 
                className="block text-sm text-gray-400 hover:text-white hover:text-gray-300 py-1 border-l-2 border-gray-800 hover:border-green-600 pl-3"
              >
                Key Features
              </a>
              <a 
                href="#how-to-use" 
                className="block text-sm text-gray-400 hover:text-white hover:text-gray-300 py-1 border-l-2 border-gray-800 hover:border-green-600 pl-3"
              >
                How to Use
              </a>
              <a 
                href="#example-use-case" 
                className="block text-sm text-gray-400 hover:text-white hover:text-gray-300 py-1 border-l-2 border-gray-800 hover:border-green-600 pl-3"
              >
                Example Use Case
              </a>
              <a 
                href="#api-reference" 
                className="block text-sm text-gray-400 hover:text-white hover:text-gray-300 py-1 border-l-2 border-gray-800 hover:border-green-600 pl-3"
              >
                API Reference
              </a>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Bottom mobile search bar */}
      <div className="md:hidden border-t border-gray-800 bg-gray-900 py-2 px-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            className="block w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 text-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
            placeholder="Search docs..."
            type="search"
          />
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;