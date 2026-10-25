import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  X,
  Send,
  Download,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  Calendar,
  Target,
  Users,
  ArrowRight,
  Brain,
  Database,
  Layers,
  FileText,
  Network,
  Building2,
  GraduationCap,
  Cpu,
  Briefcase,
  CheckCheck,
  Bot,
  AlertTriangle,
  CheckCircle2,
  BookOpen,
  Zap,
  TrendingUp,
  Clock,
  Flag,
  Circle,
  BarChart3,
  PenLine,
  Star,
  ChevronRight,
  Gamepad2,
  Maximize2,
  Minimize2,
  ExternalLink,
  Copy,
  Check,
  Laptop,
  User,
  Phone,
  MessageSquare,
  Loader2
} from "lucide-react";

// ─── HOOKS ──────────────────────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, active: boolean) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const total = 90;
    const id = setInterval(() => {
      frame++;
      const p = Math.min(frame / total, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p >= 1) clearInterval(id);
    }, 18);
    return () => clearInterval(id);
  }, [active, target]);
  return val;
}

// ─── DATA ───────────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    id: 1,
    year: "2022",
    title: "大學畢業",
    org: "實踐大學-食品營養與保健生技學系",
    color: "#4F7DF7",
    Icon: GraduationCap,
    desc: "進入食品營養與保健生技學系，建立食品科學與生物科技基礎，並透過專題與實驗訓練培養邏輯分析及問題解決能力。",
    items: [
      "修習食品科學、營養學核心課程",
      "培養科學分析、實驗設計與數據整理能力",
      "參與醫院營養師實習，累積需求分析、溝通協調與問題解決實務經驗",
    ],
  },
  {
    id: 2,
    year: "2024",
    title: "研究所畢業",
    org: "中興大學-生物科技學研究所",
    color: "#8B5CF6",
    Icon: BookOpen,
    desc: "進入生物科技學研究所，專注植物分子生物學與生物資訊分析研究，培養獨立研究、實驗設計與數據分析能力，強化理論與實務整合能力。",
    items: [
      "利用植物病毒移動蛋白探討蛋白質移動及細胞間訊息傳遞機制",
      "參與2次台灣植物學年會暨研討會，訓練對外溝通與問題討論能力",
      "運用分子實驗、生物資訊分析與質譜分析(MS/MS)資料結合進行實驗",
    ],
  },
  {
    id: 3,
    year: "2024",
    title: "專案管理師",
    org: "振興發科技有限公司",
    color: "#10B981",
    Icon: Briefcase,
    desc: "進入環保資訊系統業務公司擔任專案管理師，參與政府資訊系統建置與流程優化專案，累積專案規劃、執行系統整合與利害關係人溝通經驗。",
    items: [
      "參與政府標案計畫書撰寫，協助規劃執行內容、時程安排及專案策略",
      "規劃與執行政府資訊整合專案，完成業務網站約 80% 改版作業",
      "建立專案管理流程、工作規範與業務文件，完善執行紀錄與知識留存機制",
      "進行資安問題分析與改善，協調相關單位完成系統軟硬體調整並符合機關規範",
      "辦理專案對外說明會，統籌事前準備、現場執行與成效回饋，提升活動執行品質",
      "執行利害關係人需求訪談，整合業務需求與政策方向",
    ],
  },
];

const PROJECTS = [
  {
    id: 1,
    name: "系統主機作業系統升級",
    tags: ["跨單位協調", "時程管理", "風險控管"],
    situation:
      "因應上級機關來文指示，辦理既有系統主機作業系統升級作業。",
    challenge:
      "本次升級涉及跨單位協調，需要聯繫不同單位配合，安排升級作業與並確保關鍵服務不中斷。",
    thinking: [
      "時程規劃：如何評估各單位執行時間提供客戶預計完成日期",
      "申請事宜：過程彙整需升級內容及聯繫政府資訊單位(資訊科技司)確認辦理流程並配合掃描",
      "升級及測試：將需求交付工程師，完成升級作業並確認系統內容啟用正常",
      "問題接收：若有使用者反饋，如何進行統整分類並逐一交付工程師檢查"
    ],
    action: 
      "協調申請作業及控管各階段時程，確認各方作業安排，事前擬定公告方式及重要服務是否可用，並進行上線測試，蒐集使用者問題並協助排除。" 
,
    results: [
      "依上級機關指定期限完成升級交付",
      "確保關鍵服務於升級中及升級後正常運作",
      "進行流程紀錄進行經驗傳承",
    ],
    deliverables: [
      "申請流程與預估工時表",
      "相關申請文件",
      "使用者問題彙整與追蹤紀錄",
      "本次作業流程紀錄",
    ],
  },
  {
    id: 2,
    name: "全系統翻新開發工項",
    tags: ["需求分析","資訊整合","交付管理"],
    situation:
      "完成全系統約 70 項功能盤點，並協助規劃與執行程式架構翻新。",
    challenge:
      "改寫項目眾多，須妥善安排交付及產出品質維護，確保符合政策需求後納入報告",
    thinking:[
      "Request for Proposal：協助彙整專案需求、工作範疇與功能規格，參與 RFP 文件製作，以及準備評選簡報。",
      "需求訪談：辦理需求訪談會議，釐清業務流程、使用情境及技術限制評估討論。",
      "交付開發：將業主需求轉化為功能規格、操作流程及介面模擬，提供工程團隊作為開發依據。",
      "時間管理：追蹤開發進度，分階段彙報主管及業主確保符合預期。",
      "展示會議：進行系統功能展示，彙整業主回饋並協調工程團隊進行功能調整。",
      "滿意度調查：擬定辦理方式、題目及分析結果，作為後續優化依據",
      "納入階段性報告：彙整系統開發進度、功能成果及專案執行事項，納入階段性成果報告。",
    ],
    action:
      "執行需求訪談與分析，將業務需求轉化為功能規格及介面規劃，辦理系統展示、回饋蒐集及成果彙整。",
    results: [
      "完成階段性系統功能開發與交付",
      "依需求完成功能規格與介面規劃",
      "彙整使用者回饋作為後續優化依據",
    ],
    deliverables: [
      "需求訪談會議紀錄",
      "功能需求規格書",
      "介面模擬圖(Mockup)",
      "甘特圖",
      "滿意度調查結果",
      "階段成果報告",
    ],
  },
  {
    id: 3,
  name: "專案時程管理",
  tags: ["敏捷式開發", "進度管理", "迭代開發"],
  situation:
    "系統翻新涉及多項功能開發，採分階段、迭代式方式推進，依功能優先順序安排開發與交付。",
  challenge:
    "開發過程需求可能隨展示與使用者回饋調整，須在時程、需求變更及開發資源間取得平衡，確保各階段成果如期產出。",
  thinking: [
    "工作拆分：依功能範圍及優先順序拆分開發項目，建立各階段工作安排。",
    "階段規劃：依開發複雜度及相依關係安排功能交付順序與預計完成時間。",
    "迭代開發：採分階段方式完成可展示成果，再依使用者回饋調整後續開發內容。",
    "進度追蹤：每日15分鐘站會，了解團隊開發進度，追蹤待辦事項、延遲項目或問題。",
    "回饋調整：透過系統展示確認實際需求，依回饋調整功能優先順序及後續開發安排。",
    "階段交付：將完成之功能分批確認及交付，降低一次性開發造成需求落差的風險。"
  ],
  action:
    "依功能優先順序拆分開發項目，採迭代方式追蹤進度與分階段交付，透過系統展示及回饋持續調整後續開發安排。",
  results: [
    "落實分階段功能開發與交付機制",
    "透過展示及回饋降低需求落差",
    "依實際開發情況彈性調整功能交付順序",
  ],
  deliverables: [
    "專案時程表",
    "功能開發看板（Kanban Board）",
    "功能進度追蹤表",
    "功能展示會議紀錄",
  ],
},
  {
    id: 4,
  name: "顧問角色",
  tags: ["業務流程分析", "需求釐清", "方案規劃"],
  situation:
    "依環境工程實務及既有作業流程，協助檢視業者實際執行情形，釐清流程與系統功能間的落差。",
  challenge:
    "業者提出執行問題後，需先與機關確認實際需求與調整方向，再評估既有系統流程及修改可行性，兼顧業務需求與系統執行。",
  thinking: [
    "流程檢視：依既有業務流程及實際執行情形，確認作業方式是否符合需求。",
    "問題釐清：蒐整業者反應事項，分析實際作業與既有流程間的落差。",
    "需求討論：與機關討論問題背景及改善方向，確認業務需求與處理原則。",
    "方案評估：針對需調整之系統流程，評估功能修改方式及執行可行性。",
    "系統調整：依確認方向協調工程團隊進行系統流程或功能修改。",
    "結果確認：確認調整後流程符合實際業務需求，並持續蒐整使用回饋。"
  ],
  action:
    "檢視業務流程與實際執行情形，釐清業者需求並與機關確認方向，評估系統調整方案後協調後續修改。",
  results: [
    "協助釐清業務流程與系統功能落差",
    "依機關確認方向完成系統流程調整",
    "建立業務需求至系統改善之溝通與處理流程"
  ],
  deliverables: [
    "流程檢視紀錄",
    "業者需求及問題彙整",
    "需求討論紀錄",
    "系統流程調整規劃",
    "功能修改確認紀錄"
  ]
  },
];

const SKILLS = [
  {
    id: "pm",
    name: "專案管理",
    Icon: Target,
    color: "#4F7DF7",
    desc: "端到端專案規劃、執行與交付管理",
    subs: [
      "需求分析",
      "利害關係人溝通",
      "進度管理",
      "風險管理",
      "文件撰寫",
      "品質管控",
    ],
    projects: [
      "跨部會資料交換平台",
      "智慧政府服務整合系統",
      "AI 輔助文件生成系統",
    ],
  },
  {
    id: "integration",
    name: "資訊整合",
    Icon: Database,
    color: "#8B5CF6",
    desc: "跨系統資料串接、流程設計與標準化",
    subs: [
      "工作流設計",
      "資料組織架構",
      "視覺化呈現",
      "API 介接規劃",
      "資料品質管控",
    ],
    projects: ["跨部會資料交換平台", "開放資料品質管控平台"],
  },
  {
    id: "ai",
    name: "AI 應用",
    Icon: Brain,
    color: "#10B981",
    desc: "AI 工具整合、提示工程與工作流自動化",
    subs: [
      "提示工程設計",
      "ChatGPT 企業應用",
      "工作流自動化",
      "AI 效益評估",
      "知識庫建構",
    ],
    projects: ["AI 輔助文件生成系統"],
  },
];

const ACHIEVEMENTS = [
  {
    label: "完整交付專案",
    value: 2,
    suffix: "",
    Icon: CheckCheck,
    color: "#4F7DF7",
  },
  {
    label: "參與招標數",
    value: 4,
    suffix: "",
    Icon: Building2,
    color: "#8B5CF6",
  },
  {
    label: "撰寫規格文件數",
    value: 50,
    suffix: "+",
    Icon: Users,
    color: "#10B981",
  },
  {
    label: "正式簡報",
    value: 6,
    suffix: "",
    Icon: Layers,
    color: "#F59E0B",
  },
  // { label: "技術文件", value: 100, suffix: "+", Icon: FileText, color: "#EF4444" },
];

const SIDE_PROJECTS = [
  {
    id: 1,
    name: "PM 效率儀表板",
    status: "上線中",
    statusColor: "#22C55E",
    desc: "個人專用的每日任務、里程碑追蹤與會議管理工具，以 Notion 風格設計體驗，深度整合 PM 工作流。",
    tags: ["React", "TypeScript", "Supabase"],
    architecture:
      "前端 React 18 + 後端 Supabase + 即時 WebSocket 同步",
    lessons:
      "設計符合 PM 思維的 UX 流程需要深度理解使用者心智模型，反覆迭代才能到位。",
    roadmap:
      "整合 AI 自動摘要與風險預警功能，讓儀表板能主動提醒潛在風險。",
    hasDemo: true,
    hasGithub: true,
  },
  {
    id: 2,
    name: "政府資料視覺化工具",
    status: "開發中",
    statusColor: "#4F7DF7",
    desc: "將政府開放資料轉換為互動式圖表，以易讀的視覺化方式提升民眾對公共資訊的理解與可近性。",
    tags: ["D3.js", "Python", "FastAPI"],
    architecture:
      "Python 爬蟲 + FastAPI RESTful API + D3.js 互動視覺化前端",
    lessons:
      "政府開放資料的清理複雜度遠超預期，資料品質標準化是首要挑戰。",
    roadmap:
      "加入 AI 自動分析，讓工具能自動摘要資料趨勢並以自然語言解釋。",
    hasDemo: false,
    hasGithub: true,
  },
  {
    id: 3,
    name: "AI 提示工程知識庫",
    status: "持續更新",
    statusColor: "#8B5CF6",
    desc: "整理 200+ 個政府行政、文件撰寫、資料分析場景的最佳化提示詞，建立可複用的提示工程庫。",
    tags: ["Notion", "AI", "提示工程"],
    architecture:
      "Notion 結構化資料庫 + 自動同步腳本 + 分類標籤系統",
    lessons:
      "提示詞的情境通用性與可複用性設計是最複雜的智識挑戰。",
    roadmap:
      "開發 Chrome 擴充功能，讓使用者能在任何網頁快速調用提示詞庫。",
    hasDemo: true,
    hasGithub: false,
  },
];

const CHAT_QA: Record<string, string> = {
  intro:
    "Eric 是一位資深專案管理師，專注於政府數位轉型與資訊整合領域，擁有 7 年以上實務經驗。他結合系統化 PM 方法論與前沿 AI 工具應用，致力於打造更高效的政府數位服務生態。目前持有 PMP 國際認證，並積極研究 AI 在公部門的落地應用策略，是少數同時擁有政府業務理解與技術整合能力的複合型 PM。",
  projects:
    "Eric 主導過多項大型政府專案：\n\n① 跨部會資料交換平台 — 連結 12 個政府機關，資料交換效率提升 380%\n\n② 智慧政府服務整合系統 — 整合 8 項民眾服務，申辦時間縮短 60%\n\n③ AI 輔助文件生成系統 — 節省 70% 文件工時，品質一致性提升 90%\n\n④ 開放資料品質管控平台 — 規劃中，目標提升開放資料再利用率 3 倍",
  strengths:
    "Eric 的核心優勢：\n\n① 跨域溝通能力 — 有效橋接技術團隊與政府行政人員，消弭認知落差\n\n② 系統化思維 — 善用流程設計與標準化方法解決複雜跨機關問題\n\n③ AI 工具整合 — 將新技術實際落地到業務流程，不只是使用而是創造價值\n\n④ 嚴謹的文件能力 — 確保知識傳承、品質一致性與稽核合規性",
  hire: "選擇 Eric 的五大理由：\n\n✦ 政府專案實戰豐富，深度理解公部門特殊需求與限制\n✦ 技術理解 × 行政管理雙軌能力，溝通零障礙\n✦ AI 工具前瞻視野，協助組織提前布局數位轉型\n✦ 所有專案均準時高品質交付，信賴度有實績背書\n✦ 具備建立標準與制度的能力，影響超越單一專案",
};

const SUGGESTED_QS = [
  { label: "介紹 Eric", key: "intro" },
  { label: "管理過哪些專案？", key: "projects" },
  { label: "Eric 的優勢是什麼？", key: "strengths" },
  { label: "為什麼要聘請 Eric？", key: "hire" },
];

type Project = (typeof PROJECTS)[number];

// ─── NAV ────────────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { label: "量化指標", href: "#achievements" },
    { label: "經歷", href: "#timeline" },
    { label: "工作能力", href: "#projects" },
    { label: "興趣", href: "#side-projects" },
    { label: "聯絡", href: "#contact" }, 
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-2xl font-black tracking-tight text-[#4F7DF7]"
        >
          Eric T.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-[#6B7280] hover:text-[#1F2937] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* 右側：只保留最後修改時間標籤 */}
        <div className="flex items-center">
          <span className="text-xs font-mono text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
            Updated: 2026.10
          </span>
        </div>
      </div>
    </nav>
  );
}

// ─── PM SIMULATOR GAME ──────────────────────────────────────────────────────

export const PMSimulatorGame = () => {
  // ── 5 大關卡題庫資料 ──
  const GAME_STAGES = [
    {
      stage: 1,
      title: "STAGE 1 / 5",
      prompt: "請選擇您想了解的【生涯規劃與經歷】：",
      options: [
        {
          key: "A",
          label: "A. 「如果進入公司三個月，你希望自己達成什麼？」",
          myAnswer: "「我希望前三個月先熟悉公司的專案流程、業務領域、系統架構與團隊分工，並逐步承接分配給我的工作內容。同時，我也會期待能更深入涉略 AI 應用，在熟悉工作後，嘗試找出可以提升效率的應用機會。」",
          hpChange: 10,
          auxIcon: "🎨",
          auxTitle: "轉換跑道",
          auxDesc: "先穩定短期適應，再來鋪墊中期成長目標。"
        },
        {
          key: "B",
          label: "B. 「你未來 2～3 年想成為什麼樣的角色？」",
          myAnswer: "「我希望能成為精準釐清需求與服務範圍，具備宏觀專案藍圖，與團隊共同推進專案目標的政府專案經理。」",
          hpChange: 8,
          auxIcon: "🎯",
          auxTitle: "職涯發展目標",
          auxDesc: "在未來我會期待能補足「審查與驗收對接能力」，以及產業解決問題或分析相關經驗，完善作為專案管理者的技能包。"
        },
        {
          key: "C",
          label: "C. 「為什麼想從現在的公司離開？」",
          myAnswer: "「很感謝前一份工作主管及同事的提攜與指導，不過我希望下一階段能接觸不同類型的資訊專案，進一步拓展自己的技術理解與專案管理能力，同時也希望透過轉換工作環境，讓思考方式更具彈性。」",
          hpChange: 6,
          auxIcon: "📖",
          auxTitle: "展望未來",
          auxDesc: "希望下一間公司飲水機旁邊那台是咖啡機…"
        }
      ]
    },
    {
      stage: 2,
      title: "STAGE 2 / 5",
      prompt: "請選擇關於【專案經驗】的提問：",
      options: [
        {
          key: "A",
          label: "A. 「你在這個專案中實際負責哪些事情？」",
          myAnswer: "「過去在主管的指導與授權下，從前期需求訪談、中期開發協調與驗收交付，到招標文件與各期成果報告撰寫皆全程參與；也負責系統維運與精進、依約協調第三方完成各項資安與軟體檢測，並曾主導辦理系統說明會 (含議程規劃與現場主講)。」",
          hpChange: 10,
          auxIcon: "📐",
          auxTitle: "計畫內容",
          auxDesc: "完整經歷政府專案全生命周期實務經驗約 2 年，思考並執行專案各項業務面、軟體系統面任務。"
        },
        {
          key: "B",
          label: "B. 「有沒有遇過工程師說「這個做不到」？你怎麼辦？」",
          myAnswer: "「我會先釐清工程師『做不到』的技術原因，並拆解業者『真正要』的底層需求。透過尋找替代方案與評估成本，在技術限制與商業目標之間，找出可執行的折衷解法。」",
          hpChange: 12,
          auxIcon: "🛡️",
          auxTitle: "開發推進",
          auxDesc: "1. 釐清原因：確認工程師是受限於技術、既有架構還是時程。\n2. 回歸需求：了解業主真正的目標或需求，評估是否有替代方案。\n3. 確認決策：整理可行方案與影響評估，與主管 (或同仁) 討論後再進行對外溝通。"
        },
        {
          key: "C",
          label: "C. 「如果業主提出的需求會影響時程，你怎麼處理？」",
          myAnswer: "「我會先看這到底是急件還是追加範疇，並找工程師算一下工時跟替代方案，如果無法如期交付，也會在評估後優先告知業主。」",
          hpChange: 8,
          auxIcon: "⚖️",
          auxTitle: "追加/調整需求時程管理",
          auxDesc: "可用說法：調整執行/開發順序；分階段交付。"
        }
      ]
    },
    {
      stage: 3,
      title: "STAGE 3 / 5",
      prompt: "請選擇關於【需求分析與規格】的提問：",
      options: [
        {
          key: "A",
          label: "A. 「你怎麼判斷一個系統問題是不是急需改善？」",
          myAnswer: "「我會評估影響程度、影響範圍、發生頻率，以及是否有替代處理方式這幾個面向來判斷。」",
          hpChange: 10,
          auxIcon: "📊",
          auxTitle: "系統精進決策",
          auxDesc: "影響程度：涉及資安、法規或合約，以及造成系統無法使用、核心業務中斷等優先處理。\n影響範圍：影響多少使用者或功能。\n發生頻率：是不是有重複發生的可能。"
        },
        {
          key: "B",
          label: "B. 「我寫的需求文件 (PPT) 通常會包含哪些內容？」",
          myAnswer: "「建置目的說明、業務流程圖、系統架構圖、現有畫面、預計畫面 (含規則說明)，也會依開發內容或資訊團隊反饋調整。」",
          hpChange: 10,
          auxIcon: "📋",
          auxTitle: "交付開發",
          auxDesc: "畫面有時候也是會用 AI 協助產出線稿圖~"
        },
        {
          key: "C",
          label: "C. 「要全面改寫系統，我會想把它變成怎麼樣？」",
          myAnswer: "「我會考量是否達成系統建置目的、視覺與排版一致性，不選用過多顏色、符合現代使用習慣的操作流程、技術與安全性。」",
          hpChange: 8,
          auxIcon: "🔄",
          auxTitle: "改寫整合",
          auxDesc: "「如果可以，我會希望這個按鈕多設置一個可以讓使用者停下來看個 2 分鐘的懸停 (HOVER) 動畫~」"
        }
      ]
    },
    {
      stage: 4,
      title: "STAGE 4 / 5",
      prompt: "請選擇關於【技術理解與開發決策】的提問：",
      options: [
        {
          key: "A",
          label: "A. 「你如何跟非技術背景的業主溝通技術問題？」",
          myAnswer: "「我會先了解技術限制，盡可能以舉例的方式進行說明，同時把重點放在之後會發生什麼事以及替代方案討論。」",
          hpChange: 8,
          auxIcon: "⚡",
          auxTitle: "轉譯問題",
          auxDesc: "問題：業主希望能一鍵下載過去 5 年、數百萬筆的完整交易或定位紀錄 Excel 表格。\n技術面回答：一次性 Query 查詢巨量資料會佔滿資料庫記憶體，也可能導致 TIMEOUT。\n這就像要求店員一口氣把整個書店的書搬到櫃檯給你，店員會忙到顧不了其他後面結帳的人，櫃檯桌子也擺不下 (記憶體爆掉)。"
        },
        {
          key: "B",
          label: "B. 「工程師抱怨 Code 寫太爛想花兩週重構，你支持嗎？」",
          myAnswer: "「請工程師評估重構帶來的商業價值與後續維護效益，若評估可行也會盡可能協助提供業務面資訊，並於成果報告描述該項自主精進內容。」",
          hpChange: 10,
          auxIcon: "🛠️",
          auxTitle: "避免技術債",
          auxDesc: "不知道 AI 是不是已經可以幫助他們解決重構的時間壓力?"
        },
        {
          key: "C",
          label: "C. 「功能上線前，你認為 PM 應該注意哪些事情？」",
          myAnswer: "「我會確保有申請進入機房 (部分專案機房建置於機關統一管理)；事先完成測試以及上線可測試部分；確認現場人員知道更新失敗時解決方法；最後留意流程安全性及符合相關資安規定。」",
          hpChange: 10,
          auxIcon: "🛑",
          auxTitle: "上線檢核",
          auxDesc: "原則第 1 條：不要週五上線!!"
        }
      ]
    },
    {
      stage: 5,
      title: "STAGE 5 / 5",
      prompt: "請選擇您想抽考的【處理非制式問題】：",
      options: [
        {
          key: "A",
          label: "A. 「若使用者抱怨法規或機關行政流程等根本性問題，該怎麼辦？」",
          myAnswer: "「先了解使用者遇到的具體問題，再區分問題是來自法規限制、機關既有流程，還是系統設計不夠友善。」",
          hpChange: 8,
          auxIcon: "🏆",
          auxTitle: "既有規定釋疑",
          auxDesc: "如果是涉及法規或機關權責，先向主管或權責單位確認或討論；若是系統可以改善的部分，就會評估是否能透過調整操作流程、畫面或功能，降低使用者的負擔。"
        },
        {
          key: "B",
          label: "B. 「業主提出非合約工作要求協助，是否幫助他？」",
          myAnswer: "「我會先了解需求緣由與急迫性，確認整體專案目標差異，先行評估所需資源後請示主管做決策。」",
          hpChange: 6,
          auxIcon: "🎵",
          auxTitle: "團隊凝聚力",
          auxDesc: "我認為 PM 要維持良好的利害關係人合作關係，但也要守住專案範疇，降低額外工作影響排程的程度。"
        },
        {
          key: "C",
          label: "C. 「若業主在非上班日時提出緊急需求，過去曾怎麼應對？」",
          myAnswer: "「如果是詢問系統邏輯或資料查詢，我會先了解問題並視情況協助；如果是系統重大異常，也會優先初步釐清與評估，必要時聯繫工程師或主管。至於非立即性的問題，我會盡量安排在上班時間處理。」",
          hpChange: 10,
          auxIcon: "🚀",
          auxTitle: "緊急處理",
          auxDesc: "下班時間還是可以適當提供服務，但不是免費的!"
        }
      ]
    }
  ];

  const ALL_BADGES = [
    { id: 'first_touch', name: '新手使用者', icon: '🔰' },
    { id: 'full_clear', name: '完美全勤賞', icon: '🏆' },
    { id: 'same_option_3x', name: '這個選項要按幾次XD', icon: '🅰️' },
    { id: 'high_sat', name: '面試好感度爆表', icon: '💖' },
    { id: 'bookstore', name: '書店搬書大師', icon: '📚' },
    { id: 'friday_off', name: '週五不上線守護者', icon: '🛡️' },
    { id: 'coffee', name: '咖啡機信仰者', icon: '☕' },
    { id: 'hover_2min', name: '懸停 2 分鐘迷戀者', icon: '✨' },
    { id: 'off_hours', name: '夜間緊急應援手', icon: '🌙' },
    { id: 'ai_pioneer', name: 'AI 效率探索者', icon: '🤖' }
  ];

  // ── State 宣告 ──
  const [gameState, setGameState] = useState<"start" | "play" | "result">("start");
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [satisfaction, setSatisfaction] = useState(30);
  const [selectedOptionKey, setSelectedOptionKey] = useState<string | null>(null);
  
  const [ericResponse, setEricResponse] = useState("等待中...");
  const [auxData, setAuxData] = useState({
    icon: "💡",
    title: "補充說明",
    desc: "我來想想💭"
  });

  const [unlockedBadges, setUnlockedBadges] = useState<Set<string>>(new Set());
  const [userChoiceHistory, setUserChoiceHistory] = useState<string[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  const [toastInfo, setToastInfo] = useState<{ visible: boolean; name: string; icon: string }>({
    visible: false,
    name: "",
    icon: ""
  });

  const stage = GAME_STAGES[currentStageIndex];

  function unlockBadge(badgeId: string) {
    if (unlockedBadges.has(badgeId)) return;
    setUnlockedBadges((prev) => new Set(prev).add(badgeId));
    
    const badge = ALL_BADGES.find((b) => b.id === badgeId);
    if (badge) {
      setToastInfo({ visible: true, name: badge.name, icon: badge.icon });
      setTimeout(() => {
        setToastInfo({ visible: false, name: "", icon: "" });
      }, 3000);
    }
  }

  function startGame() {
    setGameState("play");
    setCurrentStageIndex(0);
    setSatisfaction(30);
    setSelectedOptionKey(null);
    setUserChoiceHistory([]);
    setEricResponse("等待中...");
    setAuxData({
      icon: "💡",
      title: "補充說明",
      desc: "我來想想💭"
    });
  }

  function handleOptionSelect(option: typeof stage.options[0]) {
    if (selectedOptionKey) return;

    setSelectedOptionKey(option.key);
    const newHistory = [...userChoiceHistory, option.key];
    setUserChoiceHistory(newHistory);

    unlockBadge('first_touch');

    const counts = newHistory.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    if (Object.values(counts).some((c) => c >= 3)) {
      unlockBadge('same_option_3x');
    }

    if (currentStageIndex === 0 && option.key === 'A') unlockBadge('ai_pioneer');
    if (currentStageIndex === 0 && option.key === 'C') unlockBadge('coffee');
    if (currentStageIndex === 2 && option.key === 'C') unlockBadge('hover_2min');
    if (currentStageIndex === 3 && option.key === 'A') unlockBadge('bookstore');
    if (currentStageIndex === 3 && option.key === 'C') unlockBadge('friday_off');
    if (currentStageIndex === 4 && option.key === 'C') unlockBadge('off_hours');

    setEricResponse(option.myAnswer);
    setAuxData({
      icon: option.auxIcon,
      title: option.auxTitle,
      desc: option.auxDesc
    });

    setSatisfaction((prev) => Math.min(100, Math.max(0, prev + option.hpChange)));
  }

  function nextStage() {
    if (currentStageIndex < GAME_STAGES.length - 1) {
      setCurrentStageIndex((c) => c + 1);
      setSelectedOptionKey(null);
      setEricResponse("等待中...");
      setAuxData({
        icon: "💡",
        title: "補充說明",
        desc: "我來想想💭"
      });
    } else {
      setGameState("result");
      unlockBadge('full_clear');
      if (satisfaction >= 75) unlockBadge('high_sat');
    }
  }

  function exitGame() {
    setGameState("start");
    setIsZoomed(false);
  }

  function getResultText() {
    if (satisfaction >= 75) {
      return {
        title: "🔍 了解程度：超級了解",
        desc: "既然我們的邏輯跟幽默感都在同個頻率——是時候找他來當面聊聊了！"
      };
    } else if (satisfaction >= 55) {
      return {
        title: "🔍 了解程度：普通了解",
        desc: "你已經抓到我大方向的作風，與其線上猜測——是時候找他來當面聊聊了！"
      };
    } else {
      return {
        title: "🔍 了解程度：還不太了解",
        desc: "看來你只是快速過場，想知道更多——是時候找他來當面聊聊了！"
      };
    }
  }

  return (
    <div
      className={
        isZoomed
          ? "fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          : "relative w-full max-w-2xl mx-auto select-none"
      }
    >
      <div
        className={`relative w-full select-none rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white ${
          isZoomed ? "max-w-4xl" : ""
        }`}
      >
        {/* ── Mac Title Bar (保持不動) ── */}
        <div
          className="flex items-center justify-between px-4 relative bg-gray-50 border-b border-gray-100"
          style={{ height: 44 }}
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
          </div>

          <div className="flex items-center px-3 py-1 rounded-md bg-white border border-gray-200 shadow-inner">
            <span
              className="text-[11px] font-mono text-gray-500 flex items-center gap-1.5"
              style={{ fontFamily: "monospace" }}
            >
              🎮 pm-simulator.game/interview {isZoomed ? "(Expanded)" : ""}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowDrawer(!showDrawer)}
              className="flex items-center gap-1 px-2 py-1 rounded-md bg-amber-500/10 hover:bg-amber-500/20 text-amber-600 border border-amber-500/20 transition-all text-[11px] font-bold cursor-pointer"
            >
              <span>🏅</span>
              <span className="font-mono">{unlockedBadges.size}/10</span>
            </button>

            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-gray-200/80 text-gray-400 hover:text-gray-700 transition-colors text-[11px] cursor-pointer"
            >
              <span>{isZoomed ? "❐" : "⛶"}</span>
              <span className="hidden sm:inline">{isZoomed ? "縮小" : "放大"}</span>
            </button>
          </div>

          {/* 解鎖成就 Toast 提示 */}
          <div
            className={`absolute left-1/2 -translate-x-1/2 top-1 z-30 transform transition-all duration-300 pointer-events-none ${
              toastInfo.visible ? "translate-y-1 opacity-100" : "-translate-y-16 opacity-0"
            }`}
          >
            <div className="bg-slate-900/95 border border-amber-400/60 text-white px-3.5 py-1.5 rounded-full shadow-xl backdrop-blur-md flex items-center gap-2">
              <span className="text-base animate-bounce">{toastInfo.icon}</span>
              <span className="text-base font-bold text-amber-300">
                解鎖徽章：【{toastInfo.name}】
              </span>
            </div>
          </div>
        </div>

        {/* ── Game Viewport (高度界線不變，微調內距與內部元件高度) ── */}
        <div
          className="relative bg-[#0F172A] p-2.5 sm:p-3 flex flex-col justify-between text-white overflow-hidden"
          style={{ height: isZoomed ? 580 : 480 }}
        >
          {/* 頂部 Status Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 z-10">
            <div className="flex items-center gap-2">
              <span className="text-base text-slate-400 font-semibold">猜你可能想了解</span>
              <div className="w-20 sm:w-24 bg-slate-800 h-2 rounded-full overflow-hidden border border-slate-700">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{
                    width: `${satisfaction}%`,
                    backgroundColor: satisfaction < 30 ? "#E44A38" : "#50B8AF"
                  }}
                />
              </div>
              <span className="text-base font-bold text-teal-400 font-mono">
                {satisfaction}%
              </span>
            </div>
            <div>
              <span className="text-base font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2.5 py-0.5 rounded-full font-mono">
                STAGE {Math.min(currentStageIndex + 1, 5)}/5
              </span>
            </div>
          </div>

          {/* ── State 1: Start Screen ── */}
          {gameState === "start" && (
            <div className="flex flex-col items-center justify-center h-full text-center z-20 px-4">
              <h3 className="text-2xl font-black text-white mb-2">
                一起坐下聊聊關於我的經歷吧!
              </h3>
              <p className="text-base text-slate-300 mb-6 max-w-sm mx-auto leading-relaxed">
                接下來共有 5 題的機會，您可以挑選問題聊聊，我也設計了10種成就，看看能不能全拿~
              </p>
              <button
                onClick={startGame}
                className="bg-[#4F7DF7] hover:bg-[#3B6EF2] text-base font-bold px-7 py-3 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              >
                開始!
              </button>
            </div>
          )}

          {/* ── State 2: Gameplay ── */}
          {gameState === "play" && (
            <div className="flex-1 my-1 flex flex-col justify-between space-y-1.5">
              {/* 頂部對話與卡片 Grid */}
              <div className="grid grid-cols-12 gap-2 h-[180px]">
                {/* 左側：像素頭像與 PM 對話框 */}
                <div className="col-span-7 bg-slate-950/80 border border-slate-800 p-2 rounded-xl flex items-start gap-2 overflow-y-auto">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-9 h-9 rounded-full border border-teal-500/50 overflow-hidden bg-slate-900 shadow-inner flex items-center justify-center">
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full cursor-pointer"
                      >
                        <rect width="64" height="64" fill="#1E293B" />
                        <circle cx="32" cy="32" r="28" fill="#334155" />
                        <circle cx="32" cy="32" r="25" fill="#FEF3C7" opacity="0.3" />
                        <rect x="10" y="58" width="44" height="2" fill="#475569" rx="1" />
                        <rect x="20" y="10" width="24" height="24" rx="10" fill="#FED7AA" />
                        <rect x="18" y="18" width="3" height="6" rx="1.5" fill="#FED7AA" />
                        <rect x="43" y="18" width="3" height="6" rx="1.5" fill="#FED7AA" />
                        <rect x="18" y="7" width="28" height="11" rx="4" fill="#0F172A" />
                        <rect x="19" y="14" width="26" height="4" rx="1" fill="#0F172A" />
                        <rect x="26" y="20" width="3" height="3" rx="1" fill="#020617" />
                        <rect x="35" y="20" width="3" height="3" rx="1" fill="#020617" />
                        <rect x="29" y="27" width="6" height="2" rx="1" fill="#F87171" />
                        <rect x="18" y="34" width="28" height="24" rx="4" fill="#1E3A8A" />
                        <path d="M 28 34 L 32 39 L 36 34 Z" fill="#1E40AF" />
                        <rect x="31" y="39" width="2" height="15" fill="#1E40AF" opacity="0.4" />
                        <g>
                          <rect x="10" y="30" width="16" height="22" rx="2" fill="#F59E0B" />
                          <rect x="14" y="28" width="8" height="3" rx="1" fill="#94A3B8" />
                          <rect x="12" y="33" width="12" height="17" rx="1" fill="#FFFFFF" />
                          <rect x="14" y="36" width="8" height="1.5" rx="0.75" fill="#CBD5E1" />
                          <rect x="14" y="39" width="6" height="1.5" rx="0.75" fill="#CBD5E1" />
                          <rect x="14" y="42" width="7" height="1.5" rx="0.75" fill="#CBD5E1" />
                          <rect x="14" y="45" width="5" height="1.5" rx="0.75" fill="#3B82F6" />
                          <rect x="8" y="42" width="6" height="7" rx="2" fill="#FED7AA" />
                        </g>
                        <rect x="40" y="36" width="6" height="18" rx="3" fill="#1E3A8A" />
                        <rect x="40" y="52" width="5" height="5" rx="2" fill="#FED7AA" />
                      </svg>
                    </div>
                    <span className="text-base text-teal-400 font-mono mt-0.5 font-semibold">Eric T.</span>
                  </div>

                  <div className="bg-slate-800 border border-slate-700/80 rounded-lg p-2 text-left flex-1 min-h-full flex flex-col justify-center">
                    <p className="text-base text-slate-200 leading-relaxed font-medium">{ericResponse}</p>
                  </div>
                </div>

                {/* 右側：輔助資訊卡 */}
                <div className="col-span-5 bg-slate-950/80 border border-slate-800 p-2 rounded-xl flex flex-col justify-between overflow-y-auto text-left">
                  <div className="flex items-center gap-1.5 border-b border-slate-800 pb-1">
                    <span className="text-base">{auxData.icon}</span>
                    <span className="text-base text-teal-300 font-bold truncate">{auxData.title}</span>
                  </div>
                  <p className="text-base text-slate-300 leading-relaxed my-auto whitespace-pre-line font-medium">
                    {auxData.desc}
                  </p>
                </div>
              </div>

              {/* 中間提示列 */}
              <div className="bg-slate-950/60 border border-slate-800 px-3 py-1 rounded-lg text-left">
                <p className="text-base text-slate-200 font-semibold truncate">
                  {selectedOptionKey
                    ? "想再了解什麼~："
                    : stage.prompt}
                </p>
              </div>

              {/* 下方選項按鈕 */}
              <div className="space-y-1.5 min-h-[145px] flex flex-col justify-center">
                {!selectedOptionKey ? (
                  stage.options.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => handleOptionSelect(opt)}
                      className="w-full text-left py-1.5 px-3 rounded-lg bg-slate-800/90 border border-slate-700/80 hover:border-[#4F7DF7] hover:bg-slate-800 transition-all duration-200 text-base text-slate-100 flex items-center justify-between group cursor-pointer shadow-sm font-medium"
                    >
                      <span className="group-hover:text-[#4F7DF7] transition-colors truncate">
                        {opt.label}
                      </span>
                      <span className="text-slate-500 group-hover:text-[#4F7DF7] text-base">➔</span>
                    </button>
                  ))
                ) : (
                  <button
                    onClick={nextStage}
                    className="w-full py-2.5 bg-[#50B8AF] hover:bg-[#439c94] text-slate-900 font-bold text-base rounded-lg transition-all shadow-md flex items-center justify-center space-x-1 cursor-pointer"
                  >
                    <span>
                      {currentStageIndex < GAME_STAGES.length - 1 ? "進入下一關" : "查看結果"}
                    </span>
                    <span>→</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* ── State 3: Result Screen ── */}
          {gameState === "result" && (
            <div className="flex flex-col items-center justify-center h-full text-center z-20 px-4">
              <h3 className="text-2xl font-black text-white mb-2">
                {getResultText().title}
              </h3>
              <p className="text-base text-slate-200 mb-6 max-w-sm mx-auto leading-relaxed">
                {getResultText().desc}
              </p>

              {/* 雙按鈕：重玩一次 / 離開 */}
              <div className="flex items-center justify-center gap-3 w-full max-w-xs">
                <button
                  onClick={startGame}
                  className="flex-1 bg-[#4F7DF7] hover:bg-[#3B6EF2] text-base font-bold py-2.5 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                >
                  重玩一次
                </button>
                <button
                  onClick={exitGame}
                  className="flex-1 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 text-base font-bold py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  離開
                </button>
              </div>
            </div>
          )}

          {/* ── Badge Collection Drawer ── */}
          {showDrawer && (
            <div className="absolute inset-x-0 bottom-0 top-10 bg-slate-950/95 backdrop-blur-xl z-30 p-3.5 transition-all duration-300 flex flex-col justify-between border-t border-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg">🏅</span>
                  <span className="text-base font-bold text-white tracking-wider">
                    PM 成就徽章收藏庫
                  </span>
                </div>
                <button
                  onClick={() => setShowDrawer(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-md text-base font-bold cursor-pointer"
                >
                  ✕ 關閉
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-auto overflow-y-auto py-1">
                {ALL_BADGES.map((badge) => {
                  const unlocked = unlockedBadges.has(badge.id);
                  return (
                    <div
                      key={badge.id}
                      className={`p-1.5 rounded-xl border flex flex-col items-center justify-center text-center transition-all duration-300 ${
                        unlocked
                          ? "bg-slate-800/90 border-amber-400/60 text-white shadow-lg shadow-amber-500/10 scale-100"
                          : "bg-slate-900/40 border-slate-800/80 text-slate-600 opacity-40 grayscale scale-95"
                      }`}
                    >
                      <span className={`text-xl mb-0.5 ${unlocked ? "animate-pulse" : ""}`}>
                        {badge.icon}
                      </span>
                      <span
                        className={`text-base font-bold truncate w-full ${
                          unlocked ? "text-amber-300" : "text-slate-500"
                        }`}
                      >
                        {badge.name}
                      </span>
                    </div>
                  );
                })}
              </div>

              <p className="text-base text-center text-slate-500 font-mono">
                ※ 重新整理頁面 (F5) 後成就徽章進度將重置
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ─── HERO ───────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-sm text-gray-500 font-medium">
                專案管理師 × 資訊整合
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-xl text-[#6B7280] font-medium mb-3">
              嗨，我是 Eric。
            </p>
            <h1 className="text-5xl lg:text-6xl font-black text-[#1F2937] leading-tight mb-3">
              打造更好的系統，
            </h1>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-8">
              <span className="text-[#4F7DF7]">不只是</span>
              <span className="text-[#1F2937]">管理專案。</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg text-[#6B7280] leading-relaxed mb-10 max-w-lg"
          >
            在政府資訊專案中累積實務經驗，持續探索專案管理的更多可能。
從業務需求出發，協助釐清問題、整理系統規格，並串聯業主與工程師，讓資訊系統真正回應需求，創造更好的公共服務價值。
          </motion.p>

          {/* ── 整合後的按鈕與標籤區塊（方案 C） ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 pt-8 border-t border-gray-200/60"
          >
            <a
              href="#contact"
              className="flex items-center gap-2 bg-[#4F7DF7] text-white font-semibold px-7 py-3.5 rounded-full hover:bg-[#3B6EF2] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
            >
              聯絡我
              <ArrowRight className="w-4 h-4" />
            </a>

            <div className="flex items-center gap-5 sm:gap-6">
              {[
                { label: "1.5 年經驗", icon: "🏅" },
                { label: "系統整合", icon: "🖥️" },
                { label: "政府專案", icon: "🏛️" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-1.5">
                  <span>{b.icon}</span>
                  <span className="text-xs sm:text-sm text-[#6B7280] font-medium whitespace-nowrap">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <PMSimulatorGame />
        </motion.div>
      </div>
    </section>
  );
}

// ─── ACHIEVEMENTS ───────────────────────────────────────────────────────────

function StatCard({
  label,
  value,
  suffix,
  Icon,
  color,
}: {
  label: string;
  value: number;
  suffix: string;
  Icon: React.ComponentType<{
    className?: string;
    style?: React.CSSProperties;
  }>;
  color: string;
}) {
  const { ref, inView } = useInView();
  const count = useCounter(value, inView);
  return (
    <div
      ref={ref}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div className="text-3xl font-black text-[#1F2937] mb-1">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-[#6B7280] font-medium">
        {label}
      </div>
    </div>
  );
}

function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {ACHIEVEMENTS.map((a) => (
            <StatCard key={a.label} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TIMELINE ───────────────────────────────────────────────────────────────

function TimelineSection() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="timeline" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[#4F7DF7] uppercase tracking-wider mb-3">
            職涯歷程
          </p>
          <h2 className="text-4xl font-black text-[#1F2937]">
            每個里程碑，
            <span className="text-[#4F7DF7]">都是積累。</span>
          </h2>
        </div>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

          <div className="space-y-4">
            {TIMELINE.map((item, idx) => {
              const isOpen = active === item.id;
              return (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      setActive(isOpen ? null : item.id)
                    }
                    className="w-full flex items-start gap-6 text-left group"
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-white shadow-md flex items-center justify-center z-10 transition-all duration-300"
                      style={{
                        backgroundColor: isOpen
                          ? item.color
                          : "#F3F4F6",
                      }}
                    >
                      <item.Icon
                        className="w-4 h-4"
                        style={{
                          color: isOpen ? "white" : item.color,
                        }}
                      />
                    </div>
                    <div className="flex-1 bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold text-[#6B7280] bg-gray-100 px-2.5 py-1 rounded-full">
                            {item.year}
                          </span>
                          <h3 className="text-base font-bold text-[#1F2937]">
                            {item.title}
                          </h3>
                          <span className="text-sm text-[#6B7280]">
                            {item.org}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        />
                      </div>

                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{
                            opacity: 1,
                            height: "auto",
                          }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-100"
                        >
                          <p className="text-sm text-[#6B7280] leading-relaxed mb-3">
                            {item.desc}
                          </p>
                          <ul className="space-y-1.5">
                            {item.items.map((it, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-sm text-[#1F2937]"
                              >
                                <div
                                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                                  style={{
                                    backgroundColor: item.color,
                                  }}
                                />
                                {it}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── PROJECT MODAL ──────────────────────────────────────────────────────────

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [onClose]);

  const steps = [
    {
      label: "背景",
      content: project.situation,
      Icon: AlertTriangle,
      color: "#EF4444",
    },
    {
      label: "挑戰",
      content: project.challenge,
      Icon: BarChart3,
      color: "#F59E0B",
    },
    {
      label: "思考",
      content: project.thinking,
      Icon: Flag,
      color: "#8B5CF6",
    },
    {
      label: "執行",
      content: project.action,
      Icon: Zap,
      color: "#4F7DF7",
    },
    {
      label: "成果",
      content: project.results,
      Icon: CheckCircle2,
      color: "#22C55E",
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/30 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: project.statusColor,
                  }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: project.statusColor }}
                >
                  {project.status}
                </span>
                <span className="text-sm text-[#6B7280]">
                  · {project.timeline}
                </span>
              </div>
              <h3 className="text-2xl font-black text-[#1F2937]">
                {project.name}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          <p className="text-[#6B7280] leading-relaxed mb-8">
            {project.situation}
          </p>

          {/* Case Study Flow */}
          <div className="mb-8">
            <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-4">
              案例研究流程
            </p>
            <div className="space-y-3">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${s.color}15`,
                      }}
                    >
                      <s.Icon
                        className="w-4 h-4"
                        style={{ color: s.color }}
                      />
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-1" />
                    )}
                  </div>
                  <div className="pb-4">
                    <p className="text-xs font-bold text-[#6B7280] mb-1">
                      {s.label}
                    </p>
                    {/* 💡 判斷如果是陣列就渲染為條列式，否則渲染為一般段落 */}
                    {Array.isArray(s.content) ? (
                      <ul className="space-y-1 mt-1">
                        {s.content.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-[#1F2937] leading-relaxed flex items-start gap-2"
                          >
                            <span className="font-bold select-none text-[#6a6a6a]">
                              •
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm text-[#1F2937] leading-relaxed">
                        {s.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">
                關鍵成果
              </p>
              <div className="space-y-2">
                {project.results.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1F2937]">
                      {r}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">
                文件產出
              </p>
              <div className="space-y-2">
                {project.deliverables.map((d, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2"
                  >
                    <FileText className="w-4 h-4 text-[#4F7DF7] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-[#1F2937]">
                      {d}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// ─── PROJECTS ───────────────────────────────────────────────────────────────

function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(
    null,
  );

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[#4F7DF7] uppercase tracking-wider mb-3">
            工作能力與經驗介紹
          </p>
          <h2 className="text-4xl font-black text-[#1F2937]">每個專案，<span className="text-[#4F7DF7]">都有幾個難忘的故事。</span></h2>
          <p className="text-[#6B7280] mt-3">點擊卡片查看完整事例說明</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="text-left bg-[#F7F7F5] hover:bg-white rounded-2xl border border-gray-100 hover:border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
            >
              <h3 className="text-lg font-bold text-[#1F2937] mb-1 group-hover:text-[#4F7DF7] transition-colors">
                {p.name}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed mb-4">
                {p.situation}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 bg-white border border-gray-200 text-[#6B7280] rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-[#4F7DF7]">
                查看更多
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}

// ─── SKILLS ─────────────────────────────────────────────────────────────────

function SkillsSection() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[#4F7DF7] uppercase tracking-wider mb-3">
            技能樹
          </p>
          <h2 className="text-4xl font-black text-[#1F2937]">
            能力組合，
            <span className="text-[#4F7DF7]">環環相扣。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SKILLS.map((s) => {
            const isOpen = open === s.id;
            return (
              <div
                key={s.id}
                className={`bg-white rounded-2xl border shadow-sm overflow-hidden transition-all duration-300 ${isOpen ? "border-gray-200 shadow-md" : "border-gray-100 hover:shadow-md hover:-translate-y-0.5"}`}
              >
                <button
                  className="w-full p-6 text-left"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: `${s.color}15`,
                      }}
                    >
                      <s.Icon
                        className="w-5 h-5"
                        style={{ color: s.color }}
                      />
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                    {s.name}
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    {s.desc}
                  </p>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="px-6 pb-6 border-t border-gray-100"
                  >
                    <div className="pt-5 mb-4">
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-3">
                        核心技能
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {s.subs.map((sub) => (
                          <span
                            key={sub}
                            className="text-xs px-3 py-1.5 rounded-full font-medium border transition-colors"
                            style={{
                              color: s.color,
                              backgroundColor: `${s.color}10`,
                              borderColor: `${s.color}30`,
                            }}
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
                        相關專案
                      </p>
                      {s.projects.map((proj) => (
                        <div
                          key={proj}
                          className="flex items-center gap-2 py-1.5"
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: s.color }}
                          />
                          <span className="text-xs text-[#1F2937]">
                            {proj}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── DASHBOARD ──────────────────────────────────────────────────────────────

function DashboardSection() {
  const [note, setNote] = useState("");
  const [dTasks, setDTasks] = useState([
    { text: "確認系統整合測試報告", done: false },
    { text: "與資安部門確認合規事項", done: true },
    { text: "更新里程碑追蹤表", done: false },
    { text: "準備利害關係人週報", done: false },
  ]);

  return (
    <section id="dashboard" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-14">
          <p className="text-sm font-semibold text-[#4F7DF7] uppercase tracking-wider mb-3">
            PM 工作台
          </p>
          <h2 className="text-4xl font-black text-[#1F2937]">
            我的
            <span className="text-[#4F7DF7]">工作節奏。</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Today's Tasks */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <CheckCheck className="w-4 h-4 text-[#4F7DF7]" />
              <span className="text-sm font-bold text-[#1F2937]">
                今日任務
              </span>
              <span className="ml-auto text-xs text-[#6B7280]">
                {dTasks.filter((t) => t.done).length}/
                {dTasks.length}
              </span>
            </div>
            <div className="space-y-3">
              {dTasks.map((t, i) => (
                <button
                  key={i}
                  onClick={() =>
                    setDTasks((prev) =>
                      prev.map((tt, ii) =>
                        ii === i
                          ? { ...tt, done: !tt.done }
                          : tt,
                      ),
                    )
                  }
                  className="w-full flex items-center gap-3 text-left group"
                >
                  <div
                    className={`w-5 h-5 rounded-lg flex-shrink-0 flex items-center justify-center transition-all ${t.done ? "bg-[#4F7DF7]" : "border-2 border-gray-300 group-hover:border-[#4F7DF7]"}`}
                  >
                    {t.done && (
                      <svg
                        className="w-3 h-3 text-white"
                        fill="none"
                        viewBox="0 0 10 8"
                      >
                        <path
                          d="M1 4l3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-sm ${t.done ? "line-through text-gray-400" : "text-[#1F2937]"}`}
                  >
                    {t.text}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Project Progress */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <BarChart3 className="w-4 h-4 text-[#8B5CF6]" />
              <span className="text-sm font-bold text-[#1F2937]">
                專案進度
              </span>
            </div>
            {[
              {
                name: "跨部會資料交換平台",
                pct: 92,
                color: "#22C55E",
                status: "已完成",
              },
              {
                name: "智慧服務整合系統",
                pct: 65,
                color: "#4F7DF7",
                status: "進行中",
              },
              {
                name: "AI 文件生成系統",
                pct: 100,
                color: "#22C55E",
                status: "已完成",
              },
              {
                name: "開放資料品質平台",
                pct: 15,
                color: "#F59E0B",
                status: "規劃中",
              },
            ].map((p, i) => (
              <div key={i} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-[#1F2937] font-medium">
                    {p.name}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{ color: p.color }}
                  >
                    {p.pct}%
                  </span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${p.pct}%`,
                      backgroundColor: p.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Meetings */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <Calendar className="w-4 h-4 text-[#10B981]" />
              <span className="text-sm font-bold text-[#1F2937]">
                即將到來的會議
              </span>
            </div>
            {[
              {
                title: "跨部會工作小組",
                time: "今天 14:30",
                type: "例行會議",
                count: 5,
              },
              {
                title: "資安合規審查",
                time: "明天 10:00",
                type: "稽核會議",
                count: 8,
              },
              {
                title: "AI 系統驗收測試",
                time: "週四 15:00",
                type: "驗收會議",
                count: 12,
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex gap-3 py-3 border-b border-gray-200 last:border-0"
              >
                <div className="w-8 h-8 bg-emerald-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#10B981]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">
                    {m.title}
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    {m.time} · {m.count} 人 · {m.type}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Risk Overview */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <AlertTriangle className="w-4 h-4 text-[#F59E0B]" />
              <span className="text-sm font-bold text-[#1F2937]">
                風險概覽
              </span>
            </div>
            {[
              {
                label: "資安合規未確認",
                level: "高",
                color: "#EF4444",
                project: "智慧服務整合",
              },
              {
                label: "第三方 API 穩定性",
                level: "中",
                color: "#F59E0B",
                project: "資料交換平台",
              },
              {
                label: "資源排程衝突",
                level: "中",
                color: "#F59E0B",
                project: "多專案共用",
              },
              {
                label: "文件更新延遲",
                level: "低",
                color: "#22C55E",
                project: "AI 文件系統",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2.5 border-b border-gray-200 last:border-0"
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: r.color }}
                />
                <div className="flex-1">
                  <p className="text-xs font-medium text-[#1F2937]">
                    {r.label}
                  </p>
                  <p className="text-xs text-[#6B7280]">
                    {r.project}
                  </p>
                </div>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{
                    color: r.color,
                    backgroundColor: `${r.color}15`,
                  }}
                >
                  {r.level}
                </span>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <Flag className="w-4 h-4 text-[#4F7DF7]" />
              <span className="text-sm font-bold text-[#1F2937]">
                里程碑
              </span>
            </div>
            {[
              {
                name: "資料交換平台驗收",
                date: "2024.02.28",
                done: true,
              },
              {
                name: "智慧服務 β 測試啟動",
                date: "2024.03.15",
                done: true,
              },
              {
                name: "開放資料平台需求確認",
                date: "2024.04.01",
                done: false,
              },
              {
                name: "跨機關推廣計畫啟動",
                date: "2024.05.20",
                done: false,
              },
            ].map((m, i) => (
              <div
                key={i}
                className="flex items-center gap-3 py-2.5 border-b border-gray-200 last:border-0"
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${m.done ? "bg-[#22C55E]" : "border-2 border-gray-300"}`}
                >
                  {m.done && (
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      viewBox="0 0 10 8"
                    >
                      <path
                        d="M1 4l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="flex-1">
                  <p
                    className={`text-xs font-medium ${m.done ? "line-through text-gray-400" : "text-[#1F2937]"}`}
                  >
                    {m.name}
                  </p>
                </div>
                <span className="text-xs text-[#6B7280]">
                  {m.date}
                </span>
              </div>
            ))}
          </div>

          {/* Quick Notes */}
          <div className="bg-[#F7F7F5] rounded-2xl border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <PenLine className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm font-bold text-[#1F2937]">
                快速筆記
              </span>
            </div>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="記錄想法或待辦事項..."
              className="w-full h-36 text-sm text-[#1F2937] bg-white border border-gray-200 rounded-xl p-3 resize-none focus:outline-none focus:border-[#4F7DF7] transition-colors placeholder:text-gray-300"
            />
            <div className="flex justify-between items-center mt-2">
              <span className="text-xs text-[#6B7280]">
                {note.length} 字
              </span>
              {note && (
                <button
                  onClick={() => setNote("")}
                  className="text-xs text-[#6B7280] hover:text-[#EF4444] transition-colors"
                >
                  清除
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── CONTACT ────────────────────────────────────────────────────────────────


function ContactSection() {
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // 表單欄位狀態
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 處理表單送出
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(false);

    try {
      // 💡 請將下方 "https://formspree.io/f/你的表單ID" 換成你在 Formspree 註冊取得的專屬網址
      const response = await fetch("https://formspree.io/f/mwlvdlvn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setError(true);
      }
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#1F2937] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <p className="text-sm font-semibold text-[#4F7DF7] uppercase tracking-wider mb-6">
          聯絡我
        </p>
        <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
          一起打造
          <span className="text-[#4F7DF7]">更好的事物。</span>
        </h2>
        <p className="text-lg text-gray-400 mb-14 max-w-lg mx-auto leading-relaxed">
          無論是想聊聊正事或是興趣，都期待您的聯繫。
        </p>

        {/* ── 按鈕區塊 ── */}
        <div className="flex flex-wrap justify-center gap-4">
          {/* 按鈕 1：開啟留言小卡 Modal */}
          <button
            onClick={() => {
              setShowModal(true);
              setSubmitted(false); // 每次打開重置狀態
            }}
            className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold transition-all duration-200 bg-[#4F7DF7] text-white hover:bg-[#3B6EF2] shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            寄信給我
          </button>

          {/* 按鈕 2：104履歷 */}
          <a
            href="https://pda.104.com.tw/profile/share/gyZcGM6wpwqcuEU3PKlsC5qx3VxsrwGG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold transition-all duration-200 bg-white/10 text-white hover:bg-white/20 border border-white/20 hover:-translate-y-0.5 cursor-pointer"
          >
            <ExternalLink className="w-4 h-4" />
            104履歷
          </a>
        </div>

        {/* ── 頁尾資訊（已調整為完美三欄居中結構） ── */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:grid md:grid-cols-3 items-center justify-between gap-4 text-center md:text-left">
          {/* 左欄：品牌名稱 */}
          <div className="flex justify-center md:justify-start">
            <span className="text-2xl font-black text-[#4F7DF7] tracking-tight">
              Eric.
            </span>
          </div>

          {/* 中欄：版權與定位（置中） */}
          <div className="flex justify-center">
            <p className="text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
              © 2026 Eric · 專案管理 × 資訊整合
            </p>
          </div>

          {/* 右欄：工具致謝 */}
          <div className="flex justify-center md:justify-end">
            <p className="text-xs sm:text-sm text-gray-500 font-mono">
              Made with <span className="text-[#4F7DF7]">ChatGPT</span> · <span className="text-[#4F7DF7]">Gemini</span> · <span className="text-[#4F7DF7]">Figma</span>
            </p>
          </div>
        </div>
      </div>

      {/* ── 彈出式留言小卡 Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#111827] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-left">
            
            {/* Modal 頂部標題與關閉按鈕 */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-[#4F7DF7]/10 text-[#4F7DF7]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">傳送訊息給 Eric</h3>
                  <p className="text-xs text-gray-400">填寫下方留言，將直接發送至我的信箱</p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 若已成功送出顯示感謝畫面 */}
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white">留言已成功送出！</h4>
                <p className="text-sm text-gray-400 max-w-xs mx-auto">
                  感謝您的聯繫，訊息已經順利寄到 Eric 的信箱，我會盡快回覆您！
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-slate-800 text-white font-semibold text-sm hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  關閉視窗
                </button>
              </div>
            ) : (
              /* 留言表單 */
              <form onSubmit={handleSubmit} className="space-y-4 my-6">
                
                {/* 欄位 1：如何稱呼 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#4F7DF7]" /> 如何稱呼 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="例如：王經理 / John"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F7DF7] transition-colors"
                  />
                </div>

                {/* 欄位 2：聯絡信箱 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#4F7DF7]" /> 電子信箱 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F7DF7] transition-colors"
                  />
                </div>

                {/* 欄位 3：聯絡電話 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#4F7DF7]" /> 聯絡電話(選填)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0912-345-678"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F7DF7] transition-colors"
                  />
                </div>

                {/* 欄位 4：留言內容 */}
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#4F7DF7]" /> 留言內容 *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="請輸入想聊聊的專案或合作機會..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-[#4F7DF7] transition-colors resize-none"
                  />
                </div>

                {error && (
                  <p className="text-xs text-red-400 text-center">
                    傳送失敗，請稍後再試一次，或直接複製信箱與我聯繫。
                  </p>
                )}

                {/* 送出按鈕 */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold bg-[#4F7DF7] text-white hover:bg-[#3B6EF2] transition-all shadow-lg hover:shadow-xl cursor-pointer disabled:opacity-50"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> 正在傳送中...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> 確認送出留言
                    </>
                  )}
                </button>
              </form>
            )}

            {/* Modal 底部小提示 */}
            <p className="text-[11px] text-gray-500 text-center font-mono pt-2 border-t border-slate-800/60">
              fiying0788@gmail.com ·僅作個人聯絡用途，絕對不會將您的個資外洩
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

// ─── AI CHAT ────────────────────────────────────────────────────────────────

type ChatMsg = { role: "user" | "ai"; text: string };

function AIChat() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<ChatMsg[]>([
    {
      role: "ai",
      text: "嗨！我是 Eric AI 助理。你可以問我任何關於 Eric 的問題，或選擇以下常見問題。",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const key =
        Object.keys(CHAT_QA).find(
          (k) => text.toLowerCase().includes(k) || k === text,
        ) || "intro";
      setTyping(false);
      setMsgs((m) => [
        ...m,
        { role: "ai", text: CHAT_QA[key] },
      ]);
    }, 1200);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#4F7DF7] text-white rounded-full shadow-xl hover:bg-[#3B6EF2] hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat panel */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-24 right-6 z-50 w-88 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          style={{ width: "360px", height: "520px" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100 bg-gradient-to-r from-[#4F7DF7] to-[#6B8FF8]">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">
                詢問 Eric AI
              </p>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                <p className="text-xs text-white/70">線上中</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="ml-auto w-7 h-7 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <X className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-[#4F7DF7] text-white rounded-br-md"
                      : "bg-gray-100 text-[#1F2937] rounded-bl-md"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl rounded-bl-md px-4 py-3 flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-gray-400"
                      animate={{ y: [0, -4, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Suggested questions */}
          {msgs.length <= 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-1.5">
              {SUGGESTED_QS.map((q) => (
                <button
                  key={q.key}
                  onClick={() => send(q.key)}
                  className="text-xs px-3 py-1.5 bg-blue-50 text-[#4F7DF7] rounded-full hover:bg-blue-100 transition-colors font-medium"
                >
                  {q.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && send(input)
              }
              placeholder="輸入問題..."
              className="flex-1 text-sm bg-gray-100 rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#4F7DF7]/30"
            />
            <button
              onClick={() => send(input)}
              className="w-9 h-9 bg-[#4F7DF7] rounded-full flex items-center justify-center hover:bg-[#3B6EF2] transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}

// ─── 1. 資料集 (下方三張卡片：僅留小標題、#hashtags 與 SVG) ───────────────────────
const SIDE_CARDS = [
  {
    title: "Badminton",
    hashtags: ["#下班充電", "#團隊合作", "#球不要再漲ㄌ🥲"],
    accent: "#4F7DF7",
    character: BadmintonPixelArt,
  },
  {
    title: "Ukulele",
    hashtags: ["#生活配樂", "#沉澱思緒", "#強化創造力"],
    accent: "#10B981",
    character: UkulelePlayerPixelArt,
  },
  {
    title: "Culture & Runs",
    hashtags: ["#交流互動", "#共創回憶", "#拓展視野"],
    accent: "#8B5CF6",
    character: RunnerPixelArt,
  },
];
// ─── 原始像素羽球人物 SVG ──────────────────────────────────────
// ─── 帶有 Hover 羽球掉落地上動畫的像素羽球人物 SVG ──────────────────────────────
function BadmintonPixelArt({
  raised,
  accentColor,
}: {
  raised: boolean;
  accentColor: string;
}) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 地面指示線 */}
      <rect
        x="6"
        y="60"
        width="52"
        height="2"
        fill="#E2E8F0"
        rx="1"
      />

      {/* 臉部與頭部 */}
      <rect
        x="20"
        y="8"
        width="24"
        height="24"
        rx="12"
        fill="#FED7AA"
      />
      {/* 頭髮 */}
      <rect
        x="18"
        y="6"
        width="28"
        height="10"
        rx="4"
        fill="#1E293B"
      />
      <rect
        x="16"
        y="10"
        width="6"
        height="12"
        rx="2"
        fill="#1E293B"
      />
      {/* 眼睛與表情 */}
      <rect
        x="26"
        y="18"
        width="3"
        height="4"
        rx="1.5"
        fill="#0F172A"
      />
      <rect
        x="35"
        y="18"
        width="3"
        height="4"
        rx="1.5"
        fill="#0F172A"
      />
      <rect
        x="30"
        y="24"
        width="4"
        height="2"
        rx="1"
        fill="#F87171"
      />

      {/* 身體與衣服 */}
      <rect
        x="22"
        y="30"
        width="20"
        height="20"
        rx="4"
        fill={accentColor}
      />

      {/* 雙腳 */}
      <rect
        x="24"
        y="50"
        width="6"
        height="10"
        rx="2"
        fill="#334155"
      />
      <rect
        x="34"
        y="50"
        width="6"
        height="10"
        rx="2"
        fill="#334155"
      />
      {/* 鞋子 */}
      <rect
        x="22"
        y="58"
        width="8"
        height="4"
        rx="2"
        fill="#F8FAFC"
      />
      <rect
        x="34"
        y="58"
        width="8"
        height="4"
        rx="2"
        fill="#F8FAFC"
      />

      {/* 手臂與羽毛球拍 (揮拍動畫) */}
      <motion.g
        animate={{
          rotate: raised ? -35 : 0,
          y: raised ? -2 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        style={{ originX: "22px", originY: "34px" }}
      >
        <rect
          x="12"
          y="32"
          width="10"
          height="5"
          rx="2"
          fill="#FED7AA"
        />
        <rect
          x="6"
          y="16"
          width="4"
          height="18"
          rx="2"
          fill="#94A3B8"
        />
        <ellipse
          cx="8"
          cy="10"
          rx="8"
          ry="10"
          stroke="#64748B"
          strokeWidth="2.5"
          fill="white"
          fillOpacity="0.3"
        />
      </motion.g>

      {/* 🏸 Hover 時飛落並掉到前方地上的羽毛球 */}
      <motion.g
        initial={{ opacity: 0, x: -10, y: -10, rotate: -45 }}
        animate={{
          // 從左上方飛入 -> 被球拍打到 -> 弧形飛落落地 -> 微幅彈跳落地
          opacity: raised ? [0, 1, 1, 1, 1] : 0,
          x: raised ? [-10, 8, 22, 26, 28] : -10,
          y: raised ? [-10, 10, 52, 48, 54] : -10,
          rotate: raised ? [-45, 15, 120, 135, 140] : -45,
        }}
        transition={{
          duration: 0.75,
          repeat: raised ? Infinity : 0,
          repeatDelay: 0.2,
          ease: "easeOut",
        }}
      >
        {/* 羽球羽毛 (白色半圓/錐形) */}
        <path
          d="M-4 -6 L4 -6 L2 0 L-2 0 Z"
          fill="#F8FAFC"
          stroke="#E2E8F0"
          strokeWidth="0.8"
        />
        <line
          x1="-2"
          y1="-6"
          x2="-1"
          y2="0"
          stroke="#CBD5E1"
          strokeWidth="0.5"
        />
        <line
          x1="2"
          y1="-6"
          x2="1"
          y2="0"
          stroke="#CBD5E1"
          strokeWidth="0.5"
        />
        {/* 羽球軟木頭 (軟木塞黃褐色) */}
        <circle cx="0" cy="2" r="2.5" fill="#F59E0B" />
      </motion.g>
    </svg>
  );
}
// ─── 帶有浮動音符動畫的像素烏克麗麗人物 SVG ──────────────────────────────────
function UkulelePlayerPixelArt({
  raised,
  accentColor,
}: {
  raised: boolean;
  accentColor: string;
}) {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 臉部 */}
      <rect
        x="20"
        y="8"
        width="24"
        height="24"
        rx="12"
        fill="#FED7AA"
      />
      {/* 帽子/頭髮 */}
      <rect
        x="16"
        y="4"
        width="32"
        height="10"
        rx="3"
        fill="#059669"
      />
      <rect
        x="14"
        y="10"
        width="36"
        height="4"
        rx="2"
        fill="#10B981"
      />
      {/* 腮紅與眼睛 */}
      <rect
        x="25"
        y="18"
        width="3"
        height="4"
        rx="1.5"
        fill="#0F172A"
      />
      <rect
        x="36"
        y="18"
        width="3"
        height="4"
        rx="1.5"
        fill="#0F172A"
      />
      <rect
        x="22"
        y="22"
        width="4"
        height="2"
        rx="1"
        fill="#FCA5A5"
      />
      <rect
        x="38"
        y="22"
        width="4"
        height="2"
        rx="1"
        fill="#FCA5A5"
      />
      {/* 身體 */}
      <rect
        x="22"
        y="30"
        width="20"
        height="20"
        rx="4"
        fill={accentColor}
      />
      {/* 雙腳 */}
      <rect
        x="25"
        y="50"
        width="5"
        height="10"
        rx="2"
        fill="#1F2937"
      />
      <rect
        x="34"
        y="50"
        width="5"
        height="10"
        rx="2"
        fill="#1F2937"
      />

      {/* 烏克麗麗 (彈奏動畫) */}
      <motion.g
        animate={{ rotate: raised ? 15 : 0, x: raised ? 1 : 0 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
        }}
        style={{ originX: "32px", originY: "38px" }}
      >
        <path
          d="M20 38C20 34.5 22.5 32 26 32H34C37.5 32 40 34.5 40 38V41C40 44.5 37.5 47 34 47H26C22.5 47 20 44.5 20 41V38Z"
          fill="#D97706"
        />
        <rect
          x="40"
          y="37"
          width="14"
          height="4"
          rx="1"
          fill="#92400E"
        />
        <circle cx="27" cy="39.5" r="3" fill="#451A03" />
      </motion.g>

      {/* 🎵 音符 1 (右上飄浮) */}
      <motion.g
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: raised ? [0, 1, 0] : 0,
          y: raised ? [-2, -14, -22] : 0,
          x: raised ? [0, 6, 10] : 0,
          rotate: raised ? [0, 15, -10] : 0,
        }}
        transition={{
          duration: 1.2,
          repeat: raised ? Infinity : 0,
          ease: "easeOut",
        }}
      >
        {/* 八分音符 🎵 */}
        <path
          d="M48 20V12L55 10V13L48 15V20"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="46" cy="20" r="2.5" fill="#F59E0B" />
      </motion.g>

      {/* 🎶 音符 2 (左上飄浮，稍微錯開時間) */}
      <motion.g
        initial={{ opacity: 0, y: 0, x: 0 }}
        animate={{
          opacity: raised ? [0, 1, 0] : 0,
          y: raised ? [0, -12, -20] : 0,
          x: raised ? [0, -6, -10] : 0,
          rotate: raised ? [0, -20, 10] : 0,
        }}
        transition={{
          duration: 1.4,
          delay: 0.3,
          repeat: raised ? Infinity : 0,
          ease: "easeOut",
        }}
      >
        {/* 單音符 ♩ */}
        <path
          d="M16 22V14"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="22" r="2.5" fill="#10B981" />
      </motion.g>
    </svg>
  );
}
// ─── 側面奔跑 + Hover 風吹效果的像素人物 SVG ──────────────────────────────
function RunnerPixelArt({
  raised,
  accentColor,
}: {
  raised: boolean;
  accentColor: string;
}) {
  const purpleAccent = accentColor || "#8B5CF6";

  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 跑道路面指示線 */}
      <rect
        x="6"
        y="58"
        width="52"
        height="2"
        fill="#E2E8F0"
        rx="1"
      />

      {/* 💨 Hover 時出現的風吹/風切效果線條 (向左後方飄散) */}
      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: raised ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* 風線 1 (上方風切) */}
        <motion.line
          x1="22"
          y1="16"
          x2="6"
          y2="16"
          stroke="#93C5FD"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            x1: raised ? [22, 12, 2] : 22,
            x2: raised ? [12, 2, -4] : 6,
            opacity: raised ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
        />
        {/* 風線 2 (中間主風線) */}
        <motion.line
          x1="18"
          y1="32"
          x2="2"
          y2="32"
          stroke="#38BDF8"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={{
            x1: raised ? [20, 8, -2] : 18,
            x2: raised ? [8, -2, -8] : 2,
            opacity: raised ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.4,
            delay: 0.15,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
        />
        {/* 風線 3 (腳邊氣流) */}
        <motion.line
          x1="24"
          y1="48"
          x2="10"
          y2="48"
          stroke="#93C5FD"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{
            x1: raised ? [24, 14, 4] : 24,
            x2: raised ? [14, 4, -2] : 10,
            opacity: raised ? [0, 1, 0] : 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.05,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
        />
      </motion.g>

      {/* 🏃‍♂️ 側面奔跑小人 (整體微微上下起伏) */}
      <motion.g
        animate={{
          y: raised ? [0, -3, 0, -3, 0] : 0,
          rotate: raised ? [2, 0, 2, 0, 2] : 0, // 跑步時身體微幅前傾起伏
        }}
        transition={{
          duration: 0.4,
          repeat: raised ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        {/* 後手臂 (左手臂 - 向後擺) */}
        <motion.g
          animate={{ rotate: raised ? [35, -35, 35] : 0 }}
          transition={{
            duration: 0.4,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
          style={{ originX: "24px", originY: "30px" }}
        >
          <rect
            x="15"
            y="28"
            width="10"
            height="4"
            rx="2"
            fill="#FDBA74"
          />
        </motion.g>
        {/* 後腿 (左腿 - 交叉擺動) */}
        <motion.g
          animate={{ rotate: raised ? [-30, 30, -30] : 0 }}
          transition={{
            duration: 0.4,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
          style={{ originX: "26px", originY: "44px" }}
        >
          <rect
            x="23"
            y="44"
            width="5"
            height="12"
            rx="2"
            fill="#334155"
          />
          <rect
            x="20"
            y="54"
            width="8"
            height="4"
            rx="2"
            fill="#F8FAFC"
          />{" "}
          {/* 跑鞋 */}
        </motion.g>
        {/* 身體 (紫色運動上衣) */}
        <rect
          x="20"
          y="28"
          width="14"
          height="18"
          rx="4"
          fill={purpleAccent}
        />
        {/* 紫色衣服邊條 */}
        <rect
          x="20"
          y="28"
          width="3"
          height="18"
          fill="#6D28D9"
        />
        {/* 臉部與頭部 (側臉向右) */}
        <rect
          x="22"
          y="10"
          width="20"
          height="20"
          rx="8"
          fill="#FED7AA"
        />
        {/* 頭髮與紫色頭帶 */}
        <rect
          x="20"
          y="8"
          width="22"
          height="8"
          rx="3"
          fill="#1E293B"
        />
        <rect
          x="20"
          y="14"
          width="23"
          height="4"
          rx="1"
          fill={purpleAccent}
        />{" "}
        {/* 紫色頭帶 */}
        <rect
          x="38"
          y="14"
          width="3"
          height="4"
          fill="#6D28D9"
        />
        {/* 側臉眼睛與腮紅 */}
        <rect
          x="36"
          y="18"
          width="3"
          height="4"
          rx="1.5"
          fill="#0F172A"
        />
        <rect
          x="34"
          y="23"
          width="4"
          height="2"
          rx="1"
          fill="#FCA5A5"
        />
        {/* 前腿 (右腿 - 交叉擺動) */}
        <motion.g
          animate={{ rotate: raised ? [30, -30, 30] : 0 }}
          transition={{
            duration: 0.4,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
          style={{ originX: "28px", originY: "44px" }}
        >
          <rect
            x="25"
            y="44"
            width="5"
            height="12"
            rx="2"
            fill="#475569"
          />
          <rect
            x="25"
            y="54"
            width="8"
            height="4"
            rx="2"
            fill="#F8FAFC"
          />{" "}
          {/* 跑鞋 */}
        </motion.g>
        {/* 前手臂 (右手臂 - 向前擺) */}
        <motion.g
          animate={{ rotate: raised ? [-35, 35, -35] : 0 }}
          transition={{
            duration: 0.4,
            repeat: raised ? Infinity : 0,
            ease: "linear",
          }}
          style={{ originX: "28px", originY: "30px" }}
        >
          <rect
            x="26"
            y="28"
            width="10"
            height="4"
            rx="2"
            fill="#FED7AA"
          />
          <rect
            x="32"
            y="24"
            width="4"
            height="8"
            rx="2"
            fill="#FED7AA"
          />{" "}
          {/* 擺臂姿勢 */}
        </motion.g>
      </motion.g>
    </svg>
  );
}
// ─── 3. 輪播儀表板資料庫  ──────────────────────────────────
const CAROUSEL_SLIDES = [
  {
    id: 0,
    tag: "運動生活 01", // 👈 第一張卡片標籤 (可自由調整，例如: "羽毛球 01")
    title: "羽球日常",
    sub: "打球的人節奏感都不錯，因為都打在拍子上",
    accent: "#4F7DF7",
    gradFrom: "#EFF6FF",
    gradTo: "#C7D2FE",
    items: [
      "🏸 學習觀察、調整與突破，成為生活中重要平衡。",
      "📅 每周至少一天，透過場上互動讓交流更圓融。",
      "🚩 離開工作模式，在球場上享受純粹的運動樂趣。",
    ],
    barHeights: [30, 55, 40, 70, 45],
  },
  {
    id: 1,
    tag: "音樂薰陶 02", // 👈 第一張卡片標籤 (可自由調整，例如: "羽毛球 01")
    title: "烏克麗麗",
    sub: "原本以為學了樂器就會調情，結果老師只教調琴💔",
    accent: "#10B981",
    gradFrom: "#ECFDF5",
    gradTo: "#A7F3D0",
    items: [
      "📊 忙碌之餘，透過烏克麗麗享受片刻寧靜。",
      "🗺️ 用幾個和弦，提醒自己重拾生活熱情。",
      "🔄 接受自己的不完美並持續練習。",
    ],
    barHeights: [45, 30, 65, 50, 80],
  },
  {
    id: 2,
    tag: "團體互動 03", // 👈 第一張卡片標籤 (可自由調整，例如: "羽毛球 01")
    title: "展覽及活動",
    sub: "一開始也沒打算出門，但到現場發現還真的滿有趣的。",
    accent: "#8B5CF6",
    gradFrom: "#F5F3FF",
    gradTo: "#DDD6FE",
    items: [
      "🏃  115年舒跑杯9公里路跑",
      "🏛️ 《穿梭的形狀》尋找基隆光獸",
      "🏊 【即將到來】115年9月泳渡日月潭",
    ],
    barHeights: [60, 80, 50, 70, 55],
  },
];

// ─── 4. 下方簡化版 Theme Card 元件 ───────────────────────────────────────────
// ─── 下方 Theme Card 元件（支援點擊與選中視覺效果） ─────────────────────────
function SideThemeCard({
  card,
  isSelected,
  onClick,
}: {
  card: (typeof SIDE_CARDS)[0];
  isSelected: boolean;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const CharComponent = card.character;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group bg-white rounded-2xl border transition-all duration-300 flex flex-col p-6 justify-between relative overflow-hidden cursor-pointer ${
        isSelected
          ? "shadow-md -translate-y-1"
          : "border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 opacity-80 hover:opacity-100"
      }`}
      style={{
        borderColor: isSelected ? card.accent : undefined,
        boxShadow: isSelected
          ? `0 8px 20px -6px ${card.accent}35`
          : undefined,
      }}
    >
      {/* 頂部 Color Accent Bar (選中時高度增加提升質感) */}
      <div
        className="absolute top-0 left-0 right-0 transition-all duration-300"
        style={{
          backgroundColor: card.accent,
          height: isSelected ? "6px" : "3px",
        }}
      />

      {/* 標題欄位：小標題 + 像素人物 (選中或 Hover 時皆會觸發人物動作) */}
      <div className="flex items-center justify-between mb-4 pt-1">
        <h3 className="text-xl font-bold text-[#1F2937] flex items-center gap-2">
          {card.title}
          {/* 選中時顯示的小 Indicator 圓點 */}
          {isSelected && (
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: card.accent }}
            />
          )}
        </h3>

        {/* 像素人物區域 (isSelected 或 hovered 都會觸發動態) */}
        <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 overflow-hidden">
          <motion.div
            animate={{ y: isSelected || hovered ? -2 : 0 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
            className="scale-50 origin-center"
          >
            <CharComponent
              raised={isSelected || hovered}
              accentColor={card.accent}
            />
          </motion.div>
        </div>
      </div>

      {/* #Hashtag 標籤列 */}
      <div className="flex flex-wrap gap-1.5">
        {card.hashtags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2.5 py-1 rounded-full font-medium transition-colors duration-200"
            style={{
              backgroundColor: isSelected
                ? `${card.accent}20`
                : `${card.accent}10`,
              color: card.accent,
              border: `1px solid ${card.accent}30`,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
// ─── 5. 主頁面元件 ───────────────────────────────────────────────────────────
export function SideProjectsV2() {
  const [slide, setSlide] = useState(0);
  const total = CAROUSEL_SLIDES.length;
  const prev = () => setSlide((s) => (s - 1 + total) % total);
  const next = () => setSlide((s) => (s + 1) % total);
  const cur = CAROUSEL_SLIDES[slide];

  return (
    // 加上 id="side-projects"
    <section id="side-projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold text-[#4F7DF7] uppercase tracking-wider mb-3">
            興趣與個人生活
          </p>
          <h2 className="text-4xl font-black text-[#1F2937]">
            業餘時間，
            <span className="text-[#4F7DF7]">
              創造不同的我。
            </span>
          </h2>
        </div>

        {/* ── IMAGE CAROUSEL (頂部儀表板 - 完整保留) ── */}
        <div className="relative mb-14 rounded-3xl overflow-hidden border border-gray-100 shadow-sm">
          {/* Slide track */}
          <div className="relative h-72 overflow-hidden">
            {CAROUSEL_SLIDES.map((s, i) => (
              <motion.div
                key={s.id}
                className="absolute inset-0 flex items-center"
                style={{
                  background: `linear-gradient(135deg, ${s.gradFrom} 0%, ${s.gradTo} 100%)`,
                  pointerEvents: i === slide ? "auto" : "none",
                }}
                initial={false}
                animate={{ opacity: i === slide ? 1 : 0 }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-10 px-10 lg:px-16 w-full">
                  {/* Left: copy */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-2"
                      style={{ color: s.accent }}
                    >
                      {s.tag || `${s.title} 0${s.id + 1}`}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#1F2937] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-5">
                      {s.sub}
                    </p>
                    <div className="space-y-1.5">
                      {s.items.map((item, j) => (
                        <p
                          key={j}
                          className="text-sm text-[#374151]"
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right: decorative mini-dashboard card */}
                  <div className="hidden lg:flex flex-shrink-0 flex-col gap-2 w-48 h-[#9rem] bg-white/75 backdrop-blur-sm rounded-2xl border border-white/80 shadow-md p-4">
                    <div
                      className="h-2 rounded-full w-3/4"
                      style={{
                        backgroundColor: `${s.accent}40`,
                      }}
                    />
                    <div
                      className="h-2 rounded-full w-full"
                      style={{
                        backgroundColor: `${s.accent}25`,
                      }}
                    />
                    <div
                      className="h-2 rounded-full w-5/6"
                      style={{
                        backgroundColor: `${s.accent}25`,
                      }}
                    />
                    <div className="mt-auto flex items-end gap-1 h-12">
                      {s.barHeights.map((h, k) => (
                        <div
                          key={k}
                          className="flex-1 rounded-t-sm"
                          style={{
                            height: `${h}%`,
                            backgroundColor:
                              k === 3
                                ? s.accent
                                : `${s.accent}55`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Arrow: previous */}
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5"
          >
            <ChevronDown className="w-4 h-4 text-[#6B7280] rotate-90" />
          </button>

          {/* Arrow: next */}
          <button
            onClick={next}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-200 hover:translate-x-0.5"
          >
            <ChevronDown className="w-4 h-4 text-[#6B7280] -rotate-90" />
          </button>

          {/* Dot pagination */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
            {CAROUSEL_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === slide ? 24 : 8,
                  height: 8,
                  backgroundColor:
                    i === slide ? cur.accent : "#D1D5DB",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── 3 THEME CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {SIDE_CARDS.map((card, i) => (
            <SideThemeCard
              key={i}
              card={card}
              isSelected={slide === i}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
// ─── APP ────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div
      className="min-h-screen bg-[#F7F7F5]"
      style={{
        fontFamily: "'Inter', sans-serif",
        scrollBehavior: "smooth",
      }}
    >
      <Nav />
      <HeroSection />
      <AchievementsSection />
      <TimelineSection />
      <ProjectsSection />
      <SideProjectsV2 />
      <ContactSection />
      <AIChat />
    </div>
  );
}