import React from 'react';
import { ArrowRight, Wrench, Code, Palette, TrendingUp } from 'lucide-react';
import { Service } from '../../types';

interface ServiceListProps {
  onServiceSelect: (id: string) => void;
}

export const services: Service[] = [
  {
    id: 'consulting',
    name: 'Консультации',
    icon: Wrench,
    description: 'Профессиональные консультации по развитию вашего бизнеса. Мы поможем определить стратегию роста и найти оптимальные решения для ваших задач.',
    gradient: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'development',
    name: 'Разработка',
    icon: Code,
    description: 'Создание современных веб-приложений и мобильных решений. Используем передовые технологии для реализации ваших идей.',
    gradient: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'design',
    name: 'Дизайн',
    icon: Palette,
    description: 'Разработка уникального дизайна, который выделит ваш бренд. От логотипов до полноценных брендбуков и веб-интерфейсов.',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'marketing',
    name: 'Маркетинг',
    icon: TrendingUp,
    description: 'Комплексное продвижение вашего бизнеса. Digital-маркетинг, SMM, контекстная реклама и аналитика.',
    gradient: 'from-orange-500 to-red-600'
  }
];

export function ServiceList({ onServiceSelect }: ServiceListProps) {
  return (
    <div className="space-y-4">
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => onServiceSelect(service.id)}
          className={`w-full p-4 rounded-lg bg-gradient-to-br ${service.gradient} relative group transition-transform hover:scale-[0.98] active:scale-[0.97]`}
        >
          <div className="flex items-center">
            <service.icon className="text-white/90 mr-3" size={24} />
            <h3 className="font-medium text-white flex-grow text-left">{service.name}</h3>
            <ArrowRight className="text-white/50 group-hover:text-white/90 transition-opacity" size={20} />
          </div>
        </button>
      ))}
    </div>
  );
}