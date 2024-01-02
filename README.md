# SpringSecurityJWT-Local-OAuth2-EmailAuth-Redis

개발환경은 다음과 같습니다.

- Spring Boot : 2.5.6
- Spring Security : 5.6.0
- Gradle : 7.2
- Mysql : 8.0
- Querydsl : 4.4.0

Spring Security를 통해 로컬 로그인과 소셜 로그인을 구현하였습니다. (구글, 네이버, 카카오)

로그인은 JWT 토큰 방식으로 진행됩니다.

	토큰 유효기간 ( /auth_jwt_api/src/main/java/daeucna/Security/config/security/jwt/JwtTokenProvider.java )
	
		TOKEN_VALID_TIME = 1000L * 60 * 30; // 30분
		REFRESH_TOKEN_VALID_TIME = 1000L * 60 * 60 * 24 * 7; // 7일


추가적으로 로컬 회원가입 진행시 이메일 인증을 추가하여 이메일 인증시 로그인이 되도록 구현하였습니다.

[[Spring\] JWT, OAuth2.0, Email - Redis로 구현

# Swagger
- 연계
	/auth_jwt_api/src/main/java/daeucna/Security/config/SwaggerConfig.java
- http://localhost:8080/swagger-ui/index.html
- 인증 헤더 -  X-AUTH-TOKEN

# Project and External Depencies가 보이지 않을 경우
- build.gradle 아래 apply plugin: "eclipse" 추가
- /auth_jwt_api/settings.gradle : rootProject.name = 'auth_jwt_api'  확인
- gradlew cleanEclipse eclipse
- right-click the build.gradle file -> Gradle -> Refresh Dependencies.

# 실행
- radis 설치및 실행
- radis의 host와 port를 맞춘다
- app 실행
	이클립스 : boot
	커맨드 : /소스root/gradlew.bat bootRun

- 사용자 등록(/sign/register)
	SCM 테이블 members  에 등록되고
	email_auth => 1 (True) 로 변경하면 사용자 활성화 => Admin 기능으로 구현 필요
	

- 사용자 로그인(/sign/login) -> 사용자의 email_auth가 1(True)로 되어 있는 사용자만 로그인 가능


# 테스트 도구
- arc 설치
	https://github.com/advanced-rest-client/arc-electron/releases

- Swagger 페이지에서 테스트 파라미터 참조
	인증 헤더 = X-AUTH-TOKEN
	파라미터 = POST 전송 시 body 에 json 형태로
