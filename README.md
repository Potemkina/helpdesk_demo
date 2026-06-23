# HelpDesk Студия

Простой статический сайт для GitHub Pages без фреймворков и сборки.

## Файлы

- `index.html` — стартовая страница.
- `styles.css` — адаптивная верстка и оформление.
- `script.js` — базовое поведение формы.
- `assets/logo.png` — логотип на стартовой странице.

В `styles.css` перенесены ключевые токены дизайн-системы: цвета в OKLCH, радиус, шрифты `Outfit` и `Fira Code`, базовые light/dark-переменные. Tailwind/Next не требуются.

## Локальный просмотр

Открой `index.html` в браузере или запусти простой локальный сервер:

```bash
python3 -m http.server 8000
```

После этого открой:

```text
http://localhost:8000
```

## Публикация на GitHub Pages

1. Убедись, что репозиторий привязан к GitHub:

```bash
git remote -v
```

2. Добавь файлы и сделай первый коммит:

```bash
git add index.html styles.css script.js README.md assets/logo.png
git commit -m "Add static HelpDesk start page"
```

3. Отправь ветку `main` в GitHub:

```bash
git push -u origin main
```

4. Открой репозиторий на GitHub: `Potemkina/helpdesk_demo`.
5. Перейди в `Settings` -> `Pages`.
6. В блоке `Build and deployment` выбери:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - папка: `/ (root)`
7. Нажми `Save`.

Через несколько минут сайт будет доступен по адресу:

```text
https://potemkina.github.io/helpdesk_demo/
```
