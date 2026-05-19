export function SceneBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden gradient-mesh">
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(46, 233, 198, 0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(46, 233, 198, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 20%, black 10%, transparent 70%)",
        }}
      />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-violet/10 blur-[100px]" />
      <div className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-accent/5 blur-[90px]" />
    </div>
  );
}
