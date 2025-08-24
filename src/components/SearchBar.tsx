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
      <div className="relative flex items-center gap-3 p-4 bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-glow">
        <div className="flex items-center gap-3 flex-1">
          <Search className="h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder={placeholder}
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
        </div>
        
        <div className="flex items-center justify-center w-10 h-10 bg-gradient-primary rounded-xl shadow-glow transition-all duration-300 hover:scale-105 cursor-pointer">
          <User className="h-5 w-5 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
};