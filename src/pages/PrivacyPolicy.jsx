
import React from 'react';
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";
import { Shield, Mail } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <div className="inline-block bg-emerald-100 p-4 rounded-full mb-4">
            <Shield className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">מדיניות פרטיות – Theranote</h1>
          <p className="text-lg text-gray-600">התחייבותנו לשמירה על המידע האישי שלך.</p>
          <div className="w-20 h-1 bg-emerald-600 mx-auto rounded-full mt-4"></div>
        </header>

        <main className="bg-white rounded-lg shadow-lg p-8 md:p-10 space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              אתר <strong>Theranote</strong> משמש כעמוד נחיתה המיועד למטפלים, פסיכולוגים וקליניקות המעוניינים להשאיר פרטי קשר לצורך יצירת קשר מצד החברה. אנו מחויבים לשמור על פרטיותכם ולהסביר באופן שקוף כיצד נעשה שימוש במידע שתמסרו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">סוגי המידע הנאסף</h2>
            <p className="text-gray-700 mb-4">בעת מילוי טופס יצירת הקשר באתר אנו עשויים לאסוף את המידע הבא:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-50 p-4 rounded-md">
              <li>שם מלא</li>
              <li>כתובת דוא״ל</li>
              <li>מספר טלפון</li>
              <li>שם הארגון או הקליניקה</li>
              <li>סוג הפנייה (לדוגמה: בקשה לגישה מוקדמת, שיחת ייעוץ, שותפות)</li>
              <li>תוכן ההודעה שאתם בוחרים למסור</li>
              <li>אמצעי התקשרות מועדף</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">מטרות השימוש במידע</h2>
            <p className="text-gray-700 mb-4">המידע שתמסרו ישמש אותנו אך ורק לצורך:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>יצירת קשר חוזר ומתן מידע נוסף על השירות שלנו</li>
                <li>שליחת עדכונים או חומרים שיווקיים, במידה ואישרתם זאת במפורש</li>
                <li>ניהול פניות ושיפור חוויית המשתמש</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">הסכמה למסירת מידע</h2>
            <p className="text-gray-700 leading-relaxed">
             בלחיצה על כפתור “שלח” בטופס יצירת הקשר, הנכם מאשרים כי קראתם והסכמתם למדיניות פרטיות זו וכי המידע שמסרתם יישמר וישמש בהתאם לאמור לעיל.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">שיתוף מידע עם צדדים שלישיים</h2>
             <p className="text-gray-700 leading-relaxed mb-4">אנו לא נעביר, נמכור או נשכיר את המידע שלכם לצדדים שלישיים, אלא במקרים הבאים:</p>
             <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>כאשר הדבר נדרש לפי חוק או צו של רשות מוסמכת</li>
                <li>כאשר נשתמש בספקי שירות חיצוניים המסייעים לנו בתפעול האתר או בניהול הפניות (בכפוף להתחייבותם לשמור על סודיות המידע)</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">אבטחת מידע</h2>
            <p className="text-gray-700 leading-relaxed">
              המידע שנאסף נשמר במערכות מאובטחות. אנו נוקטים באמצעים טכנולוגיים וארגוניים מקובלים כדי להגן על המידע מפני גישה בלתי מורשית, שימוש לרעה או חשיפה. עם זאת, אין מערכת אבטחה חסינה לחלוטין ואיננו יכולים להבטיח הגנה מוחלטת.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">מיקום אחסון מידע</h2>
            <p className="text-gray-700 leading-relaxed">
              המידע עשוי להישמר בשרתים הנמצאים בישראל או מחוץ לישראל. במסירת המידע הנכם מאשרים כי ידוע לכם כי ייתכן והמידע יועבר אל מחוץ לגבולות המדינה.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">זכויות המשתמש</h2>
            <p className="text-gray-700 leading-relaxed mb-4">בהתאם לחוק הגנת הפרטיות ולתקנות הרלוונטיות, הנכם רשאים:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 bg-gray-50 p-4 rounded-md">
                <li>לעיין במידע שנשמר עליכם</li>
                <li>לבקש לתקן פרטים שגויים</li>
                <li>לדרוש את מחיקת המידע או את הסרתכם מרשימות דיוור</li>
            </ul>
            <p className="text-gray-700 mt-4">פנייה בנושא זה ניתן לשלוח לכתובת הדוא״ל המופיעה מטה.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">עוגיות (Cookies)</h2>
            <p className="text-gray-700 leading-relaxed">
              האתר עשוי לעשות שימוש בעוגיות (Cookies) לצורך ניתוח תנועת גולשים ושיפור חוויית השימוש. המשתמש יכול לחסום או למחוק עוגיות באמצעות הגדרות הדפדפן.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">שינויים במדיניות</h2>
            <p className="text-gray-700 leading-relaxed">
              אנו רשאים לעדכן מדיניות זו מעת לעת. שינוי מהותי יפורסם באתר או יישלח בדוא״ל, במידה ויש ברשותנו פרטי קשר מתאימים.
            </p>
          </section>

          <section className="bg-emerald-50 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">יצירת קשר</h2>
            <p className="text-gray-700 leading-relaxed mb-4">לשאלות או בקשות בנוגע למדיניות פרטיות זו ניתן לפנות אלינו בכתובת הדוא״ל:</p>
            <div className="flex items-center justify-center space-x-2 space-x-reverse font-medium text-emerald-700">
              <Mail className="w-5 h-5" />
              <a href="mailto:THERANOTE1@GMAIL.COM" className="hover:underline">THERANOTE1@GMAIL.COM</a>
            </div>
          </section>
        </main>
        
        <footer className="text-center mt-12">
            <Link to={createPageUrl('Home')}>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                חזרה לעמוד הבית
              </Button>
            </Link>
        </footer>
      </div>
    </div>
  );
}
