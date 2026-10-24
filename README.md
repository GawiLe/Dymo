# Adreslabels DYMO LabelWriter 550

Open `index.html` in Chrome of Edge (dubbelklikken is genoeg).

1. Kies het labelformaat van de rol in de printer (standaard: **99010**, 28 × 89 mm).
2. Plak adressen in het tekstvak (één blok per adres, lege regel ertussen), plak cellen uit Excel,
   of importeer een `.xlsx` / `.csv`. Kolommen zoals *Naam, Bedrijf, Straat, Huisnummer, Postcode,
   Plaats, Land* worden automatisch herkend.
3. Klik **Printen** → printer *DYMO LabelWriter 550*, marges *Geen*, schaal *100%*.
   Of klik **PDF downloaden**: elke pagina is precies één label.

De afzender (`Afzender: Anna Paulownastraat 1, 2316NM Leiden`) staat klein onderaan elk label en is aan te passen.
Lange regels worden automatisch kleiner gezet zodat ze passen.

Voor Excel-import en de PDF-knop is internet nodig (de bibliotheken komen van cdnjs). Printen werkt ook offline.

`tools/labels-pdf.mjs` maakt dezelfde PDF vanaf de opdrachtregel:
`node tools/labels-pdf.mjs adressen.txt labels.pdf 99010` (vereist Playwright).
