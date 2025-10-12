type NormasModalProps = {
  open: boolean;
  onClose: () => void;
  titleId?: string;
  title: string;
  children: React.ReactNode;
};

export function NormasModal({
  open,
  onClose,
  titleId = "normas-title",
  title,
  children,
}: NormasModalProps) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full sm:max-w-xl md:max-w-2xl p-6 md:p-8 relative text-gray-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl hover:cursor-pointer"
          aria-label="Cerrar"
        >
          ✕
        </button>

        <h3
          id={titleId}
          className="text-2xl md:text-3xl font-semibold mb-4 text-emerald-700 text-center"
        >
          {title}
        </h3>

        {children}
      </div>
    </div>
  );
}
