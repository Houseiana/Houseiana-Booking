'use client';

import { Locale } from '@/lib/i18n/config';
import { ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: isArabic ? 'حجوزات الفنادق' : 'Hotel Bookings',
      questions: [
        {
          q: isArabic ? 'كيف يمكنني حجز فندق؟' : 'How do I book a hotel?',
          a: isArabic
            ? 'يمكنك حجز فندق من خلال نموذج البحث في صفحتنا الرئيسية، أو الاتصال بنا مباشرة عبر WhatsApp أو البريد الإلكتروني. سيساعدك فريقنا في العثور على أفضل خيار يناسب احتياجاتك وميزانيتك.'
            : 'You can book a hotel through our search form on the homepage, or contact us directly via WhatsApp or email. Our team will help you find the best option that fits your needs and budget.',
        },
        {
          q: isArabic ? 'هل يمكنني إلغاء أو تعديل حجزي؟' : 'Can I cancel or modify my booking?',
          a: isArabic
            ? 'نعم، سياسات الإلغاء والتعديل تعتمد على الفندق ونوع الحجز. اتصل بنا في أقرب وقت ممكن وسنساعدك في معالجة طلبك وفقًا للشروط.'
            : 'Yes, cancellation and modification policies depend on the hotel and booking type. Contact us as soon as possible and we will help you process your request according to the terms.',
        },
        {
          q: isArabic ? 'هل الأسعار تشمل جميع الرسوم؟' : 'Do prices include all fees?',
          a: isArabic
            ? 'نحن نعرض الأسعار النهائية بشفافية. سيتم إعلامك بأي رسوم إضافية مثل ضرائب المدينة أو رسوم المنتجع قبل تأكيد الحجز.'
            : 'We display final prices transparently. Any additional fees such as city taxes or resort fees will be communicated to you before confirming your booking.',
        },
      ],
    },
    {
      category: isArabic ? 'رحلات الطيران' : 'Flight Bookings',
      questions: [
        {
          q: isArabic ? 'هل تساعدون في حجز الرحلات؟' : 'Do you help with flight bookings?',
          a: isArabic
            ? 'نعم، نقدم مساعدة في حجز الرحلات الجوية لجميع شركات الطيران الكبرى. سنساعدك في العثور على أفضل الأسعار والأوقات المناسبة لرحلتك.'
            : 'Yes, we provide flight booking assistance for all major airlines. We will help you find the best prices and convenient times for your trip.',
        },
        {
          q: isArabic ? 'هل يمكنني حجز رحلات متعددة المدن؟' : 'Can I book multi-city flights?',
          a: isArabic
            ? 'بالتأكيد! نحن متخصصون في ترتيبات السفر المعقدة بما في ذلك الرحلات متعددة المدن، والرحلات ذات الوجهتين، والمسارات المخصصة.'
            : 'Absolutely! We specialize in complex travel arrangements including multi-city flights, open-jaw tickets, and custom itineraries.',
        },
      ],
    },
    {
      category: isArabic ? 'خدمات الاستقبال والمساعدة' : 'Meet & Assist Services',
      questions: [
        {
          q: isArabic ? 'ما هي خدمة الاستقبال والمساعدة؟' : 'What is Meet & Assist service?',
          a: isArabic
            ? 'خدمة الاستقبال والمساعدة توفر لك مساعدة شخصية في المطار، بما في ذلك المساعدة في إجراءات الهجرة، استلام الأمتعة، والنقل السلس عبر المطار.'
            : 'Meet & Assist service provides you with personal assistance at the airport, including help with immigration procedures, baggage collection, and smooth transit through the airport.',
        },
        {
          q: isArabic ? 'في أي مطارات تتوفر هذه الخدمة؟' : 'At which airports is this service available?',
          a: isArabic
            ? 'نقدم خدمات الاستقبال والمساعدة في معظم المطارات الدولية الكبرى حول العالم. اتصل بنا للتحقق من التوفر في وجهتك المحددة.'
            : 'We offer Meet & Assist services at most major international airports worldwide. Contact us to verify availability at your specific destination.',
        },
      ],
    },
    {
      category: isArabic ? 'التأشيرات' : 'Visa Services',
      questions: [
        {
          q: isArabic ? 'هل تساعدون في طلبات التأشيرة؟' : 'Do you help with visa applications?',
          a: isArabic
            ? 'نعم، نقدم دعمًا شاملاً لطلبات التأشيرة لجميع الوجهات. سنرشدك خلال العملية ونساعدك في إعداد المستندات المطلوبة.'
            : 'Yes, we provide comprehensive visa application support for all destinations. We will guide you through the process and help you prepare the required documents.',
        },
        {
          q: isArabic ? 'كم من الوقت يستغرق معالجة التأشيرة؟' : 'How long does visa processing take?',
          a: isArabic
            ? 'وقت معالجة التأشيرة يختلف حسب البلد ونوع التأشيرة. عادة ما يستغرق من 3-15 يوم عمل. نوصي بالتقديم قبل تاريخ السفر بوقت كاف.'
            : 'Visa processing time varies by country and visa type. It typically takes 3-15 business days. We recommend applying well in advance of your travel date.',
        },
      ],
    },
    {
      category: isArabic ? 'الدفع والفواتير' : 'Payment & Billing',
      questions: [
        {
          q: isArabic ? 'ما هي طرق الدفع المتاحة؟' : 'What payment methods do you accept?',
          a: isArabic
            ? 'نقبل جميع بطاقات الائتمان والخصم الرئيسية، التحويلات البنكية، والدفع عبر الإنترنت. للحجوزات الكبيرة، نقدم أيضًا خطط دفع مرنة.'
            : 'We accept all major credit and debit cards, bank transfers, and online payment methods. For large bookings, we also offer flexible payment plans.',
        },
        {
          q: isArabic ? 'متى يتم خصم المبلغ من حسابي؟' : 'When will I be charged?',
          a: isArabic
            ? 'سياسة الدفع تعتمد على نوع الخدمة. بعض الحجوزات تتطلب دفعة مقدمة، بينما يتم خصم البعض الآخر عند تقديم الخدمة. سنوضح شروط الدفع قبل التأكيد.'
            : 'Payment policy depends on the service type. Some bookings require advance payment, while others are charged at service delivery. We will clarify payment terms before confirmation.',
        },
      ],
    },
  ];

  const filteredFAQs = faqs
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {isArabic ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
            </h1>
            <p className="text-lg md:text-xl text-cyan-50 leading-relaxed">
              {isArabic
                ? 'ابحث عن إجابات للأسئلة الأكثر شيوعًا حول خدماتنا'
                : 'Find answers to the most common questions about our services'}
            </p>

            {/* Search Bar */}
            <div className="mt-8 mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={isArabic ? 'ابحث في الأسئلة الشائعة...' : 'Search FAQs...'}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-8">
                {filteredFAQs.map((category, categoryIndex) => (
                  <div key={categoryIndex}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded" />
                      {category.category}
                    </h2>

                    <div className="space-y-3">
                      {category.questions.map((faq, index) => {
                        const globalIndex = categoryIndex * 100 + index;
                        const isOpen = openIndex === globalIndex;

                        return (
                          <div
                            key={index}
                            className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all hover:shadow-lg"
                          >
                            <button
                              onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                            >
                              <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                              <ChevronDown
                                className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                                  isOpen ? 'rotate-180' : ''
                                }`}
                              />
                            </button>

                            <div
                              className={`transition-all duration-300 ease-in-out ${
                                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              } overflow-hidden`}
                            >
                              <div className="px-6 pb-4 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                {faq.a}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  {isArabic ? 'لم يتم العثور على نتائج' : 'No results found'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {isArabic ? 'لم تجد إجابة لسؤالك؟' : "Didn't find your answer?"}
          </h2>
          <p className="mb-8 text-lg text-cyan-50">
            {isArabic
              ? 'فريق الدعم الخاص بنا جاهز لمساعدتك'
              : 'Our support team is ready to help you'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`/${params.locale}/contact`}
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
            >
              {isArabic ? 'تواصل معنا' : 'Contact Us'}
            </a>
            <a
              href="https://wa.me/97430424433"
              className="inline-flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-sm border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white/20 transition-all"
            >
              {isArabic ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
