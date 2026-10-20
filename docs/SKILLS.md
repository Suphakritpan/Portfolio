# ทักษะที่แสดงได้ — แยกจากเทคนิคที่ใช้สร้างผลงานจริง

จัดทำ 2026-10-20 จากการอ่านโค้ด เอกสาร ประวัติ git และการรันระบบของทั้ง 6 repository (ตัวเลขนับด้วยการ grep/นับบรรทัดแบบง่าย ใช้เป็นขนาดโดยประมาณ)
ใช้คู่กับ `docs/REPORT.md` (ภาพหน้าจอ) และ `docs/screenshots-index.md`

**ระดับหลักฐาน** (ใช้กำกับทุกทักษะ เพื่อไม่อ้างเกินจริง)
- ✅ **ยืนยัน** — อยู่ในโค้ด และผมเห็นระบบทำงานจริง (เว็บที่ deploy หรือรันเอง)
- 🟡 **มีในโค้ด/เอกสาร** — ยังไม่ได้รันหรือทดสอบการทำงาน
- 🔵 **ออกแบบ/แนวคิด** — เอกสาร, wireframe, โน้ตบุ๊ก ยังไม่เห็นผลที่ใช้งานได้

**ความเป็นเจ้าของผลงาน (ตรวจจาก git)**

| Repo | commit | ช่วงเวลา | บัญชีที่ commit |
|---|---|---|---|
| LONGRIAN-AI-Workspace | 163 | 2026-05-19 → 07-04 | `Suphakritpan` ทั้งหมด |
| Giga-Bike- | 54 | 2026-06-03 → 06-14 | `Suphakritpan` ทั้งหมด |
| MindKeep-LongDuem | 4 | 2026-06-24 → 06-28 | `Suphakritpan` ทั้งหมด |
| Suphakrit (Shabu Mood) | 44 | 2026-08-25 → 09-23 | `Admin` 39 · `jarnballproject-ops` 5 |
| aith | 10 | 2026-08-31 → 09-15 | `jarnballproject-ops` 7 · ไม่มีชื่อผู้เขียน 3 |
| chat-bot-class-schedule | 4 | 2026-09-15 → 09-22 | `Suphakritpan` 3 · `jarnballproject-ops` 1 |

- ใน `็Handoff.md` เขียนว่า MindKeep เป็นงานทีม Ronin007 แต่ใน repo ทุก commit มาจากบัญชีของคุณ — **ยืนยันบทบาทของคุณ** ให้ชัดก่อนเขียนว่า "ผมทำส่วนไหน"
- `Admin` ใน Shabu Mood เป็นชื่อ git ของเครื่อง (ไม่ใช่ชื่อบัญชี) ยืนยันกับตัวเองว่าเป็นงานของคุณ
- aith เป็นระบบของร้านเพื่อน คุณเป็นคนทำ repo

---

## 1) Front-end: React / Next.js / TypeScript
| เทคนิคที่ทำจริง | หลักฐาน | ระดับ |
|---|---|---|
| Next.js 14 App Router + TypeScript + Tailwind — 37 หน้า, 61 API route (~39K บรรทัด) | Giga-Bike `thaigigabike/src/app` | ✅ เว็บ live |
| UI ภายในองค์กรขนาดใหญ่: Next.js 14 (~22K บรรทัด) ใช้ TanStack Query, TipTap (ตัวแก้ไขเอกสาร rich-text), AG Grid (ตารางข้อมูล), react-dropzone (อัปโหลดไฟล์), GSAP | LONGRIAN `apps/frontend` | ✅ รันเอง 24 หน้า |
| React 19 + Vite + Redux Toolkit + React Router 7 — คอนโซลแยก 3 บทบาท (ลูกค้า/พนักงาน/ผู้จัดการ), อัปเดตแบบ realtime (6 ไฟล์ใช้ Supabase realtime), สแกน QR (jsQR) และสร้าง QR (qrcode) (~7.8K บรรทัด) | Suphakrit `frontend/src` | ✅ เว็บ live |
| React 19 + TypeScript + Vite + Tailwind 4 — หน้าลูกค้า (รับคิว, จองโต๊ะ, หน้าโต๊ะ), จอ TV เรียกคิว (~8.5K บรรทัด) | aith `frontend/src` | ✅ ภาพหน้าลูกค้า · 🟡 หน้า staff/admin |
| React + TypeScript ไม่พึ่ง UI library: เลย์เอาต์ 3 แผงปรับขนาดได้, ตารางสอนแบบกริดวัน×คาบ, พิมพ์ตารางได้ | chat-bot `frontend/src/App.tsx` | ✅ รันเอง |
| รองรับ 2 ภาษา TH/EN (Giga-Bike, LONGRIAN มีตัวสลับภาษา), ธีมสว่าง/มืด (Giga-Bike มีปุ่มสลับ — แต่หลังเปลี่ยนหน้าธีมมืดใช้ไม่ครบทุกหน้า), หน้าลูกค้า Shabu Mood ออกแบบสำหรับมือถือ | Giga-Bike, LONGRIAN, Shabu Mood | ✅ |

## 2) UX/UI และ Design System
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| Design tokens + UI kit + checklist สร้างหน้าใหม่ | Giga-Bike `docs/FRONTEND.md` | 🟡 |
| "Coconut Design System": กำหนดสีแบรนด์เป็น token เดียว, สร้างคอมโพเนนต์กลาง (PageHeader, KpiCard) แทนโค้ดซ้ำ, ปุ่มที่ยังไม่มี backend แสดงเป็น "เร็วๆ นี้" แบบ disabled แทนปุ่มหลอก | LONGRIAN `PROJECT_STATUS.md` | ✅ เห็นในภาพ |
| Style guide เน้นการเข้าถึง: แยกคาบปฏิบัติ/ทฤษฎีด้วยทั้งสีและตัวอักษร (ป./ท.) ให้คนตาบอดสีอ่านได้ | chat-bot `docs/style-guide.md` | ✅ เห็นในหน้า |
| จัดวางข้อมูลหนาแน่นสำหรับงานจริง: ผังโต๊ะพร้อมแถบเวลา, จอครัวแยกสถานี, จอคิวหน้าร้าน | Shabu Mood | ✅ |
| ออกแบบแอป Thai-Aus CheckPoint: sitemap, user flow, wireframe 3 หน้า, ภาพรวม hi-fi ใน Figma (เช็กชื่อกิจกรรมด้วย QR/NFC) | `_other-portfolio-items/thai-aus-checkpoint/` | 🔵 ออกแบบอย่างเดียว |
| ฟอนต์และการเรียงตัวอักษรไทย (IBM Plex Sans Thai, Chakra Petch, Anuphan, Trirong) | portfolio, Shabu Mood | ✅ |

## 3) Back-end และ API
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| FastAPI แบบ async: 28 router, 33 service, 23 model (~16.5K บรรทัด), Pydantic schema, JWT (python-jose) + bcrypt, middleware (ยืนยันตัวตน, gateway, บันทึกกิจกรรม), รหัส error + ข้อความหลายภาษา | LONGRIAN `apps/backend/app` | ✅ รันเอง |
| Spring Boot 4 / Java 21: controller 6 ตัว, JPA, validation, actuator health check, สิทธิ์ตามบทบาท (`@RequireRole`), error แบบ RFC 7807 (`problem+json`), นำเข้า CSV (~2.9K บรรทัด) | chat-bot `backend/` | ✅ รันเอง |
| API route ของ Next.js 61 ตัว, เอกสาร API พร้อมรหัส error | Giga-Bike `docs/API.md` | ✅ |
| โครง modular monolith: auth, users, departments, permissions, documents, files, jobs, memory, ai (~1.8K บรรทัด) | MindKeep-LongDuem `backend/app/modules` | 🟡 โค้ดอย่างเดียว (ยังไม่มี UI) |
| Supabase Edge Functions (Deno/TypeScript ~1.3K บรรทัด, 7 กลุ่ม) | aith `supabase/functions` | 🟡 README บอกว่ายังไม่ได้ deploy |

## 4) ออกแบบฐานข้อมูล PostgreSQL
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| ส่งมอบกฎธุรกิจที่ฐานข้อมูล: 17 migration, ~32 ตาราง, ~64 function (47 แบบ `security definer`), ~20 trigger, ~66 RLS policy, view, seed; กฎ BR-01–BR-10, state machine ของ Visit, เครื่องคิดเงิน, soft delete (`REVOKE DELETE`) + `audit_log` | aith `supabase/migrations` | 🟡 อ่านโครงสร้าง ไม่ได้รัน |
| 22 migration, 28 ตาราง, 17 enum, ~52 function, ~26 trigger, ~65 RLS policy, seed, `verify.sql` และชุดทดสอบฐานข้อมูล (rules, queue, concurrency, scenarios, migrate) | Shabu Mood `supabase/` | 🟡 (ตัวเลขใน `็Handoff.md` เขียน 32 function/54 policy ต่างจากที่นับได้ — ตรวจให้ตรงก่อนเผยแพร่) |
| SQLAlchemy 2 แบบ async 23 model + Alembic 17 เวอร์ชัน, คอลัมน์เวกเตอร์ `pgvector`, seed แบบรันซ้ำได้ (idempotent) | LONGRIAN | ✅ รันเอง (seed ซ้ำได้) |
| Flyway V1–V6 พร้อม view `v_teacher_schedule`, Postgres 16 | chat-bot | ✅ รันเอง |
| จำกัดอัตราการล็อกอินเก็บใน Postgres (ตาราง `login_attempts`), migration แบบ idempotent 2 ไฟล์ | Giga-Bike ADR-004/005 | 🟡 |

## 5) ความปลอดภัยและการควบคุมสิทธิ์
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| บังคับสิทธิ์ที่ฐานข้อมูล (RLS + `security definer` + REVOKE) ไม่ใช่แค่ซ่อนปุ่มใน UI | aith, Shabu Mood | 🟡 |
| RBAC รายแผนก, ดึงข้อมูลเข้า RAG โดยกรองตามสิทธิ์, ลบ credential ออกก่อนบันทึกเป็น Work Memory, audit log แก้ย้อนหลังไม่ได้ | LONGRIAN `permission_service`, docs | ✅ เห็น audit log และหน้าผู้ใช้ · 🟡 ส่วนที่เหลือ |
| Custom auth (bcrypt), ยืนยันอีเมลก่อนผูกข้อมูล, ใช้ service-role เฉพาะฝั่ง API และกรองข้อมูลต่อผู้ใช้ — พร้อมบันทึกเหตุผลเป็น ADR 5 ข้อ | Giga-Bike `docs/DECISIONS.md` | 🟡 |
| เทสความปลอดภัย: แยกข้อมูลข้ามผู้ใช้ (cross-user), ความปลอดภัย API, สิทธิ์ admin | Giga-Bike `tests/*security*.spec.ts` | 🟡 มีเทสแต่ไม่ได้รัน |
| บทบาท `student/staff/teacher` ด้วย token + 401/403 แบบ `problem+json` | chat-bot README | ✅ |

## 6) AI / LLM
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| **ป้องกันโมเดลตอบผิด (AnswerVerifier)**: ตรวจเวลา รหัสวิชา และกลุ่มเรียนในคำตอบของโมเดลเทียบกับฐานข้อมูลจริงก่อนส่ง ถ้าไม่ผ่านใช้คำตอบจาก SQL แทน; ทุกคำตอบแสดงที่มาและเวลาตอบ; หน้ารายงานวัด p95, อัตราตอบไม่ได้, อัตราถามกลับ | chat-bot `AnswerVerifier.java`, หน้าแชท | ✅ เส้นทาง SQL ทำงานจริง · 🟡 เส้นทางโมเดลไม่ได้รัน |
| **ตัดสินใจจากการวัด**: ถอด OCR local ออกเพราะวัดแล้วช้า 19 นาที/หน้า (เกินเป้า NFR 7 เท่า) และอ่านกริดตารางไม่แม่น แล้วเปลี่ยนเป็นนำเข้าข้อมูลจาก JSON | chat-bot `docker-compose.yml` (คอมเมนต์) | ✅ |
| AI ที่ทำงานในองค์กร (on-premise): Ollama, ไม่ส่งข้อมูลออกนอกเครือข่าย | LONGRIAN | 🟡 รันไม่ได้ในเครื่องนี้ (ไม่มีโมเดล qwen2.5) |
| RAG: ChromaDB + pgvector, embeddings, LangChain, retrieval ที่กรองตามสิทธิ์และอ้างแหล่งที่มาได้, ตัวเปิด/ปิดด้วย feature flag; agent แยกแผนก (การเงิน/กฎหมาย/การตลาด) | LONGRIAN `services/rag`, `agents/` | 🟡 |
| OCR เอกสาร/ใบเสร็จ: Tesseract (pytesseract), OpenCV, pdfplumber, PyMuPDF, ค่า confidence รายคำ, หน้า review → confirm, แก้วันที่ DD/MM, กู้ยอดรวมที่หลุด | LONGRIAN (commit ล่าสุด), หน้า Documents & OCR | 🟡 หน้าและ OCR job มีจริง ความแม่นยำยังไม่ได้ตรวจ |
| เตรียมข้อมูลและโน้ตบุ๊กฝึกโมเดลแบบ LoRA (Qwen2.5 + PEFT/TRL/bitsandbytes, r=16, 3 epoch) จากชุดฝึก 1,668 / ตรวจสอบ 185 ตัวอย่างที่สร้างจากตารางจริง | chat-bot `dataset/*.jsonl`, `notebook*.ipynb` | 🔵 ยังไม่พบโมเดลที่ฝึกเสร็จ |
| เรียกโมเดลผ่าน API มาตรฐาน OpenAI-compatible (llama.cpp server) ตั้งค่าด้วย env, ปิดโมเดลได้และระบบยังตอบจาก SQL | chat-bot `docker-compose.yml` | ✅ ปิดโมเดลแล้วรัน · 🟡 เปิดโมเดล |

## 7) Data engineering และ Scripting (Python / Node)
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| ย้ายเว็บเก่าเป็นระบบใหม่: ดูดเว็บด้วย HTTrack → แยกบล็อก → แมปรุ่นรถ → สร้างแค็ตตาล็อก 369 รายการ (JSON → TypeScript + SQL seed) → ตรวจก่อน/หลังด้วยสคริปต์ audit | Giga-Bike `scripts/*.mjs` | ✅ เห็น 369 รายการบนเว็บ |
| นำเข้าตารางสอนจากไฟล์ JSON 3 แผนก เข้า Postgres ตอนสตาร์ท (นำเข้าซ้ำได้) | chat-bot `ScheduleImportService` | ✅ รันเอง |
| จัดระเบียบรายชื่อนักกีฬา 17 ชีตด้วย Python/openpyxl ตรวจกับรายชื่อหลัก สร้างชีตสรุปและรายชื่อที่ยังไม่ลง | ใน `portfolio.html` | — ไม่ได้อยู่ใน 6 repo ที่ตรวจ ยืนยันเอง |
| สคริปต์ seed ข้อมูลธุรกิจจำลอง (ลองดื่ม) แบบรันซ้ำได้, สร้างคำอธิบายสินค้า/แผนผังเว็บด้วย Python | LONGRIAN `longduem_seed.py`, Giga-Bike `sitemap_builder.py` | ✅ |

## 8) DevOps, Deploy และเครื่องมือ
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| Docker Compose หลายบริการ: healthcheck, จำกัดหน่วยความจำ, profile เลือกเปิด, volume | chat-bot, LONGRIAN (pgvector, Chroma, Ollama, Stirling-PDF) | ✅ รันทั้งสองระบบ |
| Deploy เว็บจริง: Netlify (ตั้งค่า build และข้ามการสแกน secret สำหรับตัวแปร public), Vercel (SPA rewrite) | Giga-Bike `netlify.toml`, Shabu Mood `vercel.json` | ✅ เว็บ live ทั้งคู่ |
| จัดการ config ด้วย env/feature flag, Maven wrapper, npm scripts, Git/GitHub (branch แยกแก้ปัญหา, merge) | ทุก repo | ✅ |
| ใช้ Playwright ทั้งทดสอบและจับภาพหน้าจอเว็บอัตโนมัติ | Giga-Bike, Shabu Mood, งานรอบนี้ | ✅ |

## 9) การทดสอบและ QA
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| pytest ~336 ฟังก์ชันใน 33 ไฟล์ (การเงิน, สิทธิ์, RAG ฯลฯ) | LONGRIAN `apps/backend/tests` | 🟡 ไม่ได้รัน |
| Playwright E2E 9 ชุด: ตะกร้า/ชำระเงิน, สินค้า, SEO, ความปลอดภัย | Giga-Bike `tests/` | 🟡 |
| ทดสอบฐานข้อมูลโดยตรง (กฎธุรกิจ, concurrency, คิว, สถานการณ์) + E2E 9 ชุดรวม realtime, scale, soak | Shabu Mood `supabase/tests`, `e2e/specs` | 🟡 |
| JUnit: AnswerVerifier, นำเข้าตาราง, JSON | chat-bot `backend/src/test` | 🟡 |
| เช็กลิสต์ smoke test, ทดสอบ regression/QA หน้าจอ | LONGRIAN `docs/smoke-checklist.md` | 🟡 |

## 10) วิเคราะห์และออกแบบระบบ + เอกสาร
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| เอกสาร System Design 12 หัวข้อ: กฎธุรกิจ, สถาปัตยกรรม, Context/DFD, Activity diagram, State machine, ER, Data dictionary, SQL, ตาราง API, เครื่องคิดเงิน, ADR, ขอบเขต | aith `Read/System Design.md` | ✅ มีเอกสาร |
| เขียนเอกสารแบบ docs-first ก่อนโค้ด: Requirements, System Spec, Scope, Architecture, Data Model, API Spec, Roadmap, ADR, Acceptance Criteria | MindKeep-LongDuem `docs/` | ✅ |
| ADR 5 ข้อ (ทำไมใช้ custom auth, ทำไมไม่ใช้ RLS รายผู้ใช้ ฯลฯ) + เอกสาร API + design tokens | Giga-Bike `docs/` | ✅ |
| รายงานโครงงานและคู่มือการใช้งาน (พร้อมภาพหน้าจอ 22 ภาพ) เป็นไฟล์ Word | Shabu Mood `docs/*.docx` | ✅ |
| แผนงานตาม NFR (ความเร็ว, หน่วยความจำ 8 GB) และวัดผลเทียบเป้า | chat-bot `docs/แผนงาน.md` | ✅ |
| ออกแบบระบบจัดตารางเรียนอัตโนมัติ: แคตตาล็อกข้อจำกัด 39 ข้อ (H01–H21 / S01–S18), CSP + Genetic Algorithm | เอกสาร spec "ระบบจัดตารางเรียน-ตารางสอนอัตโนมัติ" (ภาพที่คุณแคปไว้ใน OneDrive เมื่อ 2026-09-13) และ `portfolio.html` — **ไม่ได้อยู่ใน repo ใดที่ตรวจ** (ค้นใน chat-bot ไม่พบ) | 🔵 แนวคิด ยังไม่พบโค้ด ถ้าจะอ้าง ต้องหาไฟล์ต้นฉบับมายืนยัน |

## 11) การทำงานร่วมกับ AI (AI-assisted development)
| เทคนิค | หลักฐาน | ระดับ |
|---|---|---|
| ใช้ AI Coding Assistant อย่างเป็นระบบ: ไฟล์ `CLAUDE.md`/`MASTER_PROMPT.md` ใน repo, `PROJECT_STATUS.md`/`RELEASE_NOTES.md` ให้ AI เข้าใจสถานะ, ตรวจโค้ดว่าซับซ้อนเกินจำเป็น (ponytail/stop-slop review) | LONGRIAN, MindKeep-LongDuem | 🟡 |
| สร้าง knowledge graph ของโค้ดทั้ง repo (graphify) ไว้ให้ AI และคนไล่โครงสร้างระบบ | `graphify-out/` ใน Giga-Bike, LONGRIAN, MindKeep-LongDuem (และภาพ graph ของ aith) | ✅ |
| ทำงานแบบ "ซื่อสัตย์ต่อสถานะ": README/หน้าจอบอกชัดว่าอะไรทำแล้ว อะไรยัง (เช่น ปุ่ม "เร็วๆ นี้", คอมเมนต์เหตุผลที่ตัด OCR) | หลาย repo | ✅ |

## 12) โจทย์ที่แก้ได้ (ภาพรวมโดเมน)
ระบบคิวและโต๊ะร้านอาหาร/POS (2 ระบบ) · เว็บ E-commerce อะไหล่ · แพลตฟอร์มความรู้องค์กรสำหรับ SME พร้อมสิทธิ์รายแผนก · ตารางสอนและแชทถามตาราง · แอปเช็กชื่อกิจกรรม (ออกแบบ) · สื่อโฆษณาด้วย AI (Milk Mood Café) · จัดระเบียบข้อมูล Excel ด้วย Python

---

## ตาราง ทักษะ × โปรเจกต์ (● ใช้จริงและเห็นผล · ○ มีในโค้ด/เอกสาร)

| ทักษะ | Giga-Bike | LONGRIAN | MindKeep-LongDuem | Shabu Mood | aith | chat-bot |
|---|---|---|---|---|---|---|
| Front-end React/Next | ● | ● | ○ | ● | ○ | ● |
| UX/UI & Design system | ● | ● | | ● | ○ | ● |
| Back-end / API | ● | ● | ○ | ○ | ○ | ● |
| PostgreSQL / SQL design | ○ | ● | ○ | ○ | ○ | ● |
| Security / RBAC / RLS | ○ | ● | ○ | ○ | ○ | ● |
| AI / LLM / RAG / OCR | | ○ | ○ | | | ● |
| Data & scripting | ● | ● | | | | ● |
| Docker / Deploy | ● | ● | ○ | ● | | ● |
| Testing | ○ | ○ | ○ | ○ | | ○ |
| Analysis & documentation | ● | ● | ● | ● | ● | ● |

## ข้อความพร้อมใช้ในส่วน "ทักษะ" ของเว็บ (ภาษาไทย สั้น ตรงหลักฐาน)

1. **พัฒนาเว็บแอปครบวงจร** — React / Next.js / TypeScript ฝั่งหน้าบ้าน, FastAPI / Spring Boot / Next API ฝั่งหลังบ้าน, deploy ขึ้นเว็บจริง (Netlify, Vercel)
2. **ออกแบบฐานข้อมูล PostgreSQL** — schema, migration, trigger, view, Row Level Security และกฎธุรกิจที่บังคับที่ฐานข้อมูล (ระบบร้านอาหาร 2 ระบบ)
3. **สิทธิ์และความปลอดภัย** — RBAC รายแผนก, RLS, JWT/bcrypt, audit log, เขียนเทคนิคความปลอดภัยเป็น ADR
4. **AI ที่ทำงานในองค์กร** — Local LLM (Ollama), RAG (ChromaDB/pgvector), OCR, และกลไกตรวจคำตอบของโมเดลเทียบข้อมูลจริงก่อนตอบ
5. **จัดการและย้ายข้อมูล** — Python/Node ย้ายเว็บเก่า 369 รายการเข้าฐานข้อมูลใหม่, นำเข้า JSON/CSV, จัดระเบียบ Excel ด้วย openpyxl
6. **ออกแบบ UX/UI** — design token, ระบบสี/คอมโพเนนต์กลาง, รองรับการเข้าถึง (ตาบอดสี), wireframe และ user flow ใน Figma
7. **ทดสอบและส่งมอบ** — Playwright E2E, pytest, JUnit, Docker Compose, เอกสารระบบ (System Design, ADR, คู่มือ)
8. **ทำงานร่วมกับ AI Coding Assistant** — วางเอกสารและบริบทให้ AI ทำงานต่อได้, ตรวจโค้ดที่ซับซ้อนเกินจำเป็น

ทักษะเดิมที่คุณระบุไว้และยังไม่มีหลักฐานในโค้ดที่ผมตรวจ (ไม่ได้ตัดออก แค่ไม่ได้ยืนยัน): **MySQL, HTML/CSS ล้วน, Basic Networking, Troubleshooting** — มาจากประวัติฝึกงาน/การเรียน

## สิ่งที่ห้ามอ้างจนกว่าจะยืนยัน
- **OCR อ่านตารางสอนภาษาไทยได้** (chat-bot ถอด OCR ออกแล้ว) — ใช้ได้เฉพาะ "ทดลอง OCR แล้ววัดผล จึงตัดสินใจเปลี่ยนวิธี"
- **AI ค้นหา/ตอบจากเอกสารใน LONGRIAN ทำงานได้** — ยังไม่เห็นผล (ไม่มีโมเดลในเครื่อง)
- **ฝึกโมเดล LoRA สำเร็จ** — เห็นแค่โน้ตบุ๊กและชุดข้อมูล
- **ระบบจัดตารางอัตโนมัติ (CSP + Genetic Algorithm) ทำเสร็จ** — เป็นแนวคิด/เอกสารออกแบบ
- **MindKeep-LongDuem มีฟีเจอร์ใช้งานได้** — เป็น skeleton ที่มี backend บางส่วน ไม่มี UI
- **Edge Functions ของ aith ใช้งานจริง** — README บอกว่ายังไม่ได้ deploy
- **ผลทดสอบผ่านทั้งหมด** — ผมยังไม่ได้รันชุดทดสอบของ repo ใด ๆ
- **บทบาทในงานทีม** — ยืนยันก่อน (ดูตารางความเป็นเจ้าของด้านบน)

## เน้นอะไรสำหรับการสมัคร DTD (งานพัฒนาซอฟต์แวร์เพื่ออำนวยความสะดวกงาน office)
ลำดับที่ตรงกับงานมากที่สุด: **(3) สิทธิ์/อนุมัติ/audit log และเอกสารองค์กร (LONGRIAN)** → **(2) ฐานข้อมูลและกฎธุรกิจ** → **(5) จัดการข้อมูล Excel/CSV ด้วย Python** → **(1) เว็บแอปภายในที่ใช้งานจริง (Giga-Bike, Shabu Mood)** → **(7) เอกสารและการทดสอบ** ส่วน AI ให้เล่าเป็นเรื่อง "วัดผลแล้วเลือกวิธีที่เหมาะกับข้อจำกัด" มากกว่าโชว์ว่าใช้โมเดลอะไร
