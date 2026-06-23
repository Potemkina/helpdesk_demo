# HelpDesk Студия

React + TypeScript + Tailwind CSS сайт для GitHub Pages со shadcn-совместимой структурой.

## Файлы

- `index.html` — Vite HTML entry.
- `src/App.tsx` — стартовая страница входа.
- `src/index.css` — Tailwind CSS и токены дизайн-системы.
- `components/ui/glow-horizon.tsx` — интегрированный React-компонент Glow Horizon.
- `components/ui/glow-horizon-utils/animated-title-fm.tsx` — вспомогательный компонент для демо.
- `src/demo.tsx` — демо из задания.
- `components.json` — shadcn-конфигурация.
- `lib/utils.ts` — shadcn helper `cn`.
- `assets/logo.png` — логотип на стартовой странице.

В `src/index.css` перенесены ключевые токены дизайн-системы: цвета в OKLCH, радиус, шрифты `Outfit` и `Fira Code`, базовые light/dark-переменные.

## Структура shadcn

Компоненты лежат в `components/ui`, потому что импорт из задания использует:

```tsx
import GlowHorizonFM from "@/components/ui/glow-horizon";
```

Alias `@/*` настроен в `vite.config.ts` и `tsconfig.app.json` на корень проекта. Это сохраняет совместимость с shadcn-паттерном и позволяет переносить UI-компоненты без переписывания импортов.

## Локальный просмотр

Установи зависимости:

```bash
pnpm install
```

Запусти dev server:

```bash
pnpm run dev
```

Проверка production build:

```bash
pnpm run build
```

## Публикация на GitHub Pages

Публикация настроена через GitHub Actions:

```text
.github/workflows/pages.yml
```

Workflow делает `pnpm install --frozen-lockfile`, `pnpm run build` и публикует папку `dist`.

Ручная отправка изменений:

```bash
git remote -v
git add .
git commit -m "Update site"
git push origin main
```

Сайт:

```text
https://potemkina.github.io/helpdesk_demo/
```

## Если нужно повторно инициализировать shadcn

В проекте уже есть `components.json`, `components/ui` и `lib/utils.ts`. Если нужно пересоздать shadcn-настройки с нуля:

```bash
npx shadcn@latest init
```

При выборе путей важно оставить UI-компоненты в `components/ui` или обновить alias `@/components/ui`, иначе импорт `@/components/ui/glow-horizon` перестанет совпадать с компонентами из задания.
