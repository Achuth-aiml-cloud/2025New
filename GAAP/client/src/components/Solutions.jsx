import React from 'react';
import { 
  ShieldCheck, 
  MessageSquare, 
  FileText, 
  Database, 
  ScanText, 
  Video, 
  Check, 
  Split, 
  Network, 
  Bot, 
  Brain, 
  Search,
  BarChart3
} from 'lucide-react';

const solutionCards = [
  {
    title: "Prompt Validation",
    description: "Validate and optimize AI prompts to ensure they produce safe, accurate, and compliant responses.",
    icon: MessageSquare,
    color: "from-green-900 to-gray-900"
  },
  {
    title: "Voice Content Assessment",
    description: "Analyze voice-based AI interactions for quality, safety, and compliance with regulatory standards.",
    icon: ScanText,
    color: "from-green-800 to-gray-900"
  },
  {
    title: "Data Corpus Validation",
    description: "Verify training data quality and ensure datasets are free from bias, harmful content, and inaccuracies.",
    icon: Database,
    color: "from-green-900 to-gray-900"
  },
  {
    title: "Text Summarization",
    description: "Evaluate AI-generated text summaries for accuracy, coherence, and alignment with source materials.",
    icon: FileText,
    color: "from-green-800 to-gray-900"
  },
  {
    title: "Text Content Validation",
    description: "Assess AI-generated text for safety, appropriateness, and adherence to organizational guidelines.",
    icon: Check,
    color: "from-green-900 to-gray-900"
  },
  {
    title: "Video Content Assessment",
    description: "Monitor and analyze AI-generated or AI-modified video content for safety and ethical considerations.",
    icon: Video,
    color: "from-green-800 to-gray-900"
  },
  {
    title: "Ground Truth Validation",
    description: "Compare AI outputs against verified ground truth datasets to measure accuracy and reliability.",
    icon: ShieldCheck,
    color: "from-green-900 to-gray-900"
  },
  {
    title: "Data Chunking Validation",
    description: "Optimize and validate data chunking strategies for improved AI performance and response quality.",
    icon: Split,
    color: "from-green-800 to-gray-900"
  },
  {
    title: "Chatbot Validation",
    description: "Test and validate conversational AI systems for accurate, safe, and consistent user interactions.",
    icon: Bot,
    color: "from-green-800 to-gray-900"
  },
  {
    title: "Total LLM Evaluation",
    description: "Comprehensive evaluation framework for assessing all aspects of large language model performance.",
    icon: Brain,
    color: "from-green-900 to-gray-900"
  },
  {
    title: "RAG Evaluation",
    description: "Validate retrieval-augmented generation systems for accuracy, relevance, and information retrieval quality.",
    icon: Search,
    color: "from-green-800 to-gray-900"
  },
  {
    title: "LLM Observability",
    description: "Monitor and track LLM performance, usage patterns, and potential issues in production environments.",
    icon: BarChart3,
    color: "from-green-900 to-gray-900"
  }
];

const Solutions = () => {
  const handleCardClick = () => {
    // Navigate to the features route when a card is clicked
    window.location.href = '/features';
  };

  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Comprehensive Solutions</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            Solutions We Offer
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-300">
            Our platform provides enterprise-grade tools to manage, monitor, and ensure the safety and compliance of AI systems.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutionCards.map((card, index) => (
            <div 
              key={index} 
              className="relative group rounded-lg shadow-xl overflow-hidden transition-all duration-300 hover:translate-y-[-8px] cursor-pointer"
              onClick={handleCardClick}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative p-8">
                <div className="h-12 w-12 bg-black bg-opacity-30 rounded-lg flex items-center justify-center mb-6">
                  <card.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-gray-300">{card.description}</p>
                <div className="mt-6 flex items-center">
                  <span 
                    className="text-green-400 hover:text-white text-sm font-medium flex items-center transition-colors duration-300"
                  >
                    Learn more
                    <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;