[![Build Status](https://travis-ci.com/Problem-Solved-Group/munkahelyi-nyilvantarto-rendszer-kliens.svg?branch=main)](https://travis-ci.com/Problem-Solved-Group/munkahelyi-nyilvantarto-rendszer-kliens)
# Munkahelyi Nyilvántartó Rendszer Kliens

##Frontend
 - Fejlesztői környezet:
   - Angular CLI
   - Visual Studio Code
 - Alkalmazott könyvtárstruktúra:
   - app
     - announcement - hirdetmények komponens
     - auth - belépétetés komponensek
     - calendar - naptár + munkaidő és szabadságkérés elbírálás komponensek
     - errors - 404 hiba komponens
     - members - alkalmazottak komponens
     - menu - menu komponens 
     - messages - üzenetek komponens
     - profile - profil komponens
     - services - szolgáltatások
       - guard
       - interfaces
     - app komponens részei
   - enviroment - környezeti változók
   - style.scss - globális stílusosztály
 - Használati eset diagram:
 
 - Kliensoldali szolgáltatások:
   - Hirdetmények megtekintése és írása/szerkesztése
     - Minden vezetőnek/adminnak joga van új hirdetményt írni vagy egy meglévőt szerkeszteni
     - A munkások csak addig látják a hirdetményt, amíg le nem jár az érvényessége
   - Munkaidő / szabadságkérés bejelentés, meglévő megtekintése, szerkesztése és elbírálása
     - Minden vezetőnek/adminnak joga van meglévő bejelentést elbírálni
     - Minden dolgozó létrehozhat új bejelentést vagy szerkesztheti/törölheti a sajátját
   - Üzenetek megtekintése és írása
     - Minden dolgozó küldhet és fogadhat új üzenetet másoktók
   - Alkalmazottak megtekintése és szerkesztése
     - Minden vezetőnek/adminnak joga van szerkeszteni egy dolgozó beosztását és telephelyeit
     - Minden dolgozó megtekintheti a többi dolgozót
    - Saját profil megtekintése
     - Minden dolgozó megtekintheti a saját profilját
       
 - Egy funkció folyamatának leírása (Új munkaidő bejelentése):
   - A menüsávon kiválasztjuk a naptár menüpontot, ez átirányít minket a naptárra
   - Ez után kiválasztjuk a naptárban, hogy melyik napra szeretnénk új bejegyzést írni
     - Naptár fölötti két gomb segítségével tudunk hónapot váltani, míg a naptárba lévő gombok segítségével tudunk új bejegyzést létrehozni
   - A megjelenő ablakon kiválasztjuk a munkaidő fület (amennyiben, nem ez van kiválasztva)
   - Ezt követően megadjuk a kezdés és a befejezés idejét
   - Ezek után a "+ Bejelent" gomb segítségével bejelentjük
   - Ha sikeresen bejelentettük, akkor a naptár alatt található "Bejelentett munkaidők" táblázatban megtalálható lesz
     - Itt tudjuk szerkeszteni, törölni addig, amíg el nem bírálta valamelyik vezető/admin
