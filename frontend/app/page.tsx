import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Progress Tracker</h1>
      <p>Track task progress and see if you're on pace.</p>

      <Link href="/tasks">Go to Tasks →</Link>
    </main>
  );
}

