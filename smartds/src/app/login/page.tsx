"use client";

import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen flex font-sans">
      {/* ── LEFT PANEL ── */}
      <div
        className="hidden lg:flex lg:w-[55%] flex-col p-10 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, #1740d8 0%, #1233bb 50%, #0e27a5 100%)",
        }}
      >
        {/* Decorative blobs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.08]"
          style={{
            background:
              "radial-gradient(circle, #ffffff 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 w-[480px] h-[480px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #60a5fa 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-[0.04]"
          style={{
            background:
              "radial-gradient(circle, #ffffff 0%, transparent 70%)",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: "rgba(255,255,255,0.2)" }}
          >
            <span className="text-white font-bold text-sm tracking-tight">
              SD
            </span>
          </div>
          <div>
            <p className="text-white font-bold text-lg leading-none">
              SmartDS
            </p>
            <p
              className="text-[10px] tracking-[0.18em] uppercase"
              style={{ color: "rgba(191,219,254,0.9)" }}
            >
              Digital Secretariat
            </p>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center mt-10">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 w-fit mb-8 border"
            style={{
              background: "rgba(255,255,255,0.1)",
              borderColor: "rgba(255,255,255,0.18)",
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: "#93c5fd" }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: "rgba(219,234,254,0.95)" }}
            >
              Sooriyawewa AG Office
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[3.2rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            Smart{" "}
            <span style={{ color: "#7db9ff" }}>Digital</span>
            <br />
            Secretariat
            <br />
            Operations.
          </h1>

          <p
            className="text-base leading-relaxed max-w-xs"
            style={{ color: "rgba(191,219,254,0.9)" }}
          >
            Empowering the Sooriyawewa AG Office with seamless digital
            workflows, smarter document management and efficient public service
            operations.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-3 gap-3 mt-12">
            {[
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#93c5fd" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                title: "Smart Workflows",
                desc: "Streamline daily office processes through digital workflows.",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#93c5fd" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Secure Records",
                desc: "Manage official documents and records securely.",
              },
              {
                icon: (
                  <svg
                    className="w-5 h-5"
                    style={{ color: "#93c5fd" }}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Better Service",
                desc: "Improve efficiency and deliver faster public services.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl p-4 border transition-all duration-200 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.09)",
                  borderColor: "rgba(255,255,255,0.14)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.15)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.09)")
                }
              >
                <div className="mb-3">{card.icon}</div>
                <p className="text-white font-semibold text-sm mb-1">
                  {card.title}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "rgba(191,219,254,0.8)" }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT PANEL ── */}
      <div className="flex-1 flex items-center justify-center bg-white px-6 py-12">
        <div className="w-full max-w-[420px]">
          {/* Top logo & heading */}
          <div className="flex flex-col items-center mb-8">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl mb-4"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              }}
            >
              <span className="text-white font-bold text-lg tracking-tight">
                SD
              </span>
            </div>
            <p
              className="text-xs font-bold tracking-[0.22em] uppercase mb-2"
              style={{ color: "#2563eb" }}
            >
              SmartDS Portal
            </p>
            <h2
              className="text-[2rem] font-extrabold mb-1"
              style={{ color: "#0f172a" }}
            >
              Welcome Back
            </h2>
            <p className="text-sm" style={{ color: "#64748b" }}>
              Sign in to continue to your digital workspace.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email */}
            <div>
              <label
                className="block text-sm font-semibold mb-1.5"
                htmlFor="login-email"
                style={{ color: "#374151" }}
              >
                Official Email Address
              </label>
              <div className="relative">
                <span
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "#9ca3af" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  id="login-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your official email"
                  className="w-full pl-10 pr-4 py-3 rounded-xl text-sm placeholder-gray-400 focus:outline-none transition-all"
                  style={{
                    border: "1px solid #e5e7eb",
                    color: "#1e293b",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                className="block text-sm font-semibold mb-1.5"
                htmlFor="login-password"
                style={{ color: "#374151" }}
              >
                Password
              </label>
              <div className="relative">
                <span
                  className="absolute left-3.5 top-1/2 -translate-y-1/2"
                  style={{ color: "#9ca3af" }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-11 py-3 rounded-xl text-sm placeholder-gray-400 focus:outline-none transition-all"
                  style={{
                    border: "1px solid #e5e7eb",
                    color: "#1e293b",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#2563eb";
                    e.target.style.boxShadow = "0 0 0 3px rgba(37,99,235,0.15)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "#e5e7eb";
                    e.target.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  id="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 transition-colors"
                  style={{ color: "#9ca3af" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "#4b5563")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "#9ca3af")
                  }
                >
                  {showPassword ? (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me + Forgot password */}
            <div className="flex items-center justify-between">
              <button
                type="button"
                id="remember-me-toggle"
                className="flex items-center gap-2 select-none cursor-pointer"
                onClick={() => setRememberMe(!rememberMe)}
              >
                <span
                  className="w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150"
                  style={{
                    borderColor: rememberMe ? "#2563eb" : "#d1d5db",
                    background: rememberMe ? "#2563eb" : "#fff",
                  }}
                >
                  {rememberMe && (
                    <svg
                      className="w-2.5 h-2.5 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </span>
                <span className="text-sm" style={{ color: "#4b5563" }}>
                  Remember me
                </span>
              </button>
              <a
                href="#"
                id="forgot-password-link"
                className="text-sm font-semibold transition-colors"
                style={{ color: "#2563eb" }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#1d4ed8")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "#2563eb")
                }
              >
                Forgot Password?
              </a>
            </div>

            {/* Login button */}
            <button
              type="submit"
              id="login-submit-btn"
              className="w-full py-3.5 rounded-xl text-white font-semibold text-sm tracking-wide transition-all duration-200 shadow-md"
              style={{
                background:
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 20px rgba(37,99,235,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 4px 6px rgba(0,0,0,0.1)";
              }}
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px" style={{ background: "#e5e7eb" }} />
            <span className="text-xs" style={{ color: "#9ca3af" }}>
              or continue with
            </span>
            <div className="flex-1 h-px" style={{ background: "#e5e7eb" }} />
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              id="google-login-btn"
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid #e5e7eb",
                color: "#374151",
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#f9fafb";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#d1d5db";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#e5e7eb";
              }}
            >
              {/* Google SVG */}
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Google
            </button>
            <button
              id="microsoft-login-btn"
              type="button"
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid #e5e7eb",
                color: "#374151",
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#f9fafb";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#d1d5db";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#e5e7eb";
              }}
            >
              {/* Microsoft SVG */}
              <svg className="w-4 h-4" viewBox="0 0 23 23" fill="none">
                <rect x="1" y="1" width="10" height="10" fill="#F25022" />
                <rect x="12" y="1" width="10" height="10" fill="#7FBA00" />
                <rect x="1" y="12" width="10" height="10" fill="#00A4EF" />
                <rect x="12" y="12" width="10" height="10" fill="#FFB900" />
              </svg>
              Microsoft
            </button>
          </div>

          {/* Register link */}
          <p className="text-center text-sm mt-6" style={{ color: "#6b7280" }}>
            Don&apos;t have an account?{" "}
            <a
              href="#"
              id="register-link"
              className="font-bold transition-colors"
              style={{ color: "#2563eb" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#1d4ed8")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#2563eb")
              }
            >
              Register
            </a>
          </p>

          {/* Footer */}
          <p className="text-center text-xs mt-4" style={{ color: "#9ca3af" }}>
            Secure access · SmartDS Digital Secretariat · Sooriyawewa AG Office
          </p>
        </div>
      </div>
    </div>
  );
}
