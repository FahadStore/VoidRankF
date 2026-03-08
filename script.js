// ============================================================
// CHARACTER COLORS
// ============================================================
const CHAR_COLORS = {
  "ياماتو": "#4da3ff",
  "كوتا": "#f59e0b",
  "يوري": "#22c55e",
  "سايو": "#f472b6",
  "تاكيو": "#a78b68",
  "العجوز": "#94a3b8",
  "الرجل": "#c084fc",
  "المغامر": "#fb7185",
  "صاحب النزل": "#facc15",
  "الشاب": "#7dd3fc",
  "الحارس": "#8899b8",
  "هارو": "#fb923c",
  "كينجي": "#60a5fa",
  "الموظف": "#9ca3af",
  "المدرب": "#ef4444",
  "الطالب": "#cbd5e1",
  "الجهاز": "#67e8f9",
  "أكيرا":"#ff6b6b",
  "ساكورا":"#ff9ed6",
  "هانا":"#c4a7ff",
  "الوسيم":"#7dd3fc",
  "الفتاة":"#f0abfc",
  "الطلاب":"#cbd5e1",
"الملك": "#ffd700",
"النبيل": "#b8860b",
"الساحر": "#7c3aed",
"الطالبة": "#f9a8d4",
"الحارس الطويل": "#64748b",
"المرأة": "#f0abfc",
"الطفل": "#7dd3fc",
"القزم": "#d97706",
"القزمة": "#fbbf24",
"بروندور": "#b45309",
"غارون": "#78716c",
"تورك": "#a16207",
"فالدريك": "#9333ea",
"ليزارا": "#c026d3",
"دوركان": "#dc2626",
"زاريف": "#94a3b8",
"كورفيس": "#4b5563",
"النبيل الأول": "#b8860b",
"النبيل الثاني": "#92400e",
"النبيل الثالث": "#a16207",
"النبيل الرابع": "#78716c",
"القزم الثاني": "#ca8a04",
"القزم الثالث": "#eab308",
"الأم": "#f472b6",
};

const DEMON_CHARACTERS = new Set(["فالدريك","ليزارا","دوركان","زاريف","كورفيس"]);


// ============================================================
// CHARACTER PROFILES
// ============================================================

const CHARACTER_PROFILES = {
  "ياماتو": {
    label: "FIRST APPEARANCE",
    role: "بطل القصة / رجل من قرية كوزوها",
    rank: "F",
    fame: "غير معروف",
    powerLevel: 15,
    age: "30",
    affinity: "غير معروف",
    status: "حي",
    desc: "رجل مرح وكسول ظاهريا، يملك روحا خفيفة ولسانا ساخرا، لكنه يحمل حلما كبيرا في دخول أكاديمية كاغيتسورا للسحر رغم أنه بدأ متأخرا عن الآخرين.",
    traits: ["مرح", "اجتماعي", "كسول ظاهريا", "حالم", "عنيد"]
  },

  "كوتا": {
    label: "FIRST APPEARANCE",
    role: "طفل من قرية كوزوها",
    rank: "F",
    fame: "معروف في محيطه",
    powerLevel: 4,
    age: "طفل",
    affinity: "لا يوجد",
    status: "حي",
    desc: "طفل مشاغب يحب السخرية من ياماتو وإزعاجه، لكنه متعلق به ويؤمن بأنه سيصبح شخصا عظيما.",
    traits: ["مشاغب", "مرح", "فضولي"]
  },

  "يوري": {
    label: "FIRST APPEARANCE",
    role: "طفل من قرية كوزوها",
    rank: "F",
    fame: "معروف في محيطه",
    powerLevel: 3,
    age: "طفل",
    affinity: "لا يوجد",
    status: "حي",
    desc: "طفل هادئ ولطيف يرافق كوتا دائما ويشارك في المزاح مع ياماتو.",
    traits: ["هادئ", "لطيف", "وفي"]
  },

  "سايو": {
    label: "FIRST APPEARANCE",
    role: "امرأة من قرية كوزوها",
    rank: "F",
    fame: "معروف محليًا",
    powerLevel: 11,
    age: "غير معروف",
    affinity: "لا يوجد",
    status: "حية",
    desc: "امرأة عملية وصريحة في القرية، غالبا ما توبخ ياماتو بسبب كسله لكنها تهتم به.",
    traits: ["عملية", "صريحة", "صارمة"]
  },

  "تاكيو": {
    label: "FIRST APPEARANCE",
    role: "رجل من قرية كوزوها / داعم ياماتو",
    rank: "E",
    fame: "معروف محليًا",
    powerLevel: 34,
    age: "منتصف الخمسينات",
    affinity: "لا يوجد",
    status: "حي",
    desc: "رجل قوي البنية وجاد الطباع، يحترمه أهل القرية ويثق في ياماتو ويدعمه لتحقيق حلمه.",
    traits: ["جاد", "قوي", "موثوق"]
  },

  "هارو": {
    label: "FIRST APPEARANCE",
    role: "بائع حساء في العاصمة",
    rank: "F",
    fame: "معروف محليًا",
    powerLevel: 10,
    age: "منتصف الأربعينات",
    affinity: "لا يوجد",
    status: "حي",
    desc: "بائع حساء مرح ولطيف في شارع التجار داخل العاصمة. استقبل ياماتو بروح طيبة وقدم له وعاء حساء مجانا عندما عرف أنه يزور العاصمة لأول مرة.",
    traits: ["ودود", "خفيف الظل", "كريم", "عملي"]
  },

  "كينجي": {
    label: "FIRST APPEARANCE",
    role: "طالب في أكاديمية كاغيتسورا",
    rank: "C",
    fame: "غير معروف",
    powerLevel: 78,
    age: "24",
    affinity: "غير معروف",
    status: "حي",
    desc: "شاب هادئ يرتدي نظارات ويدرس في أكاديمية كاغيتسورا. يتحدث بصراحة وهدوء، ويبدو أكثر نضجا من أغلب الطلاب، وقد ساعد ياماتو في الوصول إلى قاعة التسجيل.",
    traits: ["هادئ", "صريح", "ذكي", "عملي", "متزن"]
  },

  "المدرب": {
    label: "FIRST APPEARANCE",
    role: "مدرب في أكاديمية كاغيتسورا",
    rank: "B",
    fame: "معروف داخل الأكاديمية",
    powerLevel: 120,
    age: "غير معروف",
    affinity: "غير معروف",
    status: "حي",
    desc: "رجل طويل يرتدي معطفا أسود، صوته عميق ونظرته حادة. يشرف على اختبارات الطلاب الجدد وتدريباتهم الأولى، ويبدو صارما وباردا في التعامل.",
    traits: ["صارم", "هادئ", "مراقب", "عملي", "قاسي"]
  },

  "أكيرا": {
  label: "FIRST APPEARANCE",
  role: "مدرب في أكاديمية كاغيتسورا",
  rank: "B",
  fame: "معروف داخل الأكاديمية",
  powerLevel: 120,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حي",
  desc: "مدرب صارم يقود تدريبات الطلاب الجدد في الأكاديمية. يتميز بصوت قوي ونظرة حادة تفرض الاحترام على الطلاب.",
  traits: ["صارم","قائد","هادئ","مراقب"]
},

"ساكورا": {
  label: "FIRST APPEARANCE",
  role: "مدربة في أكاديمية كاغيتسورا",
  rank: "B",
  fame: "معروفة داخل الأكاديمية",
  powerLevel: 110,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حية",
  desc: "مدربة في الأكاديمية تشرف على تدريبات الطلاب. تبدو هادئة في مظهرها لكن حضورها قوي بين المدربين.",
  traits: ["هادئة","صارمة","مركزة"]
},

"هانا": {
  label: "FIRST APPEARANCE",
  role: "طالبة في أكاديمية كاغيتسورا",
  rank: "غير معروف",
  fame: "غير معروف",
  powerLevel: 60,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حية",
  desc: "فتاة هادئة الملامح اقتربت من ياماتو عندما كان يقف وحيدا بدون فريق. تبدو لطيفة وخجولة، لكنها تخفي شيئا غامضا خلف ابتسامتها.",
  traits: ["هادئة","غامضة","لطيفة","ملاحِظة"]
},

"الحارس الطويل": {
  label: "FIRST APPEARANCE",
  role: "حارس شخصي / مرافق هانا",
  rank: "B",
  fame: "معروف داخل الأكاديمية",
  powerLevel: 130,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حي",
  desc: "حارس طويل وسيم الملامح وقوي البنية، يقف بجانب هانا كأنه يحميها. يتعامل مع ياماتو بغضب شديد واحتقار واضح.",
  traits: ["عدواني", "وقائي", "متسلط", "سريع الغضب"]
},

"النبيل": {
  label: "FIRST APPEARANCE",
  role: "نبيل في بلاط الملك",
  rank: "A",
  fame: "معروف بين النبلاء",
  powerLevel: 200,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حي",
  desc: "أحد نبلاء المملكة الذين يحضرون المحاكمات الملكية. ينظر إلى ياماتو باحتقار شديد ويطالب بعقوبته.",
  traits: ["متعجرف", "قاس", "متحيز"]
},

"بروندور": {
  label: "FIRST APPEARANCE",
  role: "ملك الأقزام / حاكم دوراغون",
  rank: "S",
  fame: "معروف بين الأقزام",
  powerLevel: 380,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حي",
  desc: "ملك الأقزام ذو الجسد الضخم واللحية الكثيفة. يملك قدرة فريدة على شم مشاعر الناس وكشف الكذب. يبدو صارما لكنه عادل.",
  traits: ["عادل", "صارم", "فضولي", "حكيم", "مرح أحيانا"]
},

"غارون": {
  label: "FIRST APPEARANCE",
  role: "مدرب قزم / مدرب سابق في كاغيتسورا",
  rank: "A",
  fame: "معروف بين الأقزام",
  powerLevel: 280,
  age: "كبير في السن",
  affinity: "غير معروف",
  status: "حي",
  desc: "قزم عجوز بلحية رمادية وندبة على وجهه. كان مدربا سابقا في أكاديمية كاغيتسورا. صارم جدا لكنه يرى في ياماتو شيئا مختلفا.",
  traits: ["صارم", "صريح", "ملاحظ", "قاس", "حكيم"]
},

"تورك": {
  label: "FIRST APPEARANCE",
  role: "قزم محارب / مراقب التدريب",
  rank: "B",
  fame: "معروف في دوراغون",
  powerLevel: 150,
  age: "غير معروف",
  affinity: "غير معروف",
  status: "حي",
  desc: "قزم يراقب تدريبات ياماتو ويعد مرات سقوطه. صريح ومباشر لكنه يبدي إعجابا خفيا بإصرار ياماتو.",
  traits: ["صريح", "ساخر", "مراقب", "ودود بطريقته"]
},

"فالدريك": {
  label: "FIRST APPEARANCE",
  role: "رئيس مجلس الشياطين السبعة",
  rank: "SS",
  fame: "معروف في عالم الشياطين",
  powerLevel: 480,
  age: "غير معروف",
  affinity: "سحر الفوضى المظلمة",
  status: "حي",
  desc: "شيطان طويل بشعر أسود وقرنين منحنيين. يجلس على رأس مجلس الشياطين السبعة ويتخذ القرارات الكبرى.",
  traits: ["مهيب", "غامض", "قائد", "حاسم"]
},

"ليزارا": {
  label: "FIRST APPEARANCE",
  role: "عضو في مجلس الشياطين السبعة",
  rank: "SS",
  fame: "معروفة في عالم الشياطين",
  powerLevel: 460,
  age: "غير معروف",
  affinity: "سحر السموم الملعونة",
  status: "حية",
  desc: "شيطانة بعيون بنفسجية وابتسامة خطيرة. فضولية وماكرة، تستمتع بمراقبة البشر.",
  traits: ["ماكرة", "فضولية", "خطيرة", "ساخرة"]
},

"دوركان": {
  label: "FIRST APPEARANCE",
  role: "عضو في مجلس الشياطين السبعة",
  rank: "SS",
  fame: "معروف في عالم الشياطين",
  powerLevel: 470,
  age: "غير معروف",
  affinity: "سحر الجحيم الحديدي",
  status: "حي",
  desc: "شيطان ضخم الجسد بصوت خشن. يحب القوة الغاشمة ويستخف بالضعفاء.",
  traits: ["قوي", "صاخب", "مباشر", "عنيف"]
},

"زاريف": {
  label: "FIRST APPEARANCE",
  role: "عضو في مجلس الشياطين السبعة",
  rank: "SS",
  fame: "معروف في عالم الشياطين",
  powerLevel: 465,
  age: "غير معروف",
  affinity: "سحر العقول",
  status: "حي",
  desc: "شيطان نحيف بشعر فضي. أذكى أعضاء المجلس، يلاحظ ما لا يلاحظه غيره ويشك في أن ياماتو ليس عاديا.",
  traits: ["ذكي", "هادئ", "ملاحظ", "غامض"]
},

"كورفيس": {
  label: "FIRST APPEARANCE",
  role: "عضو في مجلس الشياطين السبعة",
  rank: "SS",
  fame: "معروف في عالم الشياطين",
  powerLevel: 455,
  age: "غير معروف",
  affinity: "سحر الظلال القاتلة",
  status: "حي",
  desc: "شيطان غامض يعمل في الظلال. قليل الكلام لكن ملاحظاته دائما دقيقة.",
  traits: ["غامض", "صامت", "دقيق", "مميت"]
},
};

// ============================================================
// GLOBALS
// ============================================================
const sparkCanvas = document.getElementById('sparkCanvas');
const sparkCtx = sparkCanvas.getContext('2d');
let sparks = [];
let animatingSparkles = false;
let currentChapterIndex = 0;
const FX_MAP = {};
let observerInstance = null;

// ============================================================
// NORMALIZE SECTIONS HELPER
// ============================================================
// Chapters 9+ use "text" instead of "content" and "scene" instead of "scene-break".
// This function normalizes all sections so the rest of the code works uniformly.
function normalizeSections(sections) {
  return sections.map(s => {
    const normalized = { ...s };
    // Fix "text" -> "content"
    if (normalized.text !== undefined && normalized.content === undefined) {
      normalized.content = normalized.text;
    }
    // Fix "scene" -> "scene-break"
    if (normalized.type === 'scene') {
      normalized.type = 'scene-break';
    }
    return normalized;
  });
}

// ============================================================
// STORY DATA
// ============================================================
const chapters = [
{
  id: 1, chapter: 1, title: "ريح البداية", subtitle: "العالم الواسع",
  sections: [
    { type: "narration", content: "العالم واسع." },
    { type: "narration", content: "واسع لدرجة أن أغلب البشر لا يعرفون إلا جزءا صغيرا منه." },
    { type: "narration", content: "تنتشر الممالك البشرية عبر القارة مثل جزر وسط بحر من الغابات والجبال والسهول." },
    { type: "narration", content: "أكبر تلك الممالك هي مملكة كاغيتسورا، المملكة الأغنى والأقوى بين البشر." },
    { type: "narration", content: "في قلب تلك المملكة تقف أكاديمية كاغيتسورا للسحر." },
    { type: "narration", content: "مكان يحلم آلاف الشباب بالدخول إليه." },
    { type: "narration", content: "الأكاديمية التي تخرج منها مئات السحرة الأقوياء عبر السنين." },
    { type: "scene-break", content: "قبل خمسة قرون" },
    { type: "narration", content: "لكن قبل خمسة قرون لم يكن العالم هادئا كما هو الآن." },
    { type: "narration", content: "قبل خمسمائة سنة اندلعت حرب عظيمة بين البشر والشياطين." },
    { type: "narration", content: "حرب سقطت فيها مدن كاملة، واختفت قرى، وظهرت فيها وحوش لم يرها البشر من قبل." },
    { type: "narration", content: "وفي نهاية تلك الحرب ظهر ساحر واحد." },
    { type: "narration", content: "ساحر وصل إلى رتبة لم يصلها أحد قبله." },
    { type: "rank-mention", content: "SSS." },
    { type: "narration", content: "اسمه هيديو كاغيتسورا." },
    { type: "narration", content: "ذلك الساحر هزم ملك الشياطين في ذلك الزمن، واستخدم تعويذة عظيمة أغلقت بوابة عالم ماكاي، ومنعت الشياطين من دخول عالم البشر." },
    { type: "narration", content: "لكن تلك القوة أخذت حياته." },
    { type: "narration", content: "ومنذ ذلك اليوم لم يظهر ساحر آخر وصل إلى تلك المرتبة." },
    { type: "scene-break", content: "قرية كوزوها" },
    { type: "narration", content: "العالم هدأ بعد ذلك." },
    { type: "narration", content: "الممالك أعادت بناء نفسها." },
    { type: "narration", content: "والناس عادوا إلى حياتهم." },
    { type: "narration", content: "لكن في زاوية بعيدة من ذلك العالم الواسع…" },
    { type: "narration", content: "كانت هناك قرية صغيرة لا يعرفها أحد تقريبا." },
    { type: "narration", content: "اسمها كوزوها." },
    { type: "narration", content: "كوزوها ليست مكانا مميزا." },
    { type: "narration", content: "هي قرية بسيطة." },
    { type: "narration", content: "بيوت خشبية صغيرة، طرق ترابية، وحقول خضراء تمتد حولها." },
    { type: "narration", content: "الناس هناك يعيشون حياة هادئة." },
    { type: "narration", content: "في الصباح يعملون في الحقول." },
    { type: "narration", content: "وفي المساء يجلسون أمام البيوت ويتحدثون عن المحاصيل والطقس." },
    { type: "narration", content: "لا حروب." },
    { type: "narration", content: "لا ملوك." },
    { type: "narration", content: "ولا سحرة عظماء." },
    { type: "narration", content: "لكن حتى في قرية هادئة كهذه…" },
    { type: "narration", content: "يوجد شخص واحد يسبب الفوضى أحيانا." },
    { type: "scene-break", content: "القيلولة" },
    { type: "narration", content: "تحت شجرة كبيرة قرب طرف القرية…" },
    { type: "narration", content: "كان رجل مستلقيا على ظهره." },
    { type: "narration", content: "قبعة قش تغطي وجهه." },
    { type: "narration", content: "ذراعاه خلف رأسه." },
    { type: "narration", content: "وصوت شخير خفيف يخرج منه." },
    { type: "narration", content: "اسمه…" },
    { type: "narration", content: "ياماتو." },
    { type: "narration", content: "يمتلك لحية خفيفة، وشعر غير مرتب قليلا، وابتسامة تبدو كأنها لا تختفي من وجهه أبدا." },
    { type: "dialogue", character: "كوتا", content: "ما زال نائما." },
    { type: "dialogue", character: "يوري", content: "لقد كان نائما عندما مررنا قبل ساعة." },
    { type: "narration", content: "كوتا ابتسم بمكر." },
    { type: "narration", content: "انحنى والتقط عودا صغيرا من الأرض." },
    { type: "narration", content: "ثم اقترب ببطء." },
    { type: "dialogue", character: "يوري", content: "لا تفعل…" },
    { type: "narration", content: "لكن كوتا بدأ يدغدغ أنف ياماتو بالعود." },
    { type: "narration", content: "ثانية…" },
    { type: "narration", content: "ثانيتان…" },
    { type: "combat", content: "ثم فجأة—" },
    { type: "shout", character: "ياماتو", content: "هاااتشوو!" },
    { type: "narration", content: "قفز جالسا فجأة." },
    { type: "narration", content: "سقطت القبعة من وجهه." },
    { type: "narration", content: "نظر حوله بصدمة." },
    { type: "dialogue", character: "ياماتو", content: "من الذي حاول اغتيالي؟!" },
    { type: "dialogue", character: "كوتا", content: "إنه أنا!" },
    { type: "dialogue", character: "ياماتو", content: "آه… محاولة اغتيال باستخدام عود شجرة." },
    { type: "dialogue", character: "ياماتو", content: "طريقة مبتكرة." },
    { type: "dialogue", character: "يوري", content: "لقد كنت تشخر." },
    { type: "dialogue", character: "ياماتو", content: "لم أكن أشخر." },
    { type: "dialogue", character: "كوتا", content: "بلى كنت." },
    { type: "dialogue", character: "ياماتو", content: "كنت أتدرب على تنفس التنين." },
    { type: "narration", content: "اقتربت امرأة من الطريق." },
    { type: "narration", content: "كانت تحمل سلة خضار." },
    { type: "narration", content: "اسمها سايو." },
    { type: "dialogue", character: "سايو", content: "ياماتو!" },
    { type: "dialogue", character: "ياماتو", content: "صباح الخير يا سايو." },
    { type: "dialogue", character: "سايو", content: "إنه العصر." },
    { type: "dialogue", character: "ياماتو", content: "آه… إذن قيلولة الصباح نجحت." },
    { type: "dialogue", character: "سايو", content: "أنت رجل في الثلاثين." },
    { type: "dialogue", character: "سايو", content: "لماذا تنام في الطرق مثل الأطفال؟" },
    { type: "dialogue", character: "ياماتو", content: "الأطفال لا يملكون لحية." },
    { type: "dialogue", character: "سايو", content: "يوما ما ستكبر." },
    { type: "dialogue", character: "ياماتو", content: "لا أعتقد." },
    { type: "scene-break", content: "يوم مهم" },
    { type: "narration", content: "بعد أن ذهبت سايو…" },
    { type: "narration", content: "وقف ياماتو ينظر إلى الطريق." },
    { type: "narration", content: "ابتسامته بقيت على وجهه." },
    { type: "narration", content: "لكن عينيه أصبحتا أكثر جدية قليلا." },
    { type: "narration", content: "اليوم يوم مهم." },
    { type: "narration", content: "اليوم سيستلم المال." },
    { type: "narration", content: "المال الذي سيسمح له بدخول أكاديمية كاغيتسورا." },
    { type: "narration", content: "حلم كبير بالنسبة لرجل عاش حياته كلها في قرية صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "dialogue", character: "ياماتو", content: "لنبدأ المغامرة." },
    { type: "scene-break", content: "الأطفال" },
    { type: "dialogue", character: "كوتا", content: "ياماتو!" },
    { type: "dialogue", character: "ياماتو", content: "نعم؟" },
    { type: "dialogue", character: "كوتا", content: "هل ستذهب حقا إلى الأكاديمية؟" },
    { type: "dialogue", character: "ياماتو", content: "هذا هو الخطة." },
    { type: "dialogue", character: "يوري", content: "هل ستصبح ساحرا عظيما؟" },
    { type: "dialogue", character: "ياماتو", content: "سأصبح أعظم ساحر في العالم." },
    { type: "narration", content: "تجمد الطفلان." },
    { type: "dialogue", character: "ياماتو", content: "لكن أولا يجب أن أتعلم كيف أستخدم السحر." },
    { type: "scene-break", content: "منزل تاكيو" },
    { type: "narration", content: "في طرف القرية يقف منزل خشبي أكبر قليلا من بقية البيوت." },
    { type: "narration", content: "هذا المنزل يخص رجل اسمه تاكيو." },
    { type: "narration", content: "رجل قوي البنية في منتصف الخمسينات." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم طرق الباب." },
    { type: "dialogue", character: "تاكيو", content: "كنت أعلم أنك ستأتي." },
    { type: "dialogue", character: "ياماتو", content: "لو لم آتِ اليوم، كنت ستأتي أنت وتسحبني من أذني." },
    { type: "dialogue", character: "تاكيو", content: "فكرة جيدة." },
    { type: "dialogue", character: "ياماتو", content: "لحسن الحظ جئت بنفسي." },
    { type: "dialogue", character: "تاكيو", content: "ادخل." },
    { type: "narration", content: "جلسا على طاولة خشبية بسيطة." },
    { type: "narration", content: "صمت قصير." },
    { type: "narration", content: "ثم أخرج تاكيو كيسا من القماش." },
    { type: "narration", content: "وضعه على الطاولة." },
    { type: "dialogue", character: "تاكيو", content: "هذا هو المال." },
    { type: "dialogue", character: "ياماتو", content: "هل أنت متأكد؟" },
    { type: "dialogue", character: "تاكيو", content: "لقد وعدتك." },
    { type: "narration", content: "فتح ياماتو الكيس قليلا." },
    { type: "narration", content: "عملات فضية كثيرة." },
    { type: "narration", content: "بالنسبة لقرية فقيرة… هذا مبلغ كبير." },
    { type: "dialogue", character: "ياماتو", content: "واو…" },
    { type: "dialogue", character: "ياماتو", content: "هذا كثير." },
    { type: "dialogue", character: "تاكيو", content: "ليس كثيرا بالنسبة للأكاديمية." },
    { type: "dialogue", character: "تاكيو", content: "اسمع جيدا يا ياماتو." },
    { type: "dialogue", character: "تاكيو", content: "هذا المال ليس مني فقط." },
    { type: "dialogue", character: "ياماتو", content: "ماذا تقصد؟" },
    { type: "dialogue", character: "تاكيو", content: "أهل القرية ساعدوا أيضا." },
    { type: "dialogue", character: "ياماتو", content: "الجميع…؟" },
    { type: "dialogue", character: "تاكيو", content: "نعم." },
    { type: "dialogue", character: "تاكيو", content: "القرية كلها تأمل فيك." },
    { type: "dialogue", character: "ياماتو", content: "هذا ضغط كبير على رجل كان نائما قبل عشر دقائق." },
    { type: "dialogue", character: "تاكيو", content: "أنا جاد." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "dialogue", character: "ياماتو", content: "لن أخذلكم." },
    { type: "scene-break", content: "بداية الطريق" },
    { type: "narration", content: "خرج ياماتو من المنزل." },
    { type: "narration", content: "الكيس في يده." },
    { type: "narration", content: "الشمس بدأت تميل نحو الغروب." },
    { type: "narration", content: "وقف في الطريق الترابي." },
    { type: "narration", content: "نظر إلى القرية." },
    { type: "narration", content: "إلى الشجرة التي كان ينام تحتها." },
    { type: "narration", content: "إلى الأطفال الذين يلعبون." },
    { type: "narration", content: "هذه القرية…" },
    { type: "narration", content: "هي كل ما يعرفه عن العالم." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "dialogue", character: "ياماتو", content: "لنر ماذا يوجد خارجها!" },
    { type: "ending-narration", content: "ثم بدأ يمشي. خطوة… ثم أخرى. ورحلة جديدة بدأت. رحلة لم يكن يعلم… أنها ستغير حياته بالكامل. لكن هذه… بداية القصة فقط." },
    { type: "chapter-end", content: "— نهاية الفصل الأول —" }
  ]
},
{
  id: 2, chapter: 2, title: "الجزء الثاني", subtitle: "الطريق إلى العالم",
  sections: [
    { type: "narration", content: "في صباح اليوم التالي…" },{ type: "narration", content: "كانت قرية كوزوها هادئة كعادتها." },{ type: "narration", content: "ضباب خفيف يعلو الحقول، والهواء البارد يحمل رائحة الأشجار الرطبة." },{ type: "narration", content: "لكن أمام مدخل القرية وقف رجل يحمل حقيبة صغيرة على كتفه." },{ type: "narration", content: "ذلك الرجل كان ياماتو." },{ type: "dialogue", character: "ياماتو", content: "حسنا… الطريق يبدو طويلا." },{ type: "narration", content: "ثم نظر خلفه إلى القرية." },{ type: "dialogue", character: "كوتا", content: "لا تمت هناك!" },{ type: "dialogue", character: "يوري", content: "وعدت أن تعود كساحر عظيم!" },{ type: "dialogue", character: "ياماتو", content: "إذا مت… سأعود كشبح ساحر عظيم." },{ type: "dialogue", character: "كوتا", content: "هذا ليس نفس الشيء!" },{ type: "dialogue", character: "تاكيو", content: "ياماتو." },{ type: "dialogue", character: "تاكيو", content: "الطريق إلى كاغيتسورا ليس سهلا." },{ type: "dialogue", character: "ياماتو", content: "سمعت أنه مليء بالمغامرين واللصوص." },{ type: "dialogue", character: "تاكيو", content: "والوحوش أيضا." },{ type: "dialogue", character: "ياماتو", content: "ممتاز." },{ type: "dialogue", character: "تاكيو", content: "ممتاز؟" },{ type: "dialogue", character: "ياماتو", content: "رحلة بدون مغامرة مملة." },{ type: "dialogue", character: "تاكيو", content: "عد حيا." },{ type: "dialogue", character: "ياماتو", content: "هذا طلب صعب." },{ type: "dialogue", character: "تاكيو", content: "حاول على الأقل." },{ type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "scene-break", content: "الطريق" },
    { type: "narration", content: "الطريق لم يكن معبدا." },{ type: "narration", content: "كان مجرد مسار ترابي يمر عبر الغابات والحقول." },{ type: "narration", content: "في البداية كان الطريق هادئا." },{ type: "narration", content: "العصافير تغرد." },{ type: "narration", content: "والهواء بارد." },{ type: "narration", content: "ياماتو كان يمشي وهو يصفّر لحنا عشوائيا." },{ type: "narration", content: "بعد ساعة من المشي…" },{ type: "narration", content: "جلس على صخرة." },{ type: "narration", content: "أخرج قطعة خبز من حقيبته." },{ type: "dialogue", character: "ياماتو", content: "هذا أول غداء في رحلتي العظيمة." },{ type: "dialogue", character: "ياماتو", content: "أكاديمية كاغيتسورا…" },{ type: "dialogue", character: "ياماتو", content: "سمعت عنها كثيرا." },{ type: "dialogue", character: "ياماتو", content: "أتمنى أنهم لا يطلبون امتحانا صعبا." },{ type: "dialogue", character: "الرجل", content: "بالطبع سيطلبون." },{ type: "narration", content: "ياماتو التفت بسرعة." },{ type: "narration", content: "خلفه كان يقف رجل ضخم يحمل سيفا." },{ type: "narration", content: "ومعه رجلان آخران." },{ type: "narration", content: "بدا أنهم مغامرون." },{ type: "dialogue", character: "الرجل", content: "الأكاديمية لا تقبل الكسالى." },{ type: "dialogue", character: "ياماتو", content: "أنا لست كسولا." },{ type: "dialogue", character: "الرجل", content: "أنت تأكل في منتصف الطريق." },{ type: "dialogue", character: "ياماتو", content: "هذا يسمى إدارة طاقة." },{ type: "dialogue", character: "الرجل", content: "إلى أين أنت ذاهب؟" },{ type: "dialogue", character: "ياماتو", content: "كاغيتسورا." },{ type: "dialogue", character: "الرجل", content: "الأكاديمية؟" },{ type: "dialogue", character: "ياماتو", content: "نعم." },{ type: "dialogue", character: "الرجل", content: "كم عمرك؟" },{ type: "dialogue", character: "ياماتو", content: "ثلاثون." },{ type: "dialogue", character: "الرجل", content: "ثلاثون؟!" },{ type: "dialogue", character: "المغامر", content: "الطلاب هناك في الثامنة عشرة." },{ type: "dialogue", character: "ياماتو", content: "أنا متأخر قليلا فقط." },{ type: "dialogue", character: "المغامر", content: "قليلا؟!" },{ type: "dialogue", character: "ياماتو", content: "حسنا… كثيرا." },
    { type: "scene-break", content: "المساء" },
    { type: "narration", content: "مع غروب الشمس…" },{ type: "narration", content: "وصلوا إلى نزل صغير قرب الطريق." },{ type: "narration", content: "كان المكان مليئا بالمسافرين." },{ type: "dialogue", character: "صاحب النزل", content: "غرفة؟" },{ type: "dialogue", character: "ياماتو", content: "إذا كانت رخيصة." },{ type: "dialogue", character: "صاحب النزل", content: "هي ليست رخيصة." },{ type: "dialogue", character: "ياماتو", content: "إذن سأجعلها تبدو رخيصة." },{ type: "dialogue", character: "صاحب النزل", content: "كيف؟" },{ type: "dialogue", character: "ياماتو", content: "سأنام بسرعة." },{ type: "narration", content: "أعطاه صاحب النزل غرفة صغيرة." },{ type: "narration", content: "جلس ياماتو على السرير." },{ type: "narration", content: "تمدد." },{ type: "dialogue", character: "ياماتو", content: "رحلتي بدأت…" },{ type: "dialogue", character: "ياماتو", content: "وأنا متعب بالفعل." },
    { type: "scene-break", content: "اليوم التالي" },
    { type: "narration", content: "في الصباح…" },{ type: "narration", content: "غادر النزل مبكرا." },{ type: "narration", content: "الطريق أصبح أعرض." },{ type: "narration", content: "والمسافرون أكثر." },{ type: "narration", content: "بعد عدة ساعات…" },{ type: "narration", content: "بدأت تظهر أسوار ضخمة في الأفق." },{ type: "dialogue", character: "ياماتو", content: "واو…" },{ type: "narration", content: "كانت تلك…" },{ type: "narration", content: "مملكة كاغيتسورا." },{ type: "narration", content: "أسوار ضخمة." },{ type: "narration", content: "أبراج عالية." },{ type: "narration", content: "والناس يدخلون ويخرجون باستمرار." },{ type: "dialogue", character: "ياماتو", content: "حسنا…" },{ type: "dialogue", character: "ياماتو", content: "لنبدأ الجزء الممتع." },
    { type: "chapter-end", content: "— نهاية الجزء الثاني —" }
  ]
},
{
  id: 3, chapter: 3, title: "الجزء الثالث", subtitle: "بوابة كاغيتسورا",
  sections: [
    { type: "scene-break", content: "أول نظرة على العاصمة" },
    { type: "narration", content: "وقف ياماتو على التلة الصغيرة المطلة على الطريق." },{ type: "narration", content: "أمامه ارتفعت أسوار هائلة من الحجر الرمادي." },{ type: "narration", content: "أبراج عالية تمتد نحو السماء." },{ type: "narration", content: "وأعلام مملكة كاغيتسورا ترفرف فوقها." },{ type: "narration", content: "الطريق المؤدي إلى البوابة كان مزدحما." },{ type: "narration", content: "تجار بعرباتهم." },{ type: "narration", content: "مغامرون مدججون بالسلاح." },{ type: "narration", content: "عائلات مسافرة." },{ type: "narration", content: "حتى بعض الطلاب كانوا يسيرون وهم يحملون حقائبهم." },{ type: "dialogue", character: "ياماتو", content: "واو..." },{ type: "dialogue", character: "ياماتو", content: "أعتقد أن هذه أكبر من قريتي قليلا." },{ type: "dialogue", character: "العجوز", content: "قليلا فقط؟" },{ type: "dialogue", character: "ياماتو", content: "حسنا... كثيرا." },{ type: "dialogue", character: "ياماتو", content: "حسنا يا ياماتو... لا تتصرف كالقروي." },
    { type: "scene-break", content: "الطابور" },
    { type: "narration", content: "كلما اقترب من المدينة، أصبح الطريق أضيق بسبب الحشود." },{ type: "narration", content: "أمام البوابة وقف عشرات الأشخاص في طابور طويل." },{ type: "narration", content: "جنود المملكة يقفون عند المدخل." },{ type: "narration", content: "يفحصون الناس." },{ type: "narration", content: "يسألونهم." },{ type: "narration", content: "ويسمحون للبعض بالدخول." },{ type: "dialogue", character: "ياماتو", content: "يبدو أن هذا سيستغرق وقتا." },{ type: "dialogue", character: "الشاب", content: "أول مرة تزور العاصمة؟" },{ type: "dialogue", character: "ياماتو", content: "هل هذا واضح؟" },{ type: "dialogue", character: "الشاب", content: "جدا." },{ type: "dialogue", character: "ياماتو", content: "لماذا؟" },{ type: "dialogue", character: "الشاب", content: "لأنك تنظر إلى الأسوار وكأنك رأيت تنينا." },{ type: "dialogue", character: "ياماتو", content: "أنا لم أر تنينا من قبل." },{ type: "dialogue", character: "الشاب", content: "ولا أنا." },{ type: "dialogue", character: "ياماتو", content: "لماذا الجميع يقفون في الطابور؟" },{ type: "dialogue", character: "الشاب", content: "أنت لا تعرف؟" },{ type: "dialogue", character: "ياماتو", content: "لا." },{ type: "dialogue", character: "الشاب", content: "لا يمكنك دخول كاغيتسورا بدون تصريح." },{ type: "dialogue", character: "ياماتو", content: "تصريح؟" },{ type: "dialogue", character: "الشاب", content: "يجب أن تشتري تذكرة الدخول." },{ type: "dialogue", character: "ياماتو", content: "تذكرة؟" },{ type: "dialogue", character: "الشاب", content: "إنها ضريبة دخول." },{ type: "dialogue", character: "ياماتو", content: "وكم ثمنها؟" },{ type: "dialogue", character: "الشاب", content: "خمس عملات فضية." },{ type: "narration", content: "ياماتو تجمد تماما." },{ type: "narration", content: "ببطء… مد يده إلى الكيس الذي أعطاه إياه تاكيو." },{ type: "narration", content: "فتح الكيس قليلا." },{ type: "narration", content: "نظر إلى العملات." },{ type: "narration", content: "ثم أغلقه." },{ type: "dialogue", character: "ياماتو", content: "أوه..." },{ type: "dialogue", character: "الشاب", content: "لا تقل لي أنك لم تحسبها." },{ type: "dialogue", character: "ياماتو", content: "كنت أحسب الطعام." },{ type: "dialogue", character: "الشاب", content: "ولم تحسب دخول المدينة؟" },{ type: "dialogue", character: "ياماتو", content: "نسيت." },{ type: "dialogue", character: "الشاب", content: "أنت مغامر سيئ." },{ type: "dialogue", character: "ياماتو", content: "أنا مغامر مبتدئ." },
    { type: "scene-break", content: "القرار" },
    { type: "narration", content: "تحرك الطابور ببطء." },{ type: "narration", content: "الناس يدفعون." },{ type: "narration", content: "يحصلون على أوراق صغيرة." },{ type: "narration", content: "ثم يدخلون المدينة." },{ type: "narration", content: "ياماتو وقف يفكر." },{ type: "narration", content: "خمس عملات فضية." },{ type: "narration", content: "ليست كثيرة بالنسبة للبعض." },{ type: "narration", content: "لكن بالنسبة له…" },{ type: "narration", content: "كل عملة مهمة." },{ type: "narration", content: "الكيس الذي معه هو كل ما يملك." },{ type: "narration", content: "وهو يحتاج المال للأكاديمية." },{ type: "dialogue", character: "ياماتو", content: "حسنا…" },{ type: "dialogue", character: "ياماتو", content: "المغامرة بدأت." },
    { type: "scene-break", content: "نافذة التذاكر" },
    { type: "narration", content: "وصل أخيرا إلى النافذة." },{ type: "narration", content: "خلفها جلس رجل بدين يلبس ملابس رسمية." },{ type: "dialogue", character: "الرجل", content: "الاسم." },{ type: "dialogue", character: "ياماتو", content: "ياماتو." },{ type: "dialogue", character: "الرجل", content: "الغرض من الزيارة." },{ type: "dialogue", character: "ياماتو", content: "الأكاديمية." },{ type: "dialogue", character: "الرجل", content: "طالب؟" },{ type: "dialogue", character: "ياماتو", content: "هذا ما آمله." },{ type: "dialogue", character: "الرجل", content: "التذكرة خمس عملات فضية." },{ type: "narration", content: "وضع ياماتو العملات ببطء." },{ type: "narration", content: "صوتها ارتطم بالخشب." },{ type: "narration", content: "أعطاه الرجل ورقة صغيرة مختومة." },{ type: "dialogue", character: "الرجل", content: "أرها للحارس." },{ type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "scene-break", content: "البوابة" },
    { type: "dialogue", character: "الحارس", content: "التصريح." },{ type: "narration", content: "أعطاه ياماتو الورقة." },{ type: "narration", content: "الحارس نظر إليها." },{ type: "narration", content: "ثم أعادها." },{ type: "dialogue", character: "الحارس", content: "ادخل." },{ type: "narration", content: "ياماتو مشى ببطء." },{ type: "narration", content: "ثم…" },{ type: "narration", content: "عبر البوابة." },{ type: "narration", content: "وفي اللحظة التي دخل فيها…" },{ type: "narration", content: "تغير كل شيء." },
    { type: "scene-break", content: "العاصمة" },
    { type: "narration", content: "الشوارع واسعة." },{ type: "narration", content: "المباني عالية." },{ type: "narration", content: "الناس في كل مكان." },{ type: "narration", content: "عربات تمر." },{ type: "narration", content: "تجار يصرخون." },{ type: "narration", content: "روائح الطعام تملأ الهواء." },{ type: "narration", content: "ياماتو وقف في منتصف الطريق." },{ type: "dialogue", character: "ياماتو", content: "واو…" },{ type: "dialogue", character: "ياماتو", content: "لا تتصرف كالقروي." },{ type: "dialogue", character: "ياماتو", content: "هذا رائع!" },{ type: "dialogue", character: "الرجل", content: "أول مرة؟" },{ type: "dialogue", character: "ياماتو", content: "واضح جدا؟" },{ type: "dialogue", character: "الرجل", content: "جدا." },{ type: "dialogue", character: "ياماتو", content: "حسنا…" },{ type: "dialogue", character: "ياماتو", content: "الخطوة التالية." },{ type: "dialogue", character: "ياماتو", content: "الأكاديمية!" },
    { type: "chapter-end", content: "— نهاية الجزء الثالث —" }
  ]
},
{
  id: 4,
  chapter: 4,
  title: "الجزء الرابع",
  subtitle: "مدينة لا تنام",
  sections: [
    { type: "scene-break", content: "أول خطوة داخل العاصمة" },
    { type: "narration", content: "عندما تجاوز ياماتو البوابة الحجرية الضخمة…" },
    { type: "narration", content: "شعر وكأنه دخل عالما مختلفا تماما." },
    { type: "narration", content: "الصخب يملأ المكان." },
    { type: "narration", content: "الناس يمشون في كل اتجاه." },
    { type: "narration", content: "تجار ينادون على بضائعهم." },
    { type: "narration", content: "عربات خيول تمر في الطرق الواسعة." },
    { type: "narration", content: "وأصوات متعددة تختلط مع بعضها." },
    { type: "narration", content: "ياماتو وقف في منتصف الطريق للحظة." },
    { type: "narration", content: "عيناه تتحركان يمينا ويسارا." },
    { type: "dialogue", character: "ياماتو", content: "واو…" },
    { type: "narration", content: "ثم تمتم لنفسه." },
    { type: "dialogue", character: "ياماتو", content: "حسنا… لا تبدُ مثل القروي." },
    { type: "narration", content: "بعد ثانيتين فقط…" },
    { type: "narration", content: "قال بصوت مرتفع." },
    { type: "dialogue", character: "ياماتو", content: "هذا مذهل!" },
    { type: "narration", content: "مر رجل بجانبه ونظر إليه." },
    { type: "dialogue", character: "الرجل", content: "أول مرة في العاصمة؟" },
    { type: "dialogue", character: "ياماتو", content: "واضح؟" },
    { type: "dialogue", character: "الرجل", content: "جدا." },
    { type: "narration", content: "ياماتو حك رأسه." },
    { type: "dialogue", character: "ياماتو", content: "كنت أحاول أن أبدو محترفا." },
    { type: "narration", content: "الرجل ضحك ومضى." },

    { type: "scene-break", content: "شارع التجار" },
    { type: "narration", content: "بدأ ياماتو يمشي ببطء في الشارع الرئيسي." },
    { type: "narration", content: "كان المكان مليئا بالمحال." },
    { type: "narration", content: "متاجر سيوف." },
    { type: "narration", content: "محال ملابس." },
    { type: "narration", content: "عربات طعام." },
    { type: "narration", content: "توقف أمام عربة صغيرة يخرج منها بخار لذيذ." },
    { type: "narration", content: "رجل سمين يقف خلف العربة." },
    { type: "dialogue", character: "هارو", content: "حساء ساخن!" },
    { type: "dialogue", character: "ياماتو", content: "كم السعر؟" },
    { type: "dialogue", character: "هارو", content: "عملة نحاسية." },
    { type: "narration", content: "ياماتو فكر لحظة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هل لديك نسخة أرخص من الحساء؟" },
    { type: "narration", content: "هارو حدق فيه." },
    { type: "dialogue", character: "هارو", content: "أرخص؟" },
    { type: "dialogue", character: "ياماتو", content: "حساء بدون الحساء." },
    { type: "narration", content: "هارو عقد حاجبيه." },
    { type: "dialogue", character: "هارو", content: "ماذا يعني ذلك؟" },
    { type: "dialogue", character: "ياماتو", content: "مجرد ماء ساخن." },
    { type: "narration", content: "هارو انفجر ضاحكا." },
    { type: "dialogue", character: "هارو", content: "خذ الحساء." },
    { type: "narration", content: "وضع له وعاء." },
    { type: "dialogue", character: "ياماتو", content: "لكنني لم أدفع بعد." },
    { type: "dialogue", character: "هارو", content: "اعتبرها هدية لأول مرة في العاصمة." },
    { type: "narration", content: "ياماتو جلس قرب العربة." },
    { type: "narration", content: "بدأ يأكل." },
    { type: "dialogue", character: "ياماتو", content: "هذا لذيذ." },
    { type: "dialogue", character: "هارو", content: "من أين أنت؟" },
    { type: "dialogue", character: "ياماتو", content: "قرية كوزوها." },
    { type: "dialogue", character: "هارو", content: "لم أسمع بها." },
    { type: "dialogue", character: "ياماتو", content: "لا أحد يسمع بها." },
    { type: "narration", content: "ضحك هارو." },

    { type: "scene-break", content: "الاتجاه إلى الأكاديمية" },
    { type: "narration", content: "بعد أن انتهى من الطعام…" },
    { type: "narration", content: "وقف ياماتو ونظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم سأل هارو." },
    { type: "dialogue", character: "ياماتو", content: "أين الأكاديمية؟" },
    { type: "dialogue", character: "هارو", content: "تلك الأبراج التي تراها هناك." },
    { type: "narration", content: "ياماتو رفع رأسه." },
    { type: "narration", content: "بعيدا فوق المباني…" },
    { type: "narration", content: "ظهرت أبراج عالية جدا." },
    { type: "dialogue", character: "ياماتو", content: "واو…" },
    { type: "dialogue", character: "هارو", content: "إنها أكاديمية كاغيتسورا." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "dialogue", character: "هارو", content: "بالتوفيق يا قروي." },
    { type: "dialogue", character: "ياماتو", content: "شكرا يا رجل الحساء." },
    { type: "dialogue", character: "هارو", content: "اسمي هارو!" },
    { type: "dialogue", character: "ياماتو", content: "شكرا يا هارو." },

    { type: "scene-break", content: "الطريق إلى الأكاديمية" },
    { type: "narration", content: "كلما اقترب من الأكاديمية…" },
    { type: "narration", content: "تغير شكل الناس في الشوارع." },
    { type: "narration", content: "بعضهم يرتدي ملابس أنيقة." },
    { type: "narration", content: "بعضهم يحمل عصي سحرية." },
    { type: "narration", content: "وبعضهم يرتدي زي الطلاب." },
    { type: "narration", content: "ياماتو نظر إلى مجموعة من الطلاب." },
    { type: "dialogue", character: "الشاب", content: "لقد وصلت رتبة C في اختبار العام الماضي." },
    { type: "dialogue", character: "الطالب", content: "أنا قريب من B." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "يبدو أن الجميع أقوياء هنا." },
    { type: "narration", content: "ثم قال لنفسه." },
    { type: "dialogue", character: "ياماتو", content: "حسنا… لنر أين مكاني بينهم." },

    { type: "scene-break", content: "أول نظرة على الأكاديمية" },
    { type: "narration", content: "بعد عشر دقائق من المشي…" },
    { type: "narration", content: "وصل أخيرا." },
    { type: "narration", content: "توقف فجأة." },
    { type: "narration", content: "أمامه بوابة ضخمة من الحديد." },
    { type: "narration", content: "خلفها ساحة واسعة." },
    { type: "narration", content: "ومبانٍ ضخمة تشبه القصور." },
    { type: "narration", content: "الأبراج العالية ترتفع نحو السماء." },
    { type: "narration", content: "طلاب يدخلون ويخرجون." },
    { type: "narration", content: "ياماتو وقف صامتا للحظة." },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد…" },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "أنني في المكان الصحيح." },

    { type: "scene-break", content: "أمام البوابة" },
    { type: "narration", content: "وقف حارس عند المدخل." },
    { type: "dialogue", character: "الحارس", content: "ما غرضك؟" },
    { type: "dialogue", character: "ياماتو", content: "جئت للتسجيل." },
    { type: "narration", content: "الحارس نظر إليه قليلا." },
    { type: "dialogue", character: "الحارس", content: "اذهب إلى القاعة الرئيسية." },
    { type: "narration", content: "أشار نحو المبنى الكبير في الداخل." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "narration", content: "ثم دخل." },

    { type: "scene-break", content: "الساحة" },
    { type: "narration", content: "الساحة كانت مليئة بالطلاب." },
    { type: "narration", content: "بعضهم يتحدث." },
    { type: "narration", content: "بعضهم يتدرب." },
    { type: "narration", content: "بعضهم يتفاخر بقواه." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "الجو هنا… مختلف." },
    { type: "dialogue", character: "الشاب", content: "سمعت أن هناك طلابا جددا اليوم." },
    { type: "dialogue", character: "الطالب", content: "أتمنى أن يكون بينهم شخص قوي." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "أتمنى أيضا." },

    { type: "scene-break", content: "أول اصطدام" },
    { type: "narration", content: "بينما كان يمشي…" },
    { type: "narration", content: "اصطدم فجأة بشخص." },
    { type: "narration", content: "سقطت بعض الأوراق من يد ذلك الشخص." },
    { type: "dialogue", character: "ياماتو", content: "آه! آسف!" },
    { type: "narration", content: "انحنى بسرعة يلتقط الأوراق." },
    { type: "narration", content: "الشخص كان شابا هادئا بنظارات." },
    { type: "dialogue", character: "كينجي", content: "لا بأس." },
    { type: "narration", content: "ياماتو أعطاه الأوراق." },
    { type: "dialogue", character: "ياماتو", content: "اسمي ياماتو." },
    { type: "dialogue", character: "كينجي", content: "كينجي." },
    { type: "dialogue", character: "ياماتو", content: "هل أنت طالب هنا؟" },
    { type: "dialogue", character: "كينجي", content: "نعم." },
    { type: "narration", content: "ثم نظر إلى حقيبة ياماتو." },
    { type: "dialogue", character: "كينجي", content: "أنت جديد." },
    { type: "dialogue", character: "ياماتو", content: "واضح؟" },
    { type: "dialogue", character: "كينجي", content: "جدا." },
    { type: "narration", content: "ياماتو ضحك." },
    { type: "dialogue", character: "ياماتو", content: "هذه ثاني مرة أسمع هذا اليوم." },
    { type: "narration", content: "كينجي ابتسم قليلا." },
    { type: "dialogue", character: "كينجي", content: "هل جئت للتسجيل؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "كينجي", content: "اتبعني." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },

    { type: "scene-break", content: "القاعة" },
    { type: "narration", content: "دخل الاثنان مبنى كبيرا." },
    { type: "narration", content: "القاعة كانت مليئة بالطلاب الجدد." },
    { type: "narration", content: "بعضهم متوتر." },
    { type: "narration", content: "بعضهم واثق." },
    { type: "dialogue", character: "كينجي", content: "هنا يتم التسجيل." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "كم عدد الطلاب هنا؟" },
    { type: "dialogue", character: "كينجي", content: "الآلاف." },
    { type: "dialogue", character: "ياماتو", content: "الآلاف؟!" },
    { type: "dialogue", character: "كينجي", content: "الأكاديمية كبيرة." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "حسنا… المنافسة تبدو ممتعة." },
    { type: "narration", content: "كينجي نظر إليه." },
    { type: "dialogue", character: "كينجي", content: "أنت تبدو مرتاحا." },
    { type: "dialogue", character: "ياماتو", content: "أنا دائما مرتاح." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "حتى عندما لا أفهم ما يحدث." },
    { type: "narration", content: "كينجي ضحك لأول مرة." },

    { type: "scene-break", content: "بداية شيء جديد" },
    { type: "narration", content: "وقف الاثنان في الطابور." },
    { type: "narration", content: "أمامهم اختبار التسجيل." },
    { type: "narration", content: "اختبار سيحدد رتبة كل طالب." },
    { type: "narration", content: "ياماتو نظر إلى القاعة." },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "حسنا يا ياماتو…" },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "لنر أين ستضعك هذه الأكاديمية." },

    { type: "chapter-end", content: "— نهاية الفصل الأول — الجزء الرابع —" }
  ]
},
{
  id: 5,
  chapter: 5,
  title: "الجزء الخامس",
  subtitle: "بوابة الأكاديمية",
  sections: [
    { type: "scene-break", content: "أمام القاعة الرئيسية" },
    { type: "narration", content: "كانت القاعة الرئيسية لأكاديمية كاغيتسورا أكبر بكثير مما تخيله ياماتو." },
    { type: "narration", content: "الأرضية من الحجر المصقول." },
    { type: "narration", content: "الأعمدة ضخمة." },
    { type: "narration", content: "وسقف القاعة مرتفع لدرجة أن الصوت يرتد فيه." },
    { type: "narration", content: "طلاب جدد يقفون في طوابير طويلة." },
    { type: "narration", content: "بعضهم متوتر." },
    { type: "narration", content: "بعضهم يتباهى." },
    { type: "narration", content: "وبعضهم ينظر إلى الآخرين بتحد." },
    { type: "narration", content: "ياماتو وقف قرب الباب وهو ينظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "هذا المكان أكبر من القرية كلها." },
    { type: "narration", content: "كينجي الذي كان يقف بجانبه ابتسم قليلا." },
    { type: "dialogue", character: "كينجي", content: "ستعتاد عليه." },
    { type: "dialogue", character: "ياماتو", content: "أتمنى أنني لن أضيع هنا." },
    { type: "dialogue", character: "كينجي", content: "ستضيع." },
    { type: "dialogue", character: "ياماتو", content: "شكرا على التشجيع." },
    { type: "dialogue", character: "كينجي", content: "أنا فقط صادق." },
    { type: "dialogue", character: "ياماتو", content: "الصراحة أحيانا مؤلمة." },
    { type: "dialogue", character: "كينجي", content: "وواقعية." },
    { type: "dialogue", character: "ياماتو", content: "وأحيانا غير ضرورية." },
    { type: "narration", content: "كينجي ضحك بخفة." },

    { type: "scene-break", content: "الطابور" },
    { type: "narration", content: "وقف الاثنان في نهاية الطابور." },
    { type: "narration", content: "أمامهما عشرات الطلاب." },
    { type: "narration", content: "بعضهم يرتدي ملابس فاخرة." },
    { type: "narration", content: "بعضهم يبدو من عائلات نبيلة." },
    { type: "narration", content: "ياماتو نظر إلى شاب يقف أمامه." },
    { type: "narration", content: "الشاب كان يحمل عصا سحرية مزخرفة." },
    { type: "dialogue", character: "ياماتو", content: "عصاك جميلة." },
    { type: "dialogue", character: "الشاب", content: "بالطبع جميلة." },
    { type: "dialogue", character: "ياماتو", content: "هل هي قوية؟" },
    { type: "dialogue", character: "الشاب", content: "إنها مصنوعة في ورشة ملكية." },
    { type: "dialogue", character: "ياماتو", content: "واو." },
    { type: "narration", content: "ثم أضاف." },
    { type: "dialogue", character: "ياماتو", content: "أنا أملك عصا أيضا." },
    { type: "narration", content: "الشاب رفع حاجبه." },
    { type: "dialogue", character: "الشاب", content: "حقا؟" },
    { type: "dialogue", character: "ياماتو", content: "كنت أحرك بها الحساء." },
    { type: "narration", content: "كينجي انفجر ضاحكا." },
    { type: "narration", content: "الشاب نظر إليه بازدراء." },
    { type: "dialogue", character: "الشاب", content: "أنت تمزح." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الشاب", content: "هذا ليس مكان المزاح." },
    { type: "dialogue", character: "ياماتو", content: "أنا أمزح عندما أتوتر." },
    { type: "dialogue", character: "الشاب", content: "هل أنت متوتر؟" },
    { type: "narration", content: "ياماتو فكر لحظة." },
    { type: "dialogue", character: "ياماتو", content: "قليلا." },

    { type: "scene-break", content: "مراقبة الطلاب" },
    { type: "narration", content: "بدأ ياماتو ينظر حوله." },
    { type: "narration", content: "لاحظ مجموعة من الطلاب يتحدثون بصوت مرتفع." },
    { type: "dialogue", character: "الطالب", content: "أنا من عائلة كوروساوا." },
    { type: "dialogue", character: "الطالب", content: "والدي قائد فرسان." },
    { type: "dialogue", character: "الطالب", content: "أنا تدربت منذ الطفولة على السحر." },
    { type: "dialogue", character: "الطالب", content: "هدفي الوصول إلى رتبة A قبل التخرج." },
    { type: "narration", content: "ياماتو همس لكينجي." },
    { type: "dialogue", character: "ياماتو", content: "هل الجميع هنا جادون هكذا؟" },
    { type: "dialogue", character: "كينجي", content: "تقريبا." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أنني الوحيد الذي جاء للمغامرة." },
    { type: "dialogue", character: "كينجي", content: "الأكاديمية ليست مغامرة." },
    { type: "dialogue", character: "ياماتو", content: "كل شيء مغامرة إذا فكرت فيه." },
    { type: "dialogue", character: "كينجي", content: "حتى الامتحان؟" },
    { type: "dialogue", character: "ياماتو", content: "خصوصا الامتحان." },

    { type: "scene-break", content: "اقتراب دورهم" },
    { type: "narration", content: "بدأ الطابور يتحرك ببطء." },
    { type: "narration", content: "كل طالب يصل إلى الطاولة الأمامية." },
    { type: "narration", content: "يعطي اسمه." },
    { type: "narration", content: "ثم يأخذ ورقة التسجيل." },
    { type: "narration", content: "ياماتو بدأ يشعر بالحماس." },
    { type: "narration", content: "وأيضا بقليل من القلق." },
    { type: "dialogue", character: "ياماتو", content: "كينجي." },
    { type: "dialogue", character: "كينجي", content: "نعم؟" },
    { type: "dialogue", character: "ياماتو", content: "هل الامتحان صعب؟" },
    { type: "dialogue", character: "كينجي", content: "يعتمد على الشخص." },
    { type: "dialogue", character: "ياماتو", content: "هذا ليس جوابا مريحا." },
    { type: "dialogue", character: "كينجي", content: "الحقيقة نادرا ما تكون مريحة." },
    { type: "dialogue", character: "ياماتو", content: "أنت فيلسوف." },
    { type: "dialogue", character: "كينجي", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "فقط صريح." },
    { type: "dialogue", character: "كينجي", content: "نعم." },

    { type: "scene-break", content: "لحظة التسجيل" },
    { type: "narration", content: "وصل دور كينجي أولا." },
    { type: "narration", content: "جلس أمام الموظف." },
    { type: "dialogue", character: "الموظف", content: "الاسم." },
    { type: "dialogue", character: "كينجي", content: "كينجي موريتا." },
    { type: "narration", content: "الموظف كتب بسرعة." },
    { type: "dialogue", character: "الموظف", content: "العمر." },
    { type: "dialogue", character: "كينجي", content: "أربعة وعشرون." },
    { type: "narration", content: "الموظف أعطاه ورقة." },
    { type: "dialogue", character: "الموظف", content: "انتظر هناك حتى يبدأ الاختبار." },
    { type: "narration", content: "كينجي وقف." },
    { type: "narration", content: "ثم نظر إلى ياماتو." },
    { type: "dialogue", character: "كينجي", content: "حظا سعيدا." },
    { type: "dialogue", character: "ياماتو", content: "إذا فشلت… سنلتقي في الخارج." },
    { type: "dialogue", character: "كينجي", content: "لن تفشل." },
    { type: "dialogue", character: "ياماتو", content: "هذا تفاؤل كبير." },

    { type: "scene-break", content: "دور ياماتو" },
    { type: "narration", content: "جلس ياماتو أمام الطاولة." },
    { type: "narration", content: "الموظف لم يرفع رأسه." },
    { type: "dialogue", character: "الموظف", content: "الاسم." },
    { type: "dialogue", character: "ياماتو", content: "ياماتو." },
    { type: "dialogue", character: "الموظف", content: "العمر." },
    { type: "dialogue", character: "ياماتو", content: "ثلاثون." },
    { type: "narration", content: "توقف قلم الموظف." },
    { type: "narration", content: "رفع رأسه." },
    { type: "narration", content: "نظر إليه." },
    { type: "dialogue", character: "الموظف", content: "ثلاثون؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الموظف", content: "هذا… متأخر قليلا." },
    { type: "dialogue", character: "ياماتو", content: "أحب أن أصل متأخرا حتى أترك انطباعا." },
    { type: "narration", content: "الموظف لم يضحك." },
    { type: "dialogue", character: "الموظف", content: "الغرض من الانضمام؟" },
    { type: "narration", content: "ياماتو فكر لحظة." },
    { type: "dialogue", character: "ياماتو", content: "لأصبح ساحرا عظيما." },
    { type: "narration", content: "الموظف كتب." },
    { type: "dialogue", character: "الموظف", content: "الجميع يقول ذلك." },
    { type: "dialogue", character: "ياماتو", content: "لكن ليس الجميع ينجح." },
    { type: "narration", content: "الموظف أعطاه الورقة." },
    { type: "dialogue", character: "الموظف", content: "انتظر هناك." },
    { type: "narration", content: "ياماتو وقف." },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "حسنا… الخطوة الأولى تمت." },

    { type: "scene-break", content: "بداية الاختبار" },
    { type: "narration", content: "وقف الطلاب في ساحة التدريب." },
    { type: "narration", content: "في وسط الساحة…" },
    { type: "narration", content: "كان هناك جهاز حجري ضخم." },
    { type: "narration", content: "كرة بلورية كبيرة مثبتة فوق قاعدة." },
    { type: "narration", content: "همسات بدأت تنتشر." },
    { type: "dialogue", character: "الطالب", content: "هذا جهاز قياس المانا." },
    { type: "dialogue", character: "الطالب", content: "سيحدد رتبتنا." },
    { type: "narration", content: "ياماتو نظر إلى الكرة البلورية." },
    { type: "dialogue", character: "ياماتو", content: "إذن…" },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "الآن تبدأ المغامرة الحقيقية." },
    { type: "narration", content: "كينجي وقف بجانبه." },
    { type: "dialogue", character: "كينجي", content: "نعم." },
    { type: "narration", content: "ثم نظر إلى الطلاب." },
    { type: "dialogue", character: "كينجي", content: "لنر ماذا سيحدث." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "أنا أيضا فضولي." },

    { type: "chapter-end", content: "— نهاية الفصل الأول — الجزء الخامس —" }
  ]
},
{
  id: 6,
  chapter: 6,
  title: "الجزء الأول",
  subtitle: "اليوم الأول الحقيقي",
  sections: [
    { type: "scene-break", content: "ساحة الاختبار" },
    { type: "narration", content: "كانت ساحة التدريب في أكاديمية كاغيتسورا واسعة جدا." },
    { type: "narration", content: "الأرضية مغطاة بالحجر الرمادي المصقول، وعلى الجانبين وقفت تماثيل قديمة لسحرة من الماضي." },
    { type: "narration", content: "في وسط الساحة…" },
    { type: "narration", content: "كانت الكرة البلورية الضخمة." },
    { type: "narration", content: "جهاز قياس المانا." },
    { type: "narration", content: "الطلاب الجدد وقفوا في صفوف طويلة." },
    { type: "narration", content: "الهمسات تنتشر بينهم." },
    { type: "narration", content: "بعضهم متوتر." },
    { type: "narration", content: "بعضهم واثق." },
    { type: "narration", content: "وبعضهم يتصرف وكأنه أقوى شخص في العالم." },
    { type: "narration", content: "ياماتو وقف بين الصفوف ينظر إلى كل شيء حوله." },
    { type: "narration", content: "عيناه تتحركان يمينا ويسارا." },
    { type: "dialogue", character: "ياماتو", content: "هذا المكان يشبه ساحة تدريب جيش." },
    { type: "narration", content: "كينجي وقف بجانبه." },
    { type: "dialogue", character: "كينجي", content: "تقريبا." },
    { type: "dialogue", character: "ياماتو", content: "هل نحن متأكدون أننا لم نسجل في الجيش بالخطأ؟" },
    { type: "narration", content: "كينجي ابتسم قليلا." },
    { type: "dialogue", character: "كينجي", content: "لا تقلق… الجيش أسوأ." },
    { type: "dialogue", character: "ياماتو", content: "ممتاز." },

    { type: "scene-break", content: "بداية الحديث" },
    { type: "narration", content: "وقف رجل طويل أمام الطلاب." },
    { type: "narration", content: "يرتدي معطفا أسود طويلا." },
    { type: "narration", content: "صوته كان عميقا وواضحا." },
    { type: "dialogue", character: "المدرب", content: "اصغوا جيدا." },
    { type: "narration", content: "الهمسات توقفت." },
    { type: "dialogue", character: "المدرب", content: "هذا هو اختبار المانا." },
    { type: "narration", content: "ثم أشار إلى الكرة البلورية." },
    { type: "dialogue", character: "المدرب", content: "كل واحد منكم سيضع يده على الكرة." },
    { type: "narration", content: "ثم قال ببطء." },
    { type: "dialogue", character: "المدرب", content: "الجهاز سيقيس كمية المانا في جسدكم." },
    { type: "narration", content: "ثم أضاف." },
    { type: "dialogue", character: "المدرب", content: "وسيحدد رتبتكم." },
    { type: "narration", content: "همسات جديدة انتشرت." },
    { type: "dialogue", character: "الطالب", content: "أتمنى أن أحصل على B." },
    { type: "dialogue", character: "الطالب", content: "أنا متأكد أنني A." },
    { type: "dialogue", character: "ياماتو", content: "هل يوجد رتبة للنائمين؟" },
    { type: "dialogue", character: "كينجي", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "هذا ظلم." },

    { type: "scene-break", content: "بداية الاختبار" },
    { type: "narration", content: "بدأ الطلاب يتقدمون واحدا تلو الآخر." },
    { type: "narration", content: "الطالب الأول وضع يده على الكرة." },
    { type: "narration", content: "الكرة أضاءت بلون أزرق." },
    { type: "dialogue", character: "الجهاز", content: "الرتبة… D." },
    { type: "narration", content: "الطالب تنهد." },
    { type: "dialogue", character: "الطالب", content: "ليست سيئة." },
    { type: "dialogue", character: "الطالب", content: "أفضل من F على الأقل." },
    { type: "dialogue", character: "ياماتو", content: "يوجد F؟" },
    { type: "dialogue", character: "كينجي", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "كم شخص يحصل عليها؟" },
    { type: "dialogue", character: "كينجي", content: "نادرا." },
    { type: "dialogue", character: "ياماتو", content: "إذن سأحاول أن لا أكون ذلك الشخص." },

    { type: "scene-break", content: "الطالب المتفاخر" },
    { type: "narration", content: "بعد عدة طلاب…" },
    { type: "narration", content: "تقدم شاب أنيق." },
    { type: "narration", content: "نفس الشاب الذي تحدث مع ياماتو في الطابور." },
    { type: "dialogue", character: "الشاب", content: "راقبوا جيدا." },
    { type: "narration", content: "وضع يده على الكرة." },
    { type: "narration", content: "الكرة أضاءت بقوة." },
    { type: "dialogue", character: "الجهاز", content: "الرتبة… B." },
    { type: "narration", content: "بعض الطلاب صفقوا." },
    { type: "narration", content: "الشاب ابتسم بفخر." },
    { type: "narration", content: "ثم نظر إلى ياماتو." },
    { type: "dialogue", character: "الشاب", content: "أخبرتك أنني قوي." },
    { type: "dialogue", character: "ياماتو", content: "مبروك." },
    { type: "dialogue", character: "الشاب", content: "ماذا عنك؟" },
    { type: "dialogue", character: "ياماتو", content: "لا أعلم." },
    { type: "dialogue", character: "الشاب", content: "أتمنى أن لا تبكي." },
    { type: "dialogue", character: "ياماتو", content: "إذا بكيت… سيكون بسبب الحماس." },

    { type: "scene-break", content: "دور كينجي" },
    { type: "narration", content: "بعد عدة طلاب…" },
    { type: "narration", content: "جاء دور كينجي." },
    { type: "narration", content: "اقترب من الكرة." },
    { type: "dialogue", character: "ياماتو", content: "حسنا يا كينجي… أرنا قوتك." },
    { type: "narration", content: "كينجي وضع يده." },
    { type: "narration", content: "الكرة أضاءت بلون أزرق قوي." },
    { type: "dialogue", character: "الجهاز", content: "الرتبة… C." },
    { type: "dialogue", character: "ياماتو", content: "ليس سيئا!" },
    { type: "narration", content: "كينجي عاد إليه." },
    { type: "dialogue", character: "كينجي", content: "أفضل من لا شيء." },
    { type: "dialogue", character: "ياماتو", content: "أنا فخور بك." },
    { type: "dialogue", character: "كينجي", content: "كأنك والدي." },
    { type: "dialogue", character: "ياماتو", content: "أنا أكبر منك بست سنوات." },
    { type: "dialogue", character: "كينجي", content: "لا تذكرني." },

    { type: "scene-break", content: "دور ياماتو" },
    { type: "narration", content: "أخيرا…" },
    { type: "dialogue", character: "المدرب", content: "ياماتو." },
    { type: "narration", content: "بعض الطلاب التفتوا." },
    { type: "narration", content: "ياماتو تقدم ببطء." },
    { type: "narration", content: "وقف أمام الكرة البلورية." },
    { type: "narration", content: "ثم نظر إليها." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "لا تخذلني." },
    { type: "narration", content: "وضع يده على الكرة." },
    { type: "narration", content: "ثانية…" },
    { type: "narration", content: "ثانيتان…" },
    { type: "narration", content: "الكرة لم تضيء كثيرا." },
    { type: "narration", content: "بعض الطلاب بدأوا يهمسون." },
    { type: "dialogue", character: "الطالب", content: "هل الجهاز معطل؟" },
    { type: "dialogue", character: "الطالب", content: "لا… إنه يعمل." },
    { type: "dialogue", character: "الجهاز", content: "الرتبة… F." },
    { type: "narration", content: "صمت." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "ضحك." },
    { type: "narration", content: "الطلاب بدأوا يضحكون." },
    { type: "dialogue", character: "الطالب", content: "هل هذه مزحة؟" },
    { type: "dialogue", character: "الطالب", content: "لم أر F من قبل." },
    { type: "dialogue", character: "الشاب", content: "قلت لك." },
    { type: "narration", content: "ياماتو وقف صامتا." },
    { type: "narration", content: "ثم نظر إلى الكرة." },
    { type: "dialogue", character: "ياماتو", content: "هممم." },
    { type: "narration", content: "ثم حك رأسه." },
    { type: "dialogue", character: "ياماتو", content: "كنت أتمنى على الأقل E." },
    { type: "narration", content: "الطلاب ضحكوا أكثر." },
    { type: "narration", content: "كينجي نظر إليه بقلق." },
    { type: "dialogue", character: "كينجي", content: "هل أنت بخير؟" },
    { type: "dialogue", character: "ياماتو", content: "بالطبع." },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "يبدو أن المغامرة أصبحت أكثر إثارة." },

    { type: "scene-break", content: "نهاية اليوم الأول" },
    { type: "narration", content: "بعد الاختبار…" },
    { type: "narration", content: "بدأ الطلاب يتفرقون." },
    { type: "narration", content: "بعضهم يتفاخر." },
    { type: "narration", content: "بعضهم يناقش نتائجه." },
    { type: "narration", content: "ياماتو كان يمشي في الساحة." },
    { type: "narration", content: "كينجي لحق به." },
    { type: "dialogue", character: "كينجي", content: "لا تهتم بما قالوه." },
    { type: "dialogue", character: "ياماتو", content: "لا أهتم." },
    { type: "dialogue", character: "كينجي", content: "حقا؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "لو بدأت من القاع…" },
    { type: "narration", content: "ثم أكمل." },
    { type: "dialogue", character: "ياماتو", content: "الطريق للأعلى سيكون أطول." },
    { type: "dialogue", character: "كينجي", content: "وأصعب." },
    { type: "dialogue", character: "ياماتو", content: "وأكثر متعة." },
    { type: "narration", content: "كينجي هز رأسه." },
    { type: "dialogue", character: "كينجي", content: "أنت غريب." },
    { type: "dialogue", character: "ياماتو", content: "سمعت هذا كثيرا اليوم." },

    { type: "chapter-end", content: "— نهاية الفصل الثاني — الجزء الأول —" }
  ]
},
{
  id: 7,
  chapter: 7,
  title: "الجزء الثاني",
  subtitle: "صباح الأكاديمية",
  sections: [
    { type: "scene-break", content: "غرفة الطلاب" },
    { type: "narration", content: "كان الصباح في أكاديمية كاغيتسورا مختلفا عن أي صباح عرفه ياماتو في حياته." },
    { type: "narration", content: "لا أصوات دجاج." },
    { type: "narration", content: "ولا رائحة طعام القرى." },
    { type: "narration", content: "بل صوت جرس معدني ضخم اهتز في أرجاء المبنى." },
    { type: "combat", content: "دونغ... دونغ..." },
    { type: "narration", content: "اهتزت الجدران قليلا." },
    { type: "narration", content: "في إحدى الغرف الطويلة التي يسكنها الطلاب الجدد…" },
    { type: "narration", content: "فتح ياماتو عينيه فجأة." },
    { type: "narration", content: "جلس بسرعة." },
    { type: "dialogue", character: "ياماتو", content: "ماذا يحدث؟!" },
    { type: "narration", content: "نظر حوله." },
    { type: "narration", content: "عدة أسرّة مصطفة في الغرفة." },
    { type: "narration", content: "طلاب آخرون ينهضون بتعب." },
    { type: "dialogue", character: "الطالب", content: "الجرس الصباحي…" },
    { type: "dialogue", character: "ياماتو", content: "الجرس الصباحي؟" },
    { type: "dialogue", character: "الطالب", content: "بداية اليوم الدراسي." },
    { type: "narration", content: "ياماتو نظر إلى النافذة." },
    { type: "narration", content: "الشمس بالكاد ظهرت." },
    { type: "dialogue", character: "ياماتو", content: "لكن الشمس لم تستيقظ بعد!" },
    { type: "dialogue", character: "الطالب", content: "الأكاديمية تستيقظ قبل الشمس." },
    { type: "dialogue", character: "ياماتو", content: "هذا ظلم للطبيعة." },

    { type: "scene-break", content: "الاستعداد" },
    { type: "narration", content: "وقف ياماتو ببطء." },
    { type: "narration", content: "نظر إلى ملابس الأكاديمية الموضوعة قرب السرير." },
    { type: "narration", content: "معطف أسود طويل يحمل شعار الأكاديمية." },
    { type: "narration", content: "ياماتو حمله." },
    { type: "dialogue", character: "ياماتو", content: "واو…" },
    { type: "narration", content: "ثم قال لنفسه." },
    { type: "dialogue", character: "ياماتو", content: "أنا أبدو كطالب حقيقي الآن." },
    { type: "dialogue", character: "الطالب", content: "أنت الطالب الذي حصل على F." },
    { type: "narration", content: "الصمت سقط للحظة." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الطالب", content: "هذا مثير للإعجاب." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "dialogue", character: "الطالب", content: "لم أر ذلك من قبل." },
    { type: "dialogue", character: "ياماتو", content: "أنا أحب أن أكون مميزا." },

    { type: "scene-break", content: "الممر" },
    { type: "narration", content: "خرج الطلاب من الغرفة." },
    { type: "narration", content: "الممر كان مليئا بالحركة." },
    { type: "narration", content: "طلاب يمشون بسرعة." },
    { type: "narration", content: "آخرون يتحدثون." },
    { type: "narration", content: "ياماتو خرج وهو ينظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "هذا المكان يشبه خلية نحل." },
    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "ظهر كينجي من خلفه." },
    { type: "dialogue", character: "كينجي", content: "صباح الخير." },
    { type: "dialogue", character: "ياماتو", content: "صباح الخير." },
    { type: "narration", content: "ثم نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "هل استيقظت بسهولة؟" },
    { type: "dialogue", character: "كينجي", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "ممتاز… لست وحدي." },

    { type: "scene-break", content: "الطريق إلى القاعة" },
    { type: "narration", content: "بدأ الاثنان يمشيان في الممر الطويل." },
    { type: "narration", content: "الجدران مغطاة بلوحات قديمة لسحرة." },
    { type: "narration", content: "ياماتو توقف أمام لوحة." },
    { type: "dialogue", character: "ياماتو", content: "من هذا؟" },
    { type: "dialogue", character: "كينجي", content: "أحد سحرة الماضي." },
    { type: "dialogue", character: "ياماتو", content: "هل هو قوي؟" },
    { type: "dialogue", character: "كينجي", content: "يقولون إنه كان رتبة S." },
    { type: "narration", content: "ياماتو اقترب من اللوحة." },
    { type: "dialogue", character: "ياماتو", content: "إذا أصبحت ساحرا عظيما…" },
    { type: "dialogue", character: "ياماتو", content: "أريد لوحة أيضا." },
    { type: "dialogue", character: "كينجي", content: "ربما." },
    { type: "dialogue", character: "ياماتو", content: "لكن أرجوك اجعلها تبدو وسيمة." },
    { type: "dialogue", character: "كينجي", content: "هذا خارج قدرتي." },

    { type: "scene-break", content: "قاعة الطعام" },
    { type: "narration", content: "وصل الاثنان إلى قاعة الطعام." },
    { type: "narration", content: "المكان واسع." },
    { type: "narration", content: "طاولات طويلة." },
    { type: "narration", content: "طلاب يجلسون ويتناولون الإفطار." },
    { type: "narration", content: "ياماتو جلس." },
    { type: "narration", content: "نظر إلى الطعام." },
    { type: "dialogue", character: "ياماتو", content: "هذا أفضل من طعام الرحلة." },
    { type: "dialogue", character: "كينجي", content: "استمتع به." },
    { type: "narration", content: "ياماتو بدأ يأكل بسرعة." },
    { type: "dialogue", character: "كينجي", content: "هل كنت جائعا؟" },
    { type: "dialogue", character: "ياماتو", content: "جدا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أن التدريب سيكون أسهل إذا كنت ممتلئا." },
    { type: "dialogue", character: "كينجي", content: "من قال إن التدريب اليوم؟" },
    { type: "narration", content: "ياماتو توقف عن الأكل." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "كينجي", content: "اليوم أول درس." },
    { type: "dialogue", character: "ياماتو", content: "درس؟" },
    { type: "dialogue", character: "كينجي", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "أنا أفضل القتال." },
    { type: "dialogue", character: "كينجي", content: "الجميع يقول ذلك." },

    { type: "scene-break", content: "ظهور الطلاب الأقوياء" },
    { type: "narration", content: "فجأة دخلت مجموعة من الطلاب إلى القاعة." },
    { type: "narration", content: "الطلاب توقفوا عن الكلام قليلا." },
    { type: "narration", content: "ياماتو لاحظ ذلك." },
    { type: "dialogue", character: "ياماتو", content: "من هؤلاء؟" },
    { type: "dialogue", character: "كينجي", content: "هؤلاء من أقوى طلاب الأكاديمية." },
    { type: "narration", content: "ياماتو نظر إليهم." },
    { type: "narration", content: "شاب طويل بشعر أسود." },
    { type: "narration", content: "فتاة بشعر فضي." },
    { type: "narration", content: "شاب آخر يبدو هادئا جدا." },
    { type: "dialogue", character: "ياماتو", content: "هل هم نبلاء؟" },
    { type: "dialogue", character: "كينجي", content: "بعضهم." },
    { type: "dialogue", character: "ياماتو", content: "يبدون مخيفين." },
    { type: "dialogue", character: "كينجي", content: "لأنهم أقوياء." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "dialogue", character: "كينجي", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "هدفي الجديد." },
    { type: "dialogue", character: "كينجي", content: "أن تهزمهم؟" },
    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "dialogue", character: "كينجي", content: "ماذا إذن؟" },
    { type: "dialogue", character: "ياماتو", content: "أن لا يقتلوني." },

    { type: "scene-break", content: "بداية الحصة" },
    { type: "narration", content: "بعد الإفطار…" },
    { type: "narration", content: "ذهب الطلاب إلى ساحة التدريب." },
    { type: "narration", content: "وقف المدرب أمامهم." },
    { type: "dialogue", character: "المدرب", content: "اليوم…" },
    { type: "narration", content: "ثم نظر إلى الطلاب." },
    { type: "dialogue", character: "المدرب", content: "سنرى من منكم يستطيع التحكم بماناه." },
    { type: "dialogue", character: "ياماتو", content: "هل يمكنني الهرب الآن؟" },
    { type: "dialogue", character: "كينجي", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "حسنا… سأبقى." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "المغامرة بدأت." },

    { type: "chapter-end", content: "— نهاية الفصل الثاني — الجزء الثاني —" }
  ]
},
{
  id: 8,
  chapter: 8,
  title: "الجزء الثالث",
  subtitle: "أول تدريب",
  sections: [
    { type: "scene-break", content: "ساحة التدريب" },
    { type: "narration", content: "كانت ساحة التدريب الخلفية للأكاديمية أوسع بكثير مما بدت عليه من بعيد." },
    { type: "narration", content: "الأرضية مغطاة بحجارة مسطحة، وعلى أطرافها تقف أعمدة حجرية قديمة محفور عليها رموز سحرية." },
    { type: "narration", content: "في منتصف الساحة وقف المدرب." },
    { type: "narration", content: "رجل طويل القامة، شعره أسود قصير، وعيناه حادتان كأنهما تفحصان كل طالب أمامه." },
    { type: "narration", content: "الطلاب اصطفوا في صفوف." },
    { type: "narration", content: "بعضهم يقف بثقة." },
    { type: "narration", content: "بعضهم متوتر." },
    { type: "narration", content: "وبعضهم يحاول أن يبدو قويا أكثر مما هو عليه." },
    { type: "narration", content: "أما ياماتو…" },
    { type: "narration", content: "فكان يقف وهو يتثاءب قليلا." },
    { type: "dialogue", character: "كينجي", content: "هل نمت جيدا؟" },
    { type: "dialogue", character: "ياماتو", content: "ليس تماما." },
    { type: "dialogue", character: "كينجي", content: "لماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "السرير كان مريحا جدا." },
    { type: "dialogue", character: "كينجي", content: "وهذا سيئ؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم… جعلني لا أريد الاستيقاظ." },
    { type: "narration", content: "كينجي هز رأسه." },
    { type: "dialogue", character: "كينجي", content: "أنت شخص غريب." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },

    { type: "scene-break", content: "تعليمات المدرب" },
    { type: "narration", content: "رفع المدرب يده." },
    { type: "dialogue", character: "المدرب", content: "اصغوا جيدا." },
    { type: "narration", content: "صمت الطلاب." },
    { type: "dialogue", character: "المدرب", content: "اختبار الأمس كان لقياس كمية المانا فقط." },
    { type: "narration", content: "ثم بدأ يمشي ببطء أمام الصفوف." },
    { type: "dialogue", character: "المدرب", content: "لكن امتلاك المانا لا يعني أنك تعرف استخدامها." },
    { type: "narration", content: "توقف أمام أحد الطلاب." },
    { type: "dialogue", character: "المدرب", content: "اليوم سنبدأ بتعلم التحكم بالمانا." },
    { type: "narration", content: "ثم نظر إلى الجميع." },
    { type: "dialogue", character: "المدرب", content: "من لا يستطيع التحكم بماناه…" },
    { type: "narration", content: "ثم قال ببرود." },
    { type: "dialogue", character: "المدرب", content: "لن يتقدم خطوة واحدة في هذه الأكاديمية." },
    { type: "dialogue", character: "ياماتو", content: "هذا يبدو صعبا." },
    { type: "dialogue", character: "كينجي", content: "كل شيء هنا صعب." },
    { type: "dialogue", character: "ياماتو", content: "كنت أتمنى أن يكون هناك فصل للنوم." },
    { type: "dialogue", character: "كينجي", content: "للأسف لا يوجد." },

    { type: "scene-break", content: "التدريب الأول" },
    { type: "narration", content: "أشار المدرب إلى الأعمدة الحجرية." },
    { type: "dialogue", character: "المدرب", content: "كل واحد منكم سيقف أمام عمود." },
    { type: "narration", content: "بدأ الطلاب يتحركون." },
    { type: "narration", content: "ياماتو وكينجي وقفا أمام عمود قريب." },
    { type: "dialogue", character: "المدرب", content: "التمرين بسيط." },
    { type: "narration", content: "ثم رفع يده." },
    { type: "narration", content: "ظهر وميض خفيف من الطاقة حول أصابعه." },
    { type: "dialogue", character: "المدرب", content: "ركزوا ماناكم في أيديكم…" },
    { type: "narration", content: "ثم أشار إلى العمود." },
    { type: "dialogue", character: "المدرب", content: "واضربوا العمود." },
    { type: "dialogue", character: "الطالب", content: "هذا سهل." },
    { type: "narration", content: "تقدم." },
    { type: "narration", content: "ركز ماناه." },
    { type: "narration", content: "ثم ضرب العمود." },
    { type: "combat", content: "بوم!" },
    { type: "narration", content: "ظهر وميض أزرق." },
    { type: "narration", content: "المدرب نظر إلى العمود." },
    { type: "dialogue", character: "المدرب", content: "جيد." },
    { type: "narration", content: "الطالب ابتسم بفخر." },

    { type: "scene-break", content: "دور كينجي" },
    { type: "narration", content: "جاء دور كينجي." },
    { type: "narration", content: "تنفس بعمق." },
    { type: "narration", content: "ركز ماناه." },
    { type: "narration", content: "ثم ضرب العمود." },
    { type: "combat", content: "ضربة خفيفة." },
    { type: "narration", content: "العمود اهتز قليلا." },
    { type: "dialogue", character: "المدرب", content: "مقبول." },
    { type: "narration", content: "كينجي عاد إلى مكانه." },
    { type: "narration", content: "نظر إلى ياماتو." },
    { type: "dialogue", character: "كينجي", content: "دورك." },
    { type: "narration", content: "ياماتو نظر إلى العمود." },
    { type: "narration", content: "ثم إلى يده." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "يا مانا… لا تحرجيني." },
    { type: "dialogue", character: "كينجي", content: "أنت تتحدث مع المانا؟" },
    { type: "dialogue", character: "ياماتو", content: "أحاول التفاوض معها." },

    { type: "scene-break", content: "محاولة ياماتو" },
    { type: "narration", content: "وقف أمام العمود." },
    { type: "narration", content: "أخذ نفسا عميقا." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم قال لنفسه." },
    { type: "dialogue", character: "ياماتو", content: "ركز." },
    { type: "narration", content: "رفع يده." },
    { type: "narration", content: "حاول أن يشعر بالمانا." },
    { type: "narration", content: "ثانية…" },
    { type: "narration", content: "ثانيتان…" },
    { type: "narration", content: "ثلاث ثوان." },
    { type: "narration", content: "ثم ضرب العمود." },
    { type: "combat", content: "طَق." },
    { type: "narration", content: "الصوت كان ضعيفا جدا." },
    { type: "narration", content: "كأنه طرق خفيف." },
    { type: "narration", content: "بعض الطلاب بدأوا يضحكون." },
    { type: "dialogue", character: "الطالب", content: "هل ضرب العمود أم داعبه؟" },
    { type: "dialogue", character: "الطالب", content: "هذا مستوى F بالفعل." },
    { type: "narration", content: "الضحك انتشر." },
    { type: "narration", content: "ياماتو نظر إلى العمود." },
    { type: "dialogue", character: "ياماتو", content: "هممم." },
    { type: "narration", content: "ثم ضربه مرة أخرى." },
    { type: "combat", content: "طَق." },
    { type: "narration", content: "نفس النتيجة." },
    { type: "narration", content: "كينجي اقترب قليلا." },
    { type: "dialogue", character: "كينجي", content: "لا بأس." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أن العمود أقوى مني." },
    { type: "dialogue", character: "كينجي", content: "في الوقت الحالي." },
    { type: "dialogue", character: "ياماتو", content: "أتمنى أن لا يكون دائما." },

    { type: "scene-break", content: "المدرب يلاحظ" },
    { type: "narration", content: "المدرب كان يراقب الطلاب." },
    { type: "narration", content: "عندما وصل إلى ياماتو…" },
    { type: "narration", content: "وقف أمامه." },
    { type: "dialogue", character: "المدرب", content: "اسمك." },
    { type: "dialogue", character: "ياماتو", content: "ياماتو." },
    { type: "dialogue", character: "المدرب", content: "أنت صاحب رتبة F." },
    { type: "dialogue", character: "ياماتو", content: "للأسف نعم." },
    { type: "narration", content: "المدرب نظر إلى العمود." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "المدرب", content: "اضرب مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ركز مرة أخرى." },
    { type: "narration", content: "ثم ضرب." },
    { type: "combat", content: "طَق." },
    { type: "narration", content: "المدرب بقي صامتا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "المدرب", content: "ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "أتفق." },
    { type: "narration", content: "بعض الطلاب ضحكوا." },
    { type: "narration", content: "لكن المدرب لم يضحك." },
    { type: "dialogue", character: "المدرب", content: "لكن…" },
    { type: "narration", content: "توقف قليلا." },
    { type: "dialogue", character: "المدرب", content: "استمر." },
    { type: "narration", content: "ثم مشى بعيدا." },
    { type: "narration", content: "ياماتو نظر إلى كينجي." },
    { type: "dialogue", character: "ياماتو", content: "هل قال شيئا جيدا؟" },
    { type: "dialogue", character: "كينجي", content: "أعتقد أنه قال لا تستسلم." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "جيد." },
    { type: "narration", content: "ثم رفع يده مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "سنحاول مرة أخرى." },

    { type: "scene-break", content: "استراحة قصيرة" },
    { type: "narration", content: "بعد ساعة من التدريب…" },
    { type: "narration", content: "أمر المدرب بالاستراحة." },
    { type: "narration", content: "جلس الطلاب على الأرض أو قرب الأعمدة." },
    { type: "narration", content: "ياماتو جلس وهو يمسح العرق عن جبينه." },
    { type: "dialogue", character: "ياماتو", content: "لم أتعب هكذا منذ نقل الحطب في القرية." },
    { type: "narration", content: "كينجي جلس بجانبه." },
    { type: "dialogue", character: "كينجي", content: "هذا مجرد تدريب البداية." },
    { type: "dialogue", character: "ياماتو", content: "لا تقل ذلك." },
    { type: "narration", content: "ثم نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "لكن بصراحة…" },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "أنا مستمتع." },
    { type: "dialogue", character: "كينجي", content: "حتى بعد الضحك عليك؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "كينجي", content: "لماذا؟" },
    { type: "narration", content: "ياماتو نظر إلى السماء." },
    { type: "dialogue", character: "ياماتو", content: "لأنني أخيرا في مكان جديد." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "والمغامرات لا تبدأ بسهولة." },
    { type: "narration", content: "كينجي ابتسم قليلا." },
    { type: "dialogue", character: "كينجي", content: "أعتقد أنك محق." },

    { type: "scene-break", content: "نهاية التدريب" },
    { type: "narration", content: "بعد الاستراحة عاد المدرب." },
    { type: "dialogue", character: "المدرب", content: "انتهى التدريب اليوم." },
    { type: "narration", content: "الطلاب بدأوا بالمغادرة." },
    { type: "narration", content: "ياماتو وقف." },
    { type: "narration", content: "ثم نظر إلى العمود مرة أخيرة." },
    { type: "dialogue", character: "ياماتو", content: "في يوم ما…" },
    { type: "narration", content: "ثم ضربه بخفة." },
    { type: "dialogue", character: "ياماتو", content: "سأكسر واحدا منكم." },
    { type: "narration", content: "كينجي ضحك." },
    { type: "dialogue", character: "كينجي", content: "أتمنى أن لا يكون عمودا تاريخيا." },
    { type: "dialogue", character: "ياماتو", content: "لا وعود." },

    { type: "chapter-end", content: "— نهاية الفصل الثاني — الجزء الثالث —" }
  ]
},
{
id:9,
chapter: 9,
title:"الجزء الرابع",
subtitle:"أيام الأكاديمية",

sections:[

{type:"scene-break", content:"طريق العودة من التدريب"},

{type:"narration", content:"بعد انتهاء التدريب…"},
{type:"narration", content:"بدأ الطلاب يغادرون ساحة التدريب على شكل مجموعات صغيرة."},
{type:"narration", content:"بعضهم يتحدث عن أدائه."},
{type:"narration", content:"بعضهم يتباهى."},
{type:"narration", content:"وبعضهم يشتكي من التعب."},

{type:"narration", content:"أما ياماتو…"},
{type:"narration", content:"فكان يمشي وهو يهز يده قليلا."},

{type:"dialogue", character:"ياماتو", content:"أعتقد أن يدي لم تعد يدي."},

{type:"narration", content:"كينجي نظر إليه."},

{type:"dialogue", character:"كينجي", content:"هذا طبيعي."},
{type:"dialogue", character:"ياماتو", content:"طبيعي؟"},
{type:"dialogue", character:"كينجي", content:"أول تدريب دائما هكذا."},
{type:"dialogue", character:"ياماتو", content:"في قريتي كان التدريب يعني حمل الحطب."},
{type:"dialogue", character:"كينجي", content:"هنا ستتمنى لو كان التدريب حمل حطب فقط."},

{type:"narration", content:"ياماتو تنهد."},

{type:"dialogue", character:"ياماتو", content:"بدأت أندم قليلا."},

{type:"narration", content:"كينجي ابتسم."},

{type:"dialogue", character:"كينجي", content:"فات الأوان."},


{type:"scene-break", content:"الممر الطويل"},

{type:"narration", content:"دخل الاثنان إلى المبنى الرئيسي."},
{type:"narration", content:"الممرات كانت طويلة ومزدحمة بالطلاب."},
{type:"narration", content:"بعضهم يتحدث."},
{type:"narration", content:"بعضهم يركض إلى القاعات."},
{type:"narration", content:"وبعضهم يتجادل بصوت مرتفع."},

{type:"narration", content:"ياماتو كان ينظر إلى كل شيء."},

{type:"dialogue", character:"ياماتو", content:"هذا المكان لا يهدأ أبدا."},
{type:"dialogue", character:"كينجي", content:"هذه الأكاديمية."},
{type:"dialogue", character:"ياماتو", content:"في قريتي… أكبر حدث في اليوم هو سقوط دجاجة من السور."},

{type:"narration", content:"كينجي ضحك."},


{type:"scene-break", content:"بداية التنمر"},

{type:"narration", content:"بينما كانا يمشيان… ظهر ثلاثة طلاب أمامهما."},
{type:"narration", content:"أحدهم كان نفس الشاب المتفاخر من يوم الاختبار."},

{type:"dialogue", character:"الشاب", content:"انظروا من هنا."},
{type:"dialogue", character:"الطالب", content:"الأسطورة."},
{type:"dialogue", character:"الطالب", content:"رتبة F."},

{type:"narration", content:"ضحكوا."},

{type:"narration", content:"ياماتو توقف."},
{type:"narration", content:"نظر إليهم."},
{type:"narration", content:"ثم ابتسم."},

{type:"dialogue", character:"ياماتو", content:"آه… معجبي."},

{type:"dialogue", character:"الشاب", content:"معجبون؟"},

{type:"dialogue", character:"ياماتو", content:"بالتأكيد."},
{type:"dialogue", character:"ياماتو", content:"أنا أول شخص يحصل على F هنا منذ سنوات."},

{type:"dialogue", character:"الطالب", content:"بل أول فاشل."},

{type:"dialogue", character:"ياماتو", content:"هذا تعريف قاس."},

{type:"narration", content:"الشاب المتفاخر دفع كتف ياماتو قليلا."},

{type:"dialogue", character:"الشاب", content:"لماذا جئت إلى الأكاديمية أصلا؟"},

{type:"dialogue", character:"ياماتو", content:"بالخطأ."},

{type:"dialogue", character:"كينجي", content:"اتركوه."},

{type:"dialogue", character:"الشاب", content:"وأنت من تكون؟"},
{type:"dialogue", character:"كينجي", content:"مجرد طالب."},

{type:"dialogue", character:"الشاب", content:"إذن ابق كذلك."},

{type:"dialogue", character:"الشاب", content:"نصيحة."},
{type:"dialogue", character:"الشاب", content:"اخرج من الأكاديمية قبل أن تطرد."},

{type:"narration", content:"الطلاب الثلاثة ضحكوا وغادروا."},


{type:"scene-break", content:"لحظة ضغط"},

{type:"narration", content:"صمت قصير."},
{type:"narration", content:"ياماتو بقي واقفا."},

{type:"dialogue", character:"كينجي", content:"ياماتو؟"},
{type:"dialogue", character:"ياماتو", content:"نعم؟"},
{type:"dialogue", character:"كينجي", content:"أنت بخير؟"},

{type:"dialogue", character:"ياماتو", content:"نعم."},

{type:"narration", content:"لكن ابتسامته كانت أضعف قليلا هذه المرة."},

{type:"dialogue", character:"ياماتو", content:"الناس هنا صريحون جدا."},

{type:"dialogue", character:"كينجي", content:"آسف."},

{type:"dialogue", character:"ياماتو", content:"لماذا تعتذر؟"},
{type:"dialogue", character:"كينجي", content:"لأنهم يضايقونك."},

{type:"dialogue", character:"ياماتو", content:"لا بأس."},

{type:"dialogue", character:"ياماتو", content:"لو بدأت أضرب كل من يسخر مني…"},
{type:"dialogue", character:"ياماتو", content:"سأطرد في أول يوم."},

{type:"dialogue", character:"كينجي", content:"هذا صحيح."},

{type:"dialogue", character:"ياماتو", content:"وأنا لم أدفع كل ذلك المال لأطرد بسرعة."},

{type:"narration", content:"كينجي ضحك قليلا."},


{type:"scene-break", content:"الحياة داخل الأكاديمية"},

{type:"narration", content:"وصلا إلى ساحة داخلية."},
{type:"narration", content:"طلاب يجلسون على المقاعد الحجرية."},
{type:"narration", content:"بعضهم يقرأ كتبا سحرية."},
{type:"narration", content:"بعضهم يتدرب."},
{type:"narration", content:"بعضهم يتجادل."},

{type:"dialogue", character:"ياماتو", content:"هذا المكان يشبه مدينة صغيرة."},
{type:"dialogue", character:"كينجي", content:"لأنه كذلك."},

{type:"dialogue", character:"ياماتو", content:"كم عدد الطلاب هنا؟"},
{type:"dialogue", character:"كينجي", content:"حوالي اثني عشر ألفا."},

{type:"dialogue", character:"ياماتو", content:"اثنا عشر ألفا؟!"},

{type:"dialogue", character:"ياماتو", content:"في قريتي… نحن أقل من خمسة آلاف."},

{type:"dialogue", character:"كينجي", content:"هنا كل شيء أكبر."},

{type:"dialogue", character:"ياماتو", content:"والتنافس أكبر أيضا."},


{type:"scene-break", content:"ضغط داخلي"},

{type:"dialogue", character:"الطالب", content:"احذروا."},
{type:"dialogue", character:"الطالب", content:"لا تدعوا رتبة F تلمسكم."},

{type:"narration", content:"ضحكوا."},

{type:"dialogue", character:"ياماتو", content:"حسنا."},

{type:"dialogue", character:"كينجي", content:"كنت ستضربه؟"},
{type:"dialogue", character:"ياماتو", content:"فكرت في ذلك."},

{type:"dialogue", character:"كينجي", content:"لماذا لم تفعل؟"},

{type:"dialogue", character:"ياماتو", content:"لأنني أريد البقاء هنا."},

{type:"dialogue", character:"ياماتو", content:"ولو طردت… سيتحول كل هذا التعب إلى مزحة سيئة."},

{type:"dialogue", character:"كينجي", content:"لديك صبر كبير."},

{type:"dialogue", character:"ياماتو", content:"ليس صبرا."},
{type:"dialogue", character:"كينجي", content:"إذن ماذا؟"},

{type:"dialogue", character:"ياماتو", content:"دين كبير."},

{type:"dialogue", character:"ياماتو", content:"سأخبرك لاحقا."},


{type:"scene-break", content:"نهاية اليوم"},

{type:"dialogue", character:"ياماتو", content:"حسنا…"},
{type:"dialogue", character:"ياماتو", content:"اليوم الأول كان طويلا."},

{type:"dialogue", character:"كينجي", content:"وغدا سيكون أطول."},

{type:"dialogue", character:"ياماتو", content:"جيد."},
{type:"dialogue", character:"كينجي", content:"لماذا؟"},

{type:"dialogue", character:"ياماتو", content:"لأن المغامرة بدأت للتو."},

{type:"chapter-end", content:"— نهاية الفصل الثاني — الجزء الرابع —"}

]
},
{
id:10,
title:"الجزء الخامس",
subtitle:"الفريق الوحيد",

sections:[

{type:"scene-break", content:"صباح جديد في الأكاديمية"},

{type:"narration", content:"في صباح اليوم التالي…"},
{type:"narration", content:"استيقظ الطلاب على صوت الجرس مرة أخرى."},
{type:"narration", content:"لكن هذه المرة كان الجو في الممرات مختلفا قليلا."},
{type:"narration", content:"الطلاب يتحدثون بحماس."},
{type:"narration", content:"أصوات متحمسة هنا وهناك."},

{type:"narration", content:"ياماتو خرج من الغرفة وهو يفرك عينيه."},

{type:"dialogue", character:"ياماتو", content:"لماذا الجميع مستيقظون بهذه الطاقة؟"},

{type:"narration", content:"كينجي كان ينتظره في الممر."},

{type:"dialogue", character:"كينجي", content:"لأن اليوم تدريب خارجي."},

{type:"narration", content:"ياماتو توقف."},

{type:"dialogue", character:"ياماتو", content:"تدريب… خارج الأكاديمية؟"},

{type:"dialogue", character:"كينجي", content:"نعم."},

{type:"dialogue", character:"ياماتو", content:"هذا يبدو أخطر بكثير."},

{type:"dialogue", character:"كينجي", content:"ليس تماما."},

{type:"dialogue", character:"ياماتو", content:"لماذا؟"},

{type:"dialogue", character:"كينجي", content:"الغابة التي سنذهب إليها محمية."},

{type:"dialogue", character:"ياماتو", content:"محميّة؟"},

{type:"dialogue", character:"كينجي", content:"يوجد حاجز سحري حولها."},

{type:"narration", content:"ثم تابع."},

{type:"dialogue", character:"كينجي", content:"الوحوش هناك ضعيفة فقط."},

{type:"narration", content:"ياماتو تنهد."},

{type:"dialogue", character:"ياماتو", content:"حسنا… هذا يخفف الأمر قليلا."},

{type:"dialogue", character:"ياماتو", content:"لكن ما زال يبدو كمغامرة."},

{type:"dialogue", character:"كينجي", content:"بالنسبة لك كل شيء مغامرة."},

{type:"dialogue", character:"ياماتو", content:"هذا صحيح."},



{type:"scene-break", content:"ساحة التجمع"},

{type:"narration", content:"بعد الإفطار…"},
{type:"narration", content:"تجمع الطلاب في الساحة الكبيرة أمام البوابة."},
{type:"narration", content:"مدربان يقفان أمامهم."},
{type:"narration", content:"أحدهما كان المدرب أكيرا."},
{type:"narration", content:"والآخر المدربة ساكورا."},

{type:"narration", content:"المدرب أكيرا تكلم بصوت قوي."},

{type:"dialogue", character:"أكيرا", content:"اليوم تدريب عملي."},

{type:"narration", content:"الطلاب صمتوا."},

{type:"dialogue", character:"أكيرا", content:"ستذهبون إلى غابة التدريب."},

{type:"narration", content:"ثم تابع."},

{type:"dialogue", character:"أكيرا", content:"ستعملون ضمن فرق."},

{type:"narration", content:"بعض الطلاب بدأوا يبتسمون بثقة."},

{type:"dialogue", character:"أكيرا", content:"كل فريق سيواجه الوحوش الضعيفة هناك."},

{type:"narration", content:"ثم قال بجدية."},

{type:"dialogue", character:"أكيرا", content:"التعاون أهم من القوة الفردية."},

{type:"narration", content:"ياماتو همس لكينجي."},

{type:"dialogue", character:"ياماتو", content:"هذا جيد."},

{type:"dialogue", character:"كينجي", content:"لماذا؟"},

{type:"dialogue", character:"ياماتو", content:"لأنني ضعيف فرديا."},

{type:"dialogue", character:"كينجي", content:"أنا أيضا لست قويا جدا."},

{type:"dialogue", character:"ياماتو", content:"فريق الضعفاء."},

{type:"dialogue", character:"كينجي", content:"لا تقل ذلك."},

{type:"dialogue", character:"ياماتو", content:"حسنا… فريق الواقعيين."},



{type:"scene-break", content:"اختيار الفرق"},

{type:"narration", content:"بدأ الطلاب يتجمعون في مجموعات."},
{type:"narration", content:"بعض الفرق تشكلت بسرعة."},
{type:"narration", content:"الطلاب الأقوياء تجمعوا مع بعضهم."},
{type:"narration", content:"البنات تجمعن أيضا في فرق منظمة."},

{type:"narration", content:"في أحد الجوانب…"},
{type:"narration", content:"وقف الشاب الوسيم الذي حصل على رتبة B."},

{type:"narration", content:"عدة فتيات تجمعن حوله."},

{type:"dialogue", character:"الفتاة", content:"هل يمكنني الانضمام لفريقك؟"},

{type:"dialogue", character:"الوسيم", content:"بالطبع."},

{type:"dialogue", character:"الطالب", content:"فريقنا سيصل لأكبر عدد من الوحوش."},

{type:"narration", content:"ضحكوا."},

{type:"narration", content:"ياماتو كان يقف خلف الصفوف."},
{type:"narration", content:"ينظر حوله."},

{type:"dialogue", character:"ياماتو", content:"حسنا…"},

{type:"narration", content:"ثم نظر يمينا."},
{type:"narration", content:"فرق كاملة."},

{type:"narration", content:"ثم نظر يسارا."},
{type:"narration", content:"فرق منظمة."},

{type:"narration", content:"ثم نظر أمامه."},
{type:"narration", content:"طلاب يصطفون مع فرقهم."},

{type:"narration", content:"ثم نظر خلفه."},
{type:"narration", content:"لا أحد."},

{type:"narration", content:"صمت قصير."},

{type:"dialogue", character:"ياماتو", content:"حسنا."},

{type:"dialogue", character:"ياماتو", content:"يبدو أنني فريق من شخص واحد."},



{type:"scene-break", content:"ظهورها"},

{type:"dialogue", character:"هانا", content:"هل… يمكنني الانضمام إليك؟"},

{type:"narration", content:"ياماتو استدار ببطء."},

{type:"narration", content:"خلفه وقفت فتاة بشعر بني طويل."},
{type:"narration", content:"ملامحها لطيفة."},
{type:"narration", content:"عينان هادئتان."},

{type:"dialogue", character:"هانا", content:"يبدو أنك وحدك."},

{type:"dialogue", character:"ياماتو", content:"نعم…"},

{type:"dialogue", character:"ياماتو", content:"فريق الشخص الواحد."},

{type:"dialogue", character:"هانا", content:"إذا… هل تقبل عضوا ثانيا؟"},

{type:"dialogue", character:"ياماتو", content:"بالطبع."},

{type:"dialogue", character:"ياماتو", content:"لكنني ضعيف."},

{type:"dialogue", character:"هانا", content:"لا بأس."},

{type:"dialogue", character:"هانا", content:"اسمي هانا."},

{type:"dialogue", character:"ياماتو", content:"ياماتو."},

{type:"dialogue", character:"ياماتو", content:"فريق الاثنين."},



{type:"scene-break", content:"بداية التدريب الخارجي"},

{type:"dialogue", character:"أكيرا", content:"الجميع جاهز؟"},

{type:"dialogue", character:"الطلاب", content:"نعم!"},

{type:"dialogue", character:"أكيرا", content:"اتجهوا إلى غابة التدريب."},

{type:"dialogue", character:"ياماتو", content:"لنبدأ مغامرتنا الأولى."},

{type:"dialogue", character:"هانا", content:"لنبدأ."},

{type:"chapter-end", content:"— نهاية الفصل الثاني — الجزء الخامس —"}

]
},
{
id:11,
title:"الجزء الأول",
subtitle:"غابة التدريب",

sections:[

{type:"scene-break", content:"الطريق إلى الغابة"},

{type:"narration", content:"خرج الطلاب من بوابة الأكاديمية في صفوف طويلة."},
{type:"narration", content:"أمامهم سار المدرب أكيرا وعدة مدربين آخرين، وخلفهم امتد الطريق الحجري الذي يقود إلى أطراف العاصمة."},
{type:"narration", content:"كان الطريق ينحدر قليلا نحو غابة واسعة تحيط بها تلال منخفضة."},
{type:"narration", content:"الأشجار هناك أطول من أشجار القرى العادية، أوراقها كثيفة، والضوء يتسلل بينها على شكل خيوط ذهبية."},

{type:"narration", content:"ياماتو كان يمشي بجانب هانا."},
{type:"narration", content:"يحمل حقيبته الصغيرة على كتفه."},
{type:"narration", content:"ينظر حوله بفضول كأنه طفل يرى شيئا جديدا."},

{type:"dialogue", character:"ياماتو", content:"هذه أول مرة أرى غابة كبيرة هكذا."},

{type:"narration", content:"هانا نظرت إليه."},

{type:"dialogue", character:"هانا", content:"ألم تعش قرب غابة في قريتك؟"},

{type:"dialogue", character:"ياماتو", content:"كانت غابة صغيرة."},

{type:"narration", content:"ثم ابتسم."},

{type:"dialogue", character:"ياماتو", content:"أكبر خطر فيها كان الأرانب."},

{type:"narration", content:"هانا ضحكت بخفة."},

{type:"dialogue", character:"هانا", content:"الأرانب ليست خطيرة."},

{type:"dialogue", character:"ياماتو", content:"جرب أن تزرع الخضار في قريتنا… ستغير رأيك."},

{type:"narration", content:"ضحكت مرة أخرى."},

{type:"dialogue", character:"هانا", content:"هل أنت متوتر؟"},

{type:"dialogue", character:"ياماتو", content:"قليلا."},

{type:"dialogue", character:"ياماتو", content:"لكن أيضا متحمس."},

{type:"dialogue", character:"هانا", content:"هذا جيد."},

{type:"dialogue", character:"ياماتو", content:"لماذا؟"},

{type:"dialogue", character:"هانا", content:"لأن الخوف وحده يجعل الناس يتجمدون."},

{type:"dialogue", character:"هانا", content:"أما الحماس… فيجعلهم يتحركون."},

{type:"dialogue", character:"ياماتو", content:"هل أنت فيلسوفة أيضا مثل كينجي؟"},

{type:"narration", content:"هانا ضحكت."},

{type:"dialogue", character:"هانا", content:"لا… فقط أحاول أن لا أموت."},



{type:"scene-break", content:"الحاجز السحري"},

{type:"narration", content:"عندما اقتربوا من الغابة… توقف المدرب أكيرا."},

{type:"dialogue", character:"أكيرا", content:"توقفوا هنا."},

{type:"narration", content:"الطلاب توقفوا."},
{type:"narration", content:"أمامهم مباشرة ظهر جدار شفاف خفيف يشبه تموج الهواء."},

{type:"narration", content:"ياماتو اقترب قليلا ومد يده."},

{type:"dialogue", character:"ياماتو", content:"واو…"},

{type:"dialogue", character:"ياماتو", content:"ما هذا؟"},

{type:"dialogue", character:"كينجي", content:"الحاجز السحري."},

{type:"dialogue", character:"ياماتو", content:"يحمي الغابة؟"},

{type:"dialogue", character:"كينجي", content:"بل يحمي الأكاديمية."},

{type:"dialogue", character:"كينجي", content:"الوحوش داخل الغابة ضعيفة."},

{type:"dialogue", character:"كينجي", content:"لكن الحاجز يمنعها من الخروج."},

{type:"dialogue", character:"ياماتو", content:"إذن… لو ركضت الوحوش نحونا؟"},

{type:"dialogue", character:"كينجي", content:"ستصطدم بالحاجز."},

{type:"dialogue", character:"ياماتو", content:"ممتاز."},

{type:"dialogue", character:"ياماتو", content:"هذا يجعلني أشعر بأمان أكثر."},



{type:"scene-break", content:"شرح المهمة"},

{type:"dialogue", character:"أكيرا", content:"استمعوا جيدا."},

{type:"narration", content:"صمت الطلاب."},

{type:"dialogue", character:"أكيرا", content:"داخل هذه الغابة توجد وحوش ضعيفة."},

{type:"dialogue", character:"أكيرا", content:"هدفكم اليوم ليس قتل أكبر عدد."},

{type:"dialogue", character:"أكيرا", content:"هدفكم هو التعلم."},

{type:"dialogue", character:"أكيرا", content:"تحركوا ضمن فرقكم."},

{type:"dialogue", character:"أكيرا", content:"ولا تبتعدوا كثيرا."},

{type:"dialogue", character:"ياماتو", content:"هذا يبدو كتحذير واضح."},

{type:"dialogue", character:"هانا", content:"نعم."},

{type:"dialogue", character:"ياماتو", content:"هل سنبتعد؟"},

{type:"dialogue", character:"هانا", content:"لا."},

{type:"dialogue", character:"ياماتو", content:"جيد."},



{type:"scene-break", content:"دخول الغابة"},

{type:"narration", content:"فتح المدرب الحاجز للحظة."},
{type:"narration", content:"بدأت الفرق تدخل."},
{type:"narration", content:"الأشجار أصبحت كثيفة."},
{type:"narration", content:"الأرض مغطاة بأوراق جافة."},
{type:"narration", content:"وأصوات الطيور والحشرات تملأ المكان."},

{type:"dialogue", character:"ياماتو", content:"هذا المكان جميل."},

{type:"dialogue", character:"هانا", content:"لا تنس أننا هنا للقتال."},

{type:"dialogue", character:"ياماتو", content:"صحيح."},

{type:"dialogue", character:"ياماتو", content:"لكن القتال في مكان جميل أفضل من القتال في مكان قبيح."},

{type:"narration", content:"هانا ضحكت."},



{type:"scene-break", content:"أول وحش"},

{type:"dialogue", character:"ياماتو", content:"هل سمعت ذلك؟"},

{type:"dialogue", character:"هانا", content:"ذئب الظل الصغير."},

{type:"dialogue", character:"ياماتو", content:"هل هو خطير؟"},

{type:"dialogue", character:"هانا", content:"ليس كثيرا."},

{type:"dialogue", character:"هانا", content:"لكن لا تقترب منه بدون حذر."},

{type:"dialogue", character:"ياماتو", content:"أعتقد أن هذه أول معركة لي."},

{type:"dialogue", character:"هانا", content:"سنهاجمه معا."},

{type:"dialogue", character:"ياماتو", content:"الخطة؟"},

{type:"dialogue", character:"هانا", content:"أنا سأشغله."},

{type:"dialogue", character:"هانا", content:"وأنت اضربه."},

{type:"dialogue", character:"ياماتو", content:"خطة بسيطة."},

{type:"dialogue", character:"هانا", content:"هل لديك أفضل؟"},

{type:"dialogue", character:"ياماتو", content:"لا."},



{type:"scene-break", content:"القتال"},

{type:"dialogue", character:"ياماتو", content:"آسف يا صديقي!"},

{type:"narration", content:"طَخ!"},

{type:"narration", content:"الذئب سقط أرضا ثم هرب بين الأشجار."},

{type:"dialogue", character:"ياماتو", content:"هل هرب؟"},

{type:"dialogue", character:"هانا", content:"نعم."},

{type:"dialogue", character:"ياماتو", content:"إذن… فزنا؟"},

{type:"dialogue", character:"هانا", content:"تقريبا."},

{type:"dialogue", character:"ياماتو", content:"هذا أصعب مما توقعت."},

{type:"dialogue", character:"هانا", content:"لكننا عملنا كفريق جيد."},

{type:"dialogue", character:"ياماتو", content:"فريق الاثنين."},



{type:"scene-break", content:"نظرة غريبة"},

{type:"dialogue", character:"هانا", content:"يجب أن نواصل."},

{type:"dialogue", character:"ياماتو", content:"نعم."},

{type:"dialogue", character:"ياماتو", content:"لنر ماذا تخبئ لنا هذه الغابة."},

{type:"chapter-end", content:"— نهاية الفصل الثالث — الجزء الأول —"}

]
},
{
  id: 12,
  chapter: 12,
  title: "الجزء الثاني",
  subtitle: "داخل الغابة",

  sections: [

    { type: "scene-break", content: "بعد المعركة الأولى" },

    { type: "narration", content: "وقف ياماتو ينفض الغبار عن ملابسه بينما اختفى الذئب الصغير بين الأشجار." },
    { type: "narration", content: "الأوراق الجافة تحركت قليلا ثم عاد الهدوء إلى الغابة." },
    { type: "narration", content: "ياماتو أخذ نفسا عميقا." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم نظر إلى هانا." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أننا نجونا." },

    { type: "narration", content: "هانا ابتسمت ابتسامة هادئة." },
    { type: "dialogue", character: "هانا", content: "كان وحشا ضعيفا فقط." },

    { type: "dialogue", character: "ياماتو", content: "بالنسبة لك ربما." },
    { type: "narration", content: "ثم نظر إلى العصا في يده." },
    { type: "dialogue", character: "ياماتو", content: "لكن بالنسبة لي… كان يبدو كأنه يريد أن يأكلني." },

    { type: "narration", content: "هانا ضحكت بخفة." },
    { type: "dialogue", character: "هانا", content: "لن يأكلك." },
    { type: "dialogue", character: "ياماتو", content: "هذا يطمئنني قليلا." },

    { type: "narration", content: "ثم نظر حوله." },
    { type: "narration", content: "الأشجار كانت عالية." },
    { type: "narration", content: "الضوء يتسلل بينها بصعوبة." },
    { type: "narration", content: "أصوات الحشرات تملأ المكان." },

    { type: "dialogue", character: "ياماتو", content: "الغابة تبدو أكبر مما توقعت." },
    { type: "dialogue", character: "هانا", content: "نعم." },

    { type: "narration", content: "ثم أشارت إلى طريق ضيق بين الأشجار." },
    { type: "dialogue", character: "هانا", content: "لنمشي من هنا." },

    { type: "dialogue", character: "ياماتو", content: "هل تعرفين الطريق؟" },
    { type: "dialogue", character: "هانا", content: "ليس تماما." },
    { type: "dialogue", character: "ياماتو", content: "ممتاز… مغامرة عشوائية." },

    { type: "scene-break", content: "داخل عمق الغابة" },

    { type: "narration", content: "بدأ الاثنان يمشيان ببطء." },
    { type: "narration", content: "الأرض أصبحت أكثر رطوبة." },
    { type: "narration", content: "الأوراق تلتصق بالأحذية." },
    { type: "narration", content: "في بعض الأماكن ظهرت آثار أقدام صغيرة لوحوش." },

    { type: "narration", content: "ياماتو توقف." },
    { type: "narration", content: "انحنى قليلا." },
    { type: "dialogue", character: "ياماتو", content: "هل هذه آثار وحوش؟" },

    { type: "narration", content: "هانا نظرت إليها." },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "كبيرة أم صغيرة؟" },
    { type: "dialogue", character: "هانا", content: "صغيرة." },

    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "جيد." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "أنا أفضّل الصغيرة." },

    { type: "scene-break", content: "ظهور الوحش الثاني" },

    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "صدر صوت حركة بين الشجيرات." },
    { type: "combat", content: "خشخشخ" },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم همس." },
    { type: "whisper", character: "ياماتو", content: "أنا مستعد." },

    { type: "narration", content: "من بين الشجيرات خرج مخلوق صغير يشبه السحلية، لكن جسده أكبر قليلا وعيناه حمراء." },

    { type: "narration", content: "هانا قالت بهدوء." },
    { type: "dialogue", character: "هانا", content: "سحلية الحجر." },

    { type: "dialogue", character: "ياماتو", content: "هل هي قوية؟" },
    { type: "dialogue", character: "هانا", content: "أقوى قليلا من الذئب." },
    { type: "dialogue", character: "ياماتو", content: "أوه." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هذا ليس مطمئنا." },

    { type: "narration", content: "السحلية زمجرت." },
    { type: "narration", content: "قفزت فجأة نحو ياماتو." },

    { type: "shout", character: "ياماتو", content: "أوه!" },

    { type: "narration", content: "قفز للخلف بسرعة." },
    { type: "narration", content: "كاد يسقط." },

    { type: "narration", content: "هانا رفعت يدها بسرعة." },
    { type: "skill", content: "تعويذة مستخدمة: رياح صغيرة" },
    { type: "narration", content: "تعويذة رياح صغيرة اندفعت نحو السحلية." },

    { type: "narration", content: "السحلية تراجعت خطوة." },

    { type: "shout", character: "هانا", content: "الآن!" },

    { type: "narration", content: "ياماتو ركض للأمام." },
    { type: "narration", content: "رفع عصاه." },
    { type: "narration", content: "ثم ضرب السحلية بقوة." },
    { type: "combat", content: "طَخ!" },

    { type: "narration", content: "السحلية تراجعت." },
    { type: "narration", content: "ثم هربت بين الأشجار." },

    { type: "narration", content: "صمت." },
    { type: "narration", content: "ياماتو بقي واقفا يلهث." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم جلس على الأرض." },
    { type: "dialogue", character: "ياماتو", content: "أنا بالتأكيد لست بطلا بعد." },

    { type: "narration", content: "هانا ابتسمت." },
    { type: "dialogue", character: "هانا", content: "لكننا نجحنا." },
    { type: "dialogue", character: "ياماتو", content: "بفضل تعويذتك." },

    { type: "narration", content: "هانا هزت رأسها." },
    { type: "dialogue", character: "هانا", content: "بفضل تعاوننا." },

    { type: "scene-break", content: "حديث أثناء المشي" },

    { type: "narration", content: "بعد دقائق…" },
    { type: "narration", content: "واصلا السير." },
    { type: "narration", content: "ياماتو كان ينظر إلى الأشجار." },

    { type: "dialogue", character: "ياماتو", content: "هل جئت إلى هذه الغابة من قبل؟" },
    { type: "dialogue", character: "هانا", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "إذن لماذا تبدين هادئة جدا؟" },

    { type: "narration", content: "هانا صمتت لحظة." },
    { type: "narration", content: "ثم قالت." },
    { type: "dialogue", character: "هانا", content: "ربما لأنني أحب الغابات." },

    { type: "dialogue", character: "ياماتو", content: "أحب الغابات أيضا." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "لكنني أحبها أكثر عندما لا تحاول أكلي." },

    { type: "narration", content: "هانا ضحكت." },

    { type: "scene-break", content: "لحظة غريبة" },

    { type: "narration", content: "بينما كانا يمشيان…" },
    { type: "narration", content: "توقف ياماتو فجأة." },

    { type: "dialogue", character: "ياماتو", content: "لحظة." },
    { type: "dialogue", character: "هانا", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "أشعر أننا نسير منذ فترة." },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "لكننا لم نر أي فريق آخر." },

    { type: "narration", content: "هانا نظرت حولها." },
    { type: "dialogue", character: "هانا", content: "ربما أخذوا طرقا مختلفة." },
    { type: "dialogue", character: "ياماتو", content: "ربما." },

    { type: "narration", content: "لكن داخل عينيه…" },
    { type: "narration", content: "مر شعور غريب." },
    { type: "narration", content: "شيء لم يستطع تفسيره." },

    { type: "scene-break", content: "معركة أكبر" },

    { type: "narration", content: "بعد عدة دقائق…" },
    { type: "narration", content: "اهتزت الشجيرات بقوة." },
    { type: "combat", content: "خشخشة قوية" },

    { type: "narration", content: "خرج مخلوق أكبر." },
    { type: "narration", content: "ذئب أكبر من السابق." },
    { type: "narration", content: "عيناه حادتان." },
    { type: "narration", content: "أسنانه بارزة." },

    { type: "narration", content: "ياماتو تجمد لحظة." },
    { type: "dialogue", character: "ياماتو", content: "هذا…" },
    { type: "narration", content: "ثم ابتلع ريقه." },
    { type: "dialogue", character: "ياماتو", content: "ليس صغيرا." },

    { type: "narration", content: "هانا رفعت عصاها." },
    { type: "dialogue", character: "هانا", content: "ابق خلفي." },

    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "narration", content: "ثم وقف بجانبها." },
    { type: "dialogue", character: "ياماتو", content: "سنقاتل معا." },

    { type: "narration", content: "الذئب اندفع نحوهما." },

    { type: "skill", content: "تعويذة مستخدمة: رياح قوية" },
    { type: "narration", content: "هانا أطلقت تعويذة رياح قوية." },

    { type: "narration", content: "الذئب انحرف قليلا." },
    { type: "narration", content: "ياماتو ركض من الجانب." },
    { type: "narration", content: "ضرب الذئب بعصاه." },

    { type: "narration", content: "لكن الذئب كان أسرع." },
    { type: "narration", content: "قفز." },
    { type: "narration", content: "كاد يعض كتفه." },

    { type: "narration", content: "ياماتو تدحرج على الأرض." },
    { type: "dialogue", character: "ياماتو", content: "هذا سيء!" },

    { type: "shout", character: "هانا", content: "احذر!" },

    { type: "narration", content: "أطلقت تعويذة أخرى." },
    { type: "narration", content: "الذئب تراجع." },

    { type: "narration", content: "ياماتو وقف بسرعة." },
    { type: "narration", content: "رفع العصا." },
    { type: "narration", content: "ثم ضرب الأرض بقوة." },

    { type: "narration", content: "الذئب تراجع مرة أخرى." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "هرب داخل الغابة." },

    { type: "narration", content: "صمت." },
    { type: "narration", content: "ياماتو جلس على الأرض." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم نظر إلى السماء." },
    { type: "dialogue", character: "ياماتو", content: "أنا بالتأكيد لا أريد مواجهة وحوش أكبر من هذا." },

    { type: "narration", content: "هانا جلست بجانبه." },
    { type: "dialogue", character: "هانا", content: "لقد كنت شجاعا." },

    { type: "narration", content: "ياماتو ضحك." },
    { type: "dialogue", character: "ياماتو", content: "كنت خائفا." },
    { type: "dialogue", character: "هانا", content: "لكن لم تهرب." },

    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "لأنك كنت هنا." },

    { type: "scene-break", content: "نظرة هانا" },

    { type: "narration", content: "بينما كان ياماتو يشرب من قارورة الماء…" },
    { type: "narration", content: "نظرت إليه هانا مرة أخرى." },
    { type: "narration", content: "هذه المرة…" },
    { type: "narration", content: "ابتسامتها بقيت." },
    { type: "narration", content: "لكن عينيها أصبحتا جادتين للحظة." },
    { type: "narration", content: "كأنها تفكر بشيء." },
    { type: "narration", content: "شيء لا يعرفه ياماتو." },
    { type: "narration", content: "ثم اختفى ذلك التعبير." },

    { type: "dialogue", character: "هانا", content: "لنواصل." },

    { type: "narration", content: "ياماتو وقف." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },

    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "فريق الاثنين لا يستسلم." },

    { type: "chapter-end", content: "— نهاية الفصل الثالث — الجزء الثاني —" }

  ]
},
{
  id: 13,
  chapter: 13,
  title: "الجزء الثالث",
  subtitle: "أصوات في الغابة",

  sections: [

    { type: "scene-break", content: "طريق غير مريح" },

    { type: "narration", content: "استمر ياماتو وهانا في المشي بين الأشجار." },
    { type: "narration", content: "الغابة أصبحت أكثر هدوءا." },
    { type: "narration", content: "حتى الطيور توقفت عن الغناء." },
    { type: "narration", content: "ياماتو لاحظ ذلك." },

    { type: "dialogue", character: "ياماتو", content: "هل لاحظت شيئا؟" },
    { type: "dialogue", character: "هانا", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "الغابة هادئة جدا." },

    { type: "narration", content: "هانا نظرت حولها." },

    { type: "dialogue", character: "هانا", content: "ربما لأن الفرق الأخرى بعيدة." },
    { type: "dialogue", character: "ياماتو", content: "أو لأن شيئا ما هنا." },

    { type: "narration", content: "هانا توقفت." },
    { type: "narration", content: "نظرت إليه." },

    { type: "dialogue", character: "هانا", content: "أنت تتخيل." },
    { type: "dialogue", character: "ياماتو", content: "أتمنى." },

    { type: "narration", content: "ثم توقف فجأة." },

    { type: "dialogue", character: "ياماتو", content: "لحظة." },
    { type: "dialogue", character: "هانا", content: "ماذا الآن؟" },
    { type: "dialogue", character: "ياماتو", content: "هل تسمعين هذا الصوت؟" },

    { type: "combat", content: "خش… خش…" },
    { type: "narration", content: "حركة بين الأشجار." },

    { type: "whisper", character: "هانا", content: "تراجع خطوة." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "dialogue", character: "هانا", content: "فقط تراجع." },

    { type: "narration", content: "ياماتو تراجع نصف خطوة." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم همس." },

    { type: "whisper", character: "ياماتو", content: "لكن هذا لا يبدو كذئب." },
    { type: "dialogue", character: "هانا", content: "لأنه ليس ذئبا." },

    { type: "scene-break", content: "الوحش الجديد" },

    { type: "narration", content: "من بين الأشجار خرج مخلوق غريب." },
    { type: "narration", content: "جسد يشبه خنزيرا صغيرا." },
    { type: "narration", content: "لكن ظهره مغطى بأشواك حجرية." },
    { type: "narration", content: "وعيناه حادتان." },

    { type: "narration", content: "ياماتو فتح عينيه." },

    { type: "dialogue", character: "ياماتو", content: "ما هذا؟" },
    { type: "dialogue", character: "هانا", content: "خنزير الأشواك." },
    { type: "dialogue", character: "ياماتو", content: "اسم مخيف." },
    { type: "dialogue", character: "هانا", content: "هو ليس قويا جدا." },
    { type: "dialogue", character: "ياماتو", content: "كلمة ليس قويا جدا تقلقني الآن." },

    { type: "narration", content: "الخنزير زمجر." },
    { type: "narration", content: "بدأ يحفر الأرض." },

    { type: "dialogue", character: "ياماتو", content: "هذا لا يبدو وديا." },
    { type: "dialogue", character: "هانا", content: "إنه يستعد للهجوم." },
    { type: "dialogue", character: "ياماتو", content: "رائع." },

    { type: "narration", content: "ثم نظر إليها." },

    { type: "dialogue", character: "ياماتو", content: "الخطة؟" },
    { type: "dialogue", character: "هانا", content: "ابتعد عن الأشواك." },
    { type: "dialogue", character: "ياماتو", content: "واضح." },

    { type: "scene-break", content: "بداية القتال" },

    { type: "narration", content: "الخنزير اندفع فجأة." },

    { type: "shout", character: "ياماتو", content: "أوه!" },

    { type: "narration", content: "قفز جانبا بسرعة." },
    { type: "narration", content: "الأشواك مرت قرب ساقه." },

    { type: "dialogue", character: "ياماتو", content: "هذا قريب جدا!" },

    { type: "narration", content: "هانا رفعت يدها." },
    { type: "skill", content: "تعويذة مستخدمة: رياح" },
    { type: "shout", character: "هانا", content: "رياح!" },

    { type: "narration", content: "اندفعت تعويذة صغيرة." },
    { type: "narration", content: "ضربت جانب الوحش." },
    { type: "narration", content: "الوحش تراجع خطوة." },

    { type: "narration", content: "ياماتو ركض نحوه." },

    { type: "shout", character: "ياماتو", content: "الآن دوري!" },

    { type: "narration", content: "رفع العصا وضربه." },
    { type: "combat", content: "طَخ!" },

    { type: "narration", content: "الخنزير صرخ." },
    { type: "narration", content: "ثم دار بسرعة." },
    { type: "narration", content: "الأشواك مرت قرب ياماتو مرة أخرى." },

    { type: "narration", content: "ياماتو تراجع بسرعة." },

    { type: "dialogue", character: "ياماتو", content: "هذا الشيء لا يحبني." },
    { type: "dialogue", character: "هانا", content: "اضربه من الجانب." },
    { type: "dialogue", character: "ياماتو", content: "من الجانب؟" },
    { type: "dialogue", character: "هانا", content: "الأشواك في الأعلى فقط." },
    { type: "dialogue", character: "ياماتو", content: "كيف تعرفين ذلك؟" },
    { type: "dialogue", character: "هانا", content: "اقرأ الكتب." },
    { type: "dialogue", character: "ياماتو", content: "أنا بالكاد قرأت قائمة الطعام." },

    { type: "scene-break", content: "ضربة مشتركة" },

    { type: "narration", content: "الخنزير هجم مرة أخرى." },
    { type: "narration", content: "هذه المرة ركض ياماتو حوله." },

    { type: "skill", content: "تعويذة مستخدمة: رياح" },
    { type: "narration", content: "هانا أطلقت تعويذة." },

    { type: "narration", content: "الوحش انشغل بها." },
    { type: "narration", content: "ياماتو ضربه من الجانب." },

    { type: "combat", content: "بوم!" },

    { type: "narration", content: "الخنزير صرخ." },
    { type: "narration", content: "ثم ركض هاربا بين الأشجار." },

    { type: "narration", content: "صمت." },

    { type: "narration", content: "ياماتو جلس على الأرض." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم تنفس بعمق." },

    { type: "dialogue", character: "ياماتو", content: "هذا أخطر من السابق." },

    { type: "narration", content: "هانا جلست أيضا." },

    { type: "dialogue", character: "هانا", content: "لكننا نجحنا." },
    { type: "dialogue", character: "ياماتو", content: "بصعوبة." },

    { type: "scene-break", content: "سؤال غريب" },

    { type: "narration", content: "بعد لحظة…" },

    { type: "narration", content: "نظر ياماتو إلى هانا." },

    { type: "dialogue", character: "ياماتو", content: "لحظة." },
    { type: "dialogue", character: "هانا", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "كيف عرفت أن الأشواك في الأعلى فقط؟" },

    { type: "narration", content: "هانا صمتت لحظة." },
    { type: "narration", content: "ثم قالت." },

    { type: "dialogue", character: "هانا", content: "قرأت عنه." },
    { type: "dialogue", character: "ياماتو", content: "في كتاب؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "كم كتابا قرأت عن هذه الغابة؟" },
    { type: "dialogue", character: "هانا", content: "بعض الكتب." },
    { type: "dialogue", character: "ياماتو", content: "بعض؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },

    { type: "narration", content: "ياماتو ضيق عينيه قليلا." },

    { type: "dialogue", character: "ياماتو", content: "تبدين وكأنك تعرفين هذه الغابة." },

    { type: "narration", content: "هانا ابتسمت بسرعة." },

    { type: "dialogue", character: "هانا", content: "أنا فقط أقرأ كثيرا." },
    { type: "dialogue", character: "ياماتو", content: "آه." },

    { type: "narration", content: "ثم قال." },

    { type: "dialogue", character: "ياماتو", content: "أنا أقرأ قليلا." },
    { type: "dialogue", character: "هانا", content: "لاحظت." },
    { type: "dialogue", character: "ياماتو", content: "لكنني أتعلم بسرعة." },

    { type: "scene-break", content: "مزاح خفيف" },

    { type: "narration", content: "بدأ الاثنان يمشيان مرة أخرى." },
    { type: "narration", content: "ياماتو كان ينظر حوله." },

    { type: "dialogue", character: "ياماتو", content: "إذا هاجمنا شيء أكبر…" },
    { type: "dialogue", character: "هانا", content: "سنركض." },
    { type: "dialogue", character: "ياماتو", content: "أخيرا خطة تعجبني." },

    { type: "narration", content: "هانا ضحكت." },

    { type: "dialogue", character: "ياماتو", content: "لكن ركضك أسرع مني على الأغلب." },
    { type: "dialogue", character: "هانا", content: "ربما." },
    { type: "dialogue", character: "ياماتو", content: "لا تتركيني." },
    { type: "dialogue", character: "هانا", content: "لن أفعل." },
    { type: "dialogue", character: "ياماتو", content: "وعد؟" },
    { type: "dialogue", character: "هانا", content: "وعد." },

    { type: "scene-break", content: "لحظة توتر" },

    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "صدر صوت آخر." },
    { type: "narration", content: "هذه المرة أقوى." },

    { type: "combat", content: "غررررر" },

    { type: "narration", content: "ياماتو تجمد." },

    { type: "dialogue", character: "ياماتو", content: "لا يعجبني هذا الصوت." },

    { type: "narration", content: "هانا نظرت بين الأشجار." },

    { type: "dialogue", character: "هانا", content: "ولا أنا." },
    { type: "dialogue", character: "ياماتو", content: "هل هو خنزير آخر؟" },
    { type: "dialogue", character: "هانا", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "كيف عرفت؟" },
    { type: "dialogue", character: "هانا", content: "الصوت مختلف." },

    { type: "narration", content: "ياماتو نظر إليها." },

    { type: "dialogue", character: "ياماتو", content: "أنت تعرفين أصوات الوحوش أيضا؟" },
    { type: "dialogue", character: "هانا", content: "قلت لك… أقرأ." },
    { type: "dialogue", character: "ياماتو", content: "يجب أن أبدأ القراءة." },

    { type: "scene-break", content: "شيء يقترب" },

    { type: "narration", content: "الشجيرات بدأت تتحرك." },
    { type: "narration", content: "الأرض اهتزت قليلا." },

    { type: "narration", content: "ياماتو شد العصا بيده." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم ابتسم قليلا رغم التوتر." },

    { type: "dialogue", character: "ياماتو", content: "المغامرة أصبحت أكثر إثارة." },

    { type: "whisper", character: "هانا", content: "استعد." },
    { type: "dialogue", character: "ياماتو", content: "أنا دائما مستعد." },

    { type: "narration", content: "ثم أضاف." },

    { type: "dialogue", character: "ياماتو", content: "تقريبا." },

    { type: "chapter-end", content: "— نهاية الفصل الثالث — الجزء الثالث —" }

  ]
},
{
  id: 14,
  chapter: 14,
  title: "الجزء الرابع",
  subtitle: "الظل بين الأشجار",

  sections: [

    { type: "scene-break", content: "قبل أن يظهر الوحش" },

    { type: "narration", content: "اهتزت الشجيرات مرة أخرى." },
    { type: "narration", content: "الأوراق تحركت بعنف." },
    { type: "narration", content: "صوت ثقيل يقترب ببطء بين الأشجار." },

    { type: "combat", content: "غرررر…" },

    { type: "narration", content: "ياماتو شد قبضته على العصا." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم نظر إلى هانا." },

    { type: "dialogue", character: "ياماتو", content: "ما هذا الصوت؟" },

    { type: "narration", content: "هانا لم تجب مباشرة." },
    { type: "narration", content: "كانت تنظر بتركيز نحو الأشجار." },
    { type: "narration", content: "عيناها ضاقتا قليلا." },

    { type: "whisper", character: "هانا", content: "لا تقف أمامي." },

    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "هانا", content: "تحرك قليلا إلى اليسار." },

    { type: "narration", content: "ياماتو رفع حاجبه." },

    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "dialogue", character: "هانا", content: "فقط تحرك." },

    { type: "narration", content: "ياماتو تحرك خطوة." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم قال." },

    { type: "dialogue", character: "ياماتو", content: "لكن لماذا؟" },

    { type: "narration", content: "هانا لم تجب." },
    { type: "narration", content: "كانت ما تزال تحدق في الأشجار." },

    { type: "scene-break", content: "ظهور الوحش" },

    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "اندفع شيء ضخم من بين الأشجار." },

    { type: "combat", content: "بووم!" },

    { type: "narration", content: "الأرض اهتزت قليلا." },
    { type: "narration", content: "مخلوق أكبر من الذئاب السابقة." },
    { type: "narration", content: "جسمه عضلي." },
    { type: "narration", content: "فراؤه داكن." },
    { type: "narration", content: "وأنيابه طويلة." },

    { type: "narration", content: "ياماتو فتح عينيه." },

    { type: "dialogue", character: "ياماتو", content: "هذا…" },

    { type: "narration", content: "ثم قال بصوت منخفض." },

    { type: "dialogue", character: "ياماتو", content: "ليس صغيرا أبدا." },

    { type: "whisper", character: "هانا", content: "ذئب الظل الكبير." },

    { type: "dialogue", character: "ياماتو", content: "كبير؟!" },
    { type: "dialogue", character: "هانا", content: "أقوى من السابق." },
    { type: "dialogue", character: "ياماتو", content: "ممتاز…" },

    { type: "narration", content: "ثم تمتم." },

    { type: "dialogue", character: "ياماتو", content: "هذا يوم رائع." },

    { type: "scene-break", content: "التوتر" },

    { type: "narration", content: "الذئب بدأ يدور حولهما ببطء." },
    { type: "narration", content: "عيناه الصفراء تلمعان." },

    { type: "narration", content: "ياماتو رفع عصاه." },

    { type: "dialogue", character: "ياماتو", content: "هل لديك خطة؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "ما هي؟" },
    { type: "dialogue", character: "هانا", content: "لا تدعه يعضك." },
    { type: "dialogue", character: "ياماتو", content: "هذه ليست خطة." },
    { type: "dialogue", character: "هانا", content: "هذه نصيحة." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },

    { type: "scene-break", content: "الهجوم" },

    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "قفز الذئب." },
    { type: "narration", content: "سرعته كانت أعلى بكثير من الوحوش السابقة." },
    { type: "narration", content: "ياماتو حاول تفاديه." },
    { type: "narration", content: "لكنه كان متأخرا قليلا." },

    { type: "combat", content: "خدش!" },

    { type: "narration", content: "مخلب الذئب مر قرب ذراعه." },
    { type: "narration", content: "قطع خفيف ظهر على جلده." },

    { type: "narration", content: "ياماتو تراجع بسرعة." },

    { type: "shout", character: "ياماتو", content: "آه!" },

    { type: "narration", content: "نظر إلى ذراعه." },

    { type: "dialogue", character: "ياماتو", content: "هذا ليس جيدا." },

    { type: "shout", character: "هانا", content: "انتبه!" },

    { type: "skill", content: "تعويذة مستخدمة: رياح قوية" },
    { type: "narration", content: "أطلقت تعويذة رياح قوية." },

    { type: "narration", content: "الذئب تراجع خطوة." },
    { type: "narration", content: "ياماتو شد العصا بيده." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم قال." },

    { type: "dialogue", character: "ياماتو", content: "الآن أنا غاضب قليلا." },

    { type: "scene-break", content: "القتال الحقيقي" },

    { type: "narration", content: "الذئب هجم مرة أخرى." },
    { type: "narration", content: "هذه المرة ركض ياماتو جانبا." },
    { type: "narration", content: "قفز فوق جذع شجرة صغير." },
    { type: "narration", content: "الذئب مر تحته." },
    { type: "narration", content: "ياماتو ضربه بالعصا من الأعلى." },

    { type: "combat", content: "طَخ!" },

    { type: "narration", content: "الذئب صرخ." },
    { type: "narration", content: "لكنه لم يتراجع كثيرا." },

    { type: "skill", content: "تعويذة مستخدمة: رياح قوية" },
    { type: "narration", content: "هانا أطلقت تعويذة أخرى." },

    { type: "narration", content: "الرياح دفعت الذئب قليلا." },

    { type: "shout", character: "ياماتو", content: "مرة أخرى!" },
    { type: "shout", character: "هانا", content: "الآن!" },

    { type: "skill", content: "تعويذة مستخدمة: رياح قوية" },
    { type: "narration", content: "اندفعت تعويذة الرياح." },

    { type: "narration", content: "ياماتو ركض من الجانب." },
    { type: "narration", content: "ضرب الذئب بقوة على رأسه." },

    { type: "combat", content: "بوم!" },

    { type: "narration", content: "الذئب تراجع عدة خطوات." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "نظر إليهما للحظة." },
    { type: "narration", content: "وزمجر." },
    { type: "narration", content: "ثم ركض مبتعدا داخل الغابة." },

    { type: "scene-break", content: "بعد القتال" },

    { type: "narration", content: "الصمت عاد إلى الغابة." },
    { type: "narration", content: "ياماتو جلس على الأرض." },
    { type: "narration", content: "يتنفس بسرعة." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم نظر إلى ذراعه." },
    { type: "narration", content: "الجرح كان صغيرا لكنه مؤلم." },

    { type: "dialogue", character: "ياماتو", content: "أعتقد أنه خدشني." },

    { type: "narration", content: "هانا اقتربت بسرعة." },

    { type: "dialogue", character: "هانا", content: "دعني أرى." },

    { type: "narration", content: "أمسكت ذراعه." },
    { type: "narration", content: "تفحصت الجرح." },

    { type: "dialogue", character: "هانا", content: "ليس عميقا." },
    { type: "dialogue", character: "ياماتو", content: "هذا جيد." },

    { type: "narration", content: "ثم ابتسم." },

    { type: "dialogue", character: "ياماتو", content: "كنت أخاف أن أعود إلى الأكاديمية بذراع واحدة." },

    { type: "narration", content: "هانا ضحكت قليلا." },
    { type: "narration", content: "ثم أخرجت قطعة قماش صغيرة." },
    { type: "narration", content: "لفت الجرح." },

    { type: "dialogue", character: "هانا", content: "هذا سيوقف النزيف." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },

    { type: "scene-break", content: "سؤال غريب" },

    { type: "narration", content: "بعد لحظة…" },
    { type: "narration", content: "نظر ياماتو إليها." },

    { type: "dialogue", character: "ياماتو", content: "هانا." },
    { type: "dialogue", character: "هانا", content: "نعم؟" },
    { type: "dialogue", character: "ياماتو", content: "قبل أن يظهر الوحش…" },
    { type: "dialogue", character: "هانا", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "طلبت مني التحرك إلى اليسار." },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },

    { type: "narration", content: "هانا صمتت لحظة." },

    { type: "narration", content: "ياماتو تابع." },

    { type: "dialogue", character: "ياماتو", content: "وكأنك كنت تعرفين من أين سيأتي." },

    { type: "narration", content: "هانا نظرت إلى الأرض." },
    { type: "narration", content: "ثم قالت بهدوء." },

    { type: "dialogue", character: "هانا", content: "كنت أتوقع." },
    { type: "dialogue", character: "ياماتو", content: "تتوقعين؟" },
    { type: "dialogue", character: "هانا", content: "الذئاب تهاجم من اتجاه الريح عادة." },

    { type: "narration", content: "ياماتو فكر قليلا." },

    { type: "dialogue", character: "ياماتو", content: "هذا منطقي." },

    { type: "narration", content: "ثم ابتسم." },

    { type: "dialogue", character: "ياماتو", content: "يبدو أن القراءة مفيدة." },
    { type: "dialogue", character: "هانا", content: "نعم." },

    { type: "narration", content: "لكن للحظة قصيرة…" },
    { type: "narration", content: "نظرتها تغيرت." },
    { type: "narration", content: "كأنها تخفي شيئا." },
    { type: "narration", content: "ثم عادت ابتسامتها." },

    { type: "scene-break", content: "الاستمرار" },

    { type: "narration", content: "وقف ياماتو ببطء." },
    { type: "narration", content: "حرك ذراعه قليلا." },

    { type: "dialogue", character: "ياماتو", content: "أعتقد أنني ما زلت حيا." },
    { type: "dialogue", character: "هانا", content: "لحسن الحظ." },

    { type: "narration", content: "ياماتو نظر إلى الغابة." },

    { type: "dialogue", character: "ياماتو", content: "هل نكمل؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },

    { type: "narration", content: "ياماتو ابتسم." },

    { type: "dialogue", character: "ياماتو", content: "حسنا…" },

    { type: "narration", content: "ثم قال بحماس خفيف." },

    { type: "dialogue", character: "ياماتو", content: "لنر ماذا ينتظرنا أيضا." },

    { type: "chapter-end", content: "— نهاية الفصل الثالث — الجزء الرابع —" }
  ]
},
{
  id: 15,
  chapter: 15,
  title: "الجزء الخامس",
  subtitle: "صوت المعركة",

  sections: [

    { type: "scene-break", content: "بعد المواجهة" },

    { type: "narration", content: "وقف ياماتو وهانا قرب جذع شجرة كبيرة." },
    { type: "narration", content: "الريح تمر بين الأوراق." },
    { type: "narration", content: "والغابة عادت هادئة مرة أخرى." },
    { type: "narration", content: "ياماتو كان يحرك ذراعه قليلا." },

    { type: "dialogue", character: "ياماتو", content: "هممم." },
    { type: "dialogue", character: "هانا", content: "هل يؤلمك؟" },
    { type: "dialogue", character: "ياماتو", content: "قليلا." },

    { type: "narration", content: "ثم ابتسم." },

    { type: "dialogue", character: "ياماتو", content: "لكنني ما زلت أستطيع حمل العصا." },
    { type: "dialogue", character: "هانا", content: "هذا جيد." },
    { type: "dialogue", character: "ياماتو", content: "هل يبدو الجرح مخيفا؟" },

    { type: "narration", content: "هانا نظرت إلى ذراعه." },

    { type: "dialogue", character: "هانا", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "هانا", content: "خدش فقط." },

    { type: "narration", content: "ياماتو تنهد براحة." },

    { type: "dialogue", character: "ياماتو", content: "جيد… كنت أخاف أن يبدو بطوليا أكثر من اللازم." },

    { type: "narration", content: "هانا ضحكت بخفة." },

    { type: "dialogue", character: "هانا", content: "أنت غريب." },
    { type: "dialogue", character: "ياماتو", content: "سمعت هذا كثيرا مؤخرا." },

    { type: "scene-break", content: "السير داخل الغابة" },

    { type: "narration", content: "بدأ الاثنان يمشيان ببطء مرة أخرى." },
    { type: "narration", content: "الأرض أصبحت أكثر انحدارا." },
    { type: "narration", content: "الأشجار أكثر كثافة." },
    { type: "narration", content: "ياماتو كان ينظر حوله باستمرار." },

    { type: "dialogue", character: "ياماتو", content: "هل تشعرين أننا دخلنا عميقا؟" },
    { type: "dialogue", character: "هانا", content: "ربما." },
    { type: "dialogue", character: "ياماتو", content: "هل هذا جيد؟" },
    { type: "dialogue", character: "هانا", content: "ليس سيئا… طالما نعرف طريق العودة." },

    { type: "narration", content: "ياماتو توقف." },

    { type: "dialogue", character: "ياماتو", content: "هل نعرف طريق العودة؟" },

    { type: "narration", content: "هانا صمتت لحظة." },

    { type: "dialogue", character: "هانا", content: "تقريبا." },
    { type: "dialogue", character: "ياماتو", content: "تقريبا؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },

    { type: "narration", content: "ياماتو تنهد." },

    { type: "dialogue", character: "ياماتو", content: "ممتاز." },

    { type: "scene-break", content: "أصوات غريبة" },

    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "سمعا صوتا بعيدا." },

    { type: "combat", content: "بووم!" },
    { type: "narration", content: "صوت انفجار سحري." },

    { type: "narration", content: "ياماتو توقف." },

    { type: "dialogue", character: "ياماتو", content: "هل سمعت ذلك؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "تعويذة؟" },
    { type: "dialogue", character: "هانا", content: "يبدو كذلك." },

    { type: "narration", content: "ثم تبعه صوت آخر." },

    { type: "combat", content: "غرررررر!" },

    { type: "narration", content: "ياماتو عبس." },

    { type: "dialogue", character: "ياماتو", content: "هذا ليس جيدا." },

    { type: "narration", content: "هانا نظرت في الاتجاه." },

    { type: "dialogue", character: "هانا", content: "يبدو أن فريقا آخر يقاتل." },
    { type: "dialogue", character: "ياماتو", content: "هل نذهب؟" },
    { type: "dialogue", character: "هانا", content: "ربما يحتاجون مساعدة." },
    { type: "dialogue", character: "ياماتو", content: "أو ربما لديهم الوضع تحت السيطرة." },
    { type: "dialogue", character: "هانا", content: "لنلقي نظرة فقط." },

    { type: "narration", content: "ياماتو تنهد." },

    { type: "dialogue", character: "ياماتو", content: "حسنا… لكن لو كان وحشا ضخما سنركض." },
    { type: "dialogue", character: "هانا", content: "اتفقنا." },

    { type: "scene-break", content: "الاقتراب من المعركة" },

    { type: "narration", content: "ركضا بين الأشجار." },
    { type: "narration", content: "الأصوات أصبحت أقوى." },
    { type: "narration", content: "أصوات صراخ." },
    { type: "narration", content: "تعويذات." },
    { type: "narration", content: "وأصوات مخالب تضرب الأرض." },
    { type: "narration", content: "عندما وصلا…" },
    { type: "narration", content: "توقف ياماتو فجأة." },

    { type: "dialogue", character: "ياماتو", content: "أوه." },

    { type: "narration", content: "أمامهما كان يقف ثلاثة طلاب." },
    { type: "narration", content: "ومن بينهم…" },
    { type: "narration", content: "الوسيم صاحب رتبة B." },
    { type: "narration", content: "لكنهم كانوا في وضع سيئ." },
    { type: "narration", content: "وحش ضخم يقف أمامهم." },
    { type: "narration", content: "جسد يشبه دبّا صغيرا." },
    { type: "narration", content: "لكن مخالبه طويلة." },
    { type: "narration", content: "وعيناه حمراء." },

    { type: "shout", character: "الطالب", content: "ابتعدوا!" },

    { type: "narration", content: "الوسيم حاول إطلاق تعويذة." },
    { type: "narration", content: "لكن الوحش ضرب الأرض بقوة." },

    { type: "combat", content: "بووم!" },

    { type: "narration", content: "الطلاب تراجعوا." },

    { type: "whisper", character: "ياماتو", content: "هذا أكبر بكثير." },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "خطة؟" },
    { type: "dialogue", character: "هانا", content: "لا نتركهم." },
    { type: "dialogue", character: "ياماتو", content: "كنت أعرف أنك ستقولين ذلك." },

    { type: "scene-break", content: "الدخول في القتال" },

    { type: "shout", character: "ياماتو", content: "أيها الدب!" },

    { type: "narration", content: "الوحش التفت نحوه." },
    { type: "narration", content: "الطلاب صدموا." },

    { type: "shout", character: "الوسيم", content: "أنت؟!" },

    { type: "dialogue", character: "ياماتو", content: "مرحبا." },

    { type: "narration", content: "الطالب الآخر قال." },

    { type: "shout", character: "الطالب", content: "ابتعد!" },

    { type: "dialogue", character: "ياماتو", content: "لا أستطيع." },

    { type: "narration", content: "ثم قال." },

    { type: "dialogue", character: "ياماتو", content: "لقد رأيته أولا." },

    { type: "narration", content: "الوحش هجم فجأة." },
    { type: "narration", content: "ياماتو ركض جانبا." },

    { type: "skill", content: "تعويذة مستخدمة: رياح قوية" },
    { type: "narration", content: "هانا أطلقت تعويذة رياح قوية." },

    { type: "narration", content: "الوحش تراجع نصف خطوة." },
    { type: "narration", content: "الوسيم استغل الفرصة." },

    { type: "skill", content: "تعويذة مستخدمة: برق" },
    { type: "narration", content: "أطلق تعويذة برق." },

    { type: "combat", content: "بزززز!" },

    { type: "narration", content: "الوحش صرخ." },
    { type: "narration", content: "الطالب الثالث ضربه بسيفه." },
    { type: "narration", content: "الوحش تراجع أخيرا." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "هرب بين الأشجار." },
    { type: "narration", content: "صمت." },

    { type: "scene-break", content: "بعد القتال" },

    { type: "narration", content: "الطلاب وقفوا يلهثون." },

    { type: "narration", content: "الوسيم نظر إلى ياماتو." },

    { type: "dialogue", character: "الوسيم", content: "لماذا تدخلت؟" },
    { type: "dialogue", character: "ياماتو", content: "لماذا لا؟" },
    { type: "dialogue", character: "الوسيم", content: "كان يمكن أن تموت." },
    { type: "dialogue", character: "ياماتو", content: "كنت أفكر في ذلك." },

    { type: "narration", content: "الطالب الآخر قال." },

    { type: "dialogue", character: "الطالب", content: "أنت… رتبة F." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الطالب", content: "لكن…" },

    { type: "narration", content: "نظر إلى آثار القتال حوله." },

    { type: "dialogue", character: "الطالب", content: "ساعدت." },

    { type: "narration", content: "ياماتو رفع كتفيه." },

    { type: "dialogue", character: "ياماتو", content: "فريق الاثنين." },

    { type: "narration", content: "هانا ابتسمت بهدوء." },

    { type: "scene-break", content: "ردود فعل" },

    { type: "narration", content: "الوسيم نظر إلى هانا." },

    { type: "dialogue", character: "الوسيم", content: "هل أنتما فريق؟" },
    { type: "dialogue", character: "هانا", content: "نعم." },
    { type: "dialogue", character: "الوسيم", content: "غريب." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "dialogue", character: "الوسيم", content: "لأن معظم الناس رفضوا فريقك." },
    { type: "dialogue", character: "ياماتو", content: "هذا صحيح." },

    { type: "narration", content: "ثم قال." },

    { type: "dialogue", character: "ياماتو", content: "لكن يبدو أننا نجونا." },

    { type: "narration", content: "الوسيم صمت لحظة." },
    { type: "narration", content: "ثم قال بهدوء." },

    { type: "dialogue", character: "الوسيم", content: "شكرا." },

    { type: "narration", content: "ياماتو ابتسم." },

    { type: "dialogue", character: "ياماتو", content: "لا تقل ذلك كثيرا… سأعتاد عليه." },

    { type: "scene-break", content: "نهاية الاختبار" },

    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "صدر صوت بعيد في الغابة." },

    { type: "combat", content: "دونغ… دونغ…" },

    { type: "narration", content: "ياماتو نظر حوله." },

    { type: "dialogue", character: "ياماتو", content: "ما هذا؟" },

    { type: "narration", content: "كينجي ظهر من بين الأشجار مع فريقه." },

    { type: "dialogue", character: "كينجي", content: "إنه الجرس." },
    { type: "dialogue", character: "ياماتو", content: "جرس؟" },
    { type: "dialogue", character: "كينجي", content: "نهاية اختبار الغابة." },

    { type: "narration", content: "ياماتو تنهد." },

    { type: "dialogue", character: "ياماتو", content: "أخيرا." },

    { type: "narration", content: "ثم نظر إلى هانا." },

    { type: "dialogue", character: "ياماتو", content: "نجونا." },

    { type: "narration", content: "هانا ابتسمت." },

    { type: "dialogue", character: "هانا", content: "نعم." },

    { type: "scene-break", content: "العودة" },

    { type: "narration", content: "بدأ الطلاب يتجهون نحو مخرج الغابة." },
    { type: "narration", content: "المجموعات تتجمع مرة أخرى." },
    { type: "narration", content: "المدربون ينتظرون عند الحاجز السحري." },
    { type: "narration", content: "ياماتو كان يمشي ببطء." },

    { type: "narration", content: "كينجي اقترب منه." },

    { type: "dialogue", character: "كينجي", content: "سمعت أنك قاتلت وحشا أكبر." },
    { type: "dialogue", character: "ياماتو", content: "تقريبا." },
    { type: "dialogue", character: "كينجي", content: "رتبة F؟" },
    { type: "dialogue", character: "ياماتو", content: "رتبة F مع حظ جيد." },

    { type: "narration", content: "كينجي ضحك." },

    { type: "scene-break", content: "نظرة أخيرة" },
    

    { type: "narration", content: "بينما كانوا يخرجون من الغابة…" },
    { type: "narration", content: "نظرت هانا إلى ياماتو للحظة." },
    { type: "narration", content: "ابتسمت." },
    { type: "narration", content: "لكن في عينيها…" },
    { type: "narration", content: "مر بريق غامض." },
    { type: "narration", content: "كأنها تراقبه." },
    { type: "narration", content: "وتفكر بشيء." },
    { type: "narration", content: "شيء لا يعرفه ياماتو بعد." },

    { type: "chapter-end", content: "— نهاية الفصل الثالث —" }

  ]
},
{
  id: 16,
  title: "الجزء الأول",
  subtitle: "الليلة التي تحطمت فيها السمعة",
  sections: [
    { type: "scene-break", content: "ليلة هادئة قبل العاصفة" },
    { type: "narration", content: "كانت ليلة هادئة في أكاديمية كاغيتسورا." },
    { type: "narration", content: "القمر يضيء الممرات الحجرية الخافتة." },
    { type: "narration", content: "معظم الطلاب عادوا إلى غرفهم بعد تدريب الغابة." },
    { type: "narration", content: "ياماتو كان مستلقيا على سريره." },
    { type: "narration", content: "يداه خلف رأسه." },
    { type: "narration", content: "ينظر إلى سقف الغرفة." },
    { type: "dialogue", character: "ياماتو", content: "يا له من يوم طويل…" },
    { type: "narration", content: "أحد الطلاب في السرير المقابل قال." },
    { type: "dialogue", character: "الطالب", content: "سمعت أنك قاتلت وحشا كبيرا اليوم." },
    { type: "dialogue", character: "ياماتو", content: "أنا قاتلت… وهو حاول أكلي." },
    { type: "dialogue", character: "الطالب", content: "ومن فاز؟" },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أننا تعادلنا." },
    { type: "narration", content: "ضحك الطالب." },
    { type: "narration", content: "ياماتو أغلق عينيه." },
    { type: "dialogue", character: "ياماتو", content: "غدا سأكون أكثر قوة." },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "أو أكثر تعبا." },
    { type: "narration", content: "بعد لحظات…" },
    { type: "narration", content: "غلبه النوم." },
    { type: "narration", content: "لم يكن يعلم…" },
    { type: "narration", content: "أن تلك الليلة ستكون آخر ليلة له في الأكاديمية." },

    { type: "scene-break", content: "صباح غير طبيعي" },
    { type: "narration", content: "في الصباح…" },
    { type: "narration", content: "فتح ياماتو عينيه ببطء." },
    { type: "narration", content: "الشمس بالكاد ظهرت." },
    { type: "narration", content: "جلس على السرير." },
    { type: "narration", content: "تثاءب." },
    { type: "dialogue", character: "ياماتو", content: "هممم…" },
    { type: "narration", content: "ثم وقف." },
    { type: "narration", content: "اتجه نحو المغسلة الصغيرة." },
    { type: "narration", content: "فتح الماء." },
    { type: "narration", content: "بدأ يغسل وجهه." },
    { type: "combat", content: "بووووم!" },
    { type: "narration", content: "الباب انفتح بقوة." },
    { type: "narration", content: "دخل أربعة حراس مدججين بالسلاح." },
    { type: "narration", content: "ياماتو تجمد." },
    { type: "narration", content: "الماء ما زال على وجهه." },
    { type: "dialogue", character: "ياماتو", content: "ماذا…؟" },
    { type: "narration", content: "أحد الحراس أمسكه من كتفه بقوة." },
    { type: "dialogue", character: "الحارس", content: "ياماتو." },
    { type: "dialogue", character: "ياماتو", content: "نعم؟" },
    { type: "dialogue", character: "الحارس", content: "أنت معتقل." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "narration", content: "حارس آخر قال ببرود." },
    { type: "dialogue", character: "الحارس", content: "بأمر من الملك." },
    { type: "shout", character: "ياماتو", content: "الملك؟!" },

    { type: "scene-break", content: "القاعة الملكية" },
    { type: "narration", content: "بعد دقائق…" },
    { type: "narration", content: "كان ياماتو يُسحب عبر الممرات." },
    { type: "narration", content: "ما زال شعره مبللا." },
    { type: "narration", content: "لم يرتب نفسه حتى." },
    { type: "dialogue", character: "ياماتو", content: "انتظروا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هل يمكنني على الأقل غسل وجهي؟" },
    { type: "dialogue", character: "الحارس", content: "اصمت." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "بعد لحظات…" },
    { type: "narration", content: "فتح باب ضخم." },
    { type: "narration", content: "دخلوا قاعة كبيرة." },
    { type: "narration", content: "قاعة المحكمة الملكية داخل الأكاديمية." },
    { type: "narration", content: "في الأعلى…" },
    { type: "narration", content: "جلس الملك ريوسين." },
    { type: "narration", content: "على يمينه ويساره…" },
    { type: "narration", content: "نبلاء." },
    { type: "narration", content: "وسحرة أقوياء." },
    { type: "narration", content: "هالاتهم السحرية ثقيلة." },
    { type: "narration", content: "بعضهم من رتبة S." },
    { type: "narration", content: "ياماتو وقف في وسط القاعة." },
    { type: "narration", content: "وحيدا." },
    { type: "narration", content: "العيون كلها عليه." },
    { type: "narration", content: "نظرات مليئة بالغضب." },
    { type: "narration", content: "الاحتقار." },
    { type: "narration", content: "الصدمة." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "ماذا يحدث؟" },

    { type: "scene-break", content: "رؤية هانا" },
    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "رأى شخصا مألوفا." },
    { type: "narration", content: "هانا." },
    { type: "narration", content: "كانت تجلس قرب أحد الحراس." },
    { type: "narration", content: "الحارس كان طويلا." },
    { type: "narration", content: "وسيم الملامح." },
    { type: "narration", content: "بنية قوية." },
    { type: "narration", content: "يقف بجانبها كأنه يحميها." },
    { type: "narration", content: "هانا كانت تخفي وجهها قليلا." },
    { type: "narration", content: "كأنها خائفة." },
    { type: "narration", content: "ياماتو فتح عينيه." },
    { type: "dialogue", character: "ياماتو", content: "هانا؟" },
    { type: "narration", content: "حاول أن يقترب خطوة." },
    { type: "narration", content: "الحارس الطويل تقدم فجأة." },
    { type: "dialogue", character: "الحارس الطويل", content: "توقف." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "narration", content: "الحارس الطويل ببرود." },
    { type: "dialogue", character: "الحارس الطويل", content: "لا تتحدث معها." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "narration", content: "الحارس الطويل نظر إليه بغضب." },
    { type: "dialogue", character: "الحارس الطويل", content: "أيها المتحرش." },

    { type: "scene-break", content: "الصدمة" },
    { type: "narration", content: "الصمت سقط في القاعة." },
    { type: "narration", content: "ياماتو تجمد." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "narration", content: "ثم قال ببطء." },
    { type: "dialogue", character: "ياماتو", content: "متحرش…؟" },
    { type: "narration", content: "أشار إلى نفسه." },
    { type: "dialogue", character: "ياماتو", content: "أنا؟" },
    { type: "narration", content: "بعض النبلاء قالوا باحتقار." },
    { type: "dialogue", character: "النبيل", content: "ما زلت تتظاهر بالبراءة." },
    { type: "narration", content: "نبيل آخر قال." },
    { type: "dialogue", character: "النبيل", content: "قذر." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "narration", content: "ثم نظر إلى الملك." },
    { type: "dialogue", character: "ياماتو", content: "انتظروا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ماذا يحدث هنا؟" },

    { type: "scene-break", content: "الاتهام" },
    { type: "narration", content: "وقف أحد النبلاء." },
    { type: "dialogue", character: "النبيل", content: "الطالبة هانا…" },
    { type: "narration", content: "ثم أشار إليها." },
    { type: "dialogue", character: "النبيل", content: "اتهمتك بالاعتداء عليها الليلة الماضية." },
    { type: "narration", content: "القاعة امتلأت بالهمسات." },
    { type: "shout", character: "ياماتو", content: "ماذا؟!" },
    { type: "narration", content: "ثم نظر إلى هانا." },
    { type: "dialogue", character: "ياماتو", content: "هانا…" },
    { type: "narration", content: "لكنها لم تنظر إليه." },
    { type: "narration", content: "كانت تخفي وجهها خلف الحارس الطويل." },
    { type: "dialogue", character: "ياماتو", content: "هانا… قولي لهم." },
    { type: "narration", content: "صمت." },
    { type: "narration", content: "لم تجب." },
    { type: "dialogue", character: "ياماتو", content: "هانا؟" },
    { type: "narration", content: "الحارس الطويل صرخ." },
    { type: "shout", character: "الحارس الطويل", content: "قلت لا تتحدث معها!" },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "لكن—" },
    { type: "dialogue", character: "الحارس الطويل", content: "أيها المنحرف." },
    { type: "shout", character: "ياماتو", content: "أنا لم أفعل شيئا!" },

    { type: "scene-break", content: "الأمل يتكسر" },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "narration", content: "الوجوه كلها غاضبة." },
    { type: "narration", content: "لا أحد يصدق." },
    { type: "narration", content: "حتى بعض الطلاب في الخلف كانوا يتهامسون." },
    { type: "narration", content: "طالب قال." },
    { type: "dialogue", character: "الطالب", content: "كنت أعرف أن هناك شيئا غريبا فيه." },
    { type: "narration", content: "طالب آخر." },
    { type: "dialogue", character: "الطالب", content: "رتبة F…" },
    { type: "narration", content: "ياماتو شد قبضته." },
    { type: "dialogue", character: "ياماتو", content: "هذا كذب." },
    { type: "narration", content: "نظر إلى الملك." },
    { type: "dialogue", character: "ياماتو", content: "يا جلالة الملك…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "أنا لم أفعل شيئا." },

    { type: "scene-break", content: "الدليل" },
    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "فتح باب القاعة." },
    { type: "narration", content: "دخل حارس آخر." },
    { type: "narration", content: "يبدو مرتبكا." },
    { type: "narration", content: "وفي يده شيء ملفوف بقماش." },
    { type: "dialogue", character: "الحارس", content: "سيدي…" },
    { type: "narration", content: "اقترب." },
    { type: "narration", content: "ثم قال بخجل." },
    { type: "dialogue", character: "الحارس", content: "لقد وجدنا هذا…" },
    { type: "narration", content: "فتح القماش." },
    { type: "narration", content: "ظهر سروال داخلي نسائي." },
    { type: "narration", content: "الصمت سقط." },
    { type: "narration", content: "الحارس أكمل." },
    { type: "dialogue", character: "الحارس", content: "في غرفة المتهم." },
    { type: "narration", content: "القاعة انفجرت بالهمسات." },
    { type: "narration", content: "هانا شهقت." },
    { type: "narration", content: "ثم غطت وجهها بسرعة." },
    { type: "narration", content: "اختبأت خلف الحارس الطويل." },
    { type: "narration", content: "ياماتو تجمد." },
    { type: "dialogue", character: "ياماتو", content: "هذا…" },
    { type: "narration", content: "ثم قال." },
    { type: "shout", character: "ياماتو", content: "لم أر هذا من قبل!" },

    { type: "scene-break", content: "الغضب" },
    { type: "narration", content: "الحارس الطويل نظر إلى ياماتو." },
    { type: "narration", content: "عيناه مليئة بالغضب." },
    { type: "dialogue", character: "الحارس الطويل", content: "أيها الحقير." },
    { type: "dialogue", character: "ياماتو", content: "أنا لم—" },
    { type: "narration", content: "الحارس الطويل قطع كلامه." },
    { type: "dialogue", character: "الحارس الطويل", content: "لو لم نكن في قاعة الملك…" },
    { type: "narration", content: "ثم شد قبضته." },
    { type: "dialogue", character: "الحارس الطويل", content: "لكنت سحقتك هنا." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "narration", content: "ثم نظر إلى الملك." },
    { type: "narration", content: "ثم إلى هانا." },
    { type: "narration", content: "التي ما زالت تخفي وجهها." },
    { type: "narration", content: "في تلك اللحظة…" },
    { type: "narration", content: "شعر بشيء داخله." },
    { type: "narration", content: "ثقل." },
    { type: "narration", content: "غضب." },
    { type: "narration", content: "لكن…" },
    { type: "narration", content: "أيضا…" },
    { type: "narration", content: "يأس." },
    { type: "whisper", character: "ياماتو", content: "لن يصدقني أحد…" },
    { type: "narration", content: "ثم رفع رأسه ببطء." },
    { type: "narration", content: "ونظر إلى القاعة." },

    { type: "chapter-end", content: "— نهاية الفصل الرابع — الجزء الأول —" }
  ]
},
{
  id: 17,
  title: "الجزء الثاني",
  subtitle: "قاعة الإدانة",
  sections: [
    { type: "scene-break", content: "بداية الانهيار" },
    { type: "narration", content: "وقف ياماتو في منتصف القاعة." },
    { type: "narration", content: "يداه مقيدتان." },
    { type: "narration", content: "شعره ما زال مبللا من الماء الذي لم يكمل غسل وجهه به." },
    { type: "narration", content: "القاعة كانت ضخمة." },
    { type: "narration", content: "الأعمدة العالية." },
    { type: "narration", content: "الرايات الملكية." },
    { type: "narration", content: "والوجوه…" },
    { type: "narration", content: "وجوه كثيرة تنظر إليه." },
    { type: "narration", content: "لكن لا أحد ينظر إليه كإنسان." },
    { type: "narration", content: "بل كشيء قذر." },
    { type: "narration", content: "ياماتو فتح فمه." },
    { type: "dialogue", character: "ياماتو", content: "أنا—" },
    { type: "narration", content: "نبيل ضرب الأرض بعصاه." },
    { type: "combat", content: "طَخ!" },
    { type: "shout", character: "النبيل", content: "اصمت." },
    { type: "narration", content: "الصمت عاد للحظة." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "لكن—" },
    { type: "narration", content: "ساحر من رتبة S قال ببرود." },
    { type: "dialogue", character: "الساحر", content: "لا نريد سماع أعذارك." },
    { type: "narration", content: "ياماتو عبس قليلا." },
    { type: "dialogue", character: "ياماتو", content: "أنا لم—" },
    { type: "narration", content: "الحارس الطويل تقدم خطوة." },
    { type: "shout", character: "الحارس الطويل", content: "قلت اصمت." },
    { type: "narration", content: "صوته كان حادا." },
    { type: "narration", content: "ياماتو أغلق فمه." },
    { type: "narration", content: "نظر حوله." },
    { type: "narration", content: "كل الوجوه…" },
    { type: "narration", content: "مليئة بالاحتقار." },

    { type: "scene-break", content: "النظرات" },
    { type: "narration", content: "طالب من الخلف همس." },
    { type: "dialogue", character: "الطالب", content: "هذا هو؟" },
    { type: "narration", content: "طالب آخر." },
    { type: "dialogue", character: "الطالب", content: "المتحرش؟" },
    { type: "narration", content: "نبيل قال." },
    { type: "dialogue", character: "النبيل", content: "انظروا إليه." },
    { type: "narration", content: "نبيل آخر." },
    { type: "dialogue", character: "النبيل", content: "حتى شكله مقزز." },
    { type: "narration", content: "ضحكات خافتة انتشرت." },
    { type: "narration", content: "ياماتو شد قبضته قليلا." },
    { type: "narration", content: "لكن لم يقل شيئا." },

    { type: "scene-break", content: "رؤية هانا" },
    { type: "narration", content: "عيناه تحركتا في القاعة." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "توقفتا." },
    { type: "narration", content: "هانا." },
    { type: "narration", content: "كانت جالسة قرب الحارس الطويل." },
    { type: "narration", content: "ظهرها قريب منه." },
    { type: "narration", content: "كأنها تختبئ خلفه." },
    { type: "narration", content: "وجهها خائف." },
    { type: "narration", content: "أو…" },
    { type: "narration", content: "هكذا بدا." },
    { type: "narration", content: "ياماتو نظر إليها." },
    { type: "dialogue", character: "ياماتو", content: "هانا—" },
    { type: "narration", content: "الحارس الطويل ضرب الأرض بقدمه." },
    { type: "shout", character: "الحارس الطويل", content: "لا تنطق اسمها." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "لكن—" },
    { type: "narration", content: "الحارس الطويل صرخ." },
    { type: "shout", character: "الحارس الطويل", content: "أيها المنحرف!" },
    { type: "narration", content: "القاعة امتلأت بالهمسات." },
    { type: "narration", content: "نبيل قال." },
    { type: "dialogue", character: "النبيل", content: "وقح حتى الآن." },

    { type: "scene-break", content: "الاتهام" },
    { type: "narration", content: "وقف أحد النبلاء." },
    { type: "dialogue", character: "النبيل", content: "الطالبة هانا." },
    { type: "narration", content: "ثم أشار إليها." },
    { type: "dialogue", character: "النبيل", content: "تتهمك بالاعتداء عليها الليلة الماضية." },
    { type: "narration", content: "صمت." },
    { type: "narration", content: "ياماتو رمش ببطء." },
    { type: "narration", content: "كأنه لم يفهم." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "narration", content: "ضحكة قصيرة خرجت من أحد الطلاب." },
    { type: "dialogue", character: "الطالب", content: "ما زال يتظاهر." },
    { type: "narration", content: "ياماتو قال ببطء." },
    { type: "dialogue", character: "ياماتو", content: "اعتداء…؟" },
    { type: "narration", content: "ثم أشار إلى نفسه." },
    { type: "dialogue", character: "ياماتو", content: "أنا؟" },
    { type: "narration", content: "الساحر من رتبة S قال ببرود." },
    { type: "dialogue", character: "الساحر", content: "الأدلة واضحة." },
    { type: "dialogue", character: "ياماتو", content: "أي أدلة؟" },
    { type: "narration", content: "الساحر أشار للحارس." },
    { type: "narration", content: "الحارس رفع قطعة القماش." },
    { type: "narration", content: "السروال الداخلي." },
    { type: "narration", content: "القاعة همست." },
    { type: "dialogue", character: "الساحر", content: "وجد في غرفتك." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "narration", content: "ثم إلى القطعة." },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "هذا ليس—" },
    { type: "shout", character: "الحارس", content: "اصمت!" },

    { type: "scene-break", content: "الإهانة" },
    { type: "narration", content: "الحارس الطويل اقترب منه." },
    { type: "narration", content: "وقف أمامه مباشرة." },
    { type: "narration", content: "نظر إلى عينيه." },
    { type: "dialogue", character: "الحارس الطويل", content: "أيها القذر." },
    { type: "narration", content: "ياماتو صمت." },
    { type: "dialogue", character: "الحارس الطويل", content: "حتى لو توسلت الآن…" },
    { type: "narration", content: "ثم شد قبضته." },
    { type: "dialogue", character: "الحارس الطويل", content: "لن أسمح لك بالاقتراب منها مرة أخرى." },
    { type: "narration", content: "ياماتو فتح فمه." },
    { type: "dialogue", character: "ياماتو", content: "أنا—" },
    { type: "narration", content: "الحارس الطويل دفعه بقوة." },
    { type: "narration", content: "ياماتو تراجع خطوة." },
    { type: "narration", content: "القاعة ضحكت." },
    { type: "narration", content: "أحد النبلاء قال." },
    { type: "dialogue", character: "النبيل", content: "انظروا إليه." },
    { type: "narration", content: "نبيل آخر." },
    { type: "dialogue", character: "النبيل", content: "ضعيف." },

    { type: "scene-break", content: "محاولة أخيرة" },
    { type: "narration", content: "ياماتو نظر إلى هانا مرة أخرى." },
    { type: "narration", content: "صوته أصبح أخف." },
    { type: "dialogue", character: "ياماتو", content: "هانا…" },
    { type: "narration", content: "لم ترفع رأسها." },
    { type: "dialogue", character: "ياماتو", content: "انظري إلي." },
    { type: "narration", content: "لا رد." },
    { type: "dialogue", character: "ياماتو", content: "قولي لهم." },
    { type: "narration", content: "الحارس الطويل ضرب الأرض بقدمه مرة أخرى." },
    { type: "shout", character: "الحارس الطويل", content: "قلت لا تتحدث معها!" },
    { type: "dialogue", character: "ياماتو", content: "لكن—" },
    { type: "narration", content: "الحارس الطويل أمسكه من ملابسه." },
    { type: "dialogue", character: "الحارس الطويل", content: "أنت لا تملك الحق بالكلام." },
    { type: "narration", content: "ثم دفعه مرة أخرى." },
    { type: "narration", content: "ياماتو سقط على ركبة واحدة." },
    { type: "narration", content: "القاعة امتلأت بالضحك الخافت." },

    { type: "scene-break", content: "اللحظة القاتلة" },
    { type: "narration", content: "رفع الملك يده." },
    { type: "narration", content: "القاعة صمتت." },
    { type: "narration", content: "الملك نظر إلى هانا." },
    { type: "dialogue", character: "الملك", content: "هل هذا الرجل اعتدى عليك؟" },
    { type: "narration", content: "هانا ارتجفت قليلا." },
    { type: "narration", content: "تمسكت بذراع الحارس الطويل." },
    { type: "narration", content: "ثم قالت بصوت ضعيف." },
    { type: "dialogue", character: "هانا", content: "ن… نعم." },
    { type: "narration", content: "الصمت أصبح أثقل." },
    { type: "narration", content: "ياماتو بقي على ركبته." },
    { type: "narration", content: "عيناه اتسعتا." },
    { type: "dialogue", character: "ياماتو", content: "…" },
    { type: "narration", content: "لم يخرج صوت." },

    { type: "scene-break", content: "الحكم" },
    { type: "narration", content: "الملك قال بهدوء." },
    { type: "dialogue", character: "الملك", content: "بناء على الشهادة." },
    { type: "narration", content: "ثم أشار إلى ياماتو." },
    { type: "dialogue", character: "الملك", content: "وبناء على الأدلة." },
    { type: "narration", content: "صمت قصير." },
    { type: "dialogue", character: "الملك", content: "يتم طرد ياماتو من أكاديمية كاغيتسورا." },
    { type: "narration", content: "نبيل قال." },
    { type: "dialogue", character: "النبيل", content: "قرار عادل." },
    { type: "narration", content: "الساحر قال." },
    { type: "dialogue", character: "الساحر", content: "كان يجب حبسه." },
    { type: "narration", content: "الحارس الطويل نظر إليه." },
    { type: "dialogue", character: "الحارس الطويل", content: "اطردوه." },
    { type: "narration", content: "ثم قال بغضب." },
    { type: "dialogue", character: "الحارس الطويل", content: "قبل أن أقتله هنا." },

    { type: "scene-break", content: "النظرة الأخيرة" },
    { type: "narration", content: "الحراس أمسكوا ياماتو." },
    { type: "narration", content: "سحبوه نحو الباب." },
    { type: "narration", content: "قبل أن يخرج…" },
    { type: "narration", content: "رفع رأسه مرة أخيرة." },
    { type: "narration", content: "نظر إلى القاعة." },
    { type: "narration", content: "إلى النبلاء." },
    { type: "narration", content: "إلى السحرة." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "إلى هانا." },
    { type: "narration", content: "كانت ما تزال تخفي وجهها." },
    { type: "narration", content: "ياماتو نظر إليها لثانية طويلة." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "ابتسم." },
    { type: "narration", content: "ابتسامة صغيرة." },
    { type: "narration", content: "لكن عينيه…" },
    { type: "narration", content: "لم تكن فيهما ابتسامة." },
    { type: "narration", content: "كانت فيهما…" },
    { type: "narration", content: "شيء آخر." },
    { type: "narration", content: "شيء مظلم." },

    { type: "chapter-end", content: "— نهاية الفصل الرابع — الجزء الثاني —" }
  ]
},
{
  id: 18,
  title: "الجزء الثالث",
  subtitle: "البوابة المغلقة",
  sections: [
    { type: "scene-break", content: "خارج القاعة" },
    { type: "narration", content: "دُفع ياماتو بقوة خارج القاعة الملكية." },
    { type: "narration", content: "الحراس لم ينتظروا حتى يعتدل في وقفته." },
    { type: "narration", content: "أحدهم أمسك كتفه." },
    { type: "dialogue", character: "الحارس", content: "تحرك." },
    { type: "narration", content: "ياماتو كاد يتعثر." },
    { type: "dialogue", character: "ياماتو", content: "هل يمكنكم—" },
    { type: "dialogue", character: "الحارس", content: "اصمت." },
    { type: "narration", content: "دفعه مرة أخرى." },
    { type: "narration", content: "خطواتهم الثقيلة ملأت الممر." },
    { type: "narration", content: "طلاب يقفون على الجانبين." },
    { type: "narration", content: "همسات." },
    { type: "narration", content: "نظرات." },
    { type: "narration", content: "طالب همس." },
    { type: "dialogue", character: "الطالب", content: "إنه هو." },
    { type: "narration", content: "طالب آخر." },
    { type: "dialogue", character: "الطالب", content: "المتحرش." },
    { type: "narration", content: "ضحكات خافتة." },
    { type: "narration", content: "ياماتو لم ينظر إليهم." },
    { type: "narration", content: "عيناه فقط تنظران للأمام." },

    { type: "scene-break", content: "بداية انتشار الفضيحة" },
    { type: "narration", content: "كلما مروا في الممر…" },
    { type: "narration", content: "الهمسات أصبحت أعلى." },
    { type: "narration", content: "طالبة قالت." },
    { type: "dialogue", character: "الطالبة", content: "هل هذا هو؟" },
    { type: "narration", content: "طالبة أخرى." },
    { type: "dialogue", character: "الطالبة", content: "سمعت أنه اقتحم غرفة فتاة." },
    { type: "narration", content: "طالب ثالث." },
    { type: "dialogue", character: "الطالب", content: "قذر." },
    { type: "narration", content: "طالب رابع." },
    { type: "dialogue", character: "الطالب", content: "كنت أظنه غريبا فقط." },
    { type: "dialogue", character: "الطالب", content: "اتضح أنه أسوأ." },
    { type: "narration", content: "الحارس شد القيود." },
    { type: "dialogue", character: "الحارس", content: "لا تتباطأ." },
    { type: "dialogue", character: "ياماتو", content: "أنا أمشي." },
    { type: "dialogue", character: "الحارس", content: "أسرع." },
    { type: "narration", content: "دفعه مرة أخرى." },

    { type: "scene-break", content: "مواجهة كينجي" },
    { type: "narration", content: "عندما وصلوا إلى الساحة…" },
    { type: "narration", content: "كان الطلاب مجتمعين." },
    { type: "narration", content: "الأخبار انتشرت بسرعة." },
    { type: "narration", content: "بعضهم يحدق." },
    { type: "narration", content: "بعضهم يتهامس." },
    { type: "narration", content: "وفجأة…" },
    { type: "narration", content: "خرج شخص من بين الحشد." },
    { type: "narration", content: "كينجي." },
    { type: "narration", content: "وقف أمام الحراس." },
    { type: "dialogue", character: "كينجي", content: "توقفوا." },
    { type: "narration", content: "الحارس عبس." },
    { type: "dialogue", character: "الحارس", content: "ابتعد." },
    { type: "narration", content: "كينجي نظر إلى ياماتو." },
    { type: "narration", content: "عيناه مليئتان بالارتباك." },
    { type: "dialogue", character: "كينجي", content: "ياماتو…" },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "narration", content: "ابتسم ابتسامة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "صباح الخير." },
    { type: "dialogue", character: "كينجي", content: "هل…" },
    { type: "narration", content: "توقف." },
    { type: "dialogue", character: "كينجي", content: "هل هذا صحيح؟" },
    { type: "narration", content: "الصمت سقط للحظة." },
    { type: "narration", content: "طلاب قريبون بدأوا يستمعون." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "هل تصدق ذلك؟" },
    { type: "narration", content: "كينجي لم يجب مباشرة." },
    { type: "dialogue", character: "كينجي", content: "أنا—" },
    { type: "narration", content: "طالب من الخلف قال." },
    { type: "dialogue", character: "الطالب", content: "اسأله عن السروال الداخلي." },
    { type: "narration", content: "ضحك بعض الطلاب." },
    { type: "narration", content: "كينجي نظر إلى الأرض لحظة." },
    { type: "narration", content: "ثم رفع رأسه." },
    { type: "dialogue", character: "كينجي", content: "لماذا وجد في غرفتك؟" },
    { type: "dialogue", character: "ياماتو", content: "لا أعرف." },
    { type: "dialogue", character: "كينجي", content: "هل دخلت غرفتها؟" },
    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "narration", content: "كينجي صمت." },
    { type: "narration", content: "لحظة طويلة." },
    { type: "narration", content: "ثم قال بصوت منخفض." },
    { type: "dialogue", character: "كينجي", content: "…" },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "حتى أنت؟" },
    { type: "narration", content: "كينجي لم يجب." },

    { type: "scene-break", content: "كلمات تؤلم" },
    { type: "narration", content: "طالب من الخلف صرخ." },
    { type: "shout", character: "الطالب", content: "خاب ظني فيك!" },
    { type: "narration", content: "طالب آخر." },
    { type: "dialogue", character: "الطالب", content: "ظننتك فقط أحمق." },
    { type: "narration", content: "الطالب الثالث." },
    { type: "dialogue", character: "الطالب", content: "لكن ليس هكذا." },
    { type: "narration", content: "طالبة قالت." },
    { type: "dialogue", character: "الطالبة", content: "قذر." },
    { type: "narration", content: "ياماتو نظر إلى الحشد." },
    { type: "narration", content: "وجوه كثيرة." },
    { type: "narration", content: "كلها مليئة بالاحتقار." },
    { type: "narration", content: "أحد الطلاب قال." },
    { type: "dialogue", character: "الطالب", content: "اطردوه." },
    { type: "narration", content: "طالب آخر." },
    { type: "dialogue", character: "الطالب", content: "لا نريد أمثاله هنا." },
    { type: "narration", content: "الحارس أمسك كتف ياماتو بقوة." },
    { type: "dialogue", character: "الحارس", content: "سمعتهم." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الحارس", content: "تحرك." },

    { type: "scene-break", content: "السير نحو البوابة" },
    { type: "narration", content: "بدأ الحراس يسحبونه نحو بوابة الأكاديمية." },
    { type: "narration", content: "الطلاب يتبعون من بعيد." },
    { type: "narration", content: "كأنهم يشاهدون عرضا." },
    { type: "narration", content: "أحد الحراس قال بسخرية." },
    { type: "dialogue", character: "الحارس", content: "كنت تريد أن تصبح ساحرا عظيما؟" },
    { type: "dialogue", character: "ياماتو", content: "ربما." },
    { type: "dialogue", character: "الحارس", content: "انتهى حلمك." },
    { type: "dialogue", character: "ياماتو", content: "ربما." },
    { type: "narration", content: "الحارس ضحك." },

    { type: "scene-break", content: "بوابة الأكاديمية" },
    { type: "narration", content: "وصلوا إلى البوابة الحديدية الضخمة." },
    { type: "narration", content: "الحارس فك القيود." },
    { type: "dialogue", character: "الحارس", content: "اخرج." },
    { type: "narration", content: "ياماتو لم يتحرك." },
    { type: "dialogue", character: "الحارس", content: "قلت اخرج." },
    { type: "dialogue", character: "ياماتو", content: "إلى أين؟" },
    { type: "dialogue", character: "الحارس", content: "إلى أي مكان." },
    { type: "narration", content: "ثم قال ببرود." },
    { type: "dialogue", character: "الحارس", content: "أنت مطرود من الأكاديمية." },
    { type: "narration", content: "ياماتو نظر إلى الخلف." },
    { type: "narration", content: "إلى المباني." },
    { type: "narration", content: "إلى الساحة." },
    { type: "narration", content: "إلى الطلاب." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "خطا خطوة خارج البوابة." },
    { type: "narration", content: "الحارس دفعه بقوة." },
    { type: "narration", content: "ياماتو كاد يسقط." },
    { type: "narration", content: "الحارس صرخ." },
    { type: "shout", character: "الحارس", content: "ولا تجرؤ على العودة!" },
    { type: "narration", content: "ثم أغلق البوابة." },
    { type: "combat", content: "بووووم" },

    { type: "scene-break", content: "الإهانة الأخيرة" },
    { type: "narration", content: "لكن الأمر لم ينته." },
    { type: "narration", content: "حارس آخر خرج من البوابة." },
    { type: "narration", content: "نظر إلى ياماتو بازدراء." },
    { type: "dialogue", character: "الحارس", content: "أمر جديد." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "الحارس", content: "الملك لا يريدك داخل المملكة أيضا." },
    { type: "narration", content: "ياماتو رفع حاجبه." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "الحارس", content: "اخرج من حدود كاغيتسورا." },
    { type: "narration", content: "ثم اقترب خطوة." },
    { type: "dialogue", character: "الحارس", content: "وإذا عدت…" },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "الحارس", content: "سنحبسك." },
    { type: "narration", content: "ثم بصق قرب قدميه." },
    { type: "dialogue", character: "الحارس", content: "أيها القذر." },
    { type: "narration", content: "عاد الحارس." },
    { type: "narration", content: "أغلق البوابة مرة أخرى." },
    { type: "combat", content: "بووم" },
    { type: "narration", content: "هذه المرة…" },
    { type: "narration", content: "لم يفتحها أحد." },

    { type: "scene-break", content: "الطريق" },
    { type: "narration", content: "بقي ياماتو واقفا." },
    { type: "narration", content: "لوحده." },
    { type: "narration", content: "خارج الأسوار الضخمة." },
    { type: "narration", content: "الريح تمر فوق الطريق الترابي." },
    { type: "narration", content: "من بعيد…" },
    { type: "narration", content: "تظهر طرق كثيرة." },
    { type: "narration", content: "واحد منها…" },
    { type: "narration", content: "يقود إلى قريته." },
    { type: "narration", content: "ياماتو نظر إلى الطريق." },
    { type: "narration", content: "ثم إلى الأسوار خلفه." },
    { type: "narration", content: "ثم تنهد." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم بدأ يمشي." },
    { type: "narration", content: "خطوة…" },
    { type: "narration", content: "ثم أخرى." },
    { type: "narration", content: "الطريق طويل." },
    { type: "narration", content: "والسمعة…" },
    { type: "narration", content: "تحطمت." },
    { type: "narration", content: "لكن الرحلة…" },
    { type: "narration", content: "لم تنته بعد." },

    { type: "chapter-end", content: "— نهاية الفصل الرابع — الجزء الثالث —" }
  ]
},
{
  id: 19,
  title: "الجزء الرابع",
  subtitle: "الصرخة",
  sections: [
    { type: "scene-break", content: "الطريق خارج الأسوار" },
    { type: "narration", content: "مشى ياماتو على الطريق الترابي ببطء." },
    { type: "narration", content: "الأسوار الضخمة لمملكة كاغيتسورا بقيت خلفه." },
    { type: "narration", content: "كلما ابتعد خطوة…" },
    { type: "narration", content: "أصبحت أصغر." },
    { type: "narration", content: "لكن الصوت في رأسه…" },
    { type: "narration", content: "لم يصغر." },
    { type: "narration", content: "كان يمشي بصمت." },
    { type: "narration", content: "الريح تمر بين الأشجار." },
    { type: "narration", content: "والطريق شبه فارغ." },
    { type: "whisper", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم تنهد." },
    { type: "dialogue", character: "ياماتو", content: "ماذا حدث للتو؟" },
    { type: "narration", content: "لم يكن يتوقع هذا." },
    { type: "narration", content: "قبل يومين فقط…" },
    { type: "narration", content: "كان طالبا في الأكاديمية." },
    { type: "narration", content: "قبل ساعات فقط…" },
    { type: "narration", content: "كان يتدرب في الغابة." },
    { type: "narration", content: "ثم فجأة…" },
    { type: "narration", content: "متحرش." },
    { type: "narration", content: "مطرود." },
    { type: "narration", content: "مكروه." },
    { type: "narration", content: "ياماتو توقف." },
    { type: "narration", content: "نظر إلى الأرض." },
    { type: "dialogue", character: "ياماتو", content: "لا…" },
    { type: "narration", content: "ثم هز رأسه." },
    { type: "dialogue", character: "ياماتو", content: "هذا لا معنى له." },

    { type: "scene-break", content: "الأسئلة تبدأ" },
    { type: "narration", content: "بدأ يمشي مرة أخرى." },
    { type: "narration", content: "خطواته أصبحت أسرع قليلا." },
    { type: "narration", content: "الأفكار بدأت تتزاحم في رأسه." },
    { type: "dialogue", character: "ياماتو", content: "هل…" },
    { type: "narration", content: "ثم قال بصوت مرتفع قليلا." },
    { type: "dialogue", character: "ياماتو", content: "هل كان فخا؟" },
    { type: "narration", content: "صمت." },
    { type: "narration", content: "ثم فكرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "هل وضع أحد ذلك الشيء في غرفتي؟" },
    { type: "narration", content: "ثم فكر." },
    { type: "dialogue", character: "ياماتو", content: "لكن من؟" },
    { type: "narration", content: "ثم فجأة…" },
    { type: "narration", content: "تذكر." },
    { type: "narration", content: "هانا." },
    { type: "narration", content: "ياماتو توقف." },
    { type: "narration", content: "عيناه ضاقتا." },
    { type: "dialogue", character: "ياماتو", content: "هانا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },

    { type: "scene-break", content: "الأفكار تتكاثر" },
    { type: "narration", content: "ياماتو بدأ يمشي مرة أخرى." },
    { type: "narration", content: "لكن هذه المرة بسرعة أكبر." },
    { type: "dialogue", character: "ياماتو", content: "هل كانت تمثل؟" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لا…" },
    { type: "narration", content: "ثم فكر." },
    { type: "dialogue", character: "ياماتو", content: "أم أنها خائفة؟" },
    { type: "narration", content: "ثم فكرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "أم أن أحدا أجبرها؟" },
    { type: "narration", content: "ثم فكرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "النبلاء؟" },
    { type: "narration", content: "ثم توقف فجأة." },
    { type: "dialogue", character: "ياماتو", content: "لكن لماذا أنا؟" },
    { type: "narration", content: "ثم ضحك ضحكة قصيرة." },
    { type: "dialogue", character: "ياماتو", content: "لأنني الأضعف؟" },
    { type: "dialogue", character: "ياماتو", content: "لأنني رتبة F؟" },
    { type: "dialogue", character: "ياماتو", content: "لأنني سهل التضحية به؟" },
    { type: "narration", content: "ياماتو تنفس بعمق." },
    { type: "narration", content: "صدره بدأ يضيق." },
    { type: "narration", content: "الأفكار في رأسه أصبحت أسرع." },
    { type: "narration", content: "كأنها تدور." },

    { type: "scene-break", content: "الغضب يتصاعد" },
    { type: "narration", content: "ياماتو توقف فجأة وسط الطريق." },
    { type: "narration", content: "صدره يرتفع وينخفض بسرعة." },
    { type: "narration", content: "قبضته ارتجفت." },
    { type: "dialogue", character: "ياماتو", content: "أنا…" },
    { type: "narration", content: "ثم ضرب الأرض بقدمه." },
    { type: "shout", character: "ياماتو", content: "أنا لم أفعل شيئا!" },
    { type: "narration", content: "صوته ارتد بين الأشجار." },
    { type: "narration", content: "الطريق كان فارغا." },
    { type: "narration", content: "لا أحد يسمعه." },
    { type: "narration", content: "ياماتو شد شعره قليلا." },
    { type: "shout", character: "ياماتو", content: "ما الذي حدث؟!" },
    { type: "narration", content: "ثم صرخ." },
    { type: "shout", character: "ياماتو", content: "ماذا فعلت أنا؟!" },

    { type: "scene-break", content: "الانفجار" },
    { type: "narration", content: "الغضب تراكم داخله." },
    { type: "narration", content: "كل الإهانات." },
    { type: "narration", content: "كل النظرات." },
    { type: "narration", content: "كل الكلمات." },
    { type: "narration", content: "كلها انفجرت دفعة واحدة." },
    { type: "narration", content: "ياماتو رفع رأسه نحو السماء." },
    { type: "narration", content: "ثم صرخ بكل ما لديه." },
    { type: "shout", character: "ياماتو", content: "أييييييييييييييه!!!" },
    { type: "narration", content: "الصوت خرج قويا." },
    { type: "narration", content: "قويا جدا." },
    { type: "narration", content: "ارتد بين الأشجار." },
    { type: "narration", content: "الطيور طارت فجأة من الأغصان." },
    { type: "narration", content: "الصدى تردد بين التلال." },
    { type: "narration", content: "ياماتو بقي واقفا." },
    { type: "narration", content: "صدره يعلو ويهبط." },
    { type: "narration", content: "يداه ترتجفان." },
    { type: "narration", content: "عيناه مليئتان بالغضب." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "بعد لحظة طويلة…" },
    { type: "narration", content: "خفض رأسه." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "narration", content: "ثم قال بصوت منخفض." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },

    { type: "scene-break", content: "الهدوء بعد الصرخة" },
    { type: "narration", content: "جلس على صخرة قرب الطريق." },
    { type: "narration", content: "تنفس ببطء." },
    { type: "narration", content: "الغضب بدأ يهدأ قليلا." },
    { type: "narration", content: "لكن في داخله…" },
    { type: "narration", content: "بقي شيء." },
    { type: "narration", content: "شيء ثقيل." },
    { type: "narration", content: "شيء مظلم." },
    { type: "narration", content: "ياماتو نظر إلى الطريق الطويل أمامه." },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "لا يهم." },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "سأعود إلى القرية." },
    { type: "narration", content: "ثم ابتسم ابتسامة خفيفة." },
    { type: "narration", content: "لكن هذه المرة…" },
    { type: "narration", content: "كانت ابتسامة متعبة." },
    { type: "dialogue", character: "ياماتو", content: "على الأقل…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هناك شخص واحد سيصدقني." },
    { type: "narration", content: "رفع حقيبته." },
    { type: "narration", content: "ثم بدأ يمشي مرة أخرى." },
    { type: "narration", content: "نحو قريته." },
    { type: "narration", content: "غير عالم…" },
    { type: "narration", content: "أن ما حدث اليوم…" },
    { type: "narration", content: "لم يكن مجرد بداية." },
    { type: "narration", content: "بل بداية كارثة أكبر بكثير." },

    { type: "chapter-end", content: "— نهاية الفصل الرابع — الجزء الرابع —" }
  ]
},
{
  id: 20,
  title: "الجزء الخامس",
  subtitle: "الطريق الطويل",
  sections: [
    { type: "scene-break", content: "بعد الصرخة" },
    { type: "narration", content: "مشى ياماتو على الطريق الترابي." },
    { type: "narration", content: "الهواء أصبح أبرد قليلا." },
    { type: "narration", content: "الأشجار على جانبي الطريق تهتز بهدوء." },
    { type: "narration", content: "بعد الصرخة التي أطلقها قبل قليل…" },
    { type: "narration", content: "أصبح صدره أخف قليلا." },
    { type: "narration", content: "لكن رأسه…" },
    { type: "narration", content: "ما زال مليئا بالأسئلة." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "فلنرتب الأمر." },
    { type: "narration", content: "توقف." },
    { type: "narration", content: "وضع يده على ذقنه." },
    { type: "dialogue", character: "ياماتو", content: "أولا…" },
    { type: "narration", content: "ثم رفع إصبعه." },
    { type: "dialogue", character: "ياماتو", content: "أنا لم أفعل شيئا." },
    { type: "narration", content: "ثم رفع إصبعا آخر." },
    { type: "dialogue", character: "ياماتو", content: "ثانيا…" },
    { type: "narration", content: "تنهد." },
    { type: "dialogue", character: "ياماتو", content: "الجميع يعتقد أنني فعلت شيئا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ثالثا…" },
    { type: "narration", content: "فكر قليلا." },
    { type: "dialogue", character: "ياماتو", content: "لا أحد يريد سماعي." },
    { type: "narration", content: "صمت لحظة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هذا وضع سيئ." },

    { type: "scene-break", content: "شخص في الطريق" },
    { type: "narration", content: "بينما كان يمشي…" },
    { type: "narration", content: "ظهر شخص من بعيد." },
    { type: "narration", content: "رجل يقود عربة خشبية صغيرة." },
    { type: "narration", content: "عندما اقترب…" },
    { type: "narration", content: "نظر الرجل إلى ياماتو." },
    { type: "dialogue", character: "الرجل", content: "مسافر؟" },
    { type: "dialogue", character: "ياماتو", content: "تقريبا." },
    { type: "dialogue", character: "الرجل", content: "من أين أتيت؟" },
    { type: "narration", content: "ياماتو نظر خلفه." },
    { type: "narration", content: "إلى الأسوار البعيدة." },
    { type: "dialogue", character: "ياماتو", content: "من هناك." },
    { type: "narration", content: "الرجل رفع حاجبه." },
    { type: "dialogue", character: "الرجل", content: "العاصمة؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الرجل", content: "هل أنت طالب؟" },
    { type: "narration", content: "ياماتو صمت لحظة." },
    { type: "dialogue", character: "ياماتو", content: "كنت." },
    { type: "dialogue", character: "الرجل", content: "ماذا حدث؟" },
    { type: "narration", content: "ياماتو ابتسم ابتسامة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "قصة طويلة." },
    { type: "narration", content: "الرجل ضحك." },
    { type: "dialogue", character: "الرجل", content: "الطرق الطويلة تحب القصص الطويلة." },
    { type: "dialogue", character: "ياماتو", content: "هل لديك ماء؟" },
    { type: "dialogue", character: "الرجل", content: "بالطبع." },
    { type: "narration", content: "أعطاه قارورة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "narration", content: "شرب قليلا." },
    { type: "narration", content: "ثم أعادها." },
    { type: "dialogue", character: "ياماتو", content: "أنا مدين لك." },
    { type: "dialogue", character: "الرجل", content: "لا تقلق." },
    { type: "narration", content: "ثم سأل." },
    { type: "dialogue", character: "الرجل", content: "إلى أين أنت ذاهب؟" },
    { type: "dialogue", character: "ياماتو", content: "قرية كوزوها." },
    { type: "narration", content: "الرجل فكر قليلا." },
    { type: "dialogue", character: "الرجل", content: "لم أسمع بها." },
    { type: "dialogue", character: "ياماتو", content: "لا أحد يسمع بها." },

    { type: "scene-break", content: "حديث قصير" },
    { type: "narration", content: "الرجل نظر إلى ياماتو." },
    { type: "dialogue", character: "الرجل", content: "تبدو متعبا." },
    { type: "dialogue", character: "ياماتو", content: "قليلا." },
    { type: "dialogue", character: "الرجل", content: "هل تشاجرت مع أحد؟" },
    { type: "dialogue", character: "ياماتو", content: "مع نصف المملكة تقريبا." },
    { type: "narration", content: "الرجل ضحك." },
    { type: "dialogue", character: "الرجل", content: "هذا رقم كبير." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الرجل", content: "هل فزت؟" },
    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "dialogue", character: "الرجل", content: "هل هربت؟" },
    { type: "dialogue", character: "ياماتو", content: "طردوني." },
    { type: "narration", content: "الرجل نظر إليه بدهشة." },
    { type: "dialogue", character: "الرجل", content: "حقا؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "الرجل", content: "ماذا فعلت؟" },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "يقولون إنني متحرش." },
    { type: "narration", content: "الرجل صمت." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "الرجل", content: "وأنت؟" },
    { type: "dialogue", character: "ياماتو", content: "أنا أقول إنني لست كذلك." },
    { type: "narration", content: "الرجل هز كتفيه." },
    { type: "dialogue", character: "الرجل", content: "العالم غريب." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },

    { type: "scene-break", content: "العودة إلى الطريق" },
    { type: "narration", content: "بعد قليل…" },
    { type: "narration", content: "الرجل أدار عربته." },
    { type: "dialogue", character: "الرجل", content: "سأذهب من هنا." },
    { type: "narration", content: "أشار إلى طريق آخر." },
    { type: "dialogue", character: "الرجل", content: "حظا سعيدا." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "dialogue", character: "الرجل", content: "لا تتشاجر مع مملكة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "سأحاول." },
    { type: "narration", content: "الرجل ضحك ومضى." },

    { type: "scene-break", content: "الأفكار تعود" },
    { type: "narration", content: "بقي ياماتو وحده مرة أخرى." },
    { type: "narration", content: "الطريق أصبح أكثر هدوءا." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "متحرش…" },
    { type: "narration", content: "ثم هز رأسه." },
    { type: "dialogue", character: "ياماتو", content: "يا لها من كلمة سيئة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لكن لماذا أنا؟" },
    { type: "narration", content: "توقف." },
    { type: "narration", content: "نظر إلى الأشجار." },
    { type: "dialogue", character: "ياماتو", content: "هل كان النبلاء؟" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "أم شخص آخر؟" },
    { type: "narration", content: "ثم فكر." },
    { type: "dialogue", character: "ياماتو", content: "أم…" },
    { type: "narration", content: "توقف." },
    { type: "dialogue", character: "ياماتو", content: "هانا؟" },
    { type: "narration", content: "الصمت." },
    { type: "narration", content: "ياماتو نظر إلى السماء." },
    { type: "dialogue", character: "ياماتو", content: "لا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لا أريد تصديق ذلك." },

    { type: "scene-break", content: "محاولة المزاح" },
    { type: "narration", content: "بعد لحظة…" },
    { type: "narration", content: "ابتسم لنفسه." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لنركز على الأشياء الإيجابية." },
    { type: "narration", content: "رفع إصبعه." },
    { type: "dialogue", character: "ياماتو", content: "أنا ما زلت حيا." },
    { type: "narration", content: "رفع إصبعا آخر." },
    { type: "dialogue", character: "ياماتو", content: "ما زلت أملك ساقين." },
    { type: "narration", content: "ثم فكر قليلا." },
    { type: "dialogue", character: "ياماتو", content: "وما زلت أملك العصا." },
    { type: "narration", content: "نظر إلى العصا في يده." },
    { type: "dialogue", character: "ياماتو", content: "هذا يكفي." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "تقريبا." },

    { type: "scene-break", content: "الطريق إلى القرية" },
    { type: "narration", content: "بدأت الشمس تميل نحو الغروب." },
    { type: "narration", content: "الطريق الطويل يمتد أمامه." },
    { type: "narration", content: "بعيدا…" },
    { type: "narration", content: "في الأفق." },
    { type: "narration", content: "هناك طريق ضيق يقود إلى قريته." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لنعد إلى المنزل." },
    { type: "narration", content: "ثم بدأ يمشي." },
    { type: "narration", content: "خطوة…" },
    { type: "narration", content: "ثم أخرى." },
    { type: "narration", content: "لكن هذه المرة…" },
    { type: "narration", content: "لم يكن طالبا في الأكاديمية." },
    { type: "narration", content: "بل رجلا…" },
    { type: "narration", content: "كسرت سمعته." },
    { type: "ending-narration", content: "وهو لا يفهم حتى لماذا." },

    { type: "chapter-end", content: "— نهاية الفصل الرابع —" }
  ]
},
{
  id: 21,
  title: "الجزء الأول",
  subtitle: "العودة",
  sections: [
    { type: "scene-break", content: "الطريق الأخير" },
    { type: "narration", content: "كانت الشمس تميل نحو الغروب عندما اقترب ياماتو من الطريق المؤدي إلى قريته." },
    { type: "narration", content: "الطريق الضيق الذي يعرفه جيدا." },
    { type: "narration", content: "الأشجار نفسها." },
    { type: "narration", content: "الصخور نفسها." },
    { type: "narration", content: "حتى النهر الصغير في الجهة اليمنى…" },
    { type: "narration", content: "كل شيء مألوف." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "وأخيرا…" },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "البيت." },
    { type: "narration", content: "توقف لحظة." },
    { type: "narration", content: "ثم قال لنفسه." },
    { type: "dialogue", character: "ياماتو", content: "على الأقل…" },
    { type: "narration", content: "ثم ابتسم بخفة." },
    { type: "dialogue", character: "ياماتو", content: "تاكيو سيضحك عندما يسمع القصة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "أو يضربني." },
    { type: "narration", content: "فكر قليلا." },
    { type: "dialogue", character: "ياماتو", content: "الأرجح يضربني." },
    { type: "narration", content: "ضحك ضحكة قصيرة." },
    { type: "narration", content: "لكن…" },
    { type: "narration", content: "عندما وصل إلى التلة الصغيرة المطلة على القرية…" },
    { type: "narration", content: "توقف." },

    { type: "scene-break", content: "شيء غريب" },
    { type: "narration", content: "ياماتو ضيق عينيه." },
    { type: "dialogue", character: "ياماتو", content: "هممم." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لماذا…" },
    { type: "narration", content: "نظر إلى القرية." },
    { type: "narration", content: "الناس مجتمعون في الساحة." },
    { type: "narration", content: "تقريبا كل القرية." },
    { type: "narration", content: "رجال." },
    { type: "narration", content: "نساء." },
    { type: "narration", content: "حتى الأطفال." },
    { type: "narration", content: "ياماتو حك رأسه." },
    { type: "dialogue", character: "ياماتو", content: "هل هناك مهرجان؟" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لم أسمع عن مهرجان اليوم." },
    { type: "narration", content: "ثم بدأ ينزل التلة." },

    { type: "scene-break", content: "أول نظرة" },
    { type: "narration", content: "عندما اقترب أكثر…" },
    { type: "narration", content: "لاحظ شيئا غريبا." },
    { type: "narration", content: "الناس لا يتحدثون." },
    { type: "narration", content: "لا يضحكون." },
    { type: "narration", content: "فقط…" },
    { type: "narration", content: "ينظرون إليه." },
    { type: "narration", content: "ياماتو توقف." },
    { type: "dialogue", character: "ياماتو", content: "ماذا…؟" },
    { type: "narration", content: "امرأة من القرية همست." },
    { type: "whisper", character: "المرأة", content: "إنه هو." },
    { type: "narration", content: "رجل آخر." },
    { type: "dialogue", character: "الرجل", content: "عاد." },
    { type: "narration", content: "ياماتو عبس." },
    { type: "dialogue", character: "ياماتو", content: "مرحبا…؟" },
    { type: "narration", content: "لا أحد رد." },
    { type: "narration", content: "صمت ثقيل." },

    { type: "scene-break", content: "المواجهة" },
    { type: "narration", content: "خرج رجل من بين الحشد." },
    { type: "narration", content: "كان تاكيو." },
    { type: "narration", content: "الرجل الذي أعطاه المال." },
    { type: "narration", content: "الرجل الذي وثق به." },
    { type: "narration", content: "ياماتو ابتسم قليلا." },
    { type: "dialogue", character: "ياماتو", content: "تاكيو—" },
    { type: "narration", content: "لكن تاكيو لم يبتسم." },
    { type: "narration", content: "وجهه كان غاضبا." },
    { type: "shout", character: "تاكيو", content: "توقف هناك." },
    { type: "narration", content: "ياماتو توقف." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "تاكيو", content: "لا تقترب." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "dialogue", character: "تاكيو", content: "لا تقترب." },
    { type: "narration", content: "الصمت أصبح أثقل." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "narration", content: "وجوه كثيرة." },
    { type: "narration", content: "لكن…" },
    { type: "narration", content: "لا أحد يبتسم." },
    { type: "narration", content: "لا أحد سعيد." },

    { type: "scene-break", content: "الحقيقة تصل" },
    { type: "narration", content: "ياماتو قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "ماذا حدث هنا؟" },
    { type: "narration", content: "امرأة من الخلف قالت." },
    { type: "dialogue", character: "المرأة", content: "اسأله أنت." },
    { type: "narration", content: "رجل آخر قال." },
    { type: "dialogue", character: "الرجل", content: "القذر." },
    { type: "narration", content: "ياماتو رمش ببطء." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "narration", content: "تاكيو صرخ فجأة." },
    { type: "shout", character: "تاكيو", content: "ماذا فعلت؟!" },
    { type: "dialogue", character: "ياماتو", content: "أنا—" },
    { type: "shout", character: "تاكيو", content: "ضيعت أموالنا!" },
    { type: "narration", content: "صوت تاكيو كان عاليا." },
    { type: "shout", character: "تاكيو", content: "خجلتنا!" },
    { type: "dialogue", character: "ياماتو", content: "انتظر—" },
    { type: "narration", content: "تاكيو قاطعه." },
    { type: "shout", character: "تاكيو", content: "أرسلناك لترفع رأس القرية!" },
    { type: "narration", content: "ثم أشار إليه بغضب." },
    { type: "shout", character: "تاكيو", content: "ليس لتصبح مجرما!" },

    { type: "scene-break", content: "الصدمة الثانية" },
    { type: "narration", content: "ياماتو وقف صامتا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "إذن…" },
    { type: "narration", content: "ثم نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "وصل الخبر." },
    { type: "narration", content: "امرأة قالت." },
    { type: "dialogue", character: "المرأة", content: "الخبر انتشر في كل مكان." },
    { type: "narration", content: "رجل قال." },
    { type: "dialogue", character: "الرجل", content: "متحرش." },
    { type: "narration", content: "طفل قال بصوت منخفض." },
    { type: "dialogue", character: "الطفل", content: "أمي قالت إنه سيء." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "فهمت." },

    { type: "scene-break", content: "محاولة تفسير" },
    { type: "narration", content: "ياماتو رفع يده قليلا." },
    { type: "dialogue", character: "ياماتو", content: "اسمعوا—" },
    { type: "shout", character: "تاكيو", content: "لا أريد سماع شيء!" },
    { type: "dialogue", character: "ياماتو", content: "لكن—" },
    { type: "shout", character: "تاكيو", content: "اصمت!" },
    { type: "narration", content: "ثم قال بغضب." },
    { type: "dialogue", character: "تاكيو", content: "هل تظن أننا أغبياء؟" },
    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "dialogue", character: "تاكيو", content: "الأكاديمية طردتك!" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "تاكيو", content: "والملك طردك من المملكة!" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "تاكيو", content: "وهناك دليل!" },
    { type: "dialogue", character: "ياماتو", content: "أنا لم—" },
    { type: "narration", content: "تاكيو ضرب الأرض بقدمه." },
    { type: "shout", character: "تاكيو", content: "كفى!" },
    { type: "narration", content: "الصمت عاد." },

    { type: "scene-break", content: "الطرد" },
    { type: "narration", content: "تاكيو نظر إليه." },
    { type: "narration", content: "عيناه مليئتان بالغضب." },
    { type: "dialogue", character: "تاكيو", content: "اذهب." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "تاكيو", content: "اذهب من هنا." },
    { type: "dialogue", character: "ياماتو", content: "تاكيو—" },
    { type: "shout", character: "تاكيو", content: "لا تناديني بهذا الاسم!" },
    { type: "narration", content: "ثم صرخ." },
    { type: "shout", character: "تاكيو", content: "اغرب عن قريتنا!" },
    { type: "narration", content: "امرأة قالت." },
    { type: "dialogue", character: "المرأة", content: "لا نريدك هنا." },
    { type: "narration", content: "رجل آخر." },
    { type: "dialogue", character: "الرجل", content: "لقد خيبت أملنا." },
    { type: "narration", content: "ياماتو وقف صامتا." },
    { type: "narration", content: "بعض الأطفال بدأوا يلتقطون حصى صغيرة." },
    { type: "narration", content: "طفل رمى حجرا صغيرا." },
    { type: "combat", content: "طَق" },
    { type: "narration", content: "أصاب كتف ياماتو." },
    { type: "narration", content: "طفل آخر رمى حجرا." },
    { type: "shout", character: "الطفل", content: "اذهب!" },
    { type: "narration", content: "امرأة صاحت." },
    { type: "shout", character: "المرأة", content: "توقفوا!" },
    { type: "narration", content: "لكن الأجواء أصبحت فوضوية." },

    { type: "scene-break", content: "لحظة صمت" },
    { type: "narration", content: "ياماتو لم يتحرك." },
    { type: "narration", content: "لم يصرخ." },
    { type: "narration", content: "لم يغضب." },
    { type: "narration", content: "فقط…" },
    { type: "narration", content: "نظر إلى القرية." },
    { type: "narration", content: "إلى البيوت." },
    { type: "narration", content: "إلى الشجرة التي كان ينام تحتها." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "نظر إلى تاكيو." },
    { type: "narration", content: "ياماتو قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "كنت أظن…" },
    { type: "narration", content: "ثم توقف." },
    { type: "dialogue", character: "ياماتو", content: "لا بأس." },
    { type: "narration", content: "تاكيو قال ببرود." },
    { type: "dialogue", character: "تاكيو", content: "اذهب." },

    { type: "scene-break", content: "الخروج مرة أخرى" },
    { type: "narration", content: "ياماتو استدار." },
    { type: "narration", content: "بدأ يمشي." },
    { type: "narration", content: "خطوة…" },
    { type: "narration", content: "ثم أخرى." },
    { type: "narration", content: "وراءه…" },
    { type: "narration", content: "صوت الناس." },
    { type: "narration", content: "الغضب." },
    { type: "narration", content: "الهمسات." },
    { type: "narration", content: "الأطفال." },
    { type: "narration", content: "لكن ياماتو لم ينظر للخلف." },
    { type: "narration", content: "فقط…" },
    { type: "narration", content: "مشى." },
    { type: "narration", content: "ببطء." },
    { type: "narration", content: "لوحده." },
    { type: "narration", content: "مرة أخرى." },

    { type: "chapter-end", content: "— نهاية الفصل الخامس — الجزء الأول —" }
  ]
},
{
  id: 22,
  title: "الجزء الثاني",
  subtitle: "المقهى الصغير",
  sections: [
    { type: "scene-break", content: "قرية لا تعرفه" },
    { type: "narration", content: "بعد ساعات طويلة من المشي…" },
    { type: "narration", content: "بدأت أضواء قرية صغيرة تظهر بين الأشجار." },
    { type: "narration", content: "لم تكن قريته." },
    { type: "narration", content: "هذه قرية أخرى على الطريق التجاري." },
    { type: "narration", content: "بيوت خشبية." },
    { type: "narration", content: "ممرات ضيقة." },
    { type: "narration", content: "ومصابيح زيتية معلقة على الأعمدة." },
    { type: "narration", content: "ياماتو وقف عند المدخل." },
    { type: "narration", content: "نظر حوله قليلا." },
    { type: "dialogue", character: "ياماتو", content: "حسنا…" },
    { type: "narration", content: "ثم تنهد." },
    { type: "dialogue", character: "ياماتو", content: "على الأقل لن يعرفني أحد هنا." },
    { type: "narration", content: "بدأ يمشي ببطء." },
    { type: "narration", content: "معدته أصدرت صوتا خفيفا." },
    { type: "narration", content: "ياماتو أمسك بطنه." },
    { type: "dialogue", character: "ياماتو", content: "حتى أنت بدأت تشتكي الآن؟" },
    { type: "narration", content: "ابتسم ابتسامة متعبة." },
    { type: "narration", content: "ثم رأى لافتة خشبية صغيرة." },
    { type: "narration", content: "مقهى المسافر." },
    { type: "dialogue", character: "ياماتو", content: "ممتاز." },

    { type: "scene-break", content: "داخل المقهى" },
    { type: "narration", content: "فتح الباب." },
    { type: "narration", content: "المقهى كان بسيطا." },
    { type: "narration", content: "عدة طاولات." },
    { type: "narration", content: "مصباحان على الجدران." },
    { type: "narration", content: "رجل عجوز خلف المنضدة." },
    { type: "narration", content: "رجلان يجلسان في زاوية ويتحدثان." },
    { type: "narration", content: "العجوز نظر إليه." },
    { type: "dialogue", character: "العجوز", content: "مسافر؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "العجوز", content: "اجلس." },
    { type: "narration", content: "ياماتو جلس قرب النافذة." },
    { type: "narration", content: "العجوز اقترب." },
    { type: "dialogue", character: "العجوز", content: "ماذا تريد؟" },
    { type: "dialogue", character: "ياماتو", content: "شاي." },
    { type: "dialogue", character: "العجوز", content: "طعام؟" },
    { type: "narration", content: "ياماتو فكر قليلا." },
    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "dialogue", character: "العجوز", content: "كما تريد." },
    { type: "narration", content: "بعد دقائق…" },
    { type: "narration", content: "وضع كوب الشاي أمامه." },
    { type: "dialogue", character: "العجوز", content: "تفضل." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },

    { type: "scene-break", content: "الصمت" },
    { type: "narration", content: "أمسك ياماتو الكوب." },
    { type: "narration", content: "البخار يتصاعد ببطء." },
    { type: "narration", content: "لكن عينيه لم تكونا على الشاي." },
    { type: "narration", content: "بل على الطاولة." },
    { type: "narration", content: "صامت." },
    { type: "narration", content: "بقي هكذا لفترة." },
    { type: "narration", content: "ثم تمتم." },
    { type: "whisper", character: "ياماتو", content: "كيف…؟" },
    { type: "narration", content: "ثم قال بصوت منخفض." },
    { type: "whisper", character: "ياماتو", content: "كيف أخذ حقي منهم؟" },
    { type: "narration", content: "رفع رأسه قليلا." },
    { type: "dialogue", character: "ياماتو", content: "كيف أجعلهم يندمون؟" },
    { type: "narration", content: "قبضته شدّت قليلا." },
    { type: "dialogue", character: "ياماتو", content: "كيف…" },
    { type: "narration", content: "توقف." },
    { type: "narration", content: "ثم ضحك ضحكة قصيرة مريرة." },
    { type: "dialogue", character: "ياماتو", content: "هاه…" },

    { type: "scene-break", content: "الحقيقة المؤلمة" },
    { type: "narration", content: "خفض رأسه." },
    { type: "whisper", character: "ياماتو", content: "كيف…" },
    { type: "narration", content: "ثم قال بهدوء." },
    { type: "dialogue", character: "ياماتو", content: "وأنا ضعيف هكذا؟" },
    { type: "narration", content: "أخذ رشفة من الشاي." },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "رتبة F." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "حتى الأطفال في الأكاديمية كانوا أقوى مني." },
    { type: "narration", content: "شد قبضته." },
    { type: "dialogue", character: "ياماتو", content: "كيف سأجعلهم يندمون؟" },
    { type: "narration", content: "ثم همس." },
    { type: "whisper", character: "ياماتو", content: "أنا حتى لم أستطع الدفاع عن نفسي هناك." },

    { type: "scene-break", content: "أفكار ثقيلة" },
    { type: "narration", content: "ياماتو وضع يده على جبينه." },
    { type: "dialogue", character: "ياماتو", content: "ليتني…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ليتني كنت أقوى." },
    { type: "narration", content: "صمت." },
    { type: "dialogue", character: "ياماتو", content: "ليتني كنت ساحرا حقيقيا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ليتني استطعت الوقوف أمامهم." },
    { type: "narration", content: "ثم شد قبضته." },
    { type: "dialogue", character: "ياماتو", content: "لو كنت قويا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لما تجرأ أحد على فعل هذا." },

    { type: "scene-break", content: "جرح الصداقة" },
    { type: "narration", content: "ثم تذكر وجها آخر." },
    { type: "narration", content: "كينجي." },
    { type: "narration", content: "ياماتو رفع عينيه قليلا." },
    { type: "dialogue", character: "ياماتو", content: "حتى أنت…" },
    { type: "narration", content: "ياماتو ابتسم ابتسامة حزينة." },
    { type: "dialogue", character: "ياماتو", content: "حتى أنت شككت." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "كنت أظنك صديقي." },
    { type: "narration", content: "خفض رأسه مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "لكن…" },
    { type: "narration", content: "تنهد." },
    { type: "dialogue", character: "ياماتو", content: "ربما لا ألومك." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "حتى أنا لو رأيت شخصا مثلي…" },
    { type: "narration", content: "ثم ابتسم بسخرية خفيفة." },
    { type: "dialogue", character: "ياماتو", content: "ربما كنت سأشك." },

    { type: "scene-break", content: "لحظة قاسية" },
    { type: "narration", content: "وضع الكوب على الطاولة." },
    { type: "dialogue", character: "ياماتو", content: "أنا ضعيف." },
    { type: "narration", content: "قالها بصراحة." },
    { type: "narration", content: "بدون تردد." },
    { type: "dialogue", character: "ياماتو", content: "ضعيف جدا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ضعيف لدرجة أنهم دمروا حياتي في لحظة." },
    { type: "narration", content: "ثم تمتم." },
    { type: "whisper", character: "ياماتو", content: "وأنا لم أستطع فعل شيء." },

    { type: "scene-break", content: "فكرة جديدة" },
    { type: "narration", content: "بعد لحظة طويلة من الصمت…" },
    { type: "narration", content: "رفع رأسه." },
    { type: "dialogue", character: "ياماتو", content: "لكن…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لن أبقى ضعيفا." },
    { type: "narration", content: "ياماتو نظر عبر النافذة." },
    { type: "narration", content: "الطريق المظلم." },
    { type: "narration", content: "ثم تذكر شيئا." },
    { type: "dialogue", character: "ياماتو", content: "الأقزام…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "مملكة دوراغون." },
    { type: "narration", content: "فكر قليلا." },
    { type: "dialogue", character: "ياماتو", content: "الأقزام لا يهتمون بالبشر." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ولا يهتمون بإشاعات البشر." },
    { type: "narration", content: "ثم ابتسم ابتسامة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "وربما…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "يمكنهم تدريبي." },

    { type: "scene-break", content: "القرار" },
    { type: "narration", content: "أنهى الشاي." },
    { type: "narration", content: "وقف." },
    { type: "dialogue", character: "العجوز", content: "ستغادر؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "العجوز", content: "إلى أين؟" },
    { type: "dialogue", character: "ياماتو", content: "الجبال." },
    { type: "narration", content: "العجوز رفع حاجبه." },
    { type: "dialogue", character: "العجوز", content: "الجبال؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "مملكة الأقزام." },
    { type: "narration", content: "العجوز هز رأسه." },
    { type: "dialogue", character: "العجوز", content: "طريق صعب." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "حياتي أصبحت صعبة بالفعل." },
    { type: "narration", content: "ثم دفع ثمن الشاي." },
    { type: "dialogue", character: "ياماتو", content: "شكرا على الشاي." },
    { type: "dialogue", character: "العجوز", content: "حظا سعيدا." },
    { type: "dialogue", character: "ياماتو", content: "سأحتاجه." },
    { type: "narration", content: "ثم خرج من المقهى." },
    { type: "narration", content: "الليل كان هادئا." },
    { type: "narration", content: "لكن داخل قلبه…" },
    { type: "narration", content: "بدأ قرار جديد يتشكل." },
    { type: "narration", content: "قرار بسيط." },
    { type: "ending-narration", content: "أن يصبح… أقوى." },

    { type: "chapter-end", content: "— نهاية الفصل الخامس —" }
  ]
},
{
  id: 23,
  title: "الجزء الأول",
  subtitle: "طريق الجبال",
  sections: [
    { type: "scene-break", content: "بداية الرحلة" },
    { type: "narration", content: "خرج ياماتو من القرية الصغيرة." },
    { type: "narration", content: "الليل أصبح أعمق." },
    { type: "narration", content: "القمر معلق في السماء." },
    { type: "narration", content: "الطريق أمامه يمتد طويلا بين الأشجار." },
    { type: "narration", content: "ياماتو شد حقيبته على كتفه." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم نظر إلى الجبال البعيدة في الأفق." },
    { type: "narration", content: "قمم داكنة ترتفع في السماء." },
    { type: "dialogue", character: "ياماتو", content: "هناك…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "مملكة الأقزام." },
    { type: "narration", content: "تنهد." },
    { type: "dialogue", character: "ياماتو", content: "لنر إن كانوا سيطردونني أيضا." },
    { type: "narration", content: "ثم بدأ يمشي." },

    { type: "scene-break", content: "الطريق الطويل" },
    { type: "narration", content: "مر وقت طويل." },
    { type: "narration", content: "خطواته أصبحت أثقل." },
    { type: "narration", content: "الأرض أصبحت أكثر وعورة." },
    { type: "narration", content: "الصخور أكثر." },
    { type: "narration", content: "والأشجار أقل." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "كم تبقى…" },
    { type: "narration", content: "ثم نظر إلى السماء." },
    { type: "dialogue", character: "ياماتو", content: "لا أعرف حتى الطريق جيدا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ممتاز." },
    { type: "narration", content: "ابتسم ابتسامة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "مغامرة حقيقية." },

    { type: "scene-break", content: "صباح جديد" },
    { type: "narration", content: "مع شروق الشمس…" },
    { type: "narration", content: "كانت الجبال أقرب." },
    { type: "narration", content: "الهواء أصبح أبرد." },
    { type: "narration", content: "والطريق أصبح صخريا." },
    { type: "narration", content: "ياماتو جلس على صخرة كبيرة." },
    { type: "narration", content: "تنفس بعمق." },
    { type: "dialogue", character: "ياماتو", content: "هممم." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "متعب." },
    { type: "narration", content: "أخرج قطعة خبز صغيرة من حقيبته." },
    { type: "narration", content: "نظر إليها." },
    { type: "dialogue", character: "ياماتو", content: "آخر قطعة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لا بأس." },
    { type: "narration", content: "أكلها ببطء." },
    { type: "narration", content: "ثم وقف." },
    { type: "dialogue", character: "ياماتو", content: "لنمضِ." },

    { type: "scene-break", content: "الحارس الأول" },
    { type: "narration", content: "بعد عدة ساعات…" },
    { type: "narration", content: "وصل إلى مدخل وادٍ ضيق بين الجبال." },
    { type: "narration", content: "الصخور ضخمة." },
    { type: "narration", content: "الطريق ضيق." },
    { type: "narration", content: "وفجأة…" },
    { type: "narration", content: "خرج صوت خشن." },
    { type: "shout", character: "القزم", content: "قف." },
    { type: "narration", content: "ياماتو توقف." },
    { type: "dialogue", character: "ياماتو", content: "هممم؟" },
    { type: "narration", content: "من خلف صخرة…" },
    { type: "narration", content: "ظهر قزم." },
    { type: "narration", content: "قصير القامة." },
    { type: "narration", content: "جسمه عريض." },
    { type: "narration", content: "لحية كثيفة." },
    { type: "narration", content: "يحمل مطرقة ضخمة." },
    { type: "narration", content: "القزم نظر إلى ياماتو." },
    { type: "dialogue", character: "القزم", content: "بشر." },
    { type: "narration", content: "ياماتو رفع يده قليلا." },
    { type: "dialogue", character: "ياماتو", content: "مرحبا." },
    { type: "narration", content: "القزم لم يبتسم." },
    { type: "dialogue", character: "القزم", content: "ماذا تريد؟" },
    { type: "dialogue", character: "ياماتو", content: "زيارة." },
    { type: "narration", content: "القزم عبس." },
    { type: "dialogue", character: "القزم", content: "البشر لا يزورون هنا." },
    { type: "dialogue", character: "ياماتو", content: "أنا مختلف." },
    { type: "dialogue", character: "القزم", content: "كل البشر يقولون ذلك." },

    { type: "scene-break", content: "حوار غريب" },
    { type: "narration", content: "القزم اقترب خطوة." },
    { type: "narration", content: "شم الهواء قليلا." },
    { type: "dialogue", character: "القزم", content: "هممم." },
    { type: "dialogue", character: "ياماتو", content: "ماذا تفعل؟" },
    { type: "dialogue", character: "القزم", content: "أشم." },
    { type: "dialogue", character: "ياماتو", content: "تشم؟" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "ماذا تشم؟" },
    { type: "narration", content: "القزم نظر إليه بتركيز." },
    { type: "dialogue", character: "القزم", content: "الندم." },
    { type: "narration", content: "ياماتو صمت لحظة." },
    { type: "dialogue", character: "ياماتو", content: "هذا… دقيق." },
    { type: "dialogue", character: "القزم", content: "وأيضا الحزن." },
    { type: "narration", content: "ياماتو ابتسم ابتسامة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "القزم", content: "وأيضا التعب." },
    { type: "dialogue", character: "ياماتو", content: "صحيح." },
    { type: "narration", content: "القزم ضيق عينيه." },
    { type: "dialogue", character: "القزم", content: "وأيضا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "القزم", content: "الغضب." },
    { type: "narration", content: "ياماتو لم ينكر." },
    { type: "dialogue", character: "ياماتو", content: "ربما." },

    { type: "scene-break", content: "شك الأقزام" },
    { type: "narration", content: "خرج قزمان آخران من خلف الصخور." },
    { type: "narration", content: "أحدهم قال." },
    { type: "dialogue", character: "القزم", content: "بشر؟" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "dialogue", character: "القزم", content: "أطرده." },
    { type: "narration", content: "القزم الثالث قال." },
    { type: "dialogue", character: "القزم", content: "البشر يجلبون المشاكل." },
    { type: "narration", content: "ياماتو رفع يديه قليلا." },
    { type: "dialogue", character: "ياماتو", content: "انتظروا." },
    { type: "dialogue", character: "القزم", content: "لماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "أنا لا أبحث عن مشاكل." },
    { type: "dialogue", character: "القزم", content: "البشر دائما يقولون ذلك." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "أنا أبحث عن تدريب." },
    { type: "narration", content: "القزم الثاني ضحك." },
    { type: "dialogue", character: "القزم", content: "تدريب؟" },
    { type: "dialogue", character: "القزم", content: "عندنا؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "القزم", content: "لماذا؟" },
    { type: "narration", content: "ياماتو فكر قليلا." },
    { type: "narration", content: "ثم قال بصراحة." },
    { type: "dialogue", character: "ياماتو", content: "لأنني ضعيف." },
    { type: "narration", content: "القزمان نظرا لبعضهما." },

    { type: "scene-break", content: "قرار غريب" },
    { type: "narration", content: "القزم الأول شم الهواء مرة أخرى." },
    { type: "dialogue", character: "القزم", content: "لا يكذب." },
    { type: "dialogue", character: "القزم", content: "البشر يكذبون دائما." },
    { type: "dialogue", character: "القزم", content: "هذا لا يكذب الآن." },
    { type: "dialogue", character: "القزم", content: "ماذا نفعل به؟" },
    { type: "narration", content: "القزم الأول فكر قليلا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "القزم", content: "نأخذه." },
    { type: "dialogue", character: "القزم", content: "إلى أين؟" },
    { type: "dialogue", character: "القزم", content: "إلى الملك." },
    { type: "narration", content: "القزمان الآخران نظرا إلى ياماتو." },
    { type: "dialogue", character: "القزم", content: "إن كذبت…" },
    { type: "narration", content: "رفع مطرقته." },
    { type: "dialogue", character: "القزم", content: "سأكسر رأسك." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "عادل." },

    { type: "scene-break", content: "بداية جديدة" },
    { type: "narration", content: "بدأ الأقزام يقودونه داخل الوادي." },
    { type: "narration", content: "الطريق أصبح أعمق بين الجبال." },
    { type: "narration", content: "الصخور ضخمة." },
    { type: "narration", content: "والممرات مظلمة." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "إذن…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هذه بداية جديدة." },
    { type: "narration", content: "القزم الأول قال ببرود." },
    { type: "dialogue", character: "القزم", content: "لا تفرح كثيرا." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "dialogue", character: "القزم", content: "ملكنا لا يحب البشر." },
    { type: "dialogue", character: "ياماتو", content: "فهمت." },
    { type: "dialogue", character: "القزم", content: "قد يطردك." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "اعتدت على ذلك." },
    { type: "narration", content: "القزم نظر إليه باستغراب." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "القزم", content: "غريب." },
    { type: "dialogue", character: "ياماتو", content: "سمعت ذلك كثيرا." },

    { type: "chapter-end", content: "— نهاية الفصل السادس — الجزء الأول —" }
  ]
},
{
  id: 24,
  title: "الجزء الثاني",
  subtitle: "مدينة تحت الجبال",
  sections: [
    { type: "scene-break", content: "الطريق داخل الجبل" },
    { type: "narration", content: "قاد الأقزام ياماتو عبر الممر الصخري الضيق." },
    { type: "narration", content: "كلما تقدموا أكثر…" },
    { type: "narration", content: "أصبح الضوء أقل." },
    { type: "narration", content: "الصخور فوقهم أصبحت أعلى." },
    { type: "narration", content: "والهواء أبرد." },
    { type: "narration", content: "ياماتو كان يمشي خلفهم بصمت." },
    { type: "narration", content: "لكن رأسه لم يكن هادئا." },
    { type: "narration", content: "الأفكار عادت." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "غريب…" },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "شيء أفكر فيه." },
    { type: "dialogue", character: "القزم", content: "فكر بصمت." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "لكن بعد لحظات…" },
    { type: "narration", content: "تكلم مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "أخبرني بشيء." },
    { type: "narration", content: "القزم تنهد." },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "لو عشت مع شخص سنوات…" },
    { type: "dialogue", character: "القزم", content: "نعم؟" },
    { type: "dialogue", character: "ياماتو", content: "هل تصدق إشاعة عنه بسهولة؟" },
    { type: "narration", content: "القزم توقف قليلا." },
    { type: "narration", content: "التفت إليه." },
    { type: "dialogue", character: "القزم", content: "بشر؟" },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "القزم", content: "أنتم تفعلون ذلك دائما." },
    { type: "narration", content: "ياماتو عبس." },
    { type: "dialogue", character: "ياماتو", content: "لكن لماذا؟" },
    { type: "narration", content: "القزم هز كتفيه." },
    { type: "dialogue", character: "القزم", content: "البشر يحبون الكلام أكثر من الحقيقة." },
    { type: "narration", content: "ياماتو صمت." },

    { type: "scene-break", content: "جرح في الداخل" },
    { type: "narration", content: "واصلوا المشي." },
    { type: "narration", content: "ياماتو تمتم لنفسه." },
    { type: "whisper", character: "ياماتو", content: "سنوات…" },
    { type: "narration", content: "ثم قال." },
    { type: "whisper", character: "ياماتو", content: "سنوات عشت معهم." },
    { type: "narration", content: "ياماتو شد قبضته." },
    { type: "whisper", character: "ياماتو", content: "لماذا…؟" },
    { type: "narration", content: "ثم همس." },
    { type: "whisper", character: "ياماتو", content: "لماذا يصدقون ذلك؟" },
    { type: "narration", content: "القزم الذي خلفه قال." },
    { type: "dialogue", character: "القزم", content: "لأنك ضعيف." },
    { type: "narration", content: "ياماتو توقف." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "narration", content: "القزم قال ببساطة." },
    { type: "dialogue", character: "القزم", content: "القوي لا يتهمه أحد." },
    { type: "narration", content: "ياماتو صمت." },
    { type: "narration", content: "الكلمات كانت بسيطة." },
    { type: "narration", content: "لكنها ضربت مكانا حساسا." },
    { type: "whisper", character: "ياماتو", content: "القوي…" },
    { type: "narration", content: "ثم نظر إلى الأرض." },
    { type: "dialogue", character: "ياماتو", content: "لو كنت قويا…" },
    { type: "narration", content: "ثم شد قبضته." },
    { type: "dialogue", character: "ياماتو", content: "لما تجرأوا." },

    { type: "scene-break", content: "فكرة الانتقام" },
    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "مرّت فكرة في رأسه." },
    { type: "narration", content: "صورة القاعة." },
    { type: "narration", content: "النبلاء." },
    { type: "narration", content: "الحارس." },
    { type: "narration", content: "هانا." },
    { type: "narration", content: "ياماتو نظر أمامه." },
    { type: "dialogue", character: "ياماتو", content: "لو أصبحت قويا…" },
    { type: "narration", content: "ثم قال بصوت منخفض." },
    { type: "whisper", character: "ياماتو", content: "سأجعلهم يندمون." },
    { type: "narration", content: "القزم الأول سمعه." },
    { type: "dialogue", character: "القزم", content: "انتقام؟" },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "ربما." },
    { type: "narration", content: "القزم قال ببرود." },
    { type: "dialogue", character: "القزم", content: "الانتقام ثقيل." },
    { type: "dialogue", character: "ياماتو", content: "أعرف." },
    { type: "dialogue", character: "القزم", content: "القوي فقط يستطيع حمله." },
    { type: "narration", content: "ياماتو ابتسم ابتسامة صغيرة." },
    { type: "dialogue", character: "ياماتو", content: "إذن يجب أن أصبح قويا." },

    { type: "scene-break", content: "الضوء يظهر" },
    { type: "narration", content: "بعد عدة دقائق…" },
    { type: "narration", content: "ظهر ضوء في نهاية النفق." },
    { type: "dialogue", character: "القزم", content: "وصلنا." },
    { type: "narration", content: "ياماتو رفع رأسه." },
    { type: "dialogue", character: "ياماتو", content: "أخيرا." },
    { type: "narration", content: "خرجوا من النفق." },
    { type: "narration", content: "و…" },
    { type: "narration", content: "تجمد ياماتو في مكانه." },

    { type: "scene-break", content: "الصدمة" },
    { type: "narration", content: "عيناه اتسعتا." },
    { type: "dialogue", character: "ياماتو", content: "ما…" },
    { type: "narration", content: "ثم قال." },
    { type: "shout", character: "ياماتو", content: "ما هذا…؟" },
    { type: "narration", content: "أمامهم…" },
    { type: "narration", content: "مدينة كاملة." },
    { type: "narration", content: "لكنها ليست مدينة عادية." },
    { type: "narration", content: "مدينة ضخمة محفورة داخل الجبل." },
    { type: "narration", content: "السقف عالي جدا." },
    { type: "narration", content: "كأنه سماء حجرية." },
    { type: "narration", content: "مئات المنازل الحجرية." },
    { type: "narration", content: "الجسور." },
    { type: "narration", content: "الممرات." },
    { type: "narration", content: "المصانع." },
    { type: "narration", content: "النيران في الأفران." },
    { type: "narration", content: "أصوات المطارق." },
    { type: "combat", content: "طنغ! طنغ! طنغ!" },
    { type: "narration", content: "أنهار صغيرة من المعدن المنصهر." },
    { type: "narration", content: "وسوق كبير مليء بالأقزام." },
    { type: "narration", content: "ياماتو فتح فمه." },
    { type: "dialogue", character: "ياماتو", content: "هذا…" },
    { type: "narration", content: "ثم قال بذهول." },
    { type: "dialogue", character: "ياماتو", content: "أكبر من العاصمة." },
    { type: "dialogue", character: "القزم", content: "هذه دوراغون." },
    { type: "dialogue", character: "ياماتو", content: "مدينة الأقزام…" },
    { type: "narration", content: "ثم ضحك بخفة." },
    { type: "dialogue", character: "ياماتو", content: "أنا أحب هذا المكان بالفعل." },

    { type: "scene-break", content: "رد فعل الأقزام" },
    { type: "narration", content: "لكن…" },
    { type: "narration", content: "بينما كانوا يسيرون في السوق…" },
    { type: "narration", content: "بدأ شيء غريب يحدث." },
    { type: "narration", content: "الأقزام بدأوا ينظرون." },
    { type: "narration", content: "واحد تلو الآخر." },
    { type: "narration", content: "بعضهم توقف عن العمل." },
    { type: "narration", content: "بعضهم همس." },
    { type: "dialogue", character: "القزم", content: "بشر." },
    { type: "dialogue", character: "القزم", content: "ماذا يفعل هنا؟" },
    { type: "dialogue", character: "القزمة", content: "هذا سيجلب المشاكل." },
    { type: "narration", content: "بعض الأطفال اختبؤوا خلف آبائهم." },
    { type: "narration", content: "ياماتو حك رأسه." },
    { type: "dialogue", character: "ياماتو", content: "واو." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "أشعر أنني مشهور فجأة." },
    { type: "dialogue", character: "القزم", content: "ليس مشهورا." },
    { type: "dialogue", character: "ياماتو", content: "ماذا إذن؟" },
    { type: "dialogue", character: "القزم", content: "مريب." },
    { type: "dialogue", character: "ياماتو", content: "آه." },

    { type: "scene-break", content: "النهاية المؤقتة" },
    { type: "narration", content: "واصلوا السير عبر المدينة الحجرية." },
    { type: "narration", content: "الأقزام يحدقون." },
    { type: "narration", content: "يهمسون." },
    { type: "narration", content: "ينظرون بحذر." },
    { type: "narration", content: "ياماتو نظر حوله مرة أخرى." },
    { type: "narration", content: "المدينة مذهلة." },
    { type: "narration", content: "عميقة." },
    { type: "narration", content: "حية." },
    { type: "narration", content: "لكن…" },
    { type: "narration", content: "كل العيون عليه." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "يبدو أنني غريب هنا أيضا." },
    { type: "dialogue", character: "القزم", content: "انتظر حتى تقابل الملك." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "أتمنى أن يكون أقل غضبا من الآخرين." },
    { type: "dialogue", character: "القزم", content: "لا تعتمد على ذلك." },

    { type: "chapter-end", content: "— نهاية الفصل السادس — الجزء الثاني —" }
  ]
},
{
  id: 25,
  title: "الجزء الثالث",
  subtitle: "قاعة الملك",
  sections: [
    { type: "scene-break", content: "الطريق إلى القاعة" },
    { type: "narration", content: "قاد الأقزام ياماتو عبر الممرات الحجرية الواسعة." },
    { type: "narration", content: "كلما تقدموا أكثر داخل المدينة…" },
    { type: "narration", content: "أصبحت المباني أكبر." },
    { type: "narration", content: "المطارق تضرب الحديد." },
    { type: "combat", content: "طنغ… طنغ… طنغ…" },
    { type: "narration", content: "شرارات تتطاير من الأفران." },
    { type: "narration", content: "ياماتو كان ينظر حوله بدهشة واضحة." },
    { type: "dialogue", character: "ياماتو", content: "هذا المكان…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "يشبه مدينة كاملة تحت الأرض." },
    { type: "dialogue", character: "القزم", content: "لأنها مدينة كاملة." },
    { type: "dialogue", character: "ياماتو", content: "كم يعيش هنا؟" },
    { type: "dialogue", character: "القزم", content: "آلاف." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "narration", content: "ياماتو ابتسم قليلا." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أنكم تحبون الجبال." },
    { type: "narration", content: "القزم التفت إليه." },
    { type: "dialogue", character: "القزم", content: "ونكره البشر." },
    { type: "dialogue", character: "ياماتو", content: "آه." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "نسيت هذه النقطة." },

    { type: "scene-break", content: "القلعة الحجرية" },
    { type: "narration", content: "بعد دقائق…" },
    { type: "narration", content: "توقفوا أمام مبنى ضخم." },
    { type: "narration", content: "بوابة حجرية ضخمة." },
    { type: "narration", content: "أعمدة سميكة." },
    { type: "narration", content: "نقوش قديمة على الجدران." },
    { type: "dialogue", character: "القزم", content: "هنا." },
    { type: "narration", content: "ياماتو نظر للأعلى." },
    { type: "dialogue", character: "ياماتو", content: "هذا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "قصر؟" },
    { type: "dialogue", character: "القزم", content: "قاعة الملك." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "إذن…" },
    { type: "narration", content: "ثم ابتسم بخفة." },
    { type: "dialogue", character: "ياماتو", content: "اللحظة المصيرية." },

    { type: "scene-break", content: "داخل القاعة" },
    { type: "narration", content: "دخلوا." },
    { type: "narration", content: "القاعة كانت ضخمة." },
    { type: "narration", content: "الأرض حجرية." },
    { type: "narration", content: "الأعمدة ضخمة." },
    { type: "narration", content: "والنار تشتعل في مشاعل كبيرة." },
    { type: "narration", content: "في نهاية القاعة…" },
    { type: "narration", content: "جلس ملك الأقزام." },
    { type: "narration", content: "بروندور." },
    { type: "narration", content: "جسد ضخم." },
    { type: "narration", content: "لحية طويلة كثيفة." },
    { type: "narration", content: "درع ثقيل." },
    { type: "narration", content: "وعينان حادتان." },
    { type: "narration", content: "حول العرش…" },
    { type: "narration", content: "عدة أقزام أقوياء." },
    { type: "narration", content: "حراس." },
    { type: "narration", content: "محاربون." },
    { type: "narration", content: "ياماتو وقف في المنتصف." },
    { type: "narration", content: "القزم الأول قال بصوت عال." },
    { type: "dialogue", character: "القزم", content: "مولاي." },
    { type: "narration", content: "ثم أشار إلى ياماتو." },
    { type: "dialogue", character: "القزم", content: "وجدناه عند المدخل." },
    { type: "narration", content: "بروندور نظر إليه." },
    { type: "narration", content: "صمت طويل." },

    { type: "scene-break", content: "أول سؤال" },
    { type: "narration", content: "بروندور قال بصوت عميق." },
    { type: "dialogue", character: "بروندور", content: "بشر." },
    { type: "narration", content: "ياماتو رفع يده قليلا." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "بروندور", content: "لماذا أنت هنا؟" },
    { type: "narration", content: "ياماتو فكر لحظة." },
    { type: "dialogue", character: "ياماتو", content: "أبحث عن تدريب." },
    { type: "narration", content: "القاعة صمتت لحظة." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "ضحك أحد الأقزام." },
    { type: "dialogue", character: "القزم", content: "تدريب؟!" },
    { type: "dialogue", character: "القزم", content: "عندنا؟!" },
    { type: "dialogue", character: "القزم", content: "هذا مضحك." },
    { type: "narration", content: "ياماتو ابتسم بخفة." },
    { type: "dialogue", character: "ياماتو", content: "أعرف." },

    { type: "scene-break", content: "التحقيق" },
    { type: "dialogue", character: "بروندور", content: "لماذا ندرّب بشرا؟" },
    { type: "dialogue", character: "ياماتو", content: "لأنني ضعيف." },
    { type: "dialogue", character: "القزم", content: "هذا واضح." },
    { type: "narration", content: "بعض الأقزام ضحكوا." },
    { type: "narration", content: "ياماتو لم يغضب." },
    { type: "dialogue", character: "ياماتو", content: "أعرف." },
    { type: "dialogue", character: "بروندور", content: "هناك بشر أقوى منك." },
    { type: "dialogue", character: "ياماتو", content: "صحيح." },
    { type: "dialogue", character: "بروندور", content: "إذن لماذا أتيت إلى هنا؟" },
    { type: "narration", content: "ياماتو صمت لحظة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لأن البشر لا يريدونني." },
    { type: "narration", content: "القاعة هدأت قليلا." },
    { type: "dialogue", character: "بروندور", content: "لماذا؟" },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "قصة طويلة." },
    { type: "dialogue", character: "القزم", content: "لدينا وقت." },

    { type: "scene-break", content: "الحقيقة" },
    { type: "narration", content: "ياماتو نظر إلى الأرض لحظة." },
    { type: "narration", content: "ثم رفع رأسه." },
    { type: "dialogue", character: "ياماتو", content: "اتهموني بشيء لم أفعله." },
    { type: "dialogue", character: "القزم", content: "مثل ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "اعتداء." },
    { type: "narration", content: "القاعة صمتت." },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "متحرش." },
    { type: "narration", content: "بعض الأقزام عبسوا." },
    { type: "dialogue", character: "القزم", content: "والأدلة؟" },
    { type: "dialogue", character: "ياماتو", content: "وضعوا شيئا في غرفتي." },
    { type: "dialogue", character: "القزم", content: "وفعلوا ذلك بسهولة؟" },
    { type: "narration", content: "ياماتو ابتسم بمرارة." },
    { type: "dialogue", character: "ياماتو", content: "لأنني ضعيف." },

    { type: "scene-break", content: "شم الحقيقة" },
    { type: "narration", content: "بروندور نهض من عرشه ببطء." },
    { type: "narration", content: "خطواته ثقيلة." },
    { type: "narration", content: "اقترب من ياماتو." },
    { type: "narration", content: "وقف أمامه مباشرة." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "شم الهواء." },
    { type: "dialogue", character: "ياماتو", content: "هل الجميع هنا يشم الناس؟" },
    { type: "dialogue", character: "القزم", content: "ملكنا أفضل منا." },
    { type: "narration", content: "بروندور بقي صامتا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "لا يكذب." },
    { type: "narration", content: "همسات بين الأقزام." },
    { type: "dialogue", character: "القزم", content: "حقا؟" },
    { type: "dialogue", character: "بروندور", content: "نعم." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "لكنه ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "أعرف." },

    { type: "scene-break", content: "القرار الأول" },
    { type: "narration", content: "الملك عاد إلى عرشه." },
    { type: "narration", content: "جلس." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "البشر يجلبون المشاكل." },
    { type: "narration", content: "صمت." },
    { type: "dialogue", character: "بروندور", content: "لكن…" },
    { type: "narration", content: "نظر إلى ياماتو." },
    { type: "dialogue", character: "بروندور", content: "لدي فضول." },
    { type: "dialogue", character: "القزم", content: "مولاي؟" },
    { type: "dialogue", character: "بروندور", content: "نختبره." },
    { type: "dialogue", character: "القزم", content: "كيف؟" },
    { type: "narration", content: "الملك ابتسم ابتسامة خفيفة." },
    { type: "dialogue", character: "بروندور", content: "الأقزام لا يعطون القوة مجانا." },
    { type: "narration", content: "ثم أشار إلى ياماتو." },
    { type: "dialogue", character: "بروندور", content: "اجعلوه يعمل." },
    { type: "dialogue", character: "ياماتو", content: "يعمل؟" },
    { type: "dialogue", character: "القزم", content: "في المناجم." },
    { type: "dialogue", character: "القزم", content: "وفي الأفران." },
    { type: "dialogue", character: "القزم", content: "حتى ينهار." },
    { type: "dialogue", character: "بروندور", content: "إن بقي حيا…" },
    { type: "narration", content: "ثم نظر إليه." },
    { type: "dialogue", character: "بروندور", content: "سنرى." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "هذا يبدو عادلا." },
    { type: "dialogue", character: "القزم", content: "أنت مجنون." },
    { type: "dialogue", character: "ياماتو", content: "ربما." },

    { type: "chapter-end", content: "— نهاية الفصل السادس — الجزء الثالث —" }
  ]
},
{
  id: 26,
  title: "الجزء الرابع",
  subtitle: "عامل المنجم الأسوأ",
  sections: [
    { type: "scene-break", content: "بداية العمل" },
    { type: "narration", content: "بعد لقاء الملك…" },
    { type: "narration", content: "قاد القزم الأول ياماتو عبر ممرات أخرى داخل المدينة." },
    { type: "narration", content: "توقفوا أمام نفق ضخم." },
    { type: "dialogue", character: "القزم", content: "هنا تعمل." },
    { type: "narration", content: "ياماتو نظر للداخل." },
    { type: "narration", content: "النفق مظلم." },
    { type: "narration", content: "أصوات المطارق تأتي من الداخل." },
    { type: "combat", content: "طنغ… طنغ… طنغ…" },
    { type: "dialogue", character: "ياماتو", content: "مناجم؟" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "كنت أتمنى شيئا أسهل." },
    { type: "dialogue", character: "القزم", content: "تمنيات البشر لا تهم." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "حسنا… العمل عمل." },

    { type: "scene-break", content: "إعطاؤه الأدوات" },
    { type: "narration", content: "قزم آخر رمى نحوه معولا." },
    { type: "combat", content: "طَق" },
    { type: "narration", content: "ياماتو أمسكه بصعوبة." },
    { type: "shout", character: "ياماتو", content: "ثقيل!" },
    { type: "narration", content: "القزم ضحك." },
    { type: "dialogue", character: "القزم", content: "هذا صغير." },
    { type: "dialogue", character: "ياماتو", content: "صغير؟!" },
    { type: "dialogue", character: "القزم", content: "المعول الحقيقي أثقل." },
    { type: "narration", content: "ياماتو نظر إلى المعول." },
    { type: "dialogue", character: "ياماتو", content: "إذن سأموت هنا." },
    { type: "dialogue", character: "القزم", content: "ابدأ الحفر." },
    { type: "dialogue", character: "ياماتو", content: "أين؟" },
    { type: "narration", content: "القزم أشار إلى جدار صخري." },
    { type: "dialogue", character: "القزم", content: "هناك." },
    { type: "narration", content: "ياماتو اقترب." },
    { type: "narration", content: "رفع المعول." },
    { type: "narration", content: "ثم ضرب." },
    { type: "combat", content: "طَك" },
    { type: "narration", content: "المعول ارتد." },
    { type: "shout", character: "ياماتو", content: "آه!" },
    { type: "dialogue", character: "القزم", content: "هل ضربت الجبل أم الجبل ضربك؟" },
    { type: "narration", content: "الأقزام ضحكوا." },

    { type: "scene-break", content: "أول عشر دقائق" },
    { type: "narration", content: "بعد عدة ضربات…" },
    { type: "narration", content: "ياماتو كان يتنفس بصعوبة." },
    { type: "dialogue", character: "ياماتو", content: "انتظروا…" },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "كم مضى؟" },
    { type: "dialogue", character: "القزم", content: "عشر دقائق." },
    { type: "dialogue", character: "ياماتو", content: "فقط؟!" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "أعتقد أنني عملت ثلاث ساعات." },
    { type: "dialogue", character: "القزم", content: "أنت ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "نعم… سمعت ذلك كثيرا." },

    { type: "scene-break", content: "موقف كوميدي" },
    { type: "narration", content: "رفع المعول مرة أخرى." },
    { type: "narration", content: "ضرب الجدار." },
    { type: "combat", content: "طَك" },
    { type: "narration", content: "قطعة حجر صغيرة سقطت." },
    { type: "narration", content: "ياماتو رفعها." },
    { type: "dialogue", character: "ياماتو", content: "انظروا!" },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "نجحت." },
    { type: "dialogue", character: "القزم", content: "هذه حصاة." },
    { type: "dialogue", character: "ياماتو", content: "بداية عظيمة." },
    { type: "dialogue", character: "القزم", content: "مخيب." },
    { type: "dialogue", character: "ياماتو", content: "أنا مبتدئ." },

    { type: "scene-break", content: "تعب شديد" },
    { type: "narration", content: "بعد ساعة…" },
    { type: "narration", content: "ياماتو جلس على الأرض." },
    { type: "narration", content: "يتنفس بقوة." },
    { type: "dialogue", character: "ياماتو", content: "انتظروا…" },
    { type: "dialogue", character: "القزم", content: "لا تتوقف." },
    { type: "dialogue", character: "ياماتو", content: "أنا لا أتوقف." },
    { type: "dialogue", character: "القزم", content: "إذن لماذا جلست؟" },
    { type: "dialogue", character: "ياماتو", content: "استراتيجية جديدة." },
    { type: "dialogue", character: "القزم", content: "ما هي؟" },
    { type: "dialogue", character: "ياماتو", content: "الراحة." },
    { type: "dialogue", character: "القزم", content: "هذه ليست استراتيجية." },
    { type: "dialogue", character: "ياماتو", content: "بالنسبة لي هي." },

    { type: "scene-break", content: "حوار مضحك" },
    { type: "narration", content: "قزم اقترب منه." },
    { type: "dialogue", character: "القزم", content: "هل كل البشر ضعفاء مثلك؟" },
    { type: "dialogue", character: "ياماتو", content: "لا." },
    { type: "dialogue", character: "القزم", content: "جيد." },
    { type: "dialogue", character: "ياماتو", content: "لكن معظمهم أقوى مني." },
    { type: "dialogue", character: "القزم", content: "إذن لماذا أنت هنا؟" },
    { type: "narration", content: "ياماتو فكر لحظة." },
    { type: "dialogue", character: "ياماتو", content: "لأن حياتي قررت أن تكون صعبة." },
    { type: "dialogue", character: "القزم", content: "هذا منطقي." },
    { type: "dialogue", character: "ياماتو", content: "أخيرا شخص يفهمني." },

    { type: "scene-break", content: "لحظة صراحة" },
    { type: "narration", content: "بعد قليل…" },
    { type: "narration", content: "عاد ياماتو للحفر." },
    { type: "narration", content: "لكن هذه المرة ببطء." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "whisper", character: "ياماتو", content: "يجب أن أصبح أقوى." },
    { type: "narration", content: "القزم سمعه." },
    { type: "dialogue", character: "القزم", content: "لماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "لأنني لا أريد أن يحدث ذلك مرة أخرى." },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "أن يقف الناس أمامي…" },
    { type: "narration", content: "ثم شد قبضته." },
    { type: "dialogue", character: "ياماتو", content: "ويحطموا حياتي." },
    { type: "narration", content: "القزم نظر إليه لحظة." },
    { type: "dialogue", character: "القزم", content: "إذن استمر بالحفر." },
    { type: "dialogue", character: "ياماتو", content: "كيف سيساعد هذا؟" },
    { type: "dialogue", character: "القزم", content: "كل الأقزام بدأوا هكذا." },
    { type: "dialogue", character: "ياماتو", content: "إذن سأصبح قزما؟" },
    { type: "dialogue", character: "القزم", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "للأسف." },

    { type: "scene-break", content: "نهاية اليوم" },
    { type: "narration", content: "مع غروب الضوء الصناعي في المنجم…" },
    { type: "narration", content: "كان ياماتو مستلقيا على الأرض." },
    { type: "narration", content: "يتنفس بصعوبة." },
    { type: "dialogue", character: "ياماتو", content: "أنا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ميت." },
    { type: "dialogue", character: "القزم", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "كيف تعرف؟" },
    { type: "dialogue", character: "القزم", content: "الميت لا يتكلم." },
    { type: "dialogue", character: "ياماتو", content: "للأسف." },
    { type: "dialogue", character: "القزم", content: "غدا تعمل أكثر." },
    { type: "narration", content: "ياماتو فتح عينيه." },
    { type: "shout", character: "ياماتو", content: "غدا؟!" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "أنا لن أستيقظ." },
    { type: "dialogue", character: "القزم", content: "سنوقظك." },
    { type: "dialogue", character: "ياماتو", content: "هذا مرعب." },

    { type: "chapter-end", content: "— نهاية الفصل السادس — الجزء الرابع —" }
  ]
},
{
  id: 27,
  title: "الجزء الخامس",
  subtitle: "المدرب القديم",
  sections: [
    { type: "scene-break", content: "صباح مؤلم" },
    { type: "narration", content: "استيقظ ياماتو على صوت قوي." },
    { type: "combat", content: "طَخ!" },
    { type: "narration", content: "شيء ضرب الأرض قرب رأسه." },
    { type: "narration", content: "ياماتو فتح عينيه ببطء." },
    { type: "dialogue", character: "ياماتو", content: "آه…" },
    { type: "narration", content: "ثم قال وهو ما زال نصف نائم." },
    { type: "dialogue", character: "ياماتو", content: "هل أنا في الجنة؟" },
    { type: "narration", content: "صوت خشن رد عليه." },
    { type: "dialogue", character: "غارون", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "إذن الجحيم؟" },
    { type: "dialogue", character: "غارون", content: "قريب." },
    { type: "narration", content: "ياماتو فتح عينيه بالكامل." },
    { type: "narration", content: "أمامه وقف قزم." },
    { type: "narration", content: "لكن هذا القزم مختلف." },
    { type: "narration", content: "لحيته طويلة رمادية." },
    { type: "narration", content: "ندبة قديمة على وجهه." },
    { type: "narration", content: "جسده ممتلئ بالعضلات رغم عمره." },
    { type: "narration", content: "يحمل عصا تدريب خشبية." },
    { type: "dialogue", character: "غارون", content: "انهض." },
    { type: "narration", content: "ياماتو نظر إليه." },
    { type: "dialogue", character: "ياماتو", content: "من أنت؟" },
    { type: "dialogue", character: "غارون", content: "مدربك." },
    { type: "narration", content: "ياماتو جلس ببطء." },
    { type: "dialogue", character: "ياماتو", content: "انتظر…" },
    { type: "narration", content: "ثم نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "أنا لا أتذكر أنني طلبت مدربا." },
    { type: "narration", content: "القزم ضرب الأرض بالعصا." },
    { type: "combat", content: "طَق" },
    { type: "dialogue", character: "غارون", content: "الملك طلب." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "آه." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "إذن أنا في ورطة." },

    { type: "scene-break", content: "التعارف" },
    { type: "narration", content: "القزم وضع العصا على كتفه." },
    { type: "dialogue", character: "غارون", content: "اسمي غارون فولدير." },
    { type: "dialogue", character: "ياماتو", content: "غارون؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "اسم قوي." },
    { type: "dialogue", character: "غارون", content: "أنا قوي." },
    { type: "dialogue", character: "ياماتو", content: "واضح." },
    { type: "narration", content: "غارون نظر إليه من الرأس إلى القدم." },
    { type: "dialogue", character: "غارون", content: "وأنت ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "نعم… هذا واضح أيضا." },

    { type: "scene-break", content: "مفاجأة" },
    { type: "narration", content: "غارون قال فجأة." },
    { type: "dialogue", character: "غارون", content: "كنت مدربا في مملكة كاغيتسورا." },
    { type: "narration", content: "ياماتو رفع رأسه بسرعة." },
    { type: "shout", character: "ياماتو", content: "ماذا؟!" },
    { type: "dialogue", character: "غارون", content: "قبل سنوات طويلة." },
    { type: "dialogue", character: "ياماتو", content: "في الأكاديمية؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "إذن أنت تعرفها." },
    { type: "dialogue", character: "غارون", content: "أعرفها جيدا." },
    { type: "narration", content: "ياماتو صمت لحظة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "إذن…" },
    { type: "dialogue", character: "ياماتو", content: "هل سمعت عني؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "narration", content: "ياماتو تجمد." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "غارون", content: "قصة المتحرش." },
    { type: "narration", content: "الصمت." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "آه." },

    { type: "scene-break", content: "الصراحة" },
    { type: "narration", content: "غارون اقترب خطوة." },
    { type: "narration", content: "نظر إلى عيني ياماتو." },
    { type: "dialogue", character: "غارون", content: "لكن…" },
    { type: "narration", content: "ثم شم الهواء قليلا." },
    { type: "dialogue", character: "غارون", content: "أنت لا تكذب." },
    { type: "dialogue", character: "ياماتو", content: "كيف تعرف؟" },
    { type: "dialogue", character: "غارون", content: "عشت طويلا." },
    { type: "dialogue", character: "ياماتو", content: "إذن تصدقني؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "dialogue", character: "غارون", content: "لكن هذا لا يغير شيئا." },
    { type: "dialogue", character: "ياماتو", content: "لماذا؟" },
    { type: "dialogue", character: "غارون", content: "لأنك ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "نعم… مرة أخرى." },

    { type: "scene-break", content: "بداية التدريب" },
    { type: "narration", content: "غارون رمى عصا خشبية نحوه." },
    { type: "narration", content: "ياماتو أمسكها بصعوبة." },
    { type: "dialogue", character: "ياماتو", content: "ما هذا؟" },
    { type: "dialogue", character: "غارون", content: "تدريب." },
    { type: "dialogue", character: "ياماتو", content: "الآن؟" },
    { type: "dialogue", character: "غارون", content: "الآن." },
    { type: "dialogue", character: "ياماتو", content: "لكنني عملت في المنجم أمس." },
    { type: "dialogue", character: "غارون", content: "اليوم تعمل أيضا." },
    { type: "dialogue", character: "ياماتو", content: "جسدي يحتج." },
    { type: "dialogue", character: "غارون", content: "جسدك ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "هذا ليس جديدا." },

    { type: "scene-break", content: "أول ضربة" },
    { type: "narration", content: "غارون هجم فجأة." },
    { type: "combat", content: "ووش!" },
    { type: "narration", content: "ياماتو بالكاد رفع العصا." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "الضربة أسقطته أرضا." },
    { type: "shout", character: "ياماتو", content: "آه!" },
    { type: "dialogue", character: "غارون", content: "انهض." },
    { type: "dialogue", character: "ياماتو", content: "أحتاج دقيقة." },
    { type: "dialogue", character: "غارون", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "نصف دقيقة؟" },
    { type: "dialogue", character: "غارون", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "عشر ثوان؟" },
    { type: "dialogue", character: "غارون", content: "لا." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "أنت قاس." },

    { type: "scene-break", content: "ملاحظة المدرب" },
    { type: "narration", content: "بعد عدة محاولات…" },
    { type: "narration", content: "ياماتو سقط مرة أخرى." },
    { type: "narration", content: "غارون نظر إليه بصمت." },
    { type: "dialogue", character: "غارون", content: "غريب." },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "غارون", content: "أنت غبي." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "dialogue", character: "غارون", content: "لكن…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "غارون", content: "لا تستسلم." },
    { type: "dialogue", character: "ياماتو", content: "أنا فقط أسقط كثيرا." },
    { type: "dialogue", character: "غارون", content: "لكن تنهض." },
    { type: "dialogue", character: "ياماتو", content: "ليس لدي خيار." },
    { type: "dialogue", character: "غارون", content: "هذا جيد." },

    { type: "scene-break", content: "لحظة صادقة" },
    { type: "narration", content: "ياماتو جلس قليلا." },
    { type: "dialogue", character: "ياماتو", content: "أخبرني بشيء." },
    { type: "dialogue", character: "غارون", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "هل يمكن لشخص ضعيف مثلي أن يصبح قويا؟" },
    { type: "narration", content: "غارون صمت لحظة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "غارون", content: "لكن الطريق طويل." },
    { type: "dialogue", character: "ياماتو", content: "كم طويل؟" },
    { type: "dialogue", character: "غارون", content: "سنوات." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "آه." },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "dialogue", character: "غارون", content: "لماذا تبتسم؟" },
    { type: "dialogue", character: "ياماتو", content: "لأن حياتي كانت سيئة بالفعل." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "لا أمانع أن تصبح أصعب." },
    { type: "narration", content: "غارون نظر إليه." },
    { type: "narration", content: "ثم ابتسم ابتسامة صغيرة نادرة." },
    { type: "dialogue", character: "غارون", content: "ربما…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "غارون", content: "لن تموت بسرعة." },
    { type: "dialogue", character: "ياماتو", content: "هذا تشجيع؟" },
    { type: "dialogue", character: "غارون", content: "أفضل ما لدي." },

    { type: "chapter-end", content: "— نهاية الفصل السادس —" }
  ]
},
{
  id: 28,
  title: "الجزء الأول",
  subtitle: "رائحة الصدق",
  sections: [
    { type: "scene-break", content: "أيام التدريب الأولى" },
    { type: "narration", content: "مرّت عدة أيام." },
    { type: "narration", content: "بل…" },
    { type: "narration", content: "ربما أسبوع كامل." },
    { type: "narration", content: "في مدينة الأقزام." },
    { type: "narration", content: "حياة ياماتو أصبحت بسيطة جدا." },
    { type: "narration", content: "صباح… منجم." },
    { type: "narration", content: "ظهر… تدريب مع غارون." },
    { type: "narration", content: "ليل… سقوط ميت على السرير." },
    { type: "narration", content: "وفي اليوم التالي…" },
    { type: "narration", content: "كل شيء يتكرر." },

    { type: "scene-break", content: "صباح جديد" },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "العصا ضربت الأرض قرب رأسه." },
    { type: "dialogue", character: "غارون", content: "انهض." },
    { type: "narration", content: "ياماتو فتح عينيه ببطء." },
    { type: "dialogue", character: "ياماتو", content: "أنا متأكد…" },
    { type: "narration", content: "ثم تمتم." },
    { type: "dialogue", character: "ياماتو", content: "أنك تستمتع بإيقاظي." },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "كنت أمزح." },
    { type: "dialogue", character: "غارون", content: "أنا لا." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "حياتي أصبحت مؤلمة." },

    { type: "scene-break", content: "التدريب" },
    { type: "narration", content: "وقف ياماتو." },
    { type: "narration", content: "جسده يؤلمه بالكامل." },
    { type: "dialogue", character: "ياماتو", content: "هل يجب أن نتدرب كل يوم؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "حتى في العطلات؟" },
    { type: "dialogue", character: "غارون", content: "لا توجد عطلات." },
    { type: "dialogue", character: "ياماتو", content: "هذا ظلم." },
    { type: "dialogue", character: "غارون", content: "هذا تدريب." },
    { type: "dialogue", character: "ياماتو", content: "الفرق بسيط." },
    { type: "narration", content: "غارون رفع العصا." },
    { type: "dialogue", character: "غارون", content: "استعد." },

    { type: "scene-break", content: "تحسن بسيط" },
    { type: "narration", content: "بعد عدة ضربات…" },
    { type: "narration", content: "ياماتو هذه المرة لم يسقط مباشرة." },
    { type: "narration", content: "رفع العصا." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "صد الضربة." },
    { type: "narration", content: "غارون توقف لحظة." },
    { type: "dialogue", character: "غارون", content: "همم." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "رأيت؟" },
    { type: "dialogue", character: "غارون", content: "صدفة." },
    { type: "dialogue", character: "ياماتو", content: "دعني أستمتع بها." },

    { type: "scene-break", content: "في المنجم" },
    { type: "narration", content: "بعد التدريب…" },
    { type: "narration", content: "عاد إلى المنجم." },
    { type: "dialogue", character: "تورك", content: "أسرع!" },
    { type: "dialogue", character: "ياماتو", content: "أنا أضرب الصخر…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "ليس الزمن." },
    { type: "dialogue", character: "تورك", content: "اضرب أكثر." },
    { type: "narration", content: "ياماتو رفع المعول." },
    { type: "combat", content: "طَك" },
    { type: "dialogue", character: "تورك", content: "أقوى." },
    { type: "dialogue", character: "ياماتو", content: "لو ضربت أقوى…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "سأكسر نفسي." },
    { type: "dialogue", character: "تورك", content: "لا بأس." },
    { type: "dialogue", character: "ياماتو", content: "بالنسبة لك ربما." },

    { type: "scene-break", content: "الأقزام يراقبونه" },
    { type: "narration", content: "عدة أقزام كانوا يعملون قربه." },
    { type: "narration", content: "أحدهم قال." },
    { type: "dialogue", character: "القزم", content: "الغريب أنه ما زال هنا." },
    { type: "dialogue", character: "القزم", content: "أي بشر يهرب بعد يومين." },
    { type: "dialogue", character: "القزم", content: "لكنه بقي." },
    { type: "narration", content: "تورك شم الهواء قليلا." },
    { type: "dialogue", character: "تورك", content: "ما زلت أشم نفس الشيء." },
    { type: "dialogue", character: "القزم", content: "ماذا؟" },
    { type: "dialogue", character: "تورك", content: "الصدق." },
    { type: "dialogue", character: "القزم", content: "هذا البشري لا يكذب." },
    { type: "narration", content: "ياماتو سمعهم." },
    { type: "dialogue", character: "ياماتو", content: "شكرا." },
    { type: "dialogue", character: "القزم", content: "لا نشكرك." },
    { type: "dialogue", character: "ياماتو", content: "آه." },

    { type: "scene-break", content: "الثقة تبدأ" },
    { type: "narration", content: "بعد أيام أخرى…" },
    { type: "narration", content: "ياماتو كان يعمل في المنجم." },
    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "المعول انزلق من يده." },
    { type: "narration", content: "سقط قرب قدم أحد الأقزام." },
    { type: "dialogue", character: "ياماتو", content: "آسف!" },
    { type: "narration", content: "القزم نظر إليه." },
    { type: "dialogue", character: "القزم", content: "انتبه." },
    { type: "dialogue", character: "ياماتو", content: "نعم." },
    { type: "dialogue", character: "القزم", content: "لكن…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "القزم", content: "أنت تتحسن." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "هذا أول مدح لي هنا." },
    { type: "dialogue", character: "القزم", content: "لا تعتد عليه." },

    { type: "scene-break", content: "حديث مع غارون" },
    { type: "narration", content: "في المساء…" },
    { type: "narration", content: "جلس ياماتو قرب النار." },
    { type: "narration", content: "غارون كان يشحذ سيفه." },
    { type: "dialogue", character: "ياماتو", content: "أخبرني بشيء." },
    { type: "dialogue", character: "غارون", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "هل الأقزام دائما يشمون الناس؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "هذا مخيف." },
    { type: "dialogue", character: "غارون", content: "مفيد." },
    { type: "dialogue", character: "ياماتو", content: "ماذا يشمون الآن؟" },
    { type: "narration", content: "غارون نظر إليه." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "غارون", content: "التعب." },
    { type: "dialogue", character: "ياماتو", content: "صحيح." },
    { type: "dialogue", character: "غارون", content: "والإصرار." },
    { type: "narration", content: "ياماتو صمت لحظة." },
    { type: "dialogue", character: "ياماتو", content: "إصرار؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "narration", content: "ياماتو ابتسم قليلا." },
    { type: "dialogue", character: "ياماتو", content: "أعجبني هذا." },

    { type: "scene-break", content: "بداية الاحترام" },
    { type: "narration", content: "في اليوم التالي…" },
    { type: "narration", content: "ياماتو كان يعمل في المنجم." },
    { type: "dialogue", character: "تورك", content: "بشر." },
    { type: "dialogue", character: "ياماتو", content: "نعم؟" },
    { type: "dialogue", character: "تورك", content: "اسمك؟" },
    { type: "dialogue", character: "ياماتو", content: "ياماتو." },
    { type: "dialogue", character: "تورك", content: "ياماتو." },
    { type: "narration", content: "صمت لحظة." },
    { type: "dialogue", character: "تورك", content: "لا بأس بك." },
    { type: "narration", content: "ياماتو نظر إليه بدهشة." },
    { type: "dialogue", character: "ياماتو", content: "هل هذا مدح؟" },
    { type: "dialogue", character: "تورك", content: "نعم." },
    { type: "narration", content: "ياماتو رفع المعول بحماس." },
    { type: "dialogue", character: "ياماتو", content: "إذن سأعمل أكثر." },
    { type: "dialogue", character: "تورك", content: "لا تبالغ." },
    { type: "dialogue", character: "ياماتو", content: "تأخرت." },

    { type: "scene-break", content: "نهاية اليوم" },
    { type: "narration", content: "في الليل…" },
    { type: "narration", content: "جلس ياماتو وحده قليلا." },
    { type: "narration", content: "نظر إلى يديه المتعبتين." },
    { type: "narration", content: "ياماتو تمتم." },
    { type: "dialogue", character: "ياماتو", content: "غريب." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هؤلاء الأقزام…" },
    { type: "narration", content: "رفع رأسه قليلا." },
    { type: "dialogue", character: "ياماتو", content: "بدأوا يثقون بي." },
    { type: "narration", content: "ابتسم ابتسامة هادئة." },
    { type: "dialogue", character: "ياماتو", content: "وأنا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "بدأت أحب هذا المكان." },
    { type: "narration", content: "لكنه لم يكن يعلم…" },
    { type: "narration", content: "أن شيئا غريبا بدأ يحدث داخله." },
    { type: "narration", content: "شيء…" },
    { type: "narration", content: "حتى غارون سيلاحظه قريبا." },

    { type: "chapter-end", content: "— نهاية الفصل السابع — الجزء الأول —" }
  ]
},
{
  id: 29,
  title: "الجزء الثاني",
  subtitle: "الأسرار في الظلام",
  sections: [
    { type: "scene-break", content: "داخل مملكة كاغيتسورا" },
    { type: "narration", content: "قاعة حجرية داخل القصر الملكي." },
    { type: "narration", content: "الليل هادئ خارج النوافذ." },
    { type: "narration", content: "لكن داخل القاعة…" },
    { type: "narration", content: "جلس عدة نبلاء حول طاولة طويلة." },
    { type: "narration", content: "أحدهم ضرب الطاولة بخفة." },
    { type: "dialogue", character: "النبيل", content: "انتهى الأمر أخيرا." },
    { type: "narration", content: "نبيل آخر ابتسم." },
    { type: "dialogue", character: "النبيل", content: "ذلك الفاشل خرج من الأكاديمية." },
    { type: "narration", content: "نبيل ثالث ضحك." },
    { type: "dialogue", character: "النبيل", content: "رتبة F في أكاديمية كاغيتسورا… يا لها من إهانة." },
    { type: "dialogue", character: "النبيل", content: "سمعة الأكاديمية أهم من أي شيء." },
    { type: "dialogue", character: "النبيل", content: "الطلاب الأقوياء بدأوا يتحدثون." },
    { type: "dialogue", character: "النبيل", content: "لهذا كان يجب التخلص منه." },
    { type: "dialogue", character: "النبيل", content: "لكن لماذا بهذه الطريقة؟" },
    { type: "dialogue", character: "النبيل", content: "لأن الطرد العادي لا يكفي." },
    { type: "dialogue", character: "النبيل", content: "لو خرج بهدوء… سيبقى اسم الأكاديمية مرتبطا به." },
    { type: "dialogue", character: "النبيل", content: "لكن الآن؟" },
    { type: "narration", content: "ابتسم." },
    { type: "dialogue", character: "النبيل", content: "الجميع يكرهه." },
    { type: "dialogue", character: "النبيل", content: "ولا أحد سيدافع عنه." },
    { type: "dialogue", character: "النبيل", content: "حتى صديقه شك فيه." },
    { type: "narration", content: "ضحكات خافتة ملأت القاعة." },

    { type: "scene-break", content: "حديث عن المؤامرة" },
    { type: "dialogue", character: "النبيل", content: "تلك الفتاة أدت دورها جيدا." },
    { type: "dialogue", character: "النبيل", content: "هانا؟" },
    { type: "dialogue", character: "النبيل", content: "نعم." },
    { type: "dialogue", character: "النبيل", content: "الأمر كان بسيطا." },
    { type: "narration", content: "رفع كأسه." },
    { type: "dialogue", character: "النبيل", content: "ضع الدليل في غرفته… اجعلها تبكي قليلا… ثم انتهى." },
    { type: "dialogue", character: "النبيل", content: "ولا أحد يشك في النبلاء." },
    { type: "dialogue", character: "النبيل", content: "بالطبع." },
    { type: "dialogue", character: "النبيل", content: "وهكذا نحافظ على سمعة الأكاديمية." },
    { type: "dialogue", character: "النبيل", content: "الأكاديمية ليست مكانا لقمامة رتبة F." },

    { type: "scene-break", content: "في مكان آخر… بعيد جدا" },
    { type: "narration", content: "مكان مظلم." },
    { type: "narration", content: "كهف ضخم." },
    { type: "narration", content: "جدرانه سوداء." },
    { type: "narration", content: "نار بنفسجية تشتعل في المشاعل." },
    { type: "narration", content: "عدة أشخاص يجلسون حول طاولة دائرية." },
    { type: "narration", content: "لكنهم ليسوا بشرا." },
    { type: "narration", content: "قرون سوداء." },
    { type: "narration", content: "عيون حمراء." },
    { type: "narration", content: "ذيول طويلة." },
    { type: "narration", content: "إنهم…" },
    { type: "narration", content: "مجالس الشياطين السبعة." },

    { type: "scene-break", content: "الاجتماع" },
    { type: "narration", content: "جلس في رأس الطاولة شيطان طويل." },
    { type: "narration", content: "شعره أسود طويل." },
    { type: "narration", content: "قرنان منحنيان." },
    { type: "narration", content: "فالدريك نظر حوله." },
    { type: "dialogue", character: "فالدريك", content: "إذن…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "فالدريك", content: "وصل الخبر." },
    { type: "narration", content: "ليزارا قالت وهي تلعب بكأسها." },
    { type: "dialogue", character: "ليزارا", content: "قصة مضحكة." },
    { type: "narration", content: "دوركان قال بصوت خشن." },
    { type: "dialogue", character: "دوركان", content: "بشر يعتدي في مملكة كاغيتسورا؟" },
    { type: "narration", content: "ليزارا ضحكت." },
    { type: "dialogue", character: "ليزارا", content: "جريء جدا." },

    { type: "scene-break", content: "الفضول" },
    { type: "dialogue", character: "زاريف", content: "ما اسمه؟" },
    { type: "dialogue", character: "ليزارا", content: "ياماتو." },
    { type: "dialogue", character: "زاريف", content: "رتبته؟" },
    { type: "dialogue", character: "ليزارا", content: "F." },
    { type: "narration", content: "القاعة صمتت لحظة." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "ضحك دوركان بصوت عال." },
    { type: "shout", character: "دوركان", content: "رتبة F؟!" },
    { type: "dialogue", character: "ليزارا", content: "نعم." },
    { type: "narration", content: "زاريف قال ببطء." },
    { type: "dialogue", character: "زاريف", content: "غريب." },
    { type: "dialogue", character: "فالدريك", content: "لماذا؟" },
    { type: "dialogue", character: "زاريف", content: "شخص ضعيف هكذا…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "زاريف", content: "كيف تجرأ؟" },

    { type: "scene-break", content: "النقاش" },
    { type: "dialogue", character: "كورفيس", content: "ربما غبي." },
    { type: "dialogue", character: "ليزارا", content: "أو مجنون." },
    { type: "dialogue", character: "دوركان", content: "أو يائس." },
    { type: "narration", content: "زاريف قال بهدوء." },
    { type: "dialogue", character: "زاريف", content: "أو…" },
    { type: "narration", content: "صمت قليلا." },
    { type: "dialogue", character: "زاريف", content: "ليس ضعيفا كما يبدو." },
    { type: "narration", content: "الجميع نظر إليه." },
    { type: "dialogue", character: "ليزارا", content: "تظن ذلك؟" },
    { type: "dialogue", character: "زاريف", content: "مملكة كاغيتسورا قوية." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "زاريف", content: "حتى الشياطين يفكرون قبل استفزازها." },
    { type: "dialogue", character: "دوركان", content: "صحيح." },
    { type: "dialogue", character: "زاريف", content: "لكن هذا الرجل…" },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "زاريف", content: "فعلها." },

    { type: "scene-break", content: "فكرة مثيرة" },
    { type: "narration", content: "فالدريك ضرب الطاولة بخفة." },
    { type: "dialogue", character: "فالدريك", content: "إذن؟" },
    { type: "dialogue", character: "ليزارا", content: "أنا فضولية." },
    { type: "dialogue", character: "دوركان", content: "أنا أيضا." },
    { type: "dialogue", character: "زاريف", content: "ربما يجب أن نراقبه." },
    { type: "dialogue", character: "كورفيس", content: "لماذا؟" },
    { type: "narration", content: "زاريف ابتسم." },
    { type: "dialogue", character: "زاريف", content: "لأن البشر الضعفاء…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "زاريف", content: "لا يصنعون ضجة هكذا." },

    { type: "scene-break", content: "النهاية" },
    { type: "narration", content: "فالدريك نهض ببطء." },
    { type: "dialogue", character: "فالدريك", content: "حسنا." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "فالدريك", content: "راقبوه." },
    { type: "narration", content: "ليزارا ابتسمت." },
    { type: "dialogue", character: "ليزارا", content: "بكل سرور." },
    { type: "dialogue", character: "زاريف", content: "ياماتو…" },
    { type: "narration", content: "ثم همس." },
    { type: "whisper", character: "زاريف", content: "لنر إن كنت مجرد حشرة… أم شيئا أكثر إثارة." },
    { type: "narration", content: "النار البنفسجية اشتعلت بقوة." },
    { type: "narration", content: "والاجتماع…" },
    { type: "narration", content: "انتهى." },

    { type: "chapter-end", content: "— نهاية الفصل السابع — الجزء الثاني —" }
  ]
},
{
  id: 30,
  title: "الجزء الأول",
  subtitle: "أخبار غريبة",
  sections: [
    { type: "scene-break", content: "في قرية كوزوها" },
    { type: "narration", content: "كانت الساحة الصغيرة في القرية هادئة." },
    { type: "narration", content: "عدة رجال يجلسون قرب الشجرة الكبيرة." },
    { type: "narration", content: "امرأة تحمل سلة خضار." },
    { type: "narration", content: "وأطفال يلعبون قرب البئر." },
    { type: "narration", content: "لكن الحديث بينهم كان عن شخص واحد." },
    { type: "narration", content: "ياماتو." },

    { type: "scene-break", content: "حديث أهل القرية" },
    { type: "narration", content: "الرجل الأول قال وهو يشرب الماء." },
    { type: "dialogue", character: "الرجل", content: "إذن… لم يعد؟" },
    { type: "narration", content: "الرجل الثاني هز رأسه." },
    { type: "dialogue", character: "الرجل", content: "لا." },
    { type: "dialogue", character: "المرأة", content: "مر يومان." },
    { type: "dialogue", character: "الرجل", content: "ربما ذهب بعيدا." },
    { type: "dialogue", character: "الرجل", content: "إلى أين سيذهب؟" },
    { type: "dialogue", character: "الرجل", content: "لا أعلم." },
    { type: "narration", content: "طفل صغير سأل." },
    { type: "dialogue", character: "الطفل", content: "أين ذهب ياماتو؟" },
    { type: "narration", content: "الأم أمسكت بيده." },
    { type: "dialogue", character: "الأم", content: "العب فقط." },
    { type: "dialogue", character: "الطفل", content: "لكن كان يضحكني." },

    { type: "scene-break", content: "تغير المشاعر" },
    { type: "dialogue", character: "الرجل", content: "غريب…" },
    { type: "dialogue", character: "الرجل", content: "ماذا؟" },
    { type: "dialogue", character: "الرجل", content: "كنت غاضبا منه." },
    { type: "dialogue", character: "الرجل", content: "الجميع كان كذلك." },
    { type: "dialogue", character: "الرجل", content: "لكن…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "الرجل", content: "لم أره يفعل شيئا سيئا طوال حياته." },
    { type: "dialogue", character: "المرأة", content: "صحيح." },
    { type: "dialogue", character: "الرجل", content: "ياماتو كان أحمق…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "الرجل", content: "لكن ليس شخصا سيئا." },
    { type: "narration", content: "صمت قصير." },

    { type: "scene-break", content: "تاكيو" },
    { type: "narration", content: "وقف تاكيو قرب باب منزله." },
    { type: "narration", content: "كان يسمع الحديث." },
    { type: "dialogue", character: "الرجل", content: "تاكيو." },
    { type: "dialogue", character: "تاكيو", content: "ماذا؟" },
    { type: "dialogue", character: "الرجل", content: "هل تعتقد أنه فعل ذلك فعلا؟" },
    { type: "narration", content: "تاكيو صمت." },
    { type: "narration", content: "الناس ينتظرون." },
    { type: "narration", content: "تاكيو تنهد." },
    { type: "dialogue", character: "تاكيو", content: "لا أعلم." },
    { type: "dialogue", character: "المرأة", content: "طردناه بسرعة." },
    { type: "dialogue", character: "الرجل", content: "كنا غاضبين." },
    { type: "dialogue", character: "الطفل", content: "الأطفال رموا عليه حجارة." },
    { type: "narration", content: "الأم نظرت إليه بسرعة." },
    { type: "dialogue", character: "الأم", content: "اصمت." },

    { type: "scene-break", content: "شك صغير" },
    { type: "dialogue", character: "الرجل", content: "هل يجب أن نبحث عنه؟" },
    { type: "dialogue", character: "الرجل", content: "تبحث عن متحرش؟" },
    { type: "dialogue", character: "الرجل", content: "أو ربما…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "الرجل", content: "شخص مظلوم." },
    { type: "narration", content: "الصمت عاد مرة أخرى." },
    { type: "narration", content: "تاكيو نظر إلى الطريق البعيد." },
    { type: "whisper", character: "تاكيو", content: "أين ذهبت يا ياماتو…" },

    { type: "scene-break", content: "العودة إلى مدينة الأقزام" },
    { type: "narration", content: "داخل ساحة التدريب الحجرية." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "عصا ضربت الأرض." },
    { type: "dialogue", character: "غارون", content: "انهض." },
    { type: "narration", content: "ياماتو كان مستلقيا على الأرض." },
    { type: "dialogue", character: "ياماتو", content: "أنا لا أستطيع." },
    { type: "dialogue", character: "غارون", content: "كذبة." },
    { type: "dialogue", character: "ياماتو", content: "ليست كذبة." },
    { type: "dialogue", character: "غارون", content: "انهض." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "جسدي يؤلمني." },
    { type: "dialogue", character: "غارون", content: "جسدك ضعيف." },
    { type: "dialogue", character: "ياماتو", content: "أعرف." },

    { type: "scene-break", content: "التدريب الكوميدي" },
    { type: "narration", content: "وقف ياماتو بصعوبة." },
    { type: "narration", content: "رفع العصا." },
    { type: "narration", content: "غارون هجم." },
    { type: "combat", content: "ووش!" },
    { type: "narration", content: "ياماتو حاول الدفاع." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "سقط أرضا." },
    { type: "shout", character: "ياماتو", content: "آه!" },
    { type: "dialogue", character: "غارون", content: "سيء." },
    { type: "dialogue", character: "ياماتو", content: "أنا أتدرب منذ أسبوع!" },
    { type: "dialogue", character: "غارون", content: "ما زلت سيئا." },
    { type: "dialogue", character: "ياماتو", content: "هذا غير مشجع." },

    { type: "scene-break", content: "أقزام يراقبون" },
    { type: "narration", content: "عدة أقزام كانوا يشاهدون التدريب." },
    { type: "dialogue", character: "تورك", content: "كم مرة سقط اليوم؟" },
    { type: "dialogue", character: "القزم", content: "اثنتان وثلاثون." },
    { type: "dialogue", character: "القزم", content: "لا." },
    { type: "dialogue", character: "القزم", content: "أربع وثلاثون." },
    { type: "narration", content: "ياماتو صرخ من الأرض." },
    { type: "shout", character: "ياماتو", content: "أنا أسمعكم!" },
    { type: "dialogue", character: "تورك", content: "إذن انهض." },
    { type: "dialogue", character: "ياماتو", content: "أكرهكم جميعا." },
    { type: "dialogue", character: "القزم", content: "نحن نعرف." },

    { type: "scene-break", content: "محاولة جديدة" },
    { type: "narration", content: "وقف ياماتو مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "هذه المرة سأفوز." },
    { type: "dialogue", character: "غارون", content: "لا." },
    { type: "dialogue", character: "ياماتو", content: "دعني أحلم." },
    { type: "narration", content: "غارون هجم." },
    { type: "combat", content: "ووش!" },
    { type: "narration", content: "ياماتو قفز للخلف." },
    { type: "narration", content: "تفادى الضربة." },
    { type: "narration", content: "الأقزام توقفوا." },
    { type: "dialogue", character: "تورك", content: "همم." },
    { type: "narration", content: "غارون رفع حاجبه." },
    { type: "dialogue", character: "غارون", content: "مرة أخرى." },
    { type: "shout", character: "ياماتو", content: "رأيتم؟!" },
    { type: "dialogue", character: "تورك", content: "حظ." },
    { type: "dialogue", character: "ياماتو", content: "ليس حظ!" },
    { type: "narration", content: "غارون هجم مرة أخرى." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "ياماتو سقط مجددا." },
    { type: "shout", character: "ياماتو", content: "آه!" },
    { type: "dialogue", character: "تورك", content: "كان حظا." },
    { type: "dialogue", character: "ياماتو", content: "اصمت." },

    { type: "scene-break", content: "مزاح الأقزام" },
    { type: "dialogue", character: "القزم", content: "هذا البشري مسلي." },
    { type: "dialogue", character: "القزم", content: "نعم." },
    { type: "dialogue", character: "تورك", content: "لكنه يتحسن." },
    { type: "dialogue", character: "القزم", content: "قليلا." },
    { type: "narration", content: "ياماتو من الأرض." },
    { type: "dialogue", character: "ياماتو", content: "أنا أسمعكم أيضا." },
    { type: "dialogue", character: "تورك", content: "جيد." },
    { type: "dialogue", character: "ياماتو", content: "توقفوا عن العد." },
    { type: "dialogue", character: "القزم", content: "سقطت خمس وثلاثين مرة الآن." },
    { type: "dialogue", character: "ياماتو", content: "أنتم أشرار." },

    { type: "scene-break", content: "نهاية التدريب" },
    { type: "narration", content: "جلس ياماتو على الأرض يلهث." },
    { type: "dialogue", character: "ياماتو", content: "أخبرني شيئا." },
    { type: "dialogue", character: "غارون", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "كم سنة سأحتاج لأصبح قويا؟" },
    { type: "narration", content: "غارون فكر قليلا." },
    { type: "dialogue", character: "غارون", content: "كثير." },
    { type: "dialogue", character: "ياماتو", content: "هذا غير محدد." },
    { type: "dialogue", character: "غارون", content: "سنرى." },
    { type: "dialogue", character: "ياماتو", content: "إجابة مدرب كسول." },
    { type: "dialogue", character: "غارون", content: "اضرب الأرض عشرين مرة." },
    { type: "dialogue", character: "ياماتو", content: "كنت أمزح." },

    { type: "scene-break", content: "لحظة هدوء" },
    { type: "narration", content: "وقف ياماتو ببطء." },
    { type: "narration", content: "رفع العصا مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "حسنا." },
    { type: "narration", content: "ثم ابتسم قليلا." },
    { type: "dialogue", character: "ياماتو", content: "لن أستسلم." },
    { type: "dialogue", character: "تورك", content: "سنرى." },
    { type: "dialogue", character: "ياماتو", content: "سترون." },
    { type: "narration", content: "ثم ضرب الأرض بقوة." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "لكن في تلك اللحظة…" },
    { type: "narration", content: "لمح غارون شيئا غريبا." },
    { type: "narration", content: "هالة خفيفة." },
    { type: "narration", content: "اختفت بسرعة." },
    { type: "narration", content: "غارون ضيق عينيه." },
    { type: "dialogue", character: "غارون", content: "همم…" },
    { type: "dialogue", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "غارون", content: "لا شيء." },
    { type: "narration", content: "لكن في داخله…" },
    { type: "narration", content: "بدأ يشك." },
    { type: "narration", content: "أن هذا البشري…" },
    { type: "narration", content: "ليس عاديا." },

    { type: "chapter-end", content: "— نهاية الفصل الثامن — الجزء الأول —" }
  ]
},
{
  id: 31,
  title: "الجزء الثاني",
  subtitle: "يوم الراحة",
  sections: [
    { type: "scene-break", content: "نهاية التدريب" },
    { type: "narration", content: "كانت الساحة الحجرية مليئة بصوت الاصطدام." },
    { type: "combat", content: "طَق! طَق! طَق!" },
    { type: "narration", content: "ياماتو يلهث." },
    { type: "narration", content: "عرق يغطي وجهه." },
    { type: "narration", content: "غارون وقف أمامه." },
    { type: "dialogue", character: "غارون", content: "مرة أخرى." },
    { type: "dialogue", character: "ياماتو", content: "لا…" },
    { type: "dialogue", character: "غارون", content: "مرة أخرى." },
    { type: "narration", content: "ياماتو رفع العصا." },
    { type: "dialogue", character: "ياماتو", content: "جسدي مات." },
    { type: "dialogue", character: "غارون", content: "اضرب." },
    { type: "narration", content: "ياماتو ضرب." },
    { type: "combat", content: "طَق!" },
    { type: "narration", content: "تراجع خطوة." },
    { type: "narration", content: "غارون نظر إليه." },
    { type: "dialogue", character: "غارون", content: "جيد." },
    { type: "narration", content: "ياماتو رفع رأسه." },
    { type: "dialogue", character: "ياماتو", content: "حقا؟" },
    { type: "dialogue", character: "غارون", content: "نعم." },
    { type: "dialogue", character: "ياماتو", content: "هذه أول مرة تقول ذلك." },
    { type: "narration", content: "تورك كان يقف خلفهم." },
    { type: "dialogue", character: "تورك", content: "لا تفرح." },
    { type: "dialogue", character: "ياماتو", content: "دعني أفرح." },
    { type: "dialogue", character: "تورك", content: "التدريب انتهى." },
    { type: "dialogue", character: "ياماتو", content: "انتهى؟" },
    { type: "dialogue", character: "غارون", content: "اليوم." },
    { type: "narration", content: "ياماتو فتح عينيه." },
    { type: "dialogue", character: "ياماتو", content: "انتظر…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هل هذا يعني…" },
    { type: "dialogue", character: "غارون", content: "راحة." },
    { type: "shout", character: "ياماتو", content: "راحة؟!" },
    { type: "narration", content: "ياماتو سقط على الأرض." },
    { type: "dialogue", character: "ياماتو", content: "أخيرا." },

    { type: "scene-break", content: "إعلان غارون" },
    { type: "narration", content: "غارون نظر إلى الأقزام حوله." },
    { type: "dialogue", character: "غارون", content: "البشري." },
    { type: "narration", content: "ياماتو رفع يده." },
    { type: "dialogue", character: "ياماتو", content: "أنا هنا." },
    { type: "dialogue", character: "غارون", content: "ستذهب إلى الملك." },
    { type: "narration", content: "ياماتو جلس بسرعة." },
    { type: "dialogue", character: "ياماتو", content: "الملك؟" },
    { type: "dialogue", character: "تورك", content: "يبدو أنك نجوت." },
    { type: "dialogue", character: "ياماتو", content: "نجوت؟" },
    { type: "dialogue", character: "تورك", content: "الكثير من البشر كانوا سيموتون هنا." },
    { type: "narration", content: "ياماتو ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "أنا عنيد." },
    { type: "dialogue", character: "تورك", content: "نعم." },

    { type: "scene-break", content: "الطريق إلى الملك" },
    { type: "narration", content: "مشى ياماتو مع غارون عبر المدينة." },
    { type: "narration", content: "الأقزام في السوق نظروا إليه." },
    { type: "narration", content: "لكن هذه المرة…" },
    { type: "narration", content: "النظرات مختلفة." },
    { type: "dialogue", character: "القزم", content: "هذا البشري ما زال حيا." },
    { type: "dialogue", character: "القزم", content: "غريب." },
    { type: "dialogue", character: "القزمة", content: "عمل في المنجم جيدا." },
    { type: "narration", content: "ياماتو همس لغارون." },
    { type: "whisper", character: "ياماتو", content: "هل… هذا مدح؟" },
    { type: "dialogue", character: "غارون", content: "تقريبا." },
    { type: "dialogue", character: "ياماتو", content: "أحب هذا المكان." },

    { type: "scene-break", content: "قاعة الملك" },
    { type: "narration", content: "دخلوا القاعة الكبيرة." },
    { type: "narration", content: "الملك بروندور كان جالسا على العرش." },
    { type: "narration", content: "رفع رأسه عندما دخلوا." },
    { type: "dialogue", character: "بروندور", content: "البشري." },
    { type: "narration", content: "ياماتو رفع يده." },
    { type: "dialogue", character: "ياماتو", content: "مرحبا." },
    { type: "narration", content: "غارون ضرب كتفه." },
    { type: "dialogue", character: "غارون", content: "انحنِ." },
    { type: "dialogue", character: "ياماتو", content: "آه." },
    { type: "narration", content: "انحنى بسرعة." },
    { type: "dialogue", character: "ياماتو", content: "مرحبا مرة أخرى." },

    { type: "scene-break", content: "شم الحقيقة" },
    { type: "narration", content: "بروندور نهض من عرشه." },
    { type: "narration", content: "اقترب ببطء." },
    { type: "narration", content: "وقف أمام ياماتو." },
    { type: "narration", content: "ثم…" },
    { type: "narration", content: "شم الهواء." },
    { type: "narration", content: "ياماتو تنهد." },
    { type: "dialogue", character: "ياماتو", content: "مرة أخرى؟" },
    { type: "dialogue", character: "غارون", content: "اصمت." },
    { type: "narration", content: "بروندور بقي صامتا لحظة." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "ما زلت أشم نفس الشيء." },
    { type: "dialogue", character: "تورك", content: "الصدق." },
    { type: "dialogue", character: "غارون", content: "والإصرار." },
    { type: "narration", content: "الملك نظر إلى ياماتو." },
    { type: "dialogue", character: "بروندور", content: "والفخر." },
    { type: "dialogue", character: "ياماتو", content: "فخر؟" },
    { type: "dialogue", character: "بروندور", content: "نعم." },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "رغم الإهانة…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "لم تكذب." },
    { type: "narration", content: "ياماتو صمت." },

    { type: "scene-break", content: "لحظة الاعتراف" },
    { type: "narration", content: "الملك عاد إلى عرشه." },
    { type: "narration", content: "ثم قال بصوت عال." },
    { type: "dialogue", character: "بروندور", content: "الأقزام." },
    { type: "narration", content: "القاعة صمتت." },
    { type: "narration", content: "الملك أشار إلى ياماتو." },
    { type: "dialogue", character: "بروندور", content: "هذا البشري…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "صادق." },
    { type: "narration", content: "همسات بين الأقزام." },
    { type: "dialogue", character: "بروندور", content: "وعنيد." },
    { type: "dialogue", character: "تورك", content: "صحيح." },
    { type: "dialogue", character: "بروندور", content: "وعمل بجد." },
    { type: "narration", content: "غارون هز رأسه." },
    { type: "narration", content: "الملك ابتسم قليلا." },
    { type: "dialogue", character: "بروندور", content: "لذلك…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "بروندور", content: "أقبله بيننا." },
    { type: "narration", content: "ياماتو تجمد." },
    { type: "shout", character: "ياماتو", content: "ماذا؟" },
    { type: "dialogue", character: "تورك", content: "مبروك." },
    { type: "shout", character: "ياماتو", content: "حقا؟!" },

    { type: "scene-break", content: "الوجه الكوميدي للملك" },
    { type: "narration", content: "فجأة…" },
    { type: "narration", content: "ضحك الملك بصوت عال." },
    { type: "narration", content: "الملك رفع يده." },
    { type: "shout", character: "بروندور", content: "إذن!" },
    { type: "narration", content: "ثم قال." },
    { type: "shout", character: "بروندور", content: "لنحتفل!" },
    { type: "narration", content: "الأقزام نظروا إليه." },
    { type: "dialogue", character: "بروندور", content: "لدينا بشري جديد!" },
    { type: "narration", content: "تورك ضحك." },
    { type: "dialogue", character: "تورك", content: "أول مرة منذ سنوات." },
    { type: "dialogue", character: "القزم", content: "يجب أن نشرب." },
    { type: "dialogue", character: "القزم", content: "ونأكل." },
    { type: "narration", content: "ياماتو وقف مذهولا." },
    { type: "dialogue", character: "ياماتو", content: "انتظر…" },
    { type: "narration", content: "ثم قال." },
    { type: "dialogue", character: "ياماتو", content: "هل… تقصدون احتفالا حقيقيا؟" },
    { type: "dialogue", character: "بروندور", content: "بالطبع!" },
    { type: "narration", content: "ياماتو ابتسم لأول مرة بصدق." },
    { type: "dialogue", character: "ياماتو", content: "هذا أفضل يوم منذ مدة طويلة." },
    { type: "dialogue", character: "غارون", content: "لا تعتد على الراحة." },
    { type: "dialogue", character: "ياماتو", content: "دعني أستمتع بها اليوم." },
    { type: "dialogue", character: "تورك", content: "غدا تعود للمنجم." },
    { type: "dialogue", character: "ياماتو", content: "كنت أعرف." },

    { type: "scene-break", content: "أول سعادة" },
    { type: "narration", content: "جلس ياماتو بين الأقزام." },
    { type: "narration", content: "الضحك يملأ القاعة." },
    { type: "narration", content: "النار تشتعل." },
    { type: "narration", content: "الأصوات عالية." },
    { type: "narration", content: "ياماتو نظر حوله." },
    { type: "dialogue", character: "ياماتو", content: "غريب…" },
    { type: "dialogue", character: "تورك", content: "ماذا؟" },
    { type: "dialogue", character: "ياماتو", content: "هذه أول مرة…" },
    { type: "narration", content: "ثم ابتسم." },
    { type: "dialogue", character: "ياماتو", content: "أشعر أنني مرحب بي." },
    { type: "narration", content: "تورك ضرب كتفه." },
    { type: "dialogue", character: "تورك", content: "لا تتعود." },
    { type: "narration", content: "ياماتو ضحك." },
    { type: "dialogue", character: "ياماتو", content: "سأحاول." },
    { type: "narration", content: "لكن في داخله…" },
    { type: "narration", content: "كانت هذه اللحظة." },
    { type: "narration", content: "أول لحظة سعادة…" },
    { type: "ending-narration", content: "منذ وقت طويل." },

    { type: "chapter-end", content: "— نهاية الفصل الثامن —" }
  ]
},
];

// ============================================================
// NORMALIZE ALL CHAPTERS ON LOAD
// ============================================================
chapters.forEach(ch => {
  ch.sections = normalizeSections(ch.sections);
});

// ============================================================
// CANVAS + PARTICLES
// ============================================================
function resizeCanvas() { sparkCanvas.width = window.innerWidth; sparkCanvas.height = window.innerHeight; }
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

function spawnSparks(x, y, count, color, spread, options = {}) {
  const { upwardBias = 2, gravity = 0.05, minSize = 1, maxSize = 3, minDecay = 0.01, maxDecay = 0.03, horizontalScale = 1, verticalScale = 1 } = options;
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 1 + Math.random() * spread;
    sparks.push({ x, y, vx: Math.cos(angle) * speed * horizontalScale, vy: Math.sin(angle) * speed * verticalScale - upwardBias, gravity, life: 1, decay: minDecay + Math.random() * (maxDecay - minDecay), size: minSize + Math.random() * (maxSize - minSize), color });
  }
  if (!animatingSparkles) { animatingSparkles = true; requestAnimationFrame(animateSparks); }
}

function spawnDirectionalShards(x, y, count, color, minSpeed, maxSpeed, angleStart, angleEnd, options = {}) {
  const { gravity = 0.02, minSize = 2.5, maxSize = 6, minDecay = 0.012, maxDecay = 0.02 } = options;
  for (let i = 0; i < count; i++) {
    const angle = angleStart + Math.random() * (angleEnd - angleStart);
    const speed = minSpeed + Math.random() * (maxSpeed - minSpeed);
    sparks.push({ x, y, vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed, gravity, life: 1, decay: minDecay + Math.random() * (maxDecay - minDecay), size: minSize + Math.random() * (maxSize - minSize), color, shape: 'shard' });
  }
  if (!animatingSparkles) { animatingSparkles = true; requestAnimationFrame(animateSparks); }
}

function animateSparks() {
  sparkCtx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);
  sparks = sparks.filter(s => s.life > 0);
  sparks.forEach(s => {
    s.x += s.vx; s.y += s.vy; s.vy += (s.gravity ?? 0.05); s.life -= s.decay;
    sparkCtx.globalAlpha = s.life; sparkCtx.fillStyle = s.color; sparkCtx.shadowBlur = 10; sparkCtx.shadowColor = s.color;
    if (s.shape === 'shard') {
      const size = s.size * Math.max(0.35, s.life); const angle = Math.atan2(s.vy, s.vx);
      sparkCtx.save(); sparkCtx.translate(s.x, s.y); sparkCtx.rotate(angle);
      sparkCtx.beginPath(); sparkCtx.moveTo(size, 0); sparkCtx.lineTo(-size * 0.7, size * 0.45); sparkCtx.lineTo(-size * 0.45, 0); sparkCtx.lineTo(-size * 0.7, -size * 0.45); sparkCtx.closePath(); sparkCtx.fill(); sparkCtx.restore();
    } else { sparkCtx.beginPath(); sparkCtx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2); sparkCtx.fill(); }
  });
  sparkCtx.globalAlpha = 1; sparkCtx.shadowBlur = 0;
  if (sparks.length > 0) requestAnimationFrame(animateSparks); else animatingSparkles = false;
}

function createParticles() {
  const container = document.getElementById('particles'); container.innerHTML = '';
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div'); p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDelay = (Math.random() * 8) + 's';
    p.style.animationDuration = (6 + Math.random() * 6) + 's';
    container.appendChild(p);
  }
}

function createIceBurst() {
  for (let i = 0; i < 16; i++) {
    const crystal = document.createElement('div'); crystal.className = 'ice-crystal';
    crystal.style.left = `${(window.innerWidth / 2) + (Math.random() - 0.5) * 260}px`;
    crystal.style.top = `${(window.innerHeight / 2) + (Math.random() - 0.5) * 150}px`;
    crystal.style.transform = `rotate(45deg) scale(${0.8 + Math.random() * 1.6})`;
    crystal.style.animationDelay = `${Math.random() * 0.35}s`;
    document.body.appendChild(crystal);
    setTimeout(() => crystal.remove(), 2600);
  }
}

// ============================================================
// FX TRIGGERS
// ============================================================
function triggerExplosion() {
  const el = document.getElementById('fxExplosion');
  el.classList.remove('active'); void el.offsetWidth; el.classList.add('active');
  const mc = document.getElementById('mainContent');
  mc.classList.add('shake-heavy'); setTimeout(() => mc.classList.remove('shake-heavy'), 600);
  spawnSparks(window.innerWidth / 2, window.innerHeight / 2, 60, '#ff8833', 6);
  spawnSparks(window.innerWidth / 2, window.innerHeight / 2, 30, '#ffcc44', 4);
}
function triggerFire() {
  const el = document.getElementById('fxFire');
  el.classList.remove('active'); void el.offsetWidth; el.classList.add('active');
  const mc = document.getElementById('mainContent');
  mc.classList.add('shake-light'); setTimeout(() => mc.classList.remove('shake-light'), 400);
  for (let i = 0; i < 5; i++) spawnSparks(Math.random() * window.innerWidth, window.innerHeight, 15, '#ff6b35', 3);
}
function triggerIce() {
  const el = document.getElementById('fxIce');
  el.classList.remove('active'); void el.offsetWidth; el.classList.add('active');
  const mc = document.getElementById('mainContent');
  mc.classList.add('shake-heavy'); setTimeout(() => mc.classList.remove('shake-heavy'), 560);
  const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
  spawnSparks(cx, cy, 36, '#ffffff', 1.8, { upwardBias: 0.8, gravity: 0.012 });
  spawnSparks(cx, cy, 44, '#dffcff', 2.4, { upwardBias: 0.6, gravity: 0.015 });
  spawnSparks(cx, cy, 56, '#6be5ff', 3.2, { upwardBias: 0.2, gravity: 0.018 });
  createIceBurst();
}
function triggerCombatShake() {
  const mc = document.getElementById('mainContent');
  mc.classList.add('shake-combat'); setTimeout(() => mc.classList.remove('shake-combat'), 500);
  spawnSparks(window.innerWidth / 2 + (Math.random() - 0.5) * 200, window.innerHeight / 2, 10, '#ff8833', 2);
}

function assignFX(sections) {
  Object.keys(FX_MAP).forEach(key => delete FX_MAP[key]);

  sections.forEach((s, i) => {
    const txt = s.content || '';

    if (s.type === 'combat') {
      if (
        txt.includes('انفجار') ||
        txt.includes('بووم') ||
        txt.includes('بوووم')
      ) {
        FX_MAP[i] = 'explosion';
      } else if (txt.includes('نار')) {
        FX_MAP[i] = 'fire';
      } else {
        FX_MAP[i] = 'combat';
      }
    }

    if (s.type === 'ice-combat') FX_MAP[i] = 'ice';

    if (s.type === 'skill') {
      if (txt.includes('جليد') || txt.includes('ثلج') || txt.includes('صقيع')) {
        FX_MAP[i] = 'ice';
      } else if (txt.includes('نار') || txt.includes('لهب') || txt.includes('حريق')) {
        FX_MAP[i] = 'fire';
      } else if (txt.includes('انفجار') || txt.includes('تفجير')) {
        FX_MAP[i] = 'explosion';
      } else {
        FX_MAP[i] = 'combat';
      }
    }

    if (s.type === 'shout') FX_MAP[i] = 'shake-light';
  });
}

// ============================================================
// HELPERS
// ============================================================
function isDemonCharacter(name) { return DEMON_CHARACTERS.has(name); }
function escapeRegExp(text) { return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

function colorizeText(text) {
  if (!text) return '';
  let result = text;
  const names = Object.keys(CHAR_COLORS).sort((a, b) => b.length - a.length);
  for (const name of names) {
    const color = CHAR_COLORS[name];
    const extraClass = isDemonCharacter(name) ? ' demon-name' : '';
    const regex = new RegExp(`(^|[\\s\\n\\r.,!?:;،۔"«»()\\[\\]{}\\-])(${escapeRegExp(name)})(?=([\\s\\n\\r.,!?:;،۔"«»()\\[\\]{}\\-]|$))`, 'gu');
    result = result.replace(regex, `$1<span class="char-name${extraClass}" style="color:${color};text-shadow:0 0 12px ${color}33">$2</span>`);
  }
  return result;
}

function processRanks(text) {
  if (!text) return '';
  return text.replace(/(SSS|SS|S|A|B|C|D|E|F)\./g, (match, rank) => `<span class="rank-badge rank-${rank}">Rank ${rank}</span>.`);
}

// ============================================================
// getPartLabel
// ============================================================
function getPartLabel(id){

  const parts = {

    1: "الفصل الأول - الجزء الأول",
    2: "الفصل الأول - الجزء الثاني",
    3: "الفصل الأول - الجزء الثالث",
    4: "الفصل الأول - الجزء الرابع",
    5: "الفصل الأول - الجزء الخامس",

    6: "الفصل الثاني - الجزء الأول",
    7: "الفصل الثاني - الجزء الثاني",
    8: "الفصل الثاني - الجزء الثالث",
    9: "الفصل الثاني - الجزء الرابع",
    10: "الفصل الثاني - الجزء الخامس",

    11: "الفصل الثالث - الجزء الأول",
    12: "الفصل الثالث - الجزء الثاني",
    13: "الفصل الثالث - الجزء الثالث",
    14: "الفصل الثالث - الجزء الرابع",
    15: "الفصل الثالث - الجزء الخامس",

    16: "الفصل الرابع - الجزء الأول",
 17: "الفصل الرابع - الجزء الثاني",
18: "الفصل الرابع - الجزء الثالث",
19: "الفصل الرابع - الجزء الرابع",
20: "الفصل الرابع - الجزء الخامس",
21: "الفصل الخامس - الجزء الأول",
22: "الفصل الخامس - الجزء الثاني",
23: "الفصل السادس - الجزء الأول",
24: "الفصل السادس - الجزء الثاني",
25: "الفصل السادس - الجزء الثالث",
26: "الفصل السادس - الجزء الرابع",
27: "الفصل السادس - الجزء الخامس",
28: "الفصل السابع - الجزء الأول",
29: "الفصل السابع - الجزء الثاني",
30: "الفصل الثامن - الجزء الأول",
31: "الفصل الثامن - الجزء الثاني",

  };

  return parts[id] || "فصل غير معروف";
}

function updateChapterButtons() { document.querySelectorAll('.chapter-item').forEach((item, index) => item.classList.toggle('active', index === currentChapterIndex)); }

function buildChapterList() {
  const cl = document.getElementById('chapterList'); if (!cl) return;
  cl.innerHTML = chapters.map((ch, i) => {
const labelId = ch.id ?? (i + 1);
return `<button class="chapter-item" type="button" data-index="${i}"><div>${getPartLabel(labelId)}</div><div style="font-weight:700">${ch.title}</div><div style="font-size:12px;opacity:0.6">${ch.subtitle || ''}</div></button>`;
  }).join('');
  updateChapterButtons();
}

function getRankColor(rank = '') {
  return { "SS": "#a855f7", "S": "#f43f5e", "A": "#f59e0b", "B": "#d946ef", "C": "#06b6d4", "D": "#3b82f6", "E": "#22c55e", "F": "#8a9bb0" }[rank] || "#6b7280";
}
function getFameColorByPower(pl = 0, d = false) {
  if (d || pl >= 450) return "#9333ea"; if (pl >= 380) return "#be123c"; if (pl >= 300) return "#c2410c"; if (pl >= 220) return "#a16207"; if (pl >= 150) return "#15803d"; return "#4b5e73";
}
function getCardVars(profile, name) {
  const cc = CHAR_COLORS[name] || "#cbd5e1", rc = getRankColor(profile.rank), fc = getFameColorByPower(profile.powerLevel, isDemonCharacter(name));
  return { charColor: cc, rankColor: rc, fameColor: fc,
    bgTop: `color-mix(in srgb, ${cc} 14%, rgba(8,11,20,.96))`,
    bgBottom: `color-mix(in srgb, ${rc} 12%, rgba(4,6,12,.98))`
  };
}

function findMentionedCharacters(section) {
  const found = new Set();
  if (section.character && CHARACTER_PROFILES[section.character]) found.add(section.character);
  const combined = [section.content || '', section.description || ''].join(' ');
  const names = Object.keys(CHARACTER_PROFILES).sort((a, b) => b.length - a.length);
  for (const name of names) {
    if (new RegExp(`(^|[\\s.,!?:;،])(${escapeRegExp(name)})(?=[\\s.,!?:;،]|$)`, 'u').test(combined)) found.add(name);
  }
  return [...found];
}

// ============================================================
// ★ RENDER CHARACTER CARD — NEW DESIGN with banner + body split
// ============================================================
function renderCharacterCard(name, profile, idx) {
  const vars = getCardVars(profile, name);
  const powerLevel = profile.powerLevel ?? 0;
  const powerPct = (powerLevel / 500) * 100;

  return `
    <div class="character-card section" data-idx="${idx}" style="--card-char:${vars.charColor};--card-rank:${vars.rankColor};--card-fame:${vars.fameColor};--card-bg-top:${vars.bgTop};--card-bg-bottom:${vars.bgBottom};">
      <div class="character-card-bg">

        <!-- BANNER SECTION -->
        <div class="character-card-banner">
          <div class="card-rank-stripe"></div>
          <div class="card-element-dot"></div>

          <div class="character-card-top">
            <div>
              <div class="character-card-label">${profile.label || 'FIRST APPEARANCE'}</div>
              <div class="character-card-name">${name}</div>
              <div class="character-card-role">${profile.role || 'غير معروف'}</div>
            </div>
            <div class="character-card-badges">
              <span class="character-badge rank-badge-card">Rank ${profile.rank || '?'}</span>
              <span class="character-badge fame-badge-card">${profile.fame || 'غير معروفة'}</span>
            </div>
          </div>
        </div>

        <!-- BODY SECTION -->
        <div class="character-card-body">
          <div class="character-card-desc">${colorizeText(profile.desc || '')}</div>

          <div class="character-card-grid">
            <div class="character-stat"><div class="character-stat-label">العمر</div><div class="character-stat-value">${profile.age || '?'}</div></div>
            <div class="character-stat"><div class="character-stat-label">العنصر</div><div class="character-stat-value">${profile.affinity || '?'}</div></div>
            <div class="character-stat"><div class="character-stat-label">الحالة</div><div class="character-stat-value">${profile.status || '?'}</div></div>
            <div class="character-stat"><div class="character-stat-label">القوة</div><div class="character-stat-value">${powerLevel}/500</div></div>
          </div>

          ${profile.traits?.length ? `
            <div class="character-card-subtitle">السمات</div>
            <div class="character-traits">${profile.traits.map(t => `<span class="character-trait">${t}</span>`).join('')}</div>
          ` : ''}

          <div class="character-power-bar">
            <div class="power-bar-label"><span>مستوى القوة</span><span>${powerLevel}/500</span></div>
            <div class="power-bar-track"><div class="power-bar-fill" data-power="${powerPct}" style="width: 0%"></div></div>
          </div>
        </div>

      </div>
    </div>`;
}

// ============================================================
// RENDER SECTION
// ============================================================
function renderSection(s, idx) {
  const content = s.content || '';
  if (s.type === 'chapter-end') return `<div class="chapter-end-box section" data-idx="${idx}"><div class="chapter-end-text">${content}</div></div>`;
  if (s.type === 'scene-break') {
    if (content === '⟡') return `<div class="scene-break section" data-idx="${idx}"><div class="scene-break-symbol">${content}</div></div>`;
    return `<div class="scene-break section" data-idx="${idx}" style="margin:55px 0 35px"><div class="scene-break-title">${content}</div></div>`;
  }
  if (s.type === 'dialogue' || s.type === 'whisper' || s.type === 'shout') {
    const color = CHAR_COLORS[s.character] || '#ccc';
    const glow = `text-shadow:0 0 14px ${color}${s.type === 'shout' ? '55' : '33'}`;
    const extraClass = isDemonCharacter(s.character) ? 'demon-name' : '';
    const whisperTag = s.type === 'whisper' ? `<span class="whisper-tag">(همسا)</span>` : '';
    return `<div class="${s.type} section" data-idx="${idx}"><span class="char-name ${extraClass}" style="color:${color};${glow}">${s.character}</span>${whisperTag}<span class="dialogue-colon">:</span><span class="dialogue-text">${content}</span></div>`;
  }
  if (s.type === 'skill') {
  return `<div class="skill-text section" data-idx="${idx}">${colorizeText(content)}</div>`;
}
  if (s.type === 'thought') return `<div class="thought section" data-idx="${idx}">${colorizeText(content)}</div>`;
  if (s.type === 'ice-combat') return `<div class="ice-text section" data-idx="${idx}">${content}</div>`;
  if (s.type === 'combat') return `<div class="combat-text section" data-idx="${idx}">${content}</div>`;
  if (s.type === 'rank-mention') return `<div class="narration section" data-idx="${idx}">${processRanks(content)}</div>`;
  if (s.type === 'ending-narration') return `<div class="ending-narration section" data-idx="${idx}">${content}</div>`;
  return `<div class="narration section" data-idx="${idx}">${colorizeText(content)}</div>`;
}

// ============================================================
// RENDER CHAPTER — smooth chapter transition
// ============================================================
function renderChapter(chapterIndex, animate = true) {
  currentChapterIndex = chapterIndex;
  const ch = chapters[chapterIndex];
  const shownCards = new Set();
const partNumber = ch.id ?? (chapterIndex + 1);

  let html = `
    <div class="chapter-header" id="chapterHeaderEl">
      <div class="chapter-label">${getPartLabel(partNumber)}</div>
      <h1 class="chapter-title">${ch.title}</h1>
      <h2 class="chapter-subtitle">${ch.subtitle}</h2>
      <div class="chapter-divider"></div>
    </div>`;

  ch.sections.forEach((s, i) => {
    const mentions = findMentionedCharacters(s);
    for (const name of mentions) {
      if (!shownCards.has(name) && CHARACTER_PROFILES[name]) {
        html += renderCharacterCard(name, CHARACTER_PROFILES[name], i);
        shownCards.add(name);
      }
    }
    html += renderSection(s, i);
  });

  html += `
    <div class="nav-footer">
      <button class="nav-chapter-btn" onclick="prevChapter()" ${chapterIndex === 0 ? 'disabled' : ''}>البارت السابق</button>
      <button class="nav-chapter-btn" onclick="nextChapter()" ${chapterIndex === chapters.length - 1 ? 'disabled' : ''}>البارت التالي</button>
    </div>
    <div class="site-footer">
      <div class="footer-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-left:6px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Rank F: Void</div>
      <div class="footer-sub">رواية تفاعلية</div>
    </div>`;

  const mc = document.getElementById('mainContent');

  if (animate) {
    mc.classList.add('chapter-fade-out');
    setTimeout(() => {
      mc.innerHTML = html;
      assignFX(ch.sections);
      updateChapterButtons();
      window.scrollTo({ top: 0, behavior: 'instant' });
      requestAnimationFrame(() => {
        mc.classList.remove('chapter-fade-out');
        const h = document.getElementById('chapterHeaderEl');
        if (h) setTimeout(() => h.classList.add('ch-anim'), 80);
        setupObserver();
      });
    }, 550);
  } else {
    mc.innerHTML = html;
    assignFX(ch.sections);
    updateChapterButtons();
    const h = document.getElementById('chapterHeaderEl');
    if (h) setTimeout(() => h.classList.add('ch-anim'), 250);
    setupObserver();
  }
}

// ============================================================
// INTERSECTION OBSERVER — smooth staggered reveal
// ============================================================
function setupObserver() {
  if (observerInstance) observerInstance.disconnect();
  const sections = document.querySelectorAll('.section');

  observerInstance = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = Math.min(el.getBoundingClientRect().top / window.innerHeight * 180, 180);

      setTimeout(() => {
        el.classList.add('visible');

        // Animate power bars when card becomes visible
        const powerBar = el.querySelector('.power-bar-fill');
        if (powerBar) {
          setTimeout(() => { powerBar.style.width = powerBar.dataset.power + '%'; }, 400);
        }

        // Trigger FX
        const idx = parseInt(el.dataset.idx, 10);
        if (FX_MAP[idx] && !el.dataset.fxTriggered) {
          el.dataset.fxTriggered = 'true';
          setTimeout(() => {
            switch (FX_MAP[idx]) {
              case 'explosion': triggerExplosion(); break;
              case 'fire': triggerFire(); break;
              case 'ice': triggerIce(); break;
              case 'combat': triggerCombatShake(); break;
              case 'shake-light':
                document.getElementById('mainContent').classList.add('shake-light');
                setTimeout(() => document.getElementById('mainContent').classList.remove('shake-light'), 400);
                break;
            }
          }, 200);
        }
      }, delay);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  sections.forEach(s => observerInstance.observe(s));
}

// ============================================================
// CHAPTER NAVIGATION
// ============================================================
function goToChapter(index) {
  if (index < 0 || index >= chapters.length) return;
  document.getElementById('chapterList')?.classList.remove('open');
  renderChapter(index);
}
function nextChapter() { if (currentChapterIndex < chapters.length - 1) goToChapter(currentChapterIndex + 1); }
function prevChapter() { if (currentChapterIndex > 0) goToChapter(currentChapterIndex - 1); }

// ============================================================
// UI
// ============================================================
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  document.getElementById('themeToggle').textContent = document.body.classList.contains('light-mode') ? '🌙 ليلي' : '☀️ نهاري';
}
function toggleChapterList() { document.getElementById('chapterList').classList.toggle('open'); }

document.addEventListener('click', (e) => {
  const cl = document.getElementById('chapterList');
  if (cl.classList.contains('open') && !cl.contains(e.target) && !e.target.closest('.nav-btn')) cl.classList.remove('open');
});
document.getElementById('chapterList')?.addEventListener('click', (e) => {
  const item = e.target.closest('.chapter-item');
  if (!item) return;
  const index = Number(item.dataset.index);
  if (!Number.isNaN(index)) goToChapter(index);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') prevChapter();
  if (e.key === 'ArrowLeft') nextChapter();
});

// ============================================================
// SMOOTH PROGRESS BAR
// ============================================================
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const el = document.documentElement;
      const pct = (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      document.getElementById('progressFill').style.width = Math.min(100, pct) + '%';
      ticking = false;
    });
    ticking = true;
  }
}, { passive: true });

// ============================================================
// CINEMATIC OPENING
// ============================================================
function initOpening() {
  const overlay = document.getElementById('openingOverlay');
  const pc = document.getElementById('openingParticles');

  // Generate floating particles
  for (let i = 0; i < 35; i++) {
    const p = document.createElement('div');
    p.className = 'opening-particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.width = (2 + Math.random() * 3) + 'px';
    p.style.height = p.style.width;
    p.style.animationDelay = (Math.random() * 3) + 's';
    p.style.animationDuration = (3 + Math.random() * 5) + 's';
    p.style.background = Math.random() > 0.5 ? '#4d8aff' : '#a855f7';
    pc.appendChild(p);
  }

  // Fade out after cinematic plays
  setTimeout(() => {
    overlay.classList.add('fade-out');
    document.getElementById('topNav').classList.add('nav-visible');
    setTimeout(() => overlay.remove(), 1500);
  }, 3400);
}

// ============================================================
// INIT
// ============================================================
createParticles();
buildChapterList();
renderChapter(0, false);
initOpening();
