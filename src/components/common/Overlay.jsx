
export default function Overlay({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="fixed inset-0 z-20 bg-black/60"
      />
    );
  }