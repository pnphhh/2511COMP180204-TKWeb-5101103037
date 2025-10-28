const questions = [
    {
        question: "Vị Vua nào được coi là người đã dựng nên Nhà nước Văn Lang, nhà nước đầu tiên của Việt Nam?",
        options: ["Vua An Dương Vương", "Vua Lý Thái Tổ", "Vua Hùng", "Vua Đinh Tiên Hoàng"],
        correct: 2
    },
    {
        question: "Kinh đô của nhà nước Âu Lạc, được xây dựng dưới thời Thục Phán An Dương Vương, là thành nào?",
        options: ["Hoa Lư", "Cổ Loa", "Thăng Long", "Phú Xuân"],
        correct: 1
    },
    {
        question: "Sự kiện nào đánh dấu nhà Lý được thành lập và mở ra một kỷ nguyên phát triển rực rỡ của chế độ phong kiến Việt Nam?",
        options: ["Chiếu dời đô từ Hoa Lư về Thăng Long", "Viện ban hành bộ luật Hình Thư", "Chiến thắng trên sông Bạch Đằng năm 938", "Trận đánh phá Tống bình Chiêm"],
        correct: 0
    },
    {
        question: "Trong ba lần kháng chiến chống quân xâm lược Mông - Nguyên (thế kỷ 13), quân dân nhà Trần đã thể hiện tinh thần quyết chiến qua hội nghị nào?",
        options: ["Hội nghị An Định", "Hội nghị Tân Trào", "Hội nghị Bình Than", "Hội nghị Diên Hồng"],
        correct: 3
    },
    {
        question: "Vị anh hùng dân tộc nào gắn liền với câu nói nổi tiếng: 'Tôi muốn cưỡi gió mạnh, đạp luồng sóng dữ...'?",
        options: ["Lê Chân", "Bùi Thị Xuân", "Bà Triệu", "Trưng Trắc"],
        correct: 2
    },
    {
        question: "Sau khi đánh tan quân Nam Hán trên sông Bạch Đằng (năm 938), Ngô Quyền đã làm gì?",
        options: ["Xưng vương, đóng đô ở Cổ Loa, mở ra thời kỳ độc lập lâu dài", "Mở đầu thời kỳ Bắc thuộc lần thứ hai", "Lên ngôi Hoàng đế, đặt quốc hiệu là Đại Cồ Việt", "Lập ra nhà Tiền Lê"],
        correct: 0
    },
    {
        question: "Cố đô Hoa Lư là kinh đô của triều đại nào sau khi đất nước độc lập?",
        options: ["Nhà Lý", "Nhà Đinh - Tiền Lê", "Nhà Trần", "Nhà Hậu Lê"],
        correct: 1
    },
    {
        question: "Vị vua nào đã quyết định dời đô từ Hoa Lư về Đại La (Thăng Long) vào năm 1010?",
        options: ["Đinh Tiên Hoàng", "Trần Thái Tông", "Lý Công Uẩn", "Lê Hoàn"],
        correct: 2
    },
    {
        question: "Khuê Văn Các là biểu tượng của công trình lịch sử nào tại Hà Nội, nơi đào tạo nhân tài?",
        options: ["Chùa Một Cột", "Đền Ngọc Sơn", "Hoàng Thành Thăng Long", "Văn Miếu - Quốc Tử Giám"],
        correct: 3
    },
    {
        question: "Vị tướng kiệt xuất nào được mệnh danh là 'Hưng Đạo Đại Vương', chỉ huy 3 lần đánh bại quân Nguyên Mông?",
        options: ["Trần Quang Khải", "Trần Quốc Tuấn", "Lý Thường Kiệt", "Trần Hưng Đạo"],
        correct: 1
    },
    {
        question: "Tác phẩm nổi tiếng nào được Trần Quốc Tuấn viết để khích lệ tinh thần chiến đấu của quân sĩ?",
        options: ["Bình Ngô Đại Cáo", "Nam Quốc Sơn Hà", "Hịch tướng sĩ", "Chiếu dời đô"],
        correct: 2
    },
    {
        question: "Vị anh hùng áo vải nào đã lãnh đạo phong trào Tây Sơn và lên ngôi Hoàng đế?",
        options: ["Nguyễn Nhạc", "Nguyễn Ánh", "Quang Trung", "Trần Hưng Đạo"],
        correct: 2
    },
    {
        question: "Trận đánh nổi tiếng nào gắn liền với Tết Kỷ Dậu (1789) và vua Quang Trung?",
        options: ["Rạch Gầm - Xoài Mút", "Chiến thắng Bạch Đằng", "Ngọc Hồi - Đống Đa", "Vạn Kiếp"],
        correct: 2
    },
    {
        question: "Vị vua nào đã đổi tên nước thành Việt Nam vào năm 1804?",
        options: ["Vua Minh Mạng", "Vua Gia Long", "Vua Tự Đức", "Vua Quang Trung"],
        correct: 1
    },
    {
        question: "Vị quan nào đã thực hiện chính sách cải cách táo bạo, bao gồm ban hành 'tiền giấy' và 'hạn điền', trước khi lập ra nhà Hồ?",
        options: ["Hồ Quý Ly", "Trần Thủ Độ", "Lê Thánh Tông", "Nguyễn Huệ"],
        correct: 0
    },
    {
        question: "Bộ luật nổi tiếng nhất và hoàn chỉnh nhất trong lịch sử phong kiến Việt Nam, được ban hành dưới thời vua Lê Thánh Tông, có tên là gì ?",
        options: ["Hình Luật", "Luật Hồng Đức (Quốc triều hình luật)", "Hình Thư", "Hoàng Việt Luật Lệ"],
        correct: 1
    },
    {
        question: "Công cuộc Trung hưng của triều Lê vào thế kỷ 16-17 gắn liền với sự kiện nào?",
        options: ["Các chúa Trịnh phò tá vua Lê, đánh bại nhà Mạc, khôi phục lại ngôi vua", "Chiến thắng chống quân Minh xâm lược của Lê Lợi"
            , "Phong trào Tây Sơn đánh bại cả chúa Trịnh và chúa Nguyễn", "Vua Quang Trung đánh bại quân Thanh"],
        correct: 0
    },
    {
        question: "Đường ranh giới tự nhiên nào chia cắt Đại Việt thành Đàng trong và Đàng Ngoài trong giai đoạn Trịnh - Nguyễn phân tranh?",
        options: ["Sông Cửu Long", "Sông Gianh (Quảng Bình)", "Đèo Hải Vân", "Sông Hồng"],
        correct: 1
    },
    {
        question: "Phong trào đấu tranh chống Pháp nào diễn ra trên quy mô rộng lớn, kéo dài từ năm 1885 đến 1896, với khẩu hiệu 'Phò vua, cứu nước'?",
        options: ["Phong trào Cần Vương", "Phong trào Duy Tân", "Việt Nam Quang phục hội", "Khởi nghĩa Yên Thế"],
        correct: 0
    },
    {
        question: "Mặt trận nào được thành lập năm 1941, có vai trò tập hợp lực lượng toàn dân, chuẩn bị cho cuộc tổng khởi nghĩa giành chính quyền năm 1945?",
        options: ["Mặt trận Liên Việt", "Mặt trận Việt Minh", "Mặt trận Dân chủ Đông Dương", "Mặt trận Thống nhất Phản đế"],
        correct: 1
    },
    {
        question: "Sự kiện nào tạo ra 'thời cơ chín muồi' để Đảng Cộng sản Việt Nam phát động Tổng khởi nghĩa giành chính quyền trong tháng 8/1945?",
        options: ["Liên Xô đánh bại phát xít Đức", "Nhật Bản đầu hàng Đồng Minh không điều kiện", "Quân Đồng minh đổ bộ vào Đông Dương", "Nhật đảo chính Pháp (9/3/1945)"],
        correct: 1
    },
    {
        question: "Chiến thắng nào năm 1954 đã kết thúc hoàn toàn cuộc kháng chiến chống Pháp?",
        options: ["Ấp Bắc", "Điện Biên Phủ", "Hà Nội 12 ngày đêm", "Bình Giã"],
        correct: 1
    },
    {
        question: "Hiệp định Genève năm 1954 đã quy định lấy sông nào làm ranh giới chia cắt tạm thời hai miền Nam - Bắc Việt Nam?",
        options: ["Sông Bến Hải", "Sông Đồng Nai", "Sông Hồng", "Sông Sài Gòn"],
        correct: 0
    },
    {
        question: "Cuộc chiến tranh nào chống lại đế quốc Mỹ và chính quyền Sài Gòn, kéo dài từ năm 1954 đến 1975?",
        options: ["Kháng chiến chống Pháp", "Chiến tranh thế giới thứ hai", "Kháng chiến chống Mỹ", "Chiến tranh Lạnh"],
        correct: 2
    },
    {
        question: "Địa danh nào ở Quảng Trị từng là ranh giới chia cắt hai miền Nam - Bắc trong suốt thời kỳ chiến tranh?",
        options: ["Vĩ tuyến 16", "Vĩ tuyến 17", "Vĩ tuyến 18", "Vĩ tuyến 19"],
        correct: 1
    },
    {
        question: "Hiệp định nào được ký kết năm 1973, công nhận độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ của Việt Nam, đồng thời quy định Mỹ rút quân?",
        options: ["Hiệp định Sơ bộ", "Hiệp định Paris", "Hiệp định Geneve", "Hiệp ước Nhâm Tuất"],
        correct: 1
    },
    {
        question: "Dinh Độc Lập (nay là Dinh Thống Nhất) tại Sài Gòn được xây dựng dưới thời chính quyền nào?",
        options: ["Pháp thuộc", "Việt Nam Cộng hòa", "Nhà Nguyễn", "Việt Nam Dân chủ Cộng hòa"],
        correct: 1
    },
    {
        question: "Chiến dịch quân sự nào đã giải phóng hoàn toàn miền Nam và thống nhất đất nước?",
        options: ["Chiến dịch Tây Nguyên", "Chiến dịch Hồ Chí Minh", "Chiến dịch Đường 9", "Chiến dịch Biên giới"],
        correct: 1
    },
    {
        question: "Thời kỳ nào trong lịch sử Việt Nam được gọi là 'Thời kỳ Đổi Mới'?",
        options: ["Từ sau Cách mạng tháng Tám 1945", "Từ Đại hội Đảng lần thứ VI năm 1986", "Từ sau Hiệp định Gevene 1954", "Từ khi Việt Nam gia nhập WTO năm 2007"],
        correct: 1
    },
    {
        question: "Tổng thống cuối cùng của Việt Nam Cộng hòa, người đã tuyên bố đầu hàng vào ngày 30/04/1975, là ai?",
        options: ["Nguyễn Văn Thiệu", "Ngô Đình Diệm", "Dương Văn Minh", "Trần Văn Hương"],
        correct: 2
    }
];

// Biến toàn cục
let currentQuestionIndex = 0;
let selectedQuestions = [];
let userAnswers = [];
let score = 0;

// Danh sách quà khả dụng (mỗi quà có tên và đường dẫn ảnh)
const GIFT_POOL = [
    { id: 1, name: 'Bút bi in logo bảo tàng', image: './imageGift/butbi.jpg', code: 'BTKN2024' },
    { id: 2, name: 'Móc khóa lưu niệm', image: './imageGift/mockhoa.jpg' , code: 'MCK2024'},
    { id: 3, name: 'Sổ tay', image: './imageGift/sotay.png' , code: 'ST2024'},
    { id: 4, name: 'Túi vải', image: './imageGift/tui.png' , code: 'TV2024'},
    { id: 5, name: 'Miếng lót ly', image: './imageGift/download.jpg' , code: 'AH2024'},
    { id: 6, name: 'Bưu thiếp chủ đề "Sài Gòn Xưa', image: './imageGift/buuthiep.jpg' , code: 'ATH2024'},
    { id: 7, name: 'Ảnh chân dung lịch sử anh hùng dân tộc', image: './imageGift/anhhunglichsu.jpg' , code: 'V502024'},
    { id: 8, name: 'Nam châm hình trống đồng', image: './imageGift/namcham.jpg' , code: 'V202024'},
    { id: 9, name: 'Gương gỗ cầm tay', image: './imageGift/guonggo.jpg' , code: 'V102024'},
    { id: 10, name: 'Túi đựng bút', image: './imageGift/tuidungbut.jpg' , code: 'TLN2024'}

];

// Bộ quà hiện tại của lần chơi (5 món ngẫu nhiên)
let currentGiftSet = [];

// Thông tin prize lưu vào localStorage khi người dùng thắng
const PRIZE_STORAGE_KEY = 'minigamePrize';

// Giới hạn số lần chơi lại
const MAX_REPLAY_COUNT = 1; // chỉ được chơi lại 1 lần
const REPLAY_COUNT_KEY = 'minigameReplayCount';

// Cơ chế giới hạn quà trong ngày
const DAILY_GIFT_LIMIT = 30;
const GIFT_STORAGE_KEY = 'dailyGifts';

// Khởi tạo hệ thống quà tặng
function initGiftSystem() {
    const today = new Date().toDateString();
    const giftData = getGiftData();
    
    // Nếu là ngày mới, reset số quà
    if (giftData.date !== today) {
        giftData.date = today;
        giftData.givenGifts = 0;
        saveGiftData(giftData);
    }
    
    // Hiển thị số quà còn lại
    updateGiftCounter();
}

// Lấy dữ liệu quà từ localStorage
function getGiftData() {
    const stored = localStorage.getItem(GIFT_STORAGE_KEY);
    if (stored) {
        return JSON.parse(stored);
    }
    return {
        date: new Date().toDateString(),
        givenGifts: 0
    };
}

// Lưu dữ liệu quà vào localStorage
function saveGiftData(giftData) {
    localStorage.setItem(GIFT_STORAGE_KEY, JSON.stringify(giftData));
}

// Cập nhật hiển thị số quà còn lại
function updateGiftCounter() {
    const giftData = getGiftData();
    const remainingGifts = DAILY_GIFT_LIMIT - giftData.givenGifts;
    
    // Tìm hoặc tạo element hiển thị số quà
    let giftCounter = document.getElementById('giftCounter');
    if (!giftCounter) {
        giftCounter = document.createElement('div');
        giftCounter.id = 'giftCounter';
        giftCounter.style.cssText = `
            background: linear-gradient(135deg, #ff6b6b, #ee5a24);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-weight: bold;
            text-align: center;
            margin-bottom: 1rem;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            animation: pulse 2s infinite;
        `;
        
        // Thêm animation CSS
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
        
        // Chèn vào sau quiz-header
        const quizHeader = document.querySelector('.quiz-header');
        quizHeader.parentNode.insertBefore(giftCounter, quizHeader.nextSibling);
    }
    
    if (remainingGifts > 0) {
        giftCounter.innerHTML = `
            <i class="fas fa-gift" style="margin-right: 0.5rem;"></i>
            Còn lại ${remainingGifts}/${DAILY_GIFT_LIMIT} phần quà hôm nay
        `;
        giftCounter.style.display = 'block';
    } else {
        giftCounter.innerHTML = `
            <i class="fas fa-exclamation-triangle" style="margin-right: 0.5rem;"></i>
            Đã hết phần quà hôm nay! Hãy quay lại vào ngày mai
        `;
        giftCounter.style.background = 'linear-gradient(135deg, #ffa726, #ff9800)';
    }
}

// Kiểm tra xem còn quà không
function hasGiftsRemaining() {
    const giftData = getGiftData();
    return giftData.givenGifts < DAILY_GIFT_LIMIT;
}

// Tặng quà (tăng số quà đã tặng)
function giveGift() {
    const giftData = getGiftData();
    giftData.givenGifts++;
    saveGiftData(giftData);
    updateGiftCounter();
}

// Khởi tạo minigame
function initMinigame() {
    // Khởi tạo hệ thống quà tặng
    initGiftSystem();
    // Nếu người chơi đã thắng trước đó, chỉ hiển thị phần quà đã nhận
    const prevPrize = getStoredPrize();
    if (prevPrize && prevPrize.awarded) {
        showStoredPrize(prevPrize);
        return;
    }

    // Chọn ngẫu nhiên 5 câu hỏi từ bộ 30 câu
    selectedQuestions = getRandomQuestions(5);
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Lấy 5 quà ngẫu nhiên cho lần chơi này (không trùng nhau)
    currentGiftSet = getRandomGifts(5);
    
    // Hiển thị câu hỏi đầu tiên
    showQuestion();
}

// Chọn ngẫu nhiên n câu hỏi
function getRandomQuestions(n) {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Chọn ngẫu nhiên n quà (không trùng nhau) từ GIFT_POOL
function getRandomGifts(n) {
    const shuffled = [...GIFT_POOL].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

// Lưu prize (object) vào localStorage
function saveStoredPrize(prizeObj) {
    localStorage.setItem(PRIZE_STORAGE_KEY, JSON.stringify(prizeObj));
}

// Lấy prize đã lưu (nếu có)
function getStoredPrize() {
    const raw = localStorage.getItem(PRIZE_STORAGE_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

// Replay count helpers (lưu số lần người chơi đã bấm "Chơi lại")
function getReplayCount() {
    const raw = localStorage.getItem(REPLAY_COUNT_KEY);
    const n = raw ? parseInt(raw, 10) : 0;
    return isNaN(n) ? 0 : n;
}

function incrementReplayCount() {
    const n = getReplayCount() + 1;
    localStorage.setItem(REPLAY_COUNT_KEY, String(n));
    return n;
}

function resetReplayCount() {
    localStorage.removeItem(REPLAY_COUNT_KEY);
}

// Hiển thị phần quà đã lưu (người chơi đã thắng trước đó)
function showStoredPrize(prize) {
    // Ẩn quiz
    const quizContent = document.getElementById('quizContent');
    const resultContainer = document.getElementById('resultContainer');
    if (quizContent) quizContent.style.display = 'none';
    if (!resultContainer) return;

    let html = `
        <div class="result-title result-success">
            <i class="fas fa-trophy"></i> Bạn đã nhận quà
        </div>
        <div class="score-display">Bạn đã nhận phần quà trước đó và không được chơi lại nữa</div>
        <p style="font-size: 1.1rem; margin: 1rem 0;">Phần quà của bạn:</p>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;align-items:center;">
            <div style="width:160px;">
                <img src="${prize.image}" alt="${prize.name}" style="width:100%;border-radius:12px;">
            </div>
            <div style="flex:1;">
                <h3 style="margin:0 0 0.5rem 0;">${prize.name}</h3>
                <p style="color:#666;margin:0;">Cảm ơn bạn đã tham gia! Hãy đăng ký vé đến tham quan bảo tàng và nhận quà nhé</p>
            </div>
        </div>
        <div style="margin-top:1rem;">
            <a href="index.html" class="home-btn"><i class="fas fa-home"></i> Về trang chủ</a>
        </div>
    `;

    resultContainer.innerHTML = html;
    resultContainer.style.display = 'block';
}

// Hiển thị câu hỏi
function showQuestion() {
    // Kiểm tra xem còn quà không trước khi hiển thị câu hỏi
    if (!hasGiftsRemaining()) {
        showNoGiftsMessage();
        return;
    }
    
    const question = selectedQuestions[currentQuestionIndex];
    const quizContent = document.getElementById('quizContent');
    const questionCounter = document.getElementById('questionCounter');
    const progressBar = document.getElementById('progressBar');
    
    // Cập nhật counter và progress bar
    questionCounter.textContent = `Câu hỏi ${currentQuestionIndex + 1}/5`;
    progressBar.style.width = `${((currentQuestionIndex + 1) / 5) * 100}%`;
    
    // Tạo HTML cho câu hỏi
    let html = `
        <div class="question-text">
            ${question.question}
        </div>
        <div class="answer-options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <div class="answer-option" onclick="selectAnswer(${index})">
                <div class="option-letter">${String.fromCharCode(65 + index)}</div>
                <div class="option-text">${option}</div>
            </div>
        `;
    });
    
    html += `
        </div>
        <button class="next-btn" id="nextBtn" onclick="nextQuestion()" disabled>
            ${currentQuestionIndex === 4 ? 'Xem kết quả' : 'Câu tiếp theo'}
        </button>
    `;
    
    quizContent.innerHTML = html;
}

// Hiển thị thông báo hết quà
function showNoGiftsMessage() {
    const quizContent = document.getElementById('quizContent');
    const questionCounter = document.getElementById('questionCounter');
    const progressBar = document.getElementById('progressBar');
    
    // Ẩn progress bar và counter
    questionCounter.style.display = 'none';
    progressBar.style.display = 'none';
    
    quizContent.innerHTML = `
        <div style="text-align: center; padding: 3rem 2rem;">
            <div style="font-size: 4rem; color: #ff6b6b; margin-bottom: 1rem;">
                <i class="fas fa-gift"></i>
            </div>
            <h2 style="color: #ff6b6b; margin-bottom: 1rem;">
                Đã hết phần quà hôm nay!
            </h2>
            <p style="font-size: 1.2rem; color: #666; margin-bottom: 2rem;">
                Chúng tôi đã tặng hết ${DAILY_GIFT_LIMIT} phần quà trong ngày hôm nay.
            </p>
            <div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 15px; padding: 1.5rem; margin: 2rem 0;">
                <i class="fas fa-clock" style="color: #856404; margin-right: 0.5rem;"></i>
                <strong style="color: #856404;">Hãy quay lại vào ngày mai để có cơ hội nhận quà!</strong>
            </div>
            <p style="color: #888; font-size: 1rem;">
                Mỗi ngày chúng tôi sẽ tặng ${DAILY_GIFT_LIMIT} phần quà cho những người trả lời đúng hết 5 câu hỏi.
            </p>
        </div>
    `;
}

// Chọn đáp án
function selectAnswer(answerIndex) {
    // Xóa selection cũ
    document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Thêm selection mới
    document.querySelectorAll('.answer-option')[answerIndex].classList.add('selected');
    
    // Lưu đáp án của người dùng
    userAnswers[currentQuestionIndex] = answerIndex;
    
    // Hiển thị đáp án đúng và sai ngay lập tức
    showAnswerFeedback(answerIndex);
    
    // Kích hoạt nút Next
    document.getElementById('nextBtn').disabled = false;
}

// Hiển thị phản hồi đáp án
function showAnswerFeedback(selectedAnswerIndex) {
    const question = selectedQuestions[currentQuestionIndex];
    const correctAnswerIndex = question.correct;
    
    // Đánh dấu đáp án đúng
    document.querySelectorAll('.answer-option')[correctAnswerIndex].classList.add('correct');
    
    // Nếu người dùng chọn sai, đánh dấu đáp án sai
    if (selectedAnswerIndex !== correctAnswerIndex) {
        document.querySelectorAll('.answer-option')[selectedAnswerIndex].classList.add('incorrect');
    }
    
    // Vô hiệu hóa tất cả các đáp án để không thể chọn lại
    document.querySelectorAll('.answer-option').forEach(option => {
        option.style.pointerEvents = 'none';
    });
    
    // Hiển thị thông báo kết quả
    showAnswerMessage(selectedAnswerIndex === correctAnswerIndex);
}

// Hiển thị thông báo đáp án đúng/sai
function showAnswerMessage(isCorrect) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        text-align: center;
        margin: 1rem 0;
        padding: 1rem;
        border-radius: 10px;
        font-weight: bold;
        font-size: 1.1rem;
        animation: fadeIn 0.5s ease-in-out;
    `;
    
    if (isCorrect) {
        messageDiv.innerHTML = `
            <i class="fas fa-check-circle" style="color: #28a745; margin-right: 0.5rem;"></i>
            <span style="color: #28a745;">Chính xác!</span>
        `;
        messageDiv.style.backgroundColor = '#d4edda';
        messageDiv.style.border = '2px solid #28a745';
    } else {
        messageDiv.innerHTML = `
            <i class="fas fa-times-circle" style="color: #dc3545; margin-right: 0.5rem;"></i>
            <span style="color: #dc3545;">Sai rồi!</span>
        `;
        messageDiv.style.backgroundColor = '#f8d7da';
        messageDiv.style.border = '2px solid #dc3545';
    }
    
    // Thêm animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
    
    const answerOptions = document.querySelector('.answer-options');
    answerOptions.parentNode.insertBefore(messageDiv, answerOptions.nextSibling);
}

// Chuyển sang câu hỏi tiếp theo
function nextQuestion() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResults();
    }
}

// Hiển thị kết quả
function showResults() {
    // Tính điểm
    score = 0;
    selectedQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            score++;
        }
    });
    
    // Ẩn quiz content
    document.getElementById('quizContent').style.display = 'none';
    
    // Hiển thị kết quả
    const resultContainer = document.getElementById('resultContainer');
    let resultHtml = '';
    
    if (score === 5) {
        // Kiểm tra xem còn quà không
        if (hasGiftsRemaining()) {
            // Còn quà - chọn 5 quà hiện tại (nếu chưa có) và trao 1 quà ngẫu nhiên trong số đó
            if (!currentGiftSet || currentGiftSet.length < 5) {
                currentGiftSet = getRandomGifts(5);
            }

            // Chọn 1 món trong currentGiftSet làm phần thưởng thực tế
            const awardedIndex = Math.floor(Math.random() * currentGiftSet.length);
            const awarded = currentGiftSet[awardedIndex];

            // Tăng bộ đếm quà và lưu phần quà đã trao cho người chơi (không cho phép chơi lại)
            giveGift();
            saveStoredPrize({ awarded: true, id: awarded.id, name: awarded.name, image: awarded.image, date: new Date().toISOString() });
            // Hiển thị duy nhất món quà được trao
            resultHtml = `
                <div class="result-title result-success">
                    <i class="fas fa-trophy"></i> Chúc mừng bạn!
                </div>
                <div class="score-display">Bạn đã trả lời đúng ${score}/5 câu hỏi</div>
                <p style="font-size: 1.2rem; margin: 1rem 0;">Bạn đã giành được phần quà từ Bảo tàng Lịch sử TP.HCM!</p>
                <div style="display:flex;gap:1rem;align-items:center;margin-top:1rem;">
                    <div style="width:180px;">
                        <img src="${awarded.image}" alt="${awarded.name}" style="width:100%;border-radius:12px;object-fit:cover;">
                    </div>
                    <div>
                        <h3 style="margin:0 0 0.5rem 0;">${awarded.name}</h3>
                        <h4 style="margin:0 0 0.5rem 0;">Mã quà: ${awarded.code}</h4>
                        <p style="color:#666;margin:0;">Phần quà đã được ghi nhận trong hệ thống. Hãy đăng ký vé đến tham quan bảo tàng và nhận quà nhé</p>
                    </div>
                </div>
            `;
        } else {
            // Hết quà - hiển thị thông báo hết quà
            resultHtml = `
                <div class="result-title result-success">
                    <i class="fas fa-trophy"></i> Chúc mừng bạn!
                </div>
                <div class="score-display">
                    Bạn đã trả lời đúng ${score}/5 câu hỏi
                </div>
                <div style="background: #fff3cd; border: 2px solid #ffc107; border-radius: 10px; padding: 1rem; margin: 1rem 0;">
                    <i class="fas fa-exclamation-triangle" style="color: #856404; margin-right: 0.5rem;"></i>
                    <strong style="color: #856404;">Rất tiếc! Đã hết phần quà hôm nay.</strong>
                </div>
                <p style="font-size: 1.1rem; color: #666;">
                    Bạn đã trả lời đúng hết các câu hỏi nhưng không may mắn nhận được phần quà. 
                    Hãy quay lại vào ngày mai để có cơ hội nhận quà nhé!
                </p>
                <div style="margin: 2rem 0;">
                    <i class="fas fa-calendar-alt" style="font-size: 3rem; color: #911414;"></i>
                </div>
            `;
        }
    } else {
        // Sai - hiển thị thông báo chúc may mắn
        resultHtml = `
            <div class="result-title result-fail">
                <i class="fas fa-heart"></i> Chúc bạn may mắn lần sau!
            </div>
            <div class="score-display">
                Bạn đã trả lời đúng ${score}/5 câu hỏi
            </div>
            <p style="font-size: 1.2rem; margin: 1rem 0;">
                Bạn đã có thêm 1 lượt chơi miễn phí để nhận phần quà từ Bảo tàng Lịch sử TP.HCM!
            </p>
            <div style="margin: 2rem 0;">
                <i class="fas fa-redo" style="font-size: 3rem; color: #911414;"></i>
            </div>
        `;
    }
    
    resultHtml += `
        <a href="index.html" class="home-btn">
            <i class="fas fa-home"></i> Về trang chủ
        </a>
        <button class="home-btn" onclick="playAgain()" style="margin-left: 1rem;">
            <i class="fas fa-redo"></i> Chơi lại
        </button>
    `;
    
    resultContainer.innerHTML = resultHtml;
    resultContainer.style.display = 'block';
}

// Chơi lại
function playAgain() {
    // Nếu người chơi đã thắng trước đó, không cho chơi lại — chỉ hiện phần quà đã nhận
    const prevPrize = getStoredPrize();
    if (prevPrize && prevPrize.awarded) {
        showStoredPrize(prevPrize);
        return;
    }

    // Kiểm tra số lần đã chơi lại
    const replayCount = getReplayCount();
    if (replayCount >= MAX_REPLAY_COUNT) {
        // Hiển thị thông báo không còn quyền chơi lại
        const resultContainer = document.getElementById('resultContainer');
        if (resultContainer) {
            resultContainer.innerHTML = `
                <div class="result-title result-fail">
                    <i class="fas fa-ban"></i> Bạn đã hết số lần chơi lại
                </div>
                <div class="score-display">Bạn đã sử dụng hết ${MAX_REPLAY_COUNT} lần chơi lại.</div>
                <p style="font-size:1.1rem;color:#666;">Cảm ơn bạn đã tham gia! Hãy quay lại vào ngày mai nhé.</p>
                <div style="margin-top:1rem;">
                    <a href="index.html" class="home-btn"><i class="fas fa-home"></i> Về trang chủ</a>
                </div>
            `;
            resultContainer.style.display = 'block';
        } else {
            alert(`Bạn đã sử dụng hết ${MAX_REPLAY_COUNT} lần chơi lại.`);
        }
        return;
    }

    // Tăng bộ đếm chơi lại rồi cho phép chơi
    incrementReplayCount();

    // Reset các biến để chơi lại
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;

    // Ẩn kết quả và hiển thị lại quiz
    const resultContainer = document.getElementById('resultContainer');
    const quizContent = document.getElementById('quizContent');
    if (resultContainer) resultContainer.style.display = 'none';
    if (quizContent) quizContent.style.display = 'block';

    // Khởi tạo lại minigame (sẽ random lại câu hỏi và bộ quà)
    initMinigame();
}

// Hàm để reset quà trong ngày (chỉ để test)
function resetDailyGifts() {
    const giftData = {
        date: new Date().toDateString(),
        givenGifts: 0
    };
    saveGiftData(giftData);
    updateGiftCounter();
    initMinigame();
}

// Hàm để xóa prize đã lưu (chỉ để test)
function resetStoredPrize() {
    localStorage.removeItem(PRIZE_STORAGE_KEY);
    // Khởi tạo lại để phản ánh thay đổi
    initMinigame();
}

// Hàm để reset replay count (chỉ để test)
function resetReplayCountForTest() {
    resetReplayCount();
    // Khởi tạo lại để phản ánh thay đổi
    initMinigame();
}

// Thêm nút reset quà vào console (chỉ để test)
console.log('Để reset quà trong ngày, gõ: resetDailyGifts()');

document.addEventListener('DOMContentLoaded', function() {
    initMinigame();
});
