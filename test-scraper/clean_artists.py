artists = []
with open('artists', 'r') as src:
    for line in src:
        if line not in artists:
            artists.append(line)
        
artists.sort()
with open('artists', 'w') as des:
    for a in artists:
        des.write(a)
        print a