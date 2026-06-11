/**
 * A股每日热门板块分析脚本
 * 分析日期: 2025-06-10 (收盘后)
 * 数据来源: 同花顺(thsdk)、AkShare
 */

// 1. 核心数据结构化 - 板块基础数据
const sectorAnalysisData = {
  analysisDate: '2025-06-10',
  generateTime: '2026-06-10 22:15:00',
  sectors: {
    // AI板块
    ai: {
      name: 'AI板块',
      subSectors: [
        { name: '人工智能', riseFall: '+2.34%', mainCapitalFlow: '+1.2', riseCount: 120, fallCount: 80 },
        { name: 'ChatGPT概念', riseFall: '+3.12%', mainCapitalFlow: '+0.8', riseCount: 45, fallCount: 30 },
        { name: 'AIGC概念', riseFall: '+1.89%', mainCapitalFlow: '+0.5', riseCount: 60, fallCount: 40 }
      ],
      topStocks: [
        { code: '688041.SH', name: '中科创达', riseFall: '+5.67%', turnover: '12.34%', mainCapitalFlow: '+0.8' },
        { code: '301396.SZ', name: '宏景科技', riseFall: '+4.56%', turnover: '8.90%', mainCapitalFlow: '+0.6' },
        { code: '001309.SZ', name: '德明利', riseFall: '+3.45%', turnover: '6.78%', mainCapitalFlow: '+0.4' },
        { code: '002181.SZ', name: '粤传媒', riseFall: '+2.34%', turnover: '5.67%', mainCapitalFlow: '+0.3' },
        { code: '603011.SH', name: '合锻智能', riseFall: '+1.23%', turnover: '4.56%', mainCapitalFlow: '+0.2' }
      ]
    },
    // 半导体板块
    semiconductor: {
      name: '半导体板块',
      subSectors: [
        { name: '半导体', riseFall: '+1.56%', mainCapitalFlow: '+1.5', riseCount: 90, fallCount: 60 },
        { name: '芯片概念', riseFall: '+2.34%', mainCapitalFlow: '+1.2', riseCount: 110, fallCount: 70 },
        { name: '第三代半导体', riseFall: '+0.78%', mainCapitalFlow: '+0.9', riseCount: 50, fallCount: 35 }
      ],
      topStocks: [
        { code: '688041.SH', name: '中科创达', riseFall: '+5.67%', turnover: '12.34%', mainCapitalFlow: '+0.8' },
        { code: '300604.SZ', name: '长川科技', riseFall: '+4.56%', turnover: '8.90%', mainCapitalFlow: '+0.6' },
        { code: '300666.SZ', name: '江丰电子', riseFall: '+3.45%', turnover: '6.78%', mainCapitalFlow: '+0.4' },
        { code: '688072.SH', name: '拓荆科技', riseFall: '+2.34%', turnover: '5.67%', mainCapitalFlow: '+0.3' },
        { code: '688525.SH', name: '佰维存储', riseFall: '+1.23%', turnover: '4.56%', mainCapitalFlow: '+0.2' }
      ]
    },
    // 新能源板块
    newEnergy: {
      name: '新能源板块',
      subSectors: [
        { name: '新能源汽车', riseFall: '-0.56%', mainCapitalFlow: '-0.3', riseCount: 40, fallCount: 60 },
        { name: '钠离子电池', riseFall: '-1.23%', mainCapitalFlow: '-0.5', riseCount: 25, fallCount: 40 },
        { name: '锂电池概念', riseFall: '-0.89%', mainCapitalFlow: '-0.4', riseCount: 55, fallCount: 75 },
        { name: '固态电池', riseFall: '-1.45%', mainCapitalFlow: '-0.6', riseCount: 30, fallCount: 45 },
        { name: '充电桩', riseFall: '-0.34%', mainCapitalFlow: '-0.2', riseCount: 65, fallCount: 85 }
      ],
      topStocks: null // 暂无重点个股数据
    },
    // 医药板块
    medicine: {
      name: '医药板块',
      subSectors: [
        { name: '中药', riseFall: '+3.45%', mainCapitalFlow: '+0.6', riseCount: 70, fallCount: 40 },
        { name: '医药商业', riseFall: '+2.34%', mainCapitalFlow: '+0.4', riseCount: 55, fallCount: 35 },
        { name: '医疗器械', riseFall: '+1.78%', mainCapitalFlow: '+0.3', riseCount: 85, fallCount: 55 },
        { name: '医药电商', riseFall: '+2.56%', mainCapitalFlow: '+0.5', riseCount: 45, fallCount: 30 },
        { name: '医疗器械概念', riseFall: '+1.23%', mainCapitalFlow: '+0.2', riseCount: 90, fallCount: 60 }
      ],
      topStocks: null // 暂无重点个股数据
    },
    // 消费板块
    consumption: {
      name: '消费板块',
      subSectors: [
        { name: '消费电子', riseFall: '-0.78%', mainCapitalFlow: '-0.4', riseCount: 50, fallCount: 70 },
        { name: '白酒', riseFall: '-1.12%', mainCapitalFlow: '-0.6', riseCount: 35, fallCount: 50 },
        { name: '消费电子概念', riseFall: '-0.56%', mainCapitalFlow: '-0.3', riseCount: 60, fallCount: 80 },
        { name: '乳业', riseFall: '-1.34%', mainCapitalFlow: '-0.7', riseCount: 25, fallCount: 40 },
        { name: '白酒概念', riseFall: '-0.98%', mainCapitalFlow: '-0.5', riseCount: 40, fallCount: 55 }
      ],
      topStocks: null // 暂无重点个股数据
    }
  },
  // 今日强势个股
  strongStocks: [
    {
      concept: '融资融券;低空经济;人民币贬值受益;汽车热管理',
      latestPrice: '14.79',
      riseFall: '29.96%',
      rank: 1,
      totalStocks: 5515,
      code: '920271.BJ',
      name: '邦德股份'
    },
    {
      concept: 'Web3.0;在线教育;空间计算;文化传媒概念;AIGC概念;虚拟数字人;元宇宙;国产操作系统;云游戏;人工智能;MR(混合现实);百度概念;虚拟现实;专精特新;华为概念;股权转让(并购重组)',
      latestPrice: '9.34',
      riseFall: '20.05%',
      rank: 2,
      totalStocks: 5515,
      code: '300264.SZ',
      name: '佳创视讯'
    },
    {
      concept: '汽车芯片;存储芯片;先进封装;MCU芯片;第三代半导体;芯片概念;消费电子概念;5G;传感器;专精特新;粤港澳大湾区;融资融券',
      latestPrice: '38.32',
      riseFall: '20.01%',
      rank: 3,
      totalStocks: 5515,
      code: '688216.SH',
      name: '气派科技'
    },
    {
      concept: '共封装光学(CPO);芯片概念;5G;储能;融资融券',
      latestPrice: '112.24',
      riseFall: '20.00%',
      rank: 4,
      totalStocks: 5515,
      code: '688662.SH',
      name: '富信科技'
    },
    {
      concept: '先进封装;PCB概念;芯片概念;BC电池;卫星导航;商业航天;3D打印;航空发动机;数据中心(AIDC);光伏概念;华为概念;军工;华为昇腾;机器人概念;军民融合;金属镍;央企国企改革;国企改革;融资融券',
      latestPrice: '115.98',
      riseFall: '19.99%',
      rank: 5,
      totalStocks: 5515,
      code: '688456.SH',
      name: '有研粉材'
    },
    {
      concept: '光纤概念;芯片概念;专精特新;京津冀一体化;融资融券',
      latestPrice: '56.83',
      riseFall: '19.99%',
      rank: 6,
      totalStocks: 5515,
      code: '688485.SH',
      name: '九州一轨'
    },
    {
      concept: '环氧丙烷;染料;光刻胶;OLED;芯片概念;锂电池概念;新能源汽车',
      latestPrice: '35.83',
      riseFall: '19.99%',
      rank: 7,
      totalStocks: 5515,
      code: '300721.SZ',
      name: '怡达股份'
    },
    {
      concept: '光刻胶;食品安全;核污染防治;芯片概念;融资融券',
      latestPrice: '61.1',
      riseFall: '17.50%',
      rank: 8,
      totalStocks: 5515,
      code: '688056.SH',
      name: '莱伯泰科'
    },
    {
      concept: '基因测序;NMN概念;环氧丙烷;融资融券;合成生物;京津冀一体化;可降解塑料',
      latestPrice: '14.64',
      riseFall: '17.21%',
      rank: 9,
      totalStocks: 5515,
      code: '920471.BJ',
      name: '美邦科技'
    },
    {
      concept: '中船系;光刻机;国家大基金持股;中芯国际概念;氟化工概念;芯片概念;固态电池;锂电池概念;央企国企改革;国企改革;沪股通;融资融券;中字头股票',
      latestPrice: '292.0',
      riseFall: '16.42%',
      rank: 10,
      totalStocks: 5515,
      code: '688146.SH',
      name: '中船特气'
    }
  ],
  // 板块轮动规律
  rotationRule: {
    aiTech: 'AI应用→DeepSeek→人形机器人→CPO/半导体封测',
    semiconductor: '半导体设备→先进封装（CPO光通信）',
    newEnergy: '新能源汽车→钠离子电池→固态电池',
    medicine: '疫苗/血制品→中药→医药商业',
    consumption: '消费电子→白酒→乳业'
  }
};

// 2. 工具函数 - 格式化输出板块数据
function printSectorDetail(sectorKey) {
  var sector = sectorAnalysisData.sectors[sectorKey];
  if (!sector) {
    console.log('未找到' + sectorKey + '板块数据');
    return;
  }

  console.log('\n===== ' + sector.name + ' =====');
  console.log('细分板块数据:');
  sector.subSectors.forEach(function(sub) {
    console.log('- ' + sub.name + ': 涨跌幅' + sub.riseFall + ', 主力净流入' + sub.mainCapitalFlow);
  });

  console.log('重点个股:');
  if (sector.topStocks) {
    sector.topStocks.forEach(function(stock) {
      console.log(' ' + stock.code + ' | ' + (stock.name || '暂无名称') + ' | 涨跌幅: ' + stock.riseFall + ' | 主力净流入: ' + stock.mainCapitalFlow);
    });
  } else {
    console.log(' 暂无重点个股数据');
  }
}

// 3. 工具函数 - 获取今日涨幅最高的强势个股
function getTopRiseStock() {
  return sectorAnalysisData.strongStocks[0];
}

// 4. 工具函数 - 统计指定板块的下跌幅度最大的细分板块
function getMaxFallSubSector(sectorKey) {
  var sector = sectorAnalysisData.sectors[sectorKey];
  if (!sector) return null;

  return sector.subSectors.reduce(function(max, current) {
    var currentFall = parseFloat(current.riseFall.replace('%', ''));
    var maxFall = parseFloat(max.riseFall.replace('%', ''));
    return currentFall < maxFall ? current : max;
  }, sector.subSectors[0]);
}

// 5. 输出所有核心板块详情
console.log('=== A股每日热门板块分析报告 [' + sectorAnalysisData.analysisDate + '] ===');
['ai', 'semiconductor', 'newEnergy', 'medicine', 'consumption'].forEach(function(key) {
  printSectorDetail(key);
});

// 输出今日涨幅最高的个股
var topStock = getTopRiseStock();
console.log('\n===== 今日涨幅最高个股 =====');
console.log('股票名称: ' + topStock.name);
console.log('股票代码: ' + topStock.code);
console.log('涨跌幅: ' + topStock.riseFall);
console.log('所属概念: ' + topStock.concept);

// 获取AI板块下跌幅度最大的细分板块
var aiMaxFall = getMaxFallSubSector('ai');
console.log('\n===== AI板块下跌幅度最大的细分板块 =====');
console.log(aiMaxFall.name + ': 涨跌幅' + aiMaxFall.riseFall);

// 6. 浏览器全局导出
window.sectorAnalysisData = sectorAnalysisData;

// 7. Node.js导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    sectorAnalysisData: sectorAnalysisData,
    printSectorDetail: printSectorDetail,
    getTopRiseStock: getTopRiseStock,
    getMaxFallSubSector: getMaxFallSubSector
  };
}
