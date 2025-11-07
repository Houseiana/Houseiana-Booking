'use client';

import { Locale } from '@/lib/i18n/config';
import { Shield, Lock, Eye, Users, Database, Clock, FileText, Mail, MessageCircle } from 'lucide-react';

export default function PrivacyPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-pearl to-white">
      {/* Luxury Hero Section */}
      <section className="relative bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 py-24 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Luxury Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm px-6 py-3 border border-gold/30 shadow-gold">
              <Lock className="h-5 w-5 text-gold-300" />
              <span className="font-semibold text-pearl tracking-wide uppercase text-sm">
                {isArabic ? 'الخصوصية والسرية' : 'Privacy & Confidentiality'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {isArabic ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </h1>
            <p className="text-xl text-pearl-200/90 font-light leading-relaxed max-w-3xl mx-auto">
              {isArabic
                ? 'نحن ملتزمون بحماية خصوصية وسرية البيانات الشخصية المعهودة إلينا من قبل عملائنا المميزين'
                : 'We are committed to protecting the privacy and confidentiality of the personal data entrusted to us by our discerning clientele'}
            </p>
            <p className="text-sm text-pearl-300/70 mt-4">
              {isArabic ? 'آخر تحديث: سبتمبر 2025 | تاريخ السريان: سبتمبر 2025' : 'Last Updated: September 2025 | Effective Date: September 2025'}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-luxury border border-gray-100 overflow-hidden">
              <div className="p-8 md:p-12 lg:p-16">
                {/* Introduction */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <FileText className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'المقدمة' : 'Introduction'}
                      </h2>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'هوسيانا بوكينغ ("نحن"، "لنا"، أو "خاصتنا") ملتزمة بحماية خصوصية وسرية البيانات الشخصية المعهودة إلينا من قبل عملائنا المميزين. توضح سياسة الخصوصية هذه كيفية جمعنا ومعالجتنا وحمايتنا واستخدامنا لمعلوماتك الشخصية عند استخدامك لخدمات السفر والكونسيرج الخاصة بنا.'
                        : 'Houseiana Booking ("We," "Us," or "Our") is committed to protecting the privacy and confidentiality of the personal data entrusted to us by our discerning clientele. This Privacy Policy outlines how we collect, process, safeguard, and use your personal information when you utilize our travel and concierge services.'}
                    </p>
                    <p>
                      {isArabic
                        ? 'من خلال الوصول إلى موقعنا الإلكتروني أو استخدام خدماتنا، فإنك تقر بأنك قد قرأت وفهمت ووافقت على الممارسات الموضحة في سياسة الخصوصية هذه. إذا كنت لا توافق على هذه السياسة، يرجى عدم استخدام خدماتنا.'
                        : 'By accessing our website or using our services, you acknowledge that you have read, understood, and agree to the practices outlined in this Privacy Policy. If you do not agree with this policy, please do not use our services.'}
                    </p>
                  </div>
                </div>

                {/* Section 1: Information We Collect */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Database className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'المعلومات التي نجمعها' : 'Information We Collect'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-midnight mb-3">
                        {isArabic ? 'أ. البيانات المقدمة طوعاً' : 'A. Information You Provide Voluntarily'}
                      </h3>
                      <p className="mb-3">
                        {isArabic
                          ? 'عند التفاعل مع خدماتنا، قد نجمع المعلومات التالية التي تقدمها مباشرة:'
                          : 'When interacting with our services, we may collect the following information that you provide directly:'}
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          {isArabic
                            ? 'معلومات الهوية الشخصية: الاسم الكامل، تاريخ الميلاد، الجنسية، تفاصيل جواز السفر، ومعلومات التعريف الحكومية'
                            : 'Personal Identity Information: Full name, date of birth, nationality, passport details, and government-issued identification'}
                        </li>
                        <li>
                          {isArabic
                            ? 'معلومات الاتصال: عنوان البريد الإلكتروني، رقم الهاتف، العنوان البريدي، والعنوان الفعلي'
                            : 'Contact Information: Email address, phone number, mailing address, and physical address'}
                        </li>
                        <li>
                          {isArabic
                            ? 'تفاصيل السفر: تفضيلات الوجهة، مسارات الرحلات، تفضيلات الإقامة، واحتياجات السفر الخاصة'
                            : 'Travel Details: Destination preferences, itineraries, accommodation preferences, and special travel requirements'}
                        </li>
                        <li>
                          {isArabic
                            ? 'معلومات الدفع والفواتير: تفاصيل بطاقة الائتمان/الخصم، معلومات الحساب المصرفي، عنوان الفواتير، وسجل المعاملات'
                            : 'Payment and Billing Information: Credit/debit card details, bank account information, billing address, and transaction history'}
                        </li>
                        <li>
                          {isArabic
                            ? 'معلومات الحساب: بيانات اعتماد تسجيل الدخول، وإعدادات الملف الشخصي، وسجل الحجز'
                            : 'Account Information: Login credentials, profile settings, and booking history'}
                        </li>
                        <li>
                          {isArabic
                            ? 'تفضيلات الاتصال: تفضيلات اللغة، والاشتراكات في النشرة الإخبارية، وخيارات الاتصال التسويقي'
                            : 'Communication Preferences: Language preferences, newsletter subscriptions, and marketing communication options'}
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-midnight mb-3">
                        {isArabic ? 'ب. البيانات التقنية المجمعة تلقائياً' : 'B. Information Collected Automatically (Technical Data)'}
                      </h3>
                      <p className="mb-3">
                        {isArabic
                          ? 'عند استخدامك لموقعنا الإلكتروني، قد نجمع تلقائياً معلومات تقنية معينة، بما في ذلك على سبيل المثال لا الحصر:'
                          : 'When you use our website, we may automatically collect certain technical information, including but not limited to:'}
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          {isArabic
                            ? 'بيانات الجهاز: عنوان IP، نوع المتصفح، نظام التشغيل، ومعرفات الجهاز الفريدة'
                            : 'Device Data: IP address, browser type, operating system, and unique device identifiers'}
                        </li>
                        <li>
                          {isArabic
                            ? 'بيانات الاستخدام: الصفحات التي تمت زيارتها، الوقت المستغرق في الموقع، روابط الإحالة، ونشاط التصفح'
                            : 'Usage Data: Pages visited, time spent on site, referral links, and browsing activity'}
                        </li>
                        <li>
                          {isArabic
                            ? 'بيانات الموقع: موقع جغرافي تقريبي بناءً على عنوان IP الخاص بك (إذا تم تمكينه)'
                            : 'Location Data: Approximate geographic location based on your IP address (if enabled)'}
                        </li>
                        <li>
                          {isArabic
                            ? 'ملفات تعريف الارتباط وتقنيات التتبع: البيانات المخزنة من ملفات تعريف الارتباط، إشارات الويب، والبكسلات (انظر القسم الخاص بملفات تعريف الارتباط أدناه)'
                            : 'Cookies and Tracking Technologies: Data stored from cookies, web beacons, and pixels (see Cookies section below)'}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 2: How and Why We Use Your Information */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Eye className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'كيف ولماذا نستخدم معلوماتك' : 'How and Why We Use Your Information'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p className="font-semibold text-midnight">
                      {isArabic ? 'الغرض من المعالجة:' : 'Purpose of Processing:'}
                    </p>
                    <p>
                      {isArabic
                        ? 'نقوم بمعالجة بياناتك الشخصية فقط للأغراض المشروعة والمحددة التالية:'
                        : 'We process your personal data only for the following legitimate and specific purposes:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        {isArabic
                          ? 'تقديم الخدمات: لحجز الرحلات الجوية والفنادق والخدمات اللوجستية للسفر والتأشيرات وخدمات الكونسيرج الفاخرة نيابة عنك'
                          : 'Service Delivery: To book flights, hotels, travel logistics, visas, and luxury concierge services on your behalf'}
                      </li>
                      <li>
                        {isArabic
                          ? 'معالجة الدفع: لمعالجة المدفوعات والمعاملات المالية بشكل آمن'
                          : 'Payment Processing: To process payments and financial transactions securely'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الاتصال: للرد على استفساراتك، تقديم دعم العملاء، وإرسال تأكيدات الحجز والتحديثات'
                          : 'Communication: To respond to your inquiries, provide customer support, and send booking confirmations and updates'}
                      </li>
                      <li>
                        {isArabic
                          ? 'التخصيص: لتخصيص تجربتك وتخصيص توصياتنا بناءً على تفضيلاتك'
                          : 'Personalization: To customize your experience and tailor our recommendations based on your preferences'}
                      </li>
                      <li>
                        {isArabic
                          ? 'تحسين الخدمة: لتحسين موقعنا الإلكتروني وخدماتنا وعروضنا'
                          : 'Service Improvement: To improve our website, services, and offerings'}
                      </li>
                      <li>
                        {isArabic
                          ? 'التسويق والترويج: لإرسال رسائل إخبارية وعروض خاصة وترويجية (بموافقتك حيثما كان ذلك مطلوباً)'
                          : 'Marketing and Promotions: To send newsletters, special offers, and promotions (with your consent where required)'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الامتثال القانوني: للامتثال للالتزامات القانونية والمتطلبات التنظيمية'
                          : 'Legal Compliance: To comply with legal obligations and regulatory requirements'}
                      </li>
                      <li>
                        {isArabic
                          ? 'منع الاحتيال: لاكتشاف ومنع ومعالجة الاحتيال وانتهاكات الأمن'
                          : 'Fraud Prevention: To detect, prevent, and address fraud and security breaches'}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 3: Disclosure and Sharing */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Users className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'الإفصاح ومشاركة المعلومات الشخصية' : 'Disclosure and Sharing of Personal Information'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'نحن نحترم خصوصيتك ولا نبيع أو نؤجر أو نتاجر ببياناتك الشخصية. ومع ذلك، قد نشارك معلوماتك مع أطراف ثالثة موثوقة في الحالات التالية:'
                        : 'We respect your privacy and do not sell, rent, or trade your personal data. However, we may share your information with trusted third parties in the following circumstances:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        {isArabic
                          ? 'مقدمو الخدمات: الفنادق وشركات الطيران ووكلاء التأشيرات وموفري النقل لتنفيذ حجوزاتك'
                          : 'Service Providers: Hotels, airlines, visa agents, and transport providers to execute your bookings'}
                      </li>
                      <li>
                        {isArabic
                          ? 'معالجو الدفع: مؤسسات مالية موثوقة لمعالجة المدفوعات بشكل آمن'
                          : 'Payment Processors: Trusted financial institutions for secure payment processing'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الامتثال القانوني: السلطات الحكومية أو جهات إنفاذ القانون أو الهيئات التنظيمية عند الاقتضاء قانوناً'
                          : 'Legal Compliance: Government authorities, law enforcement, or regulatory bodies when required by law'}
                      </li>
                      <li>
                        {isArabic
                          ? 'مقدمو التكنولوجيا: الموفرون الموثوقون الذين يساعدون في استضافة الموقع والتحليلات وخدمات الدعم (ملتزمون بالسرية)'
                          : 'Technology Providers: Trusted vendors who assist with website hosting, analytics, and support services (bound by confidentiality)'}
                      </li>
                      <li>
                        {isArabic
                          ? 'معاملات الأعمال: في حالة الاندماج أو الاستحواذ أو بيع الأصول، قد يتم نقل بياناتك (بإشعار مسبق)'
                          : 'Business Transactions: In the event of a merger, acquisition, or asset sale, your data may be transferred (with prior notice)'}
                      </li>
                    </ul>
                    <p className="mt-4 font-medium text-midnight">
                      {isArabic
                        ? 'جميع الأطراف الثالثة مطالبون تعاقدياً بحماية بياناتك واستخدامها فقط للأغراض المحددة.'
                        : 'All third parties are contractually required to protect your data and use it only for specified purposes.'}
                    </p>
                  </div>
                </div>

                {/* Section 4: Data Security */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Shield className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'أمن البيانات والسرية' : 'Data Security and Confidentiality'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'نحن نأخذ أمن بياناتك على محمل الجد. لقد نفذنا تدابير تقنية وتنظيمية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو الكشف أو التغيير أو التدمير:'
                        : 'We take the security of your data seriously. We have implemented robust technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        {isArabic
                          ? 'التشفير: يتم تشفير جميع البيانات الحساسة (بما في ذلك معلومات الدفع) أثناء النقل والتخزين باستخدام بروتوكولات SSL/TLS'
                          : 'Encryption: All sensitive data (including payment information) is encrypted during transmission and storage using SSL/TLS protocols'}
                      </li>
                      <li>
                        {isArabic
                          ? 'التحكم في الوصول: الوصول المحدود إلى البيانات الشخصية للموظفين المصرحين فقط على أساس الحاجة إلى المعرفة'
                          : 'Access Controls: Restricted access to personal data to authorized personnel only on a need-to-know basis'}
                      </li>
                      <li>
                        {isArabic
                          ? 'عمليات التدقيق الأمنية المنتظمة: تقييمات دورية وفحوصات الضعف'
                          : 'Regular Security Audits: Periodic assessments and vulnerability scans'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الخوادم الآمنة: التخزين على خوادم آمنة مع أنظمة حماية جدار الحماية واكتشاف التسلل'
                          : 'Secure Servers: Storage on secure servers with firewall and intrusion detection systems'}
                      </li>
                      <li>
                        {isArabic
                          ? 'بروتوكولات خرق البيانات: إجراءات استجابة للحوادث وإخطارات في الوقت المناسب في حالة حدوث خرق'
                          : 'Data Breach Protocols: Incident response procedures and timely notifications in case of a breach'}
                      </li>
                    </ul>
                    <p className="mt-4 text-sm text-gray-600">
                      {isArabic
                        ? 'على الرغم من جهودنا، لا يمكن ضمان أي طريقة نقل عبر الإنترنت أو تخزين إلكتروني بنسبة 100٪. نحن نشجعك على اتخاذ خطوات استباقية لحماية معلوماتك الشخصية.'
                        : 'Despite our efforts, no method of transmission over the Internet or electronic storage is 100% secure. We encourage you to take proactive steps to protect your personal information.'}
                    </p>
                  </div>
                </div>

                {/* Section 5: Data Retention */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Clock className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'الاحتفاظ بالبيانات' : 'Data Retention'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضرورياً لتحقيق الأغراض التي تم جمعها من أجلها أو للامتثال للمتطلبات القانونية:'
                        : 'We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected or to comply with legal requirements:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        {isArabic
                          ? 'الحسابات النشطة: يتم الاحتفاظ بالبيانات طالما أن حسابك نشط أو حسب الحاجة لتقديم الخدمات'
                          : 'Active Accounts: Data is retained for as long as your account is active or as needed to provide services'}
                      </li>
                      <li>
                        {isArabic
                          ? 'حذف الحساب: عند الطلب، سنقوم بحذف أو إخفاء هوية بياناتك الشخصية، مع مراعاة الالتزامات القانونية والحاجة إلى حل النزاعات'
                          : 'Account Deletion: Upon request, we will delete or anonymize your personal data, subject to legal obligations and the need to resolve disputes'}
                      </li>
                      <li>
                        {isArabic
                          ? 'المتطلبات القانونية: قد نحتفظ ببيانات معينة لفترات أطول إذا كان ذلك مطلوباً بموجب القانون أو للامتثال الضريبي أو الأغراض المحاسبية'
                          : 'Legal Requirements: Certain data may be retained for longer periods if required by law or for tax, accounting, or compliance purposes'}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 6: Your Rights */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <FileText className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'حقوقك فيما يتعلق ببياناتك' : 'Your Rights Regarding Your Data'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'لديك حقوق معينة فيما يتعلق ببياناتك الشخصية، بما في ذلك على سبيل المثال لا الحصر:'
                        : 'You have certain rights concerning your personal data, including but not limited to:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        {isArabic
                          ? 'الحق في الوصول: يمكنك طلب نسخة من البيانات الشخصية التي نحتفظ بها عنك'
                          : 'Right to Access: You may request a copy of the personal data we hold about you'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الحق في التصحيح: يمكنك طلب تصحيح أي معلومات غير دقيقة أو غير كاملة'
                          : 'Right to Rectification: You may request correction of any inaccurate or incomplete information'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الحق في الحذف: يمكنك طلب حذف بياناتك الشخصية في ظروف معينة'
                          : 'Right to Erasure: You may request deletion of your personal data under certain circumstances'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الحق في تقييد المعالجة: يمكنك طلب تقييد معالجة بياناتك'
                          : 'Right to Restrict Processing: You may request restriction of processing your data'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الحق في نقل البيانات: يمكنك طلب تلقي بياناتك بتنسيق منظم وشائع الاستخدام'
                          : 'Right to Data Portability: You may request to receive your data in a structured, commonly used format'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الحق في الاعتراض: يمكنك الاعتراض على معالجة بياناتك الشخصية في حالات معينة'
                          : 'Right to Object: You may object to the processing of your personal data in certain situations'}
                      </li>
                      <li>
                        {isArabic
                          ? 'الحق في سحب الموافقة: حيثما تكون المعالجة قائمة على الموافقة، يمكنك سحب موافقتك في أي وقت'
                          : 'Right to Withdraw Consent: Where processing is based on consent, you may withdraw your consent at any time'}
                      </li>
                    </ul>
                    <p className="mt-4 font-medium text-midnight">
                      {isArabic
                        ? 'لممارسة أي من هذه الحقوق، يرجى الاتصال بنا باستخدام معلومات الاتصال الواردة أدناه.'
                        : 'To exercise any of these rights, please contact us using the contact information provided below.'}
                    </p>
                  </div>
                </div>

                {/* Section 7: Cookies */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Database className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'ملفات تعريف الارتباط وتقنيات التتبع' : 'Cookies and Tracking Technologies'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'نستخدم ملفات تعريف الارتباط والتقنيات المماثلة لتحسين تجربة التصفح الخاصة بك وجمع البيانات التحليلية:'
                        : 'We use cookies and similar technologies to enhance your browsing experience and collect analytical data:'}
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        {isArabic
                          ? 'ملفات تعريف الارتباط الضرورية: ضرورية لوظائف الموقع الأساسية (على سبيل المثال، المصادقة وأمن الجلسة)'
                          : 'Essential Cookies: Required for basic website functionality (e.g., authentication, session security)'}
                      </li>
                      <li>
                        {isArabic
                          ? 'ملفات تعريف الارتباط الوظيفية: تخزين التفضيلات مثل اللغة والعملة'
                          : 'Functional Cookies: Store preferences such as language and currency'}
                      </li>
                      <li>
                        {isArabic
                          ? 'ملفات تعريف الارتباط التحليلية: تحليل حركة المرور على الموقع وسلوك المستخدم لتحسين الخدمات'
                          : 'Analytical Cookies: Analyze website traffic and user behavior to improve services'}
                      </li>
                      <li>
                        {isArabic
                          ? 'ملفات تعريف الارتباط التسويقية: تقديم محتوى مستهدف وإعلانات ذات صلة (بموافقتك)'
                          : 'Marketing Cookies: Deliver targeted content and relevant ads (with your consent)'}
                      </li>
                    </ul>
                    <p className="mt-4">
                      {isArabic
                        ? 'يمكنك إدارة أو تعطيل ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك. يرجى ملاحظة أن تعطيل ملفات تعريف الارتباط قد يؤثر على وظائف موقعنا.'
                        : 'You can manage or disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.'}
                    </p>
                  </div>
                </div>

                {/* Section 8: Contact Us */}
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? 'اتصل بنا' : 'Contact Us'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'إذا كانت لديك أي أسئلة أو مخاوف أو طلبات بخصوص سياسة الخصوصية هذه أو معالجة بياناتك الشخصية، يرجى الاتصال بنا:'
                        : 'If you have any questions, concerns, or requests regarding this Privacy Policy or the processing of your personal data, please contact us:'}
                    </p>

                    <div className="bg-pearl rounded-xl p-6 border border-gray-100 mt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gold/20 flex-shrink-0">
                            <Mail className="h-5 w-5 text-gold-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-midnight mb-1">
                              {isArabic ? 'البريد الإلكتروني' : 'Email'}
                            </h3>
                            <a href="mailto:info@houseianabooking.com" className="text-gold-600 hover:text-gold-700 transition-colors">
                              info@houseianabooking.com
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-white border border-gold/20 flex-shrink-0">
                            <MessageCircle className="h-5 w-5 text-gold-600" />
                          </div>
                          <div>
                            <h3 className="font-bold text-midnight mb-1">
                              {isArabic ? 'واتساب' : 'WhatsApp'}
                            </h3>
                            <a href="https://wa.me/97430424433" className="text-gold-600 hover:text-gold-700 transition-colors" target="_blank" rel="noopener noreferrer">
                              +974 30424433
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-6">
                      {isArabic
                        ? 'سنبذل قصارى جهدنا للرد على استفسارك في غضون 48 ساعة عمل.'
                        : 'We will make every effort to respond to your inquiry within 48 business hours.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
