var obj = [
	{ 'e': 'which of the following', 'v': 'điều nào sau đây' },
	{ 'e': 'option', 'v': 'lựa chọn' },
	{ 'e': 'about', 'v': 'về [điều gì đó...]' },
	{ 'e': 'any change', 'v': 'bất cứ thay đổi nào' },
	{ 'e': 'within the', 'v': 'ở trong [ở trong cái gì đó...]' },
	{ 'e': 'reflected back', 'v': 'phản ánh lại' },
	{ 'e': 'reference methob', 'v': 'phương thức tham chiếu' },
	{ 'e': 'cat not passed to', 'v': 'không thể truyền tới' },
	{ 'e': 'value methob', 'v': 'phương thức tham trị' },
	{ 'e': 'subprogram', 'v': 'trương trình con' },
	{ 'e': 'consist', 'v': 'bao gồm' },
	{ 'e': 'statement', 'v': 'câu lệnh' },
	{ 'e': 'related', 'v': 'liên quan' },
	{ 'e': 'specific task', 'v': 'nhiệm vụ cụ thể' },
	{ 'e': 'execute', 'v': 'thực hiện' },
	{ 'e': 'standard', 'v': 'tiêu chuẩn' },
	{ 'e': 'predefine', 'v': 'xác định trước' },
	{ 'e': 'itself', 'v': 'chính nó' },
	{ 'e': 'the following', 'v': 'sau đây' },
	{ 'e': 'study', 'v': 'nghiên cứu' },
	{ 'e': 'state the output', 'v': 'nêu đầu ra' },
	{ 'e': 'nested', 'v': 'lồng nhau' },
	{ 'e': 'matches the', 'v': 'phù hợp với' },
	{ 'e': 'mearest', 'v': 'gần nhất' },
	{ 'e': 'preceding', 'v': 'trước' },
	{ 'e': 'already', 'v': 'đã sẵn sàng' },
	{ 'e': 'instruction', 'v': 'chỉ dẫn' },
	{ 'e': 'approach', 'v': 'tiếp cận' },
	{ 'e': 'sovle', 'v': 'giải quyết' },
	{ 'e': 'problem', 'v': 'vấn đề' },
	{ 'e': 'store', 'v': 'lưu trữ' },
	{ 'e': 'to store', 'v': 'để lưu trữ' },
	{ 'e': 'single character', 'v': 'kí tự đơn' },
	{ 'e': 'the braces', 'v': 'dấu ngoặc nhọn' },
	{ 'e': 'comma', 'v': 'dấu phẩy' },
	{ 'e': 'semicolon', 'v': 'dấu chấm phẩy' },
	{ 'e': 'full stop', 'v': 'dấu chấm' },
	{ 'e': 'colon', 'v': 'dấu hai chấm' },
	{ 'e': 'indicates', 'v': 'chỉ ra' },
	{ 'e': 'one of the following', 'v': 'một trong những điều sau đây' },
	{ 'e': 'diagram', 'v': 'sơ đồ' },
	{ 'e': 'flowchart', 'v': 'lưu đồ' },
	{ 'e': 'algorithm', 'v': 'thuật toán' },
	{ 'e': 'declaration', 'v': 'khai báo' },
	{ 'e': 'legal', 'v': 'hợp lệ' },
	{ 'e': 'invalid', 'v': 'không hợp lệ' },
	{ 'e': 'valid', 'v': 'hợp lệ' },
	{ 'e': 'condition', 'v': 'điều kiện' },
	{ 'e': 'at least once', 'v': 'ít nhất một lần' },
	{ 'e': 'bellow', 'v': 'dưới đây' },
	{ 'e': 'above', 'v': 'ở trên' },
	{ 'e': 'particular', 'v': 'cụ thể' },
	{ 'e': 'alter', 'v': 'thay đổi' },
	{ 'e': 'positive number', 'v': 'số dương' },
	{ 'e': 'negative number', 'v': 'số âm' },
	{ 'e': 'argument', 'v': 'đối số' },
	{ 'e': 'parameter', 'v': 'tham số' },
	{ 'e': 'ignore', 'v': 'không chấp nhận' },
	{ 'e': 'interconnect', 'v': 'liên kết' },
	{ 'e': 'it may be difficult to interconnect', 'v': 'nó có thể khó khăn để liên kết' },
	{ 'e': 'directly', 'v': 'trực tiếp' },
	{ 'e': 'depicted', 'v': 'miêu tả' },
	{ 'e': 'specific', 'v': 'đặc biệt' },
	{ 'e': 'symbols', 'v': 'các ký hiệu' },
	{ 'e': 'sequences', 'v': 'trình tự' },
	{ 'e': 'the range 1 to 50', 'v': 'phạm vi từ 1 đến 50' },
	{ 'e': 'the scope', 'v': 'phạm vi' },
	{ 'e': 'evaluate', 'v': 'đánh giá' },
	{ 'e': 'expressions', 'v': 'biểu thức' },
	{ 'e': 'programmer', 'v': 'lập trình viên' },
	{ 'e': 'specify', 'v': 'chỉ định' },
	{ 'e': 'assign', 'v': 'chỉ định' },
	{ 'e': 'precedence', 'v': 'quyền ưu tiên' },
	{ 'e': 'arithmetic', 'v': 'phép toán số học' },
	{ 'e': 'comparison', 'v': 'phép toán so sánh' },
	{ 'e': 'logical', 'v': 'phép toán logic' },
	{ 'e': 'purpose', 'v': 'mục đích' },
	{ 'e': 'reserved words', 'v': 'những từ dành riêng' },
	{ 'e': 'for specific purpose', 'v': 'cho mục đích cự thể' },
	{ 'e': 'without', 'v': 'không có' },
	{ 'e': 'string from source to destination', 'v': 'chuỗi từ nguồn tới đích' },
	{ 'e': 'explain', 'v': 'giải thích' },
	{ 'e': 'to allocate memory', 'v': 'để cấp phát bộ nhớ' },
	{ 'e': 'declare', 'v': 'khai báo' },
	{ 'e': 'referred by', 'v': 'gọi bằng' },
	{ 'e': 'the amount of', 'v': 'số lượng [số lượng của gì đó...]' },
	{ 'e': 'decides', 'v': 'quyết định' },
	{ 'e': 'retrieving of data stored into', 'v': 'lấy dữ liệu đã lưu trữ vào [vào đâu đó...]' },
	{ 'e': 'frequently', 'v': 'thường xuyên' },
	{ 'e': 'involving', 'v': 'liên quan' },
	{ 'e': 'a count of the', 'v': 'một số lượng [số lượng gì đó...]' },
	{ 'e': 'performed', 'v': 'thực hiện' },
	{ 'e': 'repeat', 'v': 'lặp lại' },
	{ 'e': 'how many times', 'v': 'bao nhiêu lần' },
	{ 'e': 'times', 'v': 'lần' },
	{ 'e': 'until', 'v': 'cho đến khi' },
	{ 'e': 'no longer true', 'v': 'không còn đúng nữa' },
	{ 'e': 'fixed', 'v': 'cố định' },
	{ 'e': 'certain', 'v': 'nhất định' },
	{ 'e': 'set', 'v': 'bộ' },
	{ 'e': 'none of those', 'v': 'không có gì' },
	{ 'e': 'to prompt the user', 'v': 'để nhắc người dùng' },
	{ 'e': 'prompt', 'v': 'nhắc [nhắc ai đó...]' },
	{ 'e': 'match', 'v': 'phù hợp' },
	{ 'e': 'match', 'v': 'trận đấu' },
	{ 'e': 'player', 'v': 'người chơi' },
	{ 'e': 'a hexadecimal number', 'v': 'một số thập lục phân' },
	{ 'e': 'to display the first 15 prime number', 'v': 'để hiển thị 15 số nguyên tố đầu tiên' },
	{ 'e': 'the best suited to', 'v': 'phù hợp nhất với' },
	{ 'e': 'suited to', 'v': 'phù hợp với' },
	{ 'e': 'location', 'v': 'vị trí' },
	{ 'e': 'index', 'v': 'chỉ số' },
	{ 'e': 'subscript', 'v': 'chỉ mục' },
	{ 'e': 'bound', 'v': 'ràng buộc' },
	{ 'e': 'the minimum size', 'v': 'kích thước tối thiểu' },
	{ 'e': 'the maximum size', 'v': 'kích thước tối đa' },
	{ 'e': 'a fixed number of times', 'v': 'một số lần cố định' },
	{ 'e': 'operation', 'v': 'hoạt động' },
	{ 'e': 'is met', 'v': 'được đáp ứng' },
	{ 'e': 'have to be', 'v': 'phải là (phải là gì đó...have to be declared)' },
	{ 'e': 'initialises', 'v': 'khởi tạo' },
	{ 'e': 'to hold', 'v': 'để giữ' },
	{ 'e': 'enable', 'v': 'cho phép' },
	{ 'e': 'disable', 'v': 'vô hiệu hoá' },
	{ 'e': 'to change', 'v': 'thay đổi' },
	{ 'e': 'valid', 'v': 'hợp lệ' },
	{ 'e': 'invalid', 'v': 'không hợp lệ' },
	{ 'e': 'the condition is tested only after the body of the loop', 'v': 'điều kiện chỉ được kiểm tra sau phần thân của vòng lặp' },
	{ 'e': 'code segment', 'v': 'đoạn mã' },
	{ 'e': 'portion', 'v': 'phần' },
	{ 'e': 'fit', 'v': 'thích hợp' },
	{ 'e': 'which of the following statements', 'v': 'phát biểu nào sau đây' },
	{ 'e': 'to obtain', 'v': 'để có được' },
	{ 'e': 'remainder', 'v': 'phần còn lại' },
	{ 'e': 'linkages', 'v': 'liên kết' },
	{ 'e': 'made up of letters', 'v': 'gồm các chữ cái' },
	{ 'e': 'underscore character', 'v': 'ký tự gạch chân [_]' },
	{ 'e': 'also permitted', 'v': 'cũng được cho phép' },
	{ 'e': 'identical', 'v': 'giống hệt nhau' },
	{ 'e': 'probably', 'v': 'có lẽ' },
	{ 'e': 'overrided', 'v': 'ghi đè' },
	{ 'e': 'hyphen', 'v': 'gạch nối [-]' },
	{ 'e': 'pipeline', 'v': 'dấu sổ xuống [|]' },
	{ 'e': 'asterisk', 'v': 'dấu hoa thị [*]' },
	{ 'e': 'except', 'v': 'ngoại trừ' },
	{ 'e': 'round off', 'v': 'làm tròn số' },
	{ 'e': 'is treated as', 'v': 'được coi là' },
	{ 'e': 'classification', 'v': 'phân loại' },
	{ 'e': 'clearly', 'v': 'thông suốt' },
	{ 'e': 'reserves', 'v': 'dự trữ' },
	{ 'e': 'space', 'v': 'không gian' },
	{ 'e': 'instance', 'v': 'ví dụ' },
	{ 'e': 'identify', 'v': 'nhận định' },
	{ 'e': 'getting defined', 'v': 'được định nghĩa' },
	{ 'e': 'getting declared', 'v': 'được khai báo' },
	{ 'e': 'during', 'v': 'trong quá trình' },
	{ 'e': 'mention', 'v': 'đề cập đến' },
	{ 'e': 'prototype', 'v': 'nguyên mẫu' },
	{ 'e': 'given', 'v': 'được đưa ra' },
	{ 'e': 'takes', 'v': 'nhận' },
	{ 'e': 'hence', 'v': 'vì thế' },
	{ 'e': 'platform', 'v': 'nền tản' },
	{ 'e': 'garbage value', 'v': 'giá trị rác' },
	{ 'e': 'conflict', 'v': 'xung đột' },
	{ 'e': 'priority', 'v': 'ưu tiên' },
	{ 'e': 'get invoked', 'v': 'được gọi' },
	{ 'e': 'point out the error', 'v': 'chỉ ra lỗi' },
	{ 'e': 'terminates', 'v': 'chấm dứt' },
	{ 'e': 'abnormally', 'v': 'bất thường' },
	{ 'e': 'to accommodate', 'v': 'để chứa' },
	{ 'e': 'whereas', 'v': 'trong khi' },
	{ 'e': 'occurs', 'v': 'xảy ra' },
	{ 'e': 'can be verified', 'v': 'có thể được xác minh' },
	{ 'e': 'unary', 'v': 'đơn' },
	{ 'e': 'error message is raised', 'v': 'thông báo lỗi được đưa ra' },
	{ 'e': 'knowledge', 'v': 'hiểu biết' },
	{ 'e': 'the hierarchy', 'v': 'thứ bậc' },
	{ 'e': 'associativity ', 'v': 'kết hợp' },
	{ 'e': 'occurrence of ', 'v': 'sự xuất hiện của' },
	{ 'e': 'happen', 'v': 'xảy ra' },
	{ 'e': 'exceeds', 'v': 'xảy vượt qua' },
	{ 'e': 'text blocks over image', 'v': 'khống văn bản trên hình ảnh' },
	{ 'e': 'the schematics', 'v': 'các sơ đồ' },
	{ 'e': 'someone', 'v': 'vài người' },
	{ 'e': 'recently', 'v': 'gần đây' },
	{ 'e': 'this technique', 'v': 'kỹ thuật này' },
	{ 'e': 'my first reaction', 'v': 'phản ứng đầu tiên của tôi' },
	{ 'e': 'probably', 'v': 'có lẽ' },
	{ 'e': 'is actually', 'v': 'thật sự là' },
	{ 'e': 'interesting', 'v': 'hấp dẫn' },
	{ 'e': 'interested', 'v': 'quan tâm' },
	{ 'e': 'screenshot', 'v': 'ảnh chụp màn hình' },
	{ 'e': 'drawbacks', 'v': 'nhược điểm' },
	{ 'e': 'evolution', 'v': 'sự phát triển' },
	{ 'e': 'introduction', 'v': 'giới thiệu' },
	{ 'e': 'communiation', 'v': 'giao tiếp' },
	{ 'e': 'unique', 'v': 'duy nhất' },
	{ 'e': 'protocol', 'v': 'giao thức' },
	{ 'e': 'complexity', 'v': 'phức tạp' },
	{ 'e': 'leads', 'v': 'dẫn' },
	{ 'e': 'to reduction', 'v': 'giảm tải' },
	{ 'e': 'effort', 'v': 'nỗ lực' },
	{ 'e': 'presentation', 'v': 'trình bày' },
	{ 'e': 'focus', 'v': 'nhắm...' },
	{ 'e': 'appearance', 'v': 'xuất hiện' },
	{ 'e': 'flexible', 'v': 'linh hoạt' },
	{ 'e': 'rid', 'v': 'thoát khỏi' },
	{ 'e': 'multimedia', 'v': 'đa phương tiện' },
	{ 'e': 'plug-ins', 'v': 'bổ sung' },
	{ 'e': 'expert', 'v': 'thông thạo' },
	{ 'e': 'improved', 'v': 'được cải thiện' },
	{ 'e': 'availble', 'v': 'có sẵng' },
	{ 'e': 'benefits', 'v': 'quyền lợi' },
	{ 'e': 'reusability', 'v': 'tái sử dụng' },
	{ 'e': 'independence', 'v': 'độc lộc' },
	{ 'e': 'asynchronous', 'v': 'không đồng bộ' },
	{ 'e': 'own', 'v': 'sỡ hữu' },
	{ 'e': 'emphasizes', 'v': 'nhấn mạnh' },
	{ 'e': 'term', 'v': 'thuộc ngữ' },
];


function findText() {
	var key = document.getElementById("txtKey").value;
	var str = '';
	if (key !== '') {
		var tmpObj = obj.filter(x => {
			return (x.e.indexOf(key.toLowerCase()) !== -1) || (x.v.indexOf(key.toLowerCase()) !== -1);
		});
		tmpObj.forEach(x => {
			str = str + '<div> * ' + x.e + '<br>' + '(' + x.v + ')' + '</div>'
		});
	} else {
		str = '';
	}
	document.getElementById("result").innerHTML = str;
}