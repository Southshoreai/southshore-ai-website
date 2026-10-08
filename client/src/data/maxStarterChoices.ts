export type MaxStarterChoice = {
  label: string;
  prompt: string;
};

export const MAX_INITIAL_MESSAGE = "Hi, I’m Max, South Shore AI’s AI guide. You don’t need to know anything about AI—or even know where to start. Tell me a little about your work, something that feels harder than it should, or an idea you’ve been wondering about. Together, we can explore a few possibilities.";

export const MAX_PRIVACY_NOTE = "Please describe the situation without sharing private client details, passwords, account numbers, or other sensitive information.";

export const MAX_STARTER_CHOICES: MaxStarterChoice[] = [
  {
    label: "I don’t know where to start",
    prompt: "I don’t know where to start.",
  },
  {
    label: "I spend too much time on repetitive work",
    prompt: "I spend too much time on repetitive work.",
  },
  {
    label: "I have an idea—is it possible?",
    prompt: "I have an idea and I’m wondering whether it’s possible.",
  },
  {
    label: "I want to help my team use AI",
    prompt: "I want to help my team use AI in a practical way.",
  },
  {
    label: "I’m just exploring",
    prompt: "I’m just exploring what might be possible.",
  },
];
