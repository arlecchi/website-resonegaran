# Editing text & translations (English / Indonesian)

The site has an **EN / ID** button next to the sun/moon button. All the text on the site lives in the
`content/` folder, with **one file per page**. Each file contains the English and the Indonesian
version side by side, so you never have to touch the layout code to change words.

## Which file is which page

| Page                     | File                  | Who edits it |
| ------------------------ | --------------------- | ------------ |
| 01 Profile (home)        | `content/profile.ts`  |              |
| 02 Places to visit       | `content/places.ts`   |              |
| 03 Map                   | `content/map.ts`      |              |
| 04 Tour plans            | `content/tours.ts`    |              |
| 05 Information & history | `content/info.ts`     |              |
| 06 Blogs                 | `content/blogs.ts`    |              |
| Menu, top bar, footer    | `content/common.ts`   | shared, so tell the other person before you change it |

> `content/places.ts` also holds the names and descriptions of the places. The Map, Tour plans and
> Profile pages show these too, so a change there appears on several pages.

## What a content file looks like

```ts
export const mapContent = defineContent({
  en: {
    kicker: "GETTING AROUND",
    title: "A little map.\n*A lot to find.*",
    directions: "Get directions",
  },
  id: {
    kicker: "BERKELILING",
    title: "Peta kecil.\n*Banyak yang ditemukan.*",
    directions: "Petunjuk arah",
  },
})
```

- `en:` is **English** and `id:` is **Bahasa Indonesia**.
- The part **left** of the colon (`kicker`, `title` …) is the field's name. **Don't change it.**
- The part **right** of the colon, inside the quotes, is the text shown on the site. **Change this.**
- Every field in `en` must also exist in `id`, and the other way round.

## How to change some text

1. Find the text on the website, e.g. the "Get directions" button on the Map page.
2. Open that page's file (`content/map.ts`) and search for the text (Cmd/Ctrl + F).
3. Change the English line under `en:` **and** the matching line under `id:`.
4. Save. The dev server (`npm run dev`) reloads the page by itself. Click **EN / ID** to check both languages.

## Formatting inside the text

| Write this         | You get                                  |
| ------------------ | ---------------------------------------- |
| `\n`               | a line break                             |
| `*some words*`     | the coloured *italic* style used in big headings |
| `’` and `“ ”`      | curly quotes. Fine to use, and they look nicer than `'` and `"` |

Example: `"Places to\n*slow down.*"` shows as
Places to
*slow down.*

> If your text contains a `"`, use curly quotes `“ ”` instead, or write `\"`.
> A plain `"` inside the text ends the string early and breaks the file.

## Adding or removing items in a list

Some fields are lists in `[ ... ]` (tours, blog posts, timeline, paragraphs). Each item sits in `{ ... }`.

- To add an item, copy an existing `{ ... },` block, paste it below, and change the text.
  Do the same under **both** `en` and `id`, **in the same order**.
- To remove an item, delete the whole `{ ... },` block in **both** languages.

### Adding a new place (Places to visit / Map)

This takes two files:

1. **`lib/places.ts`**: add the photo and coordinates, and pick a short `slug`:
   ```ts
   { slug: "old-mosque", image: "photo-…", lat: -7.78, lng: 110.37 },
   ```
2. **`content/places.ts`**: under `places:` add the text for that same slug, in **both** `en` and `id`:
   ```ts
   "old-mosque": { name: "The old mosque", type: "Culture", time: "Morning", desc: "…" },
   ```

## Checking your work

Run this before you commit:

```bash
npm run typecheck
```

If it prints nothing, everything is fine. If you forgot a translation, you'll see something like:

```
content/map.ts(21,3): error TS2741: Property 'note' is missing in type ...
```

This means `content/map.ts` is missing `note` in one language. VS Code also underlines the problem in red.

## Common mistakes

- **Forgot the comma** at the end of a line → red underline on the next line. Every `field: "text"` line ends with `,`.
- **Translated the field name** (e.g. `judul:` instead of `title:`) → error. Only translate the text in quotes.
- **Edited `common.ts` at the same time as your teammate** → git merge conflict. Tell each other first.

## How it works (you don't need this to edit text)

- `lib/i18n.tsx` remembers the visitor's language in their browser. The first time someone visits,
  it picks Indonesian if their browser is set to Indonesian, and English otherwise.
- In a component, `const t = useContent(mapContent)` gives the text in the current language,
  and you use it as `{t.directions}`. Headings that use `\n` / `*…*` are shown with `<Rich text={t.title} />`.
- To make a new page translatable, create `content/<page>.ts` with `defineContent({ en: {...}, id: {...} })`
  and use `useContent()` in the component.
