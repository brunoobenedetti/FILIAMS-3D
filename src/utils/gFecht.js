let itemList = [
    { id:'1' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:1, img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'2' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:2, img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'3' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:3, img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'4' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:4, img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'5' , categoria: 'IMPRESORA 3D', name: "ENDER 3 S1", precio:5, img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'6' , categoria: 'IMPRESORA 3D', name: "ENDER 3 S1", precio:6, img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'7' , categoria: '', name:"ENDER 3 S1", precio:7, img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'8' , categoria: '', name:"ENDER 3 S1",  precio:8, img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'9' , categoria: '',nombre:"",  precio:9, img:''},
    { id:'10' , categoria: '',nombre:"", precio:10, img:''},
    { id:'11' , categoria: '',nombre:"", precio:11, img:''},
    { id:'12' , categoria: '',nombre:"", precio:12, img:''},

] 
export const gFetcht = () => new Promise( (res, rej)=>{
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res (itemList)
        },2000)
    }else {
        rej('error')
    }
})