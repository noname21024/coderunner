// Languages Configuration
const LANGUAGES = {
    code: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Java', 'C++', 'SQL', 'HTML'],
    text: ['English', 'Vietnamese', 'French', 'German', 'Spanish', 'Japanese', 'Korean', 'Chinese', 'Russian']
};

// Word Lists
const ENGLISH_WORDS = [
    "the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
    "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
    "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
    "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us",
    "system", "program", "code", "data", "web", "design", "user", "interface", "cloud", "server", "client", "browser", "script", "style", "logic", "error", "debug", "compile", "runtime", "memory"
];

const VIETNAMESE_WORDS = [
    "là", "và", "của", "một", "có", "những", "trong", "được", "người", "không", "cho", "khi", "về", "đến", "với", "tại", "này", "đã", "như", "làm",
    "từ", "nhiều", "ra", "cũng", "các", "nhưng", "rất", "để", "lại", "sẽ", "theo", "trên", "việc", "đó", "hãy", "nếu", "bạn", "thì", "đang", "còn",
    "mà", "năm", "phải", "cách", "khác", "đi", "ngày", "chỉ", "hai", "mới", "hơn", "vào", "muốn", "biết", "mình", "cùng", "giờ", "hết", "bởi", "nơi",
    "lập", "trình", "máy", "tính", "dữ", "liệu", "mạng", "phần", "mềm", "kỹ", "thuật", "công", "nghệ", "thông", "tin", "ứng", "dụng", "phát", "triển", "thiết", "kế",
    "học", "tập", "thực", "hành", "kiến", "thức", "tương", "lai", "thế", "giới", "kết", "nối", "sáng", "tạo", "đam", "mê", "thành", "công", "giải", "pháp"
];

const FRENCH_WORDS = [
    "le", "de", "un", "à", "être", "et", "en", "avoir", "que", "pour", "dans", "ce", "il", "qui", "ne", "sur", "se", "pas", "plus", "pouvoir",
    "par", "je", "avec", "tout", "faire", "son", "mettre", "autre", "on", "mais", "nous", "comme", "ou", "si", "leur", "y", "dire", "elle", "devoir", "avant",
    "deux", "même", "prendre", "aussi", "celui", "donner", "bien", "où", "fois", "vous", "encore", "nouveau", "aller", "cela", "entre", "premier", "vouloir", "déjà", "grand", "mon",
    "me", "moins", "aucun", "lui", "temps", "très", "savoir", "falloir", "voir", "quelque", "sans", "raison", "notre", "dont", "non", "an", "monde", "jour", "monsieur", "demander"
];

const GERMAN_WORDS = [
    "der", "die", "und", "in", "den", "von", "zu", "das", "mit", "sich", "des", "auf", "für", "ist", "im", "dem", "nicht", "ein", "eine", "als",
    "auch", "es", "an", "werden", "aus", "er", "hat", "dass", "sie", "nach", "wird", "bei", "einer", "um", "am", "sind", "noch", "wie", "einem", "über",
    "einen", "so", "zum", "war", "haben", "nur", "oder", "aber", "vor", "zur", "bis", "mehr", "durch", "man", "sein", "wurde", "sei", "prozent", "hatte", "kann",
    "gegen", "vom", "können", "schon", "wenn", "habe", "seine", "mark", "ihre", "dann", "unter", "wir", "soll", "ich", "eines", "jahr", "zwei", "diese", "dieser", "dabei"
];

const SPANISH_WORDS = [
    "de", "la", "que", "el", "en", "y", "a", "los", "se", "del", "las", "un", "por", "con", "no", "una", "su", "para", "es", "al",
    "lo", "como", "más", "o", "pero", "sus", "le", "ha", "me", "si", "sin", "sobre", "este", "ya", "entre", "cuando", "todo", "esta", "ser", "son",
    "dos", "también", "fue", "había", "era", "muy", "años", "hasta", "desde", "está", "mi", "porque", "qué", "sólo", "han", "yo", "hay", "vez", "puede", "todos",
    "así", "nos", "ni", "parte", "tiene", "él", "uno", "donde", "bien", "tiempo", "mismo", "ese", "ahora", "cada", "e", "vida", "otro", "después", "te", "otros"
];

const JAPANESE_WORDS = [
    "の", "に", "は", "を", "た", "が", "で", "て", "と", "し", "れ", "さ", "ある", "いる", "も", "する", "から", "な", "こと", "として",
    "い", "や", "れる", "など", "なっ", "ない", "この", "ため", "その", "あっ", "よう", "また", "もの", "という", "あり", "まで", "られ", "なる", "へ", "か",
    "だ", "これ", "によって", "により", "おり", "より", "による", "ず", "なり", "られる", "において", "ば", "なかっ", "なく", "しかし", "について", "せ", "だっ", "その後", "できる",
    "それ", "う", "ので", "なお", "のみ", "でき", "き", "つ", "における", "および", "いう", "さらに", "でも", "ら", "たり", "その他", "に関する", "たち", "ます", "ん"
];

const KOREAN_WORDS = [
    "것", "하다", "있다", "수", "나", "그", "이", "사람", "우리", "않다", "보다", "등", "때", "거", "가다", "년", "한", "말", "일", "이렇다",
    "위하다", "때문", "되다", "주다", "사회", "대하다", "문제", "문화", "살다", "생각하다", "어떻다", "없다", "속", "모든", "그렇다", "다시", "만들다", "경우", "일", "자신",
    "정도", "어떤", "받다", "잘", "그녀", "먹다", "자신", "문화", "원", "생각", "어떻게", "현상", "지역", "다른", "모습", "개", "중요하다", "남", "돈", "사실",
    "이런", "점", "과정", "사람들", "집", "국가", "소리", "시간", "정치", "경제", "이야기", "친구", "사랑", "지금", "말하다", "교육", "예술", "기술", "세계", "학교"
];

const CHINESE_WORDS = [
    "的", "一", "是", "在", "不", "了", "有", "和", "人", "这", "中", "大", "为", "上", "个", "国", "我", "以", "要", "他",
    "时", "来", "用", "们", "生", "到", "作", "地", "于", "出", "就", "分", "对", "成", "会", "可", "主", "发", "年", "动",
    "同", "工", "也", "能", "下", "过", "子", "说", "产", "种", "面", "而", "方", "后", "多", "定", "行", "学", "法", "所",
    "民", "得", "经", "十", "三", "之", "进", "着", "等", "部", "度", "家", "电", "力", "里", "如", "水", "化", "高", "自"
];

const RUSSIAN_WORDS = [
    "и", "в", "не", "на", "я", "быть", "он", "с", "что", "а", "по", "это", "она", "этот", "к", "но", "они", "мы", "как", "из",
    "у", "который", "то", "за", "свой", "что", "весь", "год", "от", "так", "о", "для", "ты", "же", "все", "тот", "мочь", "вы", "человек", "такой",
    "его", "сказать", "только", "или", "еще", "бы", "себя", "один", "как", "уже", "до", "время", "если", "сам", "когда", "другой", "вот", "говорить", "наш", "мой",
    "знать", "стать", "при", "чтобы", "дело", "жизнь", "кто", "первый", "очень", "два", "день", "ее", "новый", "рука", "даже", "во", "со", "раз", "где", "там"
];

// Helper Functions
function generateRandomText(language, wordCount) {
    let source = ENGLISH_WORDS;

    switch (language) {
        case 'Vietnamese': source = VIETNAMESE_WORDS; break;
        case 'French': source = FRENCH_WORDS; break;
        case 'German': source = GERMAN_WORDS; break;
        case 'Spanish': source = SPANISH_WORDS; break;
        case 'Japanese': source = JAPANESE_WORDS; break;
        case 'Korean': source = KOREAN_WORDS; break;
        case 'Chinese': source = CHINESE_WORDS; break;
        case 'Russian': source = RUSSIAN_WORDS; break;
        default: source = ENGLISH_WORDS;
    }

    const words = [];
    for (let i = 0; i < wordCount; i++) {
        const randomIndex = Math.floor(Math.random() * source.length);
        words.push(source[randomIndex]);
    }
    return words.join(' ');
}

function getDynamicLesson(language, wordCount) {
    return {
        id: `gen-${language}-${Date.now()}`,
        language: language,
        title: `Random ${language} (${wordCount} Words)`,
        code: generateRandomText(language, wordCount),
        type: 'text',
        difficulty: wordCount > 50 ? 'Hard' : 'Medium',
        timeLimit: Math.floor(wordCount * 1.2)
    };
}

// Leaderboard Logic
const MOCK_NAMES = [
    "Linus T.", "Ada L.", "Grace H.", "Ken T.", "Dennis R.",
    "Bjarne S.", "Guido R.", "James G.", "Tim B.L.", "Margaret H.",
    "Alan T.", "John v.N.", "Anders H.", "Brendan E.", "Rich H."
];

const LB_LANGUAGES = ["C", "C++", "Rust", "Go", "Python", "TypeScript", "Java", "Haskell", "Vim Script"];

const seededRandom = (seed) => {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
}

function generateDailyLeaderboard() {
    const today = new Date();
    const seedStr = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

    let seed = 0;
    for (let i = 0; i < seedStr.length; i++) {
        seed = ((seed << 5) - seed) + seedStr.charCodeAt(i);
        seed |= 0;
    }

    const entries = [];
    const count = 5 + Math.floor(Math.abs(seededRandom(seed)) * 6);

    for (let i = 0; i < count; i++) {
        const r1 = Math.abs(seededRandom(seed + i * 13));
        const r2 = Math.abs(seededRandom(seed + i * 29 + 1));
        const r3 = Math.abs(seededRandom(seed + i * 47 + 2));

        entries.push({
            id: `daily-${i}`,
            name: MOCK_NAMES[Math.floor(r1 * MOCK_NAMES.length)],
            wpm: 80 + Math.floor(r2 * 70),
            accuracy: 92 + Math.floor(r3 * 8),
            language: LB_LANGUAGES[Math.floor(r3 * LB_LANGUAGES.length)],
            date: new Date().toISOString(),
            isUser: false
        });
    }

    return entries.sort((a, b) => b.wpm - a.wpm);
}
