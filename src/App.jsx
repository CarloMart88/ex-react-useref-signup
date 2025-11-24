import { useState, useRef } from "react";
/**Milestone 3: Convertire i Campi Non Controllati
Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.

Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form.
*/
function App() {
  //bisogna adesso cambiare gli stati da controllati a non controllati

  const refName = useRef();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const refSelect = useRef();
  const refYears = useRef();
  const [textarea, setTextarea] = useState("");
  //ora tutti gli input sono CONTROLLATI dai relativi state

  // Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}|;:'\\\",.<>?/`~";
  const userNameCheck = [...userName].every(
    (u) => letters.includes(u) || numbers.includes(u)
  );

  const passwordNameCheck = [...password].every(
    (u) => letters.includes(u) || numbers.includes(u) || symbols.includes(u)
  );
  //✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).
  const textAreaCheck =
    textarea.trim().length > 100 && textarea.trim().length < 1000;

  function onsubmit(e) {
    e.preventDefault();
    const inputGroup = [
      refName.current.value,
      userName,
      password,
      refSelect.current.value,
      refYears.current.value,
      textarea,
    ];
    const isNotEmpty = inputGroup.every((i) => i.trim() != "");

    if (isNotEmpty) {
      return console.log(`
        hai stampato i seguenti valori 
        per name: ${refName.current.value}
        per userName: ${userName}
        per password: ${password}
        per select: ${refSelect.current.value}
        per years: ${refYears.current.value}
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
                  ref={refName}
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
              {/*✅ Password (input di tipo password) ✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.*/}
              <div className="mb-3 col-5">
                <label htmlFor="password" className="form-label">
                  Password deve contenere tre 8 e 20 caratteri.
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordNameCheck &&
                password.length >= 8 &&
                password.length < 20 ? (
                  <div className="form-text green">
                    la password può esser salvata
                  </div>
                ) : (
                  <div className="form-text red">
                    la password inserita non è valida
                  </div>
                )}
              </div>
              {/*✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")*/}
              <div className="form-floating mb-3 col-5">
                <select
                  className="form-select"
                  aria-label="Floating label select example"
                  ref={refSelect}
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
                  ref={refYears}
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
              {/*✅ Breve descrizione sullo sviluppatore (textarea) ✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).*/}
              <div className="form-floating mb-3 col-5">
                <textarea
                  value={textarea}
                  onChange={(e) => setTextarea(e.target.value)}
                  id="floatingTextarea"
                  className="form-control altezza"
                  placeholder="Leave a comment here"
                ></textarea>
                {textAreaCheck ? (
                  <div className="form-text green">
                    Breve descrizione min 100 caratteri max 1000
                  </div>
                ) : (
                  <div className="form-text red">
                    min 100 caratteri max 1000
                  </div>
                )}
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
