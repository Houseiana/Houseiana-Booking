import { Locale } from '@/lib/i18n/config';

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold md:text-5xl text-center">
            {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 mb-8">
              {isArabic ? 'آخر تحديث: سبتمبر 2025' : 'Last Updated: September 2025'}
            </p>

            <h2>{isArabic ? '1. القبول بالشروط' : '1. Acceptance of Terms'}</h2>
            <p>
              {isArabic
                ? 'باستخدام خدمات Houseiana Booking، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام خدماتنا.'
                : 'By using Houseiana Booking services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.'}
            </p>

            <h2>{isArabic ? '2. الحجوزات والدفع' : '2. Bookings and Payment'}</h2>
            <p>
              {isArabic
                ? 'جميع الحجوزات تخضع للتوفر والتأكيد. الأسعار المعروضة قابلة للتغيير حتى يتم تأكيد الحجز. قد تكون هناك رسوم إضافية مثل الضرائب ورسوم الخدمة.'
                : 'All bookings are subject to availability and confirmation. Prices shown are subject to change until the booking is confirmed. Additional fees such as taxes and service charges may apply.'}
            </p>

            <h2>{isArabic ? '3. سياسة الإلغاء' : '3. Cancellation Policy'}</h2>
            <p>
              {isArabic
                ? 'تختلف سياسات الإلغاء حسب نوع الخدمة والمزود. سيتم إبلاغك بسياسة الإلغاء المحددة قبل تأكيد الحجز. قد يتم فرض رسوم إلغاء وفقًا لشروط الحجز.'
                : 'Cancellation policies vary by service type and provider. You will be informed of the specific cancellation policy before booking confirmation. Cancellation fees may apply according to the booking terms.'}
            </p>

            <h2>{isArabic ? '4. مسؤولية المستخدم' : '4. User Responsibility'}</h2>
            <p>
              {isArabic
                ? 'أنت مسؤول عن تقديم معلومات دقيقة وكاملة عند إجراء الحجز. يجب عليك الامتثال لجميع القوانين واللوائح المحلية المتعلقة بسفرك.'
                : 'You are responsible for providing accurate and complete information when making a booking. You must comply with all local laws and regulations related to your travel.'}
            </p>

            <h2>{isArabic ? '5. القيود' : '5. Limitations'}</h2>
            <p>
              {isArabic
                ? 'Houseiana Booking تعمل كوسيط بين العملاء ومقدمي الخدمات. نحن لسنا مسؤولين عن الإجراءات أو الإغفالات من قبل مقدمي الخدمات الخارجيين.'
                : 'Houseiana Booking acts as an intermediary between clients and service providers. We are not responsible for actions or omissions by third-party service providers.'}
            </p>

            <h2>{isArabic ? '6. التغييرات على الشروط' : '6. Changes to Terms'}</h2>
            <p>
              {isArabic
                ? 'نحتفظ بالحق في تعديل هذه الشروط والأحكام في أي وقت. سيتم نشر التغييرات على موقعنا الإلكتروني وستكون سارية فور النشر.'
                : 'We reserve the right to modify these terms and conditions at any time. Changes will be posted on our website and will be effective immediately upon posting.'}
            </p>

            <h2>{isArabic ? '7. الاتصال بنا' : '7. Contact Us'}</h2>
            <p>
              {isArabic
                ? 'للأسئلة حول هذه الشروط والأحكام، يرجى الاتصال بنا على:'
                : 'For questions about these terms and conditions, please contact us at:'}
            </p>
            <p>
              Email: info@houseianabooking.com<br />
              WhatsApp: +974 30424433<br />
              {isArabic
                ? 'العنوان: لوسيل، برج مارينا التوأم، مبنى 34، الطابق 13B، مكتب 21، الدوحة، قطر'
                : 'Address: Lusail, Marina Twin Tower, Building 34, 13B Floor, Office 21, Doha, Qatar'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
