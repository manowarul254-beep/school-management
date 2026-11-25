import Header from './components/Header';
import Hero from './components/Hero';
import Reveal from './components/Reveal';
import Notice from './components/Notice';
import Committee from './components/Committee';
import Teachers from './components/Teachers';
import Facilities from './components/Facilities';
import Admission from './components/Admission';
import Results from './components/Results';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function Sec({ id, title, sub, alt, children }) {
  return (
    <section id={id} className={alt ? 'alt' : ''}>
      <Reveal className="w">
        <h2>{title}</h2><p className="sb">{sub || '\u00a0'}</p>
        {children}
      </Reveal>
    </section>
  );
}

const faq = [
  ['ভর্তি আবেদন কীভাবে করব?', 'স্কুল অফিসে সরাসরি এসে ফরম পূরণ করতে হবে। পরে অনলাইন আবেদনের ব্যবস্থাও যুক্ত হবে।'],
  ['স্কুলের সময়সূচি কী?', 'রবি থেকে বৃহস্পতিবার, সকাল ৯টা থেকে বিকাল ৪টা।'],
  ['অভিভাবক কীভাবে সন্তানের উপস্থিতি জানবেন?', 'মোবাইল নম্বর দিয়ে OTP লগইনের মাধ্যমে উপস্থিতি ও ফলাফল দেখা যাবে।'],
  ['স্কুল বাস কোন কোন এলাকায় যায়?', 'তালিকা অফিসে পাওয়া যাবে এবং চাহিদা অনুযায়ী নতুন রুট যোগ হয়।'],
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="tk"><span>📢 বার্ষিক পরীক্ষার রুটিন প্রকাশিত &nbsp;•&nbsp; অভিভাবক সমাবেশ আগামী শনিবার সকাল ১০টায় &nbsp;•&nbsp; ২০২৭ সালের ভর্তি আবেদন ডিসেম্বর থেকে শুরু &nbsp;•&nbsp; শীতকালীন ছুটির নোটিশ দেখুন</span></div>
      <Hero />

      <Sec id="about" title="আমাদের পরিচয়" sub="জানার আনন্দে বেড়ে ওঠার জায়গা">
        <div className="two">
          <div className="cd"><p>শাপলা মডেল হাই স্কুল ষষ্ঠ থেকে দশম শ্রেণি পর্যন্ত পাঠদান করে। ১৯৮৫ সালে এলাকার কয়েকজন শিক্ষানুরাগীর উদ্যোগে ছোট পরিসরে যাত্রা শুরু হয়েছিল। আজ পড়ালেখার পাশাপাশি খেলাধুলা, বিজ্ঞানচর্চা ও সংস্কৃতিচর্চার সুযোগ আছে।</p></div>
          <div className="cd"><p>আমরা চাই প্রতিটি শিক্ষার্থী মুখস্থ নয়, বুঝে শেখার অভ্যাস গড়ুক এবং সৎ, দায়িত্বশীল নাগরিক হয়ে উঠুক। ছোট ক্লাস, নিয়মিত অভিভাবক যোগাযোগ আর হাতে-কলমে শেখাই আমাদের শক্তি।</p></div>
        </div>
      </Sec>
      <Sec id="notice" alt title="নোটিশ বোর্ড" sub="ফিল্টার করে প্রয়োজনীয় নোটিশ বেছে নিন"><Notice /></Sec>
      <Sec id="committee" title="পরিচালনা পর্ষদ" sub="কার্ডে ক্লিক করলে বিস্তারিত দেখুন"><Committee /></Sec>
      <Sec id="messages" alt title="বাণী">
        <div className="ms">
          <div className="cd"><div className="av">আ</div><h3 style={{ margin: 0 }}>সভাপতির কথা</h3><q>একটি বিদ্যালয়ের আসল শক্তি তার শিক্ষার্থীদের স্বপ্ন। অভিভাবক, শিক্ষক ও পর্ষদ একসঙ্গে কাজ করলে সেই স্বপ্নকে বাস্তবে রূপ দেওয়া সম্ভব।</q><b>জনাব আবুল কালাম মজুমদার</b><small className="m">সভাপতি, পরিচালনা পর্ষদ</small></div>
          <div className="cd"><div className="av">সা</div><h3 style={{ margin: 0 }}>প্রধান শিক্ষকের কথা</h3><q>প্রতিটি শিশুর শেখার গতি আলাদা। আমরা চেষ্টা করি প্রত্যেকের দিকে নজর দিতে, যাতে কেউ পিছিয়ে না পড়ে। নিয়মিত উপস্থিতি, পরিশ্রম আর কৌতূহলই সাফল্যের চাবি।</q><b>মিসেস সাবরিনা ইয়াসমিন</b><small className="m">প্রধান শিক্ষক</small></div>
        </div>
      </Sec>
      <Sec id="teachers" title="শিক্ষক ও কর্মচারী" sub="কার্ডে মাউস রাখুন বা ট্যাপ করে যোগ্যতা দেখুন"><Teachers /></Sec>
      <Sec id="facilities" alt title="আমাদের সুবিধাসমূহ" sub="শেখার পরিবেশ আরও সুন্দর করতে"><Facilities /></Sec>
      <Sec id="admission" title="ভর্তি তথ্য" sub="ধাপগুলো দেখুন আর মাসিক খরচ হিসাব করুন"><Admission /></Sec>
      <Sec id="result" alt title="ফলাফল ও অর্জন" sub="এসএসসিতে পাসের হার (%)">
        <Results />
        <div className="g" style={{ marginTop: 16 }}>
          <div className="cd">🏆 উপজেলা বিজ্ঞান মেলায় পরপর দুইবার প্রথম</div>
          <div className="cd">🥇 আন্তঃস্কুল ফুটবলে জেলা রানার্সআপ</div>
          <div className="cd">🎭 জেলা সাংস্কৃতিক প্রতিযোগিতায় সেরা দল</div>
        </div>
      </Sec>
      <Sec id="gallery" title="গ্যালারি" sub="ছবিতে ক্লিক করে বড় করে দেখুন, তীর চেপে এগোন"><Gallery /></Sec>
      <Sec id="faq" alt title="সাধারণ প্রশ্ন">
        {faq.map((f) => (<details key={f[0]}><summary>{f[0]}</summary><p>{f[1]}</p></details>))}
      </Sec>
      <Contact />
    </>
  );
}
