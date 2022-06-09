# 맛집지도 : 실시간 맛집 정보 공유 플랫폼

카카오맵 API와 실시간 채팅 기능을 통해 사용자들과 소통함으로써 맛집에 대한 정보를 얻을 수 있는 플랫폼입니다.

<div align="center">
    <img src="/uploads/6f062fddb950cee4e27b99e9f337ebbf/로고.png" width="300" height="300">
</div>

### 📚 STACKS

![node-16.14.2](https://img.shields.io/badge/Node-16.14.2-green)
![express-4.18.1](https://img.shields.io/badge/Express-4.18.1-green)
![html-latest](https://img.shields.io/badge/html-5.2-green)
![css-latest](https://img.shields.io/badge/css-3-green)

![nginx-latest](https://img.shields.io/badge/nginx-latest-blue)
![socket.io-latest](https://img.shields.io/badge/socket.io-latest-blue)
![AWS_EC2](https://img.shields.io/badge/AWS_EC2-blue)

![mysql-2.18.1](https://img.shields.io/badge/Mysql-2.18.1-yellowgreen)
![AWS_RDS](https://img.shields.io/badge/AWS_RDS-yellowgreen)

## About the Project

- 회원가입 및 로그인을 통해 사이트에 들어갈 수 있습니다.
- 메인 화면에서는 지역별 맛집정보를 파악할 수 있습니다.
- 실시간 채팅을 통해 타 유저들과 해당 음식점의 실시간 정보를 빠르게 공유할 수 있습니다.
- 다음의 주소를 통해 플랫폼 이용이 가능합니다.
  http://52.54.201.217:3000/login

### Overview

<div align="center">
    <img src="/uploads/4205b64858a27863e564579998ce0461/overview.png">
</div>

### Project Architecture

<div align="center">
    <img src="/uploads/af7ba588e17279d3f7713b5bf3662f66/아키텍처.png">
</div>

### Built With

- [node.js](https://nodejs.org/ko/)
- [express](https://expressjs.com/ko/)
- [AWS_EC2](https://aws.amazon.com/ko/)
- [AWS_RDS](https://aws.amazon.com/ko/)
- [socket.io](https://socket.io/)
- [nginx](https://www.nginx.com/)
- [mysql](https://www.mysql.com/)

## Getting Started ( Installation )

### Preparation

Need to write secret file

- favorite-restaurant/app/.env

```
#Database configuration
PORT=3000

DB_HOST = {YOUR_MYSQL_HOST}
DB_USER = {YOUR_MYSQL_USER}
DB_PASSWORD = {YOUR_MYSQL_PASSWORD}
DB_DATABASE = {YOUR_MYSQL_SCHEMA}
```

Need to fix kakaomap API key

- favorite-restaurant/app/src/view/home/index.ejs

```
#Line number 50
src="//dapi.kakao.com/v2/maps/sdk.js?appkey=이곳에API키를입력해주세요&libraries=services"

```

### Installation

Step1. Clone the repository

```
git clone -b master --single-branch http://khuhub.khu.ac.kr/2018100910/favorite_restaurant.git
```

Step2. Make secret file (.env) and put your Kakao API key

```
favorite-restaurant/app/.env
```

Step3. Installation

```
npm install
npm -g install nodemon
npm install express
npm install socket.io
npm install moment
npm install
```

Step4. Run

```
npm start
```

## Roadmap

- [x] 1. 로그인/회원가입 UI 및 기능 구현
- [x] 2. 맛집지도 UI 및 기능 구현
- [x] 3. socket.io를 이용한 실시간 채팅 구현
- [x] 4. AWS, Mysql을 이용한 데이터베이스 구축
- [x] 5. 서버 구축 및 배포

## Contributing

프로젝트에 기여하고 싶으신 분들은 아래 절차를 따라주시기 바랍니다.

1. 프로젝트 fork
2. feature branch 생성 (git checkout -b feature/name)
3. commit (git commit -m "Add feature")
4. push (git push origin feature/name)
5. pull request 생성

## License

MIT 라이센스 아래 사용 가능합니다. LICENSE.txt를 통해 자세한 정보를 확인하세요.

## Contact

- 서정민 : balljm@khu.ac.kr
- 양주미 : luckyyjm@khu.ac.kr
