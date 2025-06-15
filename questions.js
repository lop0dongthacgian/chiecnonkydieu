// questions.js

const allQuestions = [
    // Unit 1: My Family (Gia đình tôi)
    {
        question: "Who is your mother's father? (Ông ngoại của bạn là ai?)",
        answer: ['G', 'R', 'A', 'N', 'D', 'P', 'A'],
        plainAnswer: ['G', 'R', 'A', 'N', 'D', 'P', 'A'] // GRANDPA
    },
    {
        question: "Who is your father's sister? (Cô/Dì của bạn là ai?)",
        answer: ['A', 'U', 'N', 'T'],
        plainAnswer: ['A', 'U', 'N', 'T'] // AUNT
    },
    {
        question: "Who is your brother's mother? (Mẹ của anh/em trai bạn là ai?)",
        answer: ['M', 'O', 'T', 'H', 'E', 'R'],
        plainAnswer: ['M', 'O', 'T', 'H', 'E', 'R'] // MOTHER
    },

    // Unit 2: My School (Trường học của tôi)
    {
        question: "What do you write with? (Bạn viết bằng gì?)",
        answer: ['P', 'E', 'N', 'C', 'I', 'L'],
        plainAnswer: ['P', 'E', 'N', 'C', 'I', 'L'] // PENCIL
    },
    {
        question: "What do you carry your books in? (Bạn mang sách trong cái gì?)",
        answer: ['S', 'C', 'H', 'O', 'O', 'L', 'B', 'A', 'G'],
        plainAnswer: ['S', 'C', 'H', 'O', 'O', 'L', 'B', 'A', 'G'] // SCHOOLBAG
    },
    {
        question: "What color is the sky? (Bầu trời màu gì?)",
        answer: ['B', 'L', 'U', 'E'],
        plainAnswer: ['B', 'L', 'U', 'E'] // BLUE
    },

    // Unit 3: My Toys (Đồ chơi của tôi)
    {
        question: "It's a soft toy, often looks like an animal. (Một món đồ chơi mềm, thường trông giống một con vật.)",
        answer: ['T', 'E', 'D', 'D', 'Y'],
        plainAnswer: ['T', 'E', 'D', 'D', 'Y'] // TEDDY
    },
    {
        question: "You can bounce it and play games like football. (Bạn có thể nảy nó và chơi các trò như bóng đá.)",
        answer: ['B', 'A', 'L', 'L'],
        plainAnswer: ['B', 'A', 'L', 'L'] // BALL
    },
    {
        question: "It has wheels and you can ride it. (Nó có bánh xe và bạn có thể lái nó.)",
        answer: ['B', 'I', 'K', 'E'],
        plainAnswer: ['B', 'I', 'K', 'E'] // BIKE
    },

    // Unit 4: Animals (Động vật)
    {
        question: "What animal says 'Meow'? (Con vật nào kêu 'Meo'?)",
        answer: ['C', 'A', 'T'],
        plainAnswer: ['C', 'A', 'T'] // CAT
    },
    {
        question: "It's a farm animal that gives us milk. (Một con vật nuôi trong trang trại cho chúng ta sữa.)",
        answer: ['C', 'O', 'W'],
        plainAnswer: ['C', 'O', 'W'] // COW
    },
    {
        question: "It's a small, fluffy animal that likes to eat carrots. (Một con vật nhỏ, mềm mại thích ăn cà rốt.)",
        answer: ['R', 'A', 'B', 'B', 'I', 'T'],
        plainAnswer: ['R', 'A', 'B', 'B', 'I', 'T'] // RABBIT
    },

    // Unit 5: My Body (Cơ thể tôi)
    {
        question: "How many eyes do you have? (Bạn có bao nhiêu mắt?)",
        answer: ['T', 'W', 'O'],
        plainAnswer: ['T', 'W', 'O'] // TWO
    },
    {
        question: "You use this to hear. (Bạn dùng cái này để nghe.)",
        answer: ['E', 'A', 'R'],
        plainAnswer: ['E', 'A', 'R'] // EAR
    },
    {
        question: "You use these to walk. (Bạn dùng những thứ này để đi bộ.)",
        answer: ['L', 'E', 'G', 'S'],
        plainAnswer: ['L', 'E', 'G', 'S'] // LEGS
    },

    // Unit 6: Clothes (Quần áo)
    {
        question: "What do you wear on your feet? (Bạn đi gì vào chân?)",
        answer: ['S', 'H', 'O', 'E', 'S'],
        plainAnswer: ['S', 'H', 'O', 'E', 'S'] // SHOES
    },
    {
        question: "You wear this on your head. (Bạn đội cái này trên đầu.)",
        answer: ['H', 'A', 'T'],
        plainAnswer: ['H', 'A', 'T'] // HAT
    },
    {
        question: "You wear this on your body. (Bạn mặc cái này trên cơ thể.)",
        answer: ['S', 'H', 'I', 'R', 'T'],
        plainAnswer: ['S', 'H', 'I', 'R', 'T'] // SHIRT
    },

    // Unit 7: Food (Thức ăn)
    {
        question: "It's a yellow fruit that monkeys like. (Một loại quả màu vàng mà khỉ thích.)",
        answer: ['B', 'A', 'N', 'A', 'N', 'A'],
        plainAnswer: ['B', 'A', 'N', 'A', 'N', 'A'] // BANANA
    },
    {
        question: "It's white and you drink it. (Nó màu trắng và bạn uống nó.)",
        answer: ['M', 'I', 'L', 'K'],
        plainAnswer: ['M', 'I', 'L', 'K'] // MILK
    },
    // Unit 8: My House (Ngôi nhà của tôi)
    {
        question: "You sleep on it at night. (Bạn ngủ trên gì vào ban đêm?)",
        answer: ['B', 'E', 'D'],
        plainAnswer: ['B', 'E', 'D'] // BED
    },
    {
        question: "You sit on it. (Bạn ngồi trên gì?)",
        answer: ['C', 'H', 'A', 'I', 'R'],
        plainAnswer: ['C', 'H', 'A', 'I', 'R'] // CHAIR
    },
    {
        question: "You watch this for fun. (Bạn xem cái này để giải trí.)",
        answer: ['T', 'V'],
        plainAnswer: ['T', 'V'] // TV
    },

    // Unit 9: In the City (Trong thành phố)
    {
        question: "You read books here. (Bạn đọc sách ở đâu?)",
        answer: ['L', 'I', 'B', 'R', 'A', 'R', 'Y'],
        plainAnswer: ['L', 'I', 'B', 'R', 'A', 'R', 'Y'] // LIBRARY
    },
    {
        question: "You see animals here. (Bạn nhìn thấy động vật ở đâu?)",
        answer: ['Z', 'O', 'O'],
        plainAnswer: ['Z', 'O', 'O'] // ZOO
    },
    {
        question: "You buy things here. (Bạn mua đồ ở đâu?)",
        answer: ['S', 'H', 'O', 'P'],
        plainAnswer: ['S', 'H', 'O', 'P'] // SHOP
    },

    // Unit 10: Nature (Thiên nhiên)
    {
        question: "It shines in the sky during the day. (Nó chiếu sáng trên trời vào ban ngày.)",
        answer: ['S', 'U', 'N'],
        plainAnswer: ['S', 'U', 'N'] // SUN
    },
    {
        question: "It falls from the sky when it rains. (Nó rơi từ trời khi trời mưa.)",
        answer: ['R', 'A', 'I', 'N'],
        plainAnswer: ['R', 'A', 'I', 'N'] // RAIN
    },
    {
        question: "It grows in the garden and is colorful. (Nó mọc trong vườn và có màu sắc rực rỡ.)",
        answer: ['F', 'L', 'O', 'W', 'E', 'R'],
        plainAnswer: ['F', 'L', 'O', 'W', 'E', 'R'] // FLOWER
    },

    // Unit 11: Actions (Hành động)
    {
        question: "You do this when you’re tired. (Bạn làm điều này khi mệt.)",
        answer: ['S', 'L', 'E', 'E', 'P'],
        plainAnswer: ['S', 'L', 'E', 'E', 'P'] // SLEEP
    },
    {
        question: "You do this with your mouth when you're happy. (Bạn làm điều này với miệng khi vui.)",
        answer: ['S', 'M', 'I', 'L', 'E'],
        plainAnswer: ['S', 'M', 'I', 'L', 'E'] // SMILE
    },
    {
        question: "You do this to move your body fast. (Bạn làm điều này để di chuyển nhanh.)",
        answer: ['R', 'U', 'N'],
        plainAnswer: ['R', 'U', 'N'] // RUN
    },

    // Unit 12: Daily Routines (Hoạt động hàng ngày)
    {
        question: "You do this with your teeth every morning. (Bạn làm điều này với răng mỗi sáng.)",
        answer: ['B', 'R', 'U', 'S', 'H'],
        plainAnswer: ['B', 'R', 'U', 'S', 'H'] // BRUSH
    },
    {
        question: "You do this after you wake up. (Bạn làm điều này sau khi thức dậy.)",
        answer: ['G', 'E', 'T', 'U', 'P'],
        plainAnswer: ['G', 'E', 'T', 'U', 'P'] // GETUP
    },
    {
        question: "You do this before you sleep. (Bạn làm điều này trước khi ngủ.)",
        answer: ['W', 'A', 'S', 'H'],
        plainAnswer: ['W', 'A', 'S', 'H'] // WASH
    },

    // Unit 13: Transportation (Phương tiện)
    {
        question: "It has two wheels and you pedal it. (Nó có hai bánh và bạn đạp nó.)",
        answer: ['B', 'I', 'K', 'E'],
        plainAnswer: ['B', 'I', 'K', 'E'] // BIKE
    },
    {
        question: "It flies in the sky and carries people. (Nó bay trên trời và chở người.)",
        answer: ['P', 'L', 'A', 'N', 'E'],
        plainAnswer: ['P', 'L', 'A', 'N', 'E'] // PLANE
    },
    {
        question: "It moves on roads and has four wheels. (Nó chạy trên đường và có bốn bánh.)",
        answer: ['C', 'A', 'R'],
        plainAnswer: ['C', 'A', 'R'] // CAR
    },

    // Unit 14: Feelings (Cảm xúc)
    {
        question: "You feel this when you get a gift. (Bạn cảm thấy gì khi nhận quà?)",
        answer: ['H', 'A', 'P', 'P', 'Y'],
        plainAnswer: ['H', 'A', 'P', 'P', 'Y'] // HAPPY
    },
    {
        question: "You feel this when you lose something. (Bạn cảm thấy gì khi mất đồ?)",
        answer: ['S', 'A', 'D'],
        plainAnswer: ['S', 'A', 'D'] // SAD
    },
    {
        question: "You feel this before a test. (Bạn cảm thấy gì trước bài kiểm tra?)",
        answer: ['N', 'E', 'R', 'V', 'O', 'U', 'S'],
        plainAnswer: ['N', 'E', 'R', 'V', 'O', 'U', 'S'] // NERVOUS
    },

    // Unit 15: Weather (Thời tiết)
    {
        question: "It's hot and sunny. (Thời tiết như thế nào khi trời nắng nóng?)",
        answer: ['S', 'U', 'N', 'N', 'Y'],
        plainAnswer: ['S', 'U', 'N', 'N', 'Y'] // SUNNY
    },
    {
        question: "Clouds and rain are coming. (Trời đầy mây và sắp mưa.)",
        answer: ['C', 'L', 'O', 'U', 'D', 'Y'],
        plainAnswer: ['C', 'L', 'O', 'U', 'D', 'Y'] // CLOUDY
    },
    {
        question: "White flakes fall from the sky. (Những bông trắng rơi từ trời xuống.)",
        answer: ['S', 'N', 'O', 'W'],
        plainAnswer: ['S', 'N', 'O', 'W'] // SNOW
    },

    // Unit 16: Colors & Numbers
    {
        question: "Color of grass. (Màu của cỏ là gì?)",
        answer: ['G', 'R', 'E', 'E', 'N'],
        plainAnswer: ['G', 'R', 'E', 'E', 'N'] // GREEN
    },
    {
        question: "Number after five. (Số sau số năm là gì?)",
        answer: ['S', 'I', 'X'],
        plainAnswer: ['S', 'I', 'X'] // SIX
    },
    {
        question: "Color of fire trucks. (Xe cứu hỏa màu gì?)",
        answer: ['R', 'E', 'D'],
        plainAnswer: ['R', 'E', 'D'] // RED
    }
];
