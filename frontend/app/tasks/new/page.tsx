import Link from "next/link";

export default function NewTaskPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>New Task</h1>

      <div style={{ marginTop: 16 }}>
        <label>
          Title
          <br />
          <input placeholder="e.g., Build MVP" />
        </label>
      </div>

      <div style={{ marginTop: 16 }}>
        <label>
          Deadline
          <br />
          <input type="date" />
        </label>
      </div>

      <div style={{ marginTop: 16 }}>
        <button type="button">Create (placeholder)</button>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/tasks">← Back to Tasks</Link>
      </div>
    </main>
  );
}
