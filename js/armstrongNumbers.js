// How can you make this more scalable and reusable later?
exports.findArmstrongNumbers = function(numbers) {
    armstrongs = [];

    for(let num of numbers){
        const numStr = num.toString()
        const digits = numStr.split('').map(digit=> parseInt(digit))
        const power = digits.length

        let sum = 0
        for (let digit of digits){
            sum += Math.pow(digit, power)       
        }
         if (sum === num){
            armstrongs.push(num)
        }
    }
    return armstrongs
};
