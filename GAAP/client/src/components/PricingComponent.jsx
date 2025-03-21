import React, { useState } from 'react';
import { Check } from 'lucide-react';

const PricingComponent = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small teams and startups',
      monthlyPrice: 499,
      yearlyPrice: 5389, // 10% discount applied
      features: [
        'Up to 5 users',
        '3 AI models monitored',
        'Basic risk assessment',
        'Standard compliance reports',
        'Email support',
        '5 solutions included',
      ],
      popularChoice: false,
      buttonText: 'Start free trial',
      buttonColor: 'bg-gray-800 hover:bg-gray-700',
      borderColor: 'border-gray-700'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing companies',
      monthlyPrice: 999,
      yearlyPrice: 10789, // 10% discount applied
      features: [
        'Up to 20 users',
        '10 AI models monitored',
        'Advanced risk assessment',
        'Custom compliance reports',
        'Priority email & phone support',
        '8 solutions included',
        'Custom integrations',
        'Audit trail',
      ],
      popularChoice: true,
      buttonText: 'Start free trial',
      buttonColor: 'bg-green-800 hover:bg-green-700',
      borderColor: 'border-green-600'
    },
    {
      name: 'Enterprise',
      description: 'For organizations with complex needs',
      monthlyPrice: 2499,
      yearlyPrice: 26989, // 10% discount applied
      features: [
        'Unlimited users',
        'Unlimited AI models',
        'Enterprise risk assessment',
        'Customizable compliance framework',
        'Dedicated account manager',
        'All solutions included',
        'Advanced integrations',
        'Audit trail & detailed analytics',
        'SLA guarantees',
        'On-premise deployment option',
      ],
      popularChoice: false,
      buttonText: 'Contact sales',
      buttonColor: 'bg-gray-800 hover:bg-gray-700',
      borderColor: 'border-gray-700'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base text-green-500 font-semibold tracking-wide uppercase">Pricing</h2>
          <p className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-5xl">
            Choose the right plan for your needs
          </p>
          <p className="max-w-3xl mt-5 mx-auto text-xl text-gray-300">
            Flexible pricing options designed to scale with your AI governance requirements
          </p>
        </div>

        {/* Billing period toggle */}
        <div className="flex justify-center mb-12">
          <div className="relative bg-gray-900 p-1 rounded-lg inline-flex">
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-green-900 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`px-6 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                billingPeriod === 'yearly'
                  ? 'bg-green-900 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly
              <span className="ml-2 bg-green-800 text-xs font-bold px-2 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-gray-900 rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 ${
                plan.popularChoice ? 'border-2 ' + plan.borderColor : 'border border-gray-800'
              }`}
            >
              {plan.popularChoice && (
                <div className="bg-green-800 text-white text-center py-2 font-medium text-sm">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-gray-400 mt-2">{plan.description}</p>
                <div className="mt-6">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-extrabold text-white">
                      ${billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="ml-2 text-gray-400">
                      /{billingPeriod === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <p className="mt-1 text-green-500 text-sm">
                      Save ${plan.monthlyPrice * 12 - plan.yearlyPrice} annually
                    </p>
                  )}
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <Check className="h-5 w-5 text-green-500" />
                      </div>
                      <p className="ml-3 text-gray-300">{feature}</p>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <button
                    type="button"
                    className={`w-full rounded-md px-4 py-3 text-white font-medium transition-colors duration-200 ${plan.buttonColor}`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise callout */}
        <div className="mt-20 bg-gray-900 rounded-xl shadow-xl overflow-hidden border border-gray-800">
          <div className="px-6 py-12 sm:px-12 lg:flex lg:items-center lg:justify-between">
            <div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight sm:text-3xl">
                Need a custom solution?
              </h3>
              <p className="mt-3 max-w-3xl text-lg text-gray-300">
                We offer tailored solutions for organizations with specific requirements. Contact our sales team to discuss your needs.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 lg:flex-shrink-0">
              <button
                type="button"
                className="inline-flex rounded-md border border-transparent bg-green-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-green-700 transition-colors duration-200"
              >
                Contact sales
              </button>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h3>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white">Can I switch plans later?</h4>
              <p className="mt-2 text-gray-400">Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white">Do you offer a free trial?</h4>
              <p className="mt-2 text-gray-400">Yes, all plans come with a 14-day free trial so you can test the platform with your AI systems before committing.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white">What payment methods do you accept?</h4>
              <p className="mt-2 text-gray-400">We accept all major credit cards, as well as ACH transfers for annual plans. Enterprise clients can also pay via invoice.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="text-lg font-medium text-white">How do I cancel my subscription?</h4>
              <p className="mt-2 text-gray-400">You can cancel your subscription at any time from your account dashboard. You'll continue to have access until the end of your billing period.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;