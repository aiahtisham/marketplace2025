import React from 'react';

interface SupportCardProps {
  icon: React.ReactNode;
  title: string;
  email1: string;
  email2: string;
  buttonText: string;
  className: string;
  
}

const SupportCard: React.FC<SupportCardProps> = ({ icon, title, email1, email2, buttonText, className }) => {
  return (
    <div className={`flex flex-col items-center justify-center p-6  w-[329px] h-[403px] bg-white ${className}`}>
      {/* Icon */}
      <div className="mb-4">{icon}</div>

      {/* Emails */}
      <p className="text-[#252B42] font-bold text-[14px]">{email1}</p>
      <p className="text-[#252B42] font-bold text-[14px] mb-2">{email2}</p>

      {/* Title */}
      <h3 className="text-[#252B42] font-bold text-[16px] mb-4">{title}</h3>

      {/* Button */}
      <button className="text-[#23A6F0] text-[14px] font-bold border border-[#23A6F0] rounded-full px-4 py-2 hover:bg-[#23A6F0] hover:text-white transition">
        {buttonText}
      </button>
    </div>
  );
};

export default SupportCard;