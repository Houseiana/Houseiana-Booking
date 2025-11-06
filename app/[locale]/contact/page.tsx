'use client';

import { Locale } from '@/lib/i18n/config';
import { Mail, MapPin, MessageCircle, Send, Clock, Globe } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const isArabic = params.locale === 'ar';
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+974',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'contact',
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+974',
          phone: '',
          subject: '',
          message: '',
        });
        // Auto-hide success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Modern Design */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-secondary py-20 text-white">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium">
              <MessageCircle className="h-4 w-4" />
              <span>{isArabic ? 'دعم على مدار الساعة' : '24/7 Support Available'}</span>
            </div>

            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              {isArabic ? 'تواصل معنا' : 'Get in Touch'}
            </h1>

            <p className="text-lg md:text-xl text-cyan-50 leading-relaxed">
              {isArabic
                ? 'فريقنا جاهز لمساعدتك في جميع احتياجات السفر الخاصة بك. تواصل معنا عبر أي قناة تفضلها'
                : 'Our team is ready to assist you with all your travel needs. Reach out to us through any channel you prefer'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards with Enhanced Design */}
      <section className="py-16 -mt-12 relative z-20">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: MessageCircle,
                title: isArabic ? 'واتساب' : 'WhatsApp',
                info: '+974 30424433',
                link: 'https://wa.me/97430424433',
                description: isArabic ? 'دردشة فورية' : 'Instant chat',
                gradient: 'from-green-500 to-emerald-500',
              },
              {
                icon: Mail,
                title: isArabic ? 'البريد الإلكتروني' : 'Email',
                info: 'info@houseianabooking.com',
                link: 'mailto:info@houseianabooking.com',
                description: isArabic ? 'راسلنا عبر البريد' : 'Email us',
                gradient: 'from-purple-500 to-pink-500',
              },
              {
                icon: MapPin,
                title: isArabic ? 'العنوان' : 'Address',
                info: isArabic
                  ? 'لوسيل، برج مارينا التوأم'
                  : 'Lusail, Marina Twin Tower',
                link: '#',
                description: isArabic ? 'زورنا' : 'Visit us',
                gradient: 'from-orange-500 to-red-500',
                fullAddress: isArabic
                  ? 'مبنى 34، الطابق 13B، مكتب 21، الدوحة، قطر'
                  : 'Building 34, 13B Floor, Office 21, Doha, Qatar',
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

                <div className="relative">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${contact.gradient} text-white shadow-md group-hover:shadow-lg transition-shadow`}>
                    <contact.icon className="h-7 w-7" />
                  </div>

                  <h3 className="mb-2 text-lg font-bold text-gray-900">{contact.title}</h3>
                  <p className="text-sm font-medium text-gray-600 mb-1">{contact.info}</p>
                  {contact.fullAddress && (
                    <p className="text-xs text-gray-500 mt-2">{contact.fullAddress}</p>
                  )}
                  <p className="mt-3 text-xs font-semibold text-primary">{contact.description} →</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form with Modern Layout */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Left Column - Additional Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-8">
                <h2 className="mb-4 text-3xl font-bold text-gray-900">
                  {isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}
                </h2>
                <p className="mb-8 text-gray-600 leading-relaxed">
                  {isArabic
                    ? 'املأ النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن. نحن نقدر استفساراتك ونسعى جاهدين للرد خلال 24 ساعة.'
                    : 'Fill out the form and our team will get back to you as soon as possible. We value your inquiries and strive to respond within 24 hours.'}
                </p>

                {/* Quick Info */}
                <div className="space-y-4">
                  <div className="flex items-start gap-4 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isArabic ? 'ساعات العمل' : 'Business Hours'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isArabic ? 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً' : 'Sunday - Thursday: 9:00 AM - 6:00 PM'}
                      </p>
                      <p className="text-sm text-gray-600">
                        {isArabic ? 'الجمعة - السبت: مغلق' : 'Friday - Saturday: Closed'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-xl bg-gradient-to-br from-secondary/5 to-primary/5 p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                      <Globe className="h-5 w-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {isArabic ? 'دعم متعدد اللغات' : 'Multilingual Support'}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {isArabic ? 'نتحدث العربية والإنجليزية' : 'We speak Arabic and English'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl bg-white p-8 shadow-xl border border-gray-100">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {isArabic ? 'الاسم الأول' : 'First Name'}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        placeholder={isArabic ? 'أدخل اسمك الأول' : 'Enter your first name'}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {isArabic ? 'اسم العائلة' : 'Last Name'}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        placeholder={isArabic ? 'أدخل اسم العائلة' : 'Enter your last name'}
                        required
                      />
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {isArabic ? 'البريد الإلكتروني' : 'Email Address'}
                        <span className="text-red-500 ml-1">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                        placeholder={isArabic ? 'your.email@example.com' : 'your.email@example.com'}
                        required
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        {isArabic ? 'رقم الهاتف' : 'Phone Number'}
                      </label>
                      <div className="flex gap-2">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-32 rounded-xl border-2 border-gray-200 px-3 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 text-sm"
                        >
                          <option value="+93">🇦🇫 +93</option>
                          <option value="+355">🇦🇱 +355</option>
                          <option value="+213">🇩🇿 +213</option>
                          <option value="+376">🇦🇩 +376</option>
                          <option value="+244">🇦🇴 +244</option>
                          <option value="+54">🇦🇷 +54</option>
                          <option value="+374">🇦🇲 +374</option>
                          <option value="+61">🇦🇺 +61</option>
                          <option value="+43">🇦🇹 +43</option>
                          <option value="+994">🇦🇿 +994</option>
                          <option value="+973">🇧🇭 +973</option>
                          <option value="+880">🇧🇩 +880</option>
                          <option value="+375">🇧🇾 +375</option>
                          <option value="+32">🇧🇪 +32</option>
                          <option value="+501">🇧🇿 +501</option>
                          <option value="+229">🇧🇯 +229</option>
                          <option value="+975">🇧🇹 +975</option>
                          <option value="+591">🇧🇴 +591</option>
                          <option value="+387">🇧🇦 +387</option>
                          <option value="+267">🇧🇼 +267</option>
                          <option value="+55">🇧🇷 +55</option>
                          <option value="+673">🇧🇳 +673</option>
                          <option value="+359">🇧🇬 +359</option>
                          <option value="+226">🇧🇫 +226</option>
                          <option value="+257">🇧🇮 +257</option>
                          <option value="+855">🇰🇭 +855</option>
                          <option value="+237">🇨🇲 +237</option>
                          <option value="+1">🇨🇦 +1</option>
                          <option value="+238">🇨🇻 +238</option>
                          <option value="+236">🇨🇫 +236</option>
                          <option value="+235">🇹🇩 +235</option>
                          <option value="+56">🇨🇱 +56</option>
                          <option value="+86">🇨🇳 +86</option>
                          <option value="+57">🇨🇴 +57</option>
                          <option value="+269">🇰🇲 +269</option>
                          <option value="+506">🇨🇷 +506</option>
                          <option value="+385">🇭🇷 +385</option>
                          <option value="+53">🇨🇺 +53</option>
                          <option value="+357">🇨🇾 +357</option>
                          <option value="+420">🇨🇿 +420</option>
                          <option value="+243">🇨🇩 +243</option>
                          <option value="+45">🇩🇰 +45</option>
                          <option value="+253">🇩🇯 +253</option>
                          <option value="+593">🇪🇨 +593</option>
                          <option value="+20">🇪🇬 +20</option>
                          <option value="+503">🇸🇻 +503</option>
                          <option value="+240">🇬🇶 +240</option>
                          <option value="+291">🇪🇷 +291</option>
                          <option value="+372">🇪🇪 +372</option>
                          <option value="+251">🇪🇹 +251</option>
                          <option value="+679">🇫🇯 +679</option>
                          <option value="+358">🇫🇮 +358</option>
                          <option value="+33">🇫🇷 +33</option>
                          <option value="+241">🇬🇦 +241</option>
                          <option value="+220">🇬🇲 +220</option>
                          <option value="+995">🇬🇪 +995</option>
                          <option value="+49">🇩🇪 +49</option>
                          <option value="+233">🇬🇭 +233</option>
                          <option value="+30">🇬🇷 +30</option>
                          <option value="+502">🇬🇹 +502</option>
                          <option value="+224">🇬🇳 +224</option>
                          <option value="+245">🇬🇼 +245</option>
                          <option value="+592">🇬🇾 +592</option>
                          <option value="+509">🇭🇹 +509</option>
                          <option value="+504">🇭🇳 +504</option>
                          <option value="+852">🇭🇰 +852</option>
                          <option value="+36">🇭🇺 +36</option>
                          <option value="+354">🇮🇸 +354</option>
                          <option value="+91">🇮🇳 +91</option>
                          <option value="+62">🇮🇩 +62</option>
                          <option value="+98">🇮🇷 +98</option>
                          <option value="+964">🇮🇶 +964</option>
                          <option value="+353">🇮🇪 +353</option>
                          <option value="+972">🇮🇱 +972</option>
                          <option value="+39">🇮🇹 +39</option>
                          <option value="+225">🇨🇮 +225</option>
                          <option value="+81">🇯🇵 +81</option>
                          <option value="+962">🇯🇴 +962</option>
                          <option value="+7">🇰🇿 +7</option>
                          <option value="+254">🇰🇪 +254</option>
                          <option value="+965">🇰🇼 +965</option>
                          <option value="+996">🇰🇬 +996</option>
                          <option value="+856">🇱🇦 +856</option>
                          <option value="+371">🇱🇻 +371</option>
                          <option value="+961">🇱🇧 +961</option>
                          <option value="+266">🇱🇸 +266</option>
                          <option value="+231">🇱🇷 +231</option>
                          <option value="+218">🇱🇾 +218</option>
                          <option value="+423">🇱🇮 +423</option>
                          <option value="+370">🇱🇹 +370</option>
                          <option value="+352">🇱🇺 +352</option>
                          <option value="+853">🇲🇴 +853</option>
                          <option value="+389">🇲🇰 +389</option>
                          <option value="+261">🇲🇬 +261</option>
                          <option value="+265">🇲🇼 +265</option>
                          <option value="+60">🇲🇾 +60</option>
                          <option value="+960">🇲🇻 +960</option>
                          <option value="+223">🇲🇱 +223</option>
                          <option value="+356">🇲🇹 +356</option>
                          <option value="+222">🇲🇷 +222</option>
                          <option value="+230">🇲🇺 +230</option>
                          <option value="+52">🇲🇽 +52</option>
                          <option value="+373">🇲🇩 +373</option>
                          <option value="+377">🇲🇨 +377</option>
                          <option value="+976">🇲🇳 +976</option>
                          <option value="+382">🇲🇪 +382</option>
                          <option value="+212">🇲🇦 +212</option>
                          <option value="+258">🇲🇿 +258</option>
                          <option value="+95">🇲🇲 +95</option>
                          <option value="+264">🇳🇦 +264</option>
                          <option value="+977">🇳🇵 +977</option>
                          <option value="+31">🇳🇱 +31</option>
                          <option value="+64">🇳🇿 +64</option>
                          <option value="+505">🇳🇮 +505</option>
                          <option value="+227">🇳🇪 +227</option>
                          <option value="+234">🇳🇬 +234</option>
                          <option value="+850">🇰🇵 +850</option>
                          <option value="+47">🇳🇴 +47</option>
                          <option value="+968">🇴🇲 +968</option>
                          <option value="+92">🇵🇰 +92</option>
                          <option value="+970">🇵🇸 +970</option>
                          <option value="+507">🇵🇦 +507</option>
                          <option value="+675">🇵🇬 +675</option>
                          <option value="+595">🇵🇾 +595</option>
                          <option value="+51">🇵🇪 +51</option>
                          <option value="+63">🇵🇭 +63</option>
                          <option value="+48">🇵🇱 +48</option>
                          <option value="+351">🇵🇹 +351</option>
                          <option value="+974">🇶🇦 +974</option>
                          <option value="+242">🇨🇬 +242</option>
                          <option value="+40">🇷🇴 +40</option>
                          <option value="+7">🇷🇺 +7</option>
                          <option value="+250">🇷🇼 +250</option>
                          <option value="+966">🇸🇦 +966</option>
                          <option value="+221">🇸🇳 +221</option>
                          <option value="+381">🇷🇸 +381</option>
                          <option value="+248">🇸🇨 +248</option>
                          <option value="+232">🇸🇱 +232</option>
                          <option value="+65">🇸🇬 +65</option>
                          <option value="+421">🇸🇰 +421</option>
                          <option value="+386">🇸🇮 +386</option>
                          <option value="+677">🇸🇧 +677</option>
                          <option value="+252">🇸🇴 +252</option>
                          <option value="+27">🇿🇦 +27</option>
                          <option value="+82">🇰🇷 +82</option>
                          <option value="+211">🇸🇸 +211</option>
                          <option value="+34">🇪🇸 +34</option>
                          <option value="+94">🇱🇰 +94</option>
                          <option value="+249">🇸🇩 +249</option>
                          <option value="+597">🇸🇷 +597</option>
                          <option value="+268">🇸🇿 +268</option>
                          <option value="+46">🇸🇪 +46</option>
                          <option value="+41">🇨🇭 +41</option>
                          <option value="+963">🇸🇾 +963</option>
                          <option value="+886">🇹🇼 +886</option>
                          <option value="+992">🇹🇯 +992</option>
                          <option value="+255">🇹🇿 +255</option>
                          <option value="+66">🇹🇭 +66</option>
                          <option value="+228">🇹🇬 +228</option>
                          <option value="+216">🇹🇳 +216</option>
                          <option value="+90">🇹🇷 +90</option>
                          <option value="+993">🇹🇲 +993</option>
                          <option value="+256">🇺🇬 +256</option>
                          <option value="+380">🇺🇦 +380</option>
                          <option value="+971">🇦🇪 +971</option>
                          <option value="+44">🇬🇧 +44</option>
                          <option value="+1">🇺🇸 +1</option>
                          <option value="+598">🇺🇾 +598</option>
                          <option value="+998">🇺🇿 +998</option>
                          <option value="+58">🇻🇪 +58</option>
                          <option value="+84">🇻🇳 +84</option>
                          <option value="+967">🇾🇪 +967</option>
                          <option value="+260">🇿🇲 +260</option>
                          <option value="+263">🇿🇼 +263</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="flex-1 rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                          placeholder={isArabic ? 'XXXX XXXX' : 'XXXX XXXX'}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      {isArabic ? 'الموضوع' : 'Subject'}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10"
                      required
                    >
                      <option value="">
                        {isArabic ? 'اختر موضوعاً' : 'Select a subject'}
                      </option>
                      <option value="booking">{isArabic ? 'استفسار عن حجز' : 'Booking Inquiry'}</option>
                      <option value="hotel">{isArabic ? 'استفسار عن فندق' : 'Hotel Inquiry'}</option>
                      <option value="flight">{isArabic ? 'استفسار عن رحلة' : 'Flight Inquiry'}</option>
                      <option value="visa">{isArabic ? 'استفسار عن تأشيرة' : 'Visa Inquiry'}</option>
                      <option value="support">{isArabic ? 'دعم فني' : 'Technical Support'}</option>
                      <option value="feedback">{isArabic ? 'ملاحظات' : 'Feedback'}</option>
                      <option value="other">{isArabic ? 'أخرى' : 'Other'}</option>
                    </select>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="mb-2 block text-sm font-semibold text-gray-700">
                      {isArabic ? 'رسالتك' : 'Your Message'}
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 transition-all focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 resize-none"
                      placeholder={isArabic ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      required
                    />
                  </div>

                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="rounded-xl bg-green-50 border-2 border-green-500 p-4 text-center">
                      <p className="text-green-700 font-semibold">
                        {isArabic ? '✓ تم إرسال رسالتك بنجاح!' : '✓ Message sent successfully!'}
                      </p>
                      <p className="text-sm text-green-600 mt-1">
                        {isArabic ? 'سنرد عليك قريباً' : 'We\'ll get back to you soon'}
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="rounded-xl bg-red-50 border-2 border-red-500 p-4 text-center">
                      <p className="text-red-700 font-semibold">
                        {isArabic ? '✗ فشل إرسال الرسالة' : '✗ Failed to send message'}
                      </p>
                      <p className="text-sm text-red-600 mt-1">
                        {isArabic ? 'يرجى المحاولة مرة أخرى' : 'Please try again'}
                      </p>
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-4 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span>{isArabic ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>{isArabic ? 'إرسال الرسالة' : 'Send Message'}</span>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    {isArabic
                      ? 'بإرسال هذا النموذج، فإنك توافق على سياسة الخصوصية الخاصة بنا'
                      : 'By submitting this form, you agree to our privacy policy'}
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map or Additional CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary text-white">
        <div className="container-custom text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {isArabic ? 'هل تحتاج إلى مساعدة فورية؟' : 'Need Immediate Assistance?'}
          </h2>
          <p className="mb-8 text-lg text-cyan-50">
            {isArabic
              ? 'فريق الدعم الخاص بنا متاح على مدار الساعة طوال أيام الأسبوع عبر WhatsApp'
              : 'Our support team is available 24/7 via WhatsApp'}
          </p>
          <a
            href="https://wa.me/97430424433"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-primary shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <MessageCircle className="h-6 w-6" />
            <span>{isArabic ? 'تحدث معنا الآن' : 'Chat with Us Now'}</span>
          </a>
        </div>
      </section>
    </div>
  );
}
