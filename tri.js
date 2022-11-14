function makethetable(){
  createherethefirsttable.innerHTML = "";
  for( i=1 ; i < Number(tablesize.value) + 1 ; i++){
  createherethefirsttable.innerHTML += '<input type="text" class="inputtable" id="inputtable'+i+ '">';
  }
}
const tablearray1 = [];
function triletableau(){
tablearray1.length = 0 ;
  sectable.innerHTML = "";
var i;
  for( i=1 ; i < Number(tablesize.value) + 1 ; i++){
let  theid = "inputtable"+ i ;
console.log(document.getElementById(theid).value);
  tablearray1.push(Number(document.getElementById(theid).value));
}
function tri(table) {
for(var i = 0;i<table.length;i++){
    for(var j= i+1;j<table.length;j++){
        if(table[i]>table[j]){
            var swap = table[i];
            table[i] = table[j];
            table[j] = swap;
        }
    }
}
}
tri(tablearray1);
for( i=0 ; i < Number(tablesize.value) ; i++){
sectable.innerHTML += '<input type="text" class="inputtable" id="inputtableTwo'+i+ '">';
}
for( i=0 ; i < Number(tablesize.value) ; i++){
let  theid = "inputtableTwo"+ i ;
document.getElementById(theid).value = tablearray1[i];
}
}
