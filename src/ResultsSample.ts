export interface ICard {
  cardImg: string;
  cardContent: string;
}

export interface IResultData {
  explanation: string;
  cardOne: ICard;
  cardTwo: ICard;
  cardThree: ICard;
  cardFour: ICard;
  cardFive: ICard;
}

export const springWarmData: IResultData = {
  explanation:
    "'봄 웜톤'은 대체로 흰색빛이 많이 도는 순한 파스텔 계열이 잘 어울립니다.\n'봄 웜톤'의 장점은 맑고 생기있는 피부톤입니다.\n다만, 진한 색조나 짙은 음영 화장은 어울리지 않으니 주의해야 합니다.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_spring_wl.jpg",
    cardContent:
      "당신과 조화를 이루는 색은 흰 기가 많이 도는 순한 파스텔 톤입니다. 이는 회색빛이 섞인 탁한 파스텔과는 거리가 멉니다. '봄 웜 라이트 톤'의 컬러는 페일톤과 라이트 톤으로가볍고 순한 느낌을 줍니다.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_swl.png",
    cardContent:
      "베스트 스타일링 메이크업\n아이 : 살구나 피치 컬러 섀도우를 연하게 발라주세요. 갈색 아이라이너를 이용하되, 라인보다는 잘 컬링된 속눈썹을 강조하는 것이 좋습니다.\n치크 : 형광빛의 코랄 또는 흰빛이 도는 핑크컬러를 선택하세요.\n립 : 매트보다는 글로시한 제형의 코랄 컬러, 또는 옐로 베이스의 연한 핑크 컬러가 잘 어울립니다. ",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_swl_01.jpg",
    cardContent:
      "옐로베이스의 부드럽고 맑은 색감이 잘 어울립니다. 라이트한 컬러를 입었을 때 생기있는 특유의 느낌이 살아납니다.가을스러운 텁텁한 컬러나 인위적인 색감은 건조하고 경직되어 편안해보이지 않으므로 주의해주세요.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_swl_03.jpg",
    cardContent:
      "봄 라이트 타입의 생기있고 투명한 느낌은 정말 독보적이에요! 그래서 깔끔한 색상과 잔무늬 옷 잘 어울립니다. 그러나 힙, 펑키, 스트릿, 써지컬 같은 스타일은 소화하기 어려운 경우가 많답니다. 기하학적 무늬가 많은 옷이나 유광이 많은 옷은 주의해야 해요.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_swl_04.jpg",
    cardContent:
      "이렇게 곡선 무드의 사랑스럽고 청순한 분위기가 본연의 여리여리한 생기를 확 살려줄 수 있습니다. 명도와 채도가 낮은 탁한 색은 봄 웜의 밝고 맑은 에너지를 죽일 수 있으니 밝고 맑은 색을 사용하는 것이 좋습니다. ",
  },
};

export const summerCoolData: IResultData = {
  explanation:
    "‘여름 쿨톤`은 대체로 고명도의 은은한 파스텔 톤이 잘 어울리는 타입입니다.\n‘여름 쿨톤`의 장점은 싱그러운 피부 톤입니다.\n다만, 밝고 투명한 피부 때문에 피부 요철이 쉽게 눈에 띌 수 있으니 주의해야 합니다.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_summer_cl.jpg",
    cardContent:
      "당신과 조화를 이루는 색은 회색 기와 푸른 기가 살짝 도는 고명도의 은은한 파스텔 컬러입니다. ‘여름 쿨톤’의 컬러는 흰색이나 연하고 밝은 회색이 섞여 싱그러운 느낌을 줍니다.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_scl.png",
    cardContent:
      "베스트 스타일링 메이크업\n아이 : 흰빛이 많이 돌고 쉬머한 필이 든 핑크 컬러 섀도우를 연하게 발라주세요. 블랙 컬러의 아이라이너로 라인을 또렷하고 얇게 그려주세요.\n치크 : 흰빛이 많이 도는 핑크나 라벤더 컬러의 블러셔를 볼 중앙에 여리여리하게 발색하면 청순함을 더할 수 있습니다.\n립 : 핑크 컬러를 입술에 전체적으로 채워 발라주세요. 글로시한 체형의 틴트가 잘 어울립니다. ",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_scl_01.jpg",
    cardContent:
      "안개가 낀 듯한 부드럽고 맑은 색감이 잘 어울리고, 흰색을 입었을 때 깨끗한 특유의 느낌이 살아나며 은은한 광채를 느낄 수 있어요. 형광기와 흰 기가 섞인 색들도 베스트 컬러입니다.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_scl_03.jpg",
    cardContent:
      "여름 라이트 타입은 은은하고 부드러운 에너지를 유지해야 합니다. 광택이 심하지 않은 실크, 쉬폰 소재가 잘 어울려요. 평평한 민무늬의 면옷도 괜찮고요! 과한 무늬의 니트나 트위드는  피해주세요.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_scl_04.jpg",
    cardContent:
      "이렇게 곡선 무드가 포함된 정적인 에너지, 절제된 청초함이 본연의 분위기를 확 살려줄 수 있어요! Too Much에 민감하니 항상 과하지 않도록 주의해주세요! 또한 흰색이 섞인 파스텔 톤이 잘 어울리는 여름쿨톤은 검은색과 같은 어두운 색을 사용하면 피곤해 보일 수 있으니 주의가 필요해요.",
  },
};

export const fallWarmData: IResultData = {
  explanation:
    "'가을 웜톤'은 대체로 저명도의 어둡고 음영 있는 색이 잘 어울리는 타입입니다.\n‘가을 웜톤`의 장점은 진한 스킨톤 덕분에 섹시하고 관능적인 매력을 뽐낼 수 있다는 것입니다. \n다만, 청순하고 소녀 같은 메이크업과 는 다소 거리가 있어 장단점이 확실한 톤입니다.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_autumn_wd.jpg",
    cardContent:
      "당신과 조화를 이루는 색은 노란기나 붉은 기가 도는 진한 색입니다. ‘가을 웜' 은 흰빛이 섞인 고명도의 파스텔 톤 보다는 붉은빛이 섞인 저명도의 어두운 컬러가 잘어울립니다.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_awd.png",
    cardContent:
      "메이크업\n아이 : 노란빛이 도는 브라운 섀도우를 베이스로 깔고, 잿빛이 도는 브라운이나 카키색 섀도우를 활용하여 깊은 음영을 주세요.\n치크 : 오렌지 브라운 컬러의 블러셔를 사선 방향으로 발색해 주세요. 섀딩과 자연스럽게 연결하면 건강하고 관능적인 느낌을 줍니다.\n립 : 아이 메이크업이 강조될 수 있도록, 스킨 톤의 립스틱을 발라주세요. 차분함과 고급스러움을 더해 줍니다. ",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_awd_01.jpg",
    cardContent:
      "옐로 베이스의 선명하고 깊은 색감이 잘 어울려요. 진한 컬러를 고급스럽고 편안하게 소화합니다. 페일톤이나 탁색, 원색은 유치한 느낌이 들 수 있어요. 저명도, 중-고채도의 컬러 best! 블랙보다는 다크브라운, 새하얀 화이트보다는 오트밀 컬러를 추천합니다.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_awd_03.jpg",
    cardContent:
      "가을 웜 타입은 고급스럽고 안정된 에너지를 갖고 있습니다. 앤틱한 무드가 자연스럽고 큰 무늬와 무거운 재질감도 편안히 소화할 수 있습니다. 빳빳한 셔츠, 면, 린넨, 니트를 추천드려요. 그러나 인공적인 느낌의 애니메이션 그래픽, 여리여리한 무드의 쉬폰 레이스는 연출하기 어려울 수 있어요.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_awd_04.jpg",
    cardContent:
      "가을 웜 타입은 고급스럽고 성숙한 느낌의 옷이 어울려요. 심플하고 단정한 옷과 화려한 액세서리의 조합이 좋답니다. 그리고 러블리하고 비비드한 무드는 소화하기 어렵답니다. 너무 캐주얼하고 영한(young) 패션 또한 조심해주세요.",
  },
};

export const winterCoolData: IResultData = {
  explanation:
    "'겨울 쿨톤`은 저명도 저채도의 블랙이 섞인 색이 잘 어울리는 타입입니다.\n‘겨울 쿨톤’의 장점은 하얀 스킨톤 덕분에 시크하고 도도한 매력을 풍긴다는 것입니다. \n다만, 파스텔톤의 여리여리한 메이크업을 할 경우 창백해 보일 수 있어 주의해야 합니다.",
  cardOne: {
    cardImg: "https://www.ifamily.co.kr/image/arda/result/graph_winter_cd.jpg",
    cardContent:
      "당신과 조화를 이루는 색은 저채도 저명도의 어둡고 진한 색입니다. ‘겨울 쿨' 은 흰 빛이 섞인 파스텔 톤 보다는 진한 레드나 블랙이섞인 어두운 컬러가 잘 어울립니다.",
  },
  cardTwo: {
    cardImg: "https://www.ifamily.co.kr/image/icolor/cometic_wcd.png",
    cardContent:
      "메이크업\n아이 : 은색 펄이 든 베이지 컬러의 섀도우를 발라주세요. 블랙 컬러로 아이라인을 날렵하고 깔끔하게 그려주세요. 인조 속눈썹이나 마스카라를 활용하여 속눈썹을 강조해 주세요.\n치크 : 붉은 기가 올라오기 때문에 블러셔를 사용하지 않는 것이 깔끔합니다.\n립 : 톤 다운된 와인색이나 딥한 버건디 컬러의 립스틱이 잘 어울립니다.",
  },
  cardThree: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_wcd_01.jpg",
    cardContent:
      "무게감있는 깊은 색감이 잘 어울립니다. 블랙이 제일 잘 어울리는 타입으로 무채색, 올 블랙을 고급스럽고 세련되게 소화합니다. 회색이 돌거나 따뜻한 컬러는 연출이 어려워요. 특히 차가운 색상을 입었을 때 피부색이 정돈되며 겨울 특유의 깨끗함을 배로 느낄 수 있어요.",
  },
  cardFour: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_wcd_03.jpg",
    cardContent:
      "겨울 쿨 타입은 시크하고 정적인 에너지를 갖고 있습니다. 그래서 볼드한 무드도 편안히 소화할 수 있어요. 빳빳한 시스루, 에나멜, 실크, 스팽글, 벨벳 소재를 추천드립니다. 그러나 여리여리한 무드의 쉬폰 레이스나 꽃무늬, 에니메이션 프린팅은 상반된 에너지로 분위기 있게 연출하기 어려울 수 있어요.",
  },
  cardFive: {
    cardImg:
      "https://www.icolor.io/icolor/image/icolor/color_view/fashion_wcd_04.jpg",
    cardContent:
      "겨울 쿨 타입은 시크하고 성숙한 옷이 어울려요. 볼드한 액세서리나 직선으로 떨어지는 옷이 좋습니다. 특히 엑세서리는 백진주가 잘 어울려요. 존재감이 강하기 때문에 조금 무거운 코디도 상당히 고급스럽게 소화합니다. 반대로 러블리하고 너무 영한(young) 패션은 주의해주세요.",
  },
};
