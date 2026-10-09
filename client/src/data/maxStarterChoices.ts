export type MaxStarterChoice = {
  label: string;
  prompt: string;
};

export const MAX_INITIAL_MESSAGE = 'Hi, I’m Max, South Shore AI’s AI guide. Tell me a little about your work, something that feels harder than it should, or an idea you have been wondering about.';

export const MAX_STARTER_CHOICES: MaxStarterChoice[] = [
  {
    label: 'I don’t know where to start',
    prompt: 'I don’t know where to start.',
  },
  {
    label: 'I have an idea',
    prompt: 'I have an idea I would like to explore.',
  },
  {
    label: 'A task takes too much time',
    prompt: 'A task takes too much time.',
  },
];
