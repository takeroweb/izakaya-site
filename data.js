// 炉端酒場 灯り — 共通データ定義
const SITE_ID = 'izakaya';

const DEFAULT_DATA = {
  shop: {
    name_jp: '炉端酒場 灯り',
    name_en: 'Robata Izakaya AKARI',
    since: '2015',
    catch: '炭火と地の恵み、心温まる夜を',
    address: '〒850-0000\n長崎県長崎市浜町0-0\n路面電車「観光通り」電停すぐ',
    tel: '095-000-0000',
    hours_weekday: '17:00 – 24:00',
    hours_saturday: '16:00 – 25:00',
    closed: '日曜',
    access: '長崎電気軌道「観光通り」電停より徒歩1分\n長崎バス「浜町」停留所より徒歩2分',
    parking_note: '※近隣にコインパーキングがございます。',
    reservation_url: '',
    line: '',
    line_visible: false,
    instagram: '@akari_izakaya',
    instagram_visible: true,
    twitter: '',
    twitter_visible: false,
    tiktok: '',
    tiktok_visible: false,
    youtube: '',
    youtube_visible: false,
    facebook: '',
    facebook_visible: false,
    footer_desc: '炭火の温もりと\n長崎の旬を肴に\n今宵もゆっくりお過ごしください。'
  },
  hero: {
    eyebrow: 'Nagasaki · Since 2015',
    title_jp: '炉端酒場 灯り',
    title_en: 'Robata & Sake',
    description: '炭火でじっくり焼き上げた串と、長崎の旬を生かした肴。\n気のおけない仲間と、心ゆくまでご一緒に。',
    bg_image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80'
  },
  about: {
    eyebrow: 'Our Story',
    title: '炭火と手仕事が\n育てる、一夜の物語',
    p1: '長崎の中心部に根ざした「炉端酒場 灯り」は、備長炭の炉端を囲みながら旬の食材と向き合うことを大切にしています。',
    p2: '長崎近海で揚がった魚介、地元農家が育てた野菜、こだわりの焼酎と日本酒。シンプルだからこそ、素材の声が聞こえます。',
    p3: '仕事終わりの一杯に、大切な人との食事に。灯りを目印に、気軽に暖簾をくぐってください。',
    tags: '炭火焼き,長崎近海魚介,地酒・焼酎,カウンター席',
    image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=800&q=80'
  },
  concepts: [
    {
      title: '備長炭の炉端',
      text: '紀州備長炭のみを使い、食材の旨みを閉じ込めながら丁寧に焼き上げます。煙と炎が生み出す香ばしさは、ここだけの一皿。'
    },
    {
      title: '長崎の旬を肴に',
      text: '長崎港直送の新鮮な魚介と、島原・雲仙の農家から届く野菜。地元の豊かさをそのままお届けします。'
    },
    {
      title: '地酒・焼酎の品揃え',
      text: '長崎・壱岐の麦焼酎、鹿児島の芋焼酎、九州各地の地酒を常時30種以上。お好みに合わせてご提案します。'
    }
  ],
  menu: {
    categories: [
      {
        label: 'おすすめ',
        items: [
          { name: '刺身盛り合わせ', desc: '長崎港直送の旬魚を5種盛り。本日の仕入れによって内容が変わります。', price: '¥1,480', image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&q=80' },
          { name: '焼き鳥盛り合わせ（5本）', desc: '地鶏のもも・ねぎま・つくね・せせり・ぼんじりを備長炭で焼き上げた。', price: '¥880', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80' },
          { name: '炉端のだし巻き卵', desc: '職人が丁寧に焼き上げた出汁たっぷりのだし巻き玉子。大根おろし添え。', price: '¥480', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80' }
        ]
      },
      {
        label: '刺身・魚介',
        items: [
          { name: '刺身盛り（小）3種', desc: '本日のおすすめ3種の刺身盛り', price: '¥980', image: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80' },
          { name: '活造り（時価）', desc: '長崎港直送の鮮魚をそのまま活造りに。内容はお問い合わせください。', price: '時価', image: 'https://images.unsplash.com/photo-1535140728325-a4d3707eee61?w=600&q=80' },
          { name: '牡蠣の炭火焼き', desc: '長崎産の大粒牡蠣を炭火でじっくり蒸し焼きに。ポン酢でどうぞ。', price: '¥780', image: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&q=80' }
        ]
      },
      {
        label: '串焼き',
        items: [
          { name: 'もも（塩/タレ）', desc: '地鶏のもも肉を備長炭で香ばしく。塩かタレお選びください。', price: '¥180', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80' },
          { name: 'ねぎま', desc: '鶏もも肉とねぎを交互に刺した定番の串。塩焼きがおすすめ。', price: '¥180', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80' },
          { name: 'つくね', desc: '自家製たれで仕上げた手ごねつくね。温泉卵つき。', price: '¥220', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80' },
          { name: 'せせり', desc: '鶏の首肉。歯ごたえと旨みが凝縮された希少部位。', price: '¥200', image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80' }
        ]
      },
      {
        label: '一品料理',
        items: [
          { name: '唐揚げ（ニンニク醤油）', desc: 'ニンニク醤油に漬け込んだ大ぶり唐揚げ。レモン・マヨ添え。', price: '¥580', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=600&q=80' },
          { name: '肉じゃが', desc: '懐かしい味わいのほっこり肉じゃが。長崎和牛使用。', price: '¥480', image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80' },
          { name: '揚げ出し豆腐', desc: '木綿豆腐を揚げて、鰹だしの餡をかけた一品。', price: '¥380', image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80' }
        ]
      },
      {
        label: 'ドリンク',
        items: [
          { name: '生ビール（中ジョッキ）', desc: 'キリン一番搾り生ビール。のどごし爽快。', price: '¥550', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
          { name: '焼酎（芋・麦・米）', desc: '壱岐麦焼酎・薩摩芋焼酎ほか九州各地の銘柄を常時20種以上。', price: '¥500〜', image: 'https://images.unsplash.com/photo-1614436163996-25cee5f54290?w=600&q=80' },
          { name: '角ハイボール', desc: 'サントリー角瓶を使ったすっきりハイボール。', price: '¥450', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=600&q=80' }
        ]
      }
    ]
  },
  gallery: [
    { url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80', alt: '温もりある店内' },
    { url: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&q=80', alt: '炭火焼き鳥' },
    { url: 'https://images.unsplash.com/photo-1563612116625-3012372fccce?w=600&q=80', alt: '新鮮な刺身' },
    { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', alt: '冷えた生ビール' },
    { url: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80', alt: '旬の食材' },
    { url: 'https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?w=600&q=80', alt: '長崎の海の幸' }
  ],
  map: {
    customUrl: '',
    caption: '長崎市浜町周辺'
  },
  chat: {
    welcome: 'いらっしゃいませ！炉端酒場 灯りへようこそ🏮\nご質問があればお気軽にどうぞ。',
    fallback: 'ご質問ありがとうございます。\nお電話（095-000-0000）またはInstagramのDMでもお気軽にご連絡ください。',
    faq: [
      { label: '営業時間', keywords: '営業,時間,何時,閉店,開店,open,close,定休', answer: '🕔 営業時間はこちらです。\n\n平日：17:00 〜 24:00\n土日祝：16:00 〜 25:00\n\n定休日：日曜日\n\n※臨時休業はInstagramでご案内します。' },
      { label: 'アクセス', keywords: '場所,住所,どこ,アクセス,行き方,最寄り,電停', answer: '📍 長崎電気軌道「観光通り」電停より徒歩1分です。\n\n〒850-0000\n長崎県長崎市浜町0-0' },
      { label: '予約', keywords: '予約,reserve,booking,ご予約,席', answer: '📞 お電話（095-000-0000）またはInstagramのDMからご予約いただけます。\n\nカウンター席も当日のみの対応が可能です。お気軽にどうぞ！' },
      { label: '定休日', keywords: '定休,休み,closed,お休み', answer: '毎週日曜日が定休日です。\n祝日は通常営業いたします。' },
      { label: '駐車場', keywords: '駐車,parking,車,パーキング', answer: '当店専用の駐車場はございませんが、近隣にコインパーキングが複数ございます。' },
      { label: 'おすすめ', keywords: 'おすすめ,人気,名物,おいしい,メニュー', answer: '🔥 人気メニューをご紹介！\n\n1位 刺身盛り合わせ\n2位 焼き鳥盛り合わせ（5本）\n3位 だし巻き卵\n4位 唐揚げ（ニンニク醤油）\n5位 壱岐の麦焼酎\n\n備長炭で焼き上げた串焼きは特におすすめです！' }
    ]
  },
  contact: {
    lead: 'ご質問はチャットからお気軽にどうぞ。\nよくある質問はボタン一つで確認できます。\n\nお電話やSNSのDMでもお待ちしています。'
  }
};

function applyMigration(parsed) {
  if (parsed.menu && !parsed.menu.categories) {
    parsed.menu.categories = [];
    if (parsed.menu.items) parsed.menu.categories.push({ label: 'おすすめ', items: parsed.menu.items });
  }
  return parsed;
}

function restoreEmptyArrays(data) {
  if (!data.menu) data.menu = {};
  if (!data.menu.categories || data.menu.categories.length === 0) {
    data.menu.categories = JSON.parse(JSON.stringify(DEFAULT_DATA.menu.categories));
  }
  if (!data.gallery || data.gallery.length === 0) {
    data.gallery = JSON.parse(JSON.stringify(DEFAULT_DATA.gallery));
  }
  return data;
}

async function loadData(db) {
  try {
    const snap = await db.collection('sites').doc(SITE_ID).collection('config').doc('siteData').get();
    if (snap.exists) {
      const saved = applyMigration(snap.data());
      return restoreEmptyArrays(deepMerge(JSON.parse(JSON.stringify(DEFAULT_DATA)), saved));
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  } catch(e) {
    console.warn('Firestore load error:', e);
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }
}

async function saveData(db, data) {
  await db.collection('sites').doc(SITE_ID).collection('config').doc('siteData').set(data);
}

function listenData(db, callback) {
  return db.collection('sites').doc(SITE_ID).collection('config').doc('siteData').onSnapshot(snap => {
    if (snap.exists) {
      const d = restoreEmptyArrays(deepMerge(JSON.parse(JSON.stringify(DEFAULT_DATA)), applyMigration(snap.data())));
      callback(d);
    } else {
      callback(JSON.parse(JSON.stringify(DEFAULT_DATA)));
    }
  }, err => {
    console.warn('Firestore listen error:', err);
    callback(JSON.parse(JSON.stringify(DEFAULT_DATA)));
  });
}

function deepMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}
