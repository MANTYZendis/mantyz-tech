# MANTYZ — things I build

Anglické portfolio na `mantyz.dev`. Statická stránka, žádný build.

```
index.html      obsah
style.css       vzhled (barvy nahoře v :root)
script.js       drobná interaktivita
favicon.svg     ikona v záložce
obr/og.jpg      obrázek pro sdílení
_work/          pomocné skripty, do nasazení nepatří (smazatelné)
```

Česká verze pro klienty je samostatný projekt `mantyz-web` na `mantyz.cz`.
Weby si nekonkurují — jiný jazyk, jiné publikum, jiný obsah.

## Spuštění lokálně

```bash
python -m http.server 8000
```

## Nasazení

```bash
npx vercel --prod
```

Pak v Cloudflare DNS nasměrovat `mantyz.dev` na Vercel (záznamy dá Vercel
po přidání domény v projektu).

## Co doplnit

- E-mail `mantyz.websites@gmail.com` je zatím gmail. Až bude fungovat
  Cloudflare Email Routing, přepnout na adresu na doméně.
- GitHub účet `MANTYZendis` je nový a zatím bez repozitářů.
- U Remote EQ je v HTML zakomentovaný odkaz na zdrojáky — odkomentovat,
  až bude repozitář veřejný.
