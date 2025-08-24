import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ContactCard } from "@/components/ContactCard";
import { BottomNavigation } from "@/components/BottomNavigation";

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  isOnline: boolean;
  location: string;
  lastSeen: string;
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Abhinav",
    isOnline: true,
    location: "New Delhi, India",
    lastSeen: "Online now",
  },
  {
    id: "2", 
    name: "Devansh",
    isOnline: false,
    location: "Mumbai, India",
    lastSeen: "2 hours ago",
  },
  {
    id: "3",
    name: "Divyam", 
    isOnline: true,
    location: "Bangalore, India",
    lastSeen: "Online now",
  },
  {
    id: "4",
    name: "Shivansh",
    isOnline: false,
    location: "Pune, India", 
    lastSeen: "5 minutes ago",
  },
  {
    id: "5",
    name: "Vanshika",
    isOnline: true,
    location: "Chennai, India",
    lastSeen: "Online now",
  },
  {
    id: "6", 
    name: "Eva",
    isOnline: false,
    location: "Kolkata, India",
    lastSeen: "1 hour ago",
  },
  {
    id: "7",
    name: "Shashwat",
    isOnline: false,
    location: "Hyderabad, India",
    lastSeen: "3 days ago",
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredContacts, setFilteredContacts] = useState(mockContacts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredContacts(mockContacts);
    } else {
      const filtered = mockContacts.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase()) ||
        contact.location.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  const handleContactClick = (contact: Contact) => {
    console.log("Opening chat with:", contact.name);
    // Here you would navigate to the chat screen
  };

  return (
    <div className="min-h-screen bg-gradient-bg">
      {/* Header */}
      <div className="sticky top-0 z-40 p-4 bg-gradient-bg/80 backdrop-blur-glass border-b border-white/5">
        <SearchBar onSearch={handleSearch} placeholder="Search your contacts..." />
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-32">
        <div className="max-w-md mx-auto space-y-4">
          {/* Online Status Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="animate-fade-in">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Your Contacts
              </h1>
              <p className="text-muted-foreground text-sm mt-1">
                {filteredContacts.filter(c => c.isOnline).length} online • {filteredContacts.length} total
              </p>
            </div>
          </div>

          {/* Contacts List */}
          <div className="space-y-3">
            {filteredContacts.length > 0 ? (
              filteredContacts.map((contact, index) => (
                <div
                  key={contact.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className="animate-slide-up"
                >
                  <ContactCard
                    name={contact.name}
                    isOnline={contact.isOnline}
                    location={contact.location}
                    lastSeen={contact.lastSeen}
                    onClick={() => handleContactClick(contact)}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-12 animate-fade-in">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-card rounded-full flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  No contacts found
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

export default Index;