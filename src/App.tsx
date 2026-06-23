import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import GlowHorizonFM from "@/components/ui/glow-horizon";
import logoUrl from "../assets/logo.png";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"default" | "error" | "success">("default");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const login = String(form.get("login") ?? "").trim();
    const password = String(form.get("password") ?? "").trim();

    if (!login || !password) {
      setMessage("Введите логин и пароль.");
      setMessageType("error");
      return;
    }

    setMessage("Данные приняты. Подключите серверную авторизацию.");
    setMessageType("success");
  }

  function setNeutralMessage(text: string) {
    setMessage(text);
    setMessageType("default");
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 py-8 text-foreground">
      <div aria-hidden className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,17,17,0.04)_0_1px,transparent_1px_22px)]" />
      <GlowHorizonFM className="pointer-events-none opacity-70" variant="top" />
      <GlowHorizonFM className="pointer-events-none opacity-45" variant="bottom" />

      <section
        className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-[440px] place-items-center"
        aria-labelledby="page-title"
      >
        <div className="w-full rounded-lg border-[3px] border-foreground bg-card p-5 shadow-[10px_10px_0_var(--accent),-10px_-10px_0_var(--primary)] sm:p-7">
          <div className="mx-auto mb-6 grid aspect-square w-[min(100%,220px)] place-items-center overflow-hidden rounded-lg border-[3px] border-foreground bg-card">
            <img src={logoUrl} alt="Логотип HelpDesk Студия" className="h-full w-full object-contain" />
          </div>

          <div className="mb-6 text-center">
            <p className="mx-auto mb-2 w-max rounded-lg border-2 border-foreground bg-primary px-3 py-1 font-mono text-sm font-black uppercase text-primary-foreground">
              HelpDesk
            </p>
            <h1 id="page-title" className="text-4xl font-black leading-none sm:text-[38px]">
              <span className="text-primary">H</span>elpDesk Студия
            </h1>
            <p className="mt-3 text-sm font-medium text-muted-foreground sm:text-base">
              Вход для команды поддержки
            </p>
          </div>

          <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-muted-foreground">Логин</span>
              <input
                className="h-12 rounded-lg border-2 border-foreground bg-card px-3.5 outline-none transition focus:border-primary focus:shadow-[5px_5px_0_color-mix(in_oklch,var(--accent)_35%,transparent)]"
                name="login"
                type="text"
                autoComplete="username"
                placeholder="Введите логин"
                required
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-extrabold text-muted-foreground">Пароль</span>
              <span className="relative block">
                <input
                  className="h-12 w-full rounded-lg border-2 border-foreground bg-card px-3.5 pr-12 outline-none transition focus:border-primary focus:shadow-[5px_5px_0_color-mix(in_oklch,var(--accent)_35%,transparent)]"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Введите пароль"
                  required
                />
                <button
                  className="absolute right-1.5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-lg text-muted-foreground transition hover:bg-accent/20 hover:text-primary"
                  type="button"
                  aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                  onClick={() => setShowPassword((value) => !value)}
                >
                  {showPassword ? <EyeOff aria-hidden size={19} /> : <Eye aria-hidden size={19} />}
                </button>
              </span>
            </label>

            <button
              className="h-12 rounded-lg border-2 border-foreground bg-primary font-black text-primary-foreground shadow-[5px_5px_0_var(--accent)] transition hover:translate-y-[-1px] hover:shadow-[7px_7px_0_var(--accent)]"
              type="submit"
            >
              Войти в студию
            </button>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              <button
                className="min-h-11 rounded-lg border-2 border-foreground bg-card px-3 font-extrabold transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                type="button"
                onClick={() => setNeutralMessage("Восстановление пароля будет доступно после подключения сервера.")}
              >
                Забыли пароль?
              </button>
              <button
                className="min-h-11 rounded-lg border-2 border-foreground bg-card px-3 font-extrabold transition hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
                type="button"
                onClick={() => setNeutralMessage("Регистрация будет доступна после подключения сервера.")}
              >
                Регистрация
              </button>
            </div>

            <p
              className={[
                "min-h-6 text-center text-sm leading-relaxed",
                messageType === "error" ? "text-destructive" : "",
                messageType === "success" ? "text-[color:oklch(0.52_0.15_171.2690)]" : "",
                messageType === "default" ? "text-muted-foreground" : "",
              ].join(" ")}
              role="status"
              aria-live="polite"
            >
              {message}
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}
