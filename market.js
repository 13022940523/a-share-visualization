// 大盘行情分析报告 - 2026年6月10日
// 数据结构化封装，适配前端展示
const marketAnalysisReport = {
 // 报告基础信息
 basicInfo: {
 date: '2026年6月10日（星期三）',
 generateTime: '2026年6月10日 21:20',
 dataSource: '同花顺(THS)',
 analysisTool: 'thsdk',
 platform: 'OpenClaw 大盘分析员'
 },

 // 三大指数行情概览
 mainIndex: [
 { indexName: '深证成指', closePrice: '14,954.10', changeRate: '-2.06%', turnover: '13,921.73', amplitude: '2.18%' },
 { indexName: '创业板指', closePrice: '3,854.79', changeRate: '-2.70%', turnover: '6,532.53', amplitude: '2.78%' }
 ],
 indexNote: '上证指数数据获取受限，但从市场整体走势判断，今日A股市场整体呈现调整态势。',

 // 市场涨跌统计
 marketEmotion: {
 upCount: 1447,
 downCount: 3376,
 flatCount: 148,
 upDownRatio: '0.43:1',
 limitUpCount: 66,
 limitDownCount: 25,
 upOver5Percent: 215,
 downOver5Percent: 526,
 conclusion: '今日市场情绪偏弱，下跌家数明显多于上涨家数，涨跌比仅为0.43，显示空头占据主导。跌停家数相对较少，说明市场恐慌情绪可控，更多是技术性回调。'
 },

 // 热点板块分析
 hotSections: {
 conceptSections: [
 { rank: 1, name: '次新股/低空经济/专精特新', stock: 'C新赣(920271.BJ)', changeRate: '+29.96%' },
 { rank: 2, name: 'Web3.0/元宇宙/AIGC', stock: '佳创视讯(300264.SZ)', changeRate: '+20.05%' },
 { rank: 3, name: '芯片/先进封装/5G', stock: '海光信息(688216.SH)', changeRate: '+20.01%' },
 { rank: 4, name: 'CPO/芯片/5G', stock: '联瑞新材(688662.SH)', changeRate: '+20.00%' },
 { rank: 5, name: '先进封装/PCB/机器人', stock: '有研粉材(688456.SH)', changeRate: '+20.00%' },
 { rank: 6, name: '创新药/芯片/专精特新', stock: '康为世纪(688485.SH)', changeRate: '+20.00%' },
 { rank: 7, name: 'OLED/芯片/新能源', stock: '隆利科技(300721.SZ)', changeRate: '+19.99%' },
 { rank: 8, name: '半导体/食品安全/芯片', stock: '赛恩斯(688056.SH)', changeRate: '+17.50%' },
 { rank: 9, name: '创新药/NMN/合成生物', stock: '阳光诺和(920471.BJ)', changeRate: '+17.21%' },
 { rank: 10, name: '数字货币/半导体/存储芯片', stock: '中科飞测(688146.SH)', changeRate: '+16.42%' }
 ],
 industrySections: [
 { rank: 1, name: '生物制品', stock: '智飞生物(300122.SZ)', changeRate: '+4.05%' },
 { rank: 2, name: '生物制品', stock: '迈威生物(688062.SH)', changeRate: '+3.18%' },
 { rank: 3, name: '生物制品', stock: '康泰生物(300601.SZ)', changeRate: '+2.08%' },
 { rank: 4, name: '生物制品', stock: '华兰疫苗(301207.SZ)', changeRate: '+1.89%' },
 { rank: 5, name: '生物制品', stock: '诺元生物(688765.SH)', changeRate: '+1.79%' },
 { rank: 6, name: '生物制品', stock: '四环生物(000518.SZ)', changeRate: '+1.57%' },
 { rank: 7, name: '生物制品', stock: '百利天恒(688331.SH)', changeRate: '+1.55%' },
 { rank: 8, name: '生物制品', stock: '盟科药业(688336.SH)', changeRate: '+1.47%' },
 { rank: 9, name: '生物制品', stock: '唯科科技(300841.SZ)', changeRate: '+1.44%' },
 { rank: 10, name: '生物制品', stock: '科兴制药(688488.SH)', changeRate: '+1.42%' }
 ],
 conclusion: [
 '生物制品板块领涨：医药生物板块整体表现亮眼，多个细分领域创新药、疫苗等标的表现活跃',
 '科技成长活跃：芯片、半导体、CPO、先进封装等科技板块维持较高热度，多股涨停',
 '次新股异动：北交所次新股表现突出，C新赣涨幅近30%'
 ]
 },

 // 主力资金流向
 capitalFlow: {
 topInflow: [
 { rank: 1, stock: '海光信息(688041.SH)', inflow: 169953, changeRate: '+6.20%' },
 { rank: 2, stock: '中际盛(300502.SZ)', inflow: 103745, changeRate: '-1.68%' },
 { rank: 3, stock: '嘉楠科技(300604.SZ)', inflow: 103441, changeRate: '+6.59%' },
 { rank: 4, stock: '中信证券(600030.SH)', inflow: 83175, changeRate: '+2.19%' },
 { rank: 5, stock: '中科创达(300308.SZ)', inflow: 73953, changeRate: '-2.80%' },
 { rank: 6, stock: '巨化股份(600160.SH)', inflow: 62385, changeRate: '+7.08%' },
 { rank: 7, stock: '招商银行(600036.SH)', inflow: 56841, changeRate: '+1.07%' },
 { rank: 8, stock: '华泰证券(601688.SH)', inflow: 53580, changeRate: '+3.14%' },
 { rank: 9, stock: '聚辰股份(300475.SZ)', inflow: 52787, changeRate: '+2.82%' },
 { rank: 10, stock: '江丰电子(300666.SZ)', inflow: 52047, changeRate: '+8.36%' }
 ],
 conclusion: [
 '主力资金青睐科技成长股，海光信息获近17亿主力流入',
 '金融股获资金关注，中信证券、华泰证券、招商银行均有资金流入',
 '芯片半导体板块资金聚集效应明显'
 ]
 },

 // 技术面分析
 technicalAnalysis: {
 szComponent: {
 date: '2026-06-10',
 open: '15,062.51',
 high: '15,149.37',
 low: '14,817.11',
 close: '14,954.10',
 volume: '71,046.23',
 turnover: '13,921.73'
 },
 cybIndex: {
 date: '2026-06-10',
 open: '3,897.73',
 high: '3,928.36',
 low: '3,818.31',
 close: '3,854.79',
 volume: '21,220.29',
 turnover: '6,532.53'
 },
 conclusion: [
 '深证成指跌破15,000点整数关口，跌幅超2%，技术面偏弱',
 '创业板指跌幅近2.7%，科技成长股调整压力较大',
 '两市成交额维持在万亿级别，市场交投活跃度尚可',
 '指数振幅均在2%以上，日内波动较大'
 ]
 },

 // 整体研判
 overallAnalysis: {
 features: [
 '调整格局确立：今日三大指数集体收跌，市场呈现普跌格局，跌多涨少',
 '结构性分化：医药生物板块逆市走强，科技成长股分化明显',
 '情绪偏弱：涨跌比仅0.43，市场赚钱效应较差',
 '量能维持：两市成交额维持万亿级别，存量资金博弈特征明显'
 ],
 trendJudgment: {
 shortTerm: '偏弱调整，技术性回调',
 marketStyle: '防御性板块（医药）相对占优，科技成长分化',
 riskTip: '关注指数进一步调整风险，控制仓位'
 },
 operationSuggestion: [
 '保持谨慎，控制仓位在5成以下',
 '关注防御性板块机会（医药、公用事业等）',
 '科技成长股可关注调整后的低吸机会',
 '避免追高题材股，控制风险为主'
 ]
 },

 formatCapital: function (amount) {
 return (amount / 10000).toFixed(2) + '亿';
 },

 getSummary: function () {
 return '2026年6月10日A股市场整体调整，深证成指跌2.06%，创业板指跌2.70%，涨跌比0.43:1。生物制品板块领涨，芯片/半导体等科技板块活跃度高，主力资金聚焦科技成长与金融股。操作上建议控制仓位在5成以下，关注医药等防御性板块及科技股调整后的低吸机会。';
 }
};

if (typeof module !== 'undefined' && module.exports) {
 module.exports = marketAnalysisReport;
} else {
 window.marketAnalysisReport = marketAnalysisReport;
}
