import { useState } from "react";
import { BottomNavigation } from "@/components/BottomNavigation";

const Home = () => {
  // Mock friend locations on campus
  const friendLocations = [
    { id: "1", name: "Abhinav", x: 20, y: 30, status: "Free" },
    { id: "2", name: "Devansh", x: 60, y: 45, status: "Do not Disturb" },
    { id: "3", name: "Divyam", x: 40, y: 70, status: "In class" },
    { id: "4", name: "Shivansh", x: 80, y: 25, status: "Free" },
    { id: "5", name: "Vanshika", x: 25, y: 80, status: "Do not Disturb" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Free":
        return "bg-green-500";
      case "Do not Disturb":
        return "bg-red-500";
      case "In class":
        return "bg-yellow-500";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-40 p-4 bg-gradient-bg/80 backdrop-blur-glass border-b border-white/5">
        <div className="animate-fade-in">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Campus Map
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            See where your friends are on campus
          </p>
        </div>
      </div>

      {/* Map Content */}
      <main className="flex-1 p-4 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Campus Map */}
          <div className="relative bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-card overflow-hidden animate-scale-in">
            {/* Map Background */}
            <div className="aspect-square bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative">
              {/* Campus Layout Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                {/* Campus paths */}
                <path
                  d="M 10 10 L 90 10 L 90 90 L 10 90 Z"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.5"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M 30 10 L 30 90 M 70 10 L 70 90 M 10 30 L 90 30 M 10 70 L 90 70"
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="0.3"
                  fill="none"
                  opacity="0.2"
                />
                
                {/* Buildings */}
                <rect x="15" y="15" width="12" height="12" fill="hsl(var(--muted))" opacity="0.4" rx="1" />
                <rect x="73" y="15" width="12" height="12" fill="hsl(var(--muted))" opacity="0.4" rx="1" />
                <rect x="15" y="73" width="12" height="12" fill="hsl(var(--muted))" opacity="0.4" rx="1" />
                <rect x="73" y="73" width="12" height="12" fill="hsl(var(--muted))" opacity="0.4" rx="1" />
                <rect x="42" y="42" width="16" height="16" fill="hsl(var(--muted))" opacity="0.4" rx="1" />
              </svg>

              {/* Friend Locations */}
              {friendLocations.map((friend, index) => (
                <div
                  key={friend.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
                  style={{ 
                    left: `${friend.x}%`, 
                    top: `${friend.y}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="relative group cursor-pointer">
                    <div className={`w-4 h-4 rounded-full ${getStatusColor(friend.status)} ring-2 ring-white shadow-lg transition-all duration-300 group-hover:scale-125`} />
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-card backdrop-blur-glass rounded-lg px-3 py-2 text-sm font-medium text-foreground border border-white/10 shadow-float opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(friend.status)}`} />
                        <span>{friend.name}</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/10" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Legend */}
            <div className="absolute top-4 right-4 bg-gradient-card backdrop-blur-glass rounded-xl p-3 border border-white/10 shadow-float">
              <h3 className="text-sm font-semibold text-foreground mb-2">Status</h3>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-muted-foreground">Free</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="text-muted-foreground">Do not Disturb</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-muted-foreground">In class</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6 animate-slide-up">
            <div className="bg-gradient-card backdrop-blur-glass rounded-xl p-4 border border-white/10 shadow-card text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {friendLocations.filter(f => f.status === "Free").length}
              </div>
              <div className="text-sm text-muted-foreground">Free</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-glass rounded-xl p-4 border border-white/10 shadow-card text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {friendLocations.filter(f => f.status === "In class").length}
              </div>
              <div className="text-sm text-muted-foreground">In Class</div>
            </div>
            <div className="bg-gradient-card backdrop-blur-glass rounded-xl p-4 border border-white/10 shadow-card text-center">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {friendLocations.filter(f => f.status === "Do not Disturb").length}
              </div>
              <div className="text-sm text-muted-foreground">Busy</div>
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