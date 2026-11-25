'use client';
import { useState } from 'react';

export default function Contact() {
  const [f, setF] = useState({ name: '', phone: '', msg: '' });
  const [toast, setToast] = useState('');
  const show = (t) => { setToast(t); setTimeout(() => setToast(''), 2600); };
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = () => {
    if (!f.name || !f.msg) return show('নাম ও বার্তা লিখুন');
    // TODO: এখানে API route (app/api/contact/route.js) এ POST করবেন
    show('ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে (ডেমো)');
    setF({ name: '', phone: '', msg: '' });
  };

  return (
    <footer id="contact">
      <div className="w">
        <div className="two" style={{ marginBottom: 26 }}>
          <div>
            <h3 style={{ margin: '0 0 6px' }}>✉️ আমাদের লিখুন</h3>
            <label>নাম</label><input value={f.name} onChange={set('name')} />
            <label>মোবাইল</label><input inputMode="tel" value={f.phone} onChange={set('phone')} />
            <label>বার্তা</label><textarea rows={3} value={f.msg} onChange={set('msg')} />
            <button className="btn bp" style={{ marginTop: 12 }} onClick={submit}>পাঠান</button>
          </div>
          <div className="g" style={{ gridTemplateColumns: '1fr 1fr', alignContent: 'start' }}>
            <div><b>যোগাযোগ</b><br />📍 কাপাসিয়া, গাজীপুর<br />📞 <a href="tel:01700000000">০১৭০০-০০০০০০</a><br />✉️ <a href="mailto:info@example.com">info@example.com</a><br />🕘 রবি–বৃহস্পতি, ৯টা–৪টা</div>
            <div><b>লিংক</b><br /><a href="https://dshe.gov.bd">শিক্ষা অধিদপ্তর</a><br /><a href="https://moedu.gov.bd">শিক্ষা মন্ত্রণালয়</a><br /><a href="http://www.educationboardresults.gov.bd">বোর্ড ফলাফল</a><br /><a href="#contact">অভিভাবক লগইন (OTP)</a><br /><a href="#contact">অ্যাডমিন লগইন</a></div>
          </div>
        </div>
        <div>© ২০২৬ শাপলা মডেল হাই স্কুল। সর্বস্বত্ব সংরক্ষিত।</div>
      </div>
      <div id="ts" className={toast ? 's' : ''}>{toast}</div>
    </footer>
  );
}
