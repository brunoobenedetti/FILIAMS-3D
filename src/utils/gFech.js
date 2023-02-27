let Productos = [
    { id:'1' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:'180,000', img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'2' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:'180,000', img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'3' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:'180,000', img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'4' , categoria: 'IMPRESORA 3D', name: "ENDER 3 V2", precio:'180,000', img:'https://www.venex.com.ar/products_images/1627671170_sadfgsdfg.jpg'},
    { id:'5' , categoria: 'IMPRESORA 3D', name: "ENDER 3 S1", precio:'300,000', img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'6' , categoria: 'IMPRESORA 3D', name: "ENDER 3 S1", precio:'300,000', img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'7' , categoria: 'IMPRESORA 3D', name:"ENDER 3 S1", precio:'300,000', img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'8' , categoria: 'IMPRESORA 3D', name:"ENDER 3 S1",  precio:'300,000', img:'https://www.bidcom.com.ar/publicacionesML/productos/IMP3D042/1000x1000-IMP3D042.jpg'},
    { id:'9' , categoria: 'FILAMENTOS-3D', name:"GRILOW3",  precio:2790, img:'https://http2.mlstatic.com/D_NQ_NP_795502-MLA48658731373_122021-O.webp'},
    { id:'10' , categoria: 'FILAMENTOS-3D', name:"GRILOW3", precio:2790, img:'https://mundoinsumos.com.ar/img/articulos/azul_petg_ml.jpg'},
    { id:'11' , categoria: 'FILAMENTOS-3D', name:"GRILOW3", precio:2790, img:'https://filamentos3d.com.ar/360-home_default/filamento-pla-175mm-azul.jpg'},
    { id:'12' , categoria: 'FILAMENTOS-3D', name:"GRILOW3", precio:2790, img:'https://filamentos3d.com.ar/360-home_default/filamento-pla-175mm-azul.jpg'},

] 
export  const gFetch = (id) => new Promise( (res, rej)=>{
    let condition = true
    if (condition) {
        setTimeout(()=>{
            res (id ? Productos.find(prod => id === prod.id) : Productos)
        },1000)
    }else {
        rej('error')
    }
})

export default gFetch