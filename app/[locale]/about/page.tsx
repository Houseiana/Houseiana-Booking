import { Locale } from '@/lib/i18n/config';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-primary py-16 text-white">
        <div className="container-custom text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {isArabic ? 'من نحن' : 'About Houseiana Booking'}
          </h1>
          <p className="mx-auto max-w-2xl text-lg opacity-90">
            {isArabic
              ? 'شريكك الموثوق للسفر منذ عام 2020'
              : 'Your Trusted Travel Partner Since 2020'}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold">
              {isArabic ? 'مهمتنا' : 'Our Mission'}
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              {isArabic
                ? 'في هوسيانا بوكينج، نسعى جاهدين لجعل السفر سلساً وخالياً من الإجهاد لعملائنا. نحن متخصصون في تقديم خدمات سفر شاملة بما في ذلك حجوزات الفنادق، صالات المطار VIP، خدمات الاستقبال والمساعدة، مساعدة حجز الرحلات، ودعم تأشيرات الخبراء — كل ذلك مع الاهتمام الشخصي ودعم على مدار الساعة.'
                : 'At Houseiana Booking, we strive to make travel seamless and stress-free for our clients. We specialize in providing comprehensive travel services including hotel bookings, VIP airport lounges, meet & assist services, flight booking assistance, and expert visa support — all with personalized attention and 24/7 support.'}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <h2 className="mb-12 text-center text-3xl font-bold">
            {isArabic ? 'قيمنا' : 'Our Values'}
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Award,
                title: isArabic ? 'التميز' : 'Excellence',
                desc: isArabic
                  ? 'نسعى إلى التميز في كل خدمة نقدمها'
                  : 'We strive for excellence in every service we deliver',
              },
              {
                icon: Users,
                title: isArabic ? 'نهج يركز على العملاء' : 'Customer-First Approach',
                desc: isArabic
                  ? 'احتياجاتك ورضاك هو أولويتنا القصوى'
                  : 'Your needs and satisfaction are our top priority',
              },
              {
                icon: Globe,
                title: isArabic ? 'الوصول العالمي' : 'Global Reach',
                desc: isArabic
                  ? 'نربطك بالوجهات حول العالم'
                  : 'We connect you with destinations worldwide',
              },
              {
                icon: Heart,
                title: isArabic ? 'الرعاية الشخصية' : 'Personal Care',
                desc: isArabic
                  ? 'كل عميل يتلقى الاهتمام الشخصي'
                  : 'Every client receives personalized attention',
              },
            ].map((value, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-light">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-primary-dark text-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { number: '12,000+', label: isArabic ? 'مسافر سعيد' : 'Happy Travelers' },
              { number: '500+', label: isArabic ? 'شراكات فندقية' : 'Hotel Partners' },
              { number: '50+', label: isArabic ? 'الوجهات' : 'Destinations' },
              { number: '24/7', label: isArabic ? 'دعم العملاء' : 'Customer Support' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-gold">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white">
        <div className="container-custom text-center">
          <h2 className="mb-6 text-3xl font-bold">
            {isArabic ? 'فريقنا' : 'Our Team'}
          </h2>
          <p className="mx-auto max-w-2xl text-gray-700">
            {isArabic
              ? 'فريقنا من متخصصي السفر ذوي الخبرة مكرس لتقديم خدمة استثنائية. مع سنوات من الخبرة في صناعة السفر، نحن ملتزمون بجعل رحلتك لا تنسى.'
              : 'Our team of experienced travel professionals is dedicated to providing exceptional service. With years of experience in the travel industry, we are committed to making your journey unforgettable.'}
          </p>
        </div>
      </section>
    </div>
  );
}
