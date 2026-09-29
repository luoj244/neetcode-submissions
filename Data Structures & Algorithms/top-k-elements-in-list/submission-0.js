class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();

        for (const number of nums) {
            if (!frequency.has(number)) {
                frequency.set(number, 1)
            } else {
                frequency.set(number, frequency.get(number) + 1) 
            }
        }

        const entries = Array.from(frequency.entries());

        entries.sort((a,b) => b[1] - a[1]);

        const result = [];

        for (let i = 0; i < k; i++) {
            result.push(entries[i][0]);
        } 
        return result;
    }
}
