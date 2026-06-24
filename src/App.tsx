import { FormEvent, useState } from "react";
import logoUrl from "../assets/logo.png";

export default function App() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const login = String(form.get("login") ?? "").trim();
    const password = String(form.get("password") ?? "").trim();

    setMessage(login && password ? "Форма готова к подключению авторизации." : "Введите логин и пароль.");
  }

  return (
    <main className="grid min-h-screen place-items-center bg-white px-6 py-8 text-neutral-950">
      <section className="w-full max-w-[420px]" aria-labelledby="page-title">
        <div className="mx-auto mb-6 grid h-40 w-40 place-items-center overflow-hidden border border-neutral-300">
          <img src={logoUrl} alt="Логотип HelpDesk Студия" className="h-full w-full object-contain" />
        </div>

        <h1 id="page-title" className="mb-6 text-center text-[32px] font-bold leading-tight">
          HelpDesk Студия
        </h1>

        <form className="grid gap-3.5" onSubmit={handleSubmit} noValidate>
          <label className="grid gap-1.5 font-semibold">
            Логин
            <input
              className="h-11 border border-neutral-400 px-3 font-normal"
              name="login"
              type="text"
              autoComplete="username"
              placeholder="Введите логин"
            />
          </label>

          <label className="grid gap-1.5 font-semibold">
            Пароль
            <input
              className="h-11 border border-neutral-400 px-3 font-normal"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="Введите пароль"
            />
          </label>

          <button className="min-h-11 border border-neutral-950 bg-neutral-950 px-3 text-white" type="submit">
            Войти
          </button>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <button
              className="min-h-11 border border-neutral-950 bg-white px-3"
              type="button"
              onClick={() => setMessage("Восстановление пароля будет подключено позже.")}
            >
              Забыли пароль?
            </button>
            <button
              className="min-h-11 border border-neutral-950 bg-white px-3"
              type="button"
              onClick={() => setMessage("Регистрация будет подключена позже.")}
            >
              Регистрация
            </button>
          </div>

          <p className="min-h-5 text-center text-sm text-neutral-600" role="status" aria-live="polite">
            {message}
          </p>
        </form>
      </section>
    </main>
  );
}
