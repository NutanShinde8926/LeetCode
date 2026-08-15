var longestSubsequence = function(nums) {
    let totalXor = 0;
    let hasNonZero = false;
    for (const num of nums) {
        totalXor ^= num;
        if (num !== 0) hasNonZero = true;
    }
    if (totalXor !== 0) return nums.length;
    if (hasNonZero) return nums.length - 1;
    return 0;
};
console.log(longestSubsequence([1,2,3])); 