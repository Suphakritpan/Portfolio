/* Shared portfolio content. Both index.html (drawing sheet) and studio.html read from here. */
var A=' marker-end="url(#ah)"';
var ILL={
  arch:'<svg class="ill" viewBox="0 0 420 262" role="img" aria-label="สถาปัตยกรรม MindKeep: Next.js เชื่อม FastAPI แล้วต่อไปยัง PostgreSQL กับ pgvector, งานเบื้องหลังและไฟล์ และ Ollama ทั้งหมดรันในองค์กร">'+
    '<defs><marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0 0L8 4L0 8z"/></marker></defs>'+
    '<rect class="bd" x="8" y="8" width="404" height="246"/><text x="18" y="26" font-size="11">On-premise · รันในองค์กรด้วย Docker Compose</text>'+
    '<g text-anchor="middle"><rect class="ga" x="34" y="42" width="140" height="48"/><text class="ti" x="104" y="64" font-size="14">Next.js</text><text x="104" y="81" font-size="10">หน้าเว็บ</text>'+
    '<rect class="gb" x="246" y="42" width="140" height="48"/><text class="ti" x="316" y="64" font-size="14">FastAPI</text><text x="316" y="81" font-size="10">modular monolith</text>'+
    '<rect class="gs" x="22" y="170" width="114" height="54"/><text class="ti" x="79" y="194" font-size="13">PostgreSQL</text><text x="79" y="211" font-size="10">+ pgvector</text>'+
    '<rect class="gs" x="153" y="170" width="114" height="54"/><text class="ti" x="210" y="194" font-size="13">Jobs</text><text x="210" y="211" font-size="10">ดึงข้อความ · embedding</text>'+
    '<rect class="gs" x="284" y="170" width="114" height="54"/><text class="ti" x="341" y="194" font-size="13">Ollama</text><text x="341" y="211" font-size="10">LLM ในเครื่อง</text></g>'+
    '<path class="ln2" d="M174 66H244"'+A+'/><path class="ln2" d="M316 90V130H79V168"'+A+'/><path class="ln2" d="M210 130V168"'+A+'/><path class="ln2" d="M316 130H341V168"'+A+'/></svg>',
  schema:'<svg class="ill" viewBox="0 0 420 262" role="img" aria-label="โครงฐานข้อมูล Shabu Mood: คิว โต๊ะ แพ็กเกจ ออเดอร์ และการชำระเงิน">'+
    '<defs><marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0 0L8 4L0 8z"/></marker></defs>'+
    '<g font-size="12"><rect class="ga" x="20" y="28" width="112" height="62"/><path class="ln" d="M20 50H132"/><text class="ti" x="30" y="44">queues</text><text x="30" y="68" font-size="10">id · party_size</text><text x="30" y="82" font-size="10">status</text>'+
    '<rect class="ga" x="154" y="28" width="112" height="62"/><path class="ln" d="M154 50H266"/><text class="ti" x="164" y="44">tables</text><text x="164" y="68" font-size="10">id · seats</text><text x="164" y="82" font-size="10">status</text>'+
    '<rect class="ga" x="288" y="28" width="112" height="62"/><path class="ln" d="M288 50H400"/><text class="ti" x="298" y="44">packages</text><text x="298" y="68" font-size="10">id · price</text><text x="298" y="82" font-size="10">menu_items</text>'+
    '<rect class="gb" x="88" y="140" width="112" height="62"/><path class="ln" d="M88 162H200"/><text class="ti" x="98" y="156">orders</text><text x="98" y="180" font-size="10">table_id</text><text x="98" y="194" font-size="10">package_id</text>'+
    '<rect class="gb" x="230" y="140" width="112" height="62"/><path class="ln" d="M230 162H342"/><text class="ti" x="240" y="156">payments</text><text x="240" y="180" font-size="10">order_id</text><text x="240" y="194" font-size="10">amount</text></g>'+
    '<path class="ln2" d="M132 59H152"'+A+'/><path class="ln2" d="M210 90V115H144V138"'+A+'/><path class="ln2" d="M344 90V115H170V138"'+A+'/><path class="ln2" d="M200 171H228"'+A+'/>'+
    '<text class="ta" x="210" y="236" font-size="12" text-anchor="middle">28 tables · 32 functions · 54 RLS policies</text></svg>',
  pipeline:'<svg class="ill" viewBox="0 0 420 262" role="img" aria-label="ขั้นตอน: นำเข้าไฟล์ตารางสอน JSON เก็บลงฐานข้อมูล แล้วดูตารางรายสัปดาห์หรือถามผ่านแชท">'+
    '<defs><marker id="ah" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="ah" d="M0 0L8 4L0 8z"/></marker></defs>'+
    '<g text-anchor="middle"><rect class="gs" x="14" y="70" width="100" height="56"/><text class="ti" x="64" y="95" font-size="12">ตารางสอน</text><text x="64" y="112" font-size="10">ไฟล์ JSON</text>'+
    '<rect class="ga" x="160" y="70" width="100" height="56"/><text class="ti" x="210" y="95" font-size="12">ฐานข้อมูล</text><text x="210" y="112" font-size="10">คาบ ห้อง อาจารย์</text>'+
    '<rect class="gb" x="306" y="40" width="100" height="50"/><text class="ti" x="356" y="62" font-size="12">ตารางรายสัปดาห์</text><text x="356" y="78" font-size="10">ทฤษฎี / ปฏิบัติ</text>'+
    '<rect class="gb" x="306" y="106" width="100" height="50"/><text class="ti" x="356" y="128" font-size="12">แชทถามตาราง</text><text x="356" y="144" font-size="10">ถามกลับถ้าชื่อซ้ำ</text>'+
    '<rect class="gd" x="160" y="186" width="246" height="50"/><text class="ta" x="283" y="208" font-size="12">แผนต่อยอด: จัดตารางอัตโนมัติ</text><text x="283" y="225" font-size="10">CSP + Genetic Algorithm</text></g>'+
    '<path class="ln2" d="M114 98H158"'+A+'/><path class="ln2" d="M260 90L304 66"'+A+'/><path class="ln2" d="M260 106L304 130"'+A+'/><path class="ln2" d="M210 126V184"'+A+'/></svg>',
  timetable:'<svg class="ill" viewBox="0 0 420 262" role="img" aria-label="ตัวอย่างตารางเรียน 5 วัน 6 คาบ ไม่มีคาบชนกัน">'+
    '<g font-size="11"><text x="6" y="50">จ.</text><text x="6" y="94">อ.</text><text x="6" y="138">พ.</text><text x="6" y="182">พฤ.</text><text x="6" y="226">ศ.</text>'+
    '<text x="62" y="16">1</text><text x="122" y="16">2</text><text x="182" y="16">3</text><text x="242" y="16">4</text><text x="302" y="16">5</text><text x="362" y="16">6</text></g>'+
    '<rect class="ln" x="36" y="24" width="360" height="220"/><path class="ln" d="M96 24V244M156 24V244M216 24V244M276 24V244M336 24V244M36 68H396M36 112H396M36 156H396M36 200H396"/>'+
    '<rect class="ga" x="40" y="28" width="112" height="36"/><rect class="ga" x="220" y="72" width="112" height="36"/><rect class="ga" x="100" y="116" width="52" height="36"/><rect class="ga" x="280" y="160" width="112" height="36"/><rect class="ga" x="40" y="204" width="52" height="36"/>'+
    '<rect class="gb" x="220" y="28" width="52" height="36"/><rect class="gb" x="40" y="72" width="112" height="36"/><rect class="gb" x="220" y="116" width="112" height="36"/><rect class="gb" x="100" y="160" width="52" height="36"/><rect class="gb" x="160" y="204" width="112" height="36"/></svg>'
};

var GH='https://github.com/';
var M='media/';
/* cls: A = existing screenshot/file, B = captured from the running system, C = illustration / generated / design, not a working screen */
function g(list,base,cls,prefix){return list.map(function(x){return {src:M+base+x[0]+'.webp',cls:cls,cap:(prefix||'')+x[1]}})}
var P=[
  {no:'P-01',feature:true,title:'ThaiGigaBike',sub:'เว็บ E-commerce อะไหล่แต่ง CNC มอเตอร์ไซค์',status:'เผยแพร่แล้ว',kind:'s-live',type:'เว็บแอปพลิเคชัน · E-commerce',
   summary:'ย้ายร้านอะไหล่แต่ง CNC จากเว็บ HTML ยุคเก่า มาเป็นร้านค้าออนไลน์ที่ค้นหาสินค้า สั่งซื้อ และติดตามออเดอร์ได้ ใช้ได้ทั้งไทยและอังกฤษ',
   problem:'เว็บเดิมของร้านเป็นหน้า HTML แบบเก่า ไม่มี HTTPS สินค้าเรียงเป็นรูปยาวทีละหน้า ไม่มีระบบค้นหาหรือตะกร้า ลูกค้าต้องทักร้านถามทีละรายการ',
   did:['ย้ายข้อมูลสินค้าจากเว็บเก่า จัดเป็นแคตตาล็อก 369 รายการ 8 หมวด ผูกกับรุ่นรถ','ค้นหาด้วยรหัสหรือชื่อสินค้า กรองตามหมวดและรุ่นรถ เรียงตามราคา','หน้าสินค้า ตะกร้า และฟอร์มสั่งซื้อพร้อมตัวเลือกการจัดส่ง','ติดตามออเดอร์ด้วยรหัสยืนยัน 6 หลักที่ส่งทางอีเมล','หน้าติดต่อ ตัวแทนจำหน่าย แกลเลอรีผลงาน Racing Parts และ FAQ','ระบบสมาชิกแบบ custom auth ธีมสว่าง/มืด และภาษาไทย/อังกฤษ','ทดสอบความปลอดภัยก่อนเผยแพร่บน Netlify'],
   tech:['Next.js 14','Supabase','Custom Auth','Resend','Netlify'],
   stats:[['369','รายการสินค้า'],['8','หมวดสินค้า'],['2','ภาษา TH/EN']],
   note:'ภาพ "ภาพออกแบบ" คือแบบร่างก่อนทำจริง ไม่ใช่หน้าเว็บที่ใช้งาน',
   links:[{href:'https://thaigigabike.netlify.app',label:'thaigigabike.netlify.app',icon:'external'},
          {href:GH+'Suphakritpan/Giga-Bike-',label:'Giga-Bike- (repo)',icon:'github'}],
   video:M+'gigabike-demo.mp4',
   media:[].concat(
     g([['home-dark','หน้าแรก ธีมมืด'],['home','หน้าแรก ธีมสว่าง พร้อมตัวกรองตามรุ่นรถ'],['home-fullpage','หน้าแรกแบบเต็มหน้า'],['product-catalog-dark','แคตตาล็อก 369 รายการ ธีมมืด'],['product-catalog','แคตตาล็อกสินค้า ธีมสว่าง'],['product-catalog-by-bike-cb750','กรองสินค้าตามรุ่นรถ (Honda CB750)'],['categories','หน้ารวมหมวดสินค้า'],['product-detail','หน้ารายละเอียดสินค้า: รหัส ราคา รุ่นที่ใส่ได้ และสต็อก'],['search','ค้นหาด้วยรหัสสินค้าและหมวดยอดนิยม'],['cart','ตะกร้าสินค้า (ว่าง)'],['cart-with-item','ตะกร้าที่มีสินค้า'],['checkout-with-item','ฟอร์มสั่งซื้อ ตัวเลือกจัดส่ง และสรุปออเดอร์'],['payment','ข้อมูลช่องทางชำระเงิน'],['track-order','ติดตามออเดอร์ด้วยรหัสยืนยันทางอีเมล'],['contact','หน้าติดต่อร้าน'],['dealer','ข้อมูลตัวแทนจำหน่าย'],['gallery','แกลเลอรีผลงาน CNC ของร้าน'],['racing','หน้า Racing & Track Parts'],['support','หน้าช่วยเหลือ / FAQ'],['login','เข้าสู่ระบบลูกค้า'],['signup','สมัครสมาชิก']],'Giga-Bike/captured/','B'),
     g([['new-site-home-dark','หน้าแรก ธีมมืด (บิลด์ก่อนหน้า)'],['new-site-product-catalog-dark','แคตตาล็อก ธีมมืด (บิลด์ก่อนหน้า)'],['new-site-product-detail-gallery-dark','หน้าสินค้าพร้อมแกลเลอรีรูป (บิลด์ก่อนหน้า)'],['new-site-search-dark','หน้าค้นหา ธีมมืด (บิลด์ก่อนหน้า)'],['new-site-contact-form-dark','ฟอร์มส่งข้อความถึงร้าน (บิลด์ก่อนหน้า)'],['admin-kpi-cards-partial','หลังบ้าน: การ์ดสรุปตัวเลข (ครอปบางส่วน)'],['old-site-home','ก่อนปรับปรุง: เว็บเดิมของร้าน'],['old-site-product-gallery','ก่อนปรับปรุง: หน้าสินค้าเดิมที่เรียงรูปยาวทีละหน้า'],['old-site-product-detail','ก่อนปรับปรุง: รายละเอียดสินค้าเว็บเดิม']],'Giga-Bike/existing/','A'),
     g([['design-preview-D1-home','ภาพออกแบบ D1: หน้าแรก'],['design-preview-D2-category-sr400','ภาพออกแบบ D2: หน้าหมวด SR400'],['design-preview-D3-product-detail','ภาพออกแบบ D3: หน้าสินค้า'],['code-knowledge-graph-graphify','กราฟโครงสร้างโค้ด สร้างอัตโนมัติด้วย graphify']],'Giga-Bike/reference/','C'))},
  {no:'P-02',size:'tall',title:'Shabu Mood',sub:'ระบบร้านชาบูบุฟเฟต์: QR สั่งอาหาร หน้าพนักงาน และหน้าผู้จัดการ',status:'ต้นแบบ',kind:'s-plan',type:'เว็บแอปพลิเคชัน · ฐานข้อมูล',
   summary:'ระบบร้านบุฟเฟต์ครบ 3 บทบาท ลูกค้าสั่งอาหารผ่าน QR บนมือถือ พนักงานดูผังโต๊ะ คิว และจอครัว ผู้จัดการดูภาพรวมร้าน บนฐานข้อมูล Postgres ที่กำหนดสิทธิ์ด้วย RLS',
   problem:'ร้านบุฟเฟต์ต้องจัดการคิว โต๊ะ แพ็กเกจ ออเดอร์ และการชำระเงินพร้อมกันหลายโต๊ะ ข้อมูลต้องตรงกันทุกจุด และแต่ละตำแหน่งควรเห็นเฉพาะข้อมูลที่ตัวเองต้องใช้',
   did:['ฝั่งลูกค้า (มือถือ): สแกน QR สั่งอาหาร ดูสถานะรายจาน ดูบิล และนับถอยหลังเวลาบุฟเฟต์','ฝั่งพนักงาน: ผังโต๊ะพร้อมแถบเวลา คิวหน้าร้าน จอครัวแยกสถานี รายการรอเสิร์ฟ และเช็คบิล','จอเรียกคิวหน้าร้าน และหน้าผู้จัดการ: ภาพรวมยอดขาย เมนู แพ็กเกจ โต๊ะพร้อม QR โปรโมชัน และตั้งค่าร้าน','ฐานข้อมูล 28 ตาราง 32 functions และ 54 RLS policies รองรับ real-time'],
   tech:['React','Supabase','PostgreSQL','RLS','Vercel'],
   stats:[['3','บทบาทผู้ใช้'],['28','tables'],['54','RLS policies']],
   note:'ภาพจากระบบจริงใช้ข้อมูลตัวอย่างที่ฝังในแอป ไม่ใช่ข้อมูลร้านจริง ภาพธีมมืดมาจากคู่มือของ UI รุ่นก่อน',
   links:[{href:GH+'jarnballproject-ops/Suphakrit',label:'jarnballproject-ops/Suphakrit (repo)',icon:'github'}],
   media:[].concat(
     g([['landing-desktop','หน้าแรก: เลือกบทบาท ลูกค้า / พนักงานและครัว / ผู้จัดการ'],['landing-desktop-fullpage','หน้าแรกแบบเต็มหน้า'],['landing-mobile','หน้าแรกบนมือถือ']],'Suphakrit/captured/','B'),
     g([['customer-table-home-mobile','ลูกค้าบนมือถือ: หน้าโต๊ะพร้อมนับถอยหลังเวลาบุฟเฟต์'],['customer-menu-mobile','ลูกค้าบนมือถือ: เมนูแยกหมวด'],['customer-order-status-mobile','ลูกค้าบนมือถือ: สถานะรายจาน'],['customer-bill-mobile','ลูกค้าบนมือถือ: บิลระหว่างทาน'],['staff-floor-plan','พนักงาน: ผังโต๊ะพร้อมแถบเวลา'],['staff-queue','พนักงาน: คิวหน้าร้าน'],['staff-kitchen-display','จอครัวแยกตามสถานี'],['staff-serve','พนักงาน: รายการรอเสิร์ฟ'],['staff-checkout','พนักงาน: เช็คบิลและปิดโต๊ะ'],['queue-tv-display','จอเรียกคิวหน้าร้าน'],['admin-overview','ผู้จัดการ: ภาพรวมร้าน'],['admin-menu-management','ผู้จัดการ: จัดการเมนู'],['admin-packages-addons','ผู้จัดการ: แพ็กเกจและ add-on'],['admin-tables-qr','ผู้จัดการ: โต๊ะและ QR']].map(function(x){return [x[0],x[1]+' · ข้อมูลตัวอย่าง']}),'Suphakrit/captured/','B'),
     g([['landing-desktop','หน้าแรก'],['customer-mobile-table-home','ลูกค้า: หน้าโต๊ะ'],['customer-mobile-menu','ลูกค้า: เมนู'],['customer-mobile-order-status','ลูกค้า: สถานะออเดอร์'],['customer-mobile-bill','ลูกค้า: บิล'],['staff-floor-plan','พนักงาน: ผังโต๊ะ'],['staff-queue','พนักงาน: คิว'],['staff-kitchen-display','จอครัว'],['staff-serve','พนักงาน: รอเสิร์ฟ'],['staff-checkout','พนักงาน: เช็คบิล'],['admin-overview','ผู้จัดการ: ภาพรวม'],['admin-menu-management','ผู้จัดการ: เมนู'],['admin-packages-addons','ผู้จัดการ: แพ็กเกจ'],['admin-tables-qr','ผู้จัดการ: โต๊ะและ QR']],'Suphakrit/existing/from-manual-docx/','A','UI รุ่นก่อน (ธีมมืด) · '),
     g([['admin-promotions','ผู้จัดการ: ฟอร์มโปรโมชัน'],['admin-restaurant-settings','ผู้จัดการ: ตั้งค่าร้าน (VAT ค่าบริการ เวลาบุฟเฟต์ QR)'],['admin-staff-roles-rls-test','ผู้จัดการ: บัญชีพนักงานและบทบาท (บัญชีทดสอบ RLS)'],['staff-checkout-payment-methods','เช็คบิล: เลือกช่องทางชำระเงิน'],['staff-kitchen-display','จอครัว (รอบพัฒนา)']],'Suphakrit/existing/from-screenshots-folder/','A'),
     [{svg:'schema',cls:'C',cap:'โครงตารางหลักและความสัมพันธ์'}])},
  {no:'P-03',title:'MindKeep',sub:'ระบบความจำองค์กรด้วย AI แบบ on-premise สำหรับ SME',status:'กำลังพัฒนา',kind:'s-plan',type:'AI · ระบบภายในองค์กร',
   summary:'เปลี่ยนงานจริงของพนักงาน ทั้งเอกสาร ไฟล์ บันทึก และงานอนุมัติ ให้เป็นความรู้ขององค์กรที่ค้นหาได้ตามสิทธิ์ ใช้ LLM ในเครื่อง ข้อมูลไม่ออกนอกบริษัท',
   problem:'ความรู้ในองค์กรอยู่กับตัวคน เอกสารกระจายหลายที่ งานอนุมัติอยู่ในแชท เมื่อพนักงานเปลี่ยน ความรู้ก็หายไปด้วย',
   did:['เขียนเอกสารกำหนดระบบเป็นแหล่งอ้างอิงหลัก: requirements, system spec, scope, data model, API spec และ ADR','วางโครงสร้าง monorepo: Next.js (web) กับ FastAPI (api) แบบ modular monolith รันด้วย Docker Compose','Phase 1 foundation: ฐานข้อมูล ระบบตัวตนและสิทธิ์ เอกสาร และงานเบื้องหลัง (jobs)','ดึงข้อความจากเอกสารและทำ embedding เพื่อเก็บเป็น Work Memory','ออกแบบให้คนตรวจทานก่อนข้อมูลจะกลายเป็น Work Memory ใช้บริษัทสมมติ "ลองดื่ม" (สวนมะพร้าวและน้ำมะพร้าว) เป็นข้อมูลทดสอบ'],
   tech:['Next.js 15','FastAPI','PostgreSQL + pgvector','Ollama','Docker Compose'],
   limits:['MindKeep รุ่นใหม่ยังไม่มีหน้าเว็บให้ใช้งาน ภาพหน้าจอทั้งหมดเป็นของรุ่นแรก (LONGRIAN)'],
   next:['หน้าเว็บสำหรับผู้ใช้ของรุ่นใหม่','ฟีเจอร์ Phase 1 ที่เหลือตาม roadmap'],
   note:'ภาพที่ขึ้นต้นด้วย "รุ่นแรก (LONGRIAN)" มาจาก MindKeep รุ่นแรก ข้อมูลในภาพเป็นบริษัทและบัญชีทดสอบ',
   links:[{href:GH+'Suphakritpan/MindKeep-LongDuem',label:'MindKeep-LongDuem (repo รุ่นใหม่)',icon:'github'}],
   media:[].concat(
     [{src:M+'mindkeep-poster.webp',cls:'A',cap:'โปสเตอร์นำเสนอ MindKeep AI Knowledge Platform สำหรับ SME ไทย'},
      {svg:'arch',cls:'C',cap:'สถาปัตยกรรมรุ่นใหม่: Next.js → FastAPI → PostgreSQL + pgvector / Jobs / Ollama'},
      {src:M+'MindKeep-LongDuem/reference/code-knowledge-graph-graphify.webp',cls:'C',cap:'รุ่นใหม่: กราฟโครงสร้างโค้ด สร้างอัตโนมัติด้วย graphify'}],
     g([['dashboard','หน้าภาพรวม'],['finance-workspace-overview','ภาพรวมพื้นที่การเงิน (รายรับ รายจ่าย VAT)'],['document-library','คลังเอกสาร กรองตามประเภท'],['help-center','ศูนย์ช่วยเหลือ'],['profile-and-settings','โปรไฟล์และการตั้งค่า']],'LONGRIAN-AI-Workspace/existing/','A','รุ่นแรก (LONGRIAN): '),
     g([['login','หน้าเข้าสู่ระบบ'],['tasks','งานของฉัน'],['document-library','คลังเอกสาร'],['pdf-tools','เครื่องมือ PDF'],['farm-workspace','พื้นที่งานสวนและการผลิต'],['finance-hub','ศูนย์รวมการเงิน'],['finance-income','รายรับ'],['finance-documents-and-ocr-upload','เอกสารการเงินและอัปโหลดใบเสร็จ (OCR)'],['finance-calculators','เครื่องคำนวณการเงิน'],['finance-insights-csv-trend','วิเคราะห์แนวโน้มจาก CSV'],['finance-reports-overview','ภาพรวมรายงาน'],['finance-tax-estimate','ประมาณการภาษี'],['finance-vat-compliance','ตรวจความถูกต้อง VAT'],['admin-handover','รายงานส่งมอบงาน'],['help','หน้าช่วยเหลือ'],['profile-account','ข้อมูลบัญชี'],['profile-privacy','ความเป็นส่วนตัว']],'LONGRIAN-AI-Workspace/captured/','B','รุ่นแรก (LONGRIAN): '),
     [{src:M+'mindkeep-v1-dashboard-activity.webp',cls:'A',cap:'รุ่นแรก (LONGRIAN): หน้าภาพรวมพร้อมงานและกิจกรรม · ข้อมูลตัวอย่าง'},
      {src:M+'mindkeep-v1-calendar.webp',cls:'A',cap:'รุ่นแรก (LONGRIAN): ปฏิทินกิจกรรม'},
      {src:M+'mindkeep-pdf.webp',cls:'A',cap:'รุ่นแรก (LONGRIAN): ตัวดูใบเสนอราคา PDF · ข้อมูลตัวอย่าง'},
      {src:M+'mindkeep.jpg',cls:'A',cap:'รุ่นแรก (LONGRIAN): Data Studio รายชื่อบัญชีทดสอบ (@longduem.local)'}],
     g([['architecture-overview-page','รุ่นแรก (LONGRIAN): หน้าอธิบายสถาปัตยกรรม (สร้างอัตโนมัติ)'],['code-knowledge-graph-graphify','รุ่นแรก (LONGRIAN): กราฟโครงสร้างโค้ด']],'LONGRIAN-AI-Workspace/reference/','C'))},
  {no:'P-04',title:'ระบบคิวร้านหมากระทะ',sub:'aith · รับคิวและจองโต๊ะ ทำให้ร้านของเพื่อน',status:'ต้นแบบ',kind:'s-plan',type:'เว็บแอปพลิเคชัน · ฐานข้อมูล',
   summary:'ระบบที่ทำให้ร้านหมากระทุปุ๊ป๊ะของเพื่อน ลูกค้ารับบัตรคิว จองโต๊ะล่วงหน้า และดูคิวผ่านจอทีวีหน้าร้าน โดยบังคับกฎของร้านไว้ที่ฐานข้อมูล',
   problem:'ช่วงคนแน่นร้าน ลูกค้าไม่รู้ว่าต้องรอนานแค่ไหน พนักงานต้องจำลำดับคิวเอง และการจองโต๊ะล่วงหน้ากระจายอยู่ในแชท',
   did:['เขียน repo ของระบบให้ร้านของเพื่อน','หน้าลูกค้า: รับบัตรคิวตามจำนวนคน และจองโต๊ะล่วงหน้า','บัตรคิวพร้อมเวลารอโดยประมาณ และหน้ายืนยันการจอง','จอทีวีเรียกคิว แยกคิวตามขนาดกลุ่ม','บังคับ business rules ที่ระดับฐานข้อมูลด้วย PL/pgSQL'],
   tech:['TypeScript','Supabase','PL/pgSQL'],
   note:'ร้านเป็นของเพื่อน ผมเป็นคนเขียนระบบ ภาพหน้าจอที่มีเป็นฝั่งลูกค้าเท่านั้น',
   links:[{href:GH+'jarnballproject-ops/aith',label:'jarnballproject-ops/aith (repo)',icon:'github'}],
   media:[].concat(
     g([['queue-tv-display','จอทีวีเรียกคิว แยกตามขนาดกลุ่ม'],['customer-queue-intake','ลูกค้ารับบัตรคิว: เลือกจำนวนคนและกรอกเบอร์'],['customer-queue-ticket','บัตรคิวพร้อมเวลารอโดยประมาณ'],['customer-table-reservation-form','ฟอร์มจองโต๊ะล่วงหน้า'],['customer-reservation-confirmed','หน้ายืนยันการจอง']],'aith/existing/','A'),
     g([['code-knowledge-graph-graphify','กราฟโครงสร้างโค้ดพร้อมรายชื่อกลุ่มโมดูล'],['code-knowledge-graph-graphify-2','กราฟโครงสร้างโค้ด อีกมุมมอง']],'aith/reference/','C'))},
  {no:'P-05',title:'แชตบอตตารางสอนอาจารย์',sub:'ดูตารางสอนรายสัปดาห์และถามข้อมูลผ่านแชท',status:'กำลังพัฒนา',kind:'s-plan',type:'เว็บแอปพลิเคชัน · ฐานข้อมูล',
   summary:'ระบบดูตารางสอนรายสัปดาห์ของอาจารย์ แยกคาบทฤษฎีและปฏิบัติ พร้อมแชทที่ตอบคำถามจากฐานข้อมูล ข้อมูลตารางนำเข้าเป็นไฟล์ JSON',
   problem:'ตารางสอนอยู่ในรูปไฟล์ภาพหรือเอกสาร อยากรู้ว่าอาจารย์ว่างคาบไหนหรือห้องไหนใช้อยู่ ต้องเปิดไฟล์ไล่ดูเอง',
   did:['หน้าตารางสอนรายสัปดาห์ แยกสีคาบปฏิบัติและทฤษฎี พร้อมรายชื่ออาจารย์และแผงรายละเอียด','แชทตอบคำถามด้วยการค้นฐานข้อมูล (SQL) ถ้าชื่ออาจารย์ซ้ำจะถามกลับให้เลือกคนที่ถูก','นำเข้าข้อมูลตารางสอนจากไฟล์ JSON','หน้ารายงานคุณภาพคำตอบ','แผนต่อยอด: จัดตารางอัตโนมัติด้วย CSP ร่วมกับ Genetic Algorithm'],
   tech:['Chatbot (SQL)','JSON Import','Docker','CSP / GA (แผน)'],
   note:'ภาพหน้าตารางสอนจริงมีชื่ออาจารย์ จึงใช้ภาพประกอบแทน',
   links:[{href:GH+'jarnballproject-ops/chat-bot-class-schedule',label:'chat-bot-class-schedule (repo)',icon:'github'}],
   media:[{svg:'pipeline',cls:'C',cap:'ขั้นตอนการทำงานของระบบ'},{svg:'timetable',cls:'C',cap:'ตัวอย่างตารางรายสัปดาห์ที่ไม่มีคาบชนกัน'},
          {src:M+'chat-bot-class-schedule/captured/reports-accuracy.webp',cls:'B',cap:'หน้ารายงานคุณภาพคำตอบ (ทดสอบด้วยคำถามเดียว)'}]},
  {no:'P-06',title:'Thai-Aus CheckPoint',sub:'ออกแบบแอปเช็กชื่อเข้าร่วมกิจกรรมด้วย QR และ NFC',status:'แนวคิด',kind:'s-plan',type:'ออกแบบ UX/UI',
   summary:'ออกแบบแอปเช็กชื่อเข้าร่วมกิจกรรมของวิทยาลัย ตั้งแต่ sitemap และ user flow ไปจนถึง wireframe แต่ละหน้า',
   problem:'การเช็กชื่อเข้าร่วมกิจกรรมของวิทยาลัยด้วยกระดาษใช้เวลานาน และตรวจสอบย้อนหลังได้ยาก',
   did:['วาง sitemap และ user flow ของแอป','ออกแบบ wireframe หน้าเข้าสู่ระบบ หน้าหลัก และหน้ารายละเอียดกิจกรรม','ให้เลือกเช็กชื่อได้ 2 แบบ: สแกน QR Code หรือแตะ NFC'],
   tech:['Figma','Wireframe','User Flow','QR Code','NFC'],
   note:'งานออกแบบเท่านั้น ยังไม่ได้พัฒนาเป็นแอป',
   media:g([['figma-board-overview-all-screens','บอร์ด Figma รวมทุกหน้าจอ'],['sitemap-structure','Sitemap'],['user-flow','User flow'],['wireframe-page1-login','Wireframe หน้า 1: เข้าสู่ระบบ'],['wireframe-page2-home-dashboard','Wireframe หน้า 2: หน้าหลัก'],['wireframe-page3-detail-checkin','Wireframe หน้า 3: รายละเอียดและเช็กชื่อ']],'_other-portfolio-items/thai-aus-checkpoint/','C')},
  {no:'P-07',size:'wide',title:'Milk Mood Café',sub:'วิดีโอและภาพโฆษณาด้วย AI สำหรับร้านเครื่องดื่ม',status:'เสร็จแล้ว',kind:'s-live',type:'สื่อโฆษณา · Generative AI',
   summary:'ทำวิดีโอโฆษณาแนวตั้งและภาพโปรโมชันชาผลไม้ให้ร้าน Milk Mood Café ด้วย AI ตั้งแต่สตอรีบอร์ดจนได้งานจริง',
   problem:'ร้านเครื่องดื่มต้องการสื่อโปรโมชันสำหรับโพสต์ออนไลน์หลายรูปแบบ ทั้งวิดีโอ โพสต์ปกติ และสตอรี่',
   did:['วางสตอรีบอร์ด 5 เฟรม กำหนดชนิดช็อตและความยาวแต่ละช็อต','ใช้ AI สร้างภาพและวิดีโอแนวตั้งความยาวประมาณ 19 วินาที','จัดวางข้อความโปรโมชัน "ลด 20% เหลือ 28 บาท" ให้อ่านง่าย','ทำภาพนิ่ง 2 ขนาด: แนวนอนสำหรับโพสต์ และแนวตั้งสำหรับสตอรี่'],
   tech:['Generative AI','Video','Storyboard','Graphic Layout'],
   video:M+'milkmood-video.mp4',poster:M+'milkmood-poster.jpg',
   media:[{src:M+'milkmood-cover.jpg',cls:'A',cap:'ภาพปกงาน Milk Mood Café'},
          {src:M+'milkmood-storyboard.jpg',cls:'A',cap:'สตอรีบอร์ด 5 เฟรมก่อนสร้างวิดีโอ'},
          {src:M+'milkmood-art.jpg',cls:'A',cap:'ภาพประกอบเครื่องดื่มที่สร้างด้วย AI'},
          {src:M+'milkmood-poster.jpg',cls:'A',cap:'เฟรมจากวิดีโอโฆษณา'},
          {src:M+'milkmood-wide.webp',cls:'A',cap:'โปรโมชันแนวนอน สำหรับโพสต์'},
          {src:M+'milkmood-story.webp',cls:'A',cap:'โปรโมชันแนวตั้ง สำหรับสตอรี่'}]}
];
var CLS={A:'ภาพหน้าจอเดิม',B:'ภาพจากระบบจริง',C:'ภาพประกอบ / ภาพออกแบบ'};

var ACT=[];

var SETS={
  me:[{src:'media/profile.jpg',cap:'ศุภกฤต ก้องฐิติเดช'},
    {src:'media/vec-speak-1.jpg',cap:'ระหว่างปฏิบัติหน้าที่ประธานชมรมวิชาชีพ IT · อวท.'},
    {src:'media/award-depa-reg-stage.jpg',cap:'ขึ้นรับรางวัลรองชนะเลิศอันดับ 1 Regional Coding & AI Competition'},
    {src:'media/vec-speak-2.jpg',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},
    {src:'media/award-depa-reg-team.jpg',cap:'กับทีมระหว่างแข่งขันระดับภาคตะวันออก'},
    {src:'media/intern-2.jpg',cap:'ระหว่างฝึกงานด้าน IT · เทศบาลตำบลเขตรอุดมศักดิ์'},
    {src:'media/award-depa-nat-booth.jpg',cap:'กับทีมในการแข่งขันระดับประเทศ'},
    {src:'media/award-honorable-mention.webp',cap:'ขึ้นรับรางวัล Honorable Mention ประเภทอาชีวศึกษา · Coding Thailand 2025'},
    {src:'media/vec-duty-4.webp',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},
    {src:'media/vec-duty-6.webp',cap:'ร่วมพิธีของวิทยาลัย'},
    {src:'media/vec-speak-3.jpg',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},
    {src:'media/intern-1.jpg',cap:'ระหว่างฝึกงานด้าน IT'}],
  depaReg:[{logo:'media/logos/coding-thailand.webp',cap:'Coding Thailand 2025: AI-Driven Future · Regional Coding & AI Competition ภาคตะวันออก'},{logo:'media/logos/mdes-depa.webp',cap:'จัดโดยสำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa) กระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม'},{src:'media/award-depa-reg-cert.jpg',cap:'ประกาศนียบัตร: รองชนะเลิศอันดับ 1 ระดับอาชีวศึกษา Regional Coding & AI Competition (ภาคตะวันออก) 10 ก.ย. 2568'},
    {src:'media/award-depa-reg-stage.jpg',cap:'ขึ้นรับรางวัลระดับอาชีวศึกษา'},
    {src:'media/award-depa-reg-team.jpg',cap:'ทีมระหว่างการแข่งขันระดับภาค'},
    {src:'media/award-depa-reg-list.jpg',cap:'ประกาศผลระดับภาคตะวันออก แยกตามระดับการศึกษา'},
    {src:'media/award-depa-reg-shortlist.webp',cap:'ประกาศรายชื่อทีมเข้ารอบ ระดับอาชีวศึกษา ภาคตะวันออก'}],
  depaNat:[{logo:'media/logos/coding-thailand.webp',cap:'Coding Thailand 2025: AI-Driven Future · National Coding & AI Competition'},{logo:'media/logos/depa.webp',cap:'จัดโดยสำนักงานส่งเสริมเศรษฐกิจดิจิทัล (depa)'},{src:'media/award-depa-nat-cert.jpg',cap:'ประกาศนียบัตร: เข้าร่วมแข่งขันระดับประเทศ National Coding & AI Competition 5 ต.ค. 2568'},
    {src:'media/award-depa-nat-booth.jpg',cap:'ทีมในการแข่งขันระดับประเทศ'},
    {src:'media/award-depa-nat-list.jpg',cap:'ประกาศรายชื่อทีมที่ผ่านเข้ารอบระดับประเทศ'}],
  arvr:[{logo:'media/logos/kmutnb-ited.webp',cap:'2nd ITED Media Academy Contest 2025 · สำนักพัฒนาเทคนิคศึกษา มจพ.'},{src:'media/award-arvr-cert.jpg',cap:'เกียรติบัตรรางวัลเหรียญเงิน ทีม Texas007 ประเภทสื่อ AR/VR 4 ก.ค. 2568'},
    {src:'media/award-arvr-trophy.jpg',cap:'โล่รางวัลรองชนะเลิศอันดับ 1 การแข่งขันประเภทสื่อ AR/VR'},
    {src:'media/award-arvr-certs.jpg',cap:'เกียรติบัตรของสมาชิกทีม'},
    {src:'media/award-arvr-cert-photo.webp',cap:'เกียรติบัตรการแข่งขันประเภทสื่อ AR/VR'},
    {src:'media/award-arvr-list.jpg',cap:'ประกาศรายชื่อทีมประเภทสื่อ AR/VR'},
    {src:'media/award-arvr-poster.jpg',cap:'โปสเตอร์การแข่งขัน ITED Media Academy Contest'}],
  speak:[{logo:'media/logos/vec.webp',cap:'องค์การนักวิชาชีพในอนาคตแห่งประเทศไทย (อวท.)'},{src:'media/vec-duty-4.webp',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},{src:'media/vec-duty-5.webp',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},{src:'media/vec-duty-6.webp',cap:'ร่วมพิธีของวิทยาลัยในนามตัวแทนนักศึกษา'},{src:'media/vec-speak-1.jpg',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},{src:'media/vec-speak-2.jpg',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'},{src:'media/vec-speak-3.jpg',cap:'ระหว่างปฏิบัติหน้าที่ อวท.'}],
  intern:[{src:'media/intern-1.jpg',cap:'ระหว่างฝึกงานด้าน IT · เทศบาลตำบลเขตรอุดมศักดิ์'},{src:'media/intern-2.jpg',cap:'ระหว่างฝึกงานด้าน IT · เทศบาลตำบลเขตรอุดมศักดิ์'}]
};
