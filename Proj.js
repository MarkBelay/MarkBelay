class SortA_Z {
    constructor(i, j) {
        this.i = i;
        this.j = j;
    }
    static click() {
        document.getElementById("dropdownMenuButton1").innerHTML = "Title A-Z";
    }
    static get() {
        let book = [{}];
        //for(let i=0;i<5;i++)
        //for(let j=0;j<9; j++){
        book[0] = [document.getElementById(`rc11`).innerHTML, document.getElementById(`rc21`).innerHTML, document.getElementById(`rc31`).innerHTML];
        book[1] = [document.getElementById(`rc12`).innerHTML, document.getElementById(`rc22`).innerHTML, document.getElementById(`rc32`).innerHTML];
        book[2] = [document.getElementById(`rc13`).innerHTML, document.getElementById(`rc23`).innerHTML, document.getElementById(`rc33`).innerHTML];
        book[3] = [document.getElementById(`rc14`).innerHTML, document.getElementById(`rc24`).innerHTML, document.getElementById(`rc34`).innerHTML];
        book[4] = [document.getElementById(`rc15`).innerHTML, document.getElementById(`rc25`).innerHTML, document.getElementById(`rc35`).innerHTML];
        book[5] = [document.getElementById(`rc41`).innerHTML, document.getElementById(`rc51`).innerHTML, document.getElementById(`rc61`).innerHTML];
        book[6] = [document.getElementById(`rc42`).innerHTML, document.getElementById(`rc52`).innerHTML, document.getElementById(`rc62`).innerHTML];
        book[7] = [document.getElementById(`rc43`).innerHTML, document.getElementById(`rc53`).innerHTML, document.getElementById(`rc63`).innerHTML];
        book[8] = [document.getElementById(`rc44`).innerHTML, document.getElementById(`rc54`).innerHTML, document.getElementById(`rc64`).innerHTML];
        book[9] = [document.getElementById(`rc45`).innerHTML, document.getElementById(`rc55`).innerHTML, document.getElementById(`rc65`).innerHTML];
        book[10] = [document.getElementById(`rc71`).innerHTML, document.getElementById(`rc81`).innerHTML, document.getElementById(`rc91`).innerHTML];
        book[11] = [document.getElementById(`rc72`).innerHTML, document.getElementById(`rc82`).innerHTML, document.getElementById(`rc92`).innerHTML];
        // book[11] = [document.getElementById(`rc72`).innerHTML,document.getElementById(`rc82`).innerHTML,document.getElementById(`rc92`).innerHTML];
        book[12] = [document.getElementById(`rc73`).innerHTML, document.getElementById(`rc83`).innerHTML, document.getElementById(`rc93`).innerHTML];
        book[13] = [document.getElementById(`rc74`).innerHTML, document.getElementById(`rc84`).innerHTML, document.getElementById(`rc94`).innerHTML];
        book[14] = [document.getElementById(`rc75`).innerHTML, document.getElementById(`rc85`).innerHTML, document.getElementById(`rc95`).innerHTML];


        // }
        let temp = []
        for (let i = 0; i < book.length; i++)
            for (let j = i; j >=0; j--)
                if (book[2,j] < book[2,j+1]) {
                    temp = book[j];
                    book[j] = book[j + 1];
                    book[j + 1] = temp;
                }
   // document.write(book);

         [document.getElementById(`rc11`).innerHTML, document.getElementById(`rc21`).innerHTML, document.getElementById(`rc31`).innerHTML]=book[0];
         [document.getElementById(`rc12`).innerHTML, document.getElementById(`rc22`).innerHTML, document.getElementById(`rc32`).innerHTML]=book[1];
         [document.getElementById(`rc13`).innerHTML, document.getElementById(`rc23`).innerHTML, document.getElementById(`rc33`).innerHTML]=book[2];
         [document.getElementById(`rc14`).innerHTML, document.getElementById(`rc24`).innerHTML, document.getElementById(`rc34`).innerHTML]=book[3];
         [document.getElementById(`rc15`).innerHTML, document.getElementById(`rc25`).innerHTML, document.getElementById(`rc35`).innerHTML]=book[4];
         [document.getElementById(`rc41`).innerHTML, document.getElementById(`rc51`).innerHTML, document.getElementById(`rc61`).innerHTML]=book[5];
         [document.getElementById(`rc42`).innerHTML, document.getElementById(`rc52`).innerHTML, document.getElementById(`rc62`).innerHTML]=book[6];
         [document.getElementById(`rc43`).innerHTML, document.getElementById(`rc53`).innerHTML, document.getElementById(`rc63`).innerHTML]=book[7];
         [document.getElementById(`rc44`).innerHTML, document.getElementById(`rc54`).innerHTML, document.getElementById(`rc64`).innerHTML]=book[8];
         [document.getElementById(`rc45`).innerHTML, document.getElementById(`rc55`).innerHTML, document.getElementById(`rc65`).innerHTML]=book[9];
         [document.getElementById(`rc71`).innerHTML, document.getElementById(`rc81`).innerHTML, document.getElementById(`rc91`).innerHTML]=book[10];
         [document.getElementById(`rc72`).innerHTML, document.getElementById(`rc82`).innerHTML, document.getElementById(`rc92`).innerHTML]=book[11];
        // book[11] = [document.getElementById(`rc72`).innerHTML,document.getElementById(`rc82`).innerHTML,document.getElementById(`rc92`).innerHTML];
         [document.getElementById(`rc73`).innerHTML, document.getElementById(`rc83`).innerHTML, document.getElementById(`rc93`).innerHTML]=book[12];
         [document.getElementById(`rc74`).innerHTML, document.getElementById(`rc84`).innerHTML, document.getElementById(`rc94`).innerHTML]=book[13];
         [document.getElementById(`rc75`).innerHTML, document.getElementById(`rc85`).innerHTML, document.getElementById(`rc95`).innerHTML]=book[14];
    }
    // console.log(book);
    print() {
        book.sort();
        for (let i = 0; i < 5; i++)
            for (let j = 0; j < 9; j++) {
                document.getElementById("rc" + i + j).innerHTML = book[i, j];
            }
    }
}
sortA_Z();


// function sortRelevance(){
//     document.getElementById("dropdownMenuButton1").innerHTML="Recently Arrived";
// }
// function sortA_Z(){
//     document.getElementById("dropdownMenuButton1").innerHTML="Title A-Z";
// }
// function sortA_Z(){
//     document.getElementById("dropdownMenuButton1").innerHTML="Title A-Z";
// }