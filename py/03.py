sum = 0
j = 0
for i in range(2, 10000):
    for j in range(2, i+1):
        if i % j == 0:
            break
    if i == j:
        sum += i
print(sum)
