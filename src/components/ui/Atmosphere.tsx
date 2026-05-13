/** Decorative background atmosphere layers (fixed, behind content) */
export function Atmosphere() {
  return (
    <>
      <div className="atmos" id="atmos" aria-hidden="true" />
      <div className="grid-overlay" id="grid" aria-hidden="true" />
    </>
  );
}
