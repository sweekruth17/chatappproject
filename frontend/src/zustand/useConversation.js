import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  broadcast: false,
  setMessages: (messages) => set({ messages }),
  setBroadcast: (broadcast) => set({ broadcast: !state.broadcast }),
}));

export default useConversation;
