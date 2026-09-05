export function BlobBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 grid-overlay" />
      
      <div
        className="absolute w-[600px] h-[600px] rounded-full blob-animate opacity-15"
        style={{
          background: "radial-gradient(circle, var(--color-lumen) 0%, transparent 70%)",
          filter: "blur(70px)",
          top: "10%",
          left: "10%",
        }}
      />
      
      <div
        className="absolute w-[500px] h-[500px] rounded-full blob-animate-delayed opacity-12"
        style={{
          background: "radial-gradient(circle, var(--color-plasma) 0%, transparent 70%)",
          filter: "blur(70px)",
          top: "30%",
          right: "15%",
        }}
      />
      
      <div
        className="absolute w-[450px] h-[450px] rounded-full blob-animate-slow opacity-10"
        style={{
          background: "radial-gradient(circle, var(--color-ember) 0%, transparent 70%)",
          filter: "blur(70px)",
          bottom: "20%",
          left: "30%",
        }}
      />
    </div>
  )
}
