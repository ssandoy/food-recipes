# TODOS

##  Hvilken app er dette?
### Registrere oppskrifter
1. Registrere enn oppskrift
2. Importere ingrendienser fra noe sted? (Kolonial?). (Dropdown)
3. Lagre bilder av maten man har laget/Fra nettet?
 

### Importere oppskrifter fra Matprat/Tine/Mat-API
1. Se om det finnes mulighet for å scrape matprat/tine.no eller lignende sider og få dette på en fin måte inn i appen.
2. Kolonial sitt API? 
3. Lagre disse oppskriftene på en lik måte som egen-registrering.

### Importere oppskrifter fra Notater
1. Vurder om dette gjøres manuelt eller om det finnes noen tjeneste for dette.

### Vise lagrede oppskrifter
1. Vise alle lagrede oppskrifter på en vakker måte. (Inolini komme seg på jobb) 
2. Er dette per bruker, slik at flere kan bruke det? Dermed, støtte for innlogging?


## Technical TODOS
- [x] Sette opp TypeScript i prosjektet
- [x] Sette opp eslint og prettier med TypeScript med husky som kjører pre-commit-hook
- [x] Bestemme backend for lagring av data. 
  - [x] Vurder Firebase med Firebase Functions
    - Mulig en fordel mtp. erfaring, samt at det ser ut som at Firebase Storage Bucket kan brukes til å laste opp bilder.
- [ ] Sette opp domenemodeller
- [ ] Sette opp backend for lagring av data.
- [x] Finne tjeneste for å laste opp bilder til appen
  - [x] Firebase Storage Bucket?
- [ ] Sette opp Express.js-server i front som tar seg av kall til Firebase, andre API-er og miljøvariabler., 
- [ ] Vurdere Server-side-rendering
  - [ ] Sjekke ut Gatsby
  - [ ] Sjekke ut Next.js
- [ ] Teste ut serviceWorker.register()

