import { Locale } from '@/lib/i18n/config';
import { Award, Users, Globe, Lock, Sparkles, Shield, TrendingUp, Clock } from 'lucide-react';

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen bg-pearl">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 py-24 text-white overflow-hidden">
        {/* Luxury Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm rounded-full border border-gold/30 mb-8 shadow-gold">
              <Sparkles className="h-5 w-5 text-gold-300" />
              <span className="text-sm font-semibold text-pearl tracking-wide uppercase">
                {isArabic ? 'إعادة تعريف السفر الفاخر' : 'Redefining Luxury Travel'}
              </span>
            </div>

            <h1 className="mb-6 text-5xl md:text-6xl lg:text-display-lg font-display font-bold leading-tight">
              <span className="block mb-2">
                {isArabic ? 'حول حجوزات هوسيانا' : 'About Houseiana Booking'}
              </span>
              <span className="block bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                {isArabic ? 'إعادة تعريف السفر الفاخر' : 'Redefining Luxury Travel'}
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
                {isArabic ? 'أساسنا' : 'Our Foundation'}
              </h2>
              <p className="text-xl text-gold-600 font-semibold">
                {isArabic ? 'تأسست لرفع مستوى رحلتك' : 'Established to Elevate Your Journey'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg">
                {isArabic
                  ? 'منذ عام 2024، عملت حجوزات هوسيانا كشريك سفر مخصص لأولئك الذين يطالبون بالتميز والسرية والتنفيذ السلس. نحن لسنا مجرد منصة حجز؛ نحن كونسيرج شخصي لك، نضمن أن كل جانب من جوانب سفرك مصمم خصيصاً وفقاً لمعاييرك الدقيقة.'
                  : 'Since 2024, Houseiana Booking has operated as a dedicated travel partner for those who demand excellence, discretion, and effortless execution. We are not merely a booking platform; we are your personal concierge, ensuring every aspect of your travel is curated to your precise standards.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
                {isArabic ? 'مهمتنا' : 'Our Mission'}
              </h2>
              <p className="text-xl text-gold-600 font-semibold">
                {isArabic ? 'أبعد من الحجز' : 'Beyond Booking'}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury border border-gold/20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {isArabic
                  ? 'مهمتنا هي تحويل لوجستيات السفر إلى تجربة سلسة وخالية من التوتر. نحن متخصصون في تقديم مجموعة شاملة من الخدمات الحصرية التي تزيل التعقيد من السفر الدولي.'
                  : 'Our mission is to transform travel logistics into a seamless, stress-free experience. We specialize in providing a comprehensive suite of exclusive services that remove the complexity from international travel.'}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {[
                  { label: isArabic ? 'مقرات الفنادق الفاخرة' : 'Premier Hotel Residences' },
                  { label: isArabic ? 'صالات المطار VIP الحصرية' : 'Exclusive VIP Airport Lounges' },
                  { label: isArabic ? 'خدمات الاستقبال والمساعدة الخالية من العيوب' : 'Flawless Meet & Assist Services' },
                  { label: isArabic ? 'إدارة مسارات الرحلات المعقدة' : 'Complex Flight Itineraries' },
                  { label: isArabic ? 'مساعدة التأشيرات الخبيرة' : 'Expert Visa Assistance' },
                  { label: isArabic ? 'دعم شخصي على مدار الساعة' : '24/7 Personal Support' },
                ].map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-gold/5 border border-gold/10">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-gray-800 font-medium">{service.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'التزاماتنا الثابتة' : 'Our Unwavering Commitments'}
            </h2>
            <p className="text-xl text-gray-600">
              {isArabic ? 'قيمنا' : 'Our Values'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {[
              {
                icon: Award,
                title: isArabic ? 'التميز، مُقدَّم' : 'Excellence, Delivered',
                desc: isArabic
                  ? 'نحافظ على أعلى المعايير في كل برنامج رحلة وشريك وحل نقدمه'
                  : 'We uphold the highest standards in every itinerary, partner, and solution we present',
              },
              {
                icon: Users,
                title: isArabic ? 'خدمة استباقية' : 'Anticipatory Service',
                desc: isArabic
                  ? 'رضاك هو تركيزنا الوحيد. نتوقع الاحتياجات ونحل التحديات بشكل استباقي'
                  : 'Your satisfaction is our singular focus. We anticipate needs and proactively resolve challenges',
              },
              {
                icon: Globe,
                title: isArabic ? 'الوصول العالمي' : 'Global Access',
                desc: isArabic
                  ? 'نربطك بالوجهات الأكثر رغبة وسرية في العالم'
                  : 'Connecting you with the world\'s most desired and discreet destinations',
              },
              {
                icon: Lock,
                title: isArabic ? 'السرية الشخصية' : 'Personalized Discretion',
                desc: isArabic
                  ? 'تتم إدارة كل علاقة عميل باهتمام مطلق وسرية'
                  : 'Every client relationship is managed with absolute attention and confidentiality',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-soft hover:shadow-luxury transition-all duration-500 border border-gray-100 hover:border-gold/30"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 group-hover:scale-110 transition-transform duration-500">
                  <value.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-midnight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats - Our Global Impact */}
      <section className="section bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {isArabic ? 'تأثيرنا ووصولنا العالمي' : 'Our Global Impact & Reach'}
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {[
              {
                number: '500+',
                label: isArabic ? 'شراكات فندقية نخبة' : 'Elite Hotel Partnerships',
                icon: Award
              },
              {
                number: '50+',
                label: isArabic ? 'وجهات منسقة' : 'Curated Destinations',
                icon: Globe
              },
              {
                number: '24/7',
                label: isArabic ? 'دعم كونسيرج مخصص' : 'Dedicated Concierge Support',
                icon: Clock
              },
              {
                number: '100%',
                label: isArabic ? 'التركيز على رضا العملاء' : 'Focus on Client Satisfaction',
                icon: TrendingUp
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/20 border border-gold/30 group-hover:scale-110 transition-transform duration-500">
                    <stat.icon className="h-8 w-8 text-gold-300" />
                  </div>
                </div>
                <div className="mb-3 text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-pearl-200 font-medium text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Houseiana Team */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
                {isArabic ? 'فريق هوسيانا' : 'The Houseiana Team'}
              </h2>
              <p className="text-xl text-gold-600 font-semibold">
                {isArabic ? 'خبراؤك الموثوقون' : 'Your Trusted Experts'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-pearl to-gray-50 rounded-3xl p-8 md:p-12 shadow-luxury border border-gold/20">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {isArabic
                  ? 'وراء كل رحلة منفذة بشكل لا تشوبه شائبة يوجد فريق من محترفي السفر المتمرسين. يجلب خبراؤنا سنوات من الخبرة الصناعية عالية المستوى وشغف بالخدمة الشخصية.'
                  : 'Behind every flawlessly executed trip is a team of seasoned travel professionals. Our experts bring years of high-level industry experience and a passion for personalized service.'}
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'نعمل بالتزام، مما يضمن أن الخبرة التي نمتلكها تترجم مباشرة إلى الرحلة التي لا تُنسى والمبسطة التي تستحقها.'
                  : 'We operate with commitment, ensuring the expertise we possess translates directly into the unforgettable, streamlined journey you deserve.'}
              </p>

              {/* Trust Indicators */}
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                {[
                  {
                    icon: Shield,
                    label: isArabic ? 'محترفون متمرسون' : 'Seasoned Professionals',
                  },
                  {
                    icon: Lock,
                    label: isArabic ? 'خدمة سرية' : 'Discreet Service',
                  },
                  {
                    icon: Sparkles,
                    label: isArabic ? 'التزام بالتميز' : 'Commitment to Excellence',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-3 p-4 rounded-xl bg-white/80 border border-gold/10">
                    <item.icon className="h-6 w-6 text-gold-600" />
                    <span className="text-sm font-semibold text-gray-800 text-center">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
