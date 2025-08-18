import { Link, NavLink } from "react-router-dom";
import { Disclosure, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

/** Detecta si el dispositivo soporta hover (desktop) */
function useHoverCapable() {
  const [hoverCapable, setHoverCapable] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setHoverCapable(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);
  return hoverCapable;
}

export default function Header() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Disclosure>
      {({ open, close }) => (
        <header className="w-full font-body">
          {/* Barra superior: en móvil se oculta si el menú está abierto */}
          <div
            className={`hazte-btn text-center text-[18px] tracking-wide py-2 font-display sc lg:block ${
              open ? "hidden" : "block"
            }`}
          >
            <Link to="/secretaria" className="inline-block w-full">
              HAZTE HERMANO
            </Link>
          </div>

          {/* NAVBAR */}
          <nav className="navbar">
            <div className="container">
              {/* ---- Desktop ---- */}
              <div
                className="hidden lg:grid grid-cols-5 items-center py-8"
                onMouseLeave={() => setOpenId(null)}
              >
                <div className="flex justify-center">
                  <HoverDropdown
                    id="cofradia"
                    label="COFRADÍA"
                    openId={openId}
                    setOpenId={setOpenId}
                    items={[
                      { label: "Historia", to: "/historia" },
                      { label: "Estatutos", to: "/estatutos" },
                      { label: "Cultos", to: "/cultos" },
                      { label: "Sede Canónica", to: "/sedecanonica" },
                      { label: "Junta Directiva", to: "/juntadirectiva" },
                    ]}
                  />
                </div>

                <div className="flex justify-center">
                  <TopLink to="/virgendelaesperanza" label="TITULAR" />
                </div>

                <div className="hidden lg:flex justify-center">
                  <Link to="/" aria-label="Inicio" className="inline-flex">
                    <img
                      src="/LOGO.svg"
                      alt="Escudo de la Cofradía"
                      className="h-[150px] w-auto select-none"
                      draggable={false}
                    />
                  </Link>
                </div>

                <div className="flex justify-center">
                  <TopLink to="/noticias" label="NOTICIAS" />
                </div>

                <div className="flex justify-center">
                  <HoverDropdown
                    id="secretaria"
                    label="SECRETARÍA"
                    openId={openId}
                    setOpenId={setOpenId}
                    items={[
                      { label: "Hazte Hermano", to: "/secretaria" },
                      { label: "Actualizar datos", to: "/secretaria" },
                      { label: "Ser Portador", to: "/serportador" },
                      { label: "Contacto", to: "/contacto" },
                      { label: "Donativo", to: "/donativo" },
                    ]}
                  />
                </div>
              </div>

              {/* ---- Mobile ---- */}
              {/* 1) Cuando está CERRADO: botón hamburguesa en la barra */}
              {!open && (
                <div className="flex items-center justify-end lg:hidden py-4">
                  <Disclosure.Button className="p-2" aria-label="Abrir menú">
                    <IconBurger className="h-8 w-8 text-black" />
                  </Disclosure.Button>
                </div>
              )}

              {/* 2) Cuando está ABIERTO: overlay + panel verde con botón X dentro */}
              {open && (
                <div className="lg:hidden">
                  {/* Backdrop para cerrar al click fuera */}
                  <div
                    className="fixed inset-0 z-40 bg-transparent"
                    onClick={() => close()}
                  />

                  {/* Panel verde */}
                  <div
                    className="
                      absolute left-0 right-0 top-0 z-50
                      bg-[#053C2F] text-white
                      flex flex-col items-center
                      px-4 pt-8 pb-6 space-y-6
                      shadow-lg
                      rounded-b-2xl
                    "
                  >
                    {/* Botón X dentro del panel */}
                    <Disclosure.Button
                      className="absolute top-4 right-4 p-2"
                      aria-label="Cerrar menú"
                    >
                      <IconClose className="h-8 w-8 text-white" />
                    </Disclosure.Button>

                    {/* LOGO (sin invertir) */}
                    <div className="flex justify-center mb-6">
                      <img
                        src="/LOGO.svg"
                        alt="Escudo Cofradía"
                        className="h-24 w-auto select-none"
                        draggable={false}
                      />
                    </div>

                    {/* Items en orden */}
                    <Accordion
                      label="COFRADÍA"
                      items={[
                        { label: "Historia", to: "/historia" },
                        { label: "Estatutos", to: "/estatutos" },
                        { label: "Cultos", to: "/cultos" },
                        { label: "Sede Canónica", to: "/sedecanonica" },
                        { label: "Junta Directiva", to: "/juntadirectiva" },
                      ]}
                      onNavigate={() => close()}
                      tone="inverted"
                    />

                    <NavItemMobile
                      to="/virgendelaesperanza"
                      label="TITULAR"
                      onClick={() => close()}
                      inverted
                    />
                    <NavItemMobile
                      to="/noticias"
                      label="NOTICIAS"
                      onClick={() => close()}
                      inverted
                    />

                    <Accordion
                      label="SECRETARÍA"
                      items={[
                        { label: "Hazte Hermano", to: "/secretaria" },
                        { label: "Actualizar datos", to: "/secretaria" },
                        { label: "Ser Portador", to: "/serportador" },
                        { label: "Contacto", to: "/contacto" },
                        { label: "Donativo", to: "/donativo" },
                      ]}
                      onNavigate={() => close()}
                      tone="inverted"
                    />
                  </div>
                </div>
              )}
            </div>
          </nav>
        </header>
      )}
    </Disclosure>
  );
}

/* ====== Subcomponentes ====== */

function TopLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className="block font-display sc text-lg sm:text-xl md:text-2xl nav-link px-3 py-2"
    >
      {label}
    </NavLink>
  );
}

/** Dropdown desktop (hover) */
function HoverDropdown({
  id,
  label,
  items,
  openId,
  setOpenId,
}: {
  id: string;
  label: string;
  items: { label: string; to: string }[];
  openId: string | null;
  setOpenId: (v: string | null) => void;
}) {
  const hoverCapable = useHoverCapable();
  const isOpen = openId === id;

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenId(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpenId]);

  return (
    <div
      className={`relative inline-block text-left ${
        isOpen ? "dropdown-open" : ""
      }`}
      onMouseEnter={() => hoverCapable && setOpenId(id)}
      onMouseLeave={() => hoverCapable && setOpenId(null)}
    >
      <button
        type="button"
        className="nav-link font-display sc text-[24px] cursor-pointer no-underline dropdown-trigger"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={`menu-${id}`}
        onFocus={() => setOpenId(id)}
        onClick={() => {
          if (!hoverCapable) setOpenId(isOpen ? null : id);
        }}
      >
        <span>{label}</span>
        <img
          src="/flecha.svg"
          alt=""
          aria-hidden="true"
          className="chevron select-none"
          draggable={false}
        />
      </button>

      <Transition
        as="div"
        show={isOpen}
        enter="transition duration-150 ease-out"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition duration-100 ease-in"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-1"
        id={`menu-${id}`}
        role="menu"
        aria-label={label}
        className="dropdown-panel focus:outline-none"
      >
        <ul>
          {items.map((i) => (
            <li key={i.to}>
              <NavLink
                to={i.to}
                className="submenu-link block px-3 py-2 rounded-md text-[20px]"
                onClick={() => setOpenId(null)}
              >
                {i.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
}

/* ===== MÓVIL: Items y acordeón ===== */

function NavItemMobile({
  to,
  label,
  onClick,
  inverted = false,
}: {
  to: string;
  label: string;
  onClick?: () => void;
  inverted?: boolean;
}) {
  const base = "block font-display sc text-lg sm:text-xl px-3 py-2 text-center";
  const color = inverted ? "text-white" : "text-black";
  return (
    <NavLink to={to} className={`${base} ${color}`} onClick={onClick}>
      {label}
    </NavLink>
  );
}

export function Accordion({
  label,
  items,
  onNavigate,
  tone = "default",
}: {
  label: string;
  items: { label: string; to: string }[];
  onNavigate?: () => void;
  tone?: "default" | "inverted";
}) {
  const isInverted = tone === "inverted";
  const btnColor = isInverted ? "text-white" : "text-black";
  const itemColor = isInverted ? "text-white" : "text-black";
  const panelBg = isInverted ? "bg-white/10" : "bg-black/5";
  const border = isInverted ? "border-white/20" : "border-black/10";

  return (
    <Disclosure>
      {({ open, close }) => (
        <div className={`rounded-xl ${border} border w-full max-w-sm`}>
          <Disclosure.Button
            className={`w-full px-4 py-3 font-display sc flex justify-between items-center ${btnColor}`}
          >
            <span className="mx-auto">{label}</span>
            <img
              src="/flecha.svg"
              alt=""
              aria-hidden="true"
              className={`w-4 h-4 transition-transform ${
                open ? "rotate-0" : "rotate-180"
              } ${isInverted ? "invert" : ""}`}
            />
          </Disclosure.Button>

          <Disclosure.Panel className={`${panelBg} rounded-b-xl`}>
            <ul className="px-2 pb-2 space-y-1">
              {items.map((i) => (
                <li key={i.to}>
                  <NavLink
                    to={i.to}
                    className={`block px-3 py-2 rounded-md text-[18px] ${itemColor} text-center`}
                    onClick={() => {
                      close();
                      onNavigate?.();
                    }}
                  >
                    {i.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}

/* ====== Iconos inline ====== */
function IconBurger({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconClose({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
