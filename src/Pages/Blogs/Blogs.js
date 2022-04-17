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
            
        </div>
    );
};

export default Blogs;