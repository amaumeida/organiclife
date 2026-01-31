export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#0f172a",
      color: "white",
      textAlign: "center",
      padding: "40px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
        $ORGANICLIFE 🌱
      </h1>

      <p style={{ fontSize: "1.2rem", maxWidth: "600px", marginBottom: "2rem" }}>
        A living meme. Growing in real time.
        <br />
        Organic growth only. No paid ads.
      </p>

      <a
        href="https://x.com/OrganicLife2026"
        target="_blank"
        style={{
          padding: "12px 24px",
          backgroundColor: "#22c55e",
          color: "#022c22",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}
      >
        Follow on X
      </a>
    </main>
  );
}
