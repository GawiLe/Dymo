# Adreslabels DYMO LabelWriter 450 / 550

Open `index.html` in Chrome of Edge (dubbelklikken is genoeg).

1. Kies het labelformaat van de rol in de printer (standaard: **99010**, 28 × 89 mm).
2. **+ Adres toevoegen** opent een pop-up met naam, adres en tags. Klik op een adres om het te wijzigen of te verwijderen.
3. **Lijst importeren**: plak adressen (lege regel ertussen), plak cellen uit Excel of kies een `.xlsx` / `.csv`.
   Kolommen zoals *Naam, Bedrijf, Straat, Huisnummer, Postcode, Plaats, Land, Tags* worden automatisch herkend.
4. **Tags** (bijv. *Familie*, *Vrienden*) worden niet geprint. Klik op een tag bovenaan om te filteren en te zien
   hoeveel adressen erbij horen; sorteer op tag, naam of plaats.
5. Klik **Printen** (printer *DYMO LabelWriter 450* of *550*, marges *Geen*, schaal *100%*) of **PDF**. Alleen de adressen
   in het huidige filter worden geprint.

Adressen worden in de browser bewaard. **Exporteren** maakt een CSV-reservekopie die je weer kunt importeren.

De afzender (`Afzender: Anna Paulownastraat 1, 2316NM Leiden`) staat klein onderaan elk label en is aan te passen.
Lange regels worden automatisch kleiner gezet zodat ze passen.

Voor Excel-import en de PDF-knop is internet nodig (de bibliotheken komen van cdnjs). Printen werkt ook offline.

`tools/labels-pdf.mjs` maakt dezelfde PDF vanaf de opdrachtregel:
`node tools/labels-pdf.mjs adressen.txt labels.pdf 99010` (vereist Playwright).
