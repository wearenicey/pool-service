# pool-service
http://poolservice.rs/

## Backend (Server)

---

1. Node.js
2. Instaliranje paketa npm install (u istom package.json instalira se i Angular)

2. Express.js (ucitavanje modula)
    1. body parser (parsovanje zahteva u json)
    2. putanje prema fajlovima za rutiranje.
    3. Post metode za rad sa email-om (preuzimanje izabranih i unjetih vrijednosti, prosledjivanje na mejl pomocu nodemailer-a)
3. Nodemailer (transporter za slanje email poste plugin – instalacija npm I nodemailer)
4. Static folder public (build od Angulara )
5. Instaliranje npm paketa npm install
6. Pokretanje server nodemon (automatski se osvjezava prilikom svakog cuvanja )ili node serve.js (server se podize na http://localhost:5000)



## FrontEnd

---

1. Angular v9.1.12
2. Pokretanje ng serve (server se podize na http://localhost:4200)
3. components folder za rad sa  stranicama
4. mailservice.service servis za pristup HTTP
5. folder model (model Objekat za trenutno cuvanje podataka)