import { useState } from "react";
/**📌 Milestone 2: Validare in tempo reale
Aggiungere la validazione in tempo reale dei seguenti campi:

✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&\*()-\_=+[]{}|;:'\\",.<>?/`~";
Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.
*/
function App() {
  //adesso vado a creare tutte le variabili di stato per gestire i campi
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("");
  const [years, setYears] = useState("");
  const [textarea, setTextarea] = useState("");
  //ora tutti gli input sono CONTROLLATI dai relativi state

  // Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";
  const userNameCheck = [...userName].every(
    (u) => letters.includes(u) || numbers.includes(u)
  );

  function onsubmit(e) {
    e.preventDefault();
    const inputGroup = [name, userName, password, select, years, textarea];
    const isNotEmpty = inputGroup.every((i) => i.trim() != "");

    if (isNotEmpty) {
      return console.log(`
        hai stampato i seguenti valori 
        per name: ${name}
        per userName: ${userName}
        per password: ${password}
        per select: ${select}
        per years: ${years}
        per textarea: ${textarea} `);
    }
    {
      console.log("ti mancano dei campi da compilare ");
    }
  }

  return (
    //Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi.
    <>
      <div className="container m-5">
        <h1>Form per la registrazione </h1>
        <div className="row">
          <div className="col-10">
            <form onSubmit={onsubmit}>
              <div className="mb-3 col-5">
                {/*✅ Nome completo (input di testo)*/}
                <label htmlFor="fullname" className="form-label">
                  Nome completo
                </label>
                <input
                  id="fullname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                />
                <div className="form-text">inserisci il tuo nome completo</div>
              </div>
              {/*✅ Username (input di testo) ✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli)*/}
              <div className="mb-3 col-5">
                <label htmlFor="username" className="form-label">
                  Username (Deve contenere solo caratteri alfanumerici e almeno
                  6 caratteri)
                </label>
                <input
                  id="username"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  className="form-control"
                />
                {userNameCheck && userName.length >= 6 ? (
                  <div className="form-text green">
                    inserisci il tuo Username
                  </div>
                ) : (
                  <div className="form-text red">
                    errore nella compilazione del form!!
                  </div>
                )}
              </div>
              {/*✅ Password (input di tipo password)*/}
              <div className="mb-3 col-5">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="form-text">
                  La password deve contenere 8–20 caratteri.
                </div>
              </div>
              {/*✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")*/}
              <div className="form-floating mb-3 col-5">
                <select
                  className="form-select"
                  aria-label="Floating label select example"
                  value={select}
                  onChange={(e) => setSelect(e.target.value)}
                >
                  <option value="" disabled>
                    Scegli la tua specializzazione
                  </option>
                  <option value="fullstack">Full Stack</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                </select>
                <label>specializzazioni disponibili</label>
              </div>
              {/*✅ Anni di esperienza (input di tipo number)*/}
              <div className="mb-3 col-5">
                <label htmlFor="experience" className="form-label">
                  Anni di esperienza
                </label>
                <input
                  value={years}
                  onChange={(e) => setYears(e.target.value)}
                  id="experience"
                  type="number"
                  className="form-control"
                  min="0"
                  max="30"
                />
                {/*L'input Anni di esperienza sia un numero positivo uso min e max*/}
                <div className="form-text">
                  inserisci i tuoi anni di esperienza
                </div>
              </div>
              {/*✅ Breve descrizione sullo sviluppatore (textarea)*/}
              <div className="form-floating mb-3 col-5">
                <textarea
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                  id="floatingTextarea"
                  className="form-control altezza"
                  placeholder="Leave a comment here"
                ></textarea>
                <label htmlFor="floatingTextarea">Breve descrizione</label>
              </div>

              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
