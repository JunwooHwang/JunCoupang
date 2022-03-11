<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title>아이디 찾기</title>
	<link rel="stylesheet" href="resources/css/member/Search.css">
	<link rel="shortcut icon" href="//image9.coupangcdn.com/image/coupang/favicon/v2/favicon.ico" type="image/x-icon">
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	<script type="text/javascript" src="/resources/js/member/Search.js"></script>
</head>
<body>
	<div id="wrap">
		<header class="member-header">
			<div class="logo">
				<a href="/" class="logoLink">
					<img src="//static.coupangcdn.com/image/static/login/logo-coupang.x2.20201201.png" width="100%" height="100%" class="member-logo__img-fixer" alt="coupang">
				</a>
			</div>
		</header>

		<h1>계정정보 찾기</h1>
		<div id="Search">
			<div id="idSearch" class="current" data-tab="idSer">아이디 찾기</div>
			<div id="pwSearch" data-tab="pwSer">비밀번호 찾기</div>
		</div>

		<form id="idSer" class="tab-content current" action="/Search" method="post">
			<table>
				<tr class="idBox1">
					<th><label for="idUserName">이름</label></th>
					<td><input type="text" name="name" id="idUserName"
						placeholder="이름"></td>
				</tr>
				<tr class="idBox2">
					<th><label for="idUserEmail">이메일</label></th>
					<td><input type="email" name="email" id="idUserEmail"
						placeholder="이메일">
						<div id="idEmailCheck" class="waring"></div>
						<div id="idEmailNum">
							<input type="text" class="idEmailOK" placeholder="인증번호" disabled>
							<div class="idEmailBtn">인증번호 받기</div>
						</div>
						<div id="idEmailOkCheck" class="waring"></div></td>
				</tr>
			</table>
	
			<div class="Btn">
				<input type="submit" class="idSearchBtn" value="아이디 찾기">
			</div>
		</form>

		<form id="pwSer" class="tab-content die" action="/Search" method="post">
			<table>
				<tr class="pwBox1">
					<th><label for="pwUserName">이름</label></th>
					<td><input type="text" name="name" id="pwUserName"
						placeholder="이름"></td>
				</tr>
				<tr class="pwBox2">
					<th><label for="pwUserId">아이디</label></th>
					<td><input type="text" name="id" id="pwUserId" placeholder="아이디">
					</td>
				</tr>
				<tr class="pwBox3">
					<th><label for="pwUserEmail">이메일</label></th>
					<td><input type="email" name="email" id="pwUserEmail"
						placeholder="이메일">
						<div id="pwEmailCheck" class="waring"></div>
						<div id="pwEmailNum">
							<input type="text" class="pwEmailOK" placeholder="인증번호" disabled>
							<div class="pwEmailBtn">인증번호 받기</div>
						</div>
						<div id="emailOkCheck" class="waring"></div></td>
				</tr>
			</table>

			<div class="Btn">
				<input type="submit" class="pwSearchBtn" value="비밀번호 찾기">
			</div>
		</form>






	</div>
</body>
</html>