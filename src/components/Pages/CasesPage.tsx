import React from 'react';

export function CasesPage() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold text-white mb-4">Наши Кейсы</h2>
      <div className="space-y-4">
        {['Проект А', 'Проект Б', 'Проект В'].map((project) => (
          <div key={project} className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h3 className="font-medium text-white">{project}</h3>
            <p className="text-sm text-gray-400 mt-2">Описание проекта</p>
          </div>
        ))}
      </div>
    </div>
  );
}