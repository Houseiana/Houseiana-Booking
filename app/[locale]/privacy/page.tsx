import { Locale } from '@/lib/i18n/config';

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold md:text-5xl text-center">
            {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 mb-8">
              {isArabic ? 'آخر تحديث: سبتمبر 2025' : 'Last Updated: September 2025'}
            </p>

            <h2>{isArabic ? '1. المعلومات التي نجمعها' : '1. Information We Collect'}</h2>
            <p>
              {isArabic
                ? 'نقوم بجمع المعلومات الشخصية التي تقدمها لنا مثل الاسم والبريد الإلكتروني ورقم الهاتف وتفاصيل الحجز. نقوم أيضًا بجمع معلومات تلقائيًا عند استخدامك لموقعنا.'
                : 'We collect personal information that you provide to us such as name, email, phone number, and booking details. We also collect information automatically when you use our website.'}
            </p>

            <h2>{isArabic ? '2. كيفية استخدام معلوماتك' : '2. How We Use Your Information'}</h2>
            <p>
              {isArabic
                ? 'نستخدم معلوماتك لمعالجة الحجوزات، والتواصل معك، وتحسين خدماتنا، وإرسال تحديثات حول حجوزاتك.'
                : 'We use your information to process bookings, communicate with you, improve our services, and send updates about your bookings.'}
            </p>

            <h2>{isArabic ? '3. مشاركة المعلومات' : '3. Information Sharing'}</h2>
            <p>
              {isArabic
                ? 'نشارك معلوماتك مع مقدمي الخدمات (الفنادق وشركات الطيران وما إلى ذلك) فقط عند الضرورة لإكمال حجزك. لن نبيع معلوماتك الشخصية لأطراف ثالثة.'
                : 'We share your information with service providers (hotels, airlines, etc.) only when necessary to complete your booking. We will not sell your personal information to third parties.'}
            </p>

            <h2>{isArabic ? '4. أمن البيانات' : '4. Data Security'}</h2>
            <p>
              {isArabic
                ? 'نتخذ تدابير أمنية مناسبة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الاستخدام أو الكشف.'
                : 'We take appropriate security measures to protect your personal information from unauthorized access, use, or disclosure.'}
            </p>

            <h2>{isArabic ? '5. حقوقك' : '5. Your Rights'}</h2>
            <p>
              {isArabic
                ? 'لديك الحق في الوصول إلى بياناتك الشخصية وتصحيحها وحذفها. يمكنك أيضًا الاعتراض على معالجة بياناتك في ظروف معينة.'
                : 'You have the right to access, correct, and delete your personal data. You can also object to the processing of your data under certain circumstances.'}
            </p>

            <h2>{isArabic ? '6. ملفات تعريف الارتباط' : '6. Cookies'}</h2>
            <p>
              {isArabic
                ? 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.'
                : 'We use cookies to improve your experience on our website. You can control cookies through your browser settings.'}
            </p>

            <h2>{isArabic ? '7. الاتصال بنا' : '7. Contact Us'}</h2>
            <p>
              {isArabic
                ? 'للأسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا على:'
                : 'For questions about this privacy policy, please contact us at:'}
            </p>
            <p>
              Email: info@houseianabooking.com<br />
              WhatsApp: +974 30424433
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
