import { MapPin, MessageCircle, Phone } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ContactCardProps {
  name: string;
  avatar?: string;
  isOnline?: boolean;
  location?: string;
  lastSeen?: string;
  onClick?: () => void;
}

export const ContactCard = ({ 
  name, 
  avatar, 
  isOnline = false, 
  location = "Unknown", 
  lastSeen = "Recently", 
  onClick 
}: ContactCardProps) => {
  const initials = name.split(' ').map(n => n.charAt(0)).join('').toUpperCase().slice(0, 2);

  return (
    <div 
      className="group relative p-4 bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-card hover:shadow-float transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-scale-in"
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <Avatar className="h-14 w-14 ring-2 ring-white/20 transition-all duration-300 group-hover:ring-primary/50">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-gradient-primary text-primary-foreground font-semibold text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          
          {isOnline && (
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-background animate-glow-pulse" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-lg text-foreground truncate mb-1 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-3 w-3 text-accent" />
            <span className="truncate">{location}</span>
          </div>
          
          <p className="text-xs text-muted-foreground mt-1">{lastSeen}</p>
        </div>
        
        <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-primary/20">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-accent/20">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};