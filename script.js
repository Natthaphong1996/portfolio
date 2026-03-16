const translations = {
    th: {
        nav_about: "เกี่ยวกับเรา",
        nav_experience: "ประสบการณ์",
        nav_datacenter: "Data Center",
        nav_power: "ระบบไฟฟ้า",
        nav_cooling: "ระบบทำความเย็น",
        nav_fault: "ความทนทานระบบ",
        nav_availability: "ความพร้อมใช้งาน",
        nav_network: "ระบบเครือข่าย",
        nav_calc: "เครื่องคำนวณ IP",
        nav_contact: "ติดต่อ",
        hero_sub: "พร้อมสำหรับการก้าวสู่ก้าวต่อไป",
        hero_hi: "สวัสดีครับผมชื่อ <span class='highlight'>นัท</span>",
        hero_desc: "ประสบการณ์ 6 ปีในสาย IT • โปรแกรมเมอร์ & ผู้เชี่ยวชาญด้านโครงสร้างพื้นฐาน • <br><strong>หลงใหลในโครงสร้างพื้นฐาน Data Center อย่างลึกซึ้ง</strong>",
        hero_btn_dc: "ความเชี่ยวชาญ Tier 4",
        hero_btn_journey: "ดูการเดินทาง",
        about_title: "แนะนำตัว",
        about_p1: "\"สวัสดีครับ ผมชื่อ <strong>natthaphong มีสวัสดิ์</strong> เรียกสั้นๆ ว่า <strong>นัท</strong> ครับ อายุ 30 ปี จบการศึกษาด้านเทคโนโลยีสารสนเทศจาก <strong>มหาวิทยาลัยบูรพา</strong>\"",
        about_p2: "ปัจจุบันผมมีความสนใจอย่างมากใน <strong>สายงาน Data Center</strong> เนื่องจากมีการเติบโตที่รวดเร็ว และด้วยการที่ Data Center ของ GULF กำลังก่อสร้างอยู่ใกล้บ้านผม จึงเป็นโอกาสที่สมบูรณ์แบบที่ผมจะได้เข้าร่วมในอุตสาหกรรมนี้และช่วยเหลือในระบบโครงสร้างพื้นฐานระดับโลก",
        stat_exp: "ความชำนาญ IT 6 ปี",
        stat_vision: "วิสัยทัศน์ GULF",
        exp_title: "ประสบการณ์การทำงาน",
        exp_p_desc: "\"ผมมีประสบการณ์ในอุตสาหกรรม IT เกือบ 6 ปี บทบาทเหล่านี้ทำให้ผมมี <strong>รากฐานที่แข็งแกร่งทั้งในด้านตรรกะทางธุรกิจและการดำเนินงานของระบบ</strong>\"",
        exp_time1: "2 ปีล่าสุด",
        exp_role1: "Programmer",
        exp_company1: "Siam Kyohwa",
        exp_desc1: "ออกแบบและพัฒนาโครงการระบบจัดการคลังสินค้า (WMS) เน้นการเพิ่มประสิทธิภาพโลจิสติกส์และความน่าเชื่อถือของข้อมูล",
        exp_time2: "2 ปี",
        exp_role2: "Infrastructure IT Support",
        exp_company2: "The Mall Group",
        exp_desc2: "ดูแลความเสถียรของโครงสร้างพื้นฐานค้าปลีกหลักและจัดการการดำเนินงานของฮาร์ดแวร์ที่ซับซ้อน",
        exp_time3: "1 ปี",
        exp_role3: "ERP IT Support",
        exp_company3: "CHENGSI THAI",
        exp_desc3: "ประสบการณ์เริ่มต้นในการวางแผนทรัพยากรองค์กรและการนำตรรกะทางธุรกิจที่ซับซ้อนไปใช้",
        dc_title: "ข้อมูลเชิงลึก Tier 4 Data Center",
        dc_subtitle: "\"แม้ว่าผมจะไม่มีประสบการณ์ตรงใน Data Center แต่ผมได้ทำการ <strong>ค้นคว้าอย่างกว้างขวางเกี่ยวกับมาตรฐาน Tier 4</strong> และเข้าใจเสาหลักทั้ง 4 ด้าน:\"",
        dc_pillar1_t: "ระบบไฟฟ้า",
        dc_pillar1_d: "ต้องการการกำหนดค่าแบบ <strong>2N+1 พร้อมสายจ่ายไฟคู่ขนาน</strong>, ชุด UPS ที่แยกอิสระ และเครื่องปั่นไฟสำรองระยะยาว",
        dc_pillar2_t: "ระบบทำความเย็น",
        dc_pillar2_d: "ต้องเป็นแบบ <strong>Fault Tolerant พร้อมสายทำความเย็นคู่</strong> เพื่อป้องกันอุณหภูมิพุ่งสูงในช่วงเปลี่ยนผ่านพลังงาน",
        dc_pillar3_t: "การทนทานต่อความเสียหาย",
        dc_pillar3_d: "เป้าหมายคือ <strong>ไม่มีจุดล้มเหลวเพียงจุดเดียว (No Single Point of Failure)</strong> ทุกส่วนประกอบต้องแยกส่วนกันเพื่อป้องกันการล้มเหลวทั้งระบบ",
        dc_pillar4_t: "ความพร้อมใช้งาน",
        dc_pillar4_d: "มุ่งเน้นที่ <strong>Uptime 99.995%</strong> รองรับ <strong>Concurrent Maintainability</strong> สามารถซ่อมบำรุงส่วนประกอบได้โดยไม่ต้องหยุดระบบ",
        infra_title: "รายละเอียดโครงสร้างพื้นฐานที่สำคัญ",
        table_h_item: "ลำดับ",
        table_h_comp: "อุปกรณ์",
        table_h_desc: "หน้าที่และความสำคัญ",
        infra_item1_n: "ATS",
        infra_item1_d: "สลับแหล่งจ่ายไฟอัตโนมัติระหว่างไฟหลวงกับเครื่องปั่นไฟ",
        infra_item2_n: "Generator",
        infra_item2_d: "เครื่องปั่นไฟสำรอง กรณีไฟหลวงดับเป็นเวลานาน",
        infra_item3_n: "UPS & Batteries",
        infra_item3_d: "สำรองไฟทันทีเมื่อไฟตก/ดับ และกรองกระแสไฟให้เสถียร",
        infra_item4_n: "Chiller",
        infra_item4_d: "เครื่องทำน้ำเย็น ส่งไปให้ระบบแอร์ภายในห้อง Server",
        infra_item6_n: "IT Equipment",
        infra_item6_d: "อุปกรณ์หลัก (Server, Storage, Network) ที่เราดูแล",
        infra_item7_n: "CRAH",
        infra_item7_d: "เครื่องเป่าลมเย็นเพื่อคุมอุณหภูมิที่หน้าแร็คเซิร์ฟเวอร์",
        cooling_title: "ระบบทำความเย็น (Cooling Systems)",
        cooling_subtitle: "เปรียบเทียบ CRAC & CRAH: เทคโนโลยีควบคุมความเย็นเพื่ออายุการใช้งานของฮาร์ดแวร์",
        cooling_card1_t: "CRAC",
        cooling_card1_st: "Computer Room Air Conditioner",
        cooling_feat1_1: "<strong>กลไก:</strong> ใช้รอบการทำความเย็นแบบ Direct Expansion (DX) พร้อมคอมเพรสเซอร์ภายใน",
        cooling_feat1_2: "<strong>เหมาะสำหรับ:</strong> ห้องเซิร์ฟเวอร์ขนาดเล็กถึงกลาง หรืออาคารที่ไม่มีระบบผลิตน้ำเย็นกลาง",
        cooling_feat1_3: "<strong>ข้อดี:</strong> ทำงานแยกอิสระ, ต้นทุนโครงสร้างพื้นฐานเริ่มต้นต่ำกว่า",
        cooling_footer1: "เหมาะสำหรับโหลด < 200kW",
        cooling_card2_t: "CRAH",
        cooling_card2_st: "Computer Room Air Handler",
        cooling_feat2_1: "<strong>กลไก:</strong> ใช้น้ำเย็นจากส่วนกลางไหลผ่านแผงคอยล์เพื่อแลกเปลี่ยนความร้อนกับอากาศ",
        cooling_feat2_2: "<strong>เหมาะสำหรับ:</strong> Hyperscale & Mission-Critical Data Centers (เช่น GULF)",
        cooling_feat2_3: "<strong>ข้อดี:</strong> ประสิทธิภาพพลังงานสูง, ขยายระบบได้ดีเยี่ยม, รองรับ Economizer cycles",
        cooling_footer2: "จำเป็นสำหรับโครงสร้างพื้นฐาน Hyperscale",
        scaling_note: "\"จากการวิจัยของผมเกี่ยวกับ <strong>มาตรฐาน Tier 4</strong> ผมเข้าใจว่าระบบ <strong>CRAH</strong> มักถูกเลือกใช้ในอาคารที่ทันสมัยและมีขนาดใหญ่ เพราะลดการใช้พลังงานได้มหาศาล\"",
        net_title: "สถาปัตยกรรมเครือข่าย Data Center",
        net_subtitle: "การออกแบบเครือข่ายแบบ Spine-Leaf เพื่อประสิทธิภาพสูงสุดและความหน่วงต่ำ",
        net_feat1_t: "สถาปัตยกรรม Spine-Leaf",
        net_feat1_d: "สถาปัตยกรรมเครือข่ายยุคใหม่ที่ให้แบนด์วิดท์สูงและความหน่วงต่ำมาก เหมาะสำหรับการรับส่งข้อมูลแบบ East-West",
        net_feat2_t: "ความซ้ำซ้อนระดับ Full Redundancy",
        net_feat2_d: "การออกแบบแบบ Dual-Homing สำหรับทุกเซิร์ฟเวอร์เพื่อให้มั่นใจว่าเครือข่ายจะไม่ล่มเมื่ออุปกรณ์ตัวใดตัวหนึ่งเสียหาย (N+1)",
        net_feat3_t: "Fiber Optic ความเร็วสูง",
        net_feat3_d: "รองรับมาตรฐาน 10G/40G/100G ด้วยสายใยแก้วนำแสงมาตรฐาน OM4/OM5 เพื่อการรับส่งข้อมูลที่ไร้ขีดจำกัด",
        net_comp_title: "เปรียบเทียบสถาปัตยกรรมเครือข่าย",
        net_comp_h1: "สถาปัตยกรรม 3-Tier (ทั่วไป)",
        net_comp_h2: "สถาปัตยกรรม Spine-Leaf (Data Center)",
        net_comp_row1_t: "ทิศทางการไหลของข้อมูล",
        net_comp_row1_c1: "North-South (เข้า/ออก)",
        net_comp_row1_c2: "East-West (ระหว่าง Server)",
        net_comp_row2_t: "ความหน่วง (Latency)",
        net_comp_row2_c1: "สูง (มีหลาย Layer)",
        net_comp_row2_c2: "ต่ำมาก (คงที่ทุกจุด)",
        net_comp_row3_t: "การขยายระบบ (Scalability)",
        net_comp_row3_c1: "จำกัดและซับซ้อน",
        net_comp_row3_c2: "ทำได้ง่ายแบบ Linear",
        net_comp_row4_t: "ความซ้ำซ้อน (Redundancy)",
        net_comp_row4_c1: "STP (Active/Blocking)",
        net_comp_row4_c2: "ECMP (Active/Active)",
        ft_title: "การทนทานต่อความเสียหาย (Fault Tolerance)",
        ft_subtitle: "การออกแบบระบบระดับ Tier 4 ที่ไม่มีจุดล้มเหลวเพียงจุดเดียว (No Single Point of Failure)",
        ft_card1_t: "ระบบ 2N+1 Redundancy",
        ft_card1_d: "ส่วนประกอบสำคัญทุกอย่างมีการสำรองแบบคู่ขนานที่ทำงานอิสระต่อกันอย่างสมบูรณ์ เพื่อให้ระบบทำงานต่อเนื่อง 100%",
        ft_card2_t: "Compartmentalization",
        ft_card2_d: "การแยกพื้นที่ทางกายภาพสำหรับอุปกรณ์สำรอง เพื่อป้องกันภัยพิบัติหนึ่งจุดไม่ให้ส่งผลกระทบต่อทั้งระบบ",
        ft_card3_t: "Concurrent Maintainability",
        ft_card3_d: "ความสามารถในการซ่อมบำรุงหรือเปลี่ยนอุปกรณ์ใดๆ ได้โดยไม่ต้องหยุดการทำงานของระบบแม้แต่วินาทีเดียว",
        av_title: "มาตรฐานความพร้อมใช้งาน (Availability)",
        av_subtitle: "การบรรลุเป้าหมาย Uptime 99.995% ตามมาตรฐาน Tier 4",
        av_card1_t: "เป้าหมาย Uptime 99.995%",
        av_card1_d: "อนุญาตให้ระบบหยุดทำงานได้ไม่เกิน 26.3 นาทีต่อปี เพื่อรองรับธุรกิจระดับ Mission-Critical",
        av_card2_t: "การจัดการ Uptime",
        av_card2_d: "การใช้ระบบตรวจสอบ (Monitoring) และระบบสำรองที่ทำงานสอดประสานกันเพื่อป้องกัน Downtime",
        av_card3_t: "SLA ขั้นสูง",
        av_card3_d: "การรับประกันคุณภาพการบริการที่ตอบโจทย์โครงสร้างพื้นฐานระดับ Hyperscale",
        contact_title: "ติดต่อสอบถาม",
        contact_p: "ขอบคุณที่ให้ความสนใจ คุณสามารถติดต่อผมได้ตามช่องทางด้านล่างครับ",
        contact_btn: "ส่งอีเมลถึงผม",
        contact_phone: "โทร: 083-058-6725",
        contact_github: "GitHub Profile",
        copy_text: "คัดลอก",
        copied_text: "คัดลอกแล้ว!",
        contact_gmail_tag: "ส่วนตัว / Gmail",
        contact_outlook_tag: "ส่วนตัว / Outlook",
        calc_title: "เครื่องมือคำนวณ IP",
        calc_cidr_label: "Subnet Mask / CIDR (เลื่อนวง)",
        calc_subtitle: "เครื่องมือคำนวณ Subnet IPv4 ขั้นสูง",
        calc_ip_label: "ที่อยู่ IP (IP Address)",
        calc_mask_label: "Subnet Mask (ฐานสิบ)",
        calc_net_addr: "Network Address (ที่อยู่เครือข่าย)",
        calc_wildcard: "Wildcard Mask (ย้อนกลับ)",
        calc_broad_addr: "Broadcast Address",
        calc_first_ip: "IP แรกที่ใช้งานได้",
        calc_last_ip: "IP สุดท้ายที่ใช้งานได้",
        calc_hex: "เลขฐานสิบหก (Hexadecimal)",
        calc_total_hosts: "จำนวน Host",
        calc_class: "คลาส (Class)",
        calc_usage_title: "ข้อมูลทางเทคนิคสำหรับคุณ",
        footer: "&copy; <span id='year'></span> ณัฐพงษ์ มีสวัสดิ์. ขอบคุณสำหรับโอกาสอันมีค่า",
    },
    en: {
        nav_about: "About",
        nav_experience: "Experience",
        nav_datacenter: "Data Center",
        nav_power: "Electrical",
        nav_cooling: "Cooling",
        nav_fault: "Fault Tolerance",
        nav_availability: "Availability",
        nav_network: "Network",
        nav_calc: "IP Calculator",
        nav_contact: "Contact",
        hero_sub: "Ready for the Next Evolution",
        hero_hi: "Hi, I'm <span class='highlight'>Nut</span>.",
        hero_desc: "6 Years in IT Industry • Programmer & Infrastructure Expert • <br><strong>Deeply Passionate about Data Center Infrastructure.</strong>",
        hero_btn_dc: "Tier 4 Expertise",
        hero_btn_journey: "View Journey",
        about_title: "Introduction",
        about_p1: "\"Hello, my name is <strong>natthaphong Meesawad</strong>, you can call me <strong>Nut</strong>. I am 30 years old and a graduate in Information Technology from <strong>Burapha University</strong>.\"",
        about_p2: "Currently, I am highly interested in the <strong>Data Center field</strong> due to its rapid growth. Since GULF's Data Center is being built near my home, it presents a perfect opportunity for me to transition into this industry.",
        stat_exp: "6 Years IT Expertise",
        stat_vision: "GULF Vision",
        exp_title: "Work Experience",
        exp_p_desc: "\"I have nearly 6 years of experience in the IT industry. These roles gave me a <strong>strong foundation in both business logic and system operations</strong>.\"",
        exp_time1: "Last 2 Years",
        exp_role1: "Programmer",
        exp_company1: "Siam Kyohwa",
        exp_desc1: "Designing and developing a Warehouse Management System (WMS). Focused on optimizing logistics and data reliability.",
        exp_time2: "2 Years",
        exp_role2: "Infrastructure IT Support",
        exp_company2: "The Mall Group",
        exp_desc2: "Ensuring stability of core retail infrastructure and handling complex hardware operations.",
        exp_time3: "1 Year",
        exp_role3: "ERP IT Support",
        exp_company3: "CHENGSI THAI",
        exp_desc3: "Initial experience in enterprise resource planning and complex business logic implementation.",
        dc_title: "Tier 4 Data Center Mastery",
        dc_subtitle: "\"Although I don't have direct experience in Data Centers, I have done <strong>extensive research on Tier 4 standards</strong>. I understand its 4 core pillars\"",
        dc_pillar1_t: "Electrical Systems",
        dc_pillar1_d: "Requires a <strong>2N+1 configuration with dual active paths</strong>, independent UPS sets, and long-term backup generators.",
        dc_pillar2_t: "Cooling Systems",
        dc_pillar2_d: "Must be <strong>Fault Tolerant with dual cooling paths</strong> and continuous cooling to prevent any temperature spikes.",
        dc_pillar3_t: "Fault Tolerance",
        dc_pillar3_d: "Goal is <strong>No Single Point of Failure</strong>. Every component and cable must be compartmentalized and physically separated.",
        dc_pillar4_t: "Availability",
        dc_pillar4_d: "Aims for <strong>99.995% uptime</strong>, allowing for <strong>Concurrent Maintainability</strong> without any system downtime.",
        infra_title: "Critical Infrastructure Breakdown",
        table_h_item: "#",
        table_h_comp: "Component",
        table_h_desc: "Key Function & Purpose",
        infra_item1_n: "ATS",
        infra_item1_d: "Switches power between utility and generator automatically.",
        infra_item2_n: "Generator",
        infra_item2_d: "Backup power source during long-term utility outages.",
        infra_item3_n: "UPS & Batteries",
        infra_item3_d: "Immediate backup & voltage stabilization during transitions.",
        infra_item4_n: "Chiller",
        infra_item4_d: "Produces chilled water for the facility's cooling system.",
        infra_item6_n: "IT Equipment",
        infra_item6_d: "The core servers, storage, and networking hardware.",
        infra_item7_n: "CRAH",
        infra_item7_d: "Unit that manages temperature and airflow at the rack level.",
        cooling_title: "Cooling Systems",
        cooling_subtitle: "Comparing CRAC & CRAH: The precision cooling technologies for hardware longevity.",
        cooling_card1_t: "CRAC",
        cooling_card1_st: "Computer Room Air Conditioner",
        cooling_feat1_1: "<strong>Mechanism:</strong> Uses Direct Expansion (DX) refrigeration cycle with internal compressors.",
        cooling_feat1_2: "<strong>Best For:</strong> Small to medium server rooms or facilities without chilled water plants.",
        cooling_feat1_3: "<strong>Pros:</strong> Independent operation, lower initial infrastructure cost.",
        cooling_footer1: "Ideal for < 200kW Loads",
        cooling_card2_t: "CRAH",
        cooling_card2_st: "Computer Room Air Handler",
        cooling_feat2_1: "<strong>Mechanism:</strong> Uses chilled water from a central plant to cool the air via heat exchangers.",
        cooling_feat2_2: "<strong>Best For:</strong> Hyperscale & Mission-Critical Data Centers (like GULF).",
        cooling_feat2_3: "<strong>Pros:</strong> High energy efficiency, superior scalability, supports economizer cycles.",
        cooling_footer2: "Essential for Hyperscale Infrastructure",
        scaling_note: "\"In my research on <strong>Tier 4 standards</strong>, I understand that <strong>CRAH</strong> systems are often preferred for larger modern facilities because they eliminate in-unit compressors.\"",
        net_title: "Data Center Network Architecture",
        net_subtitle: "Spine-Leaf Network Design for Maximum Performance & Low Latency",
        net_feat1_t: "Spine-Leaf Architecture",
        net_feat1_d: "Next-gen network design providing high-bandwidth and ultra-low latency, ideal for East-West traffic patterns.",
        net_feat2_t: "Full Redundancy (N+1)",
        net_feat2_d: "Dual-homing design for all critical servers to ensure no network downtime during hardware failure.",
        net_feat3_t: "High-Speed Fiber Optics",
        net_feat3_d: "Supporting 10G/40G/100G standards using OM4/OM5 fiber optics for unlimited data throughput.",
        net_comp_title: "Network Architecture Comparison",
        net_comp_h1: "Traditional 3-Tier",
        net_comp_h2: "Data Center Spine-Leaf",
        net_comp_row1_t: "Traffic Direction",
        net_comp_row1_c1: "North-South (Client-Server)",
        net_comp_row1_c2: "East-West (Server-Server)",
        net_comp_row2_t: "Latency",
        net_comp_row2_c1: "Variable (Multiple Hops)",
        net_comp_row2_c2: "Ultra-Low & Predictable",
        net_comp_row3_t: "Scalability",
        net_comp_row3_c1: "Limited & Complex",
        net_comp_row3_c2: "Highly Scalable (Linear)",
        net_comp_row4_t: "Redundancy",
        net_comp_row4_c1: "STP (Active/Blocking)",
        net_comp_row4_c2: "ECMP (Active/Active)",
        ft_title: "Fault Tolerance Mastery",
        ft_subtitle: "Tier 4 Design Principles for Zero Outages and No Single Point of Failure.",
        ft_card1_t: "2N+1 Redundancy",
        ft_card1_d: "Every critical component has an independent backup that runs in parallel for seamless failover and 100% uptime.",
        ft_card2_t: "Compartmentalization",
        ft_card2_d: "Physical separation of redundant equipment to ensure a single event cannot affect the entire infrastructure.",
        ft_card3_t: "Concurrent Maintainability",
        ft_card3_d: "The ability to repair or replace any component without impacting system availability or uptime.",
        av_title: "High Availability Standards",
        av_subtitle: "Achieving the 99.995% Uptime Benchmark for Tier 4 Facilities.",
        av_card1_t: "99.995% Uptime Goal",
        av_card1_d: "A maximum of 26.3 minutes of downtime per year, ensuring continuous mission-critical operations.",
        av_card2_t: "Uptime Management",
        av_card2_d: "Utilizing advanced monitoring and automated failover systems to maintain constant service.",
        av_card3_t: "Hyperscale SLAs",
        av_card3_d: "Providing service level guarantees tailored for large-scale data center environments.",
        contact_title: "Contact Me",
        contact_p: "Thank you for your interest. You can contact me via the channels below.",
        contact_btn: "Email Me",
        contact_phone: "Phone: 083-058-6725",
        contact_github: "GitHub Profile",
        copy_text: "Copy",
        copied_text: "Copied!",
        contact_gmail_tag: "Personal / Gmail",
        contact_outlook_tag: "Personal / Outlook",
        calc_title: "IP Calculator",
        calc_cidr_label: "Subnet Mask / CIDR Selection",
        calc_subtitle: "Advanced IPv4 Subnetting Tool",
        calc_ip_label: "IP Address",
        calc_mask_label: "Dotted Decimal Mask",
        calc_net_addr: "Network Address",
        calc_wildcard: "Wildcard Mask",
        calc_broad_addr: "Broadcast Address",
        calc_first_ip: "First Usable IP",
        calc_last_ip: "Last Usable IP",
        calc_hex: "IP in Hexadecimal",
        calc_total_hosts: "Total Hosts",
        calc_class: "Network Class",
        calc_usage_title: "Technical Insight",
        footer: "&copy; <span id='year'></span> natthaphong Meesawad. Thank you for this valuable opportunity.",
    }
};

// Language Swapper Logic
function setLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    localStorage.setItem('selectedLang', lang);

    // Apply translations to all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update the active state of language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        // Match the language code in the onclick attribute
        if (btn.getAttribute('onclick').toLowerCase().includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });

    document.documentElement.lang = lang;

    // Maintain dynamic year after language switch
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.innerText = new Date().getFullYear();
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Language Load
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    setLanguage(savedLang);

    // 2. Scroll Reveal Animation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .timeline-item, .pillar-card, .cooling-card, .net-card').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });

    // 3. Interactive Mouse Glow for Cards
    document.querySelectorAll('.border-glow').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.setProperty('--x', `${e.clientX - rect.left}px`);
            card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        });
    });

    // 4. Navbar active state on scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
        let current = '';
        document.querySelectorAll('section').forEach(section => {
            const sectionOffsetTop = section.offsetTop;
            if (pageYOffset >= sectionOffsetTop - 150) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.style.color = link.getAttribute('href').includes(current) ? 'var(--primary)' : 'var(--text-dim)';
        });
    });
});

// Dynamic Reveal CSS Injection
const style = document.createElement('style');
style.textContent = `
    .reveal { opacity: 0; transform: translateY(30px); transition: all 0.8s ease-out; }
    .visible { opacity: 1; transform: translateY(0); }
    .timeline-item.reveal:nth-child(odd) { transform: translateX(-30px); }
    .timeline-item.reveal:nth-child(even) { transform: translateX(30px); }
    .timeline-item.visible { transform: translateX(0); }
`;
document.head.appendChild(style);

// Email Copy Logic
function copyEmail(emailId, statusId) {
    const email = document.getElementById(emailId).innerText;
    const status = document.getElementById(statusId);
    const lang = localStorage.getItem('selectedLang') || 'en';

    navigator.clipboard.writeText(email).then(() => {
        status.innerText = translations[lang]['copied_text'];
        setTimeout(() => {
            status.innerText = translations[lang]['copy_text'];
        }, 2000);
    });
}
