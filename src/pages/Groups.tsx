import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ContactCard } from "@/components/ContactCard";
import { BottomNavigation } from "@/components/BottomNavigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Group {
  id: string;
  name: string;
  members: Member[];
}

interface Member {
  id: string;
  name: string;
  status: "Free" | "Do not Disturb" | "In class";
  x?: number;
  y?: number;
}

const mockGroups: Group[] = [
  {
    id: "1",
    name: "Group 1",
    members: [
      { id: "1", name: "Abhinav", status: "Free", x: 25, y: 30 },
      { id: "2", name: "Devansh", status: "Do not Disturb", x: 70, y: 45 },
      { id: "3", name: "Divyam", status: "In class", x: 40, y: 70 },
    ]
  },
  {
    id: "2", 
    name: "Group 2",
    members: [
      { id: "4", name: "Shivansh", status: "Free", x: 80, y: 25 },
      { id: "5", name: "Vanshika", status: "Do not Disturb", x: 30, y: 80 },
    ]
  },
  {
    id: "3",
    name: "Group 3", 
    members: [
      { id: "6", name: "Eva", status: "Free", x: 60, y: 35 },
      { id: "7", name: "Shashwat", status: "In class", x: 45, y: 60 },
    ]
  },
  {
    id: "4",
    name: "Group 4",
    members: [
      { id: "8", name: "Rahul", status: "Free", x: 55, y: 40 },
    ]
  },
];

const Groups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);
  const [filteredGroups, setFilteredGroups] = useState(mockGroups);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredGroups(mockGroups);
    } else {
      const filtered = mockGroups.filter(group =>
        group.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredGroups(filtered);
    }
  };

  const handleGroupClick = (group: Group) => {
    setSelectedGroup(group);
  };

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

  if (selectedGroup) {
    return (
      <div className="min-h-screen bg-gradient-bg">
        {/* Header */}
        <div className="sticky top-0 z-40 p-4 bg-gradient-bg/80 backdrop-blur-glass border-b border-white/5">
          <div className="flex items-center gap-4 animate-fade-in">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedGroup(null)}
              className="h-9 w-9 p-0 hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {selectedGroup.name}
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                {selectedGroup.members.length} members
              </p>
            </div>
          </div>
        </div>

        {/* Group Map */}
        <div className="p-4">
          <div className="max-w-4xl mx-auto mb-6">
            <div className="relative bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-card overflow-hidden animate-scale-in">
              <div className="aspect-video bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative">
                {/* Map Background */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
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
                </svg>

                {/* Group Member Locations */}
                {selectedGroup.members.map((member, index) => (
                  <div
                    key={member.id}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 animate-glow-pulse"
                    style={{ 
                      left: `${member.x}%`, 
                      top: `${member.y}%`,
                      animationDelay: `${index * 200}ms`
                    }}
                  >
                    <div className="relative group cursor-pointer">
                      <div className={`w-4 h-4 rounded-full ${getStatusColor(member.status)} ring-2 ring-white shadow-lg transition-all duration-300 group-hover:scale-125`} />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-card backdrop-blur-glass rounded-lg px-3 py-2 text-sm font-medium text-foreground border border-white/10 shadow-float opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${getStatusColor(member.status)}`} />
                          <span>{member.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Group Members List */}
        <main className="flex-1 p-4 pb-32">
          <div className="max-w-md mx-auto space-y-4">
            <div className="flex items-center justify-between mb-6">
              <div className="animate-fade-in">
                <h2 className="text-xl font-bold text-foreground">
                  Group Members
                </h2>
              </div>
            </div>

            <div className="space-y-3">
              {selectedGroup.members.map((member, index) => (
                <div
                  key={member.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-slide-up"
                >
                  <ContactCard
                    name={member.name}
                    status={member.status}
                    onClick={() => console.log("Opening chat with:", member.name)}
                  />
                </div>
              ))}
            </div>
          </div>
        </main>

        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-40 p-4 bg-gradient-bg/80 backdrop-blur-glass border-b border-white/5">
        <SearchBar onSearch={handleSearch} placeholder="Search groups..." />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-32">
        <div className="max-w-md mx-auto space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Your Groups
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                {filteredGroups.length} groups
              </p>
            </div>
          </div>

          {/* Groups List */}
          <div className="space-y-3">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group, index) => (
                <div
                  key={group.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-slide-up"
                >
                  <div 
                    className="group relative p-4 bg-gradient-card backdrop-blur-glass rounded-2xl border border-white/10 shadow-card hover:shadow-float transition-all duration-300 hover:scale-[1.02] cursor-pointer animate-scale-in"
                    onClick={() => handleGroupClick(group)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="h-14 w-14 bg-gradient-primary rounded-xl flex items-center justify-center ring-2 ring-white/20 transition-all duration-300 group-hover:ring-primary/50">
                          <span className="text-primary-foreground font-semibold text-lg">
                            {group.name.charAt(group.name.length - 1)}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-foreground truncate mb-1 group-hover:text-primary transition-colors duration-300">
                          {group.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {group.members.length} members
                        </p>
                      </div>
                      
                      <div className="bg-gradient-primary rounded-xl px-4 py-2 shadow-glow">
                        <span className="text-primary-foreground font-medium text-sm">
                          Summon
                        </span>
                      </div>
                    </div>
                    
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300 pointer-events-none" />
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-card rounded-full flex items-center justify-center">
                  <span className="text-2xl">👥</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No groups found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search query
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Groups;