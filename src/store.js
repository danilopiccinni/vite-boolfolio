// importo come da prassi un oggetto 'reactive' che posso riempire che degli attributi utlizzabili a livello globale in tutto il mio progetto
import {reactive} from 'vue'
// esporta la variabile a cui si assegna un oggetto reactive che possiamo riempire
export const store = reactive({

    baseUrl: 'http://127.0.0.1:8000/',

    pageIndex : 0,

    
})