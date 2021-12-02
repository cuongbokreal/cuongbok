<meta charset="UTF-8">
#Cuongbok A7-K18 depzai: bài nhập N, M (M>N) rồi lấy số các số chia hết cho 3 hoặc 5 trong khoảng N -> M
def xuly(M, N): #function xuly với 2 tham số là M, N 
    if N > M: #kiểm soát M phải lớn hơn N 
        print('Xin nhập lại') #nếu N>M: in ra 'Xin nhập lại'
        getInput() #chạy lại chương trình getInput()
    else: #trường hợp M>N (đúng theo đề bài)
        listNumber = [] #listNumber là kiểu mảng. ["1","2","n"]
        for i in range(N, M+1):
            if i % 3 == 0 or i % 5 == 0:
                listNumber.append(i) #mỗi lần thỏa mãn, thêm vào biến listNumber giá trị i ["i","i+n"]
        print('Trong khoảng từ', N, 'đến', M, 'có:', len(listNumber), 'số chia hết cho 3 hoặc 5.') #len: độ dài 
def getInput(): #function getInput để lấy dữ liệu từ bàn phím
    N = int(input('Nhập N='))
    M = int(input('Nhập M= (M>N)'))
    xuly(M, N) #chạy chương trình xuly(M, N) với 2 tham số đã nhận từ bàn phím là N và M.
getInput()#chạy chương trình getInput() để bắt đầu.

