import React, { useState } from 'react';
import { Scale, Shield, Briefcase, Clock, CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react';

export default function CriminalLaw() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: 'Bail Applications',
      description: 'Strategic bail and anticipatory bail applications to secure your release',
      icon: Scale,
    },
    {
      title: 'Police Investigations',
      description: 'Expert guidance through FIR filing and police investigation procedures',
      icon: Shield,
    },
    {
      title: 'White-Collar Defense',
      description: 'Specialized handling of complex corporate and financial crime cases',
      icon: Briefcase,
    },
    {
      title: 'Drug Offenses',
      description: 'Robust defense strategies for narcotics and drug-related charges',
      icon: Shield,
    },
    {
      title: 'Violent Crimes',
      description: 'Experienced representation for assault, homicide, and serious charges',
      icon: Scale,
    },
    {
      title: 'Appeals & Revisions',
      description: 'Strategic appellate advocacy to challenge convictions and sentences',
      icon: ArrowRight,
    },
  ];

  const approaches = [
    {
      number: '01',
      title: 'Thorough Analysis',
      description: 'We meticulously examine every detail of your case, evidence, and circumstances.',
    },
    {
      number: '02',
      title: 'Evidence Gathering',
      description: 'Our team investigates and compiles supporting evidence for a powerful defense.',
    },
    {
      number: '03',
      title: 'Strategic Defense',
      description: 'We develop customized legal strategies tailored to your specific situation.',
    },
    {
      number: '04',
      title: 'Best Outcomes',
      description: 'Our goal is to achieve the best possible result while protecting your rights.',
    },
  ];

  const strengths = [
    'Experienced criminal defense attorneys with decades of courtroom experience',
    'Proven track record of successful case outcomes and favorable verdicts',
    'Confidential and strategic handling of sensitive legal matters',
    'Rapid legal response and round-the-clock client support',
    'Deep knowledge of local courts, judges, and legal procedures',
    'Network of investigators and expert witnesses',
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">


      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-slate-800 border border-amber-500/30 rounded-full text-sm text-amber-400 font-semibold">
              Criminal Defense Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">Defending Your Rights with</span>
            <br />
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Strength & Strategy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
            When facing criminal charges, your freedom and reputation are at stake. Our experienced defense team provides aggressive, strategic representation at every stage of the legal process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition transform hover:scale-105 flex items-center justify-center gap-2">
              Get Immediate Help
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 border border-amber-500/50 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition">
              Call Now: +91-XXXXXXXXXX
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What We Handle</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative"
                  onMouseEnter={() => setHoveredCard(idx)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"></div>
                  
                  <div className="relative bg-slate-800/50 border border-slate-700 rounded-xl p-8 backdrop-blur-sm hover:border-amber-500/50 transition duration-300 h-full">
                    <div className="mb-4">
                      <Icon className="w-10 h-10 text-amber-500 group-hover:scale-110 transition duration-300" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{service.description}</p>
                    
                    <div className="mt-6 flex items-center text-amber-400 opacity-0 group-hover:opacity-100 transition duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Approach</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {approaches.map((approach, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-6xl font-bold text-amber-500/30 mb-4">{approach.number}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{approach.title}</h3>
                <p className="text-slate-400 leading-relaxed flex-grow">{approach.description}</p>
                <div className="mt-6 h-1 w-8 bg-gradient-to-r from-amber-500 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {strengths.map((strength, idx) => (
                  <div key={idx} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                    <p className="text-slate-300 leading-relaxed">{strength}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-blue-600/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-slate-800/80 border border-slate-700 rounded-2xl p-12 backdrop-blur-sm">
                <div className="space-y-8">
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">20+</div>
                    <p className="text-slate-400">Years of Experience</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">500+</div>
                    <p className="text-slate-400">Cases Successfully Defended</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">95%</div>
                    <p className="text-slate-400">Client Satisfaction Rate</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400 mb-2">24/7</div>
                    <p className="text-slate-400">Emergency Legal Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-800 to-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Immediate Legal Assistance?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Don't face criminal charges alone. Our experienced defense team is ready to fight for your rights and protect your future.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 hover:border-amber-500/50 transition">
              <Phone className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <p className="text-slate-300 mb-2">Emergency Hotline</p>
              <a href="tel:+91" className="text-2xl font-bold text-amber-400 hover:text-amber-300">
                +91-XXXXXXXXXX
              </a>
            </div>
            <div className="bg-slate-700/50 border border-slate-600 rounded-xl p-8 hover:border-amber-500/50 transition">
              <Mail className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <p className="text-slate-300 mb-2">Email Us</p>
              <a href="mailto:contact@legaldefense.com" className="text-lg font-semibold text-amber-400 hover:text-amber-300">
                contact@legaldefense.com
              </a>
            </div>
          </div>
          
          <button className="px-10 py-4 bg-amber-500 text-slate-950 font-bold rounded-lg hover:bg-amber-400 transition transform hover:scale-105 text-lg">
            Schedule Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-bold">LEGAL DEFENSE</span>
            </div>
            <p className="text-slate-500 text-sm">Defending Your Rights with Strength & Strategy</p>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-500 text-center text-sm">
              © 2024 Criminal Defense Legal Services. All rights reserved. | Confidential Legal Counsel
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}