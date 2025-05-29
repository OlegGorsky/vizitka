import React from 'react';

export function ReviewsPage() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-xl font-bold text-white mb-4">Отзывы</h2>
      <div className="space-y-4">
        {[
          { name: 'Анна', text: 'Отличный сервис!' },
          { name: 'Петр', text: 'Рекомендую всем!' },
          { name: 'Мария', text: 'Превзошли ожидания' }
        ].map((review, index) => (
          <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg border border-gray-700">
            <h3 className="font-medium text-white">{review.name}</h3>
            <p className="text-sm text-gray-400 mt-2">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}