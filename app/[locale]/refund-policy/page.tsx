import { Locale } from '@/lib/i18n/config';

export default function RefundPolicyPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="bg-gradient-to-br from-primary to-secondary py-16 text-white">
        <div className="container-custom">
          <h1 className="text-4xl font-bold md:text-5xl text-center">
            {isArabic ? 'سياسة الاسترداد' : 'Refund Policy'}
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-gray-600 mb-8">
              {isArabic ? 'آخر تحديث: سبتمبر 2025' : 'Last Updated: September 2025'}
            </p>

            <h2>{isArabic ? '1. نظرة عامة' : '1. Overview'}</h2>
            <p>
              {isArabic
                ? 'سياسة الاسترداد الخاصة بنا تعتمد على نوع الخدمة المحجوزة وشروط مقدم الخدمة. نحن نسعى جاهدين لتقديم حلول عادلة ومعقولة لعملائنا.'
                : 'Our refund policy depends on the type of service booked and the provider\'s terms. We strive to provide fair and reasonable solutions to our clients.'}
            </p>

            <h2>{isArabic ? '2. حجوزات الفنادق' : '2. Hotel Bookings'}</h2>
            <p>
              {isArabic
                ? 'استرداد الأموال لحجوزات الفنادق يعتمد على سياسة الإلغاء الخاصة بالفندق:'
                : 'Refunds for hotel bookings depend on the hotel\'s cancellation policy:'}
            </p>
            <ul>
              <li>{isArabic ? 'الحجوزات القابلة للاسترداد: استرداد كامل إذا تم الإلغاء قبل الموعد النهائي' : 'Refundable bookings: Full refund if canceled before the deadline'}</li>
              <li>{isArabic ? 'الحجوزات غير القابلة للاسترداد: لا يوجد استرداد' : 'Non-refundable bookings: No refund'}</li>
              <li>{isArabic ? 'الإلغاء المتأخر: قد يتم فرض رسوم بناءً على شروط الفندق' : 'Late cancellation: Fees may apply based on hotel terms'}</li>
            </ul>

            <h2>{isArabic ? '3. حجوزات الطيران' : '3. Flight Bookings'}</h2>
            <p>
              {isArabic
                ? 'استرداد الأموال للرحلات الجوية يخضع لسياسة شركة الطيران:'
                : 'Flight refunds are subject to airline policy:'}
            </p>
            <ul>
              <li>{isArabic ? 'التذاكر القابلة للاسترداد: استرداد جزئي أو كامل حسب قواعد التذكرة' : 'Refundable tickets: Partial or full refund according to fare rules'}</li>
              <li>{isArabic ? 'التذاكر غير القابلة للاسترداد: قد يكون الائتمان متاحًا للاستخدام المستقبلي' : 'Non-refundable tickets: Credit may be available for future use'}</li>
              <li>{isArabic ? 'رسوم الإلغاء: تطبقها شركة الطيران' : 'Cancellation fees: Applied by the airline'}</li>
            </ul>

            <h2>{isArabic ? '4. الخدمات الأخرى' : '4. Other Services'}</h2>
            <p>
              {isArabic
                ? 'خدمات الاستقبال والمساعدة، صالات VIP، والتأشيرات لها سياسات استرداد محددة. يرجى الاتصال بنا للحصول على التفاصيل.'
                : 'Meet & Assist services, VIP lounges, and visas have specific refund policies. Please contact us for details.'}
            </p>

            <h2>{isArabic ? '5. عملية الاسترداد' : '5. Refund Process'}</h2>
            <p>
              {isArabic
                ? 'لطلب استرداد الأموال:'
                : 'To request a refund:'}
            </p>
            <ul>
              <li>{isArabic ? 'اتصل بنا في أقرب وقت ممكن' : 'Contact us as soon as possible'}</li>
              <li>{isArabic ? 'قدم تفاصيل الحجز ورقم المرجع' : 'Provide booking details and reference number'}</li>
              <li>{isArabic ? 'سنقوم بمراجعة طلبك ومعالجته وفقًا للشروط المطبقة' : 'We will review your request and process it according to applicable terms'}</li>
              <li>{isArabic ? 'يستغرق الاسترداد عادة 7-14 يوم عمل' : 'Refunds typically take 7-14 business days'}</li>
            </ul>

            <h2>{isArabic ? '6. الظروف الخاصة' : '6. Special Circumstances'}</h2>
            <p>
              {isArabic
                ? 'في حالة الظروف الاستثنائية مثل حالات الطوارئ الطبية أو القيود الحكومية، سننظر في كل حالة على حدة ونقدم حلولاً معقولة.'
                : 'In case of exceptional circumstances such as medical emergencies or government restrictions, we will consider each case individually and provide reasonable solutions.'}
            </p>

            <h2>{isArabic ? '7. رسوم الخدمة' : '7. Service Fees'}</h2>
            <p>
              {isArabic
                ? 'رسوم الخدمة الإدارية قد لا تكون قابلة للاسترداد حتى في حالة الإلغاء الكامل من مقدمي الخدمات.'
                : 'Administrative service fees may be non-refundable even in case of full cancellation by service providers.'}
            </p>

            <h2>{isArabic ? '8. الاتصال بنا' : '8. Contact Us'}</h2>
            <p>
              {isArabic
                ? 'للأسئلة حول سياسة الاسترداد أو لطلب استرداد الأموال:'
                : 'For questions about our refund policy or to request a refund:'}
            </p>
            <p>
              Email: info@houseianabooking.com<br />
              WhatsApp: +974 30424433<br />
              {isArabic ? 'ساعات العمل: الأحد - الخميس، 9:00 ص - 6:00 م' : 'Business Hours: Sunday - Thursday, 9:00 AM - 6:00 PM'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
