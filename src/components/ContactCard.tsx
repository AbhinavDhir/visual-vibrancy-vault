import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  name: string;
  avatar?: string;
  status: "Free" | "Do not Disturb" | "In class";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const ContactCard = ({ 
  name, 
  avatar, 
  status, 
  onClick,
  style 
}: ContactCardProps) => {
  const initials = name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Free":
        return "text-green-500";
      case "Do not Disturb":
        return "text-red-500";
      case "In class":
        return "text-yellow-500";
      default:
        return "text-muted-foreground";
    }
  };

  return (
    <div 
      className="flex items-center gap-4 p-4 bg-gradient-card backdrop-blur-lg rounded-2xl border border-card-glass-border shadow-card hover:shadow-glow-primary transition-all duration-300 cursor-pointer group animate-scale-in hover:scale-105"
      style={style}
      onClick={onClick}
    >
      {/* Avatar */}
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gradient-secondary flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-glow-secondary animate-avatar-pulse">
          {initials}
        </div>
        {/* Status Indicator */}
        <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${status === "Free" ? "bg-primary" : status === "Do not Disturb" ? "bg-secondary" : "bg-accent"} shadow-sm`} />
      </div>
      
      {/* Contact Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-lg">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground capitalize font-medium">
          {status}
        </p>
      </div>
      
      {/* Location Button */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-gradient-accent/20 rounded-xl flex items-center justify-center text-accent group-hover:bg-gradient-accent group-hover:text-accent-foreground group-hover:shadow-glow-accent transition-all duration-300 hover:scale-110 animate-neon-glow">
          <MapPin className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};