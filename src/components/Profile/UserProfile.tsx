import React from 'react';
import { User } from 'lucide-react';

interface UserProfileProps {
  name: string;
  username: string;
  photoUrl: string;
}

export function UserProfile({ name, username, photoUrl }: UserProfileProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {photoUrl ? (
        <img
          src={photoUrl}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
        />
      ) : (
        <div className="w-16 h-16 rounded-full border-2 border-purple-500 bg-gray-800 flex items-center justify-center">
          <User size={32} className="text-gray-400" />
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold text-white">Привет, {name}!</h1>
        {username && (
          <div className="bg-purple-500/20 px-3 py-1 rounded-full inline-block mt-1">
            <p className="text-purple-400">@{username}</p>
          </div>
        )}
      </div>
    </div>
  );
}