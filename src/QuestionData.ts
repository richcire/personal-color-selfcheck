interface IAnswer {
  a: [string, number | string];
  b: [string, number | string];
}

interface IQuestion {
  Q: string;
  A: IAnswer;
}

interface IQuestions {
  1: IQuestion;
  2: IQuestion;
  3: IQuestion;
  4: IQuestion;
  5: IQuestion;
  6: IQuestion;
  7: IQuestion;
  8: IQuestion;
  9: IQuestion;
  10: IQuestion;
  11: IQuestion;
  12: IQuestion;
  13: IQuestion;
  14: IQuestion;
}

export const questions: IQuestions = {
  1: {
    Q: "당신의 피부색은 어떤가요?",
    A: {
      a: ["밝은 편이다", 2],
      b: ["어두운 편이다", 3],
    },
  },
  2: {
    Q: "당신의 눈동자 색은  어떤가요?",
    A: {
      a: ["밝은 편이다", 4],
      b: ["어두운 편이다", 3],
    },
  },
  3: {
    Q: "색조 화장을 할 때, 핑크와 코랄 중 어떤것이 더 잘 어울리나요?",
    A: {
      a: ["핑크색", 4],
      b: ["코랄색", 5],
    },
  },
  4: {
    Q: "검은 옷을 입었을 때는 어떤가요?",
    A: {
      a: ["이목구비가 뚜렷해보인다", 7],
      b: ["낯빛이 어두워보인다", 6],
    },
  },
  5: {
    Q: "당신에게 잘 어울리는 액세서리 컬러는?",
    A: {
      a: ["골드 제품", 8],
      b: ["실버 제품", 6],
    },
  },
  6: {
    Q: "차분한 색(황토색, 겨자색, 이끼색, 적갈색 등)이 잘 어울리나요?",
    A: {
      a: ["잘 어울린다", 8],
      b: ["잘 어울리지 않는다", 9],
    },
  },
  7: {
    Q: "눈썹의 진하기는 어떤가요?",
    A: {
      a: ["연한 편이다/보통이다", 8],
      b: ["진한 편이다", 10],
    },
  },
  8: {
    Q: "당신의 피부는 자외선에 노출되면 어떻게 되나요?",
    A: {
      a: ["잘 탄다", 9],
      b: ["잘 타지 않는다", 11],
    },
  },
  9: {
    Q: "당신의 이미지는?",
    A: {
      a: ["부드럽고 따뜻한 이미지", 12],
      b: ["강하고 차가운 이미지", 10],
    },
  },
  10: {
    Q: "잘 어울리는 색은 어느 쪽인가요?",
    A: {
      a: ["선명한 원색", 13],
      b: ["부드러운 파스텔 색", 14],
    },
  },
  11: {
    Q: "당신의 헤어 컬러는 어떤가요?",
    A: {
      a: ["진한 갈색, 진한 검정", 14],
      b: ["밝은 갈색, 부드러운 검정", 9],
    },
  },
  12: {
    Q: "명도와 채도가 높은 옷이 잘 어울리나요?",
    A: {
      a: ["그렇다", "springWarm"],
      b: ["그렇지 않다", "fallWarm"],
    },
  },
  13: {
    Q: "당신에게 잘 어울리는 스웨터 색은?",
    A: {
      a: ["노란 기가 있는 따뜻한 색", 12],
      b: ["푸른 기가 있는 차가운 색", "summerCool"],
    },
  },
  14: {
    Q: "당신이 어두운 색 정장을 입는다면 어울리는 색은?",
    A: {
      a: ["검정, 회색 계열", "winterCool"],
      b: ["다크브라운 계열", "fallWarm"],
    },
  },
};
