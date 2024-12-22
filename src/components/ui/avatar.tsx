import React from 'react';

interface AvatarProps {
  src?: string; // Image source URL
  alt?: string; // Alt text for the image
  size?: 'small' | 'medium' | 'large'; // Size of the avatar
  initials?: string; // Initials to display if no image is provided
  className?: string; // Additional custom styles
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'medium', initials, className }) => {
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    medium: 'w-12 h-12 text-base',
    large: 'w-16 h-16 text-lg',
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-full bg-gray-300 text-white font-semibold overflow-hidden ${sizeClasses[size]} ${className}`}
    >
      {src ? (
        <img
          src={src}
          alt={alt || 'Avatar'}
          className="object-cover w-full h-full"
        />
      ) : (
        <span>{initials || '?'}</span>
      )}
    </div>
  );
};

export default Avatar;
