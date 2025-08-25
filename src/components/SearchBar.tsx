import { Search, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
}

export const SearchBar = ({ onSearch, placeholder = "Search contacts..." }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch?.(value);
  };

  return (
    <div className="relative w-full animate-fade-in">
      <div className="relative flex items-center gap-3 p-4 bg-gradient-card backdrop-blur-lg rounded-2xl border border-card-glass-border shadow-glow-primary">
        <div className="flex items-center gap-3 flex-1">
          <Search className="h-5 w-5 text-primary animate-neon-glow" />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base font-medium"
          />
        </div>
        
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl shadow-glow-primary transition-all duration-300 hover:scale-110 cursor-pointer group">
          <User className="h-5 w-5 text-primary-foreground group-hover:animate-neon-glow" />
        </div>
      </div>
    </div>
  );
};