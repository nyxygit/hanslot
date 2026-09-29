// ============================================================
// QUESTIONS — this is the only file you edit to add content.
// ============================================================
//
// Each question has:
//   english : the prompt shown at the top of the screen
//   slots   : an array of slot definitions, left to right
//
// Each slot is either:
//   { type: "quiz",  answer: "...", options: ["...", "..."] }
//     → a spinning wheel. `answer` must be one of the `options`.
//   { type: "fixed", answer: "..." }
//     → a locked slot for punctuation or non-HSK words.
//
// ============================================================

// ============================================================
// QUESTIONS — 52 HSK 1 sentences, grouped by grammar pattern
// ============================================================
const QUESTIONS = [

  // ---- 是: identity & profession ----
  { english: "I am a student.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "学生", options: ["学生","老师","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "You are a teacher.", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "老师", options: ["老师","学生","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "He is a doctor.", slots: [
    { type: "quiz", answer: "他", options: ["他","我","你","她"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "医生", options: ["医生","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "She is Chinese.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "人", options: ["人","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am American.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "美国", options: ["美国","中国","英国","日本"] },
    { type: "quiz", answer: "人", options: ["人","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "He is my older brother.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "哥哥", options: ["哥哥","姐姐","弟弟","妹妹"] },
    { type: "fixed", answer: "。" }] },
  { english: "This is my friend.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "朋友", options: ["朋友","学生","老师","医生"] },
    { type: "fixed", answer: "。" }] },
  { english: "That is my mother.", slots: [
    { type: "quiz", answer: "那", options: ["那","这","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "妈妈", options: ["妈妈","爸爸","哥哥","姐姐"] },
    { type: "fixed", answer: "。" }] },

  // ---- 有: possession ----
  { english: "I have a book.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "He has a cat.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "只" },
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "fixed", answer: "。" }] },
  { english: "There is a cup on the table.", slots: [
    { type: "quiz", answer: "桌子", options: ["桌子","椅子","床","门"] },
    { type: "fixed", answer: "上" },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "杯子", options: ["杯子","盘子","筷子","刀"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have two older brothers.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "两", options: ["两","一","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "哥哥", options: ["哥哥","姐姐","弟弟","妹妹"] },
    { type: "fixed", answer: "。" }] },
  { english: "How many children do you have?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "几", options: ["几","什么","谁","哪儿"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "孩子", options: ["孩子","学生","朋友","人"] },
    { type: "fixed", answer: "？" }] },
  { english: "I have many friends.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "fixed", answer: "很" },
    { type: "quiz", answer: "多", options: ["多","少","大","小"] },
    { type: "quiz", answer: "朋友", options: ["朋友","学生","老师","孩子"] },
    { type: "fixed", answer: "。" }] },

  // ---- 在: location ----
  { english: "I am at home.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "家", options: ["家","学校","医院","商店"] },
    { type: "fixed", answer: "。" }] },
  { english: "He is at school.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "Mom is at the hospital.", slots: [
    { type: "quiz", answer: "妈妈", options: ["妈妈","爸爸","哥哥","姐姐"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "医院", options: ["医院","学校","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "The book is on the table.", slots: [
    { type: "quiz", answer: "书", options: ["书","笔","杯子","报纸"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "桌子", options: ["桌子","椅子","床","门"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },
  { english: "I am in Beijing.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "fixed", answer: "。" }] },
  { english: "The cat is on the chair.", slots: [
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "椅子", options: ["椅子","桌子","床","门"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },

  // ---- 喜欢: likes ----
  { english: "I like apples.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "苹果", options: ["苹果","香蕉","橘子","西瓜"] },
    { type: "fixed", answer: "。" }] },
  { english: "He likes listening to music.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "听", options: ["听","看","说","学"] },
    { type: "quiz", answer: "音乐", options: ["音乐","电视","书","电影"] },
    { type: "fixed", answer: "。" }] },
  { english: "She likes watching movies.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "看", options: ["看","听","说","学"] },
    { type: "quiz", answer: "电影", options: ["电影","电视","音乐","书"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like Chinese food.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "菜", options: ["菜","饭","面条","肉"] },
    { type: "fixed", answer: "。" }] },
  { english: "What do you like to drink?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "fixed", answer: "？" }] },

  // ---- 很 + adjective ----
  { english: "He is tall.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "高", options: ["高","矮","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "Today is cold.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "冷", options: ["冷","热","好","坏"] },
    { type: "fixed", answer: "。" }] },
  { english: "The weather is hot.", slots: [
    { type: "quiz", answer: "天气", options: ["天气","时间","东西","人"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "热", options: ["热","冷","好","坏"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am busy.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "忙", options: ["忙","累","高兴","快乐"] },
    { type: "fixed", answer: "。" }] },
  { english: "She is happy.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "高兴", options: ["高兴","快乐","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "Chinese food is delicious.", slots: [
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "菜", options: ["菜","饭","汤","肉"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好吃", options: ["好吃","好看","好玩","好"] },
    { type: "fixed", answer: "。" }] },

  // ---- 吃 / 喝 ----
  { english: "I eat apples.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "苹果", options: ["苹果","米饭","面条","面包"] },
    { type: "fixed", answer: "。" }] },
  { english: "He eats rice.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "米饭", options: ["米饭","面条","面包","鸡蛋"] },
    { type: "fixed", answer: "。" }] },
  { english: "We eat noodles.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "面条", options: ["面条","米饭","面包","肉"] },
    { type: "fixed", answer: "。" }] },
  { english: "What do you eat?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "I drink tea.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "fixed", answer: "。" }] },
  { english: "He drinks coffee.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "咖啡", options: ["咖啡","茶","水","牛奶"] },
    { type: "fixed", answer: "。" }] },

  // ---- 去: going ----
  { english: "I go to school.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "Where are you going?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "哪儿", options: ["哪儿","什么","谁","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "He goes to the shop to buy books.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "商店", options: ["商店","学校","医院","家"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "We go to eat.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面","肉"] },
    { type: "fixed", answer: "。" }] },

  // ---- 看 / 听 ----
  { english: "I watch TV.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "看", options: ["看","听","说","学"] },
    { type: "quiz", answer: "电视", options: ["电视","电影","音乐","书"] },
    { type: "fixed", answer: "。" }] },
  { english: "What are you watching?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "看", options: ["看","听","说","学"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "He listens to music.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "听", options: ["听","看","说","学"] },
    { type: "quiz", answer: "音乐", options: ["音乐","电视","电影","书"] },
    { type: "fixed", answer: "。" }] },

  // ---- Time + action ----
  { english: "Tomorrow I go to school.", slots: [
    { type: "quiz", answer: "明天", options: ["明天","今天","昨天","现在"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "Yesterday I was busy.", slots: [
    { type: "quiz", answer: "昨天", options: ["昨天","今天","明天","现在"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "忙", options: ["忙","累","高兴","快乐"] },
    { type: "fixed", answer: "。" }] },
  { english: "Today I am fine.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "What time is it now?", slots: [
    { type: "quiz", answer: "现在", options: ["现在","今天","明天","昨天"] },
    { type: "quiz", answer: "几", options: ["几","什么","谁","哪儿"] },
    { type: "quiz", answer: "点", options: ["点","天","年","月"] },
    { type: "fixed", answer: "？" }] },

  // ---- Questions ----
  { english: "What is your name?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "叫", options: ["叫","是","有","在"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "quiz", answer: "名字", options: ["名字","学生","老师","朋友"] },
    { type: "fixed", answer: "？" }] },
  { english: "Who is he?", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "谁", options: ["谁","什么","哪儿","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "What is this?", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "Where do you live?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "住", options: ["住","在","去","来"] },
    { type: "quiz", answer: "哪儿", options: ["哪儿","什么","谁","几"] },
    { type: "fixed", answer: "？" }] },

  { english: "This is my older sister.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "姐姐", options: ["姐姐","妹妹","妈妈","奶奶"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a younger brother.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "弟弟", options: ["弟弟","哥哥","妹妹","姐姐"] },
    { type: "fixed", answer: "。" }] },
  { english: "She has two younger sisters.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "两", options: ["两","一","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "妹妹", options: ["妹妹","姐姐","弟弟","哥哥"] },
    { type: "fixed", answer: "。" }] },
  { english: "My father is a doctor.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "爸爸", options: ["爸爸","妈妈","哥哥","爷爷"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "医生", options: ["医生","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "My father is very tall.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "爸爸", options: ["爸爸","妈妈","哥哥","爷爷"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "高", options: ["高","矮","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "Grandpa is at home.", slots: [
    { type: "quiz", answer: "爷爷", options: ["爷爷","奶奶","爸爸","妈妈"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "家", options: ["家","学校","医院","商店"] },
    { type: "fixed", answer: "。" }] },
  { english: "Grandma is happy.", slots: [
    { type: "quiz", answer: "奶奶", options: ["奶奶","爷爷","妈妈","姐姐"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "高兴", options: ["高兴","快乐","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "My wife is a teacher.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "妻子", options: ["妻子","丈夫","女儿","妈妈"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "老师", options: ["老师","学生","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "My son is a student.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "儿子", options: ["儿子","女儿","孩子","朋友"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "学生", options: ["学生","老师","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "His daughter is very pretty.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "女儿", options: ["女儿","儿子","孩子","妹妹"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "漂亮", options: ["漂亮","好看","高兴","好"] },
    { type: "fixed", answer: "。" }] },

  // ---- Time ----
  { english: "I drink tea in the morning.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "早上", options: ["早上","下午","晚上","中午"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "fixed", answer: "。" }] },
  { english: "I go to school in the afternoon.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "下午", options: ["下午","早上","晚上","中午"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "I watch TV in the evening.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "晚上", options: ["晚上","早上","下午","中午"] },
    { type: "quiz", answer: "看", options: ["看","听","说","学"] },
    { type: "quiz", answer: "电视", options: ["电视","电影","音乐","书"] },
    { type: "fixed", answer: "。" }] },
  { english: "I get up at seven in the morning.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "早上", options: ["早上","下午","晚上","中午"] },
    { type: "quiz", answer: "七", options: ["七","六","八","九"] },
    { type: "quiz", answer: "点", options: ["点","天","年","月"] },
    { type: "quiz", answer: "起床", options: ["起床","睡觉","工作","学习"] },
    { type: "fixed", answer: "。" }] },
  { english: "A week has seven days.", slots: [
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "星期", options: ["星期","月","年","天"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "七", options: ["七","六","八","九"] },
    { type: "quiz", answer: "天", options: ["天","年","月","点"] },
    { type: "fixed", answer: "。" }] },
  { english: "This year I am in Beijing.", slots: [
    { type: "quiz", answer: "今年", options: ["今年","明年","去年","今天"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "fixed", answer: "。" }] },
  { english: "Next year I am going to China.", slots: [
    { type: "quiz", answer: "明年", options: ["明年","今年","去年","明天"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "fixed", answer: "。" }] },
  { english: "An hour has sixty minutes.", slots: [
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "小时", options: ["小时","分钟","天","星期"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "六", options: ["六","五","七","八"] },
    { type: "quiz", answer: "十", options: ["十","百","千","万"] },
    { type: "quiz", answer: "分钟", options: ["分钟","小时","天","点"] },
    { type: "fixed", answer: "。" }] },
  { english: "I will wait ten minutes for you.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "等", options: ["等","找","帮","送"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "十", options: ["十","五","六","七"] },
    { type: "quiz", answer: "分钟", options: ["分钟","小时","天","点"] },
    { type: "fixed", answer: "。" }] },
  { english: "On Tuesday I go to school.", slots: [
    { type: "quiz", answer: "星期", options: ["星期","月","年","天"] },
    { type: "quiz", answer: "二", options: ["二","一","三","四"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },

  // ---- Numbers ----
  { english: "I have three friends.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "三", options: ["三","二","四","五"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "朋友", options: ["朋友","学生","老师","孩子"] },
    { type: "fixed", answer: "。" }] },
  { english: "My family has four people.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "家", options: ["家","学校","公司","医院"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "四", options: ["四","三","五","六"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "人", options: ["人","朋友","孩子","学生"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have five books.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "五", options: ["五","四","六","七"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","词典"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat at six o'clock.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "六", options: ["六","五","七","八"] },
    { type: "quiz", answer: "点", options: ["点","天","年","月"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I sleep at ten o'clock.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "十", options: ["十","九","八","七"] },
    { type: "quiz", answer: "点", options: ["点","天","年","月"] },
    { type: "quiz", answer: "睡觉", options: ["睡觉","起床","工作","学习"] },
    { type: "fixed", answer: "。" }] },

  // ---- Modal verbs ----
  { english: "I can speak Chinese.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "会", options: ["会","能","想","要"] },
    { type: "quiz", answer: "说", options: ["说","看","听","写"] },
    { type: "quiz", answer: "汉语", options: ["汉语","英语","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "He can speak English.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "会", options: ["会","能","想","要"] },
    { type: "quiz", answer: "说", options: ["说","看","听","写"] },
    { type: "quiz", answer: "英语", options: ["英语","汉语","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "I know him.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "认识", options: ["认识","知道","觉得","喜欢"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "。" }] },
  { english: "I know this place.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "知道", options: ["知道","认识","觉得","喜欢"] },
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "地方", options: ["地方","名字","问题","意思"] },
    { type: "fixed", answer: "。" }] },
  { english: "I think it is very good.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "觉得", options: ["觉得","知道","认识","喜欢"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "I can come.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "能", options: ["能","会","想","要"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I want to drink tea.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "想", options: ["想","要","会","能"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "fixed", answer: "。" }] },
  { english: "I want to buy a book.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "要", options: ["要","想","会","能"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","词典"] },
    { type: "fixed", answer: "。" }] },

  // ---- Verbs ----
  { english: "He comes from Beijing.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "从", options: ["从","在","到","去"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "He returns to school.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "回", options: ["回","来","去","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "Please sit down.", slots: [
    { type: "quiz", answer: "请", options: ["请","让","叫","要"] },
    { type: "quiz", answer: "坐", options: ["坐","站","走","来"] },
    { type: "fixed", answer: "。" }] },
  { english: "I open the door.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "开", options: ["开","关","看","用"] },
    { type: "quiz", answer: "门", options: ["门","窗户","桌子","床"] },
    { type: "fixed", answer: "。" }] },
  { english: "Please close the door.", slots: [
    { type: "quiz", answer: "请", options: ["请","让","叫","要"] },
    { type: "quiz", answer: "关", options: ["关","开","用","放"] },
    { type: "quiz", answer: "门", options: ["门","窗户","桌子","床"] },
    { type: "fixed", answer: "。" }] },
  { english: "I write my name.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "写", options: ["写","读","看","说"] },
    { type: "quiz", answer: "名字", options: ["名字","问题","意思","汉语"] },
    { type: "fixed", answer: "。" }] },
  { english: "I read the newspaper.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "读", options: ["读","写","看","说"] },
    { type: "quiz", answer: "报纸", options: ["报纸","杂志","词典","书"] },
    { type: "fixed", answer: "。" }] },
  { english: "I work at the company.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "公司", options: ["公司","学校","医院","银行"] },
    { type: "quiz", answer: "工作", options: ["工作","学习","睡觉","起床"] },
    { type: "fixed", answer: "。" }] },
  { english: "He studies Chinese.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "学习", options: ["学习","工作","睡觉","起床"] },
    { type: "quiz", answer: "汉语", options: ["汉语","英语","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "I give you money.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "给", options: ["给","送","用","拿"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "。" }] },
  { english: "I use a computer.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "用", options: ["用","拿","给","放"] },
    { type: "quiz", answer: "电脑", options: ["电脑","手机","电视","电话"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am looking for my phone.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "找", options: ["找","用","拿","给"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "手机", options: ["手机","电脑","电视","电话"] },
    { type: "fixed", answer: "。" }] },
  { english: "I help you.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "帮", options: ["帮","给","找","问"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "fixed", answer: "。" }] },
  { english: "Please let me go.", slots: [
    { type: "quiz", answer: "请", options: ["请","让","叫","要"] },
    { type: "quiz", answer: "让", options: ["让","请","叫","给"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I ask the teacher.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "问", options: ["问","回答","教","帮"] },
    { type: "quiz", answer: "老师", options: ["老师","学生","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "I answer the question.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "回答", options: ["回答","问","教","说"] },
    { type: "quiz", answer: "问题", options: ["问题","名字","意思","地方"] },
    { type: "fixed", answer: "。" }] },
  { english: "He teaches English.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "教", options: ["教","学","问","说"] },
    { type: "quiz", answer: "英语", options: ["英语","汉语","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "She sings a song.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "唱", options: ["唱","说","读","听"] },
    { type: "quiz", answer: "歌", options: ["歌","书","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "I wash clothes.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "洗", options: ["洗","穿","买","用"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "I put on clothes.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "穿", options: ["穿","洗","买","用"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },

  // ---- Adverbs ----
  { english: "I am going too.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "也", options: ["也","都","太","再"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "We all go.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "都", options: ["都","也","太","再"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am not going.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I did not go.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "没", options: ["没","不","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I will go again.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "再", options: ["再","也","都","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "We eat together.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "一起", options: ["一起","都","也","再"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I often drink tea.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "常常", options: ["常常","也","都","太"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like tea the most.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "最", options: ["最","很","太","也"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "fixed", answer: "。" }] },

  // ---- Conjunctions & prepositions ----
  { english: "You and I go.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "和", options: ["和","跟","比","从"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I go with him.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "跟", options: ["跟","和","比","从"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am taller than him.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "比", options: ["比","和","跟","从"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "高", options: ["高","矮","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "Because it is raining, I am not going.", slots: [
    { type: "quiz", answer: "因为", options: ["因为","所以","但是","如果"] },
    { type: "quiz", answer: "下雨", options: ["下雨","下雪","天气","雨"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like tea and coffee.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "quiz", answer: "和", options: ["和","跟","比","从"] },
    { type: "quiz", answer: "咖啡", options: ["咖啡","茶","水","牛奶"] },
    { type: "fixed", answer: "。" }] },

  // ---- Adjectives ----
  { english: "This is a new book.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "新", options: ["新","旧","大","小"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","词典"] },
    { type: "fixed", answer: "。" }] },
  { english: "That is an old book.", slots: [
    { type: "quiz", answer: "那", options: ["那","这","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "旧", options: ["旧","新","大","小"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","词典"] },
    { type: "fixed", answer: "。" }] },
  { english: "The train is fast.", slots: [
    { type: "quiz", answer: "火车", options: ["火车","飞机","地铁","汽车"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "快", options: ["快","慢","早","晚"] },
    { type: "fixed", answer: "。" }] },
  { english: "She is very pretty.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "漂亮", options: ["漂亮","好看","高兴","好"] },
    { type: "fixed", answer: "。" }] },
  { english: "Apples are cheap.", slots: [
    { type: "quiz", answer: "苹果", options: ["苹果","香蕉","橘子","西瓜"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "便宜", options: ["便宜","贵","好","大"] },
    { type: "fixed", answer: "。" }] },
  { english: "This book is very expensive.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","词典"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "贵", options: ["贵","便宜","新","旧"] },
    { type: "fixed", answer: "。" }] },
  { english: "The school is far.", slots: [
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "远", options: ["远","近","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "The shop is near.", slots: [
    { type: "quiz", answer: "商店", options: ["商店","学校","医院","家"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "近", options: ["近","远","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a black cat.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "只" },
    { type: "quiz", answer: "黑", options: ["黑","白","红","绿"] },
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "fixed", answer: "。" }] },
  { english: "The cat is white.", slots: [
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "白", options: ["白","黑","红","绿"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },
  { english: "I like red flowers.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "红", options: ["红","白","黑","绿"] },
    { type: "quiz", answer: "花", options: ["花","草","树","山"] },
    { type: "fixed", answer: "。" }] },
  { english: "The grass is green.", slots: [
    { type: "quiz", answer: "草", options: ["草","花","树","山"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "绿", options: ["绿","红","白","黑"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },

  // ---- Nouns ----
  { english: "This place is very good.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "地方", options: ["地方","名字","问题","意思"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a question.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "问题", options: ["问题","名字","意思","地方"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a lot of money.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "多", options: ["多","少","大","小"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "。" }] },
  { english: "My phone is very good.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "手机", options: ["手机","电脑","电视","电话"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "I use a dictionary.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "用", options: ["用","拿","给","放"] },
    { type: "quiz", answer: "词典", options: ["词典","书","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "This is new clothing.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "新", options: ["新","旧","大","小"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "My pants are black.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "裤子", options: ["裤子","衣服","鞋","帽子"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "黑", options: ["黑","白","红","绿"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },
  { english: "Your shoes are nice.", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "鞋", options: ["鞋","衣服","裤子","帽子"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take the car.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "汽车", options: ["汽车","火车","飞机","地铁"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take the train to Beijing.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "火车", options: ["火车","飞机","地铁","汽车"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take the subway.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "地铁", options: ["地铁","火车","飞机","汽车"] },
    { type: "fixed", answer: "。" }] },

  // ---- Food ----
  { english: "I eat fish.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "鱼", options: ["鱼","肉","鸡蛋","菜"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat eggs.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "鸡蛋", options: ["鸡蛋","鱼","肉","菜"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like fruit.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "水果", options: ["水果","苹果","菜","饭"] },
    { type: "fixed", answer: "。" }] },

  // ---- Places ----
  { english: "I go to the library.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "图书馆", options: ["图书馆","学校","医院","商店"] },
    { type: "fixed", answer: "。" }] },
  { english: "The classroom is big.", slots: [
    { type: "quiz", answer: "教室", options: ["教室","图书馆","办公室","家"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "I work at the bank.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "银行", options: ["银行","公司","医院","学校"] },
    { type: "quiz", answer: "工作", options: ["工作","学习","睡觉","起床"] },
    { type: "fixed", answer: "。" }] },
  { english: "We go to the park.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "公园", options: ["公园","学校","医院","商店"] },
    { type: "fixed", answer: "。" }] },

  // ---- Animals & nature ----
  { english: "I have a dog.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "只" },
    { type: "quiz", answer: "狗", options: ["狗","猫","鸟","马"] },
    { type: "fixed", answer: "。" }] },
  { english: "The bird is in the tree.", slots: [
    { type: "quiz", answer: "鸟", options: ["鸟","猫","狗","马"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "树", options: ["树","山","花","草"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },
  { english: "The cow is on the mountain.", slots: [
    { type: "quiz", answer: "牛", options: ["牛","马","狗","猫"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "山", options: ["山","树","花","草"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },
  { english: "There are many trees on the mountain.", slots: [
    { type: "quiz", answer: "山", options: ["山","树","花","草"] },
    { type: "fixed", answer: "上" },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "多", options: ["多","少","大","小"] },
    { type: "quiz", answer: "树", options: ["树","山","花","草"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like flowers.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "花", options: ["花","草","树","山"] },
    { type: "fixed", answer: "。" }] },

  // ---- Weather ----
  { english: "It is raining today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "下雨", options: ["下雨","下雪","天气","天"] },
    { type: "fixed", answer: "。" }] },
  { english: "It snowed yesterday.", slots: [
    { type: "quiz", answer: "昨天", options: ["昨天","今天","明天","现在"] },
    { type: "quiz", answer: "下雪", options: ["下雪","下雨","天气","天"] },
    { type: "fixed", answer: "。" }] },

      // ============================================================
  // Batch 3 — age, numbers, measure words, and remaining gaps
  // ============================================================

  // ---- 岁: age ----
  { english: "How old are you?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "几", options: ["几","什么","谁","哪儿"] },
    { type: "quiz", answer: "岁", options: ["岁","年","月","天"] },
    { type: "fixed", answer: "？" }] },
  { english: "I am eight years old.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "八", options: ["八","七","九","十"] },
    { type: "quiz", answer: "岁", options: ["岁","年","月","天"] },
    { type: "fixed", answer: "。" }] },
  { english: "He is ten years old this year.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "今年", options: ["今年","明年","去年","今天"] },
    { type: "quiz", answer: "十", options: ["十","九","八","七"] },
    { type: "quiz", answer: "岁", options: ["岁","年","月","天"] },
    { type: "fixed", answer: "。" }] },
  { english: "My son is five years old.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "儿子", options: ["儿子","女儿","孩子","朋友"] },
    { type: "quiz", answer: "五", options: ["五","四","六","七"] },
    { type: "quiz", answer: "岁", options: ["岁","年","月","天"] },
    { type: "fixed", answer: "。" }] },

  // ---- Big numbers: 百 / 千 / 万 / 零 ----
  { english: "I have one hundred yuan.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "百", options: ["百","千","万","十"] },
    { type: "quiz", answer: "块", options: ["块","个","本","张"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "。" }] },
  { english: "That computer is five thousand yuan.", slots: [
    { type: "quiz", answer: "那", options: ["那","这","我","你"] },
    { type: "quiz", answer: "台", options: ["台","个","本","张"] },
    { type: "quiz", answer: "电脑", options: ["电脑","手机","电视","电话"] },
    { type: "quiz", answer: "五", options: ["五","四","六","七"] },
    { type: "quiz", answer: "千", options: ["千","百","万","十"] },
    { type: "quiz", answer: "块", options: ["块","个","本","张"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have ten thousand yuan.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "万", options: ["万","千","百","十"] },
    { type: "quiz", answer: "块", options: ["块","个","本","张"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "。" }] },
  { english: "One hundred and five.", slots: [
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "百", options: ["百","千","万","十"] },
    { type: "quiz", answer: "零", options: ["零","一","二","三"] },
    { type: "quiz", answer: "五", options: ["五","四","六","七"] },
    { type: "fixed", answer: "。" }] },

  // ---- Measure words: 双 / 条 / 张 / 台 / 件 / 块 ----
  { english: "I have a pair of shoes.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "双", options: ["双","个","本","张"] },
    { type: "quiz", answer: "鞋", options: ["鞋","衣服","裤子","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a pair of pants.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "条", options: ["条","个","本","双"] },
    { type: "quiz", answer: "裤子", options: ["裤子","衣服","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a table.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "张", options: ["张","个","本","条"] },
    { type: "quiz", answer: "桌子", options: ["桌子","椅子","床","门"] },
    { type: "fixed", answer: "。" }] },
  { english: "This computer is very good.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "台", options: ["台","个","本","张"] },
    { type: "quiz", answer: "电脑", options: ["电脑","手机","电视","电话"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "I bought a piece of clothing.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "fixed", answer: "了" },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "件", options: ["件","个","本","张"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "I bought a hat.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "fixed", answer: "了" },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "个", options: ["个","本","张","条"] },
    { type: "quiz", answer: "帽子", options: ["帽子","眼镜","手表","裤子"] },
    { type: "fixed", answer: "。" }] },

  // ---- Greetings ----
  { english: "Hello!", slots: [
    { type: "fixed", answer: "你" },
    { type: "fixed", answer: "好" },
    { type: "fixed", answer: "！" }] },
  { english: "Hello! (polite)", slots: [
    { type: "fixed", answer: "您" },
    { type: "fixed", answer: "好" },
    { type: "fixed", answer: "！" }] },
  { english: "Thank you!", slots: [
    { type: "fixed", answer: "谢谢" },
    { type: "fixed", answer: "你" },
    { type: "fixed", answer: "！" }] },
  { english: "Sorry!", slots: [
    { type: "fixed", answer: "对不起" },
    { type: "fixed", answer: "！" }] },
  { english: "It's okay.", slots: [
    { type: "fixed", answer: "没" },
    { type: "fixed", answer: "关系" },
    { type: "fixed", answer: "。" }] },
  { english: "You're welcome.", slots: [
    { type: "fixed", answer: "不" },
    { type: "fixed", answer: "客气" },
    { type: "fixed", answer: "。" }] },
  { english: "Goodbye!", slots: [
    { type: "fixed", answer: "再见" },
    { type: "fixed", answer: "！" }] },
  { english: "Excuse me, what is your name?", slots: [
    { type: "quiz", answer: "请问", options: ["请问","谢谢","再见","对不起"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "叫", options: ["叫","是","有","在"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "quiz", answer: "名字", options: ["名字","学生","老师","朋友"] },
    { type: "fixed", answer: "？" }] },

  // ---- Body parts ----
  { english: "My eyes are big.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "眼睛", options: ["眼睛","耳朵","鼻子","嘴"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "His hair is long.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "头发", options: ["头发","眼睛","耳朵","手"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "长", options: ["长","短","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "My hands are small.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "手", options: ["手","脚","脸","头"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "小", options: ["小","大","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "My ears are small.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "耳朵", options: ["耳朵","眼睛","鼻子","嘴"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "小", options: ["小","大","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "His nose is big.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "鼻子", options: ["鼻子","眼睛","耳朵","嘴"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "Your mouth is small.", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "嘴", options: ["嘴","鼻子","眼睛","耳朵"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "小", options: ["小","大","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "My head is big.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "头", options: ["头","手","脚","脸"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "My feet are small.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "脚", options: ["脚","手","脸","头"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "小", options: ["小","大","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "My face is small.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "脸", options: ["脸","头","手","脚"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "小", options: ["小","大","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "My health is good.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "身体", options: ["身体","头","脸","手"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },

  // ---- Nature ----
  { english: "It is windy today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "风", options: ["风","雨","雪","云"] },
    { type: "fixed", answer: "。" }] },
  { english: "The sun is strong today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "太阳", options: ["太阳","月亮","星星","云"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "The moon is big tonight.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "晚上", options: ["晚上","早上","下午","中午"] },
    { type: "quiz", answer: "月亮", options: ["月亮","太阳","星星","云"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "There are stars tonight.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "晚上", options: ["晚上","早上","下午","中午"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "星星", options: ["星星","月亮","太阳","云"] },
    { type: "fixed", answer: "。" }] },
  { english: "There are clouds today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "云", options: ["云","风","雨","雪"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like the sea.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "海", options: ["海","河","山","树"] },
    { type: "fixed", answer: "。" }] },
  { english: "This river is long.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "条", options: ["条","个","本","张"] },
    { type: "quiz", answer: "河", options: ["河","海","山","树"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "长", options: ["长","短","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "Fire is hot.", slots: [
    { type: "quiz", answer: "火", options: ["火","水","风","雪"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "热", options: ["热","冷","好","坏"] },
    { type: "fixed", answer: "。" }] },
  { english: "The mountain is tall.", slots: [
    { type: "quiz", answer: "山", options: ["山","河","海","树"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "高", options: ["高","矮","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "There are flowers on the ground.", slots: [
    { type: "quiz", answer: "地", options: ["地","山","河","海"] },
    { type: "fixed", answer: "上" },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "花", options: ["花","草","树","山"] },
    { type: "fixed", answer: "。" }] },

  // ---- New places ----
  { english: "I go to Shanghai.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "上海", options: ["上海","北京","中国","美国"] },
    { type: "fixed", answer: "。" }] },
  { english: "I live in Shanghai.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "住", options: ["住","在","去","来"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "上海", options: ["上海","北京","中国","美国"] },
    { type: "fixed", answer: "。" }] },
  { english: "He comes from England.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "从", options: ["从","在","到","去"] },
    { type: "quiz", answer: "英国", options: ["英国","中国","美国","日本"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am Japanese.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "日本", options: ["日本","中国","美国","英国"] },
    { type: "quiz", answer: "人", options: ["人","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat in the restaurant.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "餐厅", options: ["餐厅","学校","医院","商店"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I work in the office.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "办公室", options: ["办公室","教室","图书馆","公司"] },
    { type: "quiz", answer: "工作", options: ["工作","学习","睡觉","起床"] },
    { type: "fixed", answer: "。" }] },
  { english: "I go to the airport.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "机场", options: ["机场","车站","银行","商店"] },
    { type: "fixed", answer: "。" }] },
  { english: "I wait for you at the station.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "车站", options: ["车站","机场","银行","商店"] },
    { type: "quiz", answer: "等", options: ["等","找","帮","送"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am learning Chinese.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "学", options: ["学","教","说","读"] },
    { type: "quiz", answer: "汉语", options: ["汉语","英语","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am learning English.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "学", options: ["学","教","说","读"] },
    { type: "quiz", answer: "英语", options: ["英语","汉语","名字","话"] },
    { type: "fixed", answer: "。" }] },

  // ---- New objects ----
  { english: "I have a photo.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "张", options: ["张","个","本","条"] },
    { type: "quiz", answer: "照片", options: ["照片","手机","电脑","词典"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a watch.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "个", options: ["个","本","张","条"] },
    { type: "quiz", answer: "手表", options: ["手表","眼镜","手机","电脑"] },
    { type: "fixed", answer: "。" }] },
  { english: "Where are my glasses?", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "眼镜", options: ["眼镜","手表","手机","电脑"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "哪儿", options: ["哪儿","什么","谁","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "This is my pen.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "笔", options: ["笔","书","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "I read the newspaper.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "看", options: ["看","听","说","学"] },
    { type: "quiz", answer: "报纸", options: ["报纸","杂志","词典","书"] },
    { type: "fixed", answer: "。" }] },
  { english: "I buy magazines.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "杂志", options: ["杂志","报纸","词典","书"] },
    { type: "fixed", answer: "。" }] },
  { english: "I like listening to songs.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "听", options: ["听","看","说","学"] },
    { type: "quiz", answer: "歌", options: ["歌","音乐","电视","电影"] },
    { type: "fixed", answer: "。" }] },
  { english: "I played for an hour.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "玩", options: ["玩","跳","唱","跑"] },
    { type: "fixed", answer: "了" },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "小时", options: ["小时","分钟","天","星期"] },
    { type: "fixed", answer: "。" }] },
  { english: "My house is big.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "房子", options: ["房子","家","学校","医院"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "My house has many windows.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "房子", options: ["房子","家","学校","医院"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "多", options: ["多","少","大","小"] },
    { type: "quiz", answer: "窗户", options: ["窗户","门","桌子","椅子"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat with chopsticks.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "用", options: ["用","拿","给","放"] },
    { type: "quiz", answer: "筷子", options: ["筷子","勺子","刀","盘子"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat with a spoon.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "用", options: ["用","拿","给","放"] },
    { type: "quiz", answer: "勺子", options: ["勺子","筷子","刀","盘子"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a plate.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "个", options: ["个","本","张","条"] },
    { type: "quiz", answer: "盘子", options: ["盘子","筷子","勺子","刀"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a bicycle.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "自行车", options: ["自行车","出租车","汽车","火车"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take a taxi.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "出租车", options: ["出租车","公共汽车","火车","飞机"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take the bus.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "公共汽车", options: ["公共汽车","出租车","火车","飞机"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take a boat.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "船", options: ["船","火车","飞机","汽车"] },
    { type: "fixed", answer: "。" }] },

  // ---- People ----
  { english: "My classmate is very nice.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "同学", options: ["同学","学生","老师","朋友"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "The gentleman is kind.", slots: [
    { type: "quiz", answer: "先生", options: ["先生","小姐","同学","朋友"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "The young lady is pretty.", slots: [
    { type: "quiz", answer: "小姐", options: ["小姐","先生","同学","朋友"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "漂亮", options: ["漂亮","好看","高兴","好"] },
    { type: "fixed", answer: "。" }] },
  { english: "The worker is busy.", slots: [
    { type: "quiz", answer: "工人", options: ["工人","学生","老师","医生"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "忙", options: ["忙","累","高兴","快乐"] },
    { type: "fixed", answer: "。" }] },
  { english: "My name is long.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "名字", options: ["名字","学生","老师","朋友"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "长", options: ["长","短","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "I don't know the meaning.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "知道", options: ["知道","认识","觉得","喜欢"] },
    { type: "quiz", answer: "意思", options: ["意思","名字","方法","问题"] },
    { type: "fixed", answer: "。" }] },
  { english: "This method is good.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "方法", options: ["方法","问题","意思","名字"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },

  // ---- Verbs ----
  { english: "I arrived at school.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "到", options: ["到","去","来","回"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "Please come in!", slots: [
    { type: "quiz", answer: "请", options: ["请","让","叫","要"] },
    { type: "quiz", answer: "进", options: ["进","出","到","来"] },
    { type: "fixed", answer: "！" }] },
  { english: "I walk to school.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "走", options: ["走","跑","去","来"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat standing.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "站", options: ["站","坐","走","跑"] },
    { type: "fixed", answer: "着" },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I take an apple.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "拿", options: ["拿","放","用","给"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "苹果", options: ["苹果","香蕉","橘子","西瓜"] },
    { type: "fixed", answer: "。" }] },
  { english: "I put the book on the table.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "放", options: ["放","拿","用","给"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "桌子", options: ["桌子","椅子","床","门"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },
  { english: "I give you a book.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "送", options: ["送","给","拿","用"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "I see him.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "见", options: ["见","看","听","说"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "。" }] },
  { english: "I call mom.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "打电话", options: ["打电话","看电视","听音乐","看书"] },
    { type: "quiz", answer: "给", options: ["给","和","跟","从"] },
    { type: "quiz", answer: "妈妈", options: ["妈妈","爸爸","哥哥","姐姐"] },
    { type: "fixed", answer: "。" }] },

  // ---- Adverbs ----
  { english: "I am too busy.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "太", options: ["太","很","也","都"] },
    { type: "quiz", answer: "忙", options: ["忙","累","高兴","快乐"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "Don't go!", slots: [
    { type: "quiz", answer: "别", options: ["别","不","没","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "！" }] },
  { english: "I still have money.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "还", options: ["还","也","都","再"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am coming now.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "就", options: ["就","才","还","再"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I just arrived.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "才", options: ["才","就","还","再"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I already ate.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "已经", options: ["已经","正在","常常","一定"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "I am eating right now.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "正在", options: ["正在","已经","常常","一定"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have a little money.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一点儿", options: ["一点儿","有点儿","很","太"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am a bit busy.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "有点儿", options: ["有点儿","一点儿","很","太"] },
    { type: "quiz", answer: "忙", options: ["忙","累","高兴","快乐"] },
    { type: "fixed", answer: "。" }] },
  { english: "The weather is extremely nice.", slots: [
    { type: "quiz", answer: "天气", options: ["天气","时间","东西","人"] },
    { type: "quiz", answer: "非常", options: ["非常","真","最","太"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "He is really tall.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "真", options: ["真","最","太","非常"] },
    { type: "quiz", answer: "高", options: ["高","矮","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "I came again.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "又", options: ["又","再","也","还"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "I will definitely go.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "一定", options: ["一定","已经","正在","常常"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },

  // ---- Conjunctions & prepositions ----
  { english: "I buy a book for you.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "为", options: ["为","给","和","跟"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "The book was taken by him.", slots: [
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "quiz", answer: "被", options: ["被","为","和","跟"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "拿", options: ["拿","放","用","给"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "I drink tea or coffee.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "quiz", answer: "或者", options: ["或者","和","跟","比"] },
    { type: "quiz", answer: "咖啡", options: ["咖啡","茶","水","牛奶"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am tired, but I am going.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "累", options: ["累","忙","高兴","快乐"] },
    { type: "quiz", answer: "但是", options: ["但是","因为","所以","如果"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I want to go, but I have no time.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "想", options: ["想","要","会","能"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "可是", options: ["可是","但是","因为","所以"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "没", options: ["没","不","别","太"] },
    { type: "quiz", answer: "时间", options: ["时间","时候","小时","分钟"] },
    { type: "fixed", answer: "。" }] },
  { english: "If it rains, I won't go.", slots: [
    { type: "quiz", answer: "如果", options: ["如果","因为","所以","但是"] },
    { type: "quiz", answer: "下雨", options: ["下雨","下雪","天气","天"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "就", options: ["就","才","还","再"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "Although I am tired, I am going.", slots: [
    { type: "quiz", answer: "虽然", options: ["虽然","如果","因为","所以"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "累", options: ["累","忙","高兴","快乐"] },
    { type: "quiz", answer: "但是", options: ["但是","因为","所以","如果"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "I eat, then I watch TV.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "quiz", answer: "然后", options: ["然后","但是","因为","如果"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "看", options: ["看","听","说","学"] },
    { type: "quiz", answer: "电视", options: ["电视","电影","音乐","书"] },
    { type: "fixed", answer: "。" }] },

  // ---- Adjectives ----
  { english: "He is short.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "矮", options: ["矮","高","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "My hair is short.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "头发", options: ["头发","眼睛","耳朵","手"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "短", options: ["短","长","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "He is slow.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "慢", options: ["慢","快","早","晚"] },
    { type: "fixed", answer: "。" }] },
  { english: "It is still early.", slots: [
    { type: "quiz", answer: "现在", options: ["现在","今天","明天","昨天"] },
    { type: "quiz", answer: "还", options: ["还","也","都","再"] },
    { type: "quiz", answer: "早", options: ["早","晚","快","慢"] },
    { type: "fixed", answer: "。" }] },
  { english: "It is late now.", slots: [
    { type: "quiz", answer: "现在", options: ["现在","今天","明天","昨天"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "晚", options: ["晚","早","快","慢"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "You are right.", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "对", options: ["对","错","好","坏"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },
  { english: "This is wrong.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "错", options: ["错","对","好","坏"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },
  { english: "I am very tired today.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "累", options: ["累","忙","高兴","快乐"] },
    { type: "fixed", answer: "。" }] },
  { english: "I am very happy.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "快乐", options: ["快乐","高兴","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "This movie is good.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "电影", options: ["电影","电视","音乐","书"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好看", options: ["好看","好吃","好玩","好"] },
    { type: "fixed", answer: "。" }] },
  { english: "This dish is delicious.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "菜", options: ["菜","饭","面条","鱼"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好吃", options: ["好吃","好看","好玩","好"] },
    { type: "fixed", answer: "。" }] },
  { english: "This is fun.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好玩", options: ["好玩","好看","好吃","好"] },
    { type: "fixed", answer: "。" }] },
  { english: "Chinese is difficult.", slots: [
    { type: "quiz", answer: "汉语", options: ["汉语","英语","名字","话"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "难", options: ["难","容易","好","坏"] },
    { type: "fixed", answer: "。" }] },
  { english: "Chinese is easy.", slots: [
    { type: "quiz", answer: "汉语", options: ["汉语","英语","名字","话"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "容易", options: ["容易","难","好","坏"] },
    { type: "fixed", answer: "。" }] },
  { english: "This piece of clothing is blue.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "件", options: ["件","个","本","张"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "蓝", options: ["蓝","黄","红","绿"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },
  { english: "That piece of clothing is yellow.", slots: [
    { type: "quiz", answer: "那", options: ["那","这","我","你"] },
    { type: "quiz", answer: "件", options: ["件","个","本","张"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "黄", options: ["黄","蓝","红","绿"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "。" }] },
  { english: "It is cloudy today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "阴", options: ["阴","晴","冷","热"] },
    { type: "quiz", answer: "天", options: ["天","年","月","日"] },
    { type: "fixed", answer: "。" }] },
  { english: "It is sunny today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "晴", options: ["晴","阴","冷","热"] },
    { type: "quiz", answer: "天", options: ["天","年","月","日"] },
    { type: "fixed", answer: "。" }] },

  // ---- Pronouns & question words ----
  { english: "Hello (plural).", slots: [
    { type: "fixed", answer: "你们" },
    { type: "fixed", answer: "好" },
    { type: "fixed", answer: "！" }] },
  { english: "They are students.", slots: [
    { type: "quiz", answer: "他们", options: ["他们","我们","你们","我"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "学生", options: ["学生","老师","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "I go myself.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "自己", options: ["自己","我","你","他"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "Which one is yours?", slots: [
    { type: "quiz", answer: "哪", options: ["哪","这","那","几"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "fixed", answer: "的" },
    { type: "fixed", answer: "？" }] },
  { english: "How much is this book?", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","词典"] },
    { type: "quiz", answer: "多少", options: ["多少","几","什么","谁"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "？" }] },
  { english: "How do you go to school?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "怎么", options: ["怎么","为什么","什么","谁"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "？" }] },
  { english: "Why don't you go?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "为什么", options: ["为什么","怎么","什么","谁"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "？" }] },

  // ---- Time ----
  { english: "In the morning I study.", slots: [
    { type: "quiz", answer: "上午", options: ["上午","中午","下午","晚上"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "学习", options: ["学习","工作","睡觉","起床"] },
    { type: "fixed", answer: "。" }] },
  { english: "At noon I eat.", slots: [
    { type: "quiz", answer: "中午", options: ["中午","上午","下午","晚上"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "Yesterday I arrived in Beijing.", slots: [
    { type: "quiz", answer: "昨天", options: ["昨天","今天","明天","现在"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "到", options: ["到","去","来","回"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "When are you coming?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "quiz", answer: "时候", options: ["时候","时间","小时","分钟"] },
    { type: "quiz", answer: "来", options: ["来","去","回","在"] },
    { type: "fixed", answer: "？" }] },
  { english: "Last year I was at school.", slots: [
    { type: "quiz", answer: "去年", options: ["去年","今年","明年","昨天"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "Today is March fifth.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "三", options: ["三","二","四","五"] },
    { type: "quiz", answer: "月", options: ["月","日","年","天"] },
    { type: "quiz", answer: "五", options: ["五","四","六","七"] },
    { type: "quiz", answer: "日", options: ["日","月","年","天"] },
    { type: "fixed", answer: "。" }] },

  // ---- 可以 ----
  { english: "May I go?", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "可以", options: ["可以","能","会","要"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "吗", options: ["吗","呢","吧","了"] },
    { type: "fixed", answer: "？" }] },

  // ---- 打电话 / 看电视 / 听音乐 / 看书 as compound verbs ----
  { english: "I make a phone call.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "打电话", options: ["打电话","看电视","听音乐","看书"] },
    { type: "fixed", answer: "。" }] },
  { english: "He watches TV.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "看电视", options: ["看电视","打电话","听音乐","看书"] },
    { type: "fixed", answer: "。" }] },
  { english: "She listens to music.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "听音乐", options: ["听音乐","打电话","看电视","看书"] },
    { type: "fixed", answer: "。" }] },
  { english: "I read books.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "看书", options: ["看书","打电话","看电视","听音乐"] },
    { type: "fixed", answer: "。" }] },

      // ============================================================
  // Batch 4 — final coverage
  // ============================================================

  // ---- 九 / numbers ----
  { english: "He has nine books.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "九", options: ["九","七","八","十"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "She is nine years old.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "九", options: ["九","七","八","十"] },
    { type: "quiz", answer: "岁", options: ["岁","年","月","天"] },
    { type: "fixed", answer: "。" }] },

  // ---- 丈夫 ----
  { english: "Her husband is a doctor.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "丈夫", options: ["丈夫","妻子","儿子","女儿"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "医生", options: ["医生","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "His wife likes tea.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "妻子", options: ["妻子","丈夫","女儿","妈妈"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "茶", options: ["茶","水","咖啡","牛奶"] },
    { type: "fixed", answer: "。" }] },

  // ---- 少 ----
  { english: "He has few friends.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "的", options: ["的","了","吗","呢"] },
    { type: "quiz", answer: "朋友", options: ["朋友","学生","老师","孩子"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "少", options: ["少","多","大","小"] },
    { type: "fixed", answer: "。" }] },

  // ---- 马 ----
  { english: "The horse is very big.", slots: [
    { type: "quiz", answer: "马", options: ["马","牛","狗","猫"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "She has a horse.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "只" },
    { type: "quiz", answer: "马", options: ["马","牛","狗","猫"] },
    { type: "fixed", answer: "。" }] },

  // ---- 而且 ----
  { english: "She is tall and also very pretty.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "高", options: ["高","矮","大","小"] },
    { type: "quiz", answer: "而且", options: ["而且","但是","因为","如果"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "漂亮", options: ["漂亮","好看","高兴","好"] },
    { type: "fixed", answer: "。" }] },

  // ---- 呢 ----
  { english: "How about you?", slots: [
    { type: "quiz", answer: "你", options: ["你","我","他","她"] },
    { type: "quiz", answer: "呢", options: ["呢","吗","吧","了"] },
    { type: "fixed", answer: "？" }] },
  { english: "How about him?", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "呢", options: ["呢","吗","吧","了"] },
    { type: "fixed", answer: "？" }] },

  // ---- 吧 ----
  { english: "Let's go.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "吧", options: ["吧","呢","吗","了"] },
    { type: "fixed", answer: "。" }] },
  { english: "Let's eat.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "quiz", answer: "吧", options: ["吧","呢","吗","了"] },
    { type: "fixed", answer: "。" }] },

  // ---- 着 ----
  { english: "She is eating while sitting.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "坐", options: ["坐","站","走","跑"] },
    { type: "quiz", answer: "着", options: ["着","了","过","的"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "The door is open.", slots: [
    { type: "quiz", answer: "门", options: ["门","窗户","桌子","床"] },
    { type: "quiz", answer: "开", options: ["开","关","看","用"] },
    { type: "quiz", answer: "着", options: ["着","了","过","的"] },
    { type: "fixed", answer: "。" }] },

  // ---- 过 ----
  { english: "She has been to China.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "过", options: ["过","着","了","的"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "fixed", answer: "。" }] },
  { english: "I have eaten Chinese food.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "过", options: ["过","着","了","的"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "菜", options: ["菜","饭","面条","肉"] },
    { type: "fixed", answer: "。" }] },

  // ---- 出 ----
  { english: "He went out.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "出", options: ["出","进","到","来"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "Please go out.", slots: [
    { type: "quiz", answer: "请", options: ["请","让","叫","要"] },
    { type: "quiz", answer: "出", options: ["出","进","到","来"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },

  // ---- 跑 ----
  { english: "He is running.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "跑", options: ["跑","走","跳","站"] },
    { type: "fixed", answer: "。" }] },
  { english: "She likes to run.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "跑", options: ["跑","走","跳","站"] },
    { type: "fixed", answer: "。" }] },

  // ---- 跳 ----
  { english: "The child is jumping.", slots: [
    { type: "quiz", answer: "孩子", options: ["孩子","学生","朋友","人"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "跳", options: ["跳","跑","走","站"] },
    { type: "fixed", answer: "。" }] },
  { english: "She can dance.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "会", options: ["会","能","想","要"] },
    { type: "quiz", answer: "跳", options: ["跳","跑","走","唱"] },
    { type: "fixed", answer: "。" }] },

  // ---- 下 ----
  { english: "The book is under the table.", slots: [
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "桌子", options: ["桌子","椅子","床","门"] },
    { type: "quiz", answer: "下", options: ["下","上","里","外"] },
    { type: "fixed", answer: "。" }] },
  { english: "The cat is under the chair.", slots: [
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "椅子", options: ["椅子","桌子","床","门"] },
    { type: "quiz", answer: "下", options: ["下","上","里","外"] },
    { type: "fixed", answer: "。" }] },

  // ---- 坏 ----
  { english: "His phone is broken.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "手机", options: ["手机","电脑","电视","电话"] },
    { type: "quiz", answer: "坏", options: ["坏","好","新","旧"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },
  { english: "This is a bad computer.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "坏", options: ["坏","好","新","旧"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "电脑", options: ["电脑","手机","电视","电话"] },
    { type: "fixed", answer: "。" }] },

  // ---- 爱 ----
  { english: "He loves his wife.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "爱", options: ["爱","喜欢","要","想"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "妻子", options: ["妻子","丈夫","女儿","妈妈"] },
    { type: "fixed", answer: "。" }] },
  { english: "She loves her children.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "爱", options: ["爱","喜欢","要","想"] },
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "孩子", options: ["孩子","学生","朋友","人"] },
    { type: "fixed", answer: "。" }] },

  // ---- 肉 / 面包 / 香蕉 / 橘子 / 西瓜 / 啤酒 / 酒 / 汤 ----
  { english: "She eats meat.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "肉", options: ["肉","鱼","鸡蛋","菜"] },
    { type: "fixed", answer: "。" }] },
  { english: "He likes bread.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "面包", options: ["面包","米饭","面条","鸡蛋"] },
    { type: "fixed", answer: "。" }] },
  { english: "She buys bananas.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "香蕉", options: ["香蕉","苹果","橘子","西瓜"] },
    { type: "fixed", answer: "。" }] },
  { english: "He likes oranges.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "喜欢", options: ["喜欢","爱","要","想"] },
    { type: "quiz", answer: "橘子", options: ["橘子","苹果","香蕉","西瓜"] },
    { type: "fixed", answer: "。" }] },
  { english: "This watermelon is very big.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "西瓜", options: ["西瓜","苹果","香蕉","橘子"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "大", options: ["大","小","高","矮"] },
    { type: "fixed", answer: "。" }] },
  { english: "He drinks beer.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "啤酒", options: ["啤酒","茶","水","咖啡"] },
    { type: "fixed", answer: "。" }] },
  { english: "She does not drink alcohol.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "酒", options: ["酒","茶","水","咖啡"] },
    { type: "fixed", answer: "。" }] },
  { english: "Mom makes soup.", slots: [
    { type: "quiz", answer: "妈妈", options: ["妈妈","爸爸","姐姐","奶奶"] },
    { type: "quiz", answer: "做", options: ["做","买","喝","吃"] },
    { type: "quiz", answer: "汤", options: ["汤","茶","水","咖啡"] },
    { type: "fixed", answer: "。" }] },

  // ---- 饭店 ----
  { english: "We eat at the restaurant.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "饭店", options: ["饭店","学校","医院","商店"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "饭", options: ["饭","菜","面条","鱼"] },
    { type: "fixed", answer: "。" }] },
  { english: "He goes to the restaurant.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "饭店", options: ["饭店","学校","医院","商店"] },
    { type: "fixed", answer: "。" }] },

  // ---- 刀 ----
  { english: "He uses a knife.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "用", options: ["用","拿","给","放"] },
    { type: "quiz", answer: "刀", options: ["刀","筷子","勺子","盘子"] },
    { type: "fixed", answer: "。" }] },
  { english: "This knife is small.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "刀", options: ["刀","筷子","勺子","盘子"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "小", options: ["小","大","高","矮"] },
    { type: "fixed", answer: "。" }] },

  // ---- 床 ----
  { english: "The cat is on the bed.", slots: [
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "床", options: ["床","桌子","椅子","门"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },
  { english: "He sleeps on the bed.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "床", options: ["床","桌子","椅子","门"] },
    { type: "fixed", answer: "上" },
    { type: "quiz", answer: "睡觉", options: ["睡觉","起床","工作","学习"] },
    { type: "fixed", answer: "。" }] },

  // ---- 雨 / 雪 ----
  { english: "There is rain today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "雨", options: ["雨","雪","风","云"] },
    { type: "fixed", answer: "。" }] },
  { english: "There is snow today.", slots: [
    { type: "quiz", answer: "今天", options: ["今天","明天","昨天","现在"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "雪", options: ["雪","雨","风","云"] },
    { type: "fixed", answer: "。" }] },
  { english: "It rained yesterday.", slots: [
    { type: "quiz", answer: "昨天", options: ["昨天","今天","明天","现在"] },
    { type: "quiz", answer: "下", options: ["下","上","里","外"] },
    { type: "quiz", answer: "雨", options: ["雨","雪","风","云"] },
    { type: "fixed", answer: "了" },
    { type: "fixed", answer: "。" }] },

  // ---- 所以 ----
  { english: "It is raining, so he is not going.", slots: [
    { type: "quiz", answer: "因为", options: ["因为","所以","但是","如果"] },
    { type: "quiz", answer: "下雨", options: ["下雨","下雪","天气","天"] },
    { type: "quiz", answer: "所以", options: ["所以","因为","但是","如果"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "。" }] },
  { english: "She is tired, so she is not working.", slots: [
    { type: "quiz", answer: "因为", options: ["因为","所以","但是","如果"] },
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "累", options: ["累","忙","高兴","快乐"] },
    { type: "quiz", answer: "所以", options: ["所以","因为","但是","如果"] },
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "工作", options: ["工作","学习","睡觉","起床"] },
    { type: "fixed", answer: "。" }] },

  // ---- Compound verbs as focused answers ----
  { english: "She sings songs.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "唱", options: ["唱","说","读","听"] },
    { type: "quiz", answer: "歌", options: ["歌","书","话","名字"] },
    { type: "fixed", answer: "。" }] },
  { english: "He washes clothes.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "洗", options: ["洗","穿","买","用"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "She puts on shoes.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "穿", options: ["穿","洗","买","用"] },
    { type: "quiz", answer: "鞋", options: ["鞋","衣服","裤子","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "He teaches Chinese.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "教", options: ["教","学","说","读"] },
    { type: "quiz", answer: "汉语", options: ["汉语","英语","名字","话"] },
    { type: "fixed", answer: "。" }] },
  { english: "She gets up very early.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "起床", options: ["起床","睡觉","工作","学习"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "早", options: ["早","晚","快","慢"] },
    { type: "fixed", answer: "。" }] },
  { english: "He sleeps very late.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "睡觉", options: ["睡觉","起床","工作","学习"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "晚", options: ["晚","早","快","慢"] },
    { type: "fixed", answer: "。" }] },

  // ---- Direct nouns as answer ----
  { english: "Her name is very long.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "名字", options: ["名字","问题","意思","方法"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "长", options: ["长","短","大","小"] },
    { type: "fixed", answer: "。" }] },
  { english: "I don't understand the meaning.", slots: [
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "知道", options: ["知道","认识","觉得","喜欢"] },
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "意思", options: ["意思","名字","问题","方法"] },
    { type: "fixed", answer: "。" }] },
  { english: "He has a question.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "问题", options: ["问题","名字","意思","方法"] },
    { type: "fixed", answer: "。" }] },
  { english: "This method is very good.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "方法", options: ["方法","问题","意思","名字"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },
  { english: "What time is it now?", slots: [
    { type: "quiz", answer: "现在", options: ["现在","今天","明天","昨天"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "quiz", answer: "时候", options: ["时候","时间","小时","分钟"] },
    { type: "fixed", answer: "？" }] },
  { english: "This place is very quiet.", slots: [
    { type: "quiz", answer: "这", options: ["这","那","我","你"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "地方", options: ["地方","名字","问题","意思"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "fixed", answer: "。" }] },

  // ---- 帮 / 等 / 送 / 见 as focused main verbs ----
  { english: "He helps me.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "帮", options: ["帮","给","找","问"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "fixed", answer: "。" }] },
  { english: "She waits for her friend.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "等", options: ["等","找","帮","送"] },
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "朋友", options: ["朋友","学生","老师","孩子"] },
    { type: "fixed", answer: "。" }] },
  { english: "He gives his mother a present.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "送", options: ["送","给","拿","用"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "妈妈", options: ["妈妈","爸爸","姐姐","奶奶"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "东西", options: ["东西","问题","名字","意思"] },
    { type: "fixed", answer: "。" }] },
  { english: "She sees her teacher.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "见", options: ["见","看","听","说"] },
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "老师", options: ["老师","学生","医生","朋友"] },
    { type: "fixed", answer: "。" }] },

  // ---- 快 / 慢 (contrast) ----
  { english: "He walks very fast.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "走", options: ["走","跑","跳","站"] },
    { type: "quiz", answer: "得", options: ["得","的","了","着"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "快", options: ["快","慢","早","晚"] },
    { type: "fixed", answer: "。" }] },
  { english: "She walks very slowly.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "走", options: ["走","跑","跳","站"] },
    { type: "quiz", answer: "得", options: ["得","的","了","着"] },
    { type: "quiz", answer: "很", options: ["很","太","也","都"] },
    { type: "quiz", answer: "慢", options: ["慢","快","早","晚"] },
    { type: "fixed", answer: "。" }] },

  // ---- 您 ----
  { english: "Hello sir, what is your name?", slots: [
    { type: "quiz", answer: "您", options: ["您","你","我","他"] },
    { type: "quiz", answer: "好", options: ["好","坏","忙","累"] },
    { type: "quiz", answer: "您", options: ["您","你","我","他"] },
    { type: "quiz", answer: "叫", options: ["叫","是","有","在"] },
    { type: "quiz", answer: "什么", options: ["什么","谁","哪儿","几"] },
    { type: "quiz", answer: "名字", options: ["名字","问题","意思","方法"] },
    { type: "fixed", answer: "？" }] },

  // ---- 哪儿 / 谁 as focused answers ----
  { english: "Where does he live?", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "住", options: ["住","在","去","来"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "哪儿", options: ["哪儿","什么","谁","几"] },
    { type: "fixed", answer: "？" }] },
  { english: "Who is she?", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "谁", options: ["谁","什么","哪儿","几"] },
    { type: "fixed", answer: "？" }] },

  // ---- 我们 / 你们 / 他们 as focused answers ----
  { english: "We are all Chinese.", slots: [
    { type: "quiz", answer: "我们", options: ["我们","你们","他们","我"] },
    { type: "quiz", answer: "都", options: ["都","也","太","再"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "人", options: ["人","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "Are you all students?", slots: [
    { type: "quiz", answer: "你们", options: ["你们","我们","他们","我"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "学生", options: ["学生","老师","医生","朋友"] },
    { type: "quiz", answer: "吗", options: ["吗","呢","吧","了"] },
    { type: "fixed", answer: "？" }] },
  { english: "They are at school.", slots: [
    { type: "quiz", answer: "他们", options: ["他们","我们","你们","我"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },

  // ---- 哪 ----
  { english: "Which one is his book?", slots: [
    { type: "quiz", answer: "哪", options: ["哪","这","那","几"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "fixed", answer: "的" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "？" }] },

  // ---- 多少 ----
  { english: "How much is that computer?", slots: [
    { type: "quiz", answer: "那", options: ["那","这","我","你"] },
    { type: "quiz", answer: "台", options: ["台","个","本","张"] },
    { type: "quiz", answer: "电脑", options: ["电脑","手机","电视","电话"] },
    { type: "quiz", answer: "多少", options: ["多少","几","什么","谁"] },
    { type: "quiz", answer: "钱", options: ["钱","书","笔","手机"] },
    { type: "fixed", answer: "？" }] },

  // ---- 怎么 ----
  { english: "How does she go to school?", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "怎么", options: ["怎么","为什么","什么","谁"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "？" }] },

  // ---- 为什么 ----
  { english: "Why is he not going?", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "为什么", options: ["为什么","怎么","什么","谁"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "fixed", answer: "？" }] },

  // ---- 玩儿 / 玩儿 compound ----
  { english: "She plays for an hour.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "玩", options: ["玩","跳","唱","跑"] },
    { type: "fixed", answer: "了" },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "小时", options: ["小时","分钟","天","星期"] },
    { type: "fixed", answer: "。" }] },

  // ---- 住 as focus ----
  { english: "He lives in Beijing.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "住", options: ["住","在","去","来"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "fixed", answer: "。" }] },

  // ---- 拿 / 放 as focus ----
  { english: "She takes a book.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "拿", options: ["拿","放","用","给"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "He puts the cup on the table.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "放", options: ["放","拿","用","给"] },
    { type: "quiz", answer: "杯子", options: ["杯子","盘子","筷子","刀"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "桌子", options: ["桌子","椅子","床","门"] },
    { type: "fixed", answer: "上" },
    { type: "fixed", answer: "。" }] },

      // ============================================================
  // Batch 5 — greetings, particles, and final stragglers
  // ============================================================

  // ---- Greetings: whole-phrase answers ----
  { english: "Hello! (to a friend)", slots: [
    { type: "quiz", answer: "你好", options: ["你好","您好","再见","谢谢"] },
    { type: "fixed", answer: "！" }] },
  { english: "Hello! (polite, to an elder or stranger)", slots: [
    { type: "quiz", answer: "您好", options: ["您好","你好","再见","谢谢"] },
    { type: "fixed", answer: "！" }] },
  { english: "Thank you!", slots: [
    { type: "quiz", answer: "谢谢", options: ["谢谢","对不起","再见","你好"] },
    { type: "fixed", answer: "！" }] },
  { english: "Sorry! (my fault)", slots: [
    { type: "quiz", answer: "对不起", options: ["对不起","没关系","不客气","谢谢"] },
    { type: "fixed", answer: "！" }] },
  { english: "It's okay. (no harm done)", slots: [
    { type: "quiz", answer: "没关系", options: ["没关系","对不起","不客气","谢谢"] },
    { type: "fixed", answer: "。" }] },
  { english: "You're welcome.", slots: [
    { type: "quiz", answer: "不客气", options: ["不客气","没关系","对不起","谢谢"] },
    { type: "fixed", answer: "。" }] },
  { english: "Goodbye!", slots: [
    { type: "quiz", answer: "再见", options: ["再见","你好","谢谢","对不起"] },
    { type: "fixed", answer: "！" }] },
  { english: "Goodbye, teacher!", slots: [
    { type: "quiz", answer: "再见", options: ["再见","你好","谢谢","对不起"] },
    { type: "fixed", answer: "，" },
    { type: "quiz", answer: "老师", options: ["老师","学生","医生","朋友"] },
    { type: "fixed", answer: "！" }] },

  // ---- 们 (plural marker) ----
  { english: "We are Chinese.", slots: [
    { type: "fixed", answer: "我" },
    { type: "quiz", answer: "们", options: ["们","的","了","着"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "人", options: ["人","学生","老师","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "They are teachers.", slots: [
    { type: "fixed", answer: "他" },
    { type: "quiz", answer: "们", options: ["们","的","了","着"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "老师", options: ["老师","学生","医生","朋友"] },
    { type: "fixed", answer: "。" }] },
  { english: "Are you (plural) students?", slots: [
    { type: "fixed", answer: "你" },
    { type: "quiz", answer: "们", options: ["们","的","了","着"] },
    { type: "quiz", answer: "是", options: ["是","有","在","去"] },
    { type: "quiz", answer: "学生", options: ["学生","老师","医生","朋友"] },
    { type: "quiz", answer: "吗", options: ["吗","呢","吧","了"] },
    { type: "fixed", answer: "？" }] },

  // ---- 了 (completed action particle) ----
  { english: "She ate.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "吃", options: ["吃","喝","买","看"] },
    { type: "quiz", answer: "了", options: ["了","着","过","的"] },
    { type: "fixed", answer: "。" }] },
  { english: "He went to school.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "了", options: ["了","着","过","的"] },
    { type: "quiz", answer: "学校", options: ["学校","医院","商店","家"] },
    { type: "fixed", answer: "。" }] },
  { english: "Mom bought apples.", slots: [
    { type: "quiz", answer: "妈妈", options: ["妈妈","爸爸","姐姐","奶奶"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "了", options: ["了","着","过","的"] },
    { type: "quiz", answer: "苹果", options: ["苹果","香蕉","橘子","西瓜"] },
    { type: "fixed", answer: "。" }] },

  // ---- 只 (measure word for animals) ----
  { english: "He has a dog.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "只", options: ["只","个","本","张"] },
    { type: "quiz", answer: "狗", options: ["狗","猫","鸟","马"] },
    { type: "fixed", answer: "。" }] },
  { english: "She has two cats.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "两", options: ["两","一","三","四"] },
    { type: "quiz", answer: "只", options: ["只","个","本","张"] },
    { type: "quiz", answer: "猫", options: ["猫","狗","鸟","马"] },
    { type: "fixed", answer: "。" }] },

  // ---- 上 (on, above) ----
  { english: "The cup is on the chair.", slots: [
    { type: "quiz", answer: "杯子", options: ["杯子","盘子","筷子","刀"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "椅子", options: ["椅子","桌子","床","门"] },
    { type: "quiz", answer: "上", options: ["上","下","里","外"] },
    { type: "fixed", answer: "。" }] },
  { english: "There is a book on the bed.", slots: [
    { type: "quiz", answer: "床", options: ["床","桌子","椅子","门"] },
    { type: "quiz", answer: "上", options: ["上","下","里","外"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "本" },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },

  // ---- 本 (measure word for books) ----
  { english: "She has three books.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "三", options: ["三","两","四","五"] },
    { type: "quiz", answer: "本", options: ["本","个","只","张"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },
  { english: "He bought two dictionaries.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "买", options: ["买","卖","看","听"] },
    { type: "quiz", answer: "了", options: ["了","着","过","的"] },
    { type: "quiz", answer: "两", options: ["两","一","三","四"] },
    { type: "quiz", answer: "本", options: ["本","个","只","张"] },
    { type: "quiz", answer: "词典", options: ["词典","书","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },

  // ---- 飞机 ----
  { english: "He takes an airplane.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "飞机", options: ["飞机","火车","汽车","船"] },
    { type: "fixed", answer: "。" }] },
  { english: "She takes an airplane to Beijing.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "坐", options: ["坐","开","用","买"] },
    { type: "quiz", answer: "飞机", options: ["飞机","火车","汽车","船"] },
    { type: "quiz", answer: "去", options: ["去","来","回","在"] },
    { type: "quiz", answer: "北京", options: ["北京","上海","中国","美国"] },
    { type: "fixed", answer: "。" }] },

  // ---- 卖 ----
  { english: "She sells clothes.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "卖", options: ["卖","买","看","用"] },
    { type: "quiz", answer: "衣服", options: ["衣服","裤子","鞋","帽子"] },
    { type: "fixed", answer: "。" }] },
  { english: "He sells books at the shop.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "商店", options: ["商店","学校","医院","银行"] },
    { type: "quiz", answer: "卖", options: ["卖","买","看","用"] },
    { type: "quiz", answer: "书", options: ["书","笔","报纸","杂志"] },
    { type: "fixed", answer: "。" }] },

  // ---- 电话 ----
  { english: "He has a telephone.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "电话", options: ["电话","手机","电脑","电视"] },
    { type: "fixed", answer: "。" }] },
  { english: "Where is the telephone?", slots: [
    { type: "quiz", answer: "电话", options: ["电话","手机","电脑","电视"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "哪儿", options: ["哪儿","什么","谁","几"] },
    { type: "fixed", answer: "？" }] },

  // ---- 牛奶 ----
  { english: "She drinks milk.", slots: [
    { type: "quiz", answer: "她", options: ["她","他","我","你"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "牛奶", options: ["牛奶","水","茶","咖啡"] },
    { type: "fixed", answer: "。" }] },
  { english: "He does not drink milk.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "不", options: ["不","没","别","太"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "牛奶", options: ["牛奶","水","茶","咖啡"] },
    { type: "fixed", answer: "。" }] },

  // ---- 水 ----
  { english: "He drinks water.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "喝", options: ["喝","吃","买","看"] },
    { type: "quiz", answer: "水", options: ["水","牛奶","茶","咖啡"] },
    { type: "fixed", answer: "。" }] },
  { english: "Please give me a glass of water.", slots: [
    { type: "quiz", answer: "请", options: ["请","让","叫","要"] },
    { type: "quiz", answer: "给", options: ["给","送","用","拿"] },
    { type: "quiz", answer: "我", options: ["我","你","他","她"] },
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "fixed", answer: "杯" },
    { type: "quiz", answer: "水", options: ["水","牛奶","茶","咖啡"] },
    { type: "fixed", answer: "。" }] },

  // ---- 年 ----
  { english: "A year has twelve months.", slots: [
    { type: "quiz", answer: "一", options: ["一","两","三","四"] },
    { type: "quiz", answer: "年", options: ["年","月","天","星期"] },
    { type: "quiz", answer: "有", options: ["有","是","在","去"] },
    { type: "quiz", answer: "十", options: ["十","九","八","七"] },
    { type: "quiz", answer: "二", options: ["二","一","三","四"] },
    { type: "fixed", answer: "个" },
    { type: "quiz", answer: "月", options: ["月","年","天","星期"] },
    { type: "fixed", answer: "。" }] },
  { english: "He has lived in China for three years.", slots: [
    { type: "quiz", answer: "他", options: ["他","她","我","你"] },
    { type: "quiz", answer: "在", options: ["在","是","有","去"] },
    { type: "quiz", answer: "中国", options: ["中国","美国","英国","日本"] },
    { type: "quiz", answer: "住", options: ["住","在","去","来"] },
    { type: "quiz", answer: "了", options: ["了","着","过","的"] },
    { type: "quiz", answer: "三", options: ["三","两","四","五"] },
    { type: "quiz", answer: "年", options: ["年","月","天","星期"] },
    { type: "fixed", answer: "。" }] }

];

 // ============================================================
// WORD_DATA — pinyin + English for HSK 1 words.
// Used both to annotate correct slots and to track mastery.
// ============================================================
const WORD_DATA = {
    // --- Pronouns ---
    "我":     { pinyin: "wǒ",          english: "I, me" },
    "你":     { pinyin: "nǐ",          english: "you" },
    "他":     { pinyin: "tā",          english: "he, him" },
    "她":     { pinyin: "tā",          english: "she, her" },
    "我们":   { pinyin: "wǒmen",       english: "we, us" },
    "你们":   { pinyin: "nǐmen",       english: "you (plural)" },
    "他们":   { pinyin: "tāmen",       english: "they, them" },
    "这":     { pinyin: "zhè",         english: "this" },
    "那":     { pinyin: "nà",          english: "that" },
    "哪":     { pinyin: "nǎ",          english: "which" },
    "自己":   { pinyin: "zìjǐ",        english: "self" },
  
    // --- Question words ---
    "谁":     { pinyin: "shéi",        english: "who" },
    "什么":   { pinyin: "shénme",      english: "what" },
    "哪儿":   { pinyin: "nǎr",         english: "where" },
    "几":     { pinyin: "jǐ",          english: "how many" },
    "多少":   { pinyin: "duōshao",     english: "how many (large)" },
    "怎么":   { pinyin: "zěnme",       english: "how" },
    "为什么": { pinyin: "wèishénme",   english: "why" },
  
    // --- Numbers ---
    "一":     { pinyin: "yī",          english: "one" },
    "二":     { pinyin: "èr",          english: "two" },
    "三":     { pinyin: "sān",         english: "three" },
    "四":     { pinyin: "sì",          english: "four" },
    "五":     { pinyin: "wǔ",          english: "five" },
    "六":     { pinyin: "liù",         english: "six" },
    "七":     { pinyin: "qī",          english: "seven" },
    "八":     { pinyin: "bā",          english: "eight" },
    "九":     { pinyin: "jiǔ",         english: "nine" },
    "十":     { pinyin: "shí",         english: "ten" },
    "零":     { pinyin: "líng",        english: "zero" },
    "百":     { pinyin: "bǎi",         english: "hundred" },
    "千":     { pinyin: "qiān",        english: "thousand" },
    "万":     { pinyin: "wàn",         english: "ten thousand" },
    "两":     { pinyin: "liǎng",       english: "two (before measure)" },
  
    // --- Measure words ---
    "个":     { pinyin: "gè",          english: "(general measure)" },
    "本":     { pinyin: "běn",         english: "(measure for books)" },
    "只":     { pinyin: "zhī",         english: "(measure for animals)" },
    "件":     { pinyin: "jiàn",        english: "(measure for items)" },
    "块":     { pinyin: "kuài",        english: "(measure / yuan)" },
    "张":     { pinyin: "zhāng",       english: "(measure for flat objects)" },
    "台":     { pinyin: "tái",         english: "(measure for machines)" },
    "条":     { pinyin: "tiáo",        english: "(measure for long items)" },
    "双":     { pinyin: "shuāng",      english: "pair" },
    "岁":     { pinyin: "suì",         english: "years old" },
  
    // --- Family ---
    "家":     { pinyin: "jiā",         english: "home, family" },
    "爸爸":   { pinyin: "bàba",        english: "father" },
    "妈妈":   { pinyin: "māma",        english: "mother" },
    "儿子":   { pinyin: "érzi",        english: "son" },
    "女儿":   { pinyin: "nǚ'ér",       english: "daughter" },
    "哥哥":   { pinyin: "gēge",        english: "older brother" },
    "姐姐":   { pinyin: "jiějie",      english: "older sister" },
    "弟弟":   { pinyin: "dìdi",        english: "younger brother" },
    "妹妹":   { pinyin: "mèimei",      english: "younger sister" },
    "爷爷":   { pinyin: "yéye",        english: "paternal grandfather" },
    "奶奶":   { pinyin: "nǎinai",      english: "paternal grandmother" },
    "丈夫":   { pinyin: "zhàngfu",     english: "husband" },
    "妻子":   { pinyin: "qīzi",        english: "wife" },
    "孩子":   { pinyin: "háizi",       english: "child" },
  
    // --- Time ---
    "年":     { pinyin: "nián",        english: "year" },
    "月":     { pinyin: "yuè",         english: "month, moon" },
    "日":     { pinyin: "rì",          english: "day, sun" },
    "天":     { pinyin: "tiān",        english: "day, sky" },
    "今天":   { pinyin: "jīntiān",     english: "today" },
    "明天":   { pinyin: "míngtiān",    english: "tomorrow" },
    "昨天":   { pinyin: "zuótiān",     english: "yesterday" },
    "现在":   { pinyin: "xiànzài",     english: "now" },
    "时候":   { pinyin: "shíhou",      english: "time, moment" },
    "早上":   { pinyin: "zǎoshang",    english: "morning" },
    "上午":   { pinyin: "shàngwǔ",     english: "morning (before noon)" },
    "中午":   { pinyin: "zhōngwǔ",     english: "noon" },
    "下午":   { pinyin: "xiàwǔ",       english: "afternoon" },
    "晚上":   { pinyin: "wǎnshang",    english: "evening, night" },
    "星期":   { pinyin: "xīngqī",      english: "week" },
    "分钟":   { pinyin: "fēnzhōng",    english: "minute" },
    "小时":   { pinyin: "xiǎoshí",     english: "hour" },
    "点":     { pinyin: "diǎn",        english: "o'clock, dot" },
    "今年":   { pinyin: "jīnnián",     english: "this year" },
    "去年":   { pinyin: "qùnián",      english: "last year" },
    "明年":   { pinyin: "míngnián",    english: "next year" },
  
    // --- Common verbs ---
    "是":     { pinyin: "shì",         english: "to be" },
    "有":     { pinyin: "yǒu",         english: "to have" },
    "在":     { pinyin: "zài",         english: "to be at, in" },
    "去":     { pinyin: "qù",          english: "to go" },
    "来":     { pinyin: "lái",         english: "to come" },
    "回":     { pinyin: "huí",         english: "to return" },
    "吃":     { pinyin: "chī",         english: "to eat" },
    "喝":     { pinyin: "hē",          english: "to drink" },
    "看":     { pinyin: "kàn",         english: "to look, watch, read" },
    "听":     { pinyin: "tīng",        english: "to listen" },
    "说":     { pinyin: "shuō",        english: "to speak" },
    "读":     { pinyin: "dú",          english: "to read aloud" },
    "写":     { pinyin: "xiě",         english: "to write" },
    "学":     { pinyin: "xué",         english: "to study" },
    "学习":   { pinyin: "xuéxí",       english: "to study" },
    "工作":   { pinyin: "gōngzuò",     english: "to work, job" },
    "睡觉":   { pinyin: "shuìjiào",    english: "to sleep" },
    "起床":   { pinyin: "qǐchuáng",    english: "to get up" },
    "买":     { pinyin: "mǎi",         english: "to buy" },
    "卖":     { pinyin: "mài",         english: "to sell" },
    "做":     { pinyin: "zuò",         english: "to do, make" },
    "坐":     { pinyin: "zuò",         english: "to sit" },
    "站":     { pinyin: "zhàn",        english: "to stand" },
    "走":     { pinyin: "zǒu",         english: "to walk" },
    "跑":     { pinyin: "pǎo",         english: "to run" },
    "开":     { pinyin: "kāi",         english: "to open, drive" },
    "关":     { pinyin: "guān",        english: "to close" },
    "想":     { pinyin: "xiǎng",       english: "to think, want" },
    "要":     { pinyin: "yào",         english: "to want, need" },
    "会":     { pinyin: "huì",         english: "can, know how to" },
    "能":     { pinyin: "néng",        english: "can, be able to" },
    "可以":   { pinyin: "kěyǐ",        english: "may, can" },
    "知道":   { pinyin: "zhīdào",      english: "to know (a fact)" },
    "认识":   { pinyin: "rènshi",      english: "to know (a person)" },
    "觉得":   { pinyin: "juéde",       english: "to feel, think" },
    "喜欢":   { pinyin: "xǐhuan",      english: "to like" },
    "爱":     { pinyin: "ài",          english: "to love" },
    "给":     { pinyin: "gěi",         english: "to give" },
    "用":     { pinyin: "yòng",        english: "to use" },
    "拿":     { pinyin: "ná",          english: "to take, hold" },
    "放":     { pinyin: "fàng",        english: "to put, place" },
    "送":     { pinyin: "sòng",        english: "to give (a gift)" },
    "找":     { pinyin: "zhǎo",        english: "to look for" },
    "等":     { pinyin: "děng",        english: "to wait" },
    "帮":     { pinyin: "bāng",        english: "to help" },
    "见":     { pinyin: "jiàn",        english: "to see, meet" },
    "叫":     { pinyin: "jiào",        english: "to be called" },
    "让":     { pinyin: "ràng",        english: "to let, allow" },
    "请":     { pinyin: "qǐng",        english: "to invite, please" },
    "问":     { pinyin: "wèn",         english: "to ask" },
    "回答":   { pinyin: "huídá",       english: "to answer" },
    "教":     { pinyin: "jiāo",        english: "to teach" },
    "玩":     { pinyin: "wán",         english: "to play" },
    "唱":     { pinyin: "chàng",       english: "to sing" },
    "跳":     { pinyin: "tiào",        english: "to jump, dance" },
    "洗":     { pinyin: "xǐ",          english: "to wash" },
    "穿":     { pinyin: "chuān",       english: "to wear" },
    "住":     { pinyin: "zhù",         english: "to live, stay" },
    "到":     { pinyin: "dào",         english: "to arrive" },
    "出":     { pinyin: "chū",         english: "to go out" },
    "进":     { pinyin: "jìn",         english: "to enter" },
    "上":     { pinyin: "shàng",       english: "on, above, to go up" },
    "下":     { pinyin: "xià",         english: "below, to go down" },
    "打电话": { pinyin: "dǎ diànhuà",  english: "to make a phone call" },
    "看电视": { pinyin: "kàn diànshì", english: "to watch TV" },
    "听音乐": { pinyin: "tīng yīnyuè", english: "to listen to music" },
    "看书":   { pinyin: "kàn shū",     english: "to read" },
  
    // --- Adjectives ---
    "大":     { pinyin: "dà",          english: "big" },
    "小":     { pinyin: "xiǎo",        english: "small" },
    "多":     { pinyin: "duō",         english: "many" },
    "少":     { pinyin: "shǎo",        english: "few" },
    "好":     { pinyin: "hǎo",         english: "good" },
    "坏":     { pinyin: "huài",        english: "bad" },
    "高":     { pinyin: "gāo",         english: "tall, high" },
    "矮":     { pinyin: "ǎi",          english: "short (height)" },
    "长":     { pinyin: "cháng",       english: "long" },
    "短":     { pinyin: "duǎn",        english: "short (length)" },
    "新":     { pinyin: "xīn",         english: "new" },
    "旧":     { pinyin: "jiù",         english: "old (things)" },
    "冷":     { pinyin: "lěng",        english: "cold" },
    "热":     { pinyin: "rè",          english: "hot" },
    "快":     { pinyin: "kuài",        english: "fast" },
    "慢":     { pinyin: "màn",         english: "slow" },
    "早":     { pinyin: "zǎo",         english: "early" },
    "晚":     { pinyin: "wǎn",         english: "late" },
    "对":     { pinyin: "duì",         english: "correct, right" },
    "错":     { pinyin: "cuò",         english: "wrong" },
    "忙":     { pinyin: "máng",        english: "busy" },
    "累":     { pinyin: "lèi",         english: "tired" },
    "高兴":   { pinyin: "gāoxìng",     english: "happy" },
    "快乐":   { pinyin: "kuàilè",      english: "happy, joyful" },
    "漂亮":   { pinyin: "piàoliang",   english: "beautiful" },
    "好看":   { pinyin: "hǎokàn",      english: "good-looking" },
    "好吃":   { pinyin: "hǎochī",      english: "delicious" },
    "好玩":   { pinyin: "hǎowán",      english: "fun" },
    "难":     { pinyin: "nán",         english: "difficult" },
    "容易":   { pinyin: "róngyì",      english: "easy" },
    "便宜":   { pinyin: "piányi",      english: "cheap" },
    "贵":     { pinyin: "guì",         english: "expensive" },
    "远":     { pinyin: "yuǎn",        english: "far" },
    "近":     { pinyin: "jìn",         english: "near" },
    "红":     { pinyin: "hóng",        english: "red" },
    "白":     { pinyin: "bái",         english: "white" },
    "黑":     { pinyin: "hēi",         english: "black" },
    "蓝":     { pinyin: "lán",         english: "blue" },
    "绿":     { pinyin: "lǜ",          english: "green" },
    "黄":     { pinyin: "huáng",       english: "yellow" },
  
    // --- Adverbs ---
    "很":     { pinyin: "hěn",         english: "very" },
    "太":     { pinyin: "tài",         english: "too (much)" },
    "也":     { pinyin: "yě",          english: "also" },
    "都":     { pinyin: "dōu",         english: "all, both" },
    "不":     { pinyin: "bù",          english: "not" },
    "没":     { pinyin: "méi",         english: "not (have)" },
    "别":     { pinyin: "bié",         english: "don't" },
    "再":     { pinyin: "zài",         english: "again" },
    "还":     { pinyin: "hái",         english: "still, also" },
    "就":     { pinyin: "jiù",         english: "just, then" },
    "才":     { pinyin: "cái",         english: "only then" },
    "已经":   { pinyin: "yǐjīng",      english: "already" },
    "正在":   { pinyin: "zhèngzài",    english: "in the process of" },
    "一起":   { pinyin: "yīqǐ",        english: "together" },
    "一点儿": { pinyin: "yīdiǎnr",     english: "a little" },
    "有点儿": { pinyin: "yǒudiǎnr",    english: "a bit" },
    "常常":   { pinyin: "chángcháng",  english: "often" },
    "非常":   { pinyin: "fēicháng",    english: "very, extremely" },
    "真":     { pinyin: "zhēn",        english: "really" },
    "最":     { pinyin: "zuì",         english: "most" },
    "又":     { pinyin: "yòu",         english: "again" },
    "一定":   { pinyin: "yīdìng",      english: "definitely" },
  
    // --- Prepositions & conjunctions ---
    "从":     { pinyin: "cóng",        english: "from" },
    "跟":     { pinyin: "gēn",         english: "with, and" },
    "和":     { pinyin: "hé",          english: "and, with" },
    "为":     { pinyin: "wèi",         english: "for" },
    "被":     { pinyin: "bèi",         english: "(passive marker)" },
    "比":     { pinyin: "bǐ",          english: "compare to" },
    "或者":   { pinyin: "huòzhě",      english: "or" },
    "因为":   { pinyin: "yīnwèi",      english: "because" },
    "所以":   { pinyin: "suǒyǐ",       english: "therefore" },
    "但是":   { pinyin: "dànshì",      english: "but" },
    "可是":   { pinyin: "kěshì",       english: "but" },
    "如果":   { pinyin: "rúguǒ",       english: "if" },
    "虽然":   { pinyin: "suīrán",      english: "although" },
    "而且":   { pinyin: "érqiě",       english: "moreover" },
    "然后":   { pinyin: "ránhòu",      english: "then" },
  
    // --- Everyday nouns ---
    "人":     { pinyin: "rén",         english: "person" },
    "名字":   { pinyin: "míngzi",      english: "name" },
    "东西":   { pinyin: "dōngxi",      english: "thing" },
    "时间":   { pinyin: "shíjiān",     english: "time" },
    "地方":   { pinyin: "dìfang",      english: "place" },
    "问题":   { pinyin: "wèntí",       english: "question, problem" },
    "方法":   { pinyin: "fāngfǎ",      english: "method" },
    "意思":   { pinyin: "yìsi",        english: "meaning" },
    "朋友":   { pinyin: "péngyou",     english: "friend" },
    "同学":   { pinyin: "tóngxué",     english: "classmate" },
    "先生":   { pinyin: "xiānsheng",   english: "Mr., sir" },
    "小姐":   { pinyin: "xiǎojiě",     english: "Miss" },
    "学生":   { pinyin: "xuésheng",    english: "student" },
    "老师":   { pinyin: "lǎoshī",      english: "teacher" },
    "医生":   { pinyin: "yīshēng",     english: "doctor" },
    "工人":   { pinyin: "gōngrén",     english: "worker" },
    "医生":   { pinyin: "yīshēng",     english: "doctor" },
    "钱":     { pinyin: "qián",        english: "money" },
    "电话":   { pinyin: "diànhuà",     english: "telephone" },
    "手机":   { pinyin: "shǒujī",      english: "mobile phone" },
    "电视":   { pinyin: "diànshì",     english: "TV" },
    "电脑":   { pinyin: "diànnǎo",     english: "computer" },
    "电影":   { pinyin: "diànyǐng",    english: "movie" },
    "音乐":   { pinyin: "yīnyuè",      english: "music" },
    "歌":     { pinyin: "gē",          english: "song" },
    "照片":   { pinyin: "zhàopiàn",    english: "photo" },
    "书":     { pinyin: "shū",         english: "book" },
    "笔":     { pinyin: "bǐ",          english: "pen" },
    "报纸":   { pinyin: "bàozhǐ",      english: "newspaper" },
    "杂志":   { pinyin: "zázhì",       english: "magazine" },
    "词典":   { pinyin: "cídiǎn",      english: "dictionary" },
    "桌子":   { pinyin: "zhuōzi",      english: "table" },
    "椅子":   { pinyin: "yǐzi",        english: "chair" },
    "床":     { pinyin: "chuáng",      english: "bed" },
    "门":     { pinyin: "mén",         english: "door" },
    "窗户":   { pinyin: "chuānghu",    english: "window" },
    "房子":   { pinyin: "fángzi",      english: "house" },
    "杯子":   { pinyin: "bēizi",       english: "cup" },
    "盘子":   { pinyin: "pánzi",       english: "plate" },
    "筷子":   { pinyin: "kuàizi",      english: "chopsticks" },
    "勺子":   { pinyin: "sháozi",      english: "spoon" },
    "刀":     { pinyin: "dāo",         english: "knife" },
    "衣服":   { pinyin: "yīfu",        english: "clothes" },
    "裤子":   { pinyin: "kùzi",        english: "pants" },
    "鞋":     { pinyin: "xié",         english: "shoes" },
    "帽子":   { pinyin: "màozi",       english: "hat" },
    "眼镜":   { pinyin: "yǎnjìng",     english: "glasses" },
    "手表":   { pinyin: "shǒubiǎo",    english: "wristwatch" },
    "汽车":   { pinyin: "qìchē",       english: "car" },
    "自行车": { pinyin: "zìxíngchē",   english: "bicycle" },
    "出租车": { pinyin: "chūzūchē",    english: "taxi" },
    "公共汽车": { pinyin: "gōnggòng qìchē", english: "bus" },
    "地铁":   { pinyin: "dìtiě",       english: "subway" },
    "火车":   { pinyin: "huǒchē",      english: "train" },
    "飞机":   { pinyin: "fēijī",       english: "airplane" },
    "船":     { pinyin: "chuán",       english: "boat" },
  
    // --- Food & drink ---
    "饭":     { pinyin: "fàn",         english: "rice, meal" },
    "菜":     { pinyin: "cài",         english: "dish, vegetable" },
    "肉":     { pinyin: "ròu",         english: "meat" },
    "鱼":     { pinyin: "yú",          english: "fish" },
    "鸡蛋":   { pinyin: "jīdàn",       english: "egg" },
    "米饭":   { pinyin: "mǐfàn",       english: "cooked rice" },
    "面条":   { pinyin: "miàntiáo",    english: "noodles" },
    "面包":   { pinyin: "miànbāo",     english: "bread" },
    "水果":   { pinyin: "shuǐguǒ",     english: "fruit" },
    "苹果":   { pinyin: "píngguǒ",     english: "apple" },
    "香蕉":   { pinyin: "xiāngjiāo",   english: "banana" },
    "橘子":   { pinyin: "júzi",        english: "orange" },
    "西瓜":   { pinyin: "xīguā",       english: "watermelon" },
    "茶":     { pinyin: "chá",         english: "tea" },
    "水":     { pinyin: "shuǐ",        english: "water" },
    "咖啡":   { pinyin: "kāfēi",       english: "coffee" },
    "牛奶":   { pinyin: "niúnǎi",      english: "milk" },
    "啤酒":   { pinyin: "píjiǔ",       english: "beer" },
    "酒":     { pinyin: "jiǔ",         english: "alcohol, wine" },
    "汤":     { pinyin: "tāng",        english: "soup" },
  
    // --- Places & countries ---
    "中国":   { pinyin: "Zhōngguó",    english: "China" },
    "美国":   { pinyin: "Měiguó",      english: "USA" },
    "英国":   { pinyin: "Yīngguó",     english: "United Kingdom" },
    "日本":   { pinyin: "Rìběn",       english: "Japan" },
    "北京":   { pinyin: "Běijīng",     english: "Beijing" },
    "上海":   { pinyin: "Shànghǎi",    english: "Shanghai" },
    "学校":   { pinyin: "xuéxiào",     english: "school" },
    "医院":   { pinyin: "yīyuàn",      english: "hospital" },
    "商店":   { pinyin: "shāngdiàn",   english: "shop" },
    "饭店":   { pinyin: "fàndiàn",     english: "restaurant, hotel" },
    "餐厅":   { pinyin: "cāntīng",     english: "restaurant" },
    "图书馆": { pinyin: "túshūguǎn",   english: "library" },
    "教室":   { pinyin: "jiàoshì",     english: "classroom" },
    "办公室": { pinyin: "bàngōngshì",  english: "office" },
    "银行":   { pinyin: "yínháng",     english: "bank" },
    "机场":   { pinyin: "jīchǎng",     english: "airport" },
    "车站":   { pinyin: "chēzhàn",     english: "station, stop" },
    "公园":   { pinyin: "gōngyuán",    english: "park" },
    "公司":   { pinyin: "gōngsī",      english: "company" },
    "汉语":   { pinyin: "Hànyǔ",       english: "Chinese language" },
    "英语":   { pinyin: "Yīngyǔ",      english: "English language" },
  
    // --- Body ---
    "头":     { pinyin: "tóu",         english: "head" },
    "头发":   { pinyin: "tóufa",       english: "hair" },
    "眼睛":   { pinyin: "yǎnjing",     english: "eye" },
    "耳朵":   { pinyin: "ěrduo",       english: "ear" },
    "鼻子":   { pinyin: "bízi",        english: "nose" },
    "嘴":     { pinyin: "zuǐ",         english: "mouth" },
    "手":     { pinyin: "shǒu",        english: "hand" },
    "脚":     { pinyin: "jiǎo",        english: "foot" },
    "脸":     { pinyin: "liǎn",        english: "face" },
    "身体":   { pinyin: "shēntǐ",      english: "body" },
  
    // --- Nature ---
    "地":     { pinyin: "dì",          english: "earth, ground" },
    "山":     { pinyin: "shān",        english: "mountain" },
    "火":     { pinyin: "huǒ",         english: "fire" },
    "风":     { pinyin: "fēng",        english: "wind" },
    "雨":     { pinyin: "yǔ",          english: "rain" },
    "雪":     { pinyin: "xuě",         english: "snow" },
    "云":     { pinyin: "yún",         english: "cloud" },
    "太阳":   { pinyin: "tàiyáng",     english: "sun" },
    "月亮":   { pinyin: "yuèliang",    english: "moon" },
    "星星":   { pinyin: "xīngxing",    english: "star" },
    "花":     { pinyin: "huā",         english: "flower" },
    "草":     { pinyin: "cǎo",         english: "grass" },
    "树":     { pinyin: "shù",         english: "tree" },
    "河":     { pinyin: "hé",          english: "river" },
    "海":     { pinyin: "hǎi",         english: "sea" },
  
    // --- Animals ---
    "狗":     { pinyin: "gǒu",         english: "dog" },
    "猫":     { pinyin: "māo",         english: "cat" },
    "鸟":     { pinyin: "niǎo",        english: "bird" },
    "马":     { pinyin: "mǎ",          english: "horse" },
    "牛":     { pinyin: "niú",         english: "cow, ox" },
  
    // --- Weather ---
    "天气":   { pinyin: "tiānqì",      english: "weather" },
    "晴":     { pinyin: "qíng",        english: "sunny" },
    "阴":     { pinyin: "yīn",         english: "cloudy, overcast" },
    "下雨":   { pinyin: "xià yǔ",      english: "to rain" },
    "下雪":   { pinyin: "xià xuě",     english: "to snow" },
  
    // --- Greetings & polite ---
    "你好":   { pinyin: "nǐ hǎo",      english: "hello" },
    "您好":   { pinyin: "nín hǎo",     english: "hello (polite)" },
    "再见":   { pinyin: "zàijiàn",     english: "goodbye" },
    "谢谢":   { pinyin: "xièxie",      english: "thank you" },
    "不客气": { pinyin: "bù kèqi",     english: "you're welcome" },
    "对不起": { pinyin: "duìbuqǐ",     english: "sorry" },
    "没关系": { pinyin: "méi guānxi",  english: "it's okay" },
    "请问":   { pinyin: "qǐngwèn",     english: "excuse me, may I ask" },
  
    // --- Particles & helpers ---
    "的":     { pinyin: "de",          english: "(possessive particle)" },
    "了":     { pinyin: "le",          english: "(completed action)" },
    "吗":     { pinyin: "ma",          english: "(yes/no question)" },
    "呢":     { pinyin: "ne",          english: "(question particle)" },
    "吧":     { pinyin: "ba",          english: "(suggestion particle)" },
    "们":     { pinyin: "men",         english: "(plural marker)" },
    "着":     { pinyin: "zhe",         english: "(ongoing state)" },
    "过":     { pinyin: "guò",         english: "(past experience)" },
    "一":     { pinyin: "yī",          english: "one" }
  };