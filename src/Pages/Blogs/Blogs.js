import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h3>১। Authentication এবং authorization এর মধ্যে পার্থক্য কি?</h3>
            <p><span className='fw-bold'>উত্তর:</span> Authentication এবং authorization এর মধ্যে পার্থক্য সমূহ: <br />
            Authentication: <br />
            # Authentication ব্যবহারকারী কে তা যাচাই করে। <br />
            # পাসওয়ার্ড, ওয়ান-টাইম পিন, বায়োমেট্রিক তথ্য এবং ব্যবহারকারীর দ্বারা প্রদত্ত বা প্রদত্ত অন্যান্য তথ্যের মাধ্যমে Authentication কাজ করে।<br />
            # Authentication একটি ভাল পরিচয় এবং অ্যাক্সেস ব্যবস্থাপনা প্রক্রিয়ার প্রথম ধাপ। <br />
            # Authentication ব্যবহারকারীর দ্বারা দৃশ্যমান এবং আংশিকভাবে পরিবর্তনযোগ্য। <br /> <br />

            Authorization: <br />
            # Authorization নির্ধারণ করে কোন ব্যবহারকারী কোন রিসোর্স অ্যাক্সেস করতে পারে। <br />
            # Authorization সেই সেটিংসের মাধ্যমে কাজ করে যা সংস্থা দ্বারা বাস্তবায়িত এবং রক্ষণাবেক্ষণ করা হয়।<br />
            # Authorization always takes place after authentication. <br />
            # Authorization ব্যবহারকারীর কাছে দৃশ্যমান বা পরিবর্তনযোগ্য নয়।
            </p>
            <h3>2| Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p><span className='fw-bold'>উত্তর:</span> ফায়ারবেজ ব্যাবহারের কারনসমূহ: <br /> <br />
            # ফায়ারবেস ডাটাবেসের সমস্ত ডেটা রিয়েল-টাইম পরিচালনা করে। সুতরাং, ডাটাবেস থেকে ডেটা আদান-প্রদান সহজ এবং দ্রুত। তাই, আপনি যদি লাইভ স্ট্রিমিং, চ্যাট মেসেজিং ইত্যাদির মতো মোবাইল অ্যাপ তৈরি করতে চান, তাহলে আপনি Firebase ব্যবহার করতে পারেন। <br /><br />
            # ফায়ারবেস স্ক্রীন রিফ্রেশ না করেই সমস্ত ডিভাইস- Android, iOS এবং ওয়েব জুড়ে রিয়েল-টাইম ডেটা সিঙ্ক করার অনুমতি দেয়।<br /><br />
            # Firebase Google Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery এবং Slack-এ ইন্টিগ্রেশন অফার করে, যাতে আপনার অ্যাপ ডেভেলপমেন্টকে দক্ষ এবং নির্ভুল ব্যবস্থাপনা এবং রক্ষণাবেক্ষণ করা যায়। <br /><br />
            # ডাটাবেস, বিশ্লেষণ থেকে শুরু করে ক্র্যাশিং রিপোর্ট সবকিছুই Firebase-এ অন্তর্ভুক্ত। সুতরাং, অ্যাপ ডেভেলপমেন্ট দলগুলি ব্যবহারকারীর অভিজ্ঞতা উন্নত করার দিকে মনোনিবেশ করতে পারে| <br /><br />

            # Firebase ব্যবহার না করলে অন্য যে third party Authentication ব্যবহার করা যেতে পারে। যেমন: <br />
            1. STYTCH <br />
            2. ORY <br />
            3. Supabase <br />
            4. Okta <br />
            5. Auth0
            </p>
        </div>
    );
};

export default Blogs;