import { generateRandomId } from "../lib/generate-id";
import { Card, Priority } from "../types/types";

function generateRandomDate(): string {
  const start = new Date(2022, 0, 1);
  const end = new Date();
  const date = new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
  return date.toISOString().split("T")[0];
}

function generateRandomPriority(): Priority {
  const priorities: Priority[] = ["high", "medium", "low"];
  return priorities[Math.floor(Math.random() * priorities.length)];
}

export function generateFakeCardData(): Card[] {
  const titles = [
    "Complete project report.",
    "Design new homepage",
    "Fix login bug",
    "Update user profile",
    "Refactor codebase",
    "Implement new feature",
    "Test application",
    "Deploy to production",
    "Write documentation",
    "Conduct user research",
    "Plan next sprint",
    "Review code",
  ];

  const descriptions = [
    "Ensure to cover all aspects of the project.",
    "Create a modern and responsive design.",
    "Resolve the issue causing login failures.",
    "Add new fields and improve the layout.",
    "Improve code readability and performance.",
    "Add the requested new features.",
    "Perform unit and integration testing.",
    "Deploy the application to the live server.",
    "Document the new features and changes.",
    "Gather feedback from users.",
    "Organize tasks for the upcoming sprint.",
    "Review and approve the submitted code.",
  ];

  const cards: Card[] = [];

  for (let i = 0; i < titles.length; i++) {
    const card: Card = {
      id: generateRandomId(),
      title: titles[i],
      description: descriptions[i],
      date: generateRandomDate(),
      priority: generateRandomPriority(),
    };
    cards.push(card);
  }

  return cards;
}

// Generate the fake card data
const fakeCardData = generateFakeCardData();
console.log(fakeCardData);
