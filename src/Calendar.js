import * as React from 'react';
import { differenceInCalendarDays } from 'date-fns';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'

let restaurants = [
    {
        name: "제주산방식당",
        imgUrl: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210705_122%2F1625411810687y4FdQ_JPEG%2F-sMjseZ0Tby4jTlFoed6nMO8.jpeg.jpg",
        category: ["한식", "국수"],
        menus: ["온면", "김치찌개"],
        recent: "2022.1.25",
        rate: 3.9,
    },
    {
        name: "던킨 도너츠",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/20160427_52/ppanppane_1461740975298hwnLF_PNG/%B4%F8%C5%B2%B7%CE%B0%ED_%282%29.png?type=w800",
        category: ["후식", "제과"],
        menus: ["크리스피 도넛", "커피"],
        recent: "2022.1.20",
        rate: 4.1,
    },
    {
        name: "북촌손만두",
        imgUrl: "https://cdn.myfranchise.kr/images/7m/7mk1vUYZbcLPTSywCn11ax.png?w=196&h=196&c=1&f=jpg",
        category: ["한식", "만두"],
        menus: ["만두국밥", "피냉면"],
        recent: "2022.1.22",
        rate: 4.5,
    },
    {
        name: "퍼틴쌀국수",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeIdgPhI7wI3m2zxwrbXnDKCMd7wIjycCyQ&usqp=CAU",
        category: ["베트남식", "쌀국수"],
        menus: ["쌀국수", "분짜"],
        recent: "2022.1.10",
        rate: 4.5,
    },
    {
        name: "뽕가네한식뷔페",
        imgUrl: "https://images.chosun.com/resizer/FXSXTnlKfQsFdyf7zZbYl6ThJLs=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/Y2TB2NDO4ZA6NBZWSMPH22MJP4.jpg",
        category: ["한식", "뷔페"],
        menus: ["후라이드치킨", "김치"],
        recent: "2022.1.11",
        rate: 3.0,
    },
    {
        name: "카츠츠",
        imgUrl: "https://katsus.kr/images/main05.png",
        category: ["양식", "돈까스"],
        menus: ["등심카츠", "안심카츠"],
        recent: "2022.1.3",
        rate: 3.2,
    },
    {
        name: "안심한우",
        imgUrl: "https://s3-ap-northeast-1.amazonaws.com/dcreviewsresized/pre_20200701085022771_menu_nHsPdBtUHr4V.jpg",
        category: ["한식", "국밥류"],
        menus: ["한우국밥", "육회비빔밥"],
        recent: "2022.1.27",
        rate: 4.8,
    },
    {
        name: "동남집",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/MjAxODA3MDVfMTkw/MDAxNTMwNzUzMjU4MTY1._-WGxrSVKzKrxHRGxMulRL32eWT6dliB_o7xIslkKJEg.Y4s50Euy_pZF1cJX8HUhwO-0xPr0q_xLSfk3gZnpXtQg.JPEG.hankeyol/20180704_120603.jpg?type=w800",
        category: ["한식", "탕류"],
        menus: ["양지곰탕", "특곰탕"],
        recent: "2022.1.14",
        rate: 4.5,
    },
    {
        name: "신사부대찌개",
        imgUrl: "https://cdn.myfranchise.kr/images/757392f67b1d002380992f9fafd40937?w=196&h=196&c=1&f=jpg",
        category: ["한식", "부대찌개"],
        menus: ["2인세트", "3인세트"],
        recent: "2022.1.5",
        rate: 3.8,
    },
    {
        name: "국밥일번지",
        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS25EBa63PjO1jnWtW9_KLrWLenCDhKWaK4Tg&usqp=CAU",
        category: ["한식", "국밥"],
        menus: ["순대국밥", "얼큰순대국밥"],
        recent: "2022.1.12",
        rate: 3.5,
    },
    {
        name: "육대장",
        imgUrl: "https://image.news1.kr/system/ap/2014/9/26/1030997",
        category: ["한식", "육개장"],
        menus: ["옛날전통육개장", "육칼면"],
        recent: "2022.1.19",
        rate: 4.0,
    },
    {
        name: "바르다김선생",
        imgUrl: "https://mblogthumb-phinf.pstatic.net/20150111_201/latry_1420959864600NNCps_JPEG/P20150105_115256247_2F380F6D-D84D-468A-9865-76ED7FB06705.JPG?type=w2",
        category: ["한식", "김밥"],
        menus: ["바른 김밥", "참치 김밥"],
        recent: "2022.1.26",
        rate: 3.5,
    },
    {
        name: "해송석갈비",
        imgUrl: "https://mp-seoul-image-production-s3.mangoplate.com/47750_1531468219864517.jpg",
        category: ["한식", "석갈비"],
        menus: ["차돌된장찌개", "제육두루치기"],
        recent: "2022.1.12",
        rate: 4.0,
    },
    {
        name: "도화",
        imgUrl: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fdu75Kk%2FbtqzBUSflaQ%2F0CoRWkus6ewvzbL8YnMUok%2Fimg.jpg",
        category: ["중식", "짜장"],
        menus: ["삼선짜장", "게살볶음밥"],
        recent: "2022.1.25",
        rate: 4.5,
    },
    {
        name: "치교치밥",
        imgUrl: "https://www.thepublic.kr/news/data/20201215/p1065595666029344_560_thum.png",
        category: ["양식", "치밥"],
        menus: ["소이갈릭치밥", "양념치밥"],
        recent: "2022.1.13",
        rate: 4.2,
    },
];

const datesWithExtraContent = restaurants.map(res => {
    let date = res.recent.split('.');
    return(new Date(date[0], date[1]-1, date[2]));
});

function isSameDay(a, b) {
  return differenceInCalendarDays(a, b) === 0;
}

function MyCalendar() {
    function tileContent({ date, view }) {
        if (
            view === 'month' &&
            datesWithExtraContent.find((dDate) => isSameDay(dDate, date))
        ) {
            const d = `${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`;
            const restaurant = restaurants.find(r => r.recent === d);
            return <img alt={restaurant.name} src={restaurant.imgUrl} className="tileContent" />;
        }
    }

    return(
        <div className="calendar">
            <Calendar
                calendarType="US"
                tileContent={tileContent}
            />
        </div>
    );
}

export default MyCalendar;
