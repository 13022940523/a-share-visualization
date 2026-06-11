/**
 * A股每日市场分析报告处理脚本
 * 报告日期：2026年6月10日（星期三）
 * 功能：结构化存储市场数据、实现核心分析逻辑、输出研判结论
 */

// 1. 全局市场数据结构化
const marketData = {
 reportDate: '2026-06-10',
 // 三大指数表现
 majorIndices: [
 { name: '深证成指', closePrice: 14954.10, changeRate: -2.06, turnover: 13921.73, amplitude: 2.18 },
 { name: '创业板指', closePrice: 3854.79, changeRate: -2.70, turnover: 6532.53, amplitude: 2.78 },
 { name: '上证指数', status: '数据获取受限' }
 ],
 // 市场情绪指标
 marketSentiment: {
 riseStocks: 1447,
 fallStocks: 3376,
 flatStocks: 148,
 riseFallRatio: 0.43,
 limitUp: 66,
 limitDown: 25,
 riseOver5Percent: 215,
 fallOver5Percent: 526
 },
 // 热门板块
 hotSectors: {
 leading: [
 { rank: 1, concept: '低空经济/次新股', stock: '邦德股份(920271.BJ)', riseRate: 29.96 },
 { rank: 2, concept: 'Web3.0/AIGC/元宇宙', stock: '佳创视讯(300264.SZ)', riseRate: 20.05 },
 { rank: 3, concept: '芯片/先进封装/5G', stock: '气派科技(688216.SH)', riseRate: 20.01 },
 { rank: 4, concept: 'CPO/芯片/5G', stock: '富信科技(688662.SH)', riseRate: 20.00 },
 { rank: 5, concept: '先进封装/PCB/机器人', stock: '有研粉材(688456.SH)', riseRate: 20.00 }
 ],
 aiTech: [
 { sector: '人工智能', changeRate: -12.71, mainCapitalFlow: -140.57 },
 { sector: 'ChatGPT概念', changeRate: -13.79, mainCapitalFlow: -144.45 },
 { sector: 'AIGC概念', changeRate: -14.76, mainCapitalFlow: -119.00 },
 { sector: '半导体', changeRate: -2.47, mainCapitalFlow: -101.12 },
 { sector: '芯片概念', changeRate: -4.04, mainCapitalFlow: -196.28 }
 ]
 },
 // AI板块重点个股
 aiStocks: [
 {
 code: '688041.SH',
 name: '海光信息',
 type: '半导体/AI芯片龙头',
 indicators: {
 closePrice: 49.56,
 changeRate: 3.96,
 turnover: 127.92,
 mainCapitalFlow: 169953,
 concepts: ['人工智能', '芯片概念']
 },
 strengthRating: '★★★☆☆',
 conclusion: '资金高度认可，但受制于大盘系统性调整，短期或以震荡消化为主，中期趋势仍偏多'
 },
 {
 code: '688168.SH',
 name: '安博通',
 type: '网络安全+AI双概念',
 indicators: {
 closePrice: 33.87,
 changeRate: 6.57,
 turnover: 27.95,
 mainCapitalFlow: 1051,
 concepts: ['网络安全', '人工智能']
 },
 strengthRating: '★★★☆☆',
 conclusion: '差异化赛道+AI安全逻辑获得资金认可，短期独立行情，但需注意高位震荡风险'
 },
 {
 code: '603283.SH',
 name: '赛腾股份',
 type: 'AI检测设备龙头',
 indicators: {
 closePrice: 52.06,
 changeRate: 3.96,
 turnover: 15.55,
 mainCapitalFlow: 8788,
 concepts: ['人工智能', '半导体设备']
 },
 strengthRating: '★★★☆☆',
 conclusion: '基本面扎实，AI检测+半导体设备双逻辑支撑，在板块调整中展现防御性，中期趋势偏多'
 }
 ],
 // 操作建议
 operationAdvice: {
 positionControl: '整体仓位建议5成以下，等待市场情绪企稳',
 defenseFocus: '大盘走弱期间，医药生物等防御板块可适当关注',
 aiStockStrategy: '海光信息等资金龙头短线或有反复，谨慎追高；安博通、赛腾股份等有基本面支撑的标的可逢低关注',
 riskTip: '市场系统性调整尚未结束，短期以防守为主，避免题材炒作'
 }
};

// 2. 核心分析函数
function calculateSentimentScore() {
 const { riseFallRatio, limitDown, fallOver5Percent } = marketData.marketSentiment;
 let score = 10;
 if (riseFallRatio < 0.5) score -= 4;
 if (limitDown > 20) score -= 2;
 if (fallOver5Percent > 500) score -= 2;
 return score;
}

function getAiAntiFallStocks() {
 return marketData.aiStocks.filter(stock => stock.indicators.changeRate > 0);
}

function generateComprehensiveReport() {
 const sentimentScore = calculateSentimentScore();
 const antiFallStocks = getAiAntiFallStocks();
 const aiSectorAvgFall = marketData.hotSectors.aiTech.find(item => item.sector === '人工智能').changeRate;

 let report = '【2026-06-10 A股市场综合研判】\n';
 report += '1. 大盘环境：深证成指、创业板指跌幅均超2%，上证指数数据受限，市场整体调整态势明确；\n';
 report += '2. 市场情绪：情绪评分为' + sentimentScore + '分（满分10分），跌多涨少格局明显，恐慌情绪尚在可控范围；\n';
 report += '3. AI板块：整体大跌' + Math.abs(aiSectorAvgFall) + '%，但' + antiFallStocks.length + '只重点个股逆市上涨，资金分化显著；\n';
 report += '4. 核心机会：海光信息、安博通、赛腾股份等有基本面支撑的AI个股展现防御性，中期趋势偏多；\n';
 report += '5. 操作提示：' + marketData.operationAdvice.positionControl + '，优先关注防御板块，谨慎追高AI题材股。';

 return report;
}

// 3. 浏览器全局导出
window.stockAnalysisData = {
 marketData: marketData,
 calculateSentimentScore: calculateSentimentScore,
 getAiAntiFallStocks: getAiAntiFallStocks,
 generateComprehensiveReport: generateComprehensiveReport
};

// 4. Node.js导出模块
if (typeof module !== 'undefined' && module.exports) {
 module.exports = {
 marketData: marketData,
 calculateSentimentScore: calculateSentimentScore,
 getAiAntiFallStocks: getAiAntiFallStocks,
 generateComprehensiveReport: generateComprehensiveReport
 };
}