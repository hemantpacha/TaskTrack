import Link from "next/link";

export default function TasksPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Tasks</h1>

      <div style={{ marginTop: 12 }}>
        <Link href="/tasks/new">+ New Task</Link>
      </div>

      <ul style={{ marginTop: 16 }}>
        <li>
          <Link href="/tasks/1">Example Task #1</Link>
        </li>
      </ul>
    </main>
  );
}
