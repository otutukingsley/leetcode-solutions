/**
 * @param {string} s
 * @return {number}
 */

//Using HashMap Method
var lengthOfLongestSubstring = function (s) {
  let begin = 0 //Initial state of begin
  let map = {} // Map to hold unique values
  let max = 0

  for (let end = 0; end < s.length; end++) {
    if (map[s[end]] !== undefined && map[s[end]] >= begin) {
      /* We are always incrementing begin with index of the duplicate string character
            + 1 so that our begin will start from a character that is not duplicate */
      begin = map[s[end]] + 1
    }

    map[s[end]] = end
    /* add string character into object where the object key is the character and the value is the index. this is used to know a string character we have looked at or seen before */
    max = Math.max(max, end - begin + 1)

    /* for each interation lets say when end is 0,1 ... n max will equals comparing the max value with the subtraction between the end and begin value + 1 
        
            eg: 
            
            lets say we have "abbcdbf"
            
            when end = 0 (a)
            map = { "a": 0}
            begin = 0
            max = Math.max(0, 0 - 0 + 1) = 1
            
            when end = 1 (a,b)
            map = {"a":0, "b": 1}
            begin = 0
            max = Math.max(1, 1 - 0 + 1) = 2 "max = 2 since both ab are unique substrings because we are looking for the longest unique substring and also we are adding 1 after each substraction to get the actual number of characters since JS is zero based. for instance 
            if
            begin = 0
            end = 1
            substring  = "ab"
            end - begin = 1 + 1 =  2 "which is the correct number of max substring we have at the moment hence max = 2"
            "
            
            when end = 2 (a, b, b)
            map = {"b": 2, "a": 0} "objects only store unique keys so we can have duplicate keys that is why                                       the recent value of the same key will replace the previous"
            
            begin = 3 "reeason being that from our if statement, once we find a keey that exists already, we                           increment begin with the index of the character + 1 siginifying that we had a                                 duplicate number here in a case where we have another duplicate number we can keep                              record and skip that also"
            
            max = Math.max(2, 2 - 3 + 1) = 2 "Our max is still two, which is exactly the amount of unique                                                   numbers we have removing the dupicate number"
        */
  }

  return max
}
