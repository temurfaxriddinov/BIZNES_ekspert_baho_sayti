# "BIZNES EKSPERT BAHO" MCHJ — vizitka sayt

"BIZNES EKSPERT BAHO" MCHJ baholash tashkilotining bir sahifali vizitka sayti. Firma O'zbekistonda ko'char va ko'chmas mulkni baholaydi hamda biznes reja ishlab chiqadi.

**Sayt manzili:** https://temurfaxriddinov.github.io/BIZNES_ekspert_baho_sayti/

Sayt oddiy HTML, CSS va JavaScript'da yozilgan. Hech qanday framework, build jarayoni yoki server kerak emas.

## Fayllar

```
mysite/
├── index.html   — sahifa tuzilishi va barcha matnlar
├── style.css    — barcha stillar (ranglar, shriftlar, light/dark rejim, moslashuvchanlik)
├── script.js    — light/dark rejim, telefon menyusi, faol bo'lim, footer'dagi yil
├── assets/
│   ├── favicon.svg          — favicon ("BE" belgisi)
│   ├── favicon-32.png       — eski brauzerlar uchun favicon
│   ├── apple-touch-icon.png — iPhone "bosh ekranga qo'shish" belgisi (180×180)
│   ├── og-image.png         — havola kartasi rasmi (1200×630)
│   └── og-image.html        — og-image.png shabloni
└── README.md    — shu fayl
```

## Ishga tushirish

`index.html` faylini brauzerda ochish kifoya:

```bash
start index.html
```

Uchala fayl (`index.html`, `style.css`, `script.js`) bitta papkada turishi kerak.

## Sahifa bo'limlari

| # | Bo'lim | `id` | Tavsif |
|---|--------|------|--------|
| 1 | Header | — | Yopishib turadigan menyu (telefonda ☰), rejim tugmasi, "Bog'lanish" tugmasi |
| 2 | Hero | `top` | Asosiy sarlavha, telefon va Telegram |
| 3 | Qanday ishlaymiz | `jarayon` | 4 qadamli ish jarayoni |
| 4 | CTA lentasi | — | "Xolis. Aniq. Ishonchli." va aloqa |
| 5 | Nega aynan biz | — | Xolislik, aniqlik, maxfiylik |
| 6 | Xizmatlarimiz | `xizmatlar` | Bo'lim sarlavhasi |
| 7 | Xizmat 01 | `kochmas-mulk` | Ko'chmas mulkni baholash |
| 8 | Xizmat 02 | `kochar-mulk` | Ko'char mulkni baholash |
| 9 | Xizmat 03 | `biznes-reja` | Biznes reja ishlab chiqish |
| 10 | Taqqoslash | — | Rasmiy baholash va taxminiy narx farqi |
| 11 | Ishlarimiz | `ishlarim` | 3 ta karta: rasm, nom, qisqa izoh |
| 12 | Loyihalarimiz | `loyihalar` | Bajarilgan ishlar kartalari |
| 13 | Mijozlar fikri | `fikrlar` | 3 ta sharh kartasi |
| 14 | Savol-javob | `savol-javob` | 4 ta ochiladigan savol (`<details>`) |
| 15 | Ikkilanmang! | `aloqa` | Yakuniy murojaat: telefon va Telegram |
| 16 | Footer | — | Havolalar, aloqa, mualliflik huquqi |

## Menyu

- Header sahifa aylantirilganda ham tepada qoladi (`position: sticky`) va ostiga yengil soya tushadi.
- Hozir ko'rinib turgan bo'limning havolasi menyuda ajratib ko'rsatiladi.
- 1080px dan tor ekranda menyu ☰ tugmasiga yig'iladi. Havola bosilganda, tashqariga bosilganda yoki Esc bosilganda menyu yopiladi.
- Bo'limga silliq o'tiladi (`scroll-behavior: smooth`). Qurilmada "harakatni kamaytirish" yoqilgan bo'lsa, animatsiyalar o'chadi.
- Yangi bo'lim qo'shsangiz, unga `id` bering va `<nav id="nav">` ichiga `<a href="#id">` havola qo'shing.

## Havola kartasi (Telegram, ijtimoiy tarmoqlar)

Sayt havolasi Telegram, Facebook, LinkedIn yoki X'ga tashlanganda sarlavha, tavsif va rasmli karta chiqadi. Buning uchun `index.html` ning `<head>` qismida Open Graph (`og:*`) va Twitter (`twitter:*`) teglari bor.

- **Rasm:** `assets/og-image.png` (1200×630). `og:image` havolasi to'liq manzil bilan yozilishi shart.
- **Rasmni o'zgartirish:** `assets/og-image.html` dagi matnni tahrirlang. So'ng PNG'ni qayta yasang (buyruq faylning boshida yozilgan) va push qiling.
- **Telegram eski kartani ko'rsatsa:** Telegram havola ko'rinishini keshda saqlaydi. Telegram'da **@WebpageBot** ga sayt manzilini yuboring, karta yangilanadi.
- **Tekshirish:** https://www.opengraph.xyz/ saytiga manzilni kiritib, kartaning qanday ko'rinishini oldindan ko'rish mumkin.

## Aloqa ma'lumotlari

| | Qiymat | Havola |
|---|---|---|
| Telefon | +998 93 433 93 51 | `tel:+998934339351` |
| Telegram | @Jasuryakubov | `https://t.me/Jasuryakubov` |

Raqam yoki Telegram o'zgarsa, `index.html` ichida barcha uchrashgan joylarni almashtiring. Ular header, hero, CTA lentasi, "Ikkilanmang!" bo'limi va footer'da bor. Qidirish uchun: `998934339351` va `Jasuryakubov`.

## Dizayn

- **Uslub:** tuzilishi namuna (Kiwi Homes) asosida. Yumaloq kartalar, siljigan soyali qalin sarlavhalar va qo'lda yozilgandek yorliqlar ishlatilgan.
- **Shriftlar** (Google Fonts):
  - Bricolage Grotesque — sarlavhalar
  - Inter — asosiy matn
  - Caveat — yorliqlar
- **Ranglar:** iliq jigarrang-oltinrang. Barcha ranglar `style.css` boshidagi `:root` blokida o'zgaruvchi sifatida yig'ilgan:

| O'zgaruvchi | Light | Dark | Vazifasi |
|---|---|---|---|
| `--bg` | `#fbf8f3` | `#1b1612` | Sahifa foni |
| `--surface` | `#ffffff` | `#241d18` | Kartalar foni |
| `--soft` | `#f3ebdf` | `#2a221c` | Panellar, lenta, footer |
| `--ink` | `#2b231d` | `#f0e8de` | Asosiy matn |
| `--muted` | `#6e6257` | `#b2a496` | Ikkinchi darajali matn |
| `--accent` | `#5a3a28` | `#d2ab7c` | Tugmalar, ikonkalar |
| `--gold` | `#b08544` | `#d4ad6a` | Bezak, belgilar |

Rang sxemasini o'zgartirish uchun shu o'zgaruvchilarni almashtirish kifoya. Dark qiymatlari ikki joyda takrorlangan: `@media (prefers-color-scheme: dark)` va `:root[data-theme="dark"]`. Ikkalasini ham yangilang.

## Light / dark rejim

- Birinchi kirishda sayt qurilma sozlamasiga qarab ochiladi.
- Header'dagi 🌙/☀️ tugmasi rejimni almashtiradi. Tanlov brauzerning `localStorage`'ida (`theme` kaliti) saqlanadi.
- `script.js` `<head>` ichida ulangan. Rejim sahifa chizilishidan oldin o'rnatiladi, shuning uchun oq fon bir lahza ko'rinib qolmaydi. Uni `<body>` oxiriga ko'chirmang.

## Moslashuvchanlik

| Ekran kengligi | O'zgarishlar |
|---|---|
| > 960px | To'liq ko'rinish |
| ≤ 1080px | Menyu ☰ tugmasiga yig'iladi |
| ≤ 960px | Qadamlar, ishlar, loyihalar va sharhlar 2 ustunga, xizmat panellari 1 ustunga o'tadi |
| ≤ 760px | Hamma narsa 1 ustunda; header'da faqat logo, rejim va ☰ tugmalari qoladi (Aloqa menyuda); footer havolalari barmoq bilan bosishga qulay qilib kattalashtirilgan |
| ≤ 400px | Logo va tugmalar biroz kichrayadi |

320, 375 va 414px kengliklarda sahifa yonga surilmasligi tekshirilgan.

## Qilinishi kerak bo'lgan ishlar

- [ ] **Loyihalar:** "Loyihalarimiz" bo'limidagi 6 ta karta namuna. Ularni haqiqiy loyihalar bilan almashtiring, "Shahar · Yil" qatoriga haqiqiy ma'lumot yozing. `index.html` ichida bu joy `NAMUNA` izohi bilan belgilangan.
- [ ] **Ishlarimiz:** `[Ish nomi]` va `[Qisqa izoh]` to'ldirgichlarini almashtiring. Rasm qo'yish uchun `images/` papkasini yarating va `.work-media` ichidagini `<img src="images/ish-1.jpg" alt="...">` bilan almashtiring.
- [ ] **Mijozlar fikri:** faqat haqiqiy mijozlarning sharhlarini, ularning roziligi bilan qo'ying.
- [ ] **Matnlarni tekshirish:** xizmatlar ro'yxati, "Qanday ishlaymiz" qadamlari va taqqoslash bo'limidagi matnlar umumiy yozilgan. Firma faoliyatiga mos kelishini tekshiring.
- [ ] **Hero rasmi:** hozir kod bilan chizilgan kechki shahar siluyeti turibdi. Haqiqiy foto qo'yish uchun `.hero` stiliga `background-image` qo'shing va `index.html`dagi `<svg class="hero-city">` blokini olib tashlang.
- [ ] Ixtiyoriy: manzil, ish vaqti, litsenziya yoki sertifikat ma'lumotlari.

## Joylash (hosting)

Sayt **GitHub Pages** orqali chiqarilgan. U `main` branch'ning ildiz papkasidan olinadi. `main`ga qilingan har bir `git push`dan keyin sayt 1–2 daqiqada avtomatik yangilanadi.

Boshqa hostingga ko'chirish kerak bo'lsa, sayt statik bo'lgani uchun uchala faylni yuklash kifoya:
- **Netlify / Vercel:** papkani sudrab tashlang (drag & drop).
- Oddiy hosting: fayllarni `public_html` papkasiga yuklang.
