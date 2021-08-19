import requests, csv, re, json

def my_ord(x):
    n = (float(x) * 100) // 10
    if n == 20203:
        n = 20193
    return n

resp = requests.get('https://docs.google.com/spreadsheets/d/1OOiFu3CrZYO80qQpEq-GNJ1C_iPBlwfE2aozq63qBzw/export?format=csv')

fields = ['Data', 'Email', 'name', 'team', 'class', 'github', 'home', 'text']

sheet_data = []
manual_data = []


if resp.status_code == 200:
    data_raw = resp.content.decode().splitlines()
    data = [ x for x in list(csv.reader(data_raw, delimiter=',', quotechar='"')) ]


    for resp in data[1:]:
        obj = {}
        for i, x in enumerate(resp):
            if i > 1:
                obj[fields[i]] = x
        sheet_data.append(obj)


#print(sheet_data)

f = open('data/manual.json')
manual_data = json.load(f)
f.close()

manual_data['games'].extend(sheet_data)

manual_data['games'].sort(key=lambda x : my_ord(x['class']))
manual_data['games'].reverse()

print(manual_data)
print(json.dumps(manual_data))
with open('public/data.json', 'w', encoding='utf8') as json_file:
    json.dump(manual_data, json_file, ensure_ascii=False)

