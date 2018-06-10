export const getLoremIpsum = (wordCount = 30, paragraphs = 5) => {
    let response = "";
    while (paragraphs) {
        --paragraphs;
        response += `<p>${(function(){
            let cc = wordCount || 1;
            let words = "";
            while (cc) {
                --cc;
                words += " lorem ipsum";
            }
            return words;
        })()}</p>`
    }
    return response;
};
