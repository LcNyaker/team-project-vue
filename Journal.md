# Journal

## 24/2

- Vi hade första mötet på Teams där vi pratade lite om oss och om vår erfarenhet av Figma och mest om vad vi har för uppgift. Eftersom alla inte hade en väldefinierad idé bestämde vi oss för att först checka allt material från kursen och sedan prata/börja jobba. Den andra saken vi gjorde var att påbörja gruppkontraktet så att vi kan signera det så snabbt som möjligt.

## 25/2

- Vi samlades på teams och bestämde vilket projekt vi ska satsa på. Vi skrev även klart gruppkontraktet och signerade (samtidigt har vi klistrat in det i vår repo) det samt bokade tid för överlämning av projektet till nästa grupp.
  Resten av dagen ska gå till att kolla klart på alla videos kring designen på kurswebben samt skissa varsin idéskiss till projektets utseende.

## 26/2

- Idag pratade vi ihop oss om designen och satte igång med skapandet av vår design. Både mobile, tablet och desktop versionerna är påbörjade och imorgon fortsätter arbetet. Vi har skapat 4 sidor (en startsida, en information sida om filmen, en sida om skådespelare och en sida för att boka biljetter). Vi har gjort en cookies bar och en grid design också.

## 27/2

- Under dagen vi byggde och fixade komponenterna i design. Vi har ändrat design under hela processen eftersom vi hade först en ide men under tid vi kom till nån annat. Vi har skapat återanvänd komponenter i Figma och provade att göra en fin biopremiär webbsida när man kan navigera till olika sidor.

## 28/2

- Idag har vi fixat sista små ändringar på design som knappar, länkar, text, färg, avstånd, osv. Vi har fixat alla versioner, mobile, tablet och desktop. Vi letade efter en citat från film och vi har planerat nästa möte för att lämna designen.

## 3/3 2025

- Vi gjorde färdigt de sista anteckningarna för överlämningen och startade dagen sen med att lämna över vår design med den gruppen som var tilldelad till oss. När vi hade gjort klart överlämningen så skrev vi färdigt vår READme med beskrivning om hur vi tog fram och arbetade igenom designen.

När vi var klara med den delen så hade vi möte med gruppen som skulle tillge oss designen som vi ska koda. Efter mötet så pratade vi igenom hur vi ville att vårt arbetsflöde skulle se ut. Vi har gjort ett uppdaterat kontrakt som alla medlemmar ska få läsa igenom innan de skriver på. Vi har tagit fram lite idéer på hur commits och branches ska se ut.

## 4/3

## Anteckningar för nästa möte

- Alla behöver se över kontraktet på nytt
- Alla behöver godkänna commits och branches
- Börja bryta ner designen och lägga in issues(och storypoints)
  (om vi hinner)
- Installera Vue, Npm eller Pnpm, Prettier, Eslint, Sass.

# Gruppkontrakt- lista på överenskommelser

I denna fil skriver ni, efter överenskommelse och diskussion:

## När ni träffas gemensamt & hur ni gör det - kamera på/avTeams/Discord eller bara chatt? Det är OK att vara kreativ. Man måste inte följa alla konventioner, men sätt regler för gruppen och var öppen med hur du känner och vill jobba! Då är allas förväntningar på samma nivå. Förmodligen finns det någon annan som känner precis likadant, men det är ju svårt att veta om ingen säger någonting.

- Vi kommer att hålla möten och kontakt via Teams. Gärna kameror på. Vi ska ha dagliga möte olika tider på grund av att vi också har föreläsningar.
  Vi vill prioritera att kunna ha morgonmöte varje dag kl.9 där vi ska ha dagliga stand-ups med en av deltagarna som ska vara scrum-master samt en i gruppen som skriver anteckningar om mötet. (ifall någon missar mötet så finns anteckningarna tillgängliga)
  Vi ska inte jobba i helgen bara om något brinner.

- Under dessa morgonmöten önskar vi också att titta på koden tillsammans och göra pull-request för att merga. Om det inte passar så ska man vara minst två personer göra pull-request tillsammans.

## Hur ni meddelar förhinder. Hur ni hanterar förhinder, sjukdom, om deltagande och inspirationen tryter.

- Om någon får förhinder ska vi helst höra av oss om det senast dagen innan eller vid akuta fall får man bara avbryta mötet. Vi jobbar vidare ändå de som kan delta och de bestämmelser som görs redovisas på vår sida, så att alla lätt kan följa med i planeringen.

## Vilket språkbruk ni har (se nedan).

- En vänlig ton, common sense, inte för strikt utan en mer avslappnad stämning. Ta paus om det blir för mycket, tänk på att lägga in raster för att hålla humöret uppe.

## Vad är ambitionsnivån.

- Hög alla i gruppen vill lyckas och har en hög inställning till uppgiften. Det ska bli jättekul men samtidigt en utmaning.

## Vad är kunskapsnivåerna sedan innan?

- Bas/ nybörjare. Ingen kunskap i Vue/Figma.

## Hur ni skriver commit-meddelanden och hur ofta ni gör commits.

- Vi skriver på engelska och använder co-authoring commits, conventional commits som beskriver vad vi har gjort. Commita ofta om vi har kodat.
  Vi har en mall för hur man skriver commits och bransches som vi vill ska efterföljas.

## Hur, när och vem gör code reviews/merges - när får man merge:a in i branschen? (föreslår att ni inte väljer "när du är klar", utan ni bör testa/kontrollera att det även fungerar på någon annans dator).

- Vi ska ha en “develop” branch och jobba i enskilda brancher. Vi ska göra merge tillsammans/minst 2 stycken att bli i möte för det och för code reviews samma sak.

## Vad är respektfull kommunikation för dig?

- Först fråga och efter ta beslut om du kan ändra andras del av kod. Lyssna på andras åsikter och ta inte något personligt.

## Hur vill du bli bemött? Hur vill du bemöta andra?

Artigt, öppensinnat och inte dömande.

## Underskrivet av

@LcNyaker
@DulamaA
@Biehlen
@koliwewe
@YamanDev8

# Mall för commits och bransches

## Commits

Types:
API relevant changes
feat Commits, that adds or remove a new feature
fix Commits, that fixes a bug
refactor Commits, that rewrite/restructure your code, however does not change any API behaviour
perf Commits, are special refactor commits, that improve performance
style Commits, that do not affect the meaning white-space, formatting, missing semi-colons, etc
test Commits, that add missing tests or correcting existing tests
docs Commits, that affect documentation only
build Commits, that affect build components like build tool, ci pipeline, dependencies, project version, ...
ops Commits, that affect operational components like infrastructure, deployment, backup, recovery, ...
chore Miscellaneous commits e.g. modifying .gitignore

following with
-issue (what issue it's regarding).

- Exemple commit: "feat(Cookiebar) :add the amazing button :emoji:"

if issue is complete add this to the end:
#123 <-(Number of issue that's resolved)

## Branches

Använd passande prefix och beskriv branchens funktion

2️⃣ Functional Branches
📌 New Features & Improvements
feature/short-description → For new features or major enhancements
Ex: feature/add-payment-gateway, feature/redesign-navbar

🐞 Bug Fixes
bugfix/short-description → For fixing bugs in the development environment
Ex: bugfix/fix-login-validation, bugfix/cart-total-calculation

🔥 Hotfixes
hotfix/short-description → For critical fixes in production
Ex: hotfix/fix-critical-checkout-bug, hotfix/security-patch

🧪 Experimentation & Research
experiment/short-description → For testing ideas, proof-of-concepts (POCs), or new technologies
Ex: experiment/new-ai-recommendations, experiment/tailwind-css

⚙️ Maintenance & Refactoring
chore/short-description → For non-functional updates like dependency updates or documentation changes
Ex: chore/update-dependencies, chore/clean-up-unused-code
refactor/short-description → For restructuring code without changing its behavior
Ex: refactor/improve-component-structure, refactor/optimize-db-queries

📦 Releases
release/version → For preparing a new release
Ex: release/1.2.0, release/2.0.0-beta
