import React from 'react';
import { Star, Briefcase, MessageSquare, ArrowRight } from 'lucide-react';

interface QuickActionsProps {
  onActionClick: (action: string) => void;
}

export function QuickActions({ onActionClick }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ActionButton
        title="Услуги"
        icon={Star}
        gradient="from-purple-500 to-indigo-600"
        onClick={() => onActionClick('services')}
      />
      <ActionButton
        title="Кейсы"
        icon={Briefcase}
        gradient="from-blue-500 to-cyan-600"
        onClick={() => onActionClick('cases')}
      />
      <ActionButton
        title="Отзывы"
        icon={MessageSquare}
        gradient="from-emerald-500 to-teal-600"
        onClick={() => onActionClick('reviews')}
      />
      <div className="rounded-2xl bg-gray-800/50 p-6 border border-gray-700">
        <div className="text-gray-400 mb-3">
          <Star size={24} />
        </div>
        <p className="text-sm text-gray-400">Скоро здесь появятся новые функции</p>
      </div>
    </div>
  );
}

interface ActionButtonProps {
  title: string;
  icon: React.ElementType;
  gradient: string;
  onClick: () => void;
}

function ActionButton({ title, icon: Icon, gradient, onClick }: ActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 text-left transition-transform hover:scale-[0.98] active:scale-[0.97]`}
    >
      <Icon className="text-white/90 mb-3" size={24} />
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ArrowRight className="absolute bottom-4 right-4 text-white/50" size={20} />
    </button>
  );
}