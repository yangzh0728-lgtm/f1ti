(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.F1Quiz = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const f1Drivers = [
    {
      id: "verstappen",
      name: "Max Verstappen",
      nickname: "汽车人",
      number: "3",
      skinTone: "#f1c7a8",
      team: "Red Bull",
      headline: "你是 Max Verstappen 型",
      summary: "你喜欢把节奏掌握在自己手里，看到机会会立刻下手。你不太迷恋场面话，更相信速度、判断和执行力。",
      detail: "你的关键词是掌控、速度和明确目标。你做决定通常不拖泥带水，面对竞争会自然进入高专注状态。别人可能觉得你强势，但你真正追求的是把不确定性压到最低：该进攻就进攻，该守住就守住，结果比姿态更重要。适合你的成长提醒是：偶尔把队友和长期节奏也纳入计算，你的锋利会更难被针对。",
      traits: ["强攻", "高压稳定", "直觉快", "胜负心强"],
      color: "#1d4ed8"
    },
    {
      id: "hamilton",
      name: "Lewis Hamilton",
      nickname: "拔罐王刘爵士",
      number: "44",
      skinTone: "#5b3427",
      team: "Ferrari",
      headline: "你是 Lewis Hamilton 型",
      summary: "你有竞争心，也有表达欲。你会在关键时刻相信自己的经验，同时希望团队、价值观和个人风格能一起发光。",
      detail: "你不是只为了赢而赢，你希望胜利有故事、有态度、有自我表达。压力越大，你越会调动经验和情绪能量，把它变成最后阶段的韧性。你在团队里常常是能把人心拉起来的人，也会在被质疑时用表现回应。适合你的成长提醒是：别让外界噪音过度消耗你，真正的节奏感来自内心稳定。",
      traits: ["经验", "情绪能量", "韧性", "影响力"],
      color: "#dc2626"
    },
    {
      id: "leclerc",
      name: "Charles Leclerc",
      nickname: "围场数学家",
      number: "16",
      skinTone: "#f0c4a4",
      team: "Ferrari",
      headline: "你是 Charles Leclerc 型",
      summary: "你敏锐、浪漫、很会在单圈里压榨极限。你对结果要求很高，也容易把热爱和压力都写在脸上。",
      detail: "你对极限很敏感，能在瞬间捕捉到机会，也愿意为了漂亮的一圈承担风险。你不是冷冰冰的计算型选手，热爱会直接进入你的判断系统，所以你的高光时刻往往很耀眼。缺点是，当局势不如预期时，你可能会对自己太苛刻。适合你的成长提醒是：把情绪留给热爱，把复盘留给下一圈。",
      traits: ["速度感", "敏锐", "热烈", "排位型"],
      color: "#ef4444"
    },
    {
      id: "norris",
      name: "Lando Norris",
      nickname: "给",
      number: "1",
      skinTone: "#f1c7a8",
      team: "McLaren",
      headline: "你是 Lando Norris 型",
      summary: "你外表轻松，内心很认真。你擅长把紧张变成玩笑，但真正上场时会盯住细节和长期成长。",
      detail: "你有很强的亲和力，也有不想被低估的认真。你会用幽默缓冲压力，但并不代表你随便；相反，你很在意自己是否持续进步。你适合在信任感强的团队里成长，一旦信心建立，速度和稳定性都会一起上来。适合你的成长提醒是：不要把自我怀疑伪装成玩笑，承认野心也很可爱。",
      traits: ["亲和", "成长型", "灵活", "抗压升级"],
      color: "#f97316"
    },
    {
      id: "piastri",
      name: "Oscar Piastri",
      nickname: "复仇考拉",
      number: "81",
      skinTone: "#f1c7a8",
      team: "McLaren",
      headline: "你是 Oscar Piastri 型",
      summary: "你冷静得像车队无线电里的低温提示。你不急着证明自己，但会用稳定、干净和精准一点点把位置拿回来。",
      detail: "你最大的武器是低波动。别人情绪上头的时候，你会继续按步骤执行；别人急着表现的时候，你会先把基础做满。你不一定用最响亮的方式证明自己，但时间一长，大家会发现你很少浪费机会。适合你的成长提醒是：冷静不是低调到消失，关键时刻也可以更主动地声明你的存在。",
      traits: ["冷静", "精准", "学习快", "低波动"],
      color: "#fb923c"
    },
    {
      id: "alonso",
      name: "Fernando Alonso",
      nickname: "头哥",
      number: "14",
      skinTone: "#d5a07d",
      team: "Aston Martin",
      headline: "你是 Fernando Alonso 型",
      summary: "你是策略动物，擅长在混乱里看到别人没看到的路。你会利用经验、时机和一点点心理战把局面盘活。",
      detail: "你喜欢复杂局面，因为那正是你发挥阅读能力的时候。你会观察别人轮胎、节奏、心理和团队决策，然后从缝隙里找到机会。你不是单纯靠蛮力的人，你享受把比赛变成棋局。适合你的成长提醒是：聪明会让你领先，但信任能让你更省力；有些局面不必每次都亲自操盘到最后。",
      traits: ["老练", "策略", "机会主义", "比赛阅读"],
      color: "#059669"
    },
    {
      id: "russell",
      name: "George Russell",
      nickname: "赛车皇帝",
      number: "63",
      skinTone: "#f1c7a8",
      team: "Mercedes",
      headline: "你是 George Russell 型",
      summary: "你重视标准、纪律和清晰表达。你喜欢把事情做得体面且高效，越复杂的局面越想靠结构感解决。",
      detail: "你对秩序和专业度有天然要求。你会把问题拆成数据、流程、反馈和执行，不太能忍受含糊其辞。你适合承担团队里的稳定基准角色，因为你既想要速度，也想要可解释的进步。适合你的成长提醒是：不是所有事都能被完美管理，偶尔允许一点失控，反而会让你更快。",
      traits: ["自律", "数据感", "表达清楚", "稳定推进"],
      color: "#0891b2"
    },
    {
      id: "sainz",
      name: "Carlos Sainz",
      nickname: "猫肉哥",
      number: "55",
      skinTone: "#d8a17d",
      team: "Williams",
      headline: "你是 Carlos Sainz 型",
      summary: "你务实、聪明、擅长把资源用到最大。你不一定最夸张，但总能用判断力和耐心把结果带回家。",
      detail: "你是那种越了解局面越有杀伤力的人。你不会为了表演而冒险，更喜欢判断什么选择最划算、什么结果最实际。你擅长在不完美条件里拿分，也懂得用稳定表现积累话语权。适合你的成长提醒是：务实不是降低野心，必要时你也可以把目标喊得更大声。",
      traits: ["务实", "聪明", "均衡", "执行"],
      color: "#2563eb"
    },
    {
      id: "antonelli",
      name: "Kimi Antonelli",
      nickname: "篡位太子",
      number: "12",
      skinTone: "#f0c4a4",
      team: "Mercedes",
      headline: "你是 Kimi Antonelli 型",
      summary: "你带着新人的胆量和学习速度。你愿意接受高期待，也愿意在犯错后快速吸收，下一圈继续推。",
      detail: "你的能量来自潜力和新鲜感。你不怕进入高期待环境，甚至会被这种强度激发。你愿意试、愿意学，也能在短时间里吸收大量反馈。适合你的成长提醒是：速度已经很重要，但稳定地解释自己的成长轨迹同样重要；让别人看见你的学习质量，而不只是看见天赋。",
      traits: ["潜力", "学习", "胆量", "新鲜感"],
      color: "#06b6d4"
    },
    {
      id: "bearman",
      name: "Oliver Bearman",
      nickname: "熊人",
      number: "87",
      skinTone: "#f1c7a8",
      team: "Haas",
      headline: "你是 Oliver Bearman 型",
      summary: "你有年轻车手的直接和冲劲，也愿意靠实战建立存在感。你不怕被看见，越有机会越想证明自己。",
      detail: "你面对机会时不会假装淡定，反而会把兴奋转成行动。你适合在实战中快速成长，越是真刀真枪的场合，越能逼出你的适应力。你可能有时会冲得太直接，但这种直接也让你很容易被记住。适合你的成长提醒是：证明自己不只靠一两个高光，也靠连续几次稳稳完成。",
      traits: ["冲劲", "直接", "适应", "机会把握"],
      color: "#64748b"
    },
    {
      id: "bottas",
      name: "Valtteri Bottas",
      nickname: "工具人",
      number: "77",
      skinTone: "#f1c7a8",
      team: "Cadillac",
      headline: "你是 Valtteri Bottas 型",
      summary: "你稳定、松弛、知道什么时候该较真。你有自己的节奏，不需要一直吵闹，也能把事情做得可靠。",
      detail: "你的强项是稳定和自洽。你不太需要一直处在聚光灯中心，也不会轻易被外界节奏带乱。你知道什么时候认真、什么时候放松，这让你在长周期里很可靠。适合你的成长提醒是：松弛不是退让，当机会来到你面前时，可以更直接地把它收入囊中。",
      traits: ["稳定", "松弛", "可靠", "节奏感"],
      color: "#7c3aed"
    },
    {
      id: "perez",
      name: "Sergio Perez",
      nickname: "佩大师/保胎大师",
      number: "11",
      skinTone: "#c9835f",
      team: "Cadillac",
      headline: "你是 Sergio Perez 型",
      summary: "你擅长轮胎管理和逆境生存。你也许不是每一圈都锋芒毕露，但复杂比赛里你很会等机会。",
      detail: "你有很强的耐心和生存能力。你不一定每次都从最理想的位置起步，但你会观察局面、保护资源、等别人犯错。你适合处理长局和逆风局，尤其擅长把看似普通的比赛拖成有机会的比赛。适合你的成长提醒是：防守和等待很有价值，但别让它们遮住你主动进攻的一面。",
      traits: ["防守", "轮胎管理", "韧性", "耐心"],
      color: "#16a34a"
    },
    {
      id: "gasly",
      name: "Pierre Gasly",
      nickname: "加大师",
      number: "10",
      skinTone: "#f0c4a4",
      team: "Alpine",
      headline: "你是 Pierre Gasly 型",
      summary: "你有强烈的自我驱动力，越被低估越想把结果拿出来。你喜欢用稳定表现证明自己配得上更大的舞台。",
      detail: "你的竞争方式带着一种不服输的锋利。你不是永远最张扬的人，但你会把外界怀疑记下来，然后在关键场合一点点还回去。你适合在资源有限的环境里把车和团队推到更高位置，也擅长把情绪转成长期动力。适合你的成长提醒是：证明自己很重要，但别让证明欲替你决定每一次选择。",
      traits: ["韧性", "自驱", "逆风", "证明欲"],
      color: "#ec4899"
    },
    {
      id: "colapinto",
      name: "Franco Colapinto",
      nickname: "可乐瓶",
      number: "43",
      skinTone: "#d99a73",
      team: "Alpine",
      headline: "你是 Franco Colapinto 型",
      summary: "你有新人冲击力，也有南美式的热烈存在感。你愿意抓住机会，让别人快速记住你的名字。",
      detail: "你的优势是鲜活、直接和敢进入未知。你不害怕新环境，反而会被机会点燃。你适合在变化很快的局面里边学边冲，靠适应力打开局面。适合你的成长提醒是：热度能带来关注，连续稳定的表现才能把关注变成真正的位置。",
      traits: ["热烈", "适应", "机会感", "新人冲击"],
      color: "#0ea5e9"
    },
    {
      id: "stroll",
      name: "Lance Stroll",
      nickname: "少爷",
      number: "18",
      skinTone: "#f1c7a8",
      team: "Aston Martin",
      headline: "你是 Lance Stroll 型",
      summary: "你不总是追求外界掌声，更像是在自己的节奏里完成比赛。你能在混乱或湿滑条件里突然拿出很强表现。",
      detail: "你的比赛人格有点反预期。平时你可能不爱把所有想法摊开，但在特殊条件、低抓地力或别人失误变多的时候，你的直觉会变得很有价值。你适合把自我节奏保护好，不被外界评价牵着走。适合你的成长提醒是：别只等特殊机会，主动建立稳定基准会让你的高光更有说服力。",
      traits: ["直觉", "抗噪", "雨战感", "自我节奏"],
      color: "#10b981"
    },
    {
      id: "bortoleto",
      name: "Gabriel Bortoleto",
      nickname: "博托",
      number: "5",
      skinTone: "#c6865f",
      team: "Audi",
      headline: "你是 Gabriel Bortoleto 型",
      summary: "你是学习型天赋派，愿意用扎实步骤进入更大的赛场。你不急着把话说满，更想用成长曲线说话。",
      detail: "你的风格是聪明、耐心和吸收快。你适合在高要求环境里通过复盘、数据和稳定进步建立信任。你不是只靠一瞬间的爆发，而是会慢慢把自己的体系搭起来。适合你的成长提醒是：谦逊很好，但当你已经准备好时，也要敢把位置要出来。",
      traits: ["学习快", "耐心", "潜力", "扎实"],
      color: "#22c55e"
    },
    {
      id: "hulkenberg",
      name: "Nico Hulkenberg",
      nickname: "绿巨人",
      number: "27",
      skinTone: "#f1c7a8",
      team: "Audi",
      headline: "你是 Nico Hulkenberg 型",
      summary: "你成熟、可靠，擅长在复杂周末里把车带回一个合理位置。你像团队里的硬核工具人，但绝不普通。",
      detail: "你的优势是专业、经验和执行质量。你不一定需要很多戏剧性镜头，也能把一场比赛处理得很干净。你适合承担开发、反馈和稳定拿分的角色，尤其在团队转型期很有价值。适合你的成长提醒是：可靠不是只能服务别人，你也可以为自己的高光留出空间。",
      traits: ["可靠", "经验", "反馈", "执行质量"],
      color: "#14b8a6"
    },
    {
      id: "ocon",
      name: "Esteban Ocon",
      nickname: "奥康",
      number: "31",
      skinTone: "#f1c7a8",
      team: "Haas",
      headline: "你是 Esteban Ocon 型",
      summary: "你强硬、有边界感，面对近身缠斗不会轻易让路。你相信位置是争来的，不是等来的。",
      detail: "你的竞争人格很硬。你不喜欢被动接受安排，也不会因为关系压力就放弃自己的赛道空间。你适合在资源有限但需要狠劲的环境里争取机会。适合你的成长提醒是：强硬能保护你，但也要分清什么时候合作能带来更大的长期收益。",
      traits: ["强硬", "边界", "缠斗", "抗压"],
      color: "#475569"
    },
    {
      id: "lawson",
      name: "Liam Lawson",
      nickname: "劳森",
      number: "30",
      skinTone: "#f1c7a8",
      team: "Racing Bulls",
      headline: "你是 Liam Lawson 型",
      summary: "你直接、硬朗，机会来了就马上进入战斗状态。你不太喜欢铺垫，更愿意靠表现站稳。",
      detail: "你的风格带着替补上场也能立刻开打的狠劲。你适应速度快，也不怕和强手正面比较。你适合节奏很紧、容错不高的环境，因为这会逼出你的专注和攻击性。适合你的成长提醒是：证明速度以外，也要证明你能长期稳定地建队友和工程师的信任。",
      traits: ["硬朗", "即战力", "直接", "适应快"],
      color: "#2563eb"
    },
    {
      id: "lindblad",
      name: "Arvid Lindblad",
      nickname: "林宝",
      number: "41",
      skinTone: "#f1c7a8",
      team: "Racing Bulls",
      headline: "你是 Arvid Lindblad 型",
      summary: "你是新鲜血液型，带着大胆、学习欲和一点少年气。你愿意把未知当成入口，而不是阻碍。",
      detail: "你的能量来自成长和冒险。你愿意接受高速度的信息输入，也愿意在不完全确定时先行动起来。你适合在有人给你反馈、又允许你试错的环境里快速升级。适合你的成长提醒是：大胆很珍贵，但越早建立稳定习惯，你的天赋越容易兑现。",
      traits: ["新人", "大胆", "学习欲", "升级中"],
      color: "#60a5fa"
    },
    {
      id: "hadjar",
      name: "Isack Hadjar",
      nickname: "面包超人",
      number: "6",
      skinTone: "#d0a07d",
      team: "Red Bull",
      headline: "你是 Isack Hadjar 型",
      summary: "你情绪浓度高，速度感也强。你会把不甘心变成推力，越想证明越敢往前压。",
      detail: "你的比赛人格很有火花。你可能会把情绪表露得比较明显，但这份强烈也让你在关键时刻有爆发力。你适合需要速度和胆量的位置，但也需要学会让情绪服务判断。适合你的成长提醒是：锋芒不是问题，关键是让锋芒稳定地指向结果。",
      traits: ["火花", "速度", "不服输", "爆发"],
      color: "#1e40af"
    },
    {
      id: "albon",
      name: "Alex Albon",
      nickname: "中国女婿",
      number: "23",
      skinTone: "#d6a07a",
      team: "Williams",
      headline: "你是 Alex Albon 型",
      summary: "你温和但很有韧性，擅长在不完美条件下把车带到超出预期的位置。你是低调的局面修复者。",
      detail: "你的优势是细腻、耐心和团队感。你不一定用强势话术占据中心，但你很会理解车、理解资源限制，也理解什么时候该冒一点险。你适合在重建型团队里做稳定核心。适合你的成长提醒是：体贴和低调很好，但你也值得更明确地要求属于自己的机会。",
      traits: ["细腻", "韧性", "团队核心", "低调高效"],
      color: "#3b82f6"
    }
  ];

  f1Drivers.forEach((driver) => {
    driver.image = `f1-assets/${driver.name}.png`;
    driver.avatar = buildDriverAvatar(driver);
  });

  const f1Questions = [
    {
      id: "q1",
      title: "比赛还剩 8 圈，你在第二名，前车轮胎开始衰退，无线电突然安静得像暴风雨前。你会怎么做？",
      options: [
        option("q1-attack", "Radio: “I can't even stay with them, I'm so slow!” 但下一弯照样硬上", { verstappen: 4, leclerc: 2, bearman: 2, hadjar: 2, lawson: 2 }),
        option("q1-calm", "Radio: “Copy.” 再观察一圈，确认最佳出手机会", { piastri: 4, sainz: 2, alonso: 1, albon: 2, bortoleto: 2 }),
        option("q1-radio", "Radio: “I need a bit of encouragement, mate.” 顺便问清数据", { russell: 4, sainz: 3, bottas: 1, hulkenberg: 2, bortoleto: 1 }),
        option("q1-mind", "Radio: “Leave it to me.” 开始读心术逼前车犯错", { alonso: 3, hamilton: 2, perez: 3, gasly: 2, stroll: 1 })
      ]
    },
    {
      id: "q2",
      type: "scale",
      title: "我喜欢把比赛节奏牢牢掌握在自己手里。",
      options: [
        scaleOption("q2-disagree", "A", "不认同", { norris: 3, colapinto: 2, lindblad: 2, hamilton: 1 }),
        scaleOption("q2-neutral", "B", "中立", { sainz: 3, albon: 2, bottas: 2, hulkenberg: 1 }),
        scaleOption("q2-agree", "C", "认同", { verstappen: 4, leclerc: 3, russell: 2, lawson: 2 })
      ]
    },
    {
      id: "q3",
      title: "排位赛最后一圈，工程师说“最后机会了”，你的脑内 BGM 是？",
      options: [
        option("q3-edge", "Radio: “I am stupid.” 说完下一圈还要继续找极限", { leclerc: 4, verstappen: 3, bearman: 2, hadjar: 2, lindblad: 2 }),
        option("q3-repeat", "Radio: “Copy.” 复制最佳节奏，像 Excel 表一样冷静", { piastri: 3, russell: 2, bottas: 2, bortoleto: 3, hulkenberg: 2 }),
        option("q3-feel", "靠手感找极限，车和人要在同一个频率", { hamilton: 4, norris: 2, antonelli: 1, colapinto: 2 }),
        option("q3-adapt", "根据赛道变化临场改线", { alonso: 3, sainz: 4, perez: 1, albon: 2, stroll: 2 })
      ]
    },
    {
      id: "q4",
      type: "scale",
      title: "车队越乱，我越想站出来定规则。",
      options: [
        scaleOption("q4-disagree", "A", "不认同", { norris: 3, hamilton: 2, bearman: 2, colapinto: 1 }),
        scaleOption("q4-neutral", "B", "中立", { sainz: 3, bottas: 3, albon: 2, hulkenberg: 2 }),
        scaleOption("q4-agree", "C", "认同", { russell: 4, verstappen: 3, ocon: 2, lawson: 2 })
      ]
    },
    {
      id: "q5",
      title: "遇到一台不太好开的车，车队还说“数据看起来还行”，你第一反应是？",
      options: [
        option("q5-force", "先把它开到极限，再说哪里不行", { verstappen: 3, leclerc: 3, antonelli: 2, lawson: 2, ocon: 2, hadjar: 2 }),
        option("q5-data", "打开围场数学，分段比较数据找问题", { russell: 4, piastri: 2, sainz: 1, bortoleto: 3, hulkenberg: 3 }),
        option("q5-adapt", "调整驾驶方式，先把能拿的分拿到", { sainz: 4, perez: 3, bottas: 1, albon: 2, gasly: 1 }),
        option("q5-risk", "试一个大胆设定，也许能打开局面", { alonso: 3, hamilton: 2, bearman: 2, lindblad: 2, colapinto: 1, stroll: 1 })
      ]
    },
    {
      id: "q6",
      type: "scale",
      title: "我最不能接受明明能赢，却因为保守错过机会。",
      options: [
        scaleOption("q6-disagree", "A", "不认同", { piastri: 3, bottas: 3, hulkenberg: 2, bortoleto: 2 }),
        scaleOption("q6-neutral", "B", "中立", { sainz: 3, albon: 2, perez: 2, gasly: 1 }),
        scaleOption("q6-agree", "C", "认同", { verstappen: 3, leclerc: 2, antonelli: 2, ocon: 3 })
      ]
    },
    {
      id: "q7",
      type: "scale",
      title: "我更相信快速学习，而不是一开始就装作什么都懂。",
      options: [
        scaleOption("q7-disagree", "A", "不认同", { verstappen: 3, lawson: 2, hadjar: 2, bearman: 2 }),
        scaleOption("q7-neutral", "B", "中立", { sainz: 3, albon: 2, hulkenberg: 2, gasly: 1 }),
        scaleOption("q7-agree", "C", "认同", { piastri: 3, antonelli: 3, bortoleto: 4, lindblad: 2 })
      ]
    },
    {
      id: "q8",
      title: "你更喜欢哪种超车？导播切过来的那一秒必须有节目效果。",
      options: [
        option("q8-late", "晚刹到底，干净但强硬", { verstappen: 4, bearman: 2, leclerc: 1, lawson: 2, hadjar: 2 }),
        option("q8-setup", "提前三圈布置，最后自然完成", { alonso: 3, perez: 4, sainz: 2, hulkenberg: 2, albon: 1 }),
        option("q8-switch", "用不同线路骗出空间", { hamilton: 3, norris: 2, leclerc: 1, colapinto: 2, stroll: 1 }),
        option("q8-patient", "先保胎，等对方轮胎掉下去，不浪费风险", { piastri: 3, bottas: 3, sainz: 2, bortoleto: 2, gasly: 2 })
      ]
    },
    {
      id: "q9",
      title: "名场面：车队先喊 Box，进站口前一秒又喊 “Stay out, stay out!” 你会怎么回？",
      options: [
        option("q9-now", "Radio: “Ok fine.” 方向盘一打，立刻 Stay out", { piastri: 3, russell: 2, bottas: 2, hulkenberg: 2, bortoleto: 2 }),
        option("q9-question", "Radio: “Plan B? Are you sure?” 现在这个窗口真的更好吗？", { alonso: 3, sainz: 3, verstappen: 1, ocon: 2, gasly: 1 }),
        option("q9-trust", "Radio: “F***, guys... but ok.” 我信你们，但我要知道风险", { hamilton: 3, norris: 2, perez: 1, albon: 2, stroll: 1 }),
        option("q9-data", "Radio: “Give me gaps.” 把差距、轮胎和对手计划都算清楚", { russell: 5, sainz: 2, bortoleto: 2, hulkenberg: 1 })
      ]
    },
    {
      id: "q10",
      type: "scale",
      title: "我会为了长局面主动保胎，不急着每一圈都打鸡血。",
      options: [
        scaleOption("q10-disagree", "A", "不认同", { verstappen: 4, lawson: 3, hadjar: 2, ocon: 2 }),
        scaleOption("q10-neutral", "B", "中立", { piastri: 3, sainz: 2, albon: 2, hulkenberg: 2 }),
        scaleOption("q10-agree", "C", "认同", { perez: 4, bottas: 3, gasly: 2, stroll: 2 })
      ]
    },
    {
      id: "q11",
      title: "突然下雨，赛道抓地力开始消失，弹幕刷起“雨战玄学”。你更像哪种反应？",
      options: [
        option("q11-instinct", "靠直觉先把速度压出来", { verstappen: 4, leclerc: 3, antonelli: 1, stroll: 3, hadjar: 1 }),
        option("q11-smooth", "动作变轻，先保证每一圈干净", { piastri: 4, bottas: 2, russell: 1, bortoleto: 3, hulkenberg: 2 }),
        option("q11-read", "观察所有人的轮胎和路线，准备偷窗口", { alonso: 3, hamilton: 2, sainz: 2, albon: 4, gasly: 1 }),
        option("q11-survive", "先活下来，等别人犯错", { perez: 4, sainz: 2, bearman: 1, ocon: 2, colapinto: 1 })
      ]
    },
    {
      id: "q12",
      type: "scale",
      title: "被质疑时，我更想下一场用成绩回应，而不是解释一大堆。",
      options: [
        scaleOption("q12-disagree", "A", "不认同", { hamilton: 4, norris: 2, alonso: 1, colapinto: 1 }),
        scaleOption("q12-neutral", "B", "中立", { piastri: 3, bottas: 3, hulkenberg: 3, bortoleto: 2 }),
        scaleOption("q12-agree", "C", "认同", { verstappen: 4, gasly: 3, leclerc: 2, lawson: 2 })
      ]
    },
    {
      id: "q13",
      type: "scale",
      title: "队友比我快时，我第一反应是看数据学习，而不是硬刚。",
      options: [
        scaleOption("q13-disagree", "A", "不认同", { verstappen: 3, leclerc: 3, hadjar: 2, lawson: 2 }),
        scaleOption("q13-neutral", "B", "中立", { hamilton: 3, sainz: 3, albon: 2, gasly: 1 }),
        scaleOption("q13-agree", "C", "认同", { piastri: 4, bortoleto: 4, russell: 2, lindblad: 2 })
      ]
    },
    {
      id: "q14",
      title: "安全车出来，策略墙突然集体盯屏，你有一次改变比赛的机会。你会选？",
      options: [
        option("q14-attack", "换胎后全力进攻，别浪费重启窗口", { verstappen: 4, bearman: 2, leclerc: 1, lawson: 2, hadjar: 1 }),
        option("q14-control", "选择最稳定方案，先守住确定收益", { piastri: 3, bottas: 3, sainz: 2, hulkenberg: 2, albon: 2 }),
        option("q14-gamble", "敢赌一个别人不敢赌的窗口", { alonso: 3, hamilton: 2, perez: 2, stroll: 4, colapinto: 2 }),
        option("q14-calc", "只要数据支持，我愿意接受中等风险", { russell: 4, sainz: 2, norris: 1, bortoleto: 2, gasly: 1 })
      ]
    },
    {
      id: "q15",
      type: "scale",
      title: "我享受被车迷起外号，哪怕这个梗会被刷一整季。",
      options: [
        scaleOption("q15-disagree", "A", "不认同", { piastri: 4, bottas: 3, hulkenberg: 2, bortoleto: 2 }),
        scaleOption("q15-neutral", "B", "中立", { sainz: 3, albon: 3, perez: 2, gasly: 1 }),
        scaleOption("q15-agree", "C", "认同", { hamilton: 4, norris: 3, colapinto: 2, lindblad: 2 })
      ]
    },
    {
      id: "q16",
      title: "你最喜欢哪条赛道？别装，赛道偏好很暴露人格。",
      options: [
        option("q16-monaco", "摩纳哥：窄、慢、难超车，但排位一圈像在刀尖上跳舞", { leclerc: 4, alonso: 2, russell: 2, piastri: 1, stroll: 1 }),
        option("q16-suzuka", "铃鹿：高速弯、节奏感、技术含量拉满，错一点就整圈碎掉", { verstappen: 3, piastri: 3, hamilton: 2, gasly: 2, bortoleto: 1 }),
        option("q16-monza", "蒙扎：低阻、尾速、晚刹，导播切过来就要硬上", { sainz: 3, lawson: 2, hadjar: 2, bearman: 2, colapinto: 1 }),
        option("q16-bahrain", "巴林：相对好跑但吃轮胎，保胎、策略、长距离才是真功夫", { perez: 3, bottas: 2, hulkenberg: 2, albon: 2, norris: 1 })
      ]
    }
  ];

  function option(id, label, weights) {
    return { id, label, weights };
  }

  function scaleOption(id, choice, label, weights) {
    return { id, choice, label, weights };
  }

  function calculateF1Result(answerIds) {
    if (!Array.isArray(answerIds) || answerIds.length !== f1Questions.length) {
      throw new Error("Answer count must match question count");
    }

    const scores = Object.fromEntries(f1Drivers.map((driver) => [driver.id, 0]));

    f1Questions.forEach((question, index) => {
      const selectedOption = question.options.find((item) => item.id === answerIds[index]);
      if (!selectedOption) {
        throw new Error(`Unknown answer for ${question.id}`);
      }

      Object.entries(selectedOption.weights).forEach(([driverId, weight]) => {
        scores[driverId] += weight;
      });
    });

    const maxPossible = f1Questions.reduce((total, question) => {
      const questionMax = Math.max(...question.options.map((item) => Math.max(...Object.values(item.weights))));
      return total + questionMax;
    }, 0);
    const sortedMatches = f1Drivers
      .map((driver) => ({ driver, score: scores[driver.id] }))
      .sort((a, b) => b.score - a.score || a.driver.name.localeCompare(b.driver.name));
    const topScore = sortedMatches[0].score;
    const matches = sortedMatches.slice(0, 3).map((match) => {
      const rawPercent = (match.score / maxPossible) * 100;
      return {
        ...match,
        percent: Math.max(40, Math.min(92, Math.round(rawPercent * 1.45 + 18)))
      };
    });

    return {
      driver: matches[0].driver,
      allDrivers: f1Drivers,
      score: topScore,
      percent: matches[0].percent,
      matches
    };
  }

  function buildDriverAvatar(driver) {
    const initials = driver.name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2);
    const skin = driver.skinTone || "#f1c7a8";
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" role="img" aria-label="${driver.name} cartoon avatar">
        <rect width="240" height="240" rx="28" fill="#f8fafc"/>
        <circle cx="120" cy="116" r="82" fill="${driver.color}" opacity="0.16"/>
        <path d="M52 201c10-38 38-58 68-58s58 20 68 58" fill="${driver.color}"/>
        <path d="M54 118c0-48 27-78 66-78s66 30 66 78v22c0 17-14 31-31 31H85c-17 0-31-14-31-31v-22Z" fill="${driver.color}"/>
        <path d="M66 105c12-30 35-47 67-51 25 5 41 23 49 51H66Z" fill="#ffffff" opacity="0.28"/>
        <path d="M75 91c7-32 32-52 67-48 30 3 48 24 54 62-34-18-74-22-121-14Z" fill="#4b372c"/>
        <path d="M77 114c0-32 19-51 47-51h10c28 0 47 19 47 51v22c0 30-21 51-52 51s-52-21-52-51v-22Z" fill="${skin}"/>
        <path d="M77 103c14-25 36-38 67-38 18 5 30 18 38 38-34-11-69-11-105 0Z" fill="#6b4f3d"/>
        <path d="M76 104h88c12 0 22 10 22 22v8H54v-8c0-12 10-22 22-22Z" fill="#111827"/>
        <path d="M83 115h73c9 0 16 7 16 16H68c0-9 7-16 15-16Z" fill="#38bdf8" opacity="0.72"/>
        <path d="M79 153c13 13 28 20 44 20 15 0 29-7 40-20" fill="none" stroke="#111827" stroke-width="8" stroke-linecap="round"/>
        <circle cx="87" cy="136" r="5" fill="#111827"/>
        <circle cx="153" cy="136" r="5" fill="#111827"/>
        <path d="M120 41v62" stroke="#ffffff" stroke-width="12" stroke-linecap="round" opacity="0.86"/>
        <rect x="88" y="180" width="64" height="34" rx="8" fill="#111827"/>
        <text x="120" y="203" text-anchor="middle" font-family="Arial, sans-serif" font-size="21" font-weight="900" fill="#ffffff">${driver.number}</text>
        <circle cx="67" cy="190" r="10" fill="${skin}"/>
        <circle cx="173" cy="190" r="10" fill="${skin}"/>
        <path d="M77 180 63 190M163 180l14 10" stroke="${driver.color}" stroke-width="18" stroke-linecap="round"/>
      </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  return {
    calculateF1Result,
    f1Drivers,
    f1Questions
  };
});

if (typeof document !== "undefined" && typeof window !== "undefined" && window.F1Quiz) {
  const quizForm = document.getElementById("f1-quiz-form");
  const submitButton = document.getElementById("submit-quiz");
  const resetButton = document.getElementById("reset-quiz");
  const progressText = document.getElementById("quiz-progress");
  const progressBar = document.getElementById("quiz-progress-bar");
  const resultSection = document.getElementById("f1-result");
  const resultHeadline = document.getElementById("result-headline");
  const resultSummary = document.getElementById("result-summary");
  const resultDetail = document.getElementById("result-detail");
  const resultTraits = document.getElementById("result-traits");
  const resultPodium = document.getElementById("result-podium");
  const resultAvatar = document.getElementById("result-avatar");
  const resultDriverName = document.getElementById("result-driver-name");
  const resultDriverTeam = document.getElementById("result-driver-team");
  const resultDriverNumber = document.getElementById("result-driver-number");
  const resultMatchPercent = document.getElementById("result-match-percent");

  if (quizForm) {
    const { calculateF1Result, f1Questions } = window.F1Quiz;

    function renderQuestions() {
      quizForm.innerHTML = f1Questions
        .map(
          (question, questionIndex) => `
            <fieldset class="f1-question">
              <legend>
                <span>${String(questionIndex + 1).padStart(2, "0")}</span>
                ${question.title}
              </legend>
              <div class="f1-options">
                ${question.options
                  .map(
                    (option) => `
                      <label class="f1-option">
                        <input type="radio" name="${question.id}" value="${option.id}" />
                        <span>${option.choice ? `<b>${option.choice}</b>` : ""}${option.label}</span>
                      </label>
                    `
                  )
                  .join("")}
              </div>
            </fieldset>
          `
        )
        .join("");
    }

    function getSelectedAnswers() {
      return f1Questions.map((question) => {
        const checked = quizForm.querySelector(`input[name="${question.id}"]:checked`);
        return checked ? checked.value : null;
      });
    }

    function updateProgress() {
      const answeredCount = getSelectedAnswers().filter(Boolean).length;
      const percent = Math.round((answeredCount / f1Questions.length) * 100);

      progressText.textContent = `${answeredCount} / ${f1Questions.length}`;
      progressBar.style.width = `${percent}%`;
      submitButton.disabled = answeredCount !== f1Questions.length;
    }

    function renderResult(result) {
      const accent = result.driver.color;

      resultSection.style.setProperty("--driver-color", accent);
      resultAvatar.onerror = () => {
        resultAvatar.onerror = null;
        resultAvatar.src = result.driver.avatar;
      };
      resultAvatar.src = result.driver.image;
      resultAvatar.alt = `${result.driver.name} 卡通图片`;
      resultDriverName.textContent = result.driver.nickname;
      resultDriverTeam.textContent = `${result.driver.name} · ${result.driver.team}`;
      resultDriverNumber.textContent = `比赛号码 #${result.driver.number}`;
      resultMatchPercent.textContent = `匹配度 ${result.percent}%`;
      resultHeadline.textContent = `${result.driver.nickname}（${result.driver.name}）`;
      resultSummary.textContent = result.driver.summary;
      resultDetail.textContent = result.driver.detail;
      resultTraits.innerHTML = result.driver.traits.map((trait) => `<span>${trait}</span>`).join("");
      resultPodium.innerHTML = result.matches
        .map(
          (match, index) => `
            <article class="f1-podium-item">
              <span class="f1-rank">P${index + 1}</span>
              <div>
                <strong>${match.driver.nickname}</strong>
                <small>#${match.driver.number} · ${match.driver.name} · ${match.driver.team}</small>
                <small>匹配度 ${match.percent}% · ${match.score} pts</small>
              </div>
            </article>
          `
        )
        .join("");

      resultSection.hidden = false;
      resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function submitQuiz() {
      const answers = getSelectedAnswers();
      if (answers.some((answer) => !answer)) {
        updateProgress();
        return;
      }

      renderResult(calculateF1Result(answers));
    }

    function resetQuiz() {
      quizForm.reset();
      resultSection.hidden = true;
      updateProgress();
      document.getElementById("f1-quiz").scrollIntoView({ behavior: "smooth", block: "start" });
    }

    renderQuestions();
    updateProgress();

    quizForm.addEventListener("change", updateProgress);
    submitButton.addEventListener("click", submitQuiz);
    resetButton.addEventListener("click", resetQuiz);
  }
}
