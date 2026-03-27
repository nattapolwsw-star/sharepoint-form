# ANS RBOS Data Entry Form
Web form บันทึกข้อมูลลง SharePoint List **ANSRBOS**
Host บน **GitHub Pages** (ฟรี) — เข้าได้ทุกที่ที่มี Internet

---

## ภาพรวมขั้นตอนทั้งหมด

```
[1] สร้าง GitHub repo + เปิด GitHub Pages  →  ได้ URL เช่น https://USERNAME.github.io/sharepoint-form/
[2] สร้าง Azure AD App Registration        →  ได้ CLIENT_ID + TENANT_ID
[3] แก้ config.js ใส่ค่าที่ได้
[4] ตรวจสอบ SharePoint Field Names
[5] Push ไฟล์ขึ้น GitHub
[6] เข้าใช้งานได้เลย
```

---

## ขั้นตอนที่ 1 — สร้าง GitHub Repo + เปิด GitHub Pages

1. ไปที่ [github.com](https://github.com) → **New repository**
2. ตั้งชื่อ: `sharepoint-form`
3. Visibility: **Public** (GitHub Pages ฟรีต้องเป็น Public)
4. กด **Create repository**
5. Push ไฟล์ขึ้น:
   ```bash
   cd /Users/nattapolwitsuwat/sharepoint-form
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/sharepoint-form.git
   git push -u origin main
   ```
6. ไปที่ repo → **Settings** → **Pages**
   - Source: **Deploy from a branch**
   - Branch: `main` / `/ (root)`
   - กด **Save**
7. รอ 1-2 นาที จะได้ URL: `https://YOUR_USERNAME.github.io/sharepoint-form/`
   → **คัดลอก URL นี้ไว้** ใช้ในขั้นตอนถัดไป

---

## ขั้นตอนที่ 2 — สร้าง Azure AD App Registration

1. ไปที่ [portal.azure.com](https://portal.azure.com) → **Azure Active Directory** → **App registrations** → **New registration**
2. กรอกข้อมูล:
   - **Name**: `ANS-RBOS-Form`
   - **Supported account types**: Accounts in this organizational directory only
   - **Redirect URI**: เลือก **Single-page application (SPA)**
     แล้วใส่ URL จากขั้นตอนที่ 1 เช่น `https://YOUR_USERNAME.github.io/sharepoint-form/`
3. กด **Register**
4. คัดลอก:
   - **Application (client) ID** → จะใส่ใน `config.js`
   - **Directory (tenant) ID** → จะใส่ใน `config.js`

### เพิ่ม API Permission

1. **API permissions** → **Add a permission**
2. เลือก **SharePoint** → **Delegated permissions**
3. เลือก `AllSites.Write`
4. กด **Add permissions**
5. กด **Grant admin consent for [องค์กร]** → **Yes**

---

## ขั้นตอนที่ 3 — แก้ไข config.js

```js
CLIENT_ID: "ใส่ Application (client) ID",
TENANT_ID: "ใส่ Directory (tenant) ID",
```

---

## ขั้นตอนที่ 4 — ตรวจสอบ SharePoint Internal Field Names

เปิด URL นี้ใน browser (ต้อง login Microsoft ก่อน):
```
https://caathai.sharepoint.com/sites/ANS/_api/web/lists/getbytitle('ANSRBOS')/fields?$filter=Hidden eq false&$select=Title,InternalName
```

ดูค่า `InternalName` ของแต่ละ field แล้วแก้ `FIELD_NAMES` ใน `config.js` ให้ตรง

---

## ขั้นตอนที่ 5 — Push ขึ้น GitHub (หลังแก้ config.js)

```bash
cd /Users/nattapolwitsuwat/sharepoint-form
git add config.js
git commit -m "Add Azure AD config"
git push
```

GitHub Pages จะ deploy ให้อัตโนมัติภายใน 1-2 นาที

---

## ขั้นตอนที่ 6 — เข้าใช้งาน

เปิด URL:
```
https://YOUR_USERNAME.github.io/sharepoint-form/
```

Login ด้วย Microsoft Account ขององค์กร (caathai) แล้วกรอกข้อมูลได้เลย

---

## แก้ไขและ Deploy ซ้ำ

เมื่อต้องการแก้ไข form แล้ว deploy ใหม่:
```bash
git add .
git commit -m "Update form"
git push
```

GitHub Pages จะ update ให้อัตโนมัติ

---

## โครงสร้างไฟล์

```
sharepoint-form/
├── index.html    ← หน้า form หลัก
├── config.js     ← ค่าตั้งต้น (แก้ก่อน deploy)
└── README.md     ← คู่มือนี้
```
