# Portfolio · ศุภกฤต ก้องฐิติเดช

เว็บไซต์ Portfolio ของนักศึกษา ปวส. เทคโนโลยีสารสนเทศ วิทยาลัยเทคนิคสัตหีบ ออกแบบให้ดูเหมือนแบบงานวิศวกรรม (engineering drawing) พร้อมกรอบชื่อ (title block)

**เว็บไซต์: https://suphakrit-portfolio.vercel.app**

## ในเว็บมีอะไร

| ส่วน | เนื้อหา |
|---|---|
| 00 เกี่ยวกับผม | แนะนำตัว พร้อมแกลเลอรีภาพ |
| 01 ผลงาน | 7 โครงการ กดเปิดดูได้ทีละโครงการ แต่ละโครงการบอกปัญหา สิ่งที่ทำ เทคโนโลยี ข้อจำกัด และแผนต่อไป |
| 02 การแข่งขันและรางวัล | Coding Thailand 2025 (depa) และ ITED Media Academy Contest 2025 พร้อมเกียรติบัตร |
| 03 ภาวะผู้นำ | ประธานชมรมวิชาชีพเทคโนโลยีสารสนเทศ อวท. ปีการศึกษา 2569 |
| 04 ประสบการณ์และการศึกษา | ฝึกงานด้าน IT ที่เทศบาลตำบลเขตรอุดมศักดิ์ และประวัติการศึกษา |
| 05 ทักษะ | Hard skills 9 ด้าน และ Soft skills 6 ด้าน แต่ละด้านอ้างอิงจากผลงานจริง |

## ผลงาน

| # | โครงการ | สถานะ | เทคโนโลยีหลัก |
|---|---|---|---|
| P-01 | **ThaiGigaBike**: เว็บ E-commerce อะไหล่แต่ง CNC มอเตอร์ไซค์ | เผยแพร่แล้ว ([เว็บไซต์](https://thaigigabike.netlify.app)) | Next.js 14, Supabase, Custom Auth, Resend, Netlify |
| P-02 | **Shabu Mood**: ระบบร้านชาบูบุฟเฟต์ (QR สั่งอาหาร, หน้าพนักงาน, หน้าผู้จัดการ) | ต้นแบบ | React, Supabase, PostgreSQL (28 ตาราง, 32 functions, RLS 54 policies) |
| P-03 | **MindKeep**: ระบบความจำองค์กรด้วย AI แบบ on-premise สำหรับ SME | กำลังพัฒนา ([repo](https://github.com/Suphakritpan/MindKeep-LongDuem)) | Next.js 15, FastAPI, PostgreSQL + pgvector, Ollama, Docker Compose |
| P-04 | **ระบบคิวร้านหมากระทะ (aith)**: รับคิวและจองโต๊ะให้ร้านของเพื่อน | ต้นแบบ | TypeScript, Supabase, PL/pgSQL |
| P-05 | **แชตบอตตารางสอนอาจารย์**: ดูตารางสอนรายสัปดาห์และถามผ่านแชท | กำลังพัฒนา | Chatbot (SQL), JSON import, Docker |
| P-06 | **Thai-Aus CheckPoint**: ออกแบบแอปเช็กชื่อกิจกรรมด้วย QR และ NFC | แนวคิด | Figma, Wireframe, User Flow |
| P-07 | **Milk Mood Café**: วิดีโอและภาพโฆษณาด้วย AI | เสร็จแล้ว | Generative AI, Storyboard, Graphic Layout |

รายละเอียด ภาพหน้าจอ และลิงก์ของแต่ละโครงการดูได้ในเว็บไซต์

## ที่มาของภาพ

ทุกภาพในเว็บมีป้ายบอกที่มา ผู้ดูจะได้แยกออกว่าภาพไหนมาจากระบบจริง

- **ภาพจากระบบจริง**: จับหน้าจอจากระบบที่รันอยู่จริง ถ้าใช้ข้อมูลตัวอย่างจะเขียนกำกับไว้
- **ภาพหน้าจอเดิม**: ภาพหน้าจอหรือไฟล์ที่มีอยู่แล้วก่อนทำเว็บนี้
- **ภาพประกอบ / ภาพออกแบบ**: แผนภาพ wireframe หรือภาพที่สร้างด้วย AI ไม่ใช่หน้าจอของระบบ

ไม่มีหน้าจอ error หรือฟีเจอร์ที่ยังใช้ไม่ได้ ถูกนำมาแสดงเป็นฟีเจอร์ที่ใช้งานได้ รายการภาพทั้งหมดและเหตุผลที่คัดออกอยู่ใน [docs/screenshots-index.md](docs/screenshots-index.md)

## โครงสร้าง

```
frontend/
  index.html                 โครงหน้าเว็บ (markup ของทุกส่วน) และ SVG icon sprite
  css/
    base.css                 design tokens ธีมสว่าง/มืด, reset, องค์ประกอบพื้นฐาน, keyframes
    layout.css               กรอบแบบ, title block, แถบสารบัญ, sheet, footer, ลำดับ animation ตอนโหลด
    sections.css             เกี่ยวกับผม, การ์ดผลงาน (bento), รางวัล, ภาวะผู้นำ, ประสบการณ์, ทักษะ
    components.css           แกลเลอรี, หน้ารายละเอียดผลงาน, lightbox, FAB, toast
  js/
    main.js                  จุดเริ่ม: ผูกข้อมูลเข้ากับ component (ต้องโหลดเป็นไฟล์สุดท้าย)
    lib/dom.js               helper ที่ใช้ร่วมกัน (escape, icon, คัดลอกข้อความ, ค่าคงที่)
    data/projects.js         เนื้อหาโครงการ: ปัญหา สิ่งที่ทำ เทคโนโลยี ภาพ ลิงก์
    data/media-sets.js       ชุดภาพของแกลเลอรีแต่ละส่วน
    data/illustrations.js    ภาพประกอบ SVG (แผนภาพสถาปัตยกรรม, flow)
    components/
      gallery.js             แกลเลอรีเลื่อนอัตโนมัติ และภาพปกการ์ดที่เปลี่ยนเอง
      project-cards.js       การ์ดผลงานใน bento grid
      project-detail.js      dialog รายละเอียดผลงาน
      lightbox.js            ดูภาพขนาดเต็ม
      contact.js             ปุ่มคัดลอกช่องทางติดต่อ และ FAB
      page-chrome.js         ไฮไลต์สารบัญตามส่วนที่เห็น, ปุ่มกลับขึ้นบน, ตัวบอกพิกัดเคอร์เซอร์
  media/                     ภาพ (WebP/JPG), โลโก้ และวิดีโอ
docs/
  screenshots-index.md       รายการภาพ ที่มา และสถานะการใช้งาน
  SKILLS.md                  หลักฐานทักษะจากแต่ละ repo
```

**ลำดับการโหลด:** ไฟล์ใน `js/` เป็น script ธรรมดาที่แชร์ตัวแปรร่วมกัน จึงต้องเรียงใน `index.html` ให้ dom → data → components → main ถ้าเพิ่มไฟล์ใหม่ให้ใส่ `<script defer>` ตามลำดับนั้น

**แก้เนื้อหา:** แก้ใน `js/data/` อย่างเดียว ไม่ต้องแตะ component เช่น เพิ่มโครงการใหม่ให้เพิ่ม object ใน `P` ที่ `projects.js` แล้วการ์ด หน้ารายละเอียด และลิงก์ `#p08` จะสร้างให้เอง

เป็นเว็บ static ล้วน ใช้ script ธรรมดา โหลดตามลำดับใน `index.html` ไม่มี build step และไม่มี dependency จุดเด่นทางเทคนิค:

- **แกลเลอรีภาพ:** เลื่อนเองทุก 5 วินาที หยุดเมื่อวางเมาส์ เลื่อนออกนอกจอ หรือสลับแท็บ ใช้ได้ทั้งปุ่ม คีย์บอร์ด และปัดนิ้ว มีโหมดเต็มจอ
- **ธีมสว่าง/มืด:** ธีมสว่างเป็นกระดาษเขียนแบบ ธีมมืดเป็น blueprint เปลี่ยนตามการตั้งค่าของเครื่อง
- **รองรับทุกจอ:** ใช้ได้ทั้งมือถือและจอคอม เคารพการตั้งค่า `prefers-reduced-motion`
- **ไอคอน:** เป็น SVG sprite ที่อยู่ในหน้าเว็บ ไม่ใช้ emoji
- **ลิงก์ตรงไปยังโครงการ:** เช่น `#p01` จะเปิดโครงการ P-01 ทันที

## เปิดในเครื่อง

```bash
git clone https://github.com/Suphakritpan/Portfolio.git
cd Portfolio/frontend
python -m http.server 8000   # แล้วเปิด http://localhost:8000
```

ดับเบิลคลิกเปิด `frontend/index.html` ก็ใช้ได้เช่นกัน

## Deploy

เว็บอยู่บน Vercel และตั้ง Root Directory ไว้ที่ `frontend` เมื่อ push ขึ้น branch `main` Vercel จะ deploy ให้อัตโนมัติ

## ติดต่อ

- อีเมล: 69319010031@tatc.ac.th
- GitHub: [@Suphakritpan](https://github.com/Suphakritpan)
