"use client";
import React, { createContext, useEffect, useState } from "react";

export const TicketContext = createContext();

const TicketProvider = ({ children }) => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ticketCount, setTicketCount] = useState(1);
  const [ticket, setTicket] = useState({ type: "VIP Ticket", count: 1 }); 

  useEffect(() => {
    const stored = localStorage.getItem("selectedTicket");
    let savedTicket = null;

    try {
      savedTicket = JSON.parse(stored);
    } catch (error) {
      if (stored) {
        savedTicket = { type: stored, count: 1 };
      }
    }
  }, []);

  const handleTicketSelection = (type) => {
    setSelectedTicket(type);
    const ticketDetails = { type, count: ticketCount };
    localStorage.setItem("selectedTicket", JSON.stringify(ticketDetails));
    setTicket(ticketDetails);
  };

  const handleCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    setTicketCount(count);

    if (selectedTicket) {
      const ticketDetails = { type: selectedTicket, count };
      localStorage.setItem("selectedTicket", JSON.stringify(ticketDetails));
      setTicket(ticketDetails);
    }
  };

  const value = {
    selectedTicket,
    handleTicketSelection,
    ticketCount,
    handleCountChange,
    ticket,
    setSelectedTicket,
    setTicketCount,
    setTicket, 
  };

  return (
    <TicketContext.Provider value={value}>{children}</TicketContext.Provider>
  );
};

export default TicketProvider;
