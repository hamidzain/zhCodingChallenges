// This is a very simple non-recursive implementation as well
// I included it below

    function parityArrayElements(arr, par) {
        resultArr = new Array();
        if(par == 'even') {
            startingIndex = arr.length - 2;
        } else if(par == 'odd') {
            startingIndex = arr.length - 1;
        }

        for(let i = startingIndex; i > 0; i -= 2) {
            resultArr.unshift(a[i]);
        }

        return resultArr;
    }


    function parityArrayElementsRecursive(arr, par) {
        arrayIsEvenLength = arr.length % 2 == 0;
        resultArr = new Array();


        // Adds the first even or odd member of the array
        if(par == 'even') {
            // If the array is an even length and we are looking for even elements
            // We need to return the first element
            // If we are looking for odd elements
            // We need to return the second element
            if(arrayIsEvenLength) {
                resultArr.push(arr[0]);
            } else {
                resultArr.push(arr[1]);
            }
            // These results are flipped if the array is of odd length
        } else if(par == 'odd') {
            if(arrayIsEvenLength) {
                resultArr.push(arr[1]);
            } else {
                resultArr.push(arr[0]);
            }
        }

        // After pushing the first suitable element, if the array is big enough
        // slice off the first 2, then run this again with the smaller array
        if(arr.length > 2) {
            resultArr.push(this.parityArrayElementsRecursive(arr.splice(0, 2), par));
        }

        return resultArr;
    }


const printTestArray1 = parityArrayElementsRecursive([2, 4, 6, 8, 10], "odd");
console.log("Test Array 1: " + printTestArray1);
const printTestArray2 = parityArrayElementsRecursive(["E", "D", "A", "B", "I", "T"], "even");
console.log("Test Array 2: " + printTestArray2);
const printTestArray3 = parityArrayElementsRecursive([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "even");
console.log("Test Array 3: " + printTestArray3);
const printTestArray4 = parityArrayElementsRecursive(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "even");
console.log("Test Array 4: " + printTestArray4);
