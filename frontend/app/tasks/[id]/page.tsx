import Link from "next/link";

export default function TaskDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Task Detail</h1>
      <p>Task ID: {params.id}</p>

      <div style={{ marginTop: 16 }}>
        <label>
          Percent complete
          <br />
          <input type="number" min={0} max={100} placeholder="0-100" />
        </label>
      </div>

      <div style={{ marginTop: 16 }}>
        <button type="button">Save check-in (placeholder)</button>
      </div>

      <div style={{ marginTop: 24 }}>
        <Link href="/tasks">← Back to Tasks</Link>
      </div>
    </main>
  );
}
