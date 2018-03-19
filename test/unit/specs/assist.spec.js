import { oneOf, consoleOutput } from '@/utils/assist'

describe('oneOf', () => {
  it('should return true', () => {
    expect(oneOf(1, [1, 2, 3])).to.equal(true)
  })

  it('should return false', () => {
    expect(oneOf('a', ['1', 'b', 'adc'])).to.equal(false)
  })
})


describe('consoleOutput', () => {
  it('should return sss', () => {
    console.log("-----------");
    consoleOutput(["", "掘金餐厅招前端厨师：", "", "地处望京，厨具先进，食材鲜美，朝十晚七，周六日均不营业。", "", 
    "招牌菜有爆炒 Vue.js、红烧 Node.js、Chrome 炖 Extension、宫爆 Panfish……", "", 
    "要求注意卫生，以做菜为乐，有精进厨艺之心；熟悉烹饪基础理论者优先，可开发新式菜肴者优先。", "", "简历注明「FROM_JUEJIN_CONSOLE」投至：webuster@xitu.io。"].join("\n"), 
    "BUG 为何迟迟不改？页面为何加载失败？元素为何难以对齐？这一切究竟是人性的扭曲还是道德的沦丧？");
    console.log("-----------")
  })
})
