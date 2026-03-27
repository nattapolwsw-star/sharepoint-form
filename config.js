// ============================================================
//  CONFIGURATION - แก้ไขค่าต่อไปนี้ก่อนใช้งาน
// ============================================================

const CONFIG = {
  // --- Azure AD App Registration ---
  // สร้าง App Registration ที่ https://portal.azure.com
  // > Azure Active Directory > App registrations > New registration
  CLIENT_ID: "YOUR_CLIENT_ID_HERE",          // Application (client) ID
  TENANT_ID: "YOUR_TENANT_ID_HERE",          // Directory (tenant) ID

  // --- SharePoint ---
  SHAREPOINT_SITE_URL: "https://caathai.sharepoint.com/sites/ANS",
  LIST_NAME: "ANSRBOS",

  // --- Scopes ที่ต้องการ (ไม่ต้องแก้) ---
  SCOPES: ["https://caathai.sharepoint.com/.default"],

  // --- ชื่อ Internal Field ใน SharePoint List ---
  // ⚠️ ตรวจสอบชื่อ Internal Name จริงได้ที่:
  //    https://caathai.sharepoint.com/sites/ANS/_api/web/lists/getbytitle('ANSRBOS')/fields?$filter=Hidden eq false&$select=Title,InternalName
  FIELD_NAMES: {
    unitsCode:                 "Title",                          // หรือ UnitsCode
    safetyPerformanceLevel:    "SafetyPerformanceLevel",         // ตรวจสอบ InternalName จริง
    operationalComplexityLevel:"OperationalComplexityLevel",     // ตรวจสอบ InternalName จริง
    ratingRiskAssessment:      "RatingRiskAssessment",           // ตรวจสอบ InternalName จริง
    province:                  "Province",                       // ตรวจสอบ InternalName จริง
    updateDate:                "UpdateDate",                     // ตรวจสอบ InternalName จริง
    areasOfAudit:              "AreasofAudit",                   // ตรวจสอบ InternalName จริง
  },

  // --- List Item Entity Type (ชื่อ List ไม่มีช่องว่าง + ListItem) ---
  LIST_ITEM_ENTITY_TYPE: "SP.Data.ANSRBOSListItem",

  // --- Redirect URI ---
  // ใช้ค่าอัตโนมัติตาม URL ปัจจุบัน (รองรับทั้ง GitHub Pages และ local test)
  // GitHub Pages URL ตัวอย่าง: https://YOUR_USERNAME.github.io/sharepoint-form/
  REDIRECT_URI: window.location.origin + window.location.pathname,
};
