import React from 'react';
import { UserProfile } from '../Profile/UserProfile';
import { QuickActions } from '../Dashboard/QuickActions';

interface HomePageProps {
  userData: {
    name: string;
    username: string;
    photoUrl: string;
  };
  onActionClick: (tab: string) => void;
}

export function HomePage({ userData, onActionClick }: HomePageProps) {
  return (
    <div className="px-4 py-6">
      <UserProfile
        name={userData.name}
        username={userData.username}
        photoUrl={userData.photoUrl}
      />
      <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
        <div className="h-48">
          <img
            src="https://files.salebot.pro/uploads/file_item/file/44501/photo_2023-05-10_20-25-41.jpg"
            alt="Banner"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
      <QuickActions onActionClick={onActionClick} />
    </div>
  );
}