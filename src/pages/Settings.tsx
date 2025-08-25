import { BottomNavigation } from "@/components/BottomNavigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { 
  Bell, 
  MapPin, 
  Shield, 
  Moon, 
  Volume2, 
  User, 
  HelpCircle, 
  LogOut,
  ChevronRight 
} from "lucide-react";

const Settings = () => {
  const settingsItems = [
    {
      category: "Account",
      items: [
        { icon: User, label: "Profile Settings", hasToggle: false },
        { icon: Bell, label: "Notifications", hasToggle: true, enabled: true },
        { icon: MapPin, label: "Location Sharing", hasToggle: true, enabled: true },
      ]
    },
    {
      category: "Preferences", 
      items: [
        { icon: Moon, label: "Dark Mode", hasToggle: true, enabled: false },
        { icon: Volume2, label: "Sound Effects", hasToggle: true, enabled: true },
      ]
    },
    {
      category: "Privacy & Security",
      items: [
        { icon: Shield, label: "Privacy Settings", hasToggle: false },
      ]
    },
    {
      category: "Support",
      items: [
        { icon: HelpCircle, label: "Help & Support", hasToggle: false },
        { icon: LogOut, label: "Sign Out", hasToggle: false },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-40 p-4 bg-gradient-bg/80 backdrop-blur-glass border-b border-white/5">
        <div className="animate-fade-in">
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Settings
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Manage your preferences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-32">
        <div className="max-w-md mx-auto space-y-6">
          {/* Profile Section */}
          <div className="bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-card p-6 animate-scale-in">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 ring-2 ring-white/20">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-xl font-bold">
                  JD
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">John Doe</h3>
                <p className="text-muted-foreground">john.doe@university.edu</p>
                <Button variant="outline" size="sm" className="mt-2">
                  Edit Profile
                </Button>
              </div>
            </div>
          </div>

          {/* Settings Categories */}
          {settingsItems.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="space-y-3 animate-slide-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h2 className="text-lg font-semibold text-foreground px-2">
                {category.category}
              </h2>
              
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-gradient-card backdrop-blur-glass rounded-xl border border-white/10 shadow-card hover:shadow-float transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-gradient-primary/20 rounded-lg">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.label}
                          </span>
                        </div>
                        
                        {item.hasToggle ? (
                          <Switch checked={item.enabled} />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* App Info */}
          <div className="bg-gradient-card backdrop-blur-glass rounded-xl border border-white/10 shadow-card p-4 text-center animate-fade-in">
            <p className="text-muted-foreground text-sm">
              Campus Connect v1.0.0
            </p>
            <p className="text-muted-foreground text-xs mt-1">
              Made with ❤️ for students
            </p>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Settings;