# project 2

## Kích hoạt lại tailwind trên vite

**Nếu ai sử dụng tailwind trên vite không hiện thì có thể do nó không nhận được các class của module tailwind.**

<> Cần cài đặt theo cách riêng bằng:

- `npx tailwindcss init -p`
- `npm install --save autoprefixer`

Sau đó gói sẽ tự tải về một "postcss.config.cjs".\
và tự thêm các plugins và class vào dự án tailwind vite.\

## Các bug và cách fix bug của dự án này sẽ được cập nhật tại đây \*\*

Ở dự án này, mình có tìm được thêm một số phương pháp hay cho việc phát triển code như:

useQuery có thể để loading bằng isFetching, cái này có tác dụng là trong lúc dữ liệu đang fetching data từ server sẽ laoding lại component, còn đối với isLoading chỉ có tác dụng trong lần load đầu tiên. ở các lần sau nó sẽ giữ nguyên data ở cache và thay thế nó nhưng không gây ảnh hưởng đến load lại trang

useMutation: Cái này thì bạn không thể gọi fetching như useQuery được, vì nó chỉ có 5 status nhưng nếu bạn muốn tạo hiệu ứng loading thì bạn có thể thêm một cái nhận diện fetching. Cái này mỗi lần bạn thay đổi tham số nó sẽ thay đổi toàn bộ tài nguyên trả về.

**Ta có thể kết hợp isFetching với các biến state khác để tái kích hoạt loading page**

## Trong dự án này mình có gặp vấn đề với ngày tháng, như các bạn đã biết thì chuyển đổi ngày trong javascript có 2 cách

# Một là dùng new Date() xong xử dụng các method có sẵn của new Date

# Hai là dùng Date từ server trả về. Và khi server trả về mình nhận được định dạng là YYYY-MM-DD, HH-MM-S. Đây là định dạng string. không quá khó để đổi nó nhưng nó sẽ rất lằng nhằng trong việc:

- Nhận về date và chuyển nó về dạng DD-MM-YYYY
- Sau đó vận chuyển nó sang các component khác
- Lọc dữ liệu theo date ( Ngày ), mỗi ngày không hoặc giờ không
- So sánh giờ là một string
- Tính khoảng cách giữa các ngày và các giờ
- Thêm định lượng một thời gian vào trong các ngày mình tính trước để trả về kết quả phù hợp với việc booking lịch
- Xử lý date về định dạng cũ để gửi yêu cầu cho server YYYY-MM-DD

- Trong một component phải lấy 2 dữ liệu ngày khác format nhau, chuyển đổi qua lại chỉ có ngày và tháng

Hàm chuyển đổi ngày được mình sử dụng là: new Date().toLocaleDateString() và new Date().toLocaleTimeString()

### Ngoài ra còn có thêm một thư viện dùng để thêm ngày hoặc thêm một tháng bất kì rất tiện lợi mà chỉ cần thêm một dòng code

momment(): Trả về time hiện tại dạng IOSstring

momment().format("LLL"):
momment().format("YYYY-MM-DD"): Dùng để cấu hình date cho thời gian trả về từ server_dạng string hoặc new Date()

## Ngoài ra có thể tự code để cấu hình bằng cách lấy date của ngày Ví dự:

`const date = new Date()`

const month = new Date().getMonth() // Cái này phải cộng thêm một tháng vì số nó trả về là dữ liệu thấp hơn 1 tháng
const date = new Date().getDate() // Trả về đúng date
const year = new Date().getFullYear()
const day = new Date().getDay() // Cái này phải cộng thêm một ngày vì nó trả theo số, muốn lấy ngày bằng chữ nên lập hàng và cho index bằng số nó trả về

Nhận đống giữ liệu này xong có thể viết một cái hàm riêng để trả về ngày tháng chuẩn
date + '/' + month + '/' + year

có thể lấy slice để cắt từng phần từ và sắp xếp được

Có một logic ở đây mình chưa xử lý được, đó là so sánh khoảng thời gian hiện tạo với lịch tập. Nếu như quá 5 - 30 phút so với lịch tập thì mình sẽ ẩn đi khả năng click của lịch tập.

Có một thư viện dùng để lấy rating và trình rating ra màn hình, thay đổi theo việc di chuột để đánh giá được, rating MUI

Trong dự án này mình có gặp các lỗi liên quan đến zalo;
Ví dụ như zalo không các div ngoài div root của nó, Vì vậy các modal và popup của dự án mình đã chuyển sang dạng page mới. Các page mới sẽ chứa đường dẫn mới.

Trong dự án mình có dùng cả useForm nữa, nhưng useForm thì chưa xử lý được các lỗi của khách và hiển thị lỗi. Trong dự án mình đang hiển thị lỗi bằng onChange và useState

<!-- Xu hướng UI ở trong app này của mình, sử dụng:
 - Opacity: 80 - 90%
 - Border-radius: 10px - 15px hoặc full
 - gradient-backgrond color: (backgrond image) cái này set từ trắng đến màu đậm để tạo độ bóng và dộ nỏi cho shape
 - Box-shadow: Dùng để tạo hiệu ứng shape nổi, cảm giác 3D
 - display grid: Dùng để căn chỉnh theo response
 - thuộc tính calc() css, dùng để responsive cứng giữa các màn
 - Dùng cả phần trăm và pixel: pixel sẽ giúp không bị méo hình, còn phần trăm sẽ bị méo hình theo màn


 -->

Lỗi thứ 2 mình khá ức chế ở trong web này là khả năng responsive chi web

Thiết lập min-height hoặc max-height
Thiết lập thử thiết lập only screen



TK: 0909978521
MK: 123456