"use client";
import { UserProvider } from "@/app/Contexts/AuthenticationContexts";
import TicketProvider from "@/app/Contexts/TicketContext"; 

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <TicketProvider>
        {children}
      </TicketProvider>
    </UserProvider>
  );
};

export default Providers;