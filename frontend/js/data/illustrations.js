/* Inline SVG illustrations (architecture diagrams, flows, wireframes) keyed by name; used when a project has no screenshot. */
const A=' marker-end="url(#ah)"';
const ILL={
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
