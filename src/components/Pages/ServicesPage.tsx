import React from 'react';
import { ServiceList } from '../Services/ServiceList';
import { ServiceDetails } from '../Services/ServiceDetails';

interface ServicesPageProps {
  selectedService: string | null;
  onServiceSelect: (id: string) => void;
  onBack: () => void;
}

export function ServicesPage({ selectedService, onServiceSelect, onBack }: ServicesPageProps) {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold text-white mb-4">Наши Услуги</h2>
      {selectedService ? (
        <ServiceDetails
          serviceId={selectedService}
          onBack={onBack}
        />
      ) : (
        <ServiceList onServiceSelect={onServiceSelect} />
      )}
    </div>
  );
}