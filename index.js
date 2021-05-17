// largestSubarraySum = arr => {
// // I need to filter
// // I need to filter out elements (numbers) that do not
// // give me the highest sum

// //Find out what all the subarrays are
// // How many possible arrays can I create?
// }

largestSubarraySum = arr => {
    var maxSoFar = nums[0];

    var maxEndingHere = nums[0];

    for (var i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
}
