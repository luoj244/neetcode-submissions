class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for (const word of strs) {
            encoded += word.length + "#" + word;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;

        while (i < str.length) {
            const j = str.indexOf("#", i);
            const length = Number(str.slice(i,j));
            const word = str.slice(j+1, j+1+length);

            result.push(word);
            i = j + 1 + length;

        }
        return result;
    }
}
