'use client'
import { useState } from 'react';
import ProfileCard from '@/components/profile/profilecard';

export default function ProfilePage() {
  const [profile, setProfile] = useState({
    name: 'erasyl b',
    avatarUrl: 'https://rizz.kz',
  });

  const handleProfileChange = (name: string, avatarUrl: string) => {
    setProfile({ name, avatarUrl });
  };

  return (
    <div className="flex items-start justify-start h-screen bg-gray-100 p-6 text-black">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md">
        <ProfileCard
          name={profile.name}
          avatarUrl={profile.avatarUrl}
          onProfileChange={handleProfileChange}
        />
      </div>
      <div className="flex-grow p-6 ml-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Materials</h3>
        <p>...</p>
      </div>
    </div>
  );
}
