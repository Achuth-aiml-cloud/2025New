import React, { useState, useEffect } from 'react';
import { 
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
  BarChart3,
  Bell,
  ChevronDown,
  Book,
  LogOut,
  Settings as SettingsIcon,
  User,
  Play,
  Plus,
  PlusCircle
} from 'lucide-react';

const Dashboard = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [notificationCount, setNotificationCount] = useState(3);

  // All available solutions with their metadata
  const allSolutions = {
    'prompt-validation': {
      id: 'prompt-validation',
      title: "Prompt Validation",
      description: "Validate and optimize AI prompts to ensure they produce safe, accurate, and compliant responses.",
      icon: MessageSquare,
      status: 'ready'
    },
    'voice-content-assessment': {
      id: 'voice-content-assessment',
      title: "Voice Content Assessment",
      description: "Analyze voice-based AI interactions for quality, safety, and compliance with regulatory standards.",
      icon: ScanText,
      status: 'ready'
    },
    'data-corpus-validation': {
      id: 'data-corpus-validation',
      title: "Data Corpus Validation",
      description: "Verify training data quality and ensure datasets are free from bias, harmful content, and inaccuracies.",
      icon: Database,
      status: 'ready'
    },
    'text-summarization': {
      id: 'text-summarization',
      title: "Text Summarization",
      description: "Evaluate AI-generated text summaries for accuracy, coherence, and alignment with source materials.",
      icon: FileText,
      status: 'ready'
    },
    'text-content-validation': {
      id: 'text-content-validation',
      title: "Text Content Validation",
      description: "Assess AI-generated text for safety, appropriateness, and adherence to organizational guidelines.",
      icon: Check,
      status: 'ready'
    },
    'video-content-assessment': {
      id: 'video-content-assessment',
      title: "Video Content Assessment",
      description: "Monitor and analyze AI-generated or AI-modified video content for safety and ethical considerations.",
      icon: Video,
      status: 'ready'
    },
    'ground-truth-validation': {
      id: 'ground-truth-validation',
      title: "Ground Truth Validation",
      description: "Compare AI outputs against verified ground truth datasets to measure accuracy and reliability.",
      icon: ShieldCheck,
      status: 'ready'
    },
    'data-chunking-validation': {
      id: 'data-chunking-validation',
      title: "Data Chunking Validation",
      description: "Optimize and validate data chunking strategies for improved AI performance and response quality.",
      icon: Split,
      status: 'ready'
    },
    'data-embedding-validation': {
      id: 'data-embedding-validation',
      title: "Data Embedding Validation",
      description: "Verify the quality and consistency of vector embeddings used in AI systems and knowledge retrieval.",
      icon: Network,
      status: 'ready'
    },
    'chatbot-validation': {
      id: 'chatbot-validation',
      title: "Chatbot Validation",
      description: "Test and validate conversational AI systems for accurate, safe, and consistent user interactions.",
      icon: Bot,
      status: 'ready'
    },
    'total-llm-evaluation': {
      id: 'total-llm-evaluation',
      title: "Total LLM Evaluation",
      description: "Comprehensive evaluation framework for assessing all aspects of large language model performance.",
      icon: Brain,
      status: 'ready'
    },
    'rag-evaluation': {
      id: 'rag-evaluation',
      title: "RAG Evaluation",
      description: "Validate retrieval-augmented generation systems for accuracy, relevance, and information retrieval quality.",
      icon: SearchIcon,
      status: 'ready'
    },
    'llm-observability': {
      id: 'llm-observability',
      title: "LLM Observability",
      description: "Monitor and track LLM performance, usage patterns, and potential issues in production environments.",
      icon: BarChart3,
      status: 'ready'
    }
  };

  // Parse URL parameters to get selected services
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const servicesParam = urlParams.get('services');
    
    if (servicesParam) {
      const services = servicesParam.split(',');
      setSelectedServices(services);
    } else {
      // For demo purposes, show some default services if none are provided in URL
      setSelectedServices(['prompt-validation', 'chatbot-validation', 'rag-evaluation']);
    }
  }, []);

  const handleActivateService = (serviceId) => {
    // In a real application, this would activate the service
    // For this demo, we'll just redirect to a hypothetical service page
    window.location.href = `/service/${serviceId}`;
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!profileMenuOpen);
  };

  // Filter services based on search query
  const filteredServices = selectedServices
    .filter(id => allSolutions[id]?.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .map(id => allSolutions[id]);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation bar */}
      <nav className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <svg 
                  className="h-8 w-8 text-green-600" 
                  viewBox="0 0 100 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
                  <path d="M30 50L45 65L70 35" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-white font-bold text-xl ml-2">GAAP-Dashboard</span>
              </div>
              
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  
                  <a href="/docs" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center">
                    <Book className="h-4 w-4 mr-1" />
                    Docs
                  </a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              {/* Search */}
              <div className="relative mx-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              
              {/* Notification bell */}
              <button className="ml-4 p-1 rounded-full text-gray-400 hover:text-white relative">
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" />
                {notificationCount > 0 && (
                  <span className="absolute top-0 right-0 block h-4 w-4 rounded-full bg-green-600 text-xs text-white text-center">
                    {notificationCount}
                  </span>
                )}
              </button>
              
              {/* Profile dropdown */}
              <div className="ml-4 relative">
                <button
                  className="flex items-center max-w-xs text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={toggleProfileMenu}
                >
                  <span className="sr-only">Open user menu</span>
                  <div className="h-8 w-8 rounded-full bg-green-800 flex items-center justify-center text-white font-medium">
                    A
                  </div>
                  <ChevronDown className={`ml-1 h-4 w-4 text-gray-400 transition-transform duration-200 ${profileMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {profileMenuOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-gray-900 border border-gray-800 ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-2 border-b border-gray-800">
                      <p className="text-sm font-medium text-white">Admin User</p>
                      <p className="text-xs text-gray-400">admin@example.com</p>
                    </div>
                    
                    <a href="/dashboard" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center">
                      <User className="mr-2 h-4 w-4" />
                      Your Dashboard
                    </a>
                    
                    <a href="/settings" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center">
                      <SettingsIcon className="mr-2 h-4 w-4" />
                      Settings
                    </a>
                    
                    <a href="/logout" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign out
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-white">Your Services</h1>
            <a 
              href="/requesting" 
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-black bg-green-500 hover:bg-green-400"
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Request More Services
            </a>
          </div>
          
          {selectedServices.length === 0 ? (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <p className="text-gray-400 mb-4">You haven't selected any services yet.</p>
              <a 
                href="/request-services" 
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-800 hover:bg-green-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Request Services
              </a>
            </div>
          ) : filteredServices.length === 0 ? (
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <p className="text-gray-400">No services match your search query.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredServices.map((service) => (
                <div 
                  key={service.id} 
                  className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:border-gray-700 transition-colors duration-200"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="h-10 w-10 rounded-md bg-green-900/30 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-green-500" />
                      </div>
                      <h2 className="ml-3 text-lg font-semibold text-white">{service.title}</h2>
                    </div>
                    <p className="text-gray-400 text-sm mb-6">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs px-2 py-1 rounded-full bg-green-900/30 text-green-400 font-medium">
                        Version 1.0.0
                      </span>
                      <button
                        onClick={() => handleActivateService(service.id)}
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-green-800 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <Play className="h-4 w-4 mr-1" />
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Recently activated services section */}
          <div className="mt-12">
            <h2 className="text-xl font-bold text-white mb-6">Recently Used</h2>
            
            <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead className="bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Service
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Activated
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded bg-green-900/30 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-white">Chatbot Validation</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-900/20 text-green-400">
                          Running


                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        Today, 10:24 AM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a href="/service/chatbot-validation" className="text-green-500 hover:text-green-400">Open</a>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-8 w-8 rounded bg-green-900/30 flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-green-500" />
                          </div>
                          <div className="ml-3">
                            <div className="text-sm font-medium text-white">Prompt Validation</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 text-xs rounded-full bg-green-900/20 text-green-400">
                          Closed
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        Yesterday, 4:12 PM
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a href="/service/prompt-validation" className="text-green-500 hover:text-green-400">Open</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;