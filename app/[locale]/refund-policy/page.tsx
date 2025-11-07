'use client';

import { Locale } from '@/lib/i18n/config';
import { DollarSign, FileText, Hotel, Plane, FileCheck, AlertCircle, Clock, Mail, MessageCircle, RefreshCw } from 'lucide-react';

export default function RefundPolicyPage({ params }: { params: { locale: Locale } }) {
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
              <RefreshCw className="h-5 w-5 text-gold-300" />
              <span className="font-semibold text-pearl tracking-wide uppercase text-sm">
                {isArabic ? 'سياسة الاسترداد' : 'Refund Policy'}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 leading-tight">
              {isArabic ? 'سياسة الاسترداد' : 'Refund Policy'}
            </h1>
            <p className="text-xl text-pearl-200/90 font-light leading-relaxed max-w-3xl mx-auto">
              {isArabic
                ? 'سياسات واضحة لاسترداد الأموال مع التزامنا بالتعامل مع طلباتك بالعدل والشفافية'
                : 'Clear refund policies with our commitment to handle your requests fairly and transparently'}
            </p>
            <p className="text-sm text-pearl-300/70 mt-4">
              {isArabic ? 'آخر تحديث: سبتمبر 2025' : 'Last Updated: September 2025'}
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
                {/* Section 1: Policy Overview and Scope */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <FileText className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? '1. نظرة عامة على السياسة والنطاق' : '1. Policy Overview and Scope'}
                      </h2>
                    </div>
                  </div>
                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'تعمل هوسيانا بوكينغ ("الكونسيرج") كوسيط. سياسة الاسترداد الخاصة بنا مرتبطة بشكل أساسي بقواعد الإلغاء التي وضعها مقدمو الخدمات الخارجيون (مثل الفنادق وشركات الطيران وسلطات المطارات). نحن ملتزمون بالدفاع عن أفضل نتيجة ممكنة لعملائنا ضمن تلك المعايير الصارمة.'
                        : 'Houseiana Booking (the "Concierge") operates as an intermediary. Our refund policy is fundamentally tied to the cancellation rules set by the third-party providers (e.g., hotels, airlines, airport authorities). We commit to advocating for the best possible outcome for our clients within those rigid parameters.'}
                    </p>
                  </div>
                </div>

                {/* Section 2: General Principles and Service Fees */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <DollarSign className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? '2. المبادئ العامة ورسوم الخدمة' : '2. General Principles and Service Fees'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-midnight mb-3">
                        {isArabic ? 'أ. طبيعة الاسترداد' : 'A. The Nature of Refunds'}
                      </h3>
                      <p>
                        {isArabic
                          ? 'جميع المبالغ المستردة مشروطة بإرجاع الأموال بنجاح إلى الكونسيرج من قبل مقدم الخدمة الخارجي المعني. لا يمكننا إصدار استرداد حتى نستلم الأموال المقابلة.'
                          : 'All refunds are contingent upon the funds being successfully returned to the Concierge by the respective Third-Party Provider. We cannot issue a refund until we have received the corresponding funds.'}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-midnight mb-3">
                        {isArabic ? 'ب. رسوم خدمة الكونسيرج غير القابلة للاسترداد' : 'B. Non-Refundable Concierge Service Fees'}
                      </h3>
                      <p className="mb-3">
                        {isArabic
                          ? 'نظراً للطبيعة الشخصية لخدمتنا - والتي تتضمن بحثاً مكثفاً وتفاوضاً وتنسيقاً وجهداً إدارياً - فإن الرسوم التالية غير قابلة للاسترداد في جميع الظروف:'
                          : 'Due to the personalized nature of our service—which involves extensive research, negotiation, coordination, and administrative effort—the following fees are non-refundable under all circumstances:'}
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>
                          {isArabic
                            ? 'رسوم خدمة هوسيانا بوكينغ: أي رسوم مقدمة تفرضها هوسيانا مقابل تخطيط برنامج الرحلة، المساعدة في التأشيرة، الاستشارة، أو وقت الكونسيرج المخصص غير قابلة للاسترداد.'
                            : 'Houseiana Booking Service Fees: Any up-front fees charged by Houseiana for itinerary planning, visa assistance, consultation, or dedicated concierge time are non-refundable.'}
                        </li>
                        <li>
                          {isArabic
                            ? 'رسوم التعديل: الرسوم التي يفرضها الكونسيرج لمعالجة التغييرات أو المراجعات على الحجوزات المؤكدة.'
                            : 'Amendment Fees: Fees charged by the Concierge for processing changes or revisions to confirmed bookings.'}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 3: Refund Terms by Service Category */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <FileCheck className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? '3. شروط الاسترداد حسب فئة الخدمة' : '3. Refund Terms by Service Category'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    {/* Refund Table */}
                    <div className="overflow-x-auto -mx-4 sm:mx-0">
                      <table className="min-w-full border-collapse bg-pearl/50 rounded-xl overflow-hidden">
                        <thead>
                          <tr className="bg-midnight text-white">
                            <th className="px-4 py-3 text-left text-sm font-bold">
                              {isArabic ? 'فئة الخدمة' : 'Service Category'}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold">
                              {isArabic ? 'مبدأ الاسترداد' : 'Refund Principle'}
                            </th>
                            <th className="px-4 py-3 text-left text-sm font-bold">
                              {isArabic ? 'إجراء الكونسيرج' : 'Concierge Action'}
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-white transition-colors">
                            <td className="px-4 py-4 font-semibold text-midnight flex items-center gap-2">
                              <Hotel className="h-5 w-5 text-gold-600" />
                              {isArabic ? 'حجوزات الفنادق' : 'Hotel Bookings'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'يتم تحديد المبالغ المستردة حصرياً من خلال سياسة الفندق الفردية (مثل السعر القابل للاسترداد، السعر غير القابل للاسترداد، الموعد النهائي للإلغاء المجاني).'
                                : 'Refunds are governed exclusively by the hotel\'s individual policy (e.g., Refundable Rate, Non-Refundable Rate, Deadline for Free Cancellation).'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'سنقدم طلب الإلغاء فوراً عند التعليمات ونقدم وثائق توضح هيكل العقوبات المحدد للفندق.'
                                : 'We will submit the cancellation request immediately upon instruction and provide documentation detailing the hotel\'s specific penalty structure.'}
                            </td>
                          </tr>
                          <tr className="hover:bg-white transition-colors">
                            <td className="px-4 py-4 font-semibold text-midnight flex items-center gap-2">
                              <Plane className="h-5 w-5 text-gold-600" />
                              {isArabic ? 'حجوزات الطيران' : 'Flight Bookings'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'المبالغ المستردة تعتمد بشكل صارم على قواعد الأجرة الخاصة بشركة الطيران المصدرة للتذكرة (مثل الدرجة الاقتصادية الأساسية، درجة الأعمال المرنة). قد يتم تحويل التذاكر غير القابلة للاسترداد إلى رصيد سفر مستقبلي.'
                                : 'Refunds are strictly dependent on the Fare Rules of the ticketing airline (e.g., Basic Economy, Business Class Flexible). Non-refundable tickets may be converted into future travel credit, subject entirely to airline terms and validity periods.'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'سنحسب قيمة الاسترداد المتبقية (الأجرة ناقص عقوبات شركة الطيران والضرائب) ونتواصل مع شركة الطيران نيابة عنك لتأمين أي رصيد محتمل أو عائد نقدي.'
                                : 'We will calculate the residual refund value (fare minus airline penalties and taxes) and liaise with the airline on your behalf to secure any potential credit or monetary return.'}
                            </td>
                          </tr>
                          <tr className="hover:bg-white transition-colors">
                            <td className="px-4 py-4 font-semibold text-midnight flex items-center gap-2">
                              <FileText className="h-5 w-5 text-gold-600" />
                              {isArabic ? 'المساعدة في التأشيرة' : 'Visa Assistance'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'رسوم طلب التأشيرة المدفوعة للحكومات أو مراكز المعالجة (VFS، إلخ) غير قابلة للاسترداد، بغض النظر عما إذا تم منح التأشيرة أو رفضها. رسوم خدمتنا للمساعدة تظل غير قابلة للاسترداد.'
                                : 'Visa application fees paid to governments or processing centers (VFS, etc.) are non-refundable, regardless of whether the visa is granted or denied. Our service fee for assistance remains non-refundable.'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'نحن لا نستلم أو نسترد الرسوم المدفوعة للسفارات أو الوكالات الحكومية.'
                                : 'We do not receive or refund fees paid to embassies or government agencies.'}
                            </td>
                          </tr>
                          <tr className="hover:bg-white transition-colors">
                            <td className="px-4 py-4 font-semibold text-midnight">
                              {isArabic ? 'الاستقبال والمساعدة / صالات VIP' : 'Meet & Assist / VIP Lounges'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'هذه الخدمات عادة ما تكون غير قابلة للاسترداد إذا تم الإلغاء خلال 24 إلى 72 ساعة من وقت الخدمة المجدول. سيتم تقديم المواعيد النهائية المحددة عند تأكيد الحجز.'
                                : 'These services are typically non-refundable if canceled within 24 to 72 hours of the scheduled service time. Specific cutoff deadlines will be provided upon booking confirmation.'}
                            </td>
                            <td className="px-4 py-4 text-sm">
                              {isArabic
                                ? 'سنحاول تأمين استرداد كامل إذا تم استلام تعليمات الإلغاء قبل الموعد النهائي للمزود بوقت كافٍ.'
                                : 'We will attempt to secure a full refund if cancellation instruction is received well in advance of the provider\'s deadline.'}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Section 4: Refund Request and Processing Procedure */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Clock className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? '4. طلب الاسترداد وإجراءات المعالجة' : '4. Refund Request and Processing Procedure'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <ul className="list-disc list-inside space-y-3 ml-4">
                      <li>
                        <span className="font-semibold text-midnight">
                          {isArabic ? 'الإشعار: ' : 'Notification: '}
                        </span>
                        {isArabic
                          ? 'يجب على العميل إخطار كونسيرج هوسيانا المخصص له فوراً عند اتخاذ قرار بإلغاء أو تعديل حجز. يجب استلام جميع الطلبات كتابياً (عبر البريد الإلكتروني أو WhatsApp) لإنشاء ختم زمني واضح.'
                          : 'The Client must notify their dedicated Houseiana Concierge immediately upon deciding to cancel or amend a booking. All requests must be received in writing (via email or WhatsApp) to establish a clear timestamp.'}
                      </li>
                      <li>
                        <span className="font-semibold text-midnight">
                          {isArabic ? 'المراجعة والتأكيد: ' : 'Review and Confirmation: '}
                        </span>
                        {isArabic
                          ? 'سنقوم بمراجعة شروط مقدم الخدمة الخارجي وإبلاغ العميل بمبلغ الاسترداد المقدر (بعد خصم جميع عقوبات المزود المعمول بها ورسوم خدمة هوسيانا غير القابلة للاسترداد).'
                          : 'We will review the third-party provider\'s terms and inform the Client of the estimated refund amount (after deducting all applicable provider penalties and Houseiana\'s non-refundable service fees).'}
                      </li>
                      <li>
                        <span className="font-semibold text-midnight">
                          {isArabic ? 'المعالجة: ' : 'Processing: '}
                        </span>
                        {isArabic
                          ? 'بمجرد الاتفاق على مبلغ الاسترداد النهائي، نبدأ عملية الإرجاع.'
                          : 'Once the final refund amount is agreed upon, we initiate the return process.'}
                      </li>
                      <li>
                        <span className="font-semibold text-midnight">
                          {isArabic ? 'الجدول الزمني: ' : 'Timeline: '}
                        </span>
                        {isArabic
                          ? 'عادة ما يتم إيداع المبالغ المستردة مرة أخرى إلى طريقة الدفع الأصلية في غضون 7 إلى 14 يوم عمل بعد استرداد الأموال بنجاح من مقدم الخدمة الخارجي. لاحظ أن بعض البنوك أو المعاملات الدولية قد تتطلب وقتاً إضافياً.'
                          : 'Refunds are typically credited back to the original method of payment within 7 to 14 business days after the funds have been successfully recovered from the Third-Party Provider. Note that some banks or international transactions may require additional time.'}
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 5: Exceptional Circumstances (Force Majeure) */}
                <div className="mb-12 pb-12 border-b border-gray-100">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <AlertCircle className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? '5. الظروف الاستثنائية (القوة القاهرة)' : '5. Exceptional Circumstances (Force Majeure)'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'في حالة الظروف الاستثنائية (مثل الأوبئة المعلنة، الكوارث الطبيعية، حظر السفر الحكومي)، سنبذل كل جهد معقول للتفاوض على إعفاءات أو استرداد كامل من مقدمي الخدمات الخارجيين. ومع ذلك، فإن أي حلول يتم توفيرها تخضع لتقدير المزود وحده ولا تضمنها هوسيانا بوكينغ.'
                        : 'In the event of extraordinary circumstances (e.g., declared pandemics, natural disasters, government travel bans), we will exercise every reasonable effort to negotiate waivers or full refunds from third-party providers. However, any remedies provided are at the sole discretion of the provider and are not guaranteed by Houseiana Booking.'}
                    </p>
                  </div>
                </div>

                {/* Section 6: Contact Information */}
                <div>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 flex-shrink-0">
                      <Mail className="h-6 w-6 text-gold-600" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-display font-bold text-midnight mb-4">
                        {isArabic ? '6. معلومات الاتصال' : '6. Contact Information'}
                      </h2>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                    <p>
                      {isArabic
                        ? 'للأسئلة المتعلقة بهذه السياسة أو لتقديم طلب استرداد، يرجى الاتصال بفريق الكونسيرج الخاص بك خلال ساعات العمل:'
                        : 'For any questions regarding this policy or to submit a refund request, please contact your Concierge team during business hours:'}
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

                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-midnight">
                            {isArabic ? 'ساعات العمل: ' : 'Business Hours: '}
                          </span>
                          {isArabic
                            ? 'الأحد - الخميس، 9:00 ص - 6:00 م (توقيت الدوحة)'
                            : 'Sunday - Thursday, 9:00 AM - 6:00 PM (Doha Time)'}
                        </p>
                      </div>
                    </div>
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
