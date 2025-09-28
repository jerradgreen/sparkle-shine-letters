import { Button } from '@/components/ui/button';

interface GetQuoteButtonProps {
  prefilled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GetQuoteButton = ({ 
  prefilled = false, 
  className = "",
  children = "Get Quote"
}: GetQuoteButtonProps) => {
  const openQuoteForm = () => {
    const baseUrl = 'https://www.cognitoforms.com/VintageMarqueeLights/EventStyleLettersQuoteForm';
    const url = prefilled ? baseUrl : baseUrl;
    window.open(url, '_blank');
  };

  return (
    <Button
      onClick={openQuoteForm}
      className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold ${className}`}
    >
      {children}
    </Button>
  );
};