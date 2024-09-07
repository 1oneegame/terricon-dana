'use client';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProfileCardProps {
  name: string;
  avatarUrl: string;
  onProfileChange: (name: string, avatarUrl: string) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  avatarUrl,
  onProfileChange,
}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editName, setEditName] = useState(name);
  const [editAvatarUrl, setEditAvatarUrl] = useState(avatarUrl);

  const handleSave = () => {
    onProfileChange(editName, editAvatarUrl);
    setIsDialogOpen(false);
  };

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md w-full max-w-xs">
      {avatarUrl ? (
        <img
          className="w-24 h-24 rounded-full mb-4"
          src={avatarUrl}
          alt={name}
        />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
          <span className="text-gray-500">No Avatar</span>
        </div>
      )}

      <h2 className="text-2xl font-semibold mb-2 mt-2">{name}</h2>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button variant="default">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avatar-image" className="text-right">
                Avatar Image URL
              </Label>
              <Input
                id="avatar-image"
                value={editAvatarUrl}
                onChange={(e) => setEditAvatarUrl(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" onClick={handleSave}>
              Save
            </Button>
            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProfileCard;
