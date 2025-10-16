import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface GetQuoteButtonProps {
  formType?: 'wall-hanging' | '3d-logos' | 'rental-inventory' | 'event-standup' | 'mobile-vendor' | 'custom';
  className?: string;
  children?: React.ReactNode;
}

export const GetQuoteButton = ({ 
  formType = 'custom', 
  className = "",
  children = "Get Quote"
}: GetQuoteButtonProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/quote/${formType}`);
  };

  return (
    <Button
      onClick={handleClick}
      className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold ${className}`}
    >
      {children}
    </Button>
  );
};