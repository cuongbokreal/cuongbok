#Máy bán nước tự động nhóm 8 (11A7)
#đầu tiên có array data sản phẩm
dataProduct = [
        {"id":"01",
         "name":"Coca",
         "price":10000,
         "unit":"lon"
        },
        {"id":"02",
         "name":"Lavie",
         "price":6000,
         "unit":"chai"
        },
        {"id":"03",
         "name":"Bimbim",
         "price":5000,
         "unit":"goi"
        },
        {"id":"04",
         "name":"Milo",
         "price":7000,
         "unit":"hop"
        },
        {"id":"05",
         "name":"Sua chua",
         "price":4500,
         "unit":"hop"
        },  
    ]
#in sản phẩm ra
print("""Xin chào, đây là máy bán nước tự động!
Dưới đây là danh sách sản phẩm của chúng tôi
""")
def listProduct():
    for i in dataProduct:
        print(f"""Mã sản phẩm: {i["id"]}
Tên sản phẩm: {i["unit"]} {i["name"]}
Giá: {i["price"]} VND
    """)
listProduct()
#get input    
inputPrice = int(input('Xin mời nhập tiền:'))
if inputPrice > 4500:#kiểm soát số tiền nhập vào, lớn hơn giá sp nhỏ nhất
    inputId = int(input('Ma san pham:'))
    inputQuantity = int(input(f'Nhập số {dataProduct[(inputId-1)]["unit"]} {dataProduct[(inputId-1)]["name"]} muốn mua:'))
    outputName = dataProduct[(inputId-1)]["name"] #get ten sp bang id
    total = (dataProduct[(inputId-1)]["price"]) * (inputQuantity) #tong tien mua
    excessCash = inputPrice - total #tien thua
    def success():
        alert = f'Mời bạn nhận {inputQuantity} {dataProduct[(inputId-1)]["unit"]} {outputName}'
        if inputPrice > total:
            alert += f', và tiền thừa {excessCash} VND'
        print(alert)
    #done trường hợp thành công
    def fail():
        alert = f"""
        Xin lỗi bạn không đủ tiền để mua {inputQuantity} {dataProduct[(inputId-1)]["unit"]} {outputName}
        """
        call = ""
        alertAdd = ""
        for i in dataProduct:
            if inputPrice < i["price"]:
                alertAdd =  f'Không có sản phẩm gợi ý'
        alertAdd = ""
        for i in dataProduct:
            if inputPrice >= i["price"]:
                alertAdd += f"""- {int((inputPrice/i["price"]))} {i["unit"]} {i["name"]}.
                     """    
        call = "Hãy thử mua"
        print(alert, call ,alertAdd)
    def xuly():        
        if inputPrice >= (dataProduct[(inputId-1)]["price"]) * (inputQuantity):
            success()
            #inputPrice = excessCash
        else:
            fail()
    xuly()
else:
    print('Ban khong co du tien! Vui long nhap them')

