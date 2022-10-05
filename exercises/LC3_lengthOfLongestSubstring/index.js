// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

/**
 * Create an empty hashMap (key/val -> Character/index)
 * Create start and max variable, set both with initial values of zero
 * 
 * Loop thru Input String
 *  If current Character in hashMap & has index >= start
 *      Set start to index for character found in hashMap + 1
 *  Set key/value pair on hashMap to be current Character/current Index
 *  If length of current window is greater than max
 *      Set max to length of current window
 */

function lengthOfLongestSubstring(s) {
    let windowCharsMap = {};
    let windowStart = 0;
    let maxLength = 0;

    for (let i = 0; i < s.length; i++){
        const endChar = s[i];

        if (windowCharsMap[endChar] >= windowStart) {
            windowStart = windowCharsMap[endChar] + 1;
        }

        windowCharsMap[endChar] = i;
        maxLength = Math.max(maxLength, i - windowStart + 1);
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;
