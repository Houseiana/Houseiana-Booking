import { Locale } from '@/lib/i18n/config';
import { Shield, FileText, CreditCard, AlertCircle, Scale, Lock } from 'lucide-react';

export default function TermsPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen bg-pearl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 py-20 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm rounded-full border border-gold/30 mb-8 shadow-gold">
              <Scale className="h-5 w-5 text-gold-300" />
              <span className="text-sm font-semibold text-pearl tracking-wide uppercase">
                {isArabic ? 'الشروط القانونية' : 'Legal Terms'}
              </span>
            </div>

            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              {isArabic ? 'الشروط والأحكام' : 'Terms & Conditions'}
              <span className="block mt-2 text-2xl md:text-3xl font-light text-pearl-200/90">
                {isArabic ? 'شروط الخدمة' : 'of Service'}
              </span>
            </h1>
            <p className="text-lg text-pearl-200/80">
              {isArabic ? 'آخر تحديث: سبتمبر 2025' : 'Last Updated: September 2025'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury border border-gold/20">

            {/* Section 1 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <FileText className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '1. القبول بالشروط واتفاقية الكونسيرج' : '1. Acceptance of Terms and Concierge Agreement'}
                  </h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isArabic
                  ? 'من خلال الوصول إلى أو استخدام خدمات الكونسيرج المتخصصة لـ Houseiana Booking (المشار إليها باسم "Houseiana" أو "نحن" أو "خدماتنا")، فإنك (العميل أو أنت) توافق على الالتزام قانونياً بهذه الشروط والأحكام وسياسة الخصوصية وجميع القوانين المعمول بها. إذا كنت لا توافق على جميع الشروط، يجب عليك التوقف عن استخدام خدماتنا فوراً.'
                  : 'By accessing or using the specialized concierge services of Houseiana Booking (referred to as "Houseiana," "We," "Us," or "Our"), you (the "Client" or "You") agree to be legally bound by these Terms & Conditions, the Privacy Policy, and all applicable laws. If you do not agree to all terms, you must discontinue the use of our services immediately.'}
              </p>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <Shield className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '2. طبيعة الخدمة ودور الوسيط' : '2. Nature of Service and Intermediary Role'}
                  </h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                {isArabic
                  ? 'تعمل Houseiana Booking حصرياً ككونسيرج فاخر ووكيل حجز. نحن نعمل كوسيط، ونسهل الحجوزات وتأمين الخدمات بين العميل ومقدمي الخدمات الخارجيين (مثل الفنادق وشركات الطيران وشركات النقل ووكالات التأشيرات ومشغلي المطارات).'
                  : 'Houseiana Booking operates exclusively as a luxury concierge and booking agent. We act as an intermediary, facilitating reservations and securing services between the Client and third-party service providers (e.g., hotels, airlines, transportation companies, visa agencies, and airport operators).'}
              </p>
              <div className="bg-gold/5 border-l-4 border-gold p-4 rounded-r-lg mb-4">
                <p className="text-gray-700 leading-relaxed font-semibold">
                  {isArabic ? 'عدم المسؤولية المباشرة:' : 'No Direct Liability:'}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {isArabic
                    ? 'نحن لا نملك أو نُدير أو نتحكم في عمليات مقدمي الخدمات الخارجيين هؤلاء. لذلك، Houseiana Booking ليست مسؤولة عن أي خسارة أو ضرر أو إصابة أو تأخير أو إزعاج أو نفقات ناتجة عن تصرفات أو إغفالات أو إهمال أو إخفاقات أي مزود خدمة خارجي، بما في ذلك أحداث القوة القاهرة.'
                    : 'We do not own, manage, or control the operations of these third-party providers. Therefore, Houseiana Booking is not liable for any loss, damage, injury, delay, inconvenience, or expense caused by the actions, omissions, negligence, or failures of any third-party provider, including force majeure events.'}
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">{isArabic ? 'شروط المزود:' : 'Provider Terms:'}</span>{' '}
                {isArabic
                  ? 'الخدمات المؤمنة من خلال Houseiana تخضع للشروط والأحكام الفردية وقيود المسؤولية لمزود الخدمة الخارجي المعني.'
                  : 'Services secured through Houseiana are subject to the individual terms, conditions, and liability limitations of the respective third-party provider.'}
              </p>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <CreditCard className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '3. طلبات الخدمة والتسعير والدفع' : '3. Service Requests, Pricing, and Payment'}
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'عروض أسعار مخصصة:' : 'Bespoke Quotations:'}</span>{' '}
                    {isArabic
                      ? 'جميع الأسعار وعروض الأسعار المقدمة من كونسيرج Houseiana الخاص بك هي تقديرات وقابلة للتغيير حتى يتم تأكيد الحجز ودفعه بالكامل. تستند الأسعار إلى توفر الخدمة وقت الحجز.'
                      : 'All prices and quotations provided by your Houseiana concierge are estimates and are subject to change until the booking is fully confirmed and paid for. Prices are based on service availability at the time of reservation.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'تأكيد الحجز:' : 'Confirmation of Booking:'}</span>{' '}
                    {isArabic
                      ? 'يُعتبر الحجز مؤكداً فقط عند استلام الدفع الكامل (أو مبلغ الإيداع المحدد) وإصدار مستند تأكيد نهائي (مثل قسيمة، برنامج رحلة) من قبل Houseiana Booking.'
                      : 'A booking is considered confirmed only upon receipt of full payment (or a defined deposit amount) and issuance of a final confirmation document (e.g., voucher, itinerary) by Houseiana Booking.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'الضرائب والرسوم:' : 'Taxes and Fees:'}</span>{' '}
                    {isArabic
                      ? 'الأسعار عموماً تستثني الضرائب المحلية ورسوم السياحة ورسوم المنتجعات الوجهة ورسوم الأمتعة ورسوم الخدمة المعينة ما لم يُذكر صراحةً خلاف ذلك في عرض الأسعار النهائي.'
                      : 'Prices generally exclude local taxes, tourism fees, destination resort fees, baggage fees, and certain service charges unless explicitly stated otherwise in the final quotation.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'أمن الدفع:' : 'Payment Security:'}</span>{' '}
                    {isArabic
                      ? 'يوافق العميل على الامتثال لإجراءات التحقق من الدفع الخاصة بـ Houseiana Booking. نحن نستخدم بوابات دفع آمنة ومشفرة.'
                      : 'The Client agrees to comply with Houseiana Booking\'s payment verification procedures. We utilize secure, encrypted payment gateways.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '4. الإلغاء والتعديلات والمبالغ المستردة' : '4. Cancellation, Amendments, and Refunds'}
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'سياسات خاصة بالخدمة:' : 'Service-Specific Policies:'}</span>{' '}
                    {isArabic
                      ? 'سياسات الإلغاء والتعديل محكومة بدقة بشروط مزود الخدمة الخارجي. سيتم إبلاغ العميل بهذه الشروط المحددة بوضوح قبل تأكيد الحجز.'
                      : 'Cancellation and amendment policies are strictly governed by the third-party provider\'s terms. These specific terms will be clearly communicated to the Client prior to the booking confirmation.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'رسوم الإلغاء:' : 'Cancellation Fees:'}</span>{' '}
                    {isArabic
                      ? 'بالإضافة إلى أي عقوبات أو رسوم يفرضها مزود الخدمة الخارجي، تحتفظ Houseiana Booking بالحق في فرض رسوم إدارية وخدمة لمعالجة الإلغاءات أو التعديلات الكبيرة، مما يعكس جهد الكونسيرج المخصص المعني.'
                      : 'In addition to any penalties or charges imposed by the third-party provider, Houseiana Booking reserves the right to charge an administrative and service fee for processing cancellations or significant amendments, reflecting the dedicated concierge effort involved.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'المبالغ المستردة:' : 'Refunds:'}</span>{' '}
                    {isArabic
                      ? 'تتم معالجة المبالغ المستردة، إن أمكن، فقط عند التأكيد من مزود الخدمة الخارجي. أوقات المعالجة تعتمد على المزود والمؤسسات المصرفية.'
                      : 'Refunds, if applicable, are processed only upon confirmation from the third-party provider. Processing times are dependent on the provider and banking institutions.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <FileText className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '5. مسؤولية العميل والوثائق' : '5. Client Responsibility and Documentation'}
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'الدقة:' : 'Accuracy:'}</span>{' '}
                    {isArabic
                      ? 'العميل مسؤول عن ضمان أن جميع المعلومات الشخصية ومعلومات السفر المقدمة لـ Houseiana (الأسماء، التواريخ، تفاصيل جواز السفر، الطلبات الخاصة) دقيقة وكاملة وتطابق الهوية الصادرة عن الحكومة. Houseiana ليست مسؤولة عن المشاكل الناشئة عن البيانات غير الصحيحة المقدمة من العميل.'
                      : 'The Client is responsible for ensuring all personal and travel information provided to Houseiana (names, dates, passport details, special requests) is accurate, complete, and matches government-issued identification. Houseiana is not liable for issues arising from incorrect data provided by the Client.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'وثائق السفر:' : 'Travel Documents:'}</span>{' '}
                    {isArabic
                      ? 'العميل وحده المسؤول عن الحصول على وامتلاك جميع وثائق السفر اللازمة، بما في ذلك جوازات السفر الصالحة والتأشيرات وشهادات الصحة والامتثال لجميع متطلبات الدخول والخروج من الوجهة (بما في ذلك، على سبيل المثال لا الحصر، لوائح COVID-19). تسهل خدمة المساعدة في التأشيرات عملية التقديم ولكنها لا تضمن الموافقة على التأشيرة.'
                      : 'The Client is solely responsible for obtaining and possessing all necessary travel documents, including valid passports, visas, health certificates, and compliance with all destination entry and exit requirements (including, but not limited to, COVID-19 regulations). Our Visa Assistance Service facilitates the application process but does not guarantee visa approval.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <Shield className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '6. الخدمات المتخصصة (الاستقبال والمساعدة، التأشيرات)' : '6. Specialized Services (Meet & Assist, Visa)'}
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'الاستقبال والمساعدة:' : 'Meet & Assist:'}</span>{' '}
                    {isArabic
                      ? 'بينما نسعى لتقديم تجربة سلسة، فإن توقيت وتنفيذ خدمات الاستقبال والمساعدة يخضع لظروف المطار وبروتوكولات الأمن وتوفر موظفي الطرف الثالث.'
                      : 'While we strive for a seamless experience, the timing and execution of Meet & Assist services are subject to airport conditions, security protocols, and third-party staff availability.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'السرية والبيانات:' : 'Discretion and Data:'}</span>{' '}
                    {isArabic
                      ? 'يقر العميل بأن تقديم الوثائق الحساسة لخدمات مثل المساعدة في التأشيرات أمر ضروري لـ Houseiana لتنفيذ خدمة الكونسيرج المتفق عليها. نحن ملتزمون بالتعامل مع جميع هذه البيانات بأعلى مستوى من السرية ووفقاً لسياسة الخصوصية الخاصة بنا.'
                      : 'The Client acknowledges that providing sensitive documentation for services like Visa Assistance is necessary for Houseiana to perform the agreed-upon concierge service. We commit to handling all such data with the highest level of discretion and in accordance with our Privacy Policy.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <Lock className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '7. الملكية الفكرية والسرية' : '7. Intellectual Property and Confidentiality'}
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'مواد الخدمة:' : 'Service Materials:'}</span>{' '}
                    {isArabic
                      ? 'جميع المحتوى وبرامج الرحلات والمقترحات والأساليب الخاصة المطورة والمقدمة من قبل Houseiana Booking هي ملكيتنا الفكرية الحصرية.'
                      : 'All content, itineraries, proposals, and proprietary methods developed and provided by Houseiana Booking are our exclusive intellectual property.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'السرية:' : 'Discretion:'}</span>{' '}
                    {isArabic
                      ? 'يوافق الطرفان على الحفاظ على سرية أي معلومات غير عامة أو استراتيجيات خاصة أو تفاصيل شخصية متبادلة أثناء اتفاقية الخدمة.'
                      : 'Both parties agree to maintain confidentiality regarding any non-public information, proprietary strategies, or personal details exchanged during the service agreement.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <Scale className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '8. تسوية النزاعات والقانون الحاكم' : '8. Dispute Resolution and Governing Law'}
                  </h2>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'القانون الحاكم:' : 'Governing Law:'}</span>{' '}
                    {isArabic
                      ? 'تخضع هذه الشروط والأحكام وتُفسر وفقاً لقوانين دولة قطر.'
                      : 'These Terms and Conditions shall be governed by and construed in accordance with the laws of the State of Qatar.'}
                  </p>
                </div>
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold">{isArabic ? 'الاختصاص القضائي:' : 'Jurisdiction:'}</span>{' '}
                    {isArabic
                      ? 'أي نزاعات تنشأ عن أو فيما يتعلق بهذه الشروط تخضع للاختصاص الحصري للمحاكم الواقعة في الدوحة، قطر.'
                      : 'Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in Doha, Qatar.'}
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                  <AlertCircle className="h-6 w-6 text-gold-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-2">
                    {isArabic ? '9. التعديلات على الشروط' : '9. Modifications to Terms'}
                  </h2>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {isArabic
                  ? 'نحتفظ بالحق في تعديل أو استبدال هذه الشروط والأحكام في أي وقت. سيتم الإشارة إلى التغييرات المادية على الموقع الإلكتروني وستكون سارية فوراً عند النشر. من خلال الاستمرار في استخدام خدماتنا بعد دخول أي مراجعات حيز التنفيذ، فإنك توافق على الالتزام بالشروط المنقحة.'
                  : 'We reserve the right to modify or replace these Terms & Conditions at any time. Material changes will be noted on the website and will be effective immediately upon posting. By continuing to use our services after any revisions become effective, you agree to be bound by the revised terms.'}
              </p>
            </div>

            {/* Section 10 - Contact */}
            <div className="bg-gradient-to-br from-gold/5 to-gold/10 border-2 border-gold/20 rounded-2xl p-8">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-midnight mb-6">
                {isArabic ? '10. معلومات الاتصال' : '10. Contact Information'}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {isArabic
                  ? 'لأي أسئلة أو توضيحات أو مخاوف بشأن هذه الشروط والأحكام أو الخدمات المقدمة، يرجى الاتصال بفريق الكونسيرج الخاص بك:'
                  : 'For any questions, clarifications, or concerns regarding these Terms and Conditions or the services provided, please contact your concierge team:'}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <p className="font-semibold text-midnight mb-2">{isArabic ? 'الوسيلة' : 'Method'}</p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">{isArabic ? 'البريد الإلكتروني' : 'Email'}</p>
                      <p className="text-gold-600 font-medium">info@houseianabooking.com</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">{isArabic ? 'واتساب (24/7)' : 'WhatsApp (24/7)'}</p>
                      <p className="text-gold-600 font-medium">+974 30424433</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-soft">
                  <p className="font-semibold text-midnight mb-2">{isArabic ? 'العنوان' : 'Address'}</p>
                  <p className="text-gray-700 leading-relaxed">
                    {isArabic
                      ? 'لوسيل، برج مارينا التوأم، مبنى 34، الطابق 13B، مكتب 21، الدوحة، قطر'
                      : 'Lusail, Marina Twin Tower, Building 34, 13B Floor, Office 21, Doha, Qatar'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
