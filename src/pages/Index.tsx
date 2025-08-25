import { useState } from "react";
import { SearchBar } from "@/components/SearchBar";
import { ContactCard } from "@/components/ContactCard";
import { BottomNavigation } from "@/components/BottomNavigation";

interface Contact {
  id: string;
  name: string;
  avatar?: string;
  status: "Free" | "Do not Disturb" | "In class";
}

const mockContacts: Contact[] = [
  {
    id: "1",
    name: "Abhinav",
    status: "Free",
  },
  {
    id: "2", 
    name: "Devansh",
    status: "Do not Disturb",
  },
  {
    id: "3",
    name: "Divyam", 
    status: "In class",
  },
  {
    id: "4",
    name: "Shivansh",
    status: "Free",
  },
  {
    id: "5",
    name: "Vanshika",
    status: "Do not Disturb",
  },
  {
    id: "6", 
    name: "Eva",
    status: "Free",
  },
  {
    id: "7",
    name: "Shashwat",
    status: "In class",
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
        contact.status.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredContacts(filtered);
    }
  };

  const handleContactClick = (contact: Contact) => {
    console.log("Opening chat with:", contact.name);
    // Here you would navigate to the chat screen
  };

  return (
    <div className="min-h-screen bg-gradient-bg text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-40 p-4 bg-background/80 backdrop-blur-lg border-b border-card-glass-border">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-primary animate-neon-glow">
            Connections
          </h1>
          <p className="text-muted-foreground text-sm mt-1 font-medium">
            {filteredContacts.length} friends in your network
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 p-4 pb-32">
        <div className="max-w-md mx-auto space-y-6">
          {/* Search Bar */}
          <SearchBar onSearch={handleSearch} placeholder="Search connections..." />
          
          {/* Connections List */}
          <div className="space-y-4 animate-slide-up">
            {filteredContacts.map((contact, index) => (
              <ContactCard
                key={contact.id}
                name={contact.name}
                avatar={contact.avatar}
                status={contact.status}
                onClick={() => handleContactClick(contact)}
                style={{ animationDelay: `${index * 100}ms` }}
              />
            ))}
          </div>
          
          {filteredContacts.length === 0 && (
            <div className="text-center py-12 animate-fade-in">
              <div className="text-muted-foreground">
                No connections found matching "{searchQuery}"
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
};

export default Index;