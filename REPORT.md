# 📌 Rättningsrapport – fed24s-the-last-todo-Ymer-MI

## 🎯 Uppgiftens Krav:
# Inlämningsuppgift Todo

I denna inlämningsuppgift kommer ni att skapa er egen todo-lista i en react-applikation.
Sidan skall visa ett antal punkter som skall göras. Dessa skall då komma upp på skärmen i form av en lista. När uppgiften är slutförd skall användaren kunna markera uppgiften som slutförd och uppgiften skall då tas bort från listan.

## Betyg G

- Skapa en hårdkodad lista med punkter att göra (hitta på egna punkter, dessa skall inte bara vara en text)
- Presentera listan på skärmen, helst med lite kontroll. Detta betyder i en html-struktur t.ex. i en ul/li-lista
- Implementera klickhändelse för att hantera borttagandet av en todo.
- Todo markeras som klar/tas bort från skärmen och markeras som klar i javascript-listan.

## Betyg VG

- Alla punkter under G
- Kunna visa även klara händelser och klicka tillbaka den så att de blir oklara igen.
- Skapa ett formulär som tillåter att en användare skapar nya todos efterhand.
- Använda lifting state up för att dela upp dina komponenter bättre.
- Kunna sortera ordningen på dina todos.
- Implementera ett valfritt grafiskt ramverk till din todolista, t.ex. material ui eller tailwind.
- Egen css får gärna skrivas och då skall ni ha en bra struktur och använda flex eller grid på ett bra sätt.

## Allmänt

Projektet ni har är ett vite-projekt. D.v.s. ni måste köra:

```shell
npm i
```

och

```shell
npm run dev 
```

för att köra projektet.

- Det finns många sätt att lösa denna uppgift på. Om ni känner er osäkra på någonting, fråga hellre någon gång för mycket så att ni känner er säkra på vad ni utvecklar.
- Ni får gärna ändra strukturen i projektet, detta är bara en grund.
- Börja med att planera ert arbete, börja inte med Visual Studio Code, även om det är lockande.
- Gör ert bästa att inte stressa. Lättare sagt än gjort, jag vet. Men ingen mår bättre av att stressa.
- Ha roligt, skratta när det blir fel och fortsätt att vara nyfiken :)


## 🔍 ESLint-varningar:
- C:\Work\AssignmentCorrector\backend\repos\fed24s-the-last-todo-Ymer-MI\src\models\Task.ts - no-unused-vars - 'name' is defined but never used.,no-unused-vars - 'prio' is assigned a value but never used.,no-unused-vars - 'done' is assigned a value but never used.

## 🏆 **Betyg: VG**
📌 **Motivering:** Koden uppfyller samtliga krav för både G och VG. Listan med todo-uppgifter kan hanteras väl genom att lägga till, ta bort och markera uppgifter som klara/oklara. Funktionaliteten för att sortera uppgifter är på plats, och det finns ett formulär för att lägga till uppgifter. Användningen av Bootstrap visar att ett grafiskt ramverk har implementerats, och lifting state up används för att organisera komponenterna effektivt. Flex och grid för layout är inte explicit visat, men användningen av Bootstrap visar god layout hantering. Koden använder dessutom lokal lagring för att hålla persistensen av uppgifterna, vilket är en extra fördel.

💡 **Förbättringsförslag:**  
För framtida förbättringar kan du överväga att tydliggöra användningen av flex eller grid i CSS i större utsträckning och se till att dina komponenter är tydligt dokumenterade. En förbättring kan också vara att optimera prestandan genom att minimera antalet renders som orsakas av state-ändringar, speciellt när det handlar om långa todo-listor.