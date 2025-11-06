'use client';

import { CheckCircle, X } from 'lucide-react';
import { useEffect } from 'react';

interface SuccessMessageProps {
  locale: 'en' | 'ar';
  onClose: () => void;
}

export function SuccessMessage({ locale, onClose }: SuccessMessageProps) {
  useEffect(() => {
    // Auto-close after 5 seconds
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const message = locale === 'ar'
    ? 'تم استلام طلبك بنجاح! سيتم إرسال عرض الأسعار إليك في غضون ساعة واحدة.'
    : 'We got your request! The quotation will be sent to you within one hour.';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-4 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="mb-4 rounded-full bg-green-100 p-3">
            <CheckCircle size={48} className="text-green-600" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {locale === 'ar' ? 'شكراً لك!' : 'Thank You!'}
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed">
            {message}
          </p>

          <button
            onClick={onClose}
            className="btn-primary px-8 py-3 rounded-xl"
          >
            {locale === 'ar' ? 'حسناً' : 'OK'}
          </button>
        </div>
      </div>
    </div>
  );
}
