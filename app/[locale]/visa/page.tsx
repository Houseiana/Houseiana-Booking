'use client';

import { Locale } from '@/lib/i18n/config';
import { FileText, Shield, Clock, Check, Sparkles, Globe, Users, Briefcase, GraduationCap, Heart } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function VisaPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';

  const features = [
    {
      icon: FileText,
      title: isArabic ? 'إرشادات الخبراء' : 'Expert Guidance',
      desc: isArabic ? 'مستشارون تأشيرات محترفون متخصصون' : 'Specialized professional visa consultants',
    },
    {
      icon: Clock,
      title: isArabic ? 'معالجة سريعة' : 'Fast Processing',
      desc: isArabic ? 'طلبات سريعة وفعالة للتأشيرات' : 'Efficient and expedited visa applications',
    },
    {
      icon: Shield,
      title: isArabic ? 'موثوق وآمن 100%' : '100% Trusted & Secure',
      desc: isArabic ? 'معلوماتك الشخصية محمية بالكامل' : 'Your personal information is fully protected',
    },
    {
      icon: Globe,
      title: isArabic ? 'تأشيرات عالمية' : 'Global Visas',
      desc: isArabic ? 'مساعدة للحصول على تأشيرات جميع الدول' : 'Assistance for visas to all countries',
    },
  ];

  const visaTypes = [
    {
      icon: Users,
      name: isArabic ? 'تأشيرة سياحية' : 'Tourist Visa',
      desc: isArabic ? 'لزيارة الدول للسياحة والترفيه' : 'For visiting countries for tourism and leisure',
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop&q=90',
    },
    {
      icon: Briefcase,
      name: isArabic ? 'تأشيرة عمل' : 'Work Visa',
      desc: isArabic ? 'للعمل والتوظيف في الخارج' : 'For employment and work opportunities abroad',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&q=90',
    },
    {
      icon: GraduationCap,
      name: isArabic ? 'تأشيرة دراسة' : 'Student Visa',
      desc: isArabic ? 'للدراسة والتعليم في الخارج' : 'For studying and education abroad',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&q=90',
    },
    {
      icon: Heart,
      name: isArabic ? 'تأشيرة عائلية' : 'Family Visa',
      desc: isArabic ? 'لم الشمل العائلي والإقامة' : 'For family reunification and residence',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop&q=90',
    },
  ];

  const benefits = [
    isArabic ? 'استشارة مجانية من خبراء التأشيرات' : 'Free consultation with visa experts',
    isArabic ? 'مراجعة كاملة ودقيقة للمستندات' : 'Complete and accurate document review',
    isArabic ? 'متابعة حالة الطلب في الوقت الفعلي' : 'Real-time application status tracking',
    isArabic ? 'دعم كونسيرج شخصي على مدار الساعة' : '24/7 personal concierge support',
    isArabic ? 'فريق من الخبراء المحترفين المتخصصين' : 'Team of specialized professional experts',
    isArabic ? 'خدمة سريعة وموثوقة ومخصصة' : 'Fast, reliable, and personalized service',
  ];

  const process = [
    {
      step: '1',
      title: isArabic ? 'الاستشارة الأولية' : 'Initial Consultation',
      desc: isArabic ? 'نقوم بتقييم احتياجاتك ونقدم إرشادات الخبراء' : 'We assess your needs and provide expert guidance',
    },
    {
      step: '2',
      title: isArabic ? 'تحضير المستندات' : 'Document Preparation',
      desc: isArabic ? 'نساعدك في جمع وإعداد جميع المستندات المطلوبة' : 'We assist in gathering and preparing all required documents',
    },
    {
      step: '3',
      title: isArabic ? 'تقديم الطلب' : 'Application Submission',
      desc: isArabic ? 'نتعامل مع تقديم الطلب بالكامل نيابة عنك' : 'We handle the complete application submission on your behalf',
    },
    {
      step: '4',
      title: isArabic ? 'المتابعة والموافقة' : 'Follow-up & Approval',
      desc: isArabic ? 'نتابع طلبك حتى الموافقة النهائية' : 'We track your application until final approval',
    },
  ];

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
          <div className="mx-auto max-w-4xl text-center">
            {/* Luxury Badge */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-gold/20 to-gold/10 backdrop-blur-sm px-6 py-3 border border-gold/30 shadow-gold">
              <FileText className="h-5 w-5 text-gold-300" />
              <span className="font-semibold text-pearl tracking-wide uppercase text-sm">
                {isArabic ? 'خدمات التأشيرات المتخصصة' : 'Specialized Visa Services'}
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-display font-bold leading-tight md:text-6xl lg:text-7xl">
              <span className="block mb-2">
                {isArabic ? 'مساعدة احترافية' : 'Professional Visa'}
              </span>
              <span className="block bg-gradient-to-r from-gold-200 via-gold to-gold-400 bg-clip-text text-transparent">
                {isArabic ? 'للتأشيرات' : 'Assistance'}
              </span>
            </h1>

            <p className="mb-10 text-xl text-pearl-200/90 leading-relaxed md:text-2xl max-w-3xl mx-auto">
              {isArabic
                ? 'يوفر خبراء التأشيرات المتخصصون لدينا إرشادات شاملة وإدارة لطلبات التأشيرات لأي وجهة. من تأشيرات السياحة إلى تصاريح العمل والدراسة، نضمن عملية سلسة مع أعلى معدلات الموافقة.'
                : 'Our specialized visa experts provide comprehensive guidance and management for visa applications to any destination. From tourist visas to work permits and study visas, we ensure a seamless process with the highest approval rates.'}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/${params.locale}/#visa`}
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-8 py-4 text-lg font-bold text-white shadow-gold hover:shadow-glow transition-all transform hover:scale-105"
              >
                <span>{isArabic ? 'ابدأ طلبك' : 'Start Your Application'}</span>
                <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/97430424433"
                target="_blank"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-500 px-8 py-4 text-lg font-bold text-white shadow-xl hover:shadow-2xl hover:bg-green-600 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>{isArabic ? 'استشارة مجانية' : 'Free Consultation'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Content Section - Why Choose Houseiana for Visa Services */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-6 text-center">
              {isArabic ? 'لماذا تختار هوسيانا لخدمات التأشيرات؟' : 'Why Choose Houseiana for Visa Services?'}
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
              <p className="text-lg">
                {isArabic
                  ? 'في هوسيانا بوكينغ، نحول عملية طلب التأشيرة المعقدة إلى تجربة مباشرة ومريحة. منذ عام 2024، ساعد خبراء التأشيرات المتخصصون لدينا المئات من المسافرين في تأمين التأشيرات لأي وجهة في العالم. نحن نفهم أن كل طلب تأشيرة فريد من نوعه، وأن المستندات المطلوبة والعمليات تختلف بشكل كبير حسب الوجهة والجنسية وغرض السفر.'
                  : 'At Houseiana Booking, we transform the complex visa application process into a straightforward and stress-free experience. Since 2024, our specialized visa experts have helped hundreds of travelers secure visas to any destination worldwide. We understand that every visa application is unique, and required documentation and processes vary significantly based on destination, nationality, and purpose of travel.'}
              </p>
              <p className="text-lg">
                {isArabic
                  ? 'يوفر كونسيرج التأشيرات المخصص لدينا إرشادات شاملة خلال العملية بأكملها - من الاستشارة الأولية وتقييم الأهلية إلى إعداد المستندات، والتقديم، والمتابعة حتى الموافقة. نحن متخصصون في جميع أنواع التأشيرات: السياحية، والعمل، والدراسة، والعائلية، والأعمال، والعبور. شبكتنا الواسعة من الاتصالات القنصلية والفهم العميق لمتطلبات التأشيرات تضمن أعلى معدلات الموافقة.'
                  : 'Our dedicated visa concierge provides comprehensive guidance throughout the entire process—from initial consultation and eligibility assessment to document preparation, submission, and follow-up until approval. We specialize in all visa types: tourist, work, study, family, business, and transit. Our extensive network of consulate connections and deep understanding of visa requirements ensure the highest approval rates.'}
              </p>
              <p className="text-lg">
                {isArabic
                  ? 'ما يميز هوسيانا هو نهجنا الشخصي والاستباقي. نحن لا نملأ النماذج فقط - بل نراجع بدقة كل مستند، ونوفر مراجعة شاملة للطلبات، ونتعامل مع الاتصالات القنصلية نيابة عنك. سواء كنت بحاجة إلى تأشيرة شنغن الأوروبية، أو تأشيرة عمل أمريكية، أو تأشيرة دراسة كندية، أو تصريح إقامة GCC، فإن خبراء التأشيرات لدينا يضمنون أن كل طلب يُقدم بشكل لا تشوبه شائبة.'
                  : 'What distinguishes Houseiana is our personalized and anticipatory approach. We don\'t simply fill out forms—we meticulously review every document, provide comprehensive application reviews, and handle consulate communications on your behalf. Whether you need a European Schengen visa, US work visa, Canadian study visa, or GCC residence permit, our visa experts ensure every application is submitted flawlessly.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'مزايا خدمات التأشيرات لدينا' : 'Our Visa Service Advantages'}
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center rounded-2xl p-8 bg-white border border-gray-100 hover:border-gold/30 shadow-soft hover:shadow-luxury transition-all duration-500"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border border-gold/20 text-gold-600 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-midnight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Process */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'عملية طلب التأشيرة' : 'Our Visa Application Process'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic
                ? 'نجعل الحصول على تأشيرتك سهلاً من خلال عملية واضحة من 4 خطوات'
                : 'We make obtaining your visa easy with a clear 4-step process'}
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="text-center group">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/20 to-gold/10 border-2 border-gold/30 text-3xl font-display font-bold text-gold-600 group-hover:scale-110 transition-transform duration-500 shadow-soft group-hover:shadow-gold">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-display font-bold text-midnight">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visa Types */}
      <section className="section bg-gradient-to-br from-pearl to-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-midnight mb-4">
              {isArabic ? 'أنواع التأشيرات المتاحة' : 'Available Visa Types'}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {isArabic ? 'نساعدك في جميع أنواع التأشيرات' : 'We assist with all types of visas'}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {visaTypes.map((visa, index) => (
              <div key={index} className="group overflow-hidden rounded-2xl bg-white border border-gray-100 hover:border-gold/30 shadow-soft hover:shadow-luxury transition-all duration-500">
                <div className="relative h-48">
                  <Image src={visa.image} alt={visa.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-midnight/30 to-transparent" />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gold/90 to-gold/70 text-white">
                    <visa.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-display font-bold text-midnight">{visa.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{visa.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 items-center max-w-7xl mx-auto">
            <div>
              <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold text-midnight">
                {isArabic ? 'تجربة كونسيرج التأشيرات' : 'The Visa Concierge Experience'}
              </h2>
              <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                {isArabic
                  ? 'نوفر لك تجربة سلسة وسريعة في الحصول على تأشيرتك مع أعلى معدلات النجاح والموافقة'
                  : 'We provide a smooth and fast experience in obtaining your visa with the highest success and approval rates'}
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gold text-white mt-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <p className="text-gray-700 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=1000&fit=crop&q=90"
                  alt="Visa Services"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-6 shadow-luxury border border-gold/20">
                <div className="text-4xl font-display font-bold text-midnight">24/7</div>
                <div className="text-gray-600 font-semibold">{isArabic ? 'دعم التأشيرات' : 'Visa Support'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-midnight via-midnight-800 to-midnight-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-gold/8 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-6 text-4xl md:text-5xl font-display font-bold">
            {isArabic ? 'جاهز لبدء طلب تأشيرتك؟' : 'Ready to Start Your Visa Application?'}
          </h2>
          <p className="mb-10 text-xl text-pearl-200/90 mx-auto max-w-2xl">
            {isArabic
              ? 'دع خبراءنا يساعدوك في الحصول على تأشيرتك بسهولة'
              : 'Let our experts help you obtain your visa with ease'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${params.locale}/#visa`}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 px-10 py-5 text-lg font-bold text-white shadow-gold hover:shadow-glow transition-all transform hover:scale-105"
            >
              <FileText className="h-6 w-6" />
              <span>{isArabic ? 'ابدأ طلبك الآن' : 'Start Application Now'}</span>
            </Link>

            <Link
              href={`/${params.locale}/contact`}
              className="inline-flex items-center justify-center gap-3 rounded-xl border-2 border-gold bg-transparent px-10 py-5 text-lg font-bold text-white hover:bg-gold/10 transition-all backdrop-blur-sm"
            >
              <span>{isArabic ? 'اتصل بخبراء التأشيرات' : 'Contact Visa Experts'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
