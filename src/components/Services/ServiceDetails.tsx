import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Service } from '../../types';
import { services } from './ServiceList';

interface ServiceDetailsProps {
  serviceId: string;
  onBack: () => void;
}

export function ServiceDetails({ serviceId, onBack }: ServiceDetailsProps) {
  const service = services.find(s => s.id === serviceId);
  if (!service) return null;

  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-purple-400 mb-6"
      >
        <ArrowLeft size={20} className="mr-2" />
        <span>Назад к услугам</span>
      </button>
      
      <div className={`p-6 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6`}>
        <service.icon className="text-white/90 mb-3" size={32} />
        <h2 className="text-2xl font-bold text-white mb-2">{service.name}</h2>
      </div>

      <div className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700">
        <p className="text-gray-300 leading-relaxed">{service.description}</p>
      </div>
    </div>
  );
}