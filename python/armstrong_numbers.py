# How can you make this more scalable and reusable later?
def find_armstrong_numbers(numbers):
    armstrongs = []
    
    for num in numbers:
        num_list = list(map(int, str(num)))
        power = len(num_list)
        sum = 0
        for digit in num_list:
            sum += digit ** power  
        if sum == num:
            armstrongs.append(num)
            
    return armstrongs       

