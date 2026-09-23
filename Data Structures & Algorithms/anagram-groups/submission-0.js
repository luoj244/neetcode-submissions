class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const groups = new Map();

        // split the words in the array, sort them in alphabetical order, and join the letters back into the word
        for (const word of strs) {
            const sortedKey = word.split("").sort().join("");

        // If the sorted key doesn't exist in the Map, create a new empty group
            if (!groups.has(sortedKey)) {
                groups.set(sortedKey, []);
            }
        // Add the original word to the group associated with its sorted key
            groups.get(sortedKey).push(word);
        }
        return Array.from(groups.values());
    }
}
