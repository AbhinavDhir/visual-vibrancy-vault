import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";
import { Search, Crosshair } from "lucide-react";
import { Input } from "@/components/ui/input";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Your location (current user)
  const userLocation = { id: "user", name: "You", x: 50, y: 50, avatar: "/api/placeholder/40/40" };
  
  // Mock friend locations on campus with avatars
  const friendLocations = [
    { id: "1", name: "Abhinav", x: 20, y: 30, status: "Free", avatar: "/api/placeholder/40/40", lastSeen: "2 min ago" },
    { id: "2", name: "Devansh", x: 60, y: 45, status: "Do not Disturb", avatar: "/api/placeholder/40/40", lastSeen: "5 min ago" },
    { id: "3", name: "Divyam", x: 40, y: 70, status: "In class", avatar: "/api/placeholder/40/40", lastSeen: "1 min ago" },
    { id: "4", name: "Shivansh", x: 80, y: 25, status: "Free", avatar: "/api/placeholder/40/40", lastSeen: "3 min ago" },
    { id: "5", name: "Vanshika", x: 25, y: 80, status: "Do not Disturb", avatar: "/api/placeholder/40/40", lastSeen: "15 min ago" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Free":
        return "hsl(195 100% 50%)"; // Electric blue
      case "Do not Disturb":
        return "hsl(300 100% 50%)"; // Magenta
      case "In class":
        return "hsl(60 100% 50%)"; // Yellow
      default:
        return "hsl(var(--muted))";
    }
  };

  const handlePing = (friendId: string) => {
    // Add ping animation and logic here
    console.log("Pinging friend:", friendId);
  };

  return (
    <div className="min-h-screen bg-gradient-bg text-foreground">
      {/* Search Bar */}
      <div className="sticky top-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-b border-white/10">
        <div className="relative max-w-md mx-auto animate-fade-in">
          <div className="relative flex items-center gap-3 p-3 bg-gradient-card backdrop-blur-lg rounded-2xl border border-card-glass-border shadow-card">
            <Search className="h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search friends or places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>

      {/* Live Map */}
      <main className="flex-1 p-4 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-map rounded-3xl border border-card-glass-border shadow-card overflow-hidden animate-scale-in">
            {/* Dark Map Background */}
            <div className="aspect-square bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative">
              {/* Cyberpunk Campus Layout */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Glowing Campus Paths */}
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Main campus boundary */}
                <path
                  d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
                  stroke="hsl(195 100% 50%)"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.4"
                  filter="url(#glow)"
                />
                
                {/* Campus grid paths */}
                <path
                  d="M 30 10 L 30 90 M 70 10 L 70 90 M 10 30 L 90 30 M 10 70 L 90 70"
                  stroke="hsl(195 100% 50%)"
                  strokeWidth="0.2"
                  fill="none"
                  opacity="0.3"
                  filter="url(#glow)"
                />
                
                {/* Buildings - Dark geometric shapes */}
                <rect x="15" y="15" width="12" height="12" fill="hsl(0 0% 15%)" opacity="0.8" rx="1" stroke="hsl(195 100% 50%)" strokeWidth="0.1" />
                <rect x="73" y="15" width="12" height="12" fill="hsl(0 0% 15%)" opacity="0.8" rx="1" stroke="hsl(195 100% 50%)" strokeWidth="0.1" />
                <rect x="15" y="73" width="12" height="12" fill="hsl(0 0% 15%)" opacity="0.8" rx="1" stroke="hsl(195 100% 50%)" strokeWidth="0.1" />
                <rect x="73" y="73" width="12" height="12" fill="hsl(0 0% 15%)" opacity="0.8" rx="1" stroke="hsl(195 100% 50%)" strokeWidth="0.1" />
                <rect x="42" y="42" width="16" height="16" fill="hsl(0 0% 15%)" opacity="0.8" rx="1" stroke="hsl(195 100% 50%)" strokeWidth="0.1" />
              </svg>

              {/* Your Avatar - Pulsing Electric Blue */}
              <div
                className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-avatar-pulse"
                style={{ left: `${userLocation.x}%`, top: `${userLocation.y}%` }}
              >
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary shadow-glow-primary ring-2 ring-primary/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-background/20 flex items-center justify-center text-primary font-bold text-sm">
                      YOU
                    </div>
                  </div>
                  {/* Personal radar effect */}
                  <div className="absolute inset-0 rounded-full border border-primary/30 animate-ping" />
                </div>
              </div>

              {/* Friend Avatars - Magenta Dots */}
              {friendLocations.map((friend, index) => {
                const isOld = friend.lastSeen.includes("15 min");
                return (
                  <div
                    key={friend.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{ 
                      left: `${friend.x}%`, 
                      top: `${friend.y}%`,
                    }}
                  >
                    <div 
                      className={`relative group cursor-pointer transition-all duration-300 hover:scale-110 ${
                        isOld ? 'opacity-60' : ''
                      }`}
                      onClick={() => handlePing(friend.id)}
                    >
                      {/* Friend Avatar */}
                      <div 
                        className={`w-8 h-8 rounded-full ring-2 ring-white/20 shadow-glow-secondary flex items-center justify-center text-xs font-bold text-background ${
                          isOld ? 'bg-muted animate-none' : 'bg-gradient-secondary animate-ping-pulse'
                        }`}
                        style={{ 
                          backgroundColor: isOld ? 'hsl(300 50% 30%)' : getStatusColor(friend.status),
                          animationDelay: `${index * 300}ms`
                        }}
                      >
                        {friend.name.slice(0, 2).toUpperCase()}
                      </div>
                      
                      {/* Ping Button - Shows on hover */}
                      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-gradient-accent text-accent-foreground rounded-full w-8 h-8 flex items-center justify-center shadow-glow-accent animate-neon-glow text-xs font-bold">
                          📡
                        </button>
                      </div>
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 bg-gradient-card backdrop-blur-lg rounded-xl px-3 py-2 text-sm font-medium text-foreground border border-card-glass-border shadow-float opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        <div className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: getStatusColor(friend.status) }}
                          />
                          <span className="text-primary font-semibold">{friend.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">{friend.lastSeen}</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Re-center Button */}
            <div className="absolute bottom-4 right-4">
              <button className="w-12 h-12 bg-gradient-card backdrop-blur-lg rounded-full border border-card-glass-border shadow-glow-primary flex items-center justify-center hover:scale-110 transition-all duration-300 group">
                <Crosshair className="h-6 w-6 text-primary group-hover:animate-neon-glow" />
              </button>
            </div>

            {/* Status Legend */}
            <div className="absolute top-4 right-4 bg-gradient-card backdrop-blur-lg rounded-2xl p-4 border border-card-glass-border shadow-float">
              <h3 className="text-sm font-bold text-primary mb-3 animate-neon-glow">Status</h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-primary shadow-glow-primary" />
                  <span className="text-foreground font-medium">Free</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-secondary shadow-glow-secondary" />
                  <span className="text-foreground font-medium">Do not Disturb</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gradient-accent shadow-glow-accent" />
                  <span className="text-foreground font-medium">In class</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats - Cyberpunk Style */}
          <div className="grid grid-cols-3 gap-4 mt-6 animate-slide-up">
            <div className="bg-gradient-card backdrop-blur-lg rounded-2xl p-6 border border-card-glass-border shadow-glow-primary text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-primary animate-neon-glow">
                {friendLocations.filter(f => f.status === "Free").length}
              </div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">Available</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-lg rounded-2xl p-6 border border-card-glass-border shadow-glow-accent text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-accent animate-neon-glow">
                {friendLocations.filter(f => f.status === "In class").length}
              </div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">In Class</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-lg rounded-2xl p-6 border border-card-glass-border shadow-glow-secondary text-center group hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-secondary animate-neon-glow">
                {friendLocations.filter(f => f.status === "Do not Disturb").length}
              </div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">Busy</div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Home;