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

function buildTextLesson(language, wordCount) {
    return {
        id: `gen-${language}-${Date.now()}`,
        language,
        title: `Random ${language} (${wordCount} Words)`,
        code: generateRandomText(language, wordCount),
        type: 'text',
        difficulty: wordCount > 50 ? 'Hard' : 'Medium',
        timeLimit: Math.floor(wordCount * 1.2)
    };
}

const RUNNER_HANDLES = ['Atlas', 'Nova', 'Coda', 'Lumen', 'Echo', 'Vega', 'Quill', 'Flux'];
const HTTP_ENDPOINTS = ['/api/runs', '/api/leaderboard', '/api/pulse', '/api/stats', '/api/sessions'];
const SQL_TABLES = ['runs', 'snapshots', 'segments', 'sessions', 'insights'];
const HTML_COMPONENTS = ['stat-card', 'pulse-banner', 'feature-callout', 'gradient-panel'];

const MODE_TIME_TUNING = {
    STANDARD: { label: 'Standard', multiplier: 1 },
    SUDDEN_DEATH: { label: 'Sudden Death', multiplier: 0.85 },
    TIME_ATTACK: { label: 'Time Attack', multiplier: 0.75 }
};

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}

function buildRunEntries(count = 4) {
    return Array.from({ length: count }).map(() => ({
        name: pickRandom(RUNNER_HANDLES),
        wpm: randInt(78, 135),
        accuracy: randInt(92, 99)
    }));
}

function buildHtmlStats(count = 3) {
    return Array.from({ length: count }).map(() => ({
        title: pickRandom(['Top run', 'Avg speed', 'Consistency', 'Focus time', 'Best streak']),
        value: `${randInt(80, 140)} WPM`,
        caption: `Tracked from ${randInt(3, 9)} sessions`
    }));
}

const CODE_TEMPLATE_LIBRARY = {
    JavaScript: [
        {
            id: 'js-pulse-normalizer',
            title: 'Pulse Normalizer Utility',
            difficulty: 'Medium',
            baseTime: 80,
            builder: () => {
                const runs = buildRunEntries(4);
                const threshold = randInt(93, 97);
                const body = runs.map(run => `  { name: '${run.name}', wpm: ${run.wpm}, accuracy: ${run.accuracy} }`).join(',\n');
                return `const runs = [\n${body}\n];\n\nfunction normalizePulse(dataset) {\n  return dataset\n    .filter(run => run.accuracy >= ${threshold})\n    .map(run => ({ ...run, score: Math.round(run.wpm * run.accuracy / 100) }))\n    .sort((a, b) => b.score - a.score)\n    .slice(0, 3);\n}\n\nconsole.table(normalizePulse(runs));`;
            }
        },
        {
            id: 'js-async-ingest',
            title: 'Async Ingest Pipeline',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                const endpoint = pickRandom(HTTP_ENDPOINTS);
                return `async function hydratePulse(signal) {\n  const response = await fetch('${endpoint}', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json' },\n    body: JSON.stringify(signal)\n  });\n\n  if (!response.ok) {\n    throw new Error('Failed to hydrate pulse');\n  }\n\n  return response.json();\n}\n\nconst payload = {\n  runs: ${randInt(3, 8)},\n  mode: '${pickRandom(['standard', 'sudden_death', 'time_attack'])}'\n};\n\nhydratePulse(payload).then(console.log);`;
            }
        },
        {
            id: 'js-state-registry',
            title: 'State Registry Builder',
            difficulty: 'Medium',
            baseTime: 85,
            builder: () => {
                const registry = buildRunEntries(3).map(run => `  '${run.name.toLowerCase()}': {\n    wpm: ${run.wpm},\n    accuracy: ${run.accuracy}\n  }`).join(',\n');
                return `const registry = {\n${registry}\n};\n\nfunction promote(handle) {\n  const record = registry[handle];\n  if (!record) return null;\n  return { ...record, promotedAt: new Date().toISOString() };\n}\n\nconsole.log(promote('${pickRandom(RUNNER_HANDLES).toLowerCase()}'));`;
            }
        }
    ],
    TypeScript: [
        {
            id: 'ts-leaderboard-map',
            title: 'Leaderboard Mapper',
            difficulty: 'Medium',
            baseTime: 85,
            builder: () => {
                const runs = buildRunEntries(3);
                const rows = runs.map(run => `  { name: '${run.name}', wpm: ${run.wpm}, accuracy: ${run.accuracy} }`).join(',\n');
                return `type Run = { name: string; wpm: number; accuracy: number };\n\nconst runs: Run[] = [\n${rows}\n];\n\nconst grouped = runs.reduce<Record<string, Run[]>>((acc, run) => {\n  const bucket = run.accuracy >= ${randInt(94, 97)} ? 'focus' : 'retry';\n  acc[bucket] = acc[bucket] || [];\n  acc[bucket].push(run);\n  return acc;\n}, {});\n\nconsole.log(grouped);`;
            }
        },
        {
            id: 'ts-schema-diff',
            title: 'Schema Diff Helper',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                return `type Pulse = { id: string; wpm: number; accuracy: number };\n\nfunction diff(left: Pulse[], right: Pulse[]): Pulse[] {\n  const lookup = new Map(right.map(item => [item.id, item]));\n  return left.filter(item => {\n    const other = lookup.get(item.id);\n    return !other || other.wpm !== item.wpm;\n  });\n}\n\nconsole.log(diff([\n  { id: 'alpha', wpm: ${randInt(80, 110)}, accuracy: 98 },\n  { id: 'beta', wpm: ${randInt(82, 115)}, accuracy: 96 }\n], [\n  { id: 'alpha', wpm: ${randInt(90, 120)}, accuracy: 99 }\n]));`;
            }
        }
    ],
    Python: [
        {
            id: 'py-dataclass-filter',
            title: 'Dataclass Run Filter',
            difficulty: 'Medium',
            baseTime: 80,
            builder: () => {
                const runs = buildRunEntries(4);
                const rows = runs.map(run => `    Run(name='${run.name}', wpm=${run.wpm}, accuracy=${run.accuracy})`).join('\n');
                return `from dataclasses import dataclass\nfrom statistics import mean\n\n@dataclass\nclass Run:\n    name: str\n    wpm: int\n    accuracy: int\n\nruns = [\n${rows}\n]\n\nfiltered = [r for r in runs if r.accuracy >= ${randInt(93, 97)}]\nif filtered:\n    avg = mean(r.wpm for r in filtered)\n    print(f"Team avg: {avg:.1f} WPM")\nelse:\n    print('No qualifying runs yet')`;
            }
        },
        {
            id: 'py-async-meter',
            title: 'Async Meter Collector',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                return `import asyncio\n\nasync def fetch_metric(name: str) -> dict:\n    await asyncio.sleep(0.1)\n    return {"handle": name, "wpm": ${randInt(80, 125)}}\n\nasync def gather_pulse(handles):\n    results = await asyncio.gather(*(fetch_metric(h) for h in handles))\n    return sorted(results, key=lambda item: item['wpm'], reverse=True)\n\nprint(asyncio.run(gather_pulse(["atlas", "nova", "flux"])))`;
            }
        }
    ],
    Go: [
        {
            id: 'go-batch-split',
            title: 'Batch Splitter',
            difficulty: 'Medium',
            baseTime: 85,
            builder: () => {
                const runs = buildRunEntries(4);
                const rows = runs.map(run => `        {name: "${run.name}", wpm: ${run.wpm}}`).join(',\n');
                return `package main\n\nimport "fmt"\n\ntype run struct {\n    name string\n    wpm  int\n}\n\nfunc splitBatches(runs []run, size int) [][]run {\n    batches := [][]run{}\n    for size < len(runs) {\n        runs, batches = runs[size:], append(batches, runs[0:size])\n    }\n    batches = append(batches, runs)\n    return batches\n}\n\nfunc main() {\n    runs := []run{\n${rows}\n    }\n\n    for _, batch := range splitBatches(runs, ${randInt(2, 3)}) {\n        fmt.Println(batch)\n    }\n}`;
            }
        },
        {
            id: 'go-metric-channel',
            title: 'Metric Channel Fan-in',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                return `package main\n\nimport (\n    "fmt"\n    "time"\n)\n\nfunc pump(id string, out chan<- int) {\n    for i := 0; i < 3; i++ {\n        out <- ${randInt(70, 120)} + i\n        time.Sleep(50 * time.Millisecond)\n    }\n}\n\nfunc main() {\n    out := make(chan int)\n    go pump("alpha", out)\n    go pump("beta", out)\n\n    for i := 0; i < 6; i++ {\n        fmt.Println(<-out)\n    }\n}`;
            }
        }
    ],
    Rust: [
        {
            id: 'rs-focus-window',
            title: 'Focus Window Analyzer',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                const runs = buildRunEntries(4);
                const rows = runs.map(run => `        Run { name: "${run.name}", wpm: ${run.wpm}, accuracy: ${run.accuracy} },`).join('\n');
                return `struct Run {\n    name: &'static str,\n    wpm: u32,\n    accuracy: u8,\n}\n\nfn main() {\n    let runs = vec![\n${rows}\n    ];\n\n    let focus: Vec<&Run> = runs\n        .iter()\n        .filter(|run| run.accuracy >= ${randInt(94, 98)})\n        .collect();\n\n    if let Some(best) = focus.iter().max_by_key(|run| run.wpm) {\n        println!("Fastest: {} @ {} WPM", best.name, best.wpm);\n    } else {\n        println!("No focus runs recorded");\n    }\n}`;
            }
        },
        {
            id: 'rs-trend-fold',
            title: 'Trend Fold Calculator',
            difficulty: 'Medium',
            baseTime: 85,
            builder: () => {
                return `fn trend(window: &[u32]) -> Option<f32> {\n    if window.is_empty() {\n        return None;\n    }\n    let sum: u32 = window.iter().sum();\n    Some(sum as f32 / window.len() as f32)\n}\n\nfn main() {\n    let buffer = vec![${randInt(70, 110)}, ${randInt(85, 130)}, ${randInt(80, 120)}, ${randInt(90, 140)}];\n    match trend(&buffer) {\n        Some(avg) => println!("Trend avg: {:.1} WPM", avg),\n        None => println!("Buffer empty"),\n    }\n}`;
            }
        }
    ],
    Java: [
        {
            id: 'java-stream-summary',
            title: 'Stream Summary Job',
            difficulty: 'Medium',
            baseTime: 90,
            builder: () => {
                const runs = buildRunEntries(4);
                const rows = runs.map(run => `                new Run("${run.name}", ${run.wpm}, ${run.accuracy})`).join(',\n');
                return `import java.util.List;\n\npublic class PulseJob {\n    record Run(String name, int wpm, int accuracy) {}\n\n    public static void main(String[] args) {\n        List<Run> runs = List.of(\n${rows}\n        );\n\n        double avg = runs.stream()\n                .filter(run -> run.accuracy() >= ${randInt(94, 97)})\n                .mapToInt(Run::wpm)\n                .average()\n                .orElse(0);\n\n        System.out.printf("Squad avg: %.1f WPM%n", avg);\n    }\n}`;
            }
        },
        {
            id: 'java-scheduled-publisher',
            title: 'Scheduled Publisher',
            difficulty: 'Hard',
            baseTime: 100,
            builder: () => {
                return `import java.time.Instant;\nimport java.util.Timer;\nimport java.util.TimerTask;\n\npublic class Publisher {\n    public static void main(String[] args) {\n        Timer timer = new Timer();\n        timer.scheduleAtFixedRate(new TimerTask() {\n            @Override\n            public void run() {\n                System.out.println("Tick @ " + Instant.now());\n            }\n        }, 0, ${randInt(800, 1500)});\n    }\n}`;
            }
        }
    ],
    'C++': [
        {
            id: 'cpp-rolling-top',
            title: 'Rolling Top Tracker',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                const runs = buildRunEntries(4);
                const rows = runs.map(run => `    Run{"${run.name}", ${run.wpm}, ${run.accuracy}}`).join(',\n');
                return `#include <algorithm>\n#include <array>\n#include <iostream>\n#include <string>\n\nstruct Run {\n    std::string name;\n    int wpm;\n    int accuracy;\n};\n\nint main() {\n    std::array<Run, 4> runs{{\n${rows}\n    }};\n\n    std::sort(runs.begin(), runs.end(), [](const Run& a, const Run& b) {\n        return a.wpm > b.wpm;\n    });\n\n    for (const auto& run : runs) {\n        if (run.accuracy >= ${randInt(93, 97)}) {\n            std::cout << run.name << " -> " << run.wpm << " WPM" << std::endl;\n        }\n    }\n}\n`;
            }
        },
        {
            id: 'cpp-matrix-reducer',
            title: 'Matrix Reducer',
            difficulty: 'Medium',
            baseTime: 90,
            builder: () => {
                return `#include <array>\n#include <iostream>\n\nint main() {\n    std::array<int, 4> wpm{${randInt(80, 110)}, ${randInt(85, 120)}, ${randInt(90, 130)}, ${randInt(95, 140)}};\n    int total = 0;\n    for (auto value : wpm) {\n        total += value;\n    }\n    std::cout << "Average: " << total / wpm.size() << std::endl;\n}`;
            }
        }
    ],
    SQL: [
        {
            id: 'sql-ranked-window',
            title: 'Ranked Window Query',
            difficulty: 'Medium',
            baseTime: 85,
            builder: () => {
                const table = pickRandom(SQL_TABLES);
                return `WITH ranked_runs AS (\n  SELECT user_id, wpm, accuracy,\n         ROW_NUMBER() OVER (PARTITION BY user_id ORDER BY wpm DESC) AS rank\n  FROM ${table}\n  WHERE created_at::date = CURRENT_DATE\n)\nSELECT user_id, wpm, accuracy\nFROM ranked_runs\nWHERE rank <= ${randInt(2, 4)}\nORDER BY wpm DESC;`;
            }
        },
        {
            id: 'sql-rolling-average',
            title: 'Rolling Average Query',
            difficulty: 'Hard',
            baseTime: 95,
            builder: () => {
                const table = pickRandom(SQL_TABLES);
                return `SELECT bucket, AVG(wpm) AS avg_wpm\nFROM (\n  SELECT DATE_TRUNC('hour', created_at) AS bucket, wpm\n  FROM ${table}\n  WHERE created_at >= NOW() - INTERVAL '1 day'\n) t\nGROUP BY bucket\nORDER BY bucket ASC;`;
            }
        }
    ],
    HTML: [
        {
            id: 'html-pulse-grid',
            title: 'Pulse Grid Component',
            difficulty: 'Easy',
            baseTime: 70,
            builder: () => {
                const stats = buildHtmlStats(3).map(stat => `    <article class="stat-card">\n        <p class="label">${stat.title}</p>\n        <h3>${stat.value}</h3>\n        <p class="caption">${stat.caption}</p>\n    </article>`).join('\n');
                return `<section class="${pickRandom(HTML_COMPONENTS)}">\n${stats}\n</section>`;
            }
        },
        {
            id: 'html-marquee-feed',
            title: 'Marquee Feed',
            difficulty: 'Medium',
            baseTime: 80,
            builder: () => {
                const badges = RUNNER_HANDLES.map(handle => `<span>${handle} ${randInt(80, 140)} WPM</span>`).join('\n        ');
                return `<div class="marquee">\n    <div class="marquee__track">\n        ${badges}\n    </div>\n</div>`;
            }
        }
    ],
    default: [
        {
            id: 'generic-dataset',
            title: 'Generic Dataset Sketch',
            difficulty: 'Medium',
            baseTime: 80,
            builder: () => {
                const runs = buildRunEntries(3);
                return JSON.stringify(runs, null, 2);
            }
        }
    ]
};

function generateLesson(language, mode = 'STANDARD', options = {}) {
    const requestedType = options.type || 'code';

    if (requestedType === 'text' || (!LANGUAGES.code.includes(language) && LANGUAGES.text.includes(language))) {
        const wordCount = options.wordCount || 60;
        return buildTextLesson(language, wordCount);
    }

    const templatePool = CODE_TEMPLATE_LIBRARY[language] || CODE_TEMPLATE_LIBRARY.default;
    const template = pickRandom(templatePool);
    const modeConfig = MODE_TIME_TUNING[mode] || MODE_TIME_TUNING.STANDARD;
    const code = template.builder();

    return {
        id: `gen-${language}-${mode}-${Date.now()}`,
        language,
        title: `${template.title} (${modeConfig.label})`,
        code,
        type: 'code',
        difficulty: template.difficulty,
        timeLimit: Math.max(45, Math.round(template.baseTime * modeConfig.multiplier)),
        templateId: template.id
    };
}

function getDynamicLesson(language, wordCount) {
    return buildTextLesson(language, wordCount);
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
