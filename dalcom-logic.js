/**
 * DALCOM PLATFORM - SHARED LOGIC
 * هذا الملف يحتوي على البيانات الأساسية ودوال التعامل مع LocalStorage
 * يجب استدعاؤه في كل صفحة من صفحات الموقع
 */

// --- 1. البيانات الافتراضية (تعمل فقط عند تشغيل الموقع لأول مرة) ---

const initialProperties = [
    {
        id: 1,
        name: "فندق الصفوة 286",
        distance: 1.2,
        owner: "ماجد النجار",
        license: "010025323",
        capacity: 680,
        rooms: 120,
        units: 64,
        floors: 12,
        match: 23,
        image: "https://images.unsplash.com/photo-1565514020176-db792f4b50c5?auto=format&fit=crop&q=80&w=600",
        images: [
            "https://images.unsplash.com/photo-1565514020176-db792f4b50c5?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"
        ],
        lat: 21.4225,
        lng: 39.8261
    },
    {
        id: 2,
        name: "برج الجوار 14267",
        distance: 0.4,
        owner: "علي راضي",
        license: "21518225984",
        capacity: 1520,
        rooms: 265,
        units: 120,
        floors: 22,
        match: 100,
        image: "https://images.unsplash.com/photo-1590089415225-401eb6b9861d?auto=format&fit=crop&q=80&w=600",
        images: [
            "https://images.unsplash.com/photo-1590089415225-401eb6b9861d?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=400"
        ],
        lat: 21.4245,
        lng: 39.8281
    },
    {
        id: 3,
        name: "الصفا 5531",
        distance: 3.2,
        owner: "ماجد النجار",
        license: "010025254",
        capacity: 1280,
        rooms: 320,
        units: 64,
        floors: 16,
        match: 77,
        image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=600",
        images: [
             "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
             "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=400",
             "https://images.unsplash.com/photo-1596191763784-90a6c221226c?auto=format&fit=crop&q=80&w=400"
        ],
        lat: 21.4195,
        lng: 39.8321
    },
    {
        id: 4,
        name: "فندق مكارم أجياد",
        distance: 0.8,
        owner: "يحيى بركات",
        license: "21518225900",
        capacity: 2000,
        rooms: 400,
        units: 150,
        floors: 25,
        match: 100,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=600",
        images: [
            "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=400"
        ],
        lat: 21.4205,
        lng: 39.8241
    },
    {
        id: 5,
        name: "الفكر 14263",
        distance: 0.4,
        owner: "ماجد النجار",
        license: "21518225911",
        capacity: 800,
        rooms: 150,
        units: 50,
        floors: 10,
        match: 100,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=600",
        images: [
             "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800",
             "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=400",
             "https://images.unsplash.com/photo-1596191763784-90a6c221226c?auto=format&fit=crop&q=80&w=400"
        ],
        lat: 21.4265,
        lng: 39.8301
    }
];

const initialContracts = [
    { id: 101, title: "عقد انتفاع لعقار الراشدية 3", party: "بعثة الحكومة الهندية", startDate: "السبت 12 ديسمبر 2025", endDate: "الاثنين 7 يناير 2026", amount: 100000, status: "pending" },
    { id: 102, title: "عقد انتفاع لعقار العزيزية 1", party: "بعثة الحكومة الهندية", startDate: "السبت 12 ديسمبر 2025", endDate: "الاثنين 7 يناير 2026", amount: 150000, status: "ended" },
    { id: 103, title: "عقد انتفاع لعقار المسفلة 5", party: "بعثة الحكومة الهندية", startDate: "السبت 12 ديسمبر 2025", endDate: "الاثنين 7 يناير 2026", amount: 120000, status: "rejected" },
    { id: 104, title: "عقد انتفاع لعقار الششة 2", party: "بعثة الحكومة الهندية", startDate: "السبت 12 ديسمبر 2025", endDate: "الاثنين 7 يناير 2026", amount: 180000, status: "active" },
    { id: 105, title: "عقد انتفاع لعقار أجياد 9", party: "بعثة الحكومة الهندية", startDate: "السبت 12 ديسمبر 2025", endDate: "الاثنين 7 يناير 2026", amount: 220000, status: "active" }
];

// --- 2. دوال التعامل مع التخزين (LocalStorage) ---

// تهيئة البيانات عند بدء التشغيل
function initApp() {
    if (!localStorage.getItem('dalcom_properties')) {
        localStorage.setItem('dalcom_properties', JSON.stringify(initialProperties));
        console.log("تم تهيئة بيانات العقارات");
    }
    if (!localStorage.getItem('dalcom_contracts')) {
        localStorage.setItem('dalcom_contracts', JSON.stringify(initialContracts));
        console.log("تم تهيئة بيانات العقود");
    }
}

// جلب البيانات
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
}

// حفظ البيانات
function saveData(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// --- 3. دوال مساعدة عامة ---

// الحصول على لون وحالة العقد
function getStatusBadge(status) {
    const styles = {
        'active': 'bg-green-100 text-green-600',
        'pending': 'bg-orange-100 text-orange-600',
        'rejected': 'bg-red-100 text-red-600',
        'ended': 'bg-indigo-100 text-indigo-600'
    };
    const labels = {
        'active': 'عقد فعال',
        'pending': 'عقد معلق',
        'rejected': 'عقد مرفوض',
        'ended': 'عقد منتهي'
    };
    return `<span class="${styles[status]} px-3 py-1 rounded-md text-xs font-bold w-fit inline-block text-center min-w-[80px]">${labels[status]}</span>`;
}

// تشغيل التهيئة فور تحميل الملف
initApp();
