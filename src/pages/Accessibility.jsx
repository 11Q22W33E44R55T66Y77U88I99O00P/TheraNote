import React from "react";
import { Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createPageUrl } from "@/utils";
import { Link } from "react-router-dom";

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">הצהרת נגישות</h1>
          <div className="w-16 h-1 bg-emerald-600 mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Opening Statement */}
          <section>
            <p className="text-lg leading-relaxed text-gray-700">
              המחויבות שלנו ב-<strong className="text-emerald-600">TheraNote</strong> למסור פתרון נגיש לכל המטפלים מנחה אותנו לשמור על גישה שווה לכל התכנים באתר האינטרנט. אנו פועלים ברצינות כדי שהאתר יהיה נגיש לכל המשתמשים, כולל אנשים עם מוגבלויות, ומקפידים על עמידה בסטנדרטים הגבוהים ביותר של נגישות דיגיטלית.
            </p>
          </section>

          {/* Our Commitment */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">המחויבות שלנו לנגישות</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              אנו שוקדים מאמצים להבטיח את נגישות האתר לאנשים עם מוגבלויות (לרבות אנשים עם מוגבלויות ראייה), עם מחויבות עליונה לעמוד בדרישות התקינים הבינלאומיים לנגישות תכנים ברשת. מעת לעת אנו מבצעים בדיקות תקופתיות לוודא שהאתר מתאים לכלל הציבור.
            </p>
          </section>

          {/* Standards Compliance */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">התקינים והנחיות שבהם אנו עומדים</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>תקן ישראלי ת"י 5568 - נגישות תכני אתרי אינטרנט</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>הנחיות WCAG 2.1 ברמת AA (Web Content Accessibility Guidelines)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>תקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Accessibility Features */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">תכונות נגישות באתר</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>תמיכה בקוראי מסך ובטכנולוגיות עזר</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>ניווט באמצעות מקלדת בלבד</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>תגיות alt מתאימות לכל התמונות</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>ביאורים וכותרות מובנות במבנה היררכי</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>ניגודיות צבעים מתאימה ובהירה</span>
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>תמיכה בשפות עברית ואנגלית</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>עיצוב רספונסיבי המותאם למכשירים שונים</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>קישורים ברורים עם תיאור משמעותי</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>טפסים נגישים עם תוויות ברורות</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 ml-3 flex-shrink-0"></div>
                  <span>זמני תגובה מתאימים לכל המשתמשים</span>
                </div>
              </div>
            </div>
          </section>

          {/* Ongoing Efforts */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">המאמצים המתמשכים שלנו</h2>
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed">
                אנו ממשיכים לשפר ולעדכן את הנגישות באתר על בסיס קבוע. צוותינו עובר הכשרות סדירות בנושא נגישות דיגיטלית ואנו מבצעים בדיקות תקופתיות עם מומחי נגישות כדי לוודא שהאתר עומד בסטנדרטים הנדרשים. במידה ותיתקלו בבעיות נגישות או שיש לכם הצעות לשיפור, אנא פנו אלינו.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">איך ליצור קשר בנושא נגישות</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-6">
                אם נתקלתם בקושי כלשהו בגישה לתכני האתר, או שיש לכם הערות והצעות לשיפור נגישות האתר, נשמח לשמוע מכם:
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Phone className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">שחר אפוטה - רכז נגישות</p>
                    <p className="text-gray-600">050-7722240</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Mail className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">דואר אלקטרוני</p>
                    <p className="text-gray-600">THERANOTE1@GMAIL.COM</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="bg-emerald-100 p-3 rounded-full">
                    <Calendar className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">זמני תגובה</p>
                    <p className="text-gray-600">אנו מתחייבים לחזור אליכם תוך 5 ימי עבודה</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Last Updated */}
          <section className="border-t pt-6">
            <p className="text-sm text-gray-500 text-center">
              הצהרת נגישות זו עודכנה לאחרונה ב: {new Date().toLocaleDateString('he-IL')}
            </p>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-6">
            <Link to={createPageUrl('Home')}>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                חזרה לעמוד הבית
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}