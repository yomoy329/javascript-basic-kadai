const date = new Date();  // 今日の日付

const year = date.getFullYear();
const month = date.getMonth() + 1; 
const day = date.getDate();

console.log(`${year}年${month}月${day}日`);  // 2026年11月5日
