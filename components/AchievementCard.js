import { achievements } from "@/db";

export default function AchievementCard({ name }) {
  return (
    <section>
      <p>{name}</p>
    </section>
  );
}
