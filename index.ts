//Tipi primitivi principali in TypeScript:

//string
//number
//boolean
//null
//undefined
//symbol 
//bigint 
//Variabili tipizzate:


const name: string = "Il tuo nome";
const age: number = 30; // Inserisci la tua età
const studyingTypeScript: boolean = true;
//Tipizzazione del parametro della funzione greet:

const greet = (name: string) => {
  return "Ciao " + name;
}
//Specificare il tipo di ritorno della funzione sum:


const sum = (a: number, b: number): number => {
  return a + b;
}
//Funzione per calcolare il prezzo con IVA (22%):


const calculatePriceWithTax = (price: number): number => {
  const taxRate = 0.22;
  return price + (price * taxRate);
}
//Funzione che concatena due stringhe e restituisce la lunghezza totale:


const concatenateAndGetLength = (str1: string, str2: string): number => {
  const concatenated = str1 + str2;
  return concatenated.length;
}
//Cos'è un Type Union e come si scrive?:
//Un Type Union consente di definire un tipo che può essere uno dei diversi tipi specificati. Si usa l'operatore | per unire i tipi. Esempio:


type NumberOrString = number | string;
//Variabile che può contenere un numero, null o undefined:


let value: number | null | undefined;
//Tipo per rappresentare i giorni della settimana usando union di stringhe letterali:


type GiornoDellaSettimana = "Lunedì" | "Martedì" | "Mercoledì" | "Giovedì" | "Venerdì" | "Sabato" | "Domenica";
//Tipizzazione dell'array di numeri in due modi possibili:


const numbers1: number[] = [1, 2, 3]; // Array di numeri
const numbers2: Array<number> = [1, 2, 3]; // Array di numeri
//Tupla di 5 elementi, i primi 3 stringhe e gli ultimi due numeri:

const myTuple: [string, string, string, number, number] = ["string1", "string2", "string3", 1, 2];
//Differenza tra type e interface:
//Type: Può unire tipi, tipo union, e non può essere riaperto (non puoi aggiungere nuovi membri a un tipo esistente).
//Interface: Può essere estesa (puoi aggiungere nuovi membri) e supporta l'implementazione in classi.
//Interfaccia per un oggetto con proprietà "firstname", "lastname", e "age":

interface Persona {
  firstname: string;
  lastname: string;
  age: number;
}
//Interfaccia per un utente con email obbligatoria e telefono opzionale:

interface Utente {
  email: string;
  phone?: string; // Il '?' indica che è opzionale
}
//Array tipizzato di oggetti "Studente" con nome e voto:

interface Studente {
  nome: string;
  voto: number;
}

const studenti: Studente[] = [
  { nome: "Mario", voto: 28 },
  { nome: "Luigi", voto: 30 }
];
//Interfaccia base "Veicolo" e estensione per creare "Auto":

interface Veicolo {
  marca: string;
  modello: string;
}

interface Auto extends Veicolo {
  numeroDiPorte: number;
}
//Oggetto che implementa l'interfaccia Auto:

const miaAuto: Auto = {
  marca: "Fiat",
  modello: "Panda",
  numeroDiPorte: 5
};
//Cosa sono i Generics in TypeScript?:
   //I Generics sono un modo per creare componenti riutilizzabili e flessibili in TypeScript, consentendo di definire tipi parametrici che possono adattarsi a più tipi di dati.

//È possibile avere più tipi generici in un'interfaccia?:
   //Sì, è possibile avere più tipi generici in un'interfaccia. Esempio:


interface Pair<K, V> {
  key: K;
  value: V;
}
//Interfaccia generica per una risposta API:

interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}