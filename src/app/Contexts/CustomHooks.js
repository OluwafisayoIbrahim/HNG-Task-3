"use client"
import { useContext, createContext } from "react";
export const UserContext = createContext();
export const TicketContext = createContext();

export const useAuth = () => {
  return useContext(UserContext);
};

export const useTicket = () => {
  return useContext(TicketContext);
};