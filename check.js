const handleCapEachWordClick = (text) => {
    var newTextArr = text.split(" ");
    
   for(let i = 0; i<newTextArr.length; i++){
        let firstChar = newTextArr[i][0];
        // console.log("First Char " + firstChar);

        let firstCharCap = firstChar.toUpperCase();
        // console.log("First Char Cap = " + firstCharCap);

        let wordArr = newTextArr[i][0].split();
        console.log(wordArr);
        wordArr[0] = firstCharCap;

         newTextArr[i] = wordArr.join("");
   }

    var result = newTextArr.join(" ");
   console.log(result);
}

handleCapEachWordClick("ram sharma is a boy");