export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Strata Management Portal</h1>
      <p>Welcome to the self-learning project for managing residential properties.</p>
      <p>This portal is designed for property owners, residents, and strata managers to collaborate efficiently.</p>

      <p><strong>Building:</strong> {process.env.NEXT_PUBLIC_BUILDING_NAME}</p>
      <img src="/building.jpg" alt="Residential Building" width="300" />

      <ul>
        <li>📄 View building notices</li>
        <li>🛠️ Submit maintenance requests</li>
        <li>📅 Check upcoming meetings</li>
        <li>📁 Download property–related documents</li>
      </ul>

      <p>
        <a href="/notice.pdf" download style={{ color: "blue" }}>
          📄 Download Building Notice (PDF)
        </a>
      </p>

      <footer style={{ marginTop: "3rem", fontSize: "0.9rem", color: "gray" }}>
        © 2025 York Monster — Self-learning project using Vercel and Next.js
      </footer>
    </main>
  );
}
