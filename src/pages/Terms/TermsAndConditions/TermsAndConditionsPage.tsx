import React from "react";
import "App.scss";
import "./TermsAndConditions.scss";

interface TermsAndConditionsItem {
  item: string;
  subItem?: string[];
}

const TermsAndConditionsPage = () => {
  const terms_EN: TermsAndConditionsItem[] = [
    {
      item:
        "Rings: 2020 rings are requires and we can receive the last season derby's rings, derby’s rings or any external rings for 2020"
    },
    {
      item: "When delivering birds with the derby’s rings: ",
      subItem: [
        "Each 5 birds get 1 for free",
        "Each 10 birds get 3 for free",
        "Each 15 birds get 4 for free"
      ]
    },
    {
      item: "When delivery birds with external rings: ",
      subItem: [
        "Each 10 birds get 2 for free",
        "Each 15 birds get 3 free ",
        "Each 20 birds get 4 for free"
      ]
    },
    {
      item:
        "Received free birds considered as spare dead or priced birds deducted from it not from paid birds. "
    },
    {
      item:
        "The pigeons submitted with the participation fortification by changing 2 feathers equal 60 days or more . "
    },
    {
      item:
        "The price of subscription 87 euro ,58 euro paid with pigeon submit and the rest f price after fixing birds and before releasing birds . "
    },
    {
      item:
        "In case the birds die after using spare the participation will be restored instead of it next season . "
    },
    {
      item:
        "After receiving birds in one race point it is not allowed to claim it again The participations not allowed to interfere the management decision. "
    },
    {
      item:
        "The birds wear the magnetic benzing rings to facilitate the birds periodical inventory by BINZING LIVE . "
    },
    {
      item:
        "We apologize for not accepting the birds after the birds number is completed . "
    },
    {
      item: "Bird’s acceptance starts in 4th of June until 1st of august 2020"
    },
    {
      item: "Delivery days :",
      subItem: [
        "From:    4-6    11-6   18-6    25-6    2-7   9-7    16-7   23-7    30-7",
        "To:      6-6    13-6   20-6    27-6    4-7   11-7   18-7   25-7    1-8"
      ]
    },
    {
      item:
        "It is allowed to receive any number of birds from the participations . "
    },
    {
      item:
        "The point responsible for choosing the atmosphere for the race ,the Benzing system opened when the race start and closed next day from the race when the birds come with the sunset . "
    },
    {
      item:
        "The team contains birds and in case the result are equal the result decided to the highest result of the individual bird . "
    },
    {
      item:
        "The participation's name  will be able to modified after receiving the birds . "
    },
    {
      item: "The result of Ace pigeon will calculated by the Benzing system . "
    },
    {
      item:
        "The Ace price for the best birds is provided from the RCM company and it is 3 birds were logged from the first 20 in all stations. "
    },
    { item: "Ace:" },
    {
      item:
        "The Ace prize for three strongest birds with a position from 1 to 20 in the five races in an amount of 29,500 euro. ",
      subItem: ["1st    15000 euro", "2nd    8500  euro", "3rd    6000  euro"]
    },
    {
      item:
        "The point does not have any responsibility for the dead or lost birds until the end of the race and in case of the bird loss or death the contestant is not entitled to claim any of the prepaid fees. "
    },
    {
      item: "Official distances: ",
      subItem: [
        "300 km the first race el Dabaa the first week of January ",
        "350 km the second race Fouka the second week of January ",
        "450 km the third race marsa matrouh the third week of January ",
        "500 km semifinal zawyet shemas first week of February ",
        "620 km final race salloum twelve days after marsa matruh race "
      ]
    }
  ];
  const terms_AR: TermsAndConditionsItem[] = [
    {
      item:
        "  شروط التسليم : الحجول يشترط 2020 ومسموح استلام حجول الديربي للعام الماضي وحجول هذا العام ومسموح اي حجول "
    },
    {
      item: "  طريقة الاستلام والعروض:"
    },
    {
      item: " عند تسليم الطير بدبلة الديربي:",
      subItem: [
        "عدد 5 طيور عليهم طير هديه",
        "عدد 10 طيور عليهم 3 طيور هديه",
        "عدد 15طير عليهم 4 طيور هديه"
      ]
    },
    {
      item: "عند تسليم الطير بدبل خارجيه:",
      subItem: [
        "عدد 10 طيور عليهم 2 طير هديه",
        "عدد 15 طير عليهم 3 طيور هديه",
        "عدد 20 طير عليهم 4 طيور هديه"
      ]
    },
    {
      item:
        "  تعتبر الطيور المسلمه مجانا اسبير يتم خصم منها الطيور المنافقه او المفقوده ولا يتم جمعها او خصمها من حساب المشترك."
    },
    {
      item:
        "  يسلم الطير محصن تحت اشراف المشترك تم تغيير 2 ريشه يساوي (60 يوم)  فيما اكثر  ثمن الاشتراك 1500 يتم دفع 1000 عند التسليم والباقي بعد تثبيت الطيور وقبل اطلاقها."
    },
    { item: "  ثمن اشتراك الفريق 2000 جنيه." },
    {
      item:
        "  في حالة نفوق الطيور بعد استخدام الاسبير يعوض المشترك بدلا منها الموسم التالي الطيور بعد التسليم ملك للنقطه ولا يحق المطالبه بها مره اخرى."
    },
    { item: "  لا يحق للمشترك التدخل في قرارات ادارة النقطه." },
    {
      item:
        "  يتم حجل الطيور اثناء التسليم بالحجول الممغنطه ببنزنج لتسهل عملية الجرد الدوري عن طريق بنزنج لايف ."
    },
    { item: "  نعتذر عن قبول اشتراك الطيور بعد اكتمال عدد استيعاب النقطه ." },
    { item: "  بداية الاستلام من 4/6 حتى 1/8 ." },
    {
      item: "  ايام التسليم : ",

      subItem: [
        " 4/6 ل 6/6     18/6 ل 20/6     2/7 ل4/7    16/7 ل18/7   11/6 ل 13/6    25/6 ل 27/6   9/7 ل 11/7   23/7 ل 25/7  30/7 ل 1/8"
      ]
    },

    { item: "  مسموح استلام اي عدد طيور من المشترك ." },
    {
      item:
        "  محطات السباق 300 كيلو , 350 كيلو , 450 كيلو , 500 كيلو , 620 كيلو ."
    },
    {
      item:
        "  النقطه مسؤله عن اختيار الجو المناسب للسباق بفتح سيستم بنزنج اثناء التسليم للسباق حتى اليوم الثاني من رجوع الطيور مع اخر ضوء."
    },
    { item: "  لا يتم تعديل اسم المشترك بعد استلام الطيور ." },
    {
      item:
        "  الفريق مكون من 5 طيور وفي حالة تساوي النتائج تحسم النتيجه لاعلى نتيجة طير فردي اخر سباق ."
    },
    { item: "  تحسب نتائج الايس بيجون عن طريق سيستم بينزنج." },
    {
      item:
        "  عدد 3 طيور تم تسجيل دخولهم من اول 20 في جميع المحطات الاس لافضل عدد طيور مقدمه من شركة RCM ."
    },
    { item: "  Ace" },
    {
      item:
        "  جائزة الاس لاقوى ثلالث طيور حاصلة كل منهم على لقب من 1 ل 20 في الخمس سباقات وهي مبلغ 500000متبرع بالمبلغ شركةRMS."
    },

    { item: "  1st   250000     2nd    150000   3rd     100000" },
    {
      item:
        "  النقطه ليس لها اي مسأله عن الطير النافق او الضائع من بداية استلام الطير وحتى نهاية السباق ولا يحق لاي متسابق في حالة ضياع او نفوق طيره المطالبه بأي مبلغ من المشترك به من البدايه."
    },
    {
      item: "  المسافات الرسميه :",
      subItem: [
        " 300 كم السباق الاول الضبعه اول اسبوع من شهر يناير ",
        "350 كم السباق الثاني فوكه ثاني اسبوع من شهر يناير",
        "450 كم السباق الثالث مرسى مطروح ثالث اسبوع من شهر يناير",
        "500 كم السباق الرابع زاوية شماس اول اسبوع من شهر فبراير",
        "620 كم السباق النهائي السلوم بعد 12 يوم من سباق مرسى مطروح"
      ]
    }
  ];
  return (
    <div className={"terms-and-conditions-top-container page-body-container"}>
      <h3>Terms & Conditions (2020) :</h3>
      <ul className={"terms-en"}>
        {terms_EN.map((term: TermsAndConditionsItem, termIndex) => (
          <div key={termIndex}>
            <li>{term.item}</li>
            {term.subItem?.length ? (
              <ul>
                {term.subItem.map((subItem: string, subItemIndex) => (
                  <li key={subItemIndex}>{subItem}</li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        ))}
      </ul>
      <ul className={"terms-ar"}>
        {terms_AR.map((term: TermsAndConditionsItem, termIndex) => (
          <div key={termIndex}>
            <li>{term.item}</li>
            {term.subItem?.length ? (
              <ul>
                {term.subItem.map((subItem: string, subItemIndex) => (
                  <li key={subItemIndex}>{subItem}</li>
                ))}
              </ul>
            ) : (
              <></>
            )}
          </div>
        ))}
      </ul>
      <div className={"signature"}>
        <p>Managing Director</p>
      </div>
    </div>
  );
};
export { TermsAndConditionsPage };
