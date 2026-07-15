# Portfolio — strona-wizytówka Front-end Developera

Gotowa, responsywna strona-portfolio napisana w **HTML, CSS i JavaScript** (bez frameworków, więc łatwo ją hostować i edytować). Służy do pozyskiwania zleceń — sama jest dowodem Twoich umiejętności.

---

## 📁 Struktura plików

Zachowaj dokładnie taki układ folderów, inaczej strona nie znajdzie stylów i skryptu:

```
portfolio/
├── index.html          ← główna strona
├── css/
│   └── style.css       ← wygląd
├── js/
│   └── main.js         ← interaktywność (efekt pisania, menu, animacje)
├── assets/             ← tu wrzucaj obrazki / screeny projektów / favicon
└── README.md
```

---

## ✅ CO ZMIENIĆ przed publikacją

W plikach `index.html` i `js/main.js` wszystko, co jest w **[nawiasach kwadratowych]**, to placeholder do podmiany. Przejdź po liście:

- [ ] `[Imię]` / `[Imię Nazwisko]` — Twoje imię (występuje w kilku miejscach)
- [ ] `[twoj@email.pl]` — Twój adres e-mail (w sekcji Kontakt, w dwóch miejscach: `href="mailto:..."` i w treści przycisku)
- [ ] `[github.com/twojlogin]` i `[linkedin.com/in/twojlogin]` — linki do Twoich profili
- [ ] Sekcja **O mnie** — napisz kilka zdań o sobie własnymi słowami
- [ ] `[Twoje zainteresowanie]` — zamień na coś prawdziwego
- [ ] Sekcja **Projekty** — podmień 3 kafelki-szablony na swoje realne projekty (opis niżej)
- [ ] Zdania w efekcie pisania — w `js/main.js`, tablica `phrases` na górze pliku
- [ ] (opcjonalnie) Dane w karcie `developer.js` w hero — imię, stack

**Wskazówka:** w edytorze kodu (np. VS Code) użyj `Ctrl+F`, wpisz `[` i przejdź po kolei przez wszystkie placeholdery.

---

## 🚀 Jak opublikować za darmo na GitHub Pages

Twoja strona będzie dostępna pod adresem `https://twojlogin.github.io/portfolio` — za darmo, bez hostingu.

1. Załóż konto na [github.com](https://github.com) (jeśli jeszcze nie masz).
2. Kliknij **New repository**, nazwij je np. `portfolio`, ustaw jako **Public**, kliknij **Create**.
3. Wgraj pliki: na stronie repozytorium kliknij **Add file → Upload files**, przeciągnij cały folder (razem z `css/` i `js/`), zatwierdź przyciskiem **Commit changes**.
4. Wejdź w zakładkę **Settings → Pages**.
5. W sekcji *Branch* wybierz `main` i folder `/ (root)`, kliknij **Save**.
6. Odczekaj 1–2 minuty i odśwież — pojawi się link do Twojej strony. Gotowe. 🎉

> Chcesz własny adres bez `github.io`? Możesz później podpiąć własną domenę (np. `twojeimie.pl`) w tej samej zakładce **Pages**.

---

## 🧩 Czym wypełnić sekcję „Projekty” (plan na start)

Zaczynasz od zera, więc zbuduj 3 małe projekty, które pokażą różne umiejętności. Każdy wrzuć jako osobne repozytorium na GitHub, włącz mu GitHub Pages (jak wyżej), zrób screen i podmień kafelek na stronie.

1. **Strona-wizytówka dla fikcyjnej lokalnej firmy** — np. kawiarnia albo warsztat. Sekcje: hero, oferta, galeria, kontakt z mapą. *Pokazuje:* HTML/CSS, responsywność, „biznesowe” myślenie. To najważniejszy projekt — dokładnie taką pracę będziesz sprzedawać klientom.
2. **Landing page z formularzem** — jednoekranowa strona sprzedażowa z działającym formularzem kontaktowym. *Pokazuje:* projektowanie pod konwersję, obsługę formularzy.
3. **Mała aplikacja w JavaScript / React** — np. lista zadań, kalkulator, aplikacja pogodowa (z darmowym API). *Pokazuje:* że umiesz nie tylko wygląd, ale i logikę.

**Ważne przy każdym projekcie:** napisz porządny README (co to jest, zrzut ekranu, użyte technologie, link na żywo) i dawaj czytelne nazwy commitom. Rekruter często najpierw patrzy właśnie na to.

---

## 🛠️ Podgląd lokalny

Otwórz `index.html` podwójnym kliknięciem w przeglądarce. Do wygodnej pracy w VS Code zainstaluj rozszerzenie **Live Server** i kliknij *Go Live* — strona odświeży się sama po każdej zmianie.

---

## Kilka wskazówek na koniec

- **Wypełnij profil GitHub** — zdjęcie, krótkie bio, link do tej strony. Dodaj sobie profilowe README (utwórz repo o nazwie identycznej jak login).
- **Przypnij (pin) najlepsze repozytoria** na swoim profilu GitHub, żeby były na wierzchu.
- **Commituj regularnie** — „zielony kalendarz” aktywności buduje wiarygodność u klientów i rekruterów.
