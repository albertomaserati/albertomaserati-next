export default function GradientBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Blurred color blobs */}
      <div className="absolute inset-0 blur-[130px] opacity-25">
        {/* Top-left: green */}
        <div className="absolute -top-[5%] -left-[5%] w-[500px] h-[400px] rounded-full bg-emerald-400" />
        {/* Top-right: cyan */}
        <div className="absolute top-[5%] right-[10%] w-[450px] h-[350px] rounded-full bg-cyan-400" />
        {/* Center: teal */}
        <div className="absolute top-[35%] left-[35%] w-[400px] h-[350px] rounded-full bg-teal-500" />
        {/* Bottom-left: blue */}
        <div className="absolute bottom-[0%] left-[5%] w-[480px] h-[380px] rounded-full bg-blue-500" />
        {/* Bottom-right: emerald */}
        <div className="absolute bottom-[10%] right-[-5%] w-[420px] h-[320px] rounded-full bg-emerald-500" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
