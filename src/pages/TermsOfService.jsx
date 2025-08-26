import React from 'react';
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";
import { FileText, Mail } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <FileText className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">תנאי שימוש – Theranote</h1>
          <p className="text-lg text-gray-600">התנאים וההגבלות לשימוש באתר שלנו.</p>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </header>

        <main className="bg-white rounded-lg shadow-lg p-8 md:p-10 space-y-8">
          <section>
            <p className="text-gray-700 leading-relaxed">
              ברוכים הבאים לאתר <strong>Theranote</strong> ("האתר", "אנחנו"). השימוש באתר כפוף לתנאי השימוש שלהלן. כניסה לאתר והשארת פרטים מהווים את הסכמתך המלאה והבלתי חוזרת לתנאים אלה. אם אינך מסכים לתנאים אלה, אנא הימנע משימוש באתר.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">מטרת האתר</h2>
            <p className="text-gray-700 leading-relaxed">
              האתר מהווה עמוד נחיתה שמטרתו לאפשר למטפלים, פסיכולוגים וקליניקות להשאיר פרטי קשר, על מנת שנוכל ליצור עמם קשר לצורך מתן מידע נוסף על השירות שלנו.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">השימוש באתר</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>המשתמש מתחייב למסור אך ורק פרטים נכונים ומדויקים.</li>
              <li>אין לעשות שימוש באתר לכל מטרה בלתי חוקית, מסחרית זרה או שאינה תואמת את מטרת האתר.</li>
              <li>האתר ניתן לשימוש כפי שהוא (AS IS) ואיננו מתחייב כי האתר יהיה חף מתקלות או הפרעות.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">אחריות</h2>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>החברה לא תישא בכל אחריות לנזקים ישירים או עקיפים שייגרמו כתוצאה משימוש באתר או מהסתמכות על המידע בו.</li>
              <li>המידע באתר אינו מהווה ייעוץ מקצועי, טיפולי או רפואי מכל סוג שהוא.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">פרטיות</h2>
            <p className="text-gray-700 leading-relaxed">
              השימוש בפרטים שתמסרו בטופס יצירת הקשר כפוף למדיניות הפרטיות של האתר, המהווה חלק בלתי נפרד מתנאי שימוש אלה.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">קניין רוחני</h2>
            <p className="text-gray-700 leading-relaxed">
              כל הזכויות באתר, בתכנים, בעיצוב ובסימני המסחר שייכות ל-<strong>Theranote</strong> ואין להעתיק, לשכפל, להפיץ או לעשות שימוש בהם ללא קבלת אישור מראש ובכתב.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">שינוי תנאים</h2>
            <p className="text-gray-700 leading-relaxed">
              אנו רשאים לעדכן תנאי שימוש אלה מעת לעת. השימוש באתר לאחר פרסום עדכון ייחשב כהסכמה לתנאים החדשים.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">דין וסמכות שיפוט</h2>
            <p className="text-gray-700 leading-relaxed">
              על תנאי שימוש אלה יחולו דיני מדינת ישראל, וכל מחלוקת שתתגלע תתברר בבתי המשפט המוסמכים בעיר תל אביב בלבד.
            </p>
          </section>

          <section className="bg-blue-50 rounded-lg p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">יצירת קשר</h2>
            <p className="text-gray-700 leading-relaxed mb-4">לשאלות או בקשות בנוגע לתנאי השימוש ניתן לפנות אלינו בכתובת הדוא״ל:</p>
            <div className="flex items-center justify-center space-x-2 space-x-reverse font-medium text-blue-700">
              <Mail className="w-5 h-5" />
              <a href="mailto:THERANOTE1@GMAIL.COM" className="hover:underline">THERANOTE1@GMAIL.COM</a>
            </div>
          </section>
        </main>
        
        <footer className="text-center mt-12">
            <Link to={createPageUrl('Home')}>
              <Button className="bg-blue-600 hover:bg-blue-700">
                חזרה לעמוד הבית
              </Button>
            </Link>
        </footer>
      </div>
    </div>
  );
}