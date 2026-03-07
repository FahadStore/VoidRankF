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
  "الطلاب":"#cbd5e1"
};

const DEMON_CHARACTERS = new Set([]);


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
}
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
    if (s.type === 'combat') { if (s.content && s.content.includes('انفجار')) FX_MAP[i] = 'explosion'; else if (s.content && s.content.includes('نار')) FX_MAP[i] = 'fire'; else FX_MAP[i] = 'combat'; }
    if (s.type === 'ice-combat') FX_MAP[i] = 'ice';
    if (s.type === 'skill') FX_MAP[i] = 'skill';
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
