import React, { useState } from 'react';
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
  Search,
  BarChart3,
  ArrowRight,
  Clock
} from 'lucide-react';
import Navbar from '../components/Navbar';

const RequestingPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const solutions = [
    {
      id: 'prompt-validation',
      title: "Prompt Validation",
      description: "Validate and optimize AI prompts to ensure they produce safe, accurate, and compliant responses.",
      icon: MessageSquare,
    },
    {
      id: 'voice-content-assessment',
      title: "Voice Content Assessment",
      description: "Analyze voice-based AI interactions for quality, safety, and compliance with regulatory standards.",
      icon: ScanText,
    },
    {
      id: 'data-corpus-validation',
      title: "Data Corpus Validation",
      description: "Verify training data quality and ensure datasets are free from bias, harmful content, and inaccuracies.",
      icon: Database,
    },
    {
      id: 'text-summarization',
      title: "Text Summarization",
      description: "Evaluate AI-generated text summaries for accuracy, coherence, and alignment with source materials.",
      icon: FileText,
    },
    {
      id: 'text-content-validation',
      title: "Text Content Validation",
      description: "Assess AI-generated text for safety, appropriateness, and adherence to organizational guidelines.",
      icon: Check,
    },
    {
      id: 'video-content-assessment',
      title: "Video Content Assessment",
      description: "Monitor and analyze AI-generated or AI-modified video content for safety and ethical considerations.",
      icon: Video,
    },
    {
      id: 'ground-truth-validation',
      title: "Ground Truth Validation",
      description: "Compare AI outputs against verified ground truth datasets to measure accuracy and reliability.",
      icon: ShieldCheck,
    },
    {
      id: 'data-chunking-validation',
      title: "Data Chunking Validation",
      description: "Optimize and validate data chunking strategies for improved AI performance and response quality.",
      icon: Split,
    },
    {
      id: 'data-embedding-validation',
      title: "Data Embedding Validation",
      description: "Verify the quality and consistency of vector embeddings used in AI systems and knowledge retrieval.",
      icon: Network,
    },
    {
      id: 'chatbot-validation',
      title: "Chatbot Validation",
      description: "Test and validate conversational AI systems for accurate, safe, and consistent user interactions.",
      icon: Bot,
    },
    {
      id: 'total-llm-evaluation',
      title: "Total LLM Evaluation",
      description: "Comprehensive evaluation framework for assessing all aspects of large language model performance.",
      icon: Brain,
    },
    {
      id: 'rag-evaluation',
      title: "RAG Evaluation",
      description: "Validate retrieval-augmented generation systems for accuracy, relevance, and information retrieval quality.",
      icon: Search,
    },
    {
      id: 'llm-observability',
      title: "LLM Observability",
      description: "Monitor and track LLM performance, usage patterns, and potential issues in production environments.",
      icon: BarChart3,
    }
  ];

  const comingSoonServices = [
    {
      id: 'text-embedding-validation',
      title: "Text Embedding Validation",
      description: "Advanced validation tools for text embedding models to ensure semantic accuracy and consistency.",
      icon: Network,
    },
    {
      id: 'itcr',
      title: "Impactful Test Case Recommendation",
      description: "Smart recommendation system that identifies and suggests the most effective test cases for your AI models.",
      icon: Brain,
    }
  ];

  const toggleService = (serviceId) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (selectedServices.length === 0) {
      alert("Please select at least one service");
      return;
    }
    
    setSubmitting(true);
    
    // Simulate a network request
    setTimeout(() => {
      // Create the data payload that would be sent to the backend
      const payload = {
        services: selectedServices
      };
      
      console.log('Submitting request with data:', payload);
      
      // Forward to dashboard
      window.location.href = `/dashboard?services=${selectedServices.join(',')}`;
      
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Request GAAP Services
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-300">
            Select the services you need to secure and validate your AI systems
          </p>
        </div>
        
        {success ? (
          <div className="bg-green-900/30 border border-green-700 rounded-lg p-8 text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-green-800 text-white rounded-full flex items-center justify-center">
                <Check className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Request Submitted Successfully</h2>
            <p className="text-gray-300 mb-6">
              Thank you for your request. We're processing your services and will be ready shortly.
            </p>
            <div className="mt-4">
              <a 
                href="/dashboard" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-green-400 hover:bg-green-500"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Service selection section */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="px-6 py-5 border-b border-gray-800">
                <h2 className="text-xl font-bold text-white">Available Services</h2>
                <p className="mt-1 text-sm text-gray-400">Select all the services you'd like to request</p>
              </div>
              
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {solutions.map((solution) => (
                    <div 
                      key={solution.id}
                      className={`relative rounded-lg border transition-all cursor-pointer overflow-hidden ${
                        selectedServices.includes(solution.id) 
                          ? 'border-green-600 bg-green-900/10' 
                          : 'border-gray-700 hover:border-gray-600 bg-gray-800/20'
                      }`}
                      onClick={() => toggleService(solution.id)}
                    >
                      <div className="p-4">
                        <div className="flex items-start">
                          <div className={`flex-shrink-0 h-10 w-10 rounded-md flex items-center justify-center ${
                            selectedServices.includes(solution.id) ? 'bg-green-900' : 'bg-gray-800'
                          }`}>
                            <solution.icon className={`h-5 w-5 ${
                              selectedServices.includes(solution.id) ? 'text-green-400' : 'text-gray-400'
                            }`} />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-white">{solution.title}</h3>
                            <p className="mt-1 text-xs text-gray-400">{solution.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Checkmark indicator */}
                      {selectedServices.includes(solution.id) && (
                        <div className="absolute top-2 right-2 h-5 w-5 bg-green-600 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3 text-black" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="px-6 py-3 bg-gray-900 border-t border-gray-800">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {selectedServices.length} of {solutions.length} services selected
                  </span>
                  <button
                    type="button"
                    className="text-sm text-green-500 hover:text-green-400"
                    onClick={() => setSelectedServices(selectedServices.length === solutions.length ? [] : solutions.map(s => s.id))}
                  >
                    {selectedServices.length === solutions.length ? 'Deselect all' : 'Select all'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Coming Soon section */}
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-xl">
              <div className="px-6 py-5 border-b border-gray-800">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-500 mr-2" />
                  <h2 className="text-xl font-bold text-white">Coming Soon</h2>
                </div>
                <p className="mt-1 text-sm text-gray-400">These services will be available soon</p>
              </div>
              
              <div className="px-6 py-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {comingSoonServices.map((service) => (
                    <div 
                      key={service.id}
                      className="relative rounded-lg border border-gray-700 bg-gray-800/20 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]"></div>
                      <div className="absolute top-0 right-0 bg-gray-800 text-xs text-green-400 font-semibold px-3 py-1 rounded-bl-lg">
                        Coming Soon
                      </div>
                      
                      <div className="p-4 relative">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gray-800 flex items-center justify-center">
                            <service.icon className="h-5 w-5 text-gray-400" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-sm font-medium text-white">{service.title}</h3>
                            <p className="mt-1 text-xs text-gray-400">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting || selectedServices.length === 0}
                className={`inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white ${
                  submitting || selectedServices.length === 0
                    ? 'bg-green-900 cursor-not-allowed opacity-70' 
                    : 'bg-green-800 hover:bg-green-700'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500`}
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  'Request Selected Services'
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default RequestingPage;