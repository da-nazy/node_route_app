function check(){
    var vowel=["a", "e", "i", "o", "u"];
var s="learnjavascriptloopsinhackerrankweekofcode";
// for outputing consonant

/**
 * for(var a=0; a<vowel.length;a++){
    
    for(var b=0; b<s.length;b++){
       if(vowel[a]===s[b]){
        console.log(s[b]);
       }
    }
 }
 */
for(var a=0; a<s.length;a++){
    if(vowel.includes(s[a])){
        console.log(s[a]);
    }
}
 

const ans=s.split('a').join('').split('i').join('').split('o').join('').split('u').join('').split('e').join('').split().join('\n');
for(var d=0; d<ans.length;d++){
    console.log(ans[d]);
   
}
// for outputing words none consonant


}
check();