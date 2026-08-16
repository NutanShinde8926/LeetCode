var stoneGameIX = function(stones) {
    console.log(stones); // prints the input array
    
    const cnt = [0, 0, 0];
    for (const s of stones) cnt[s % 3]++;
    console.log(cnt); // prints the bucket counts — useful for debugging

    if (cnt[0] % 2 === 0) {
        return cnt[1] >= 1 && cnt[2] >= 1;
    } else {
        return Math.abs(cnt[1] - cnt[2]) > 2;
    }
};
console.log(stoneGameIX([2, 1])); 