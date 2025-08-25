import { Home, Users, UserPlus, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  path: string;
}

const navigationItems: NavItem[] = [
  { id: "home", icon: Home, label: "Home", path: "/" },
  { id: "friends", icon: UserPlus, label: "Friends", path: "/friends" },
  { id: "groups", icon: Users, label: "Groups", path: "/groups" },
  { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
];

export const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveTab = () => {
    switch (location.pathname) {
      case "/": return "home";
      case "/friends": return "friends";
      case "/groups": return "groups";
      case "/settings": return "settings";
      default: return "home";
    }
  };
  
  const activeTab = getActiveTab();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
      <div className="mx-4 mb-4 p-4 bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-float">
        <div className="flex items-center justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => navigate(item.path)}
                className={`
                  relative flex flex-col items-center gap-1 p-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-primary shadow-glow text-primary-foreground' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-white/5'
                  }
                `}
              >
                <Icon className={`h-6 w-6 transition-transform duration-300 ${isActive ? 'scale-110' : ''}`} />
                <span className={`text-xs font-medium transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  {item.label}
                </span>
                
                {isActive && (
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full animate-glow-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};