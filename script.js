class Kitab{
    constructor(adi,yazari,ili,qiymeti){
        this.adi=adi
        this.yazari=yazari
        this.ili=ili
        this.qiymeti=qiymeti
        this.endirimqiymeti=this.endirimqiymeti
    }
    QiymetIsi(endirim){
        const endirimqiymeti=(this.qiymeti*((100-endirim)/100))
        this.endirimqiymeti=endirimqiymeti
    }
}
const myKitab= new Kitab ("Qurur ve Qerez","Ceyn Ostin","1796",70)
myKitab.QiymetIsi(10)
console.log(myKitab);