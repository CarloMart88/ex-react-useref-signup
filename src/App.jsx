import { useState } from "react";
/**📌 Milestone 1: Creare un Form con Campi Controllati
Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

Aggiungi una validazione al submit, verificando che:

Tutti i campi siano compilati
L'input Anni di esperienza sia un numero positivo
La Specializzazione sia selezionata

Al submit, se il form è valido, stampa in console i dati. */
function App() {
  function onsubmit(e) {
    e.preventDefault();
    console.log("just testing");
  }

  return (
    <>
      <div className="container m-5">
        <div className="row">
          <div className="col-10">
            <form onSubmit={onsubmit}>
              <div className="mb-3">
                {/*✅ Nome completo (input di testo)*/}
                <label htmlFor="fullname" className="form-label">
                  Nome completo
                </label>
                <input id="fullname" type="text" className="form-control" />
                <div className="form-text">inserisci il tuo nome completo</div>
              </div>
              {/*✅ Username (input di testo)*/}
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input id="username" type="text" className="form-control" />
                <div className="form-text">inserisci il tuo Username</div>
              </div>
              {/*✅ Password (input di tipo password)*/}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="form-control"
                  autoComplete="current-password"
                />
                <div className="form-text">
                  La password deve contenere 8–20 caratteri.
                </div>
              </div>
              {/*✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")*/}
              <div className="form-floating mb-3">
                <select
                  className="form-select"
                  aria-label="Floating label select example"
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
              <div className="mb-3">
                <label htmlFor="experience" className="form-label">
                  Anni di esperienza
                </label>
                <input
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
              <div className="form-floating mb-3">
                <textarea
                  id="floatingTextarea"
                  className="form-control altezza"
                  placeholder="Leave a comment here"
                ></textarea>
                <label htmlFor="floatingTextarea">Breve descrizione</label>
              </div>

              <button type="submit" className="btn btn-primary">
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
